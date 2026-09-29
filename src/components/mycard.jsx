import { useApp } from "../context/AppContext";

export default function MyCard() {
  const { card } = useApp();

  return (
    <section className="flex h-full w-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-stone-800">My Card</h3>
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          See All
        </a>
      </div>

      <div className="min-h-0 flex-1 rounded-2xl bg-blue-600 p-4 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-80">Balance</span>
          <span className="font-bold tracking-widest">VISA</span>
        </div>

        <h3 className="mt-2 text-3xl font-bold tracking-tight">
          {card.balance}
        </h3>

        <div className="mt-6 flex justify-between text-sm">
          <div>
            <p className="text-xs uppercase opacity-70">CARD HOLDER</p>
            <p className="mt-1 font-medium">{card.cardHolder}</p>
          </div>
          <div>
            <p className="text-xs uppercase opacity-70">VALID THRU</p>
            <p className="mt-1 font-medium">{card.validThru}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-blue-500/50 pt-4">
          <span className="font-mono text-lg tracking-widest">
            {card.cardNumber}
          </span>
          <div className="h-6 w-10 rounded bg-white/20"></div>
        </div>
      </div>
    </section>
  );
}
