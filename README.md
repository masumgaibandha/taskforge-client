# TaskForge

TaskForge is a full-stack freelance micro-task marketplace where clients can post tasks, freelancers can submit proposals, and projects are completed through a secure hiring and payment workflow. The platform features role-based dashboards, Stripe payment integration, Google authentication, and an admin management system.

## Live Demo

**Live Website:** https://taskforge-client.vercel.app

**Client Repository:**
https://github.com/masumgaibandha/taskforge-client

**Server Repository:**
https://github.com/masumgaibandha/taskforge-server

---

## Key Features

### Authentication & Security

- Better Auth Integration
- Email & Password Authentication
- Google Authentication
- Secure Session Management
- Protected Routes
- Role-Based Access Control
- Blocked User Protection

### Client Features

- Create New Tasks
- Edit Tasks
- Delete Tasks
- View Posted Tasks
- Review Freelancer Proposals
- Hire Freelancers
- Secure Stripe Payment Integration
- Payment History
- Profile Management

### Freelancer Features

- Browse Available Tasks
- Search and Filter Tasks
- View Task Details
- Submit Proposals
- Track Proposal Status
- Active Projects Management
- Earnings Tracking
- Profile Management

### Admin Features

- Dashboard Overview
- Manage Users
- Block / Unblock Users
- Manage Tasks
- Delete Tasks
- Transaction History
- Revenue Tracking

### Platform Features

- Featured Tasks Section
- Top Freelancers Section
- Dynamic Platform Statistics
- Responsive Design
- Loading States
- Error Handling
- Custom 404 Page
- Pagination Support

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

## Demo Credentials

### Admin Account

```txt
Email: admin@taskforge.com
Password: Admin@123
```

### Client Account

```txt
Email: client@client.com
Password: Masum@123
```

### Freelancer Account

```txt
Email: freelancer@freelancer.com
Password: Masum@123
```

---

## Suggested Evaluation Workflow

1. Login as Client and create a new task.
2. Login as Freelancer and submit a proposal.
3. Login as Client and review proposals.
4. Hire a freelancer using Stripe Checkout.
5. Verify project status updates.
6. Login as Freelancer and review earnings and active projects.
7. Login as Admin and manage users, tasks, and transactions.

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

**Abdullah Masum**
Portfolio: https://masumdev.com
