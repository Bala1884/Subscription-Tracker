# 📦 Subscription Tracker

A web application to track all your subscriptions in one place. Easily manage, add, update, and delete subscriptions with renewal dates, prices, and more.

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Others**: REST API, JSON, dotenv

---

## 📁 Project Structure

```
subscription-tracker/
├── controllers/
│   └── subscriptionController.js
├── models/
│   └── subscription.js
├── routes/
│   └── subscriptionRoutes.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 🧩 Features

- Add new subscriptions (name, price, renewal date, category)
- View all subscriptions
- Edit or delete any subscription
- Sort or filter by category or next billing date
- Total monthly expense calculation

---

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/subscription-tracker.git
cd subscription-tracker
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. **Start the server**

```bash
npm run dev    # for development with nodemon
npm start      # for production
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/api/subscriptions` | Get all subscriptions      |
| POST   | `/api/subscriptions` | Add a new subscription     |
| PUT    | `/api/subscriptions/:id` | Update a subscription |
| DELETE | `/api/subscriptions/:id` | Delete a subscription |

---

## 📝 Sample Subscription Object

```json
{
  "name": "Netflix",
  "price": 499,
  "renewalDate": "2025-08-01",
  "category": "Entertainment"
}
```

---

## 📈 Future Improvements

- User authentication (JWT)
- Frontend integration (React/Next.js)
- Notification before renewal date (email/SMS)
- Export data as CSV

---

## 🙌 Author

Made with ❤️ by [Your Name]

---

## 📃 License

This project is licensed under the MIT License.
