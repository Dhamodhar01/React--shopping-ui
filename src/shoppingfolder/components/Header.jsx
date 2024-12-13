import React, { useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Manage login state
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Optionally, fetch search suggestions here
  };

  return (
    <div className="headerSection">
      <div className="left">
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/children">Children</a>
          </li>
          <li>
            <a href="/beauty">Beauty</a>
          </li>
        </ul>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="right">
        <div className="signin" onClick={handleLoginLogout}>
          {loggedIn ? "Logout" : "Signin / Signup"}
        </div>
        <div className="cart">
          Cart <span className="cartCount">{cartCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
