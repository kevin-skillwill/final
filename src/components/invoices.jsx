import { useApp } from "../context/AppContext";

export default function InvoicesSent() {
  const { invoices } = useApp();

  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-stone-300 bg-white p-6 shadow-md h-full">
      {invoices?.slice(-4).map((v) => (
        <div
          key={v.id}
          className="flex items-center justify-between py-2 first:pt-0 last:pb-0"
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${v.bgColor} p-2.5`}
            >
              <img
                src={v.icon}
                alt={v.name}
                className="size-6 object-contain"
              />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#343C6A]">
                {v.name}
              </h4>
              <p className="text-xs text-stone-400">{v.time}</p>
            </div>
          </div>

          <span className="text-base font-semibold tabular-nums text-stone-700">
            {v.amount}
          </span>
        </div>
      ))}
    </div>
  );
}
