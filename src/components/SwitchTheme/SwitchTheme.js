"use client";

import { useEffect, useState } from "react";
import { setTheme } from "@/utils/setTheme";
import styles from "./SwitchTheme.module.css";

const SwitchTheme = ({ theme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    } else {
      setTheme("light");
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
      className={styles.switchTheme}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default SwitchTheme;
