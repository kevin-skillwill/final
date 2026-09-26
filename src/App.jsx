import { Routes, Route } from "react-router-dom";

import { Nav } from "./layouts/Nav";
import { Sidebar } from "./layouts/Sidebar";
import { PageNotFound } from "./layouts/PageNotFound";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Transactions } from "./pages/Transactions/Transactions";
import { Accounts } from "./pages/Accounts/Accounts";
import { Investments } from "./pages/Investments/Investments";
import { CreditCards } from "./pages/CreditCards/CreditCards";
import { Loans } from "./pages/Loans/Loans";
import { Services } from "./pages/Services/Services";
import { MyPrivileges } from "./pages/MyPrivileges/MyPrivileges";
import { Settings } from "./pages/Setting/Settings";

function App() {
  return (
    <>
      <Nav />

      <div className="custom-body">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="sidecontent">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/cards" element={<CreditCards />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privileges" element={<MyPrivileges />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
