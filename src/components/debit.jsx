import { useContext } from "react";
import { Context } from "../App";
import "../charts.css";

export default function DebitCredit() {
  const { debitCredit } = useContext(Context);

  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-stone-300 bg-white p-6 shadow-md h-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-stone-400">
          <span className="text-[#343C6A] font-semibold">$7,560</span> Debited &
          <span className="text-[#343C6A] font-semibold">$5,420</span> Credited
          in this Week
        </span>

        <div className="flex items-center gap-6 text-sm text-stone-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="size-3.5 rounded-full bg-blue-500"></span>
            <span>Debit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-3.5 rounded-full bg-amber-400"></span>
            <span>Credit</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        {debitCredit.map((v, index) => {
          const debitHeight = `${(v.debit / v.max) * 100}%`;
          const creditHeight = `${(v.credit / v.max) * 100}%`;

          return (
            <div key={index} className="chart-bar-group">
              <div className="chart-bars">
                <div
                  className="bar-debit"
                  style={{ height: debitHeight }}
                ></div>
                <div
                  className="bar-credit"
                  style={{ height: creditHeight }}
                ></div>
              </div>
              <span className="text-sm text-stone-400 font-medium">
                {v.day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
