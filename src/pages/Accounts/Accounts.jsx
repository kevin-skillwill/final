import { AppProvider } from "../../context/AppContext";
import Stats from "../../components/Stats";
import LatestTransactions from "../../components/Latest-transactions";
import MyCard from "../../components/mycard";
import DebitCredit from "../../components/debit";
import Invoices from "../../components/invoices";

export const Accounts = () => {
  return (
    <AppProvider>
      <main className="min-h-screen bg-stone-50 px-5 py-10 text-stone-900 sm:px-8">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <Stats />

          <div className="grid grid-cols-1 gap-[30px] lg:h-[282px] lg:grid-cols-[2fr_1fr]">
            <div className="h-full min-w-0 [&>section]:h-full">
              <LatestTransactions />
            </div>
            <div className="h-full min-w-0 [&>section]:h-full">
              <MyCard />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[minmax(0,1fr)_360px]">
            <section className="flex flex-col min-w-0">
              <h3 className="mb-3 text-[22px] font-bold text-[#343C6A]">
                Debit & Credit Overview
              </h3>
              <div className="flex-1">
                <DebitCredit />
              </div>
            </section>

            <section className="flex flex-col min-w-0">
              <h3 className="mb-3 text-[22px] font-bold text-[#343C6A]">
                Invoices Sent
              </h3>
              <div className="flex-1">
                <Invoices />
              </div>
            </section>
          </div>
        </div>
      </main>
    </AppProvider>
  )
}
