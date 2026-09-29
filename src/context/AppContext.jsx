import { createContext, useContext, useState, useMemo } from "react";
import {
  statsData,
  transactionsData,
  cardData,
  debitCreditData,
  invoicesData,
} from "../data/data";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [stats, setStats] = useState(statsData);
  const [transactions, setTransactions] = useState(transactionsData);
  const [card, setCard] = useState(cardData);
  const [debitCredit, setDebitCredit] = useState(debitCreditData);
  const [invoices, setInvoices] = useState(invoicesData);

  const value = useMemo(
    () => ({
      stats,
      setStats,
      transactions,
      setTransactions,
      card,
      setCard,
      debitCredit,
      setDebitCredit,
      invoices,
      setInvoices,
    }),
    [stats, transactions, card, debitCredit, invoices]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}