const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ 
        headless: 'new', 
        executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
    });
    const page = await browser.newPage();
    const filePath = 'file:///' + process.cwd().replace(/\\/g, '/') + '/index.html';
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    const viewports = [320, 360, 375, 390];
    
    for (const width of viewports) {
        await page.setViewport({ width, height: 800 });
        await new Promise(r => setTimeout(r, 500)); // let layout settle
        
        console.log(`\n--- Viewport Width: ${width}px ---`);
        const data = await page.evaluate(() => {
            const vw = window.innerWidth;
            const scrollW = document.documentElement.scrollWidth;
            const result = {
                viewportWidth: vw,
                scrollWidth: scrollW,
                overflowingElements: []
            };
            
            const allElements = document.querySelectorAll('*');
            allElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > vw) {
                    let selector = el.tagName.toLowerCase();
                    if (el.id) selector += '#' + el.id;
                    if (el.className && typeof el.className === 'string') selector += '.' + el.className.split(' ').filter(Boolean).join('.');
                    
                    let extraInfo = '';
                    if (selector.includes('hero-left')) {
                        const style = window.getComputedStyle(el);
                        extraInfo = `[flex=${style.flex}, grid-col=${style.gridColumn}, minW=${style.minWidth}, width=${style.width}, padding=${style.padding}]`;
                    }
                    if (selector.includes('hero-tagline')) {
                        const style = window.getComputedStyle(el);
                        extraInfo = `[margin=${style.margin}, width=${style.width}, white-space=${style.whiteSpace}]`;
                    }

                    result.overflowingElements.push({
                        selector,
                        width: rect.width,
                        right: rect.right,
                        extraInfo
                    });
                }
            });
            // Filter to find the root causes (elements that are themselves wide)
            return result;
        });
        
        console.log(`Document scrollWidth: ${data.scrollWidth}`);
        if (data.scrollWidth > width) {
            // Find elements that actually exceed viewport width
            const wideElements = data.overflowingElements.filter(e => e.width >= data.scrollWidth - 1 || e.right >= data.scrollWidth - 1);
            console.log("Elements pushing bounds:");
            wideElements.forEach(e => {
                console.log(`- ${e.selector}: width=${e.width}, right=${e.right} ${e.extraInfo || ''}`);
            });
        } else {
            console.log("No overflow.");
        }
    }
    await browser.close();
})();
