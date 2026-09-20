# 🌐 Ritwiz Choudhary — Cloud & DevOps Portfolio

A personal portfolio website designed to showcase my journey, projects, technical skills, education, achievements, and interests in **Cloud Technology, DevOps, and Information Security**.

The website is built with HTML, CSS, and JavaScript and includes interactive UI elements, a terminal-style interface, animated visual effects, technical skill sections, project information, and a downloadable resume.

The project is also containerized using **Docker and Nginx** for serving the static website.

---

## 📌 About the Project

This portfolio was created to provide a central place to present my technical profile and projects while also demonstrating my practical experience with web development and containerized deployment.

The portfolio includes sections for:

* About
* Skills
* Projects
* Architecture
* Timeline
* Achievements
* Roadmap
* Blog
* Contact
* Resume

---

## ✨ Features

### 🎨 Interactive Portfolio UI

* Responsive portfolio interface
* Dark cloud/security themed design
* Glassmorphism-style components
* Animated background
* Interactive navigation
* Mobile navigation menu
* Interactive skill cards

### 💻 Interactive Terminal

The portfolio includes a simulated terminal interface where visitors can interact with predefined commands.

### 🌌 Three.js Visual Effects

Three.js is loaded from a CDN and is used for the animated background experience.

### 📊 Demo Dashboard

The portfolio contains a dashboard-style section displaying simulated system and security information.

**Important:** The telemetry displayed on the website is explicitly implemented as demo data; it should not be interpreted as a live connection to AWS, Docker, Kubernetes, or other infrastructure.

### 📄 Resume

A PDF resume is included in the repository and is also made available through the portfolio interface.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Three.js

### Containerization & Web Serving

* Docker
* Nginx Alpine

### Development

* Git
* GitHub
* Node.js / npm

The repository currently includes Puppeteer as an npm dependency.

---

## 🏗️ Deployment Architecture

The current containerized deployment is intentionally simple:

```text
                 ┌─────────────────┐
                 │      User       │
                 │   Web Browser   │
                 └────────┬────────┘
                          │
                          │ HTTP
                          ▼
                 ┌─────────────────┐
                 │ Docker Container│
                 │                 │
                 │  Nginx Alpine   │
                 │       │         │
                 │       ▼         │
                 │ Static Website  │
                 └─────────────────┘
```

The Docker image uses `nginx:alpine` as its base image. The website files and resume are copied into Nginx's web directory, and port `80` is exposed.

---

## 📂 Project Structure

```text
Portfolio_project/
│
├── backup_v1/
├── backup_v2/
│
├── .dockerignore
├── .gitignore
├── Dockerfile
│
├── index.html
├── style.css
├── script.js
│
├── check.js
│
├── package.json
├── package-lock.json
│
└── Ritwiz Resume 2026.pdf
```

This structure is based on the current repository contents.

---

## 🐳 Run With Docker

### 1. Clone the repository

```bash
git clone https://github.com/Ritwiz18/Portfolio_project.git
cd Portfolio_project
```

### 2. Build the Docker image

```bash
docker build -t ritwiz-portfolio .
```

### 3. Run the container

```bash
docker run -d -p 8080:80 --name ritwiz-portfolio ritwiz-portfolio
```

### 4. Open the portfolio

Open:

```text
http://localhost:8080
```

The container serves the static website through Nginx on port `80`, mapped to port `8080` on the host.

### 5. Check the container

```bash
docker ps
```

### 6. Stop the container

```bash
docker stop ritwiz-portfolio
```

### 7. Remove the container

```bash
docker rm ritwiz-portfolio
```

---

## 💻 Run Locally

Because the project is primarily a static HTML/CSS/JavaScript website, it can also be served through a local HTTP server.

For example:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

---

## 📦 NPM Dependency

The repository contains a `package.json` with Puppeteer listed as a dependency:

```json
{
  "dependencies": {
    "puppeteer": "^25.5.0"
  }
}
```

If you need the Node dependency:

```bash
npm install
```

---

## 🔐 Security & Accuracy Note

Some sections of the portfolio present technical skills, infrastructure concepts, cloud services, and security information as part of the personal profile.

These sections are **portfolio content** and should not automatically be interpreted as infrastructure deployed by this repository.

The repository's actual deployment implementation documented here is:

```text
HTML
CSS
JavaScript
   ↓
Docker
   ↓
Nginx Alpine
   ↓
Static Website
```

This distinction keeps the project documentation technically accurate.

---

## 🚀 Future Improvements

Possible future improvements include:

* [ ] Automated CI/CD pipeline
* [ ] Cloud deployment
* [ ] Custom domain
* [ ] HTTPS
* [ ] Automated security scanning
* [ ] Docker image optimization
* [ ] Automated testing
* [ ] Infrastructure as Code
* [ ] Monitoring and logging
* [ ] Improved accessibility
* [ ] Further mobile UI improvements

These are **future improvements**, not features currently claimed as implemented by this repository.

---

## 📚 What I Learned

Through this project, I have practiced:

* Building a structured portfolio website
* HTML, CSS, and JavaScript development
* Interactive frontend design
* Git and GitHub version control
* Docker image creation
* Containerized static website deployment
* Nginx configuration for static content
* Basic project documentation

---

## 👨‍💻 Author

**Ritwiz Choudhary**

B.Tech — Cloud Technology and Information Security

GitHub:
https://github.com/Ritwiz18

---

## ⭐ Repository

If you find the project interesting, feel free to explore the repository and follow my journey through **Cloud, DevOps, and Information Security**.
