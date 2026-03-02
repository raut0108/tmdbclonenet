# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Project Structure



# TMDB Movies Explorer

A responsive movie discovery web application built with React, Vite, Redux Toolkit, Context API, and Tailwind CSS, powered by **The Movie Database (TMDB)** API.[page:2][web:1]

The app lets users browse popular movies, view details, manage a watchlist, and explore content with a scalable, feature‑based architecture.

---

## ✨ Features

- Browse popular and trending movies fetched from TMDB.[web:1]
- View movie details such as title, rating, overview, release date, and poster.
- Add and remove movies from a personal watchlist using global state (Redux Toolkit).
- Centralized store setup using Redux Toolkit and `@reduxjs/toolkit` slices.[page:2]
- Global layout and shared UI components for consistent look and feel.[page:2]
- Environment‑based configuration for TMDB API key and base URLs.[page:1][page:2]
- Project scaffolded with Vite for fast dev server and optimized build.[page:1]

You can extend this project with advanced TMDB features like discover filters, search, and recommendations.

---

## 🏗️ Tech Stack

- **Frontend**: React 18, Vite[page:1]
- **State Management**: Redux Toolkit, React Context API[page:2]
- **Styling**: Tailwind CSS / custom CSS in `styles/`[page:2]
- **HTTP / API**: Fetch or Axios (wrapped around TMDB API endpoints) via config files in `config/`[page:2][web:1]
- **Tooling**: ESLint, npm

---

## 📁 Project Structure

The project follows a feature‑based, scalable structure:

```text
src/
  app/
    store.js          # Redux store configuration
    rootReducer.js    # Combination of all slices
    App.jsx           # Root application component
    main.jsx          # Vite/React entry
  Context/
    ...               # React Contexts for UI-level concerns
  assets/
    ...               # Static assets (images, icons, logos)
  components/
    ...               # Shared, presentational components
  config/
    ...               # TMDB configuration, API URLs, and constants
  features/
    ...               # Feature-based slices & components (movies, watchlist, etc.)
  pages/
    ...               # Page-level containers mapped to routes
  styles/
    ...               # Global and modular styles
  utils/
    Helpers/          # Utility/helper functions


```


