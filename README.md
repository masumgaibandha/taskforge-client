# TaskForge

**Programming Hero Assignment A10_CAT-011**

TaskForge is a full-stack freelance micro-task marketplace where clients can post tasks, freelancers can submit proposals, and projects are completed through a secure hiring and payment workflow. The platform includes role-based dashboards, Stripe payment integration, Google authentication, freelancer ratings, project management, and an admin control panel.

---

## Live Demo

**Live Website:**
https://taskforge-client.vercel.app

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
- Secure HTTP-Only Session Cookies
- Protected Routes
- Middleware Route Protection
- Role-Based Access Control
- Blocked User Protection

---

## Client Features

- Create New Tasks
- Edit Open Tasks
- Delete Open Tasks
- View Posted Tasks
- Review Freelancer Proposals
- Hire Freelancers
- Stripe Checkout Integration
- Payment History
- Mark Projects as Completed
- Submit Freelancer Reviews & Ratings
- Verify Freelancers
- Profile Management

---

## Freelancer Features

- Browse Available Tasks
- Automatic Search & Category Filtering
- View Task Details
- Submit Proposals
- Track Proposal Status
- Active Projects Management
- Submit Deliverables
- Earnings Tracking
- Public Freelancer Profile
- Review & Rating System
- Skills & Hourly Rate Management
- Profile Management

---

## Admin Features

- Dashboard Overview
- Manage Users
- Block / Unblock Users
- Manage Tasks
- Delete Tasks
- Transaction History
- Revenue Tracking
- Platform Statistics

---

## Platform Features

- Featured Tasks Section
- Top Freelancers Section
- Dynamic Platform Statistics
- Testimonials Section
- Responsive Design
- Loading States
- Error Handling
- Custom 404 Page
- Pagination Support
- Smooth Section Animations
- Latest Data First Sorting
- Mobile-Friendly Dashboard

---

## Additional Features

- Freelancer Review & Rating System
- Average Rating Calculation
- Completed Jobs Tracking
- Verified Freelancer Badge
- Automatic Search Filtering
- Automatic Category Filtering
- Proposal Duplicate Prevention
- Deliverable Submission Workflow
- Client Project Completion Workflow
- Public Freelancer Profile Page

---

## User Roles

### Client

- Create and manage tasks
- Review freelancer proposals
- Hire freelancers
- Make secure payments
- Complete projects
- Leave reviews and ratings

### Freelancer

- Browse available tasks
- Submit proposals
- Manage active projects
- Submit deliverables
- View earnings
- Build profile and ratings

### Admin

- Manage users
- Block and unblock users
- Manage tasks
- Monitor transactions
- View platform statistics

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
- Motion

### Backend

- Node.js
- Express.js
- MongoDB

### Database

- MongoDB Atlas

### Authentication & Authorization

- Better Auth
- Google OAuth
- Secure Session Cookies
- Middleware Protection
- Role-Based Dashboard Access

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
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_URL=

BETTER_AUTH_URL=
BETTER_AUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Server (.env)

```env
PORT=

MONGODB_URI=

STRIPE_SECRET_KEY=

CLIENT_URL=
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
6. Login as Freelancer and submit a deliverable.
7. Login as Client and mark the project as completed.
8. Submit a freelancer review and rating.
9. Verify freelancer rating and completed jobs update.
10. Login as Admin and verify transaction history.
11. Test search, filtering, and pagination.

---

## Assignment Requirements Completed

- Authentication & Authorization
- Role-Based Dashboards
- CRUD Operations
- Stripe Payment Integration
- Search & Filter
- Pagination
- Responsive Design
- Loading States
- Error Handling
- Protected Routes
- Dynamic Home Page Sections
- Freelancer Review System
- Admin Management System

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
Upwork and Fiverr: Top Rated Freelancer | $100K+ Earnings | 500+ Projects Completed
