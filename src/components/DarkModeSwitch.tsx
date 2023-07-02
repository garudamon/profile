"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      id="theme-toggle"
      accessKey="t"
      title="(Alt + T)"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? (
        <Icon icon={'radix-icons:moon'} width={24} />
      ) : (
        <Icon icon={'entypo:light-up'} width={24} />
      )}
    </button>
  );
};
export default DarkModeSwitch;
