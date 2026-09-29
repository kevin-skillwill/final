import React from 'react';
import stylus from './nav.module.css'; 

export const Header = ({ title = "Overview" }) => {
  return (
    <header className={stylus.header}>
      <h2 className={stylus.pageTitle}>{title}</h2>

      <div className={stylus.rightSection}>
        <div className={stylus.searchBox}>
          <i className={`fa-solid fa-magnifying-glass ${stylus.searchIcon}`}></i>
          <input
            type="text"
            placeholder="Search for something"
            className={stylus.searchInput}
          />
        </div>

        <button className={stylus.iconBtn} aria-label="Settings">
          <i className="fa-solid fa-gear"></i>
        </button>

        <button className={`${stylus.iconBtn} ${stylus.notificationBtn}`} aria-label="Notifications">
          <i className="fa-regular fa-bell"></i>
        </button>

        <div className={stylus.profileAvatar}>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256"
            alt="User Profile"
          />
        </div>
      </div>
    </header>
  );
};