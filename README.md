# 📝 To-Do List API with JWT Auth

API sederhana untuk manajemen to-do list dengan fitur register, login, serta autentikasi menggunakan JWT. Dibuat dengan Node.js, Express, MongoDB, dan Swagger.

## 🚀 Fitur

- Register & Login dengan JWT
- CRUD Todo (Create, Read, Update, Delete)
- Proteksi route dengan JWT Auth
- Dokumentasi API dengan Swagger

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (JSON Web Token)
- Swagger for API Docs

---

## 📦 Instalasi

```bash
git clone https://github.com/username/todo-api.git
cd todo-api
npm install
```

Buat file `.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
JWT_SECRET=your_jwt_secret
```

Jalankan project:

```bash
npm run dev
```

---

## 🔐 Autentikasi

Semua route `/todos` membutuhkan header:

```
Authorization: Bearer <token-dari-login>
```

---

## 📄 Endpoint

### 🔐 Auth

| Method | Endpoint         | Deskripsi           |
|--------|------------------|---------------------|
| POST   | /auth/register   | Register user       |
| POST   | /auth/login      | Login & dapat token |

### ✅ Todos (Auth Required)

| Method | Endpoint        | Deskripsi         |
|--------|-----------------|-------------------|
| GET    | /todos          | Ambil semua todo  |
| POST   | /todos          | Tambah todo baru  |
| PUT    | /todos/:id      | Update todo       |
| DELETE | /todos/:id      | Hapus todo        |

---

## 📚 Dokumentasi Swagger

Setelah server jalan, buka:

```
http://localhost:5000/api-docs
```

---

## 🧪 Contoh JSON Body

### Register & Login

```json
{
  "username": "rizqikevino",
  "password": "rahasia123"
}
```

### Tambah Todo

```json
{
  "title": "Belajar Swagger"
}
```

### Update Todo

```json
{
  "title": "Belajar Express",
  "completed": true
}
```

---
