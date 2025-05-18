# 🏋️‍♂️ Gymme Landing Page

Welcome to **Gymme** – a modern, animated, and fully responsive gym landing page built with React and Tailwind CSS!

---

## ✨ Features

- **Animated Scroll Effects**  
  Smooth, eye-catching animations as you scroll, powered by [AOS](https://michalsnik.github.io/aos/).

- **Interactive Sliders**  
  Showcase workouts and community testimonials with swipeable, touch-friendly carousels using [Swiper](https://swiperjs.com/).

- **Responsive Design**  
  Looks great on all devices, from mobile to desktop, thanks to [Tailwind CSS](https://tailwindcss.com/).

- **Modular Components**  
  Clean, reusable React components for each section: Header, Banner, About, Workouts, Pricing, Community, FAQ, Join, and Footer.

- **Centralized Data**  
  All content (text, images, plans, testimonials) is managed in a single `data.js` file for easy updates.

- **Mobile Navigation**  
  Hamburger menu and smooth transitions for mobile users.

- **Customizable Pricing Plans**  
  Interactive pricing cards with highlight and selection effects.

- **FAQ Accordion**  
  Expandable/collapsible FAQ section for common questions.

- **Easy Deployment**  
  Deploy to GitHub Pages with a single command using [gh-pages](https://www.npmjs.com/package/gh-pages).

---

## 🚀 Packages Used

| Package         | Purpose                                                                 |
|-----------------|------------------------------------------------------------------------|
| **react**       | Core library for building user interfaces                               |
| **react-dom**   | DOM bindings for React                                                  |
| **react-icons** | Scalable vector icons for React                                         |
| **aos**         | Animate On Scroll – triggers animations as elements enter the viewport  |
| **swiper**      | Modern slider/carousel library with touch support                       |
| **tailwindcss** | Utility-first CSS framework for rapid UI development                    |
| **autoprefixer**| Adds vendor prefixes to CSS for cross-browser compatibility             |
| **postcss**     | CSS processing toolchain (used with Tailwind and Autoprefixer)          |
| **gh-pages**    | Deploys the build folder to GitHub Pages                               |

---

## 🖼️ Project Structure


gym-website-main/ ├── public/ │ └── index.html ├── src/ │ ├── assets/ # Images and icons │ ├── components/ # All React components │ ├── data.js # Centralized static content │ ├── App.jsx # Main app layout │ ├── index.js # Entry point │ ├── index.css # Tailwind & custom styles │ └── workoutSlider.css # Swiper custom styles ├── tailwind.config.js # Tailwind configuration ├── postcss.config.js # PostCSS configuration ├── package.json # Project dependencies & scripts └── README.md # This file!

---

## 🏗️ How It Works

- **Animations:**  
  Elements use `data-aos` attributes to trigger fade, slide, and zoom effects as you scroll.

- **Sliders:**  
  Workouts and testimonials are displayed in Swiper carousels, fully responsive and touch-enabled.

- **Styling:**  
  Tailwind CSS utility classes ensure a consistent, modern look across all sections.

- **Content Management:**  
  All text, images, and lists are imported from `src/data.js` for easy editing.

---

## 📦 Getting Started

1. **Install dependencies:**
   ```bash```
   ```npm install```

2. **Run locally:**
    ```npm start```

3. **Build for production:**
    ```npm run build```

4. **Deploy to GitHub Pages:**
    ```npm run deploy```

---

# 💡 Customization

- Update images and icons in `src/assets/`
- Change content in `src/data.js`
- Adjust styles in `src/index.css` and `tailwind.config.js`