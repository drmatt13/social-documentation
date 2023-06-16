import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

// compoents
import Layout from "../components/Layout";

// context
import globalContext from "../context/globalContext";

// styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [showMobileSideNav, setShowMobileSideNav] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
      document.body.classList.remove("dark");
    }

    setMobile(
      typeof window !== "undefined"
        ? /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        : false
    );
  }, [setDarkMode, setMobile]);

  const toggleDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  };

  return (
    <>
      <globalContext.Provider
        value={{
          mobile,
          darkMode,
          setDarkMode,
          toggleDarkMode,
          showMobileSideNav,
          setShowMobileSideNav,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </globalContext.Provider>
    </>
  );
}

export default MyApp;
