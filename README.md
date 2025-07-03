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
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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

Create map:
```bash
kubectl create configmap billing-init-script --from-file=billing.sql
```
```bash
kubectl apply -f k8s/
```
### 5. Provision Cloud Infrastructure

Navigate to the Terraform folder and initialize/apply your infrastructure setup:

```bash

cd terraform
terraform init
terraform apply
-----
Ensure your Terraform provider is configured correctly before running.

```

----

**🧰 Features
**
🧾 Microservice-based architecture

📦 Docker containerization for backend and frontend

☸️ Kubernetes orchestration for scalable deployments

☁️ Infrastructure as Code using Terraform

📊 Billing management with SQL-backed database

🖥️ Responsive UI (frontend in OverStore-master)

----

**🛠️ Built With**

Component	Technology

Backend	Java / Spring Boot

Frontend	HTML/CSS/JavaScript

Database	MySQL

Container	Docker

Orchestration	Kubernetes

Provisioning	Terraform



