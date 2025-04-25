
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user?.email?.endsWith("@hogs.live")) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {userEmail ? (
            <Dashboard onLogout={() => setUserEmail(null)} />
          ) : (
            <Login onLogin={setUserEmail} />
          )}
                  </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}