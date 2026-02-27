# 🚗 GoWheels — Car Rental Website

A modern car rental web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Browse car catalogues, search by model, view detailed specs, and book rentals — all in a clean, responsive interface.

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)

---

## ✨ Features

- **Car Catalogue** — Browse cars fetched live from the API Ninjas Cars API
- **Search** — Search for any car model and get instant results
- **Dynamic Pricing** — Rental prices calculated based on vehicle luxury tier (year, cylinders, displacement, class)
- **Car Details Modal** — View full specs for any car in a polished modal
- **Rent Now Flow** — Select rental days, enter your name, and confirm booking with a fare summary
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop

## 🛠️ Tech Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| **Next.js 14**   | React framework with SSR          |
| **TypeScript**   | Type-safe development             |
| **Tailwind CSS** | Utility-first styling             |
| **Headless UI**  | Accessible modals and transitions |
| **API Ninjas**   | Car data API via RapidAPI         |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/Muhammad-Ahmed94/GoWheels.git
cd GoWheels
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_RAPID_API_KEY=your_rapidapi_key_here
```

Get your API key from [API Ninjas - Cars API](https://rapidapi.com/apininjas/api/cars-by-api-ninjas) on RapidAPI.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
GoWheels/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout (Navbar + Footer)
│   └── page.tsx           # Home page
├── components/
│   ├── CarCard.tsx        # Car card with pricing & specs
│   ├── CarDetails.tsx     # Car details modal
│   ├── CarsSection.tsx    # Search bar + car grid
│   ├── CustomButton.tsx   # Reusable button
│   ├── Footer.tsx         # Footer with links
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation bar
│   └── RentModal.tsx      # Rental booking modal
├── utils/
│   └── index.ts           # API fetch + pricing logic
├── types/
│   └── index.ts           # TypeScript interfaces
└── constants/
    └── index.ts           # Footer links data
```

## 📄 License

This project is for educational purposes.
