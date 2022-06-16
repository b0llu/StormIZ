import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextInterface {
  theme?: string;
  setTheme?: (theme: string) => void;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({ theme: "dark" });

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const localStorageTheme = localStorage.getItem("data-theme");
  const [theme, setTheme] = useState(localStorageTheme ?? "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
