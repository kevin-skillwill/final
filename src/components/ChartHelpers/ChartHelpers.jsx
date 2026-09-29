import styles from "./ChartHelpers.module.css";

export function CurrencyTick({ x, y, payload }) {
  return (
    <text x={x} y={y} dx={-8} dy={4} textAnchor="end" fontSize={13} fill="#8B93A7">
      ${payload.value / 1000}k
    </text>
  );
}

export function ChartTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className={styles.tooltip}>
      {label ? <div className={styles.tooltipLabel}>{label}</div> : null}
      <div className={styles.tooltipValue}>${payload[0].value.toLocaleString()}</div>
    </div>
  );
}
