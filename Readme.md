# Smart News Search 🚀

A full-stack DevOps project that demonstrates complete CI/CD workflow using React, FastAPI, Docker, Jenkins, and Kubernetes on Azure AKS.

This project allows users to search and explore live news articles from across the web using a modern frontend and a scalable backend architecture.

---

# 🌐 Project Overview

Smart News Search is a web-based application that:

* Searches latest news articles from the internet
* Scrapes article content dynamically
* Displays structured news cards with summaries and links
* Uses Docker for containerization
* Uses Jenkins for CI/CD automation
* Uses Kubernetes (AKS) for deployment and scaling

The project was built as part of a DevOps assignment to understand the complete application deployment lifecycle.

---

# 🛠️ Technologies Used

## Frontend

* React.js
* Tailwind CSS
* Axios
* Vite
* Nginx

## Backend

* FastAPI
* Python
* DDGS (DuckDuckGo Search)
* Newspaper3k

## DevOps Tools

* Git & GitHub
* Docker
* Docker Compose
* Jenkins
* Kubernetes (AKS)
* DockerHub
* Microsoft Azure

---

# 📁 Project Structure

```bash
Smart-News-Search/
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── scraper.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── docker-compose.yml
├── deployment.yaml
├── backend-deployment.yaml
├── Jenkinsfile
└── README.md
```

---

# ⚙️ Features

* Dynamic news searching
* Web scraping and article extraction
* Responsive UI with Tailwind CSS
* Dockerized frontend and backend
* Automated CI/CD pipeline using Jenkins
* Kubernetes deployment on Azure AKS
* Publicly accessible application using LoadBalancer

---

# 🐳 Docker Setup

## Build and Run Containers

```bash
docker compose up --build
```

---

## Frontend Access

```text
http://localhost:3000
```

---

## Backend API Access

```text
http://localhost:8000/docs
```

---

# 📦 Docker Images

## Frontend Image

```bash
prashant11122/ai-news-frontend
```

## Backend Image

```bash
prashant11122/ai-news-backend
```

---

# ☸️ Kubernetes Deployment

The application is deployed using:

* Kubernetes Deployments
* Kubernetes Services
* Azure LoadBalancer

## Deploy Frontend

```bash
kubectl apply -f deployment.yaml
```

## Deploy Backend

```bash
kubectl apply -f backend-deployment.yaml
```

---

# 🔄 Jenkins CI/CD Pipeline

The Jenkins pipeline automates:

1. Cloning GitHub repository
2. Building Docker images
3. Logging into DockerHub
4. Pushing Docker images
5. Deploying application to AKS
6. Fetching public service IPs

---

# 🔐 Jenkins Credentials

DockerHub credentials were securely stored inside Jenkins using:

```text
Manage Jenkins
→ Credentials
→ System
→ Global Credentials
```

Credential Type:

* Username with password

---

# 🌍 Public Deployment

The application is exposed publicly using Kubernetes LoadBalancer services on Azure Kubernetes Service (AKS).

---

# 🚀 How the CI/CD Workflow Works

```text
Code Change
→ Push to GitHub
→ Jenkins Pipeline Trigger
→ Docker Image Build
→ Push to DockerHub
→ Kubernetes Deployment
→ Public Cloud Deployment
```

---

# 📚 Key DevOps Concepts Learned

* Containerization using Docker
* Multi-container orchestration using Docker Compose
* CI/CD pipeline automation using Jenkins
* Kubernetes deployments and services
* Azure AKS deployment workflow
* Docker image optimization
* Public cloud exposure using LoadBalancer
* Container networking concepts
* Image caching and rollout strategies

---

# 🧠 Challenges Faced

* Docker image size optimization
* Frontend-backend container networking
* Kubernetes image caching
* Jenkins pipeline debugging
* Managing LoadBalancer external IP provisioning

---

# 📌 Future Improvements

* Add AI-powered summarization
* Add authentication system
* Use Kubernetes Ingress
* Add HTTPS support
* Implement database storage
* Add real-time news updates

---

# 👨‍💻 Author

Prashant Kumar

DevOps Assignment Project – 2026

---

# 🎯 Final Outcome

Successfully built and deployed a complete cloud-native DevOps application using:

✅ GitHub
✅ Docker
✅ DockerHub
✅ Jenkins
✅ Kubernetes
✅ Azure AKS
✅ CI/CD Pipeline Automation
