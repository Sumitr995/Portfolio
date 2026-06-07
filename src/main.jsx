import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AppContext } from './context/context';

const THEME_STORAGE_KEY = "theme"
const SYSTEM_THEME = "system"

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

const applyTheme = (themePreference) => {
  const resolvedTheme =
    themePreference === SYSTEM_THEME ? getSystemTheme() : themePreference

  document.documentElement.classList.toggle("dark", resolvedTheme === "dark")
  document.documentElement.style.colorScheme = resolvedTheme
}

const initializeTheme = () => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? SYSTEM_THEME

  if (!localStorage.getItem(THEME_STORAGE_KEY)) {
    localStorage.setItem(THEME_STORAGE_KEY, SYSTEM_THEME)
  }

  applyTheme(storedTheme)
}

initializeTheme()

const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
themeMediaQuery.addEventListener("change", () => {
  if (localStorage.getItem(THEME_STORAGE_KEY) === SYSTEM_THEME) {
    applyTheme(SYSTEM_THEME)
  }
})

createRoot(document.getElementById('root')).render(
  <AppContext.Provider value={{}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext.Provider>
)
