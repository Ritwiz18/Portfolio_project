# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the static web files to the Nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY ["Ritwiz Resume 2026.pdf", "/usr/share/nginx/html/"]
# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]