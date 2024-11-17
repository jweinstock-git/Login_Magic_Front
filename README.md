# Magic Link Authentication Frontend

This is a React-based frontend application for testing the Magic Link authentication system. It integrates with a FastAPI backend to request and verify magic links, manage JWTs, and access protected resources.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App Locally](#running-the-app-locally)
- [Deployment](#deployment)
  - [Deploying to Vercel](#deploying-to-vercel)
- [How It Works](#how-it-works)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Overview

This application provides a user-friendly interface to:
1. Request a magic link to log in via email.
2. Verify the magic link token received in the email.
3. Access a protected resource after successful authentication.

The frontend communicates with a FastAPI backend that handles the authentication logic, including generating and verifying magic links and JWTs.

---

## Features

- **Magic Link Login**: Users can log in without a password by receiving a unique link via email.
- **JWT Management**: Tokens are securely stored in HTTP-only cookies.
- **Protected Resource Access**: Authenticated users can access restricted resources.
- **React Router Integration**: Navigation between different views.

---

## Technologies Used

- **Frontend**: React, Axios, React Router DOM
- **Backend**: FastAPI (integration expected)
- **Deployment**: Vercel (for frontend), AWS SES or SendGrid (email service in backend)

---

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Git
- A running instance of the [FastAPI backend](#api-endpoints).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/magic-link-frontend.git
   cd magic-link-frontend

2. Install dependencies:

   npm install

3. Configure the API Base URL:

    - Create a .env file in the root directory.
    - Add the following:

    REACT_APP_API_BASE_URL=http://localhost:8000

4. Start the development server:

    npm start

5. Running the App Locally: 

    - Visit http://localhost:3000 in your browser.
    - Enter your email to request a magic link.
    - Open your email and click the link to log in.
    - Test accessing the protected resource.


