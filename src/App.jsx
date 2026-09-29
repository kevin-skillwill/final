// import { createContext, useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Stats from "./components/Stats";
import LatestTransactions from "./components/Latest-transactions";
import {
  statsData,
  transactionsData,
  cardData,
  debitCreditData,
  invoicesData,
} from "./data/data";
import MyCard from "./components/mycard";
import DebitCredit from "./components/debit";
import Invoices from "./components/invoices";

export const Context = createContext();

export default function App() {
  const [stats, setStats] = useState(statsData);
  const [transactions, setTransactions] = useState(transactionsData);
  const [card, setCard] = useState(cardData);
  const [debitCredit, setDebitCredit] = useState(debitCreditData);
  const [invoices, setInvoices] = useState(invoicesData);
  return (
    <Context.Provider
      value={{
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
      }}
    >
      <main className="min-h-screen bg-stone-50 px-5 py-10 text-stone-900 sm:px-8">
        <Stats />

        <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-[30px] lg:h-[282px] lg:grid-cols-[2fr_1fr]">
          <div className="h-full min-w-0 [&>section]:h-full">
            <LatestTransactions />
          </div>

          <div className="h-full min-w-0 [&>section]:h-full">
            <MyCard />
          </div>
        </div>
        <div className="mx-auto mt-8 grid w-full max-w-[1190px] grid-cols-1 gap-[30px] lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex flex-col min-w-0">
            <h3 className="mb-3 text-[22px] font-bold text-[#343C6A] pt-10">
              Debit & Credit Overview
            </h3>
            <div className="flex-1">
              <DebitCredit />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="mb-3 text-[22px] font-bold text-[#343C6A]">
              Invoices Sent
            </h3>
            <div className="flex-1">
              <Invoices />
            </div>
          </div>
        </div>
      </main>
    </Context.Provider>
  );
}
