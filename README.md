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

▶️ 5. Deploy the Entire Stack

Run inside project root:

docker compose up -d --build


Check running containers:

docker compose ps


Stop all services:

docker compose down

🌐 6. Access Services
Service	URL
React Web App	http://localhost:3001

Prometheus UI	http://localhost:9090

Grafana Dashboard	http://localhost:3002

cAdvisor	http://localhost:8080

Node Exporter Metrics	http://localhost:9100/metrics
📈 7. Setup Grafana

Go to:
➡ http://localhost:3002

Login:

Username: admin
Password: admin


Add Prometheus as Data Source:

URL: http://prometheus:9090


Now you can import dashboards or build your own.

🎯 8. Features

Full monitoring stack for development & production

Container-level monitoring via cAdvisor

System metrics via Node Exporter

Beautiful dashboards in Grafana

React App fully dockerized

Perfect for DevOps learning, cloud deployment, interviews, resume projects

📜 License

MIT License

🤝 Contributing

Pull requests are welcome!
Feel free to raise issues or suggest improvements.

### ✔ Git (optional)

---
