# 🔐 React Password Generator

This is a simple **Password Generator** app built with **React** and **Vite**. It allows users to generate strong, customizable passwords with options for length, numbers, and special characters. It also includes a one-click feature to copy the password to your clipboard.

## 🚀 Features

- ✅ Generate secure random passwords
- 🔢 Option to include numbers
- 🔣 Option to include special characters
- 📏 Adjustable password length (3 to 20)
- 📋 One-click copy to clipboard
- 🎨 Tailwind CSS-styled UI

## 🌐 Live Demo

👉 [https://password-generator-yd4m.vercel.app/](https://password-generator-yd4m.vercel.app/)

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📁 File Structure

├── public/
├── src/
│ ├── App.jsx # Core password generator logic
│ ├── App.css # Custom styles
│ └── main.jsx # App entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md

## 💻 How It Works

- Uses React `useState` to manage options like length, numbers, and special characters
- Uses `useEffect` to regenerate password on changes
- Uses `useRef` to copy password to clipboard
- Generates random passwords based on the user's selected criteria

## 📦 Getting Started

### 1. Install dependencies

```bash
npm install

