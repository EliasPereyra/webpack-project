import React, { useEffect, useState } from "react";

import { TopBar } from "./topbar.jsx";

import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch(process.env.JSONPLACEHOLDER_API)
      .then((res) => {
        if (!res.ok) return;
        return res.json();
      })
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="main-wrapper">
      <TopBar />
      <div className="mw__headline-content">
        <h1>App packed with webpack</h1>
        <p>This web app was made from scratch with Webpack 5</p>
      </div>
      <div className="mw__users-container">
        <h3>Users from the JSONPlaceholder API</h3>
        <p>Test data, fetching data from a environment variable</p>
        <ul className="mw__users">
          {users.map((user) => (
            <li key={user.id}>
              <article>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
