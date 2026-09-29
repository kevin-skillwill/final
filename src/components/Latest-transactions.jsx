import { useApp } from "../context/AppContext";

export default function LatestTransactions() {
  const { transactions } = useApp();

  return (
    <section className="flex h-full w-full flex-col">
      <h3 className="mb-4 text-lg font-semibold text-stone-800">
        Last Transaction
      </h3>

      <div className="min-h-0 flex-1 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
        <div className="flex h-full flex-col justify-between">
          {transactions.slice(-3).map((v) => (
            <div
              key={v.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b border-stone-100 py-2 last:border-none lg:grid-cols-[minmax(180px,1fr)_72px_82px_88px_54px]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <img
                  className="size-11 shrink-0 object-contain rounded-full bg-stone-100 p-2"
                  src={v.icon}
                  alt=""
                />
                <div className="min-w-0">
                  <h4 className="truncate font-inter text-base font-medium text-stone-800">
                    {v.title}
                  </h4>
                  <p className="text-xs text-stone-400">{v.date}</p>
                </div>
              </div>

              <span className="hidden truncate text-xs text-stone-500 lg:block">
                {v.category}
              </span>
              <span className="hidden truncate font-mono text-xs text-stone-500 lg:block">
                {v.card}
              </span>
              <span
                className={`hidden truncate text-xs lg:block ${
                  v.status === "Pending" ? "text-amber-500" : "text-emerald-600"
                }`}
              >
                {v.status}
              </span>

              <span
                className={`text-right text-sm font-semibold tabular-nums ${
                  v.type === "expense" ? "text-rose-500" : "text-emerald-500"
                }`}
              >
                {v.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
