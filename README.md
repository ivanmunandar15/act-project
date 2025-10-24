
# 🧪 PT Anindya Certification Testing – Laboratory Dashboard

A **Next.js** application built for **PT Anindya Certification Testing**, providing an integrated dashboard system for managing laboratory operations such as **inventory**, **loans**, **environmental monitoring**, and **tool barcode scanning**.

---

## 🚀 Project Overview

This web application serves as an internal management and tracking tool for laboratory operations.
It provides several key modules to enhance efficiency and traceability:

* **Dashboard** – Display key metrics and summaries.
* **Inventory** – Manage laboratory tools and equipment data.
* **Loans** – Record and track equipment lending activities.
* **Monitoring** – Monitor environmental parameters such as temperature and humidity.
* **Scan** – *(New feature)* Barcode-based tool identification and loan management.

---

## 🧩 Tech Stack

| Category           | Technology                                                                    |
| ------------------ | ----------------------------------------------------------------------------- |
| Frontend Framework | [Next.js 14+ (App Router)](https://nextjs.org/)                               |
| UI Components      | [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/) |
| State Management   | React Hooks / Context API                                                     |
| Icons              | [lucide-react](https://lucide.dev/icons)                                      |

---

## 🧠 Core Features

### 🖥 Dashboard

* Displays quick stats from inventory, loans, and monitoring data.
* Uses **StatCard** components to visualize summary info.

### 📦 Inventory

* Lists all laboratory tools and their current status.
* Search and filter functionality.
* Built with reusable **Table** and **StatusBadge** components.

### 🔄 Loans

* Tracks borrowed tools and return dates.
* Integrates with the **Scan** module for automated barcode input.

### 🌡 Monitoring

* Displays environmental conditions such as **temperature** and **humidity**.
* Can be integrated with real sensor data (ESP32 + humidity sensors).

### 📷 Scan

* Uses **BarcodeScanner** (Webcam-based) for tool identification.
* Displays **ToolDetailModal** and **LoanFormModal** dynamically.
* Future-ready for integration with **real-time inventory validation**.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ivanmunandar15/act-project.git
cd act-project
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Access the app at 👉 [http://localhost:3000](http://localhost:3000)

---

## 🧱 Development Notes

* The project currently uses **dummy data** stored in `/src/data/`.
* All pages are **server components** by default using **Next.js App Router**.
* **shadcn/ui** components can be customized via Tailwind theme extension.
* Barcode scanning uses the **MediaDevices.getUserMedia** API (browser-based).

---


## 👨‍💻 Contributors

**PT Anindya Certification Testing – Laboratory Systems Team**

---

## 📄 License

This project is for internal use at **PT Anindya Certification Testing**.
All rights reserved © 2025.

---