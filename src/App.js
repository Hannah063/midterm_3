import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { GithubProvider } from "./github/GithubContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { Global } from "./theme/global";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <GithubProvider>
      <div className="App">
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Global />
          <Router>
            <Navbar />
            <button className="darksoul-hover-fill-button2" onClick={toggleTheme}><div className="color-fill-2"></div><p>Toggle Theme</p></button>
            <Home />
          </Router>
        </ThemeProvider>
      </div>
    </GithubProvider>
  );
};

export default App;
