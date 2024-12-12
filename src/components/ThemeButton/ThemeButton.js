"use client";

import { useEffect, useState } from "react";
import { setTheme } from "../../utils/theme";
import styles from "./ThemeButton.module.css";

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {   
    const theme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1];

    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = async () => {
    const newTheme = isDarkMode ? "light" : "dark";

    await setTheme(newTheme);

    if (newTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    setIsDarkMode(newTheme === "dark");
  };

  return (
    <button
      className={styles.themeButton}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeButton;
