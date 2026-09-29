// import { statsData } from "../data/data";
import { useContext } from "react";
import { Context } from "../App";

export default function Stats() {
  const { stats } = useContext(Context);

  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
      {stats.map((v) => (
        <div
          key={v.id}
          className="flex min-h-28 items-center gap-4 rounded-lg border border-stone-200 bg-white p-5 shadow-sm rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm shadow-stone-100"
        >
          <img
            className="size-12 shrink-0 object-contain"
            src={v.icon}
            alt=""
          />
          <div className="min-w-0">
            <p className="text-sm text-stone-500">{v.title}</p>
            <h4 className="mt-1 text-xl font-semibold tabular-nums">
              {v.amount}
            </h4>
          </div>
        </div>
      ))}
    </section>
  );
}
