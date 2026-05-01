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
src/
	components/base/   # Reusable UI components (BaseInput, BaseButton, ...)
	pages/auth/        # Auth pages (Login, Register)
	router/            # Vue Router setup
	services/          # API helpers
	stores/            # Pinia stores (if used)
```

## Notes

- Tailwind is wired through Vite.
- Font Awesome v4.7 CDN is included in `index.html` for icons.
