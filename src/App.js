import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { GithubProvider } from './github/GithubContext';

const App = () => {
  return (
    <GithubProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
    </GithubProvider>
  );
};

export default App;