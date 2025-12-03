# 🚀 Full Docker Deployment: React App + Prometheus + Grafana + cAdvisor + Node Exporter

This repository contains a **fully production-ready monitoring stack** that deploys:

* ✅ **React Application** (Vite/CRA build served via Nginx)
* ✅ **Prometheus** – Metrics collection
* ✅ **Grafana** – Dashboards
* ✅ **cAdvisor** – Container monitoring
* ✅ **Node Exporter** – Host system metrics

All services run through a **single `docker-compose.yml`**.

---

## 📂 Project Structure

```
monitoring-stack/
├─ app/                      # React + Firebase project
│  ├─ Dockerfile
│  ├─ package.json
│  ├─ src/
│  └─ .env
├─ prometheus/
│  └─ prometheus.yml
└─ docker-compose.yml
```

---

## 🛠️ 1. Prerequisites

Make sure the following are installed:

### ✔ Docker Desktop

Includes Docker Engine + Docker Compose.

### ✔ Node.js LTS

Required for local development (`npm install`, `npm run dev`).

---

## ▶️ 5. Deploy the Entire Stack

Run inside the project root directory:

```bash
docker compose up -d --build
```

Check running containers:

```bash
docker compose ps
```

Stop all services:

```bash
docker compose down
```

---

## 🌐 6. Access Services

| Service           | URL                                                            |
| ----------------- | -------------------------------------------------------------- |
| React Web App     | [http://localhost:3001](http://localhost:3001)                 |
| Prometheus UI     | [http://localhost:9090](http://localhost:9090)                 |
| Grafana Dashboard | [http://localhost:3002](http://localhost:3002)                 |
| cAdvisor          | [http://localhost:8080](http://localhost:8080)                 |
| Node Exporter     | [http://localhost:9100/metrics](http://localhost:9100/metrics) |

---

## 📈 7. Setup Grafana

Visit Grafana:

➡ **[http://localhost:3002](http://localhost:3002)**

Default login:

```
Username: admin
Password: admin
```

Add Prometheus as a Data Source:

```
URL: http://prometheus:9090
```

Now you can import dashboards or build your own visualizations.

---

## 🎯 8. Features

* 🚀 **Full monitoring stack** for development & production
* 📦 **Container-level monitoring** via cAdvisor
* 🖥 **Host system metrics** via Node Exporter
* 📊 **Grafana dashboards** for visualization
* 🧱 **React App fully dockerized** and served via Nginx
* 🎓 Perfect for **DevOps learning, cloud deployment, interviews, and portfolio projects**

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Pull requests are welcome!
Feel free to open issues, suggest improvements, or add features.

---
