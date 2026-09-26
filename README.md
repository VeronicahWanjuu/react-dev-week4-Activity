# React Week 4 — useContext and useReducer

A React app built with TypeScript and Vite that demonstrates
global state management using useContext for theme switching
and useReducer for task management.

## How to Install and Run

1. Clone the repository
   git clone https://github.com/VeronicahWanjuu/react-dev-week4-Activity.git

2. Go into the project folder
   cd react-dev-week4-Activity

3. Install dependencies
   npm install

4. Start the dev server (uses Vite)
   npm run dev

5. Open browser at http://localhost:5173

## Project Structure

src/
├── constants/
│   └── theme.ts
├── context/
│   └── ThemeContext.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── TaskManager.tsx
│   └── TaskManager.module.css
├── reducers/
│   └── taskReducer.ts
├── App.tsx
└── main.tsx

## Color Palette Used

Light Theme
Background: #FFFFFF
Text: #000000
Button: #1E90FF

Dark Theme
Background: #242629
Text: #FFFFFF
Button: #85D1B0


## Challenges

The hardest part for me was understanding why we set the context
default to undefined instead of just giving it an empty value.
I kept getting TypeScript errors until I realised that throwing
an error inside useTheme when context is missing is actually the
correct pattern,  it tells you immediately if you forgot to wrap
your component in the provider instead of getting a silent bug.

CSS Modules confused me at first because I was used to just
writing className="container" as a plain string. Having to write
styles.container felt unnecessary but after accidentally having
two components with the same class name clash I understood exactly
why CSS Modules exist — each file gets its own scoped names so
nothing leaks into other components.

The biggest struggle was when TaskManager kept throwing errors
because I had mixed up the old action types ADD_TASK and REMOVE_TASK
with the new ones add and remove. That taught me to always check
that the reducer action types and the dispatch calls in the
component match exactly — TypeScript helps catch this but only
if your types are set up correctly from the start.

## Libraries Used

- React 18
- TypeScript
- Vite
- ESLint