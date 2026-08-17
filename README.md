# 🍽️ Brahmapurna Home Kitchen

A full-stack food ordering and restaurant management web application built using the **MERN Stack** — MongoDB, Express.js, React.js, and Node.js.

Brahmapurna Home Kitchen is designed to provide a simple, attractive, and user-friendly platform for customers to explore homemade Maharashtrian food, view the menu, add items to their cart, place orders, and contact the kitchen for catering and custom orders.

---

## 📌 Project Overview

**Brahmapurna Home Kitchen** is a MERN-based food ordering application inspired by a traditional Maharashtrian homemade-food menu.

The application will provide two major parts:

* **Customer Frontend** — Browse food, view details, manage cart, and place orders.
* **Backend API** — Manage food items, customers, orders, authentication, and database operations.
* **Admin Dashboard** — Manage menu items and customer orders.

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* React Router
* Axios
* React Icons
* ESLint

### Backend

* Node.js
* Express.js
* REST API
* Mongoose
* CORS
* dotenv

### Database

* MongoDB
* MongoDB Atlas

### Development Tools

* Visual Studio Code
* Git
* GitHub
* npm
* Postman

### Future Technologies

* JWT Authentication
* bcrypt
* Cloudinary
* Payment Gateway
* Deployment using Vercel and Render/Railway

---

## 📁 Project Structure

```text
Brahmapurna-Home-Kitchen/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

## ✨ Planned Features

### 👨‍🍳 Customer Features

* Browse homemade food menu
* View food categories
* View food details
* View food prices
* Add food items to cart
* Increase/decrease quantity
* Remove items from cart
* Calculate order total
* Checkout
* Place food orders
* View order confirmation
* Contact kitchen
* Catering/custom order requests
* Mobile responsive design

### 🔐 Authentication

* Customer registration
* Customer login
* Admin login
* JWT-based authentication
* Protected admin routes
* Password hashing

### 🧑‍💼 Admin Features

* Admin dashboard
* Add food items
* Edit food items
* Delete food items
* Manage food categories
* Update food availability
* View customer orders
* Update order status
* Manage menu prices

---

## 🍛 Food Categories

The application will support categories such as:

* Puranpoli
* Ukadiche Modak
* Maharashtrian Thali
* Lunch & Dinner
* Snacks
* Breakfast
* Combos
* Special Items
* Catering & Custom Orders

---

## 🔌 API Structure

The backend will expose REST APIs such as:

### Food APIs

```text
GET     /api/foods
GET     /api/foods/:id
POST    /api/foods
PUT     /api/foods/:id
DELETE  /api/foods/:id
```

### Order APIs

```text
POST    /api/orders
GET     /api/orders
GET     /api/orders/:id
PUT     /api/orders/:id
```

### Authentication APIs

```text
POST    /api/auth/register
POST    /api/auth/login
```

These endpoints will be expanded as the application develops.

---

## 🗄️ Database Models

The application will use MongoDB with Mongoose.

### Food

```text
Food
├── name
├── category
├── description
├── price
├── image
└── available
```

### Order

```text
Order
├── customer
├── items
├── totalAmount
├── deliveryAddress
├── paymentStatus
├── orderStatus
└── createdAt
```

### User

```text
User
├── name
├── email
├── password
└── role
```

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* MongoDB Atlas account

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

---

## 📥 Installation

Clone the repository:

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

Move into the project:

```bash
cd Brahmapurna-Home-Kitchen
```

---

## 🎨 Frontend Setup

Open the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

## ⚙️ Backend Setup

Open a new terminal and navigate to:

```bash
cd Brahmapurna-Home-Kitchen/backend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Do **not** commit `.env` to GitHub.

The `.gitignore` file is configured to prevent environment files and sensitive information from being tracked.

---

## 🔄 Application Architecture

```text
                    Customer
                       │
                       ▼
              ┌─────────────────┐
              │ React Frontend  │
              │    Vite         │
              └────────┬────────┘
                       │
                     Axios
                       │
                       ▼
              ┌─────────────────┐
              │ Express REST API│
              │    Node.js      │
              └────────┬────────┘
                       │
                    Mongoose
                       │
                       ▼
              ┌─────────────────┐
              │    MongoDB      │
              │     Atlas       │
              └─────────────────┘
                       ▲
                       │
              ┌────────┴────────┐
              │ Admin Dashboard │
              └─────────────────┘
```

---

## 🛒 Order Flow

```text
Browse Menu
     ↓
Select Food
     ↓
Add to Cart
     ↓
Review Cart
     ↓
Checkout
     ↓
Enter Customer Details
     ↓
Place Order
     ↓
Backend API
     ↓
MongoDB
     ↓
Order Confirmation
```

---

## 🎨 Design

The website design is inspired by the traditional homemade-food identity of Brahmapurna Home Kitchen.

The UI will focus on:

* Maharashtrian food aesthetics
* Warm and welcoming colors
* Simple navigation
* Food-focused cards
* Clear pricing
* Responsive design
* Easy ordering experience

---

## 📱 Responsive Design

The application will be optimized for:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

---

## 🔒 Security

Planned security features include:

* Password hashing
* JWT authentication
* Protected admin routes
* Environment variables
* Input validation
* CORS configuration
* Secure API handling
* Error handling

---

## 📸 Screenshots

Screenshots will be added after the main UI is completed.

```text
Coming Soon
```

---

## 🗺️ Development Roadmap

### Phase 1 — Project Setup

* [x] Create frontend
* [x] Create backend
* [x] Configure React + Vite
* [x] Configure Express
* [x] Configure ESLint
* [ ] Configure GitHub repository
* [ ] Create project `.gitignore`

### Phase 2 — Backend

* [ ] Backend folder architecture
* [ ] MongoDB Atlas connection
* [ ] Food model
* [ ] Order model
* [ ] User model
* [ ] Food APIs
* [ ] Order APIs
* [ ] Authentication APIs

### Phase 3 — Frontend

* [ ] Navbar
* [ ] Hero section
* [ ] Food categories
* [ ] Food cards
* [ ] Menu page
* [ ] About section
* [ ] Gallery
* [ ] Catering section
* [ ] Footer

### Phase 4 — Ordering

* [ ] Cart
* [ ] Quantity management
* [ ] Checkout
* [ ] Order placement
* [ ] Order confirmation

### Phase 5 — Admin

* [ ] Admin authentication
* [ ] Dashboard
* [ ] Food management
* [ ] Category management
* [ ] Order management
* [ ] Order status management

### Phase 6 — Deployment

* [ ] Production environment variables
* [ ] Frontend deployment
* [ ] Backend deployment
* [ ] MongoDB Atlas production setup
* [ ] Final testing

---

## 👩‍💻 Developer

**Sanika Shetye**

MCA — Finolex Academy of Management and Technology

Interested in:

* MERN Stack Development
* React.js
* Node.js
* Python
* AI/ML
* Computer Vision

---

## 📄 License

This project is developed for educational, portfolio, and project-development purposes.

---

## ⭐ Future Improvements

Future versions may include:

* Online payment integration
* WhatsApp order notifications
* Email notifications
* Customer reviews
* Wishlist
* Coupon system
* Delivery tracking
* Order history
* Analytics dashboard
* Cloud image storage
* Progressive Web App support

---

**Brahmapurna Home Kitchen — Homemade Taste, Made with Love ❤️**
