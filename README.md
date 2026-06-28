# 📚 Smart Library API

A RESTful API for a **Smart Library Management System** built with **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**.

The system manages books, authors, publishers, members, membership cards, borrowing operations, course enrollment, and provides a scalable backend architecture with validation and centralized error handling.

---

# 📖 Project Description

The Smart Library API is designed to automate and simplify library management by allowing administrators to manage books, members, publishers, authors, borrowing records, membership cards, courses, and enrollments through RESTful API endpoints.

The system provides a structured backend that demonstrates best practices for Express applications using TypeScript and MongoDB.

---

# ✨ Features

## 📚 Book Management
- Create, update, delete and retrieve books
- Link books to authors and publishers
- Store book prices and availability

## 👤 Member Management
- Register library members
- Update and delete member information
- View all registered members

## 🪪 Membership Cards
- One membership card per member
- Track membership information

## 📖 Borrowing System
- Borrow books
- Return books
- Track borrowing history
- Prevent invalid borrowing operations

## ✍️ Author Management
- Manage library authors

## 🏢 Publisher Management
- Manage book publishers

## 🎓 Course Management
- Create library courses
- Enroll members into courses

## ✅ Validation
- Request validation using **Zod**
- Prevent invalid data from entering the database

## ⚠️ Error Handling
- Centralized error handling middleware
- Consistent JSON error responses

---

# 🛠 Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Zod
- Nodemon
- Postman
- Git & GitHub

---

# 📁 Project Structure

```
smart_library/
│
├── src
│   ├── models
│   │   ├── author.model.ts
│   │   ├── book.model.ts
│   │   ├── borrow.model.ts
│   │   ├── card.model.ts
│   │   ├── course.model.ts
│   │   ├── enrol.model.ts
│   │   ├── member.model.ts
│   │   └── publisher.model.ts
│   │
│   ├── routes
│   │   ├── author.routes.ts
│   │   ├── book.routes.ts
│   │   ├── borrow.routes.ts
│   │   ├── card.routes.ts
│   │   ├── course.routes.ts
│   │   ├── enrol.routes.ts
│   │   ├── member.routes.ts
│   │   └── publisher.routes.ts
│   │
│   ├── validators
│   │   ├── author.validator.ts
│   │   ├── book.validator.ts
│   │   ├── borrow.validator.ts
│   │   ├── card.validator.ts
│   │   ├── course.validator.ts
│   │   ├── enrol.validator.ts
│   │   ├── member.validator.ts
│   │   └── publish.validator.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🚀 Installation

## 1. Clone the repository

```bash
git clone https://github.com/yasser199560-lab/Smart-Library-API

cd smart_library
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Create Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 4. Run the project

Development

```bash
npm run dev
```

Production

```bash
npm run build

npm start
```

---

# 📡 API Endpoints

## 📚 Books

| Method | Endpoint | Description |
|----------|----------------|----------------|
| POST | /api/books | Create book |
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get single book |
| PUT | /api/books/:id | Update book |
| DELETE | /api/books/:id | Delete book |

---

## ✍️ Authors

| Method | Endpoint |
|----------|----------------|
| POST | /api/authors |
| GET | /api/authors |
| GET | /api/authors/:id |
| PUT | /api/authors/:id |
| DELETE | /api/authors/:id |

---

## 🏢 Publishers

| Method | Endpoint |
|----------|----------------|
| POST | /api/publishers |
| GET | /api/publishers |
| GET | /api/publishers/:id |
| PUT | /api/publishers/:id |
| DELETE | /api/publishers/:id |

---

## 👤 Members

| Method | Endpoint |
|----------|----------------|
| POST | /api/members |
| GET | /api/members |
| GET | /api/members/:id |
| PUT | /api/members/:id |
| DELETE | /api/members/:id |

---

## 🪪 Membership Cards

| Method | Endpoint |
|----------|----------------|
| POST | /api/cards |
| GET | /api/cards |
| GET | /api/cards/:id |
| PUT | /api/cards/:id |
| DELETE | /api/cards/:id |

---

## 📖 Borrowing

| Method | Endpoint |
|----------|----------------|
| POST | /api/borrow |
| GET | /api/borrow |
| GET | /api/borrow/:id |
| PUT | /api/borrow/:id |
| DELETE | /api/borrow/:id |

---

## 🎓 Courses

| Method | Endpoint |
|----------|----------------|
| POST | /api/courses |
| GET | /api/courses |
| GET | /api/courses/:id |
| PUT | /api/courses/:id |
| DELETE | /api/courses/:id |

---

## 📝 Enrollments

| Method | Endpoint |
|----------|----------------|
| POST | /api/enrollments |
| GET | /api/enrollments |
| GET | /api/enrollments/:id |
| PUT | /api/enrollments/:id |
| DELETE | /api/enrollments/:id |

---

# 📬 Testing

All endpoints were tested using **Postman**.

The project includes a Postman Collection that can be imported directly to test every endpoint.

---

# ⚠️ Error Handling

The API uses centralized error handling to provide consistent responses.

Features include:

- Global error middleware
- Validation error responses
- HTTP status codes
- JSON formatted error messages

---

# 📌 Future Improvements

- JWT Authentication
- Role-based Authorization
- Pagination
- Search & Filtering
- Swagger API Documentation
- Docker Support

---

# 👨‍💻 Developer

**Yasser Kayed**

Backend project developed using **Node.js**, **Express**, **TypeScript**, and **MongoDB** for learning REST API development and backend architecture.

---

# 📄 License

This project is intended for educational purposes and may be freely used for learning and development.