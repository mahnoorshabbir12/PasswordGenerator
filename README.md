# 🔐 React Password Generator

This is a simple **Password Generator** app built with **React**. It allows users to generate strong, customizable passwords with options for length, numbers, and special characters. The app also includes a feature to copy the password directly to the clipboard.

## 🚀 Features

- ✅ Generate secure random passwords
- 🔢 Toggle inclusion of numbers
- 🔣 Toggle inclusion of special characters
- 📏 Adjustable password length (3 to 20)
- 📋 One-click copy to clipboard
- 🎨 Tailwind CSS-styled UI

## 🌐 Live Demo

👉 [Try the App Here](https://mahnoorshabbir12.github.io/PasswordGenerator/)

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📁 File Structure


## 💻 How It Works

- Uses `useState` to manage:
  - Password length
  - Inclusion of numbers and characters
  - Generated password
- Uses `useEffect` to automatically generate a password when inputs change
- Uses `useRef` to select the password field for clipboard copy
- Password is generated from:
  - Base alphabet: A-Z, a-z
  - Optional digits: 0-9
  - Optional special characters: `!@#$%^&*()+{}|?<>~`

## 📦 Getting Started

### 1. Install dependencies

```bash
npm install
