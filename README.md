# E-commerce
This project is a backend system for a mock e-commerce application. It includes user authentication, product and cart management, order placement, and email notifications. The backend is built using **Node.js**, **Express.js**, **PostgreSQL**, and **Knex.js**.

## 🚀 Features

- 🔐 Secure User Authentication using JWT and Bcrypt
- 📦 Product Listings and Category Management
- 🛒 Cart Management (Add/Remove/View)
- 🧾 Order Creation and Status Updates
- 📧 Email Notifications using Nodemailer
- 💳 Payment Integration using Razorpay SDK *(in progress)*
- 🛠️ RESTful API structure with modular routing

---

## 📁 Project Structure

/ecommerce-backend
├── controllers/
├── routes/
├── models/
├── db/
│ ├── knexfile.js
│ └── migrations/
├── utils/
├── middlewares/
├── server.js
└── .env


## 🛠️ Tech Stack

| Layer            | Technology          |
|------------------|---------------------|
| Language         | JavaScript (Node.js) |
| Framework        | Express.js          |
| ORM/Query Builder| Knex.js             |
| Database         | PostgreSQL          |
| Auth             | JWT + Bcrypt        |
| Email            | Nodemailer          |


---

## 🧪 API Endpoints (Sample)

| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| POST   | `/api/register`        | Register a new user         |
| POST   | `/api/login`           | Login and receive token     |
| GET    | `/api/products`        | List all products           |
| POST   | `/api/cart`            | Add item to cart            |
| POST   | `/api/orders`          | Place an order              |

*Full documentation coming soon.*

---

## ⚙️ Setup & Run

1. **Clone the repo**
   ```bash
   git clone https://github.com/Garv-s/E-commerce.git
   cd E-commerce
Install dependencies

npm install
Configure environment
Create a .env file with the following:

DB_HOST=localhost
DB_USER=youruser
DB_PASSWORD=yourpassword
DB_NAME=ecommerce_db
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
Run migrations

npx knex migrate:latest
Start server
nodemon index.js
