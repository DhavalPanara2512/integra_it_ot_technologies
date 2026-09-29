# Integra IT-OT Technologies

Official web platform for **Integra IT-OT Technologies**, bridging operational technology with enterprise intelligence.

---

## 🏗️ Architecture Overview

```
                          GITHUB REPOSITORY
                                  │
                       ┌──────────┴──────────┐
                       ▼                     ▼
             VERCEL FRONTEND         RENDER BACKEND
             (React + Vite)            (FastAPI)
                       │                     │
                       │────── HTTPS ────────│
                                             │
                                             ▼
                                        AIVEN MYSQL
                                       (Cloud MySQL)
                                             │
                                             ▼
                                     Contact Inquiries
```

- **Frontend**: React (Vite, Tailwind CSS, Framer Motion / Custom Animations)
- **Backend**: Python (FastAPI, SQLAlchemy, PyMySQL, Uvicorn)
- **Database**: Cloud MySQL (Aiven MySQL / MySQL 8.0)

---

## 💻 Local Development Setup

### 1. Database Setup (MySQL)
Run the SQL script located at `database/schema.sql` on your local MySQL server:
```sql
CREATE DATABASE IF NOT EXISTS integra_ot;
USE integra_ot;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(150) NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Backend Setup (FastAPI)
```bash
cd backend
python -m venv venv

# Windows PowerShell / CMD:
venv\Scripts\activate

# Linux / macOS:
source venv/bin/activate

pip install -r requirements.txt
copy .env.example .env

# Start FastAPI server
uvicorn app.main:app --reload --port 8000
```
- API Server: `http://localhost:8000`
- Interactive API Docs: `http://localhost:8000/docs`
- Health Endpoint: `http://localhost:8000/api/health`

### 3. Frontend Setup (React + Vite)
```bash
cd frontend
npm install
copy .env.example .env

# Start Vite dev server
npm run dev
```
- Frontend UI: `http://localhost:5173`

---

## 🚀 Free Deployment Guide

### A. Aiven Cloud MySQL Database Setup
1. Create a free account at [Aiven.io](https://aiven.io/).
2. Create a new **Aiven for MySQL** service (free tier available).
3. Connect via Aiven Console query editor or your local MySQL client (MySQL Workbench / DBeaver / TablePlus / phpMyAdmin) and run the script in `database/schema.sql`.
4. Copy the connection URI from Aiven (e.g. `mysql+pymysql://avnadmin:password@host:port/defaultdb?ssl_ca=...` or standard MySQL format).

---

### B. Backend Deployment on Render
1. Sign in to [Render.com](https://render.com/).
2. Create a **New Web Service** and connect your GitHub repository `integra_it_ot_technologies`.
3. Configure the settings:
   - **Root Directory**: `backend`
   - **Environment**: `Python`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Add Environment Variables under **Environment**:
   - `DATABASE_URL`: `mysql+pymysql://<username>:<password>@<aiven-host>:<port>/<dbname>`
   - `FRONTEND_URL`: `https://<your-vercel-app>.vercel.app`
   - `APP_ENV`: `production`
5. Click **Deploy Web Service** and note your Render URL (e.g., `https://integra-backend.onrender.com`).

---

### C. Frontend Deployment on Vercel
1. Sign in to [Vercel.com](https://vercel.com/).
2. Click **Add New Project** and import your GitHub repository.
3. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Environment Variables:
   - `VITE_API_URL`: `https://<your-render-backend-url>.onrender.com`
5. Click **Deploy**. Vercel will handle single-page app (SPA) routing using `frontend/vercel.json`.

---

## 🔒 Security Policy
- Secrets, database credentials, and production URLs are **NEVER** committed to Git.
- All environment-specific variables are loaded dynamically from `.env` files in local development and platform environment dashboards in production.
