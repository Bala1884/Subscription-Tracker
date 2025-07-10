# 📦 Subscription Tracker

A backend service to manage and track subscription-based services like Netflix, Prime, etc., built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT
- **Security**: Arcjet Middleware

---

## 📁 Project Structure

```
subscription-tracker/
├── config/
│   └── env.js
├── middlewares/
│   ├── arcjet.middleware.js
│   ├── auth.middleware.js
│   └── error.middleware.js
├── controllers/
│   ├── auth.controller.js
│   ├── subscription.controller.js
│   └── user.controller.js
├── database/
│   └── mongodb.js
├── models/
│   ├── subscription.model.js
│   └── user.model.js
├── routes/
│   ├── auth.routes.js
│   ├── subscription.routes.js
│   └── user.routes.js
├── .env.development.local
├── .env.production.local
├── .gitignore
├── app.js
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Features

- User authentication with JWT
- CRUD operations on subscriptions
- Subscription linked to a specific user
- Auto-calculate renewal date based on frequency
- Expire status auto-update if renewal date has passed
- Middleware-based route protection

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/subscription-tracker.git
cd subscription-tracker
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Configuration**

Create `.env.development.local` or `.env.production.local`:

```env
PORT=5500
NODE_ENV=development
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN='1d'
ARCJET_KEY=your_arcjet_key
ARCJET_ENV="development"
```

4. **Start the server**

```bash
npm run dev    # for development with nodemon
npm start      # for production
```

---

## 📡 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | `/auth/sign-up`  | Register a new user    |
| POST   | `/auth/sign-in`  | Login with credentials |
| POST   | `/auth/sign-out` | Logout user            |

### 📦 Subscription Routes

| Method | Endpoint                               | Description                     |
|--------|----------------------------------------|---------------------------------|
| GET    | `/subscriptions`                       | Get all subscriptions           |
| GET    | `/subscriptions/upcoming-renewals`     | Get subscriptions renewing soon |
| GET    | `/subscriptions/:id`                   | Get specific subscription       |
| GET    | `/subscriptions/user/:id`              | Get user subscriptions          |
| POST   | `/subscriptions`                       | Create a new subscription       |
| PUT    | `/subscriptions/:id`                   | Update a subscription           |
| PUT    | `/subscriptions/:id/cancel`            | Cancel a subscription           |
| DELETE | `/subscriptions/:id`                   | Delete a subscription           |

### 👤 User Routes

| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| GET    | `/users`        | Get all users     |
| GET    | `/users/:id`    | Get single user   |

---

## 📝 Sample Subscription Object

```json
{
  "name": "Netflix",
  "price": 499,
  "currency": "Rupee",
  "frequency": "monthly",
  "category": "entertainment",
  "paymentMethod": "Credit Card",
  "status": "active",
  "startDate": "2025-07-01",
  "user": "userObjectId"
}
```

---

## 🔐 Auth Middleware

Use the `Authorization` header with the value:  
```
Bearer <your_jwt_token>
```

---


