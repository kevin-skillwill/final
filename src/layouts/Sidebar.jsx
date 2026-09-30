import { NavLink } from "react-router-dom";
import {
  House,
  ArrowLeftRight,
  Wallet,
  ChartNoAxesCombined,
  CreditCard,
  HandCoins,
  Wrench,
  Crown,
  Settings,
} from "lucide-react";
import styles from "./Sidebar.module.css";

const menuItems = [
  { label: "Dashboard", path: "/", Icon: House },
  { label: "Transactions", path: "/transactions", Icon: ArrowLeftRight },
  { label: "Accounts", path: "/accounts", Icon: Wallet },
  { label: "Investments", path: "/investments", Icon: ChartNoAxesCombined },
  { label: "Credit Cards", path: "/cards", Icon: CreditCard },
  { label: "Loans", path: "/loans", Icon: HandCoins },
  { label: "Services", path: "/services", Icon: Wrench },
  { label: "My Privileges", path: "/privileges", Icon: Crown },
  { label: "Setting", path: "/settings", Icon: Settings },
];

export const Sidebar = () => {
  return (
    <aside className={styles.navigation}>
      <div className={styles.logo}>
        <svg
          width="42"
          height="38"
          viewBox="0 0 54 48"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 8C14 5.8 15.8 4 18 4H44C47.3 4 50 6.7 50 10V31C50 34.3 47.3 37 44 37H40"
            stroke="#0929CC"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="4"
            y="18"
            width="39"
            height="26"
            rx="6"
            stroke="#0929CC"
            strokeWidth="4"
          />
          <path
            d="M8 26H39"
            stroke="#0929CC"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M30 36H36"
            stroke="#EF4ADD"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <span>BankDash.</span>
      </div>

      <nav aria-label="Main navigation">
        {menuItems.map(({ label, path, Icon }) => (
          <NavLink key={path} to={path} end={path === "/"}>
            <Icon size={20} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}; 