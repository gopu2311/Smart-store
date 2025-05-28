# 🛒 Smart-store

Smart-store is a scalable, containerized microservices-based billing and inventory management system for retail operations. It leverages Docker, Kubernetes, and Terraform to streamline development, deployment, and infrastructure provisioning.

---

## 📁 Project Structure

Smart-store/
├── Billing-Api/ # Backend API for billing operations
├── OverStore-master/ # Frontend application for the store
├── k8s/ # Kubernetes deployment configurations
├── terraform/ # Infrastructure provisioning scripts using Terraform
├── billing.sql # SQL schema for the billing database
├── docker-compose.yml # Local development setup using Docker Compose
└── README.md # Project documentation


---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Kubernetes](https://kubernetes.io/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Terraform](https://www.terraform.io/)
- [MySQL](https://www.mysql.com/)

---

### 🔧 Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/gopu2311/Smart-store.git
cd Smart-store

```
### 3.Run services with Docker Compose:

```bash
docker-compose up --build

-----
```
#### 4.Deploy with Kubernetes:
```bash
kubectl apply -f k8s/
```
5. Provision Cloud Infrastructure (Optional)
Navigate to the Terraform folder and initialize/apply your infrastructure setup:

```bash

cd terraform
terraform init
terraform apply
-----
Ensure your Terraform provider is configured correctly before running.

```
🧰 Features
🧾 Microservice-based architecture

📦 Docker containerization for backend and frontend

☸️ Kubernetes orchestration for scalable deployments

☁️ Infrastructure as Code using Terraform

📊 Billing management with SQL-backed database

🖥️ Responsive UI (frontend in OverStore-master)
```
🛠️ Built With
Component	Technology
Backend	Java / Spring Boot (Please confirm or update)
Frontend	HTML/CSS/JavaScript (Please confirm or update)
Database	MySQL
Container	Docker
Orchestration	Kubernetes
Provisioning	Terraform

You can update the backend and frontend stack names as needed.



