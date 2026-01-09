# 🍽️ JustRecipe – Recipe Discovery Web App

JustRecipe is a modern, responsive recipe discovery web application built using **React**, **Vite**, **Tailwind CSS**, and **DaisyUI**.  
It allows users to explore recipes from multiple cuisines, search intelligently, apply filters, and save their favorite recipes.

---

## ✨ Features

### 🔍 Smart Search
- Search recipes using keywords
- Matches against:
  - Recipe title
  - Cuisine
  - Ingredients
  - Tags
- Search state is stored in the URL (`?q=`), making it shareable and refresh-safe

---

### 🧭 Filters
- Veg / Non-Veg
- Breakfast, Snacks, Dessert
- High Protein
- Filters can be combined
- Clean and intuitive UI using DaisyUI button-style checkboxes

---

### ❤️ Favorites
- Mark recipes as favorites
- Favorites persist using `localStorage`
- Real-time UI updates using a custom event-based subscription system

---

### 📄 Pages
- Home
- All Recipes
- Recipe Details
- About
- 404 Not Found

---

### 🎨 UI & UX
- Responsive layout
- Consistent image sizing
- DaisyUI components
- Clean card-based design
- Accessible navigation

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS v4 + DaisyUI
- **Routing**: React Router DOM
- **State Management**:
  - React `useState` & `useEffect`
  - Custom event-based store for favorites
- **Persistence**: Browser `localStorage`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── AllRecipe.jsx
│   ├── RecipeDetails.jsx
│   ├── About.jsx
│   ├── NotFound.jsx
├── data/
│   └── recipes.js
├── utils/
│   └── favorites.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/justrecipe.git
cd justrecipe
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm run dev
```

Open your browser at:
```
http://localhost:5173
```

---

## 🧠 Key Concepts Used

- Controlled components
- URL-based state using `useSearchParams`
- Immutable state updates
- Custom event subscriptions
- Conditional filtering logic
- Component-based architecture

---

## 🔮 Future Enhancements

- User authentication
- Backend integration
- Ratings & reviews
- Pagination / infinite scroll
- Advanced dietary filters
- Dark mode toggle

---

## 👨‍💻 Author

Built with ❤️ by **Achinthya Krishna**
