import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Transactions } from "./pages/Transactions/Transactions";
import { Accounts } from "./pages/Accounts/Accounts";
import Investments from "./pages/Investments/Investments";
import { CreditCards } from "./pages/CreditCards/CreditCards";
import { Loans } from "./pages/Loans/Loans";
import { Services } from "./pages/Services/Services";
import { MyPrivileges } from "./pages/MyPrivileges/MyPrivileges";
import { Settings } from "./pages/Setting/Settings";
import { PageNotFound } from "./layouts/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/my-privileges" element={<MyPrivileges />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}