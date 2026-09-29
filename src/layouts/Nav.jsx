import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiRepeat,
  FiUser,
  FiTrendingUp,
  FiCreditCard,
  FiDollarSign,
  FiGrid,
  FiAward,
  FiSettings,
  FiSearch,
  FiBell,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";
import styles from "./Nav.module.css";
import profilePic from "../assets/images/ProfilePicture.jpg";

export const navItems = [
  { path: "/dashboard", title: "Overview", icon: FiHome },
  { path: "/transactions", title: "Transactions", icon: FiRepeat },
  { path: "/accounts", title: "Accounts", icon: FiUser },
  { path: "/investments", title: "Investments", icon: FiTrendingUp },
  { path: "/credit-cards", title: "Credit Cards", icon: FiCreditCard },
  { path: "/loans", title: "Loans", icon: FiDollarSign },
  { path: "/services", title: "Services", icon: FiGrid },
  { path: "/my-privileges", title: "My Privileges", icon: FiAward },
  { path: "/settings", title: "Settings", icon: FiSettings },
];

export const Nav = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Determine active title based on current path
  const currentItem = navItems.find((item) => item.path === location.pathname);
  const activeTitle = currentItem ? currentItem.title : "BankDash";

  return (
    <nav className={styles.navbarContainer} aria-label="Main Navigation">
      {/* Top Header Bar */}
      <div className={styles.topBar}>
        <div className={styles.leftSection}>
          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link to="/dashboard" className={styles.brand}>
            <div className={styles.logoIcon}>
              <MdAccountBalance />
            </div>
            <span className={styles.brandName}>BankDash</span>
          </Link>

          <div className={styles.divider}></div>

          <h1 className={styles.pageTitle}>{activeTitle}</h1>
        </div>

        <div className={styles.rightSection}>
          {/* Search Box */}
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for something"
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Settings Button */}
          <Link
            to="/settings"
            className={styles.iconButton}
            title="Settings"
            aria-label="Settings"
          >
            <FiSettings />
          </Link>

          {/* Notifications Button */}
          <button
            className={styles.iconButton}
            title="Notifications"
            aria-label="Notifications"
          >
            <FiBell />
            <span className={styles.notificationBadge}></span>
          </button>

          {/* Profile Picture */}
          <Link to="/settings" title="Profile Settings">
            <img
              src={profilePic}
              alt="User profile"
              className={styles.profileAvatar}
            />
          </Link>
        </div>
      </div>

      {/* Horizontal Desktop Navigation Links */}
      <div className={styles.navLinksBar}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
              }
            >
              <Icon className={styles.navItemIcon} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileSearch}>
            <div className={styles.searchBox}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search for something"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `${styles.mobileNavItem} ${
                    isActive ? styles.mobileNavItemActive : ""
                  }`
                }
              >
                <Icon />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Nav;
