# 🚀 Full Docker Deployment: React App + Prometheus + Grafana + cAdvisor + Node Exporter

This repository contains a **fully production-ready monitoring stack** that deploys:

✅ React Application (Vite/CRA build served by Nginx)  
✅ Prometheus – Metrics collection  
✅ Grafana – Dashboards  
✅ cAdvisor – Container resource monitoring  
✅ Node Exporter – Host-level metrics  

All services run through a **single docker-compose.yml**.

---

## 📂 Project Structure

monitoring-stack/
├─ app/ # React + Firebase project
│ ├─ Dockerfile
│ ├─ package.json
│ ├─ src/
│ └─ .env
├─ prometheus/
│ └─ prometheus.yml
└─ docker-compose.yml

yaml
Copy code

---

# 🛠️ 1. Prerequisites

Install the following:

### ✔ Docker Desktop  
Includes Docker Engine + Docker Compose

### ✔ Node.js LTS  
For local development (`npm install`, `npm run dev`)
---
