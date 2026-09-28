import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CurrencyTick, ChartTooltip } from "../../components/ChartHelpers/ChartHelpers";
import {
  yearlyInvestmentData,
  monthlyRevenueData,
  summaryCards,
  myInvestments,
  trendingStocks,
} from "../../data/investments";
import styles from "./Investments.module.css";

export default function Investments() {
  return (
    <main className={styles.main}>
      <section aria-label="Investment summary" className={styles.summaryGrid}>
        {summaryCards.map(({ label, value, icon: iconSrc, iconBg }) => (
          <div key={label} className={styles.summaryCard}>
            <div
              className={styles.summaryIcon}
              style={{ backgroundColor: iconBg }}
            >
              <img
                src={iconSrc}
                alt={label}
              />
            </div>
            <div>
              <p className={styles.summaryLabel}>{label}</p>
              <p className={styles.summaryValue}>{value}</p>
            </div>
          </div>
        ))}
      </section>


      <section aria-label="Investment trends" className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Yearly Total Investment</h2>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={yearlyInvestmentData}
                margin={{ top: 10, right: 16, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  vertical={false}
                  stroke="#EEF1F6"
                  strokeDasharray="4 4"
                />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 13, fill: "#718EBF" }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 40000]}
                  ticks={[0, 10000, 20000, 30000, 40000]}
                  tick={<CurrencyTick />}
                  width={48}
                />
                <Tooltip
                  content={<ChartTooltip />}
                  cursor={{ stroke: "#F5A623", strokeDasharray: "4 4" }}
                />
                <Line
                  type="linear"
                  dataKey="value"
                  stroke="#F5A623"
                  strokeWidth={3}
                  dot={{
                    r: 5,
                    fill: "#fff",
                    stroke: "#F5A623",
                    strokeWidth: 3,
                  }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Monthly Revenue</h2>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyRevenueData}
                margin={{ top: 10, right: 16, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  vertical={false}
                  stroke="#EEF1F6"
                  strokeDasharray="4 4"
                />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 13, fill: "#718EBF" }}
                  interval={0}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 40000]}
                  ticks={[0, 10000, 20000, 30000, 40000]}
                  tick={<CurrencyTick />}
                  width={48}
                />
                <Tooltip
                  content={<ChartTooltip />}
                  cursor={{ stroke: "#2DD4BF", strokeDasharray: "4 4" }}
                />
                <Line
                  type="natural"
                  dataKey="value"
                  stroke="#2DD4BF"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>


      <section aria-label="Portfolio detail" className={styles.portfolioGrid}>
        <div>
          <h2 className={styles.sectionTitle}>My Investment</h2>
          <ul className={styles.investmentList}>
            {myInvestments.map(
              ({
                name,
                category,
                value,
                returnValue,
                positive,
                icon: iconSrc,
                iconBg
              }) => (
                <li key={name} className={styles.investmentItem}>
                  <div
                    className={styles.investmentIcon}
                    style={{ backgroundColor: iconBg }}
                  >
                    <img src={iconSrc} alt={name} />
                  </div>
                  <div className={styles.investmentInfo}>
                    <p className={styles.investmentName}>{name}</p>
                    <p className={styles.investmentCategory}>{category}</p>
                  </div>
                  <div>
                    <p className={styles.investmentValue}>{value}</p>
                    <p className={styles.investmentValueLabel}>
                      Investment Value
                    </p>
                  </div>
                  <div>
                    <p
                      className={
                        positive
                          ? styles.returnPositive
                          : styles.returnNegative
                      }
                    >
                      {returnValue}
                    </p>
                    <p className={styles.investmentValueLabel}>Return Value</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h2 className={styles.sectionTitle}>Trending Stock</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tableHeader}>
                  <th scope="col" className={styles.tableHeaderCell}>
                    SL No
                  </th>
                  <th scope="col" className={styles.tableHeaderCell}>
                    Name
                  </th>
                  <th scope="col" className={styles.tableHeaderCell}>
                    Price
                  </th>
                  <th scope="col" className={styles.tableHeaderCell}>
                    Return
                  </th>
                </tr>
              </thead>
              <tbody>
                {trendingStocks.map(
                  ({ no, name, price, returnValue, positive }) => (
                    <tr key={no} className={styles.tableRow}>
                      <td className={styles.tableCellNo}>{no}.</td>
                      <td className={styles.tableCellName}>{name}</td>
                      <td className={styles.tableCellPrice}>{price}</td>
                      <td
                        className={
                          positive
                            ? styles.tableCellReturnPositive
                            : styles.tableCellReturnNegative
                        }
                      >
                        {returnValue}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
