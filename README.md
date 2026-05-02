# Structure Project (Vue 3 + Vite + Tailwind)

A lightweight Vue 3 starter built with Vite and Tailwind CSS. Use it as a base for auth pages and reusable UI components.

## Requirements

- Node.js 18+ (or any version supported by Vite 8)
- npm (or your preferred package manager)

## Clone and Install

```bash
git clone <YOUR_REPO_URL>
cd structure_project_front_vue3
npm install
```

## Run the Development Server

```bash
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

## Preview the Production Build

```bash
npm run preview
```

## Project Structure

```
public/              # Static files served as-is
src/                 # Application source code
	assets/            # Images, fonts, and other static assets
	components/        # Reusable UI components
		base/            # Base UI building blocks (BaseInput, BaseButton, ...)
		home/            # Home page-specific components
		preview/         # Preview page components
	composables/       # Reusable Vue composables (hooks)
	layouts/           # Layout wrappers (DefaultLayout, etc.)
	pages/             # Route-level pages
		auth/            # Auth pages (Login, Register)
		dashboard/       # Dashboard pages
		home/            # Home pages
		preview/         # Preview page
		NotFound.vue     # 404 page
	modules/           # Feature-based modules
	router/            # Vue Router setup
	services/          # API helpers and HTTP clients
	stores/            # App state stores (Pinia or similar)
	App.vue            # Root component
	main.js            # App entry point
	style.css          # Global styles
```

## Notes

- Tailwind is wired through Vite.
- Font Awesome v4.7 CDN is included in `index.html` for icons.
