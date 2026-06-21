# TaskForge

TaskForge is a freelance micro-task marketplace where clients can post tasks, freelancers can submit proposals, and projects are completed through a secure hiring and payment workflow. The platform includes role-based dashboards for Clients, Freelancers, and Admins, along with Stripe payment integration and Google authentication.

## Live Links

### Live Website

https://taskforge-client.vercel.app

### Client Repository

https://github.com/masumgaibandha/taskforge-client

### Server Repository

https://github.com/masumgaibandha/taskforge-server

---

## Key Features

1. Role-Based Authentication (Client, Freelancer, Admin) using Better Auth.
2. Secure Stripe Checkout integration for hiring freelancers and processing payments.
3. Dynamic task marketplace with search and category filtering.
4. Admin dashboard for user management, task moderation, and transaction monitoring.
5. Google Authentication and protected private routes with middleware.

---

## Features

### Authentication

- Email & Password Login
- Google Authentication
- Better Auth Integration
- Protected Routes
- Role-Based Access Control
- Secure Session Management

### Client Features

- Create New Tasks
- Edit Tasks
- Delete Tasks
- View Posted Tasks
- Review Freelancer Proposals
- Hire Freelancers
- Stripe Payment Integration
- Payment History
- Profile Management

### Freelancer Features

- Browse Available Tasks
- Search and Filter Tasks
- View Task Details
- Submit Proposals
- Track Proposal Status
- View Earnings
- Profile Management

### Admin Features

- Dashboard Overview
- Manage Users
- Block/Unblock Users
- Manage Tasks
- Delete Tasks
- Transaction History
- Revenue Tracking

### Platform Features

- Featured Tasks Section
- Top Freelancers Section
- Dynamic Platform Statistics
- Responsive Design
- Loading State
- Error Page
- Custom 404 Page

---

## Technology Stack

### Frontend

- Next.js 16
- React 19
- JavaScript
- HeroUI
- Tailwind CSS
- Gravity UI Icons
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB

### Authentication

- Better Auth
- Google OAuth

### Payment Gateway

- Stripe Checkout

### Deployment

- Vercel (Client)
- Vercel (Server)

---

## NPM Packages

### Client

- next
- react
- react-dom
- better-auth
- @better-auth/mongo-adapter
- @heroui/react
- @heroui/styles
- @gravity-ui/icons
- react-hot-toast
- react-icons
- motion
- stripe
- @stripe/stripe-js

### Server

- express
- mongodb
- cors
- dotenv
- stripe

---

## Environment Variables

### Client (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_APP_URL=http://localhost:3000

BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Server (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## Installation

### Clone Client Repository

```bash
git clone https://github.com/masumgaibandha/taskforge-client.git
```

### Clone Server Repository

```bash
git clone https://github.com/masumgaibandha/taskforge-server.git
```

### Install Dependencies

Client:

```bash
npm install
```

Server:

```bash
npm install
```

### Run Client

```bash
npm run dev
```

### Run Server

```bash
node index.js
```

---

## Admin Credentials

```txt
Email: admin@taskforge.com
Password: Admin@123
```

---

## Project Structure

```txt
src/
├── app/
├── components/
├── lib/
│   ├── api/
│   ├── actions/
│   └── auth.js
├── middleware.js
└── assets/
```

---

## Author
Abdullah Masum
Portfolio: https://masumdev.com
