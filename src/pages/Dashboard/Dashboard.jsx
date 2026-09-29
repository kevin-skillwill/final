import stylus from "./Dashboard.module.css";
import {
  Area,
  AreaChart,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { day: "Sat", deposit: 480, withdraw: 250 },
  { day: "Sun", deposit: 350, withdraw: 120 },
  { day: "Mon", deposit: 320, withdraw: 280 },
  { day: "Tue", deposit: 480, withdraw: 380 },
  { day: "Wed", deposit: 150, withdraw: 250 },
  { day: "Thu", deposit: 390, withdraw: 250 },
  { day: "Fri", deposit: 400, withdraw: 330 },
];

const expenseData = [
  { name: "Bill Expense", value: 15, color: "#FC7900" },
  { name: "Others", value: 35, color: "#1814F3" },
  { name: "Investment", value: 20, color: "#FA00FF" },
  { name: "Entertainment", value: 30, color: "#343C6A" },
];
const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  name,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan x={x} dy="-0.3em" fontSize="16" fontWeight="700">
        {value}%
      </tspan>
      <tspan x={x} dy="1.3em" fontSize="11" fontWeight="500">
        {name}
      </tspan>
    </text>
  );
};
const balanceData = [
  { month: "Jul", value: 150 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 450 },
  { month: "Oct", value: 800 },
  { month: "Nov", value: 200},
  { month: "Dec", value: 600 },
  { month: "Jan", value: 230 },
];

export const Dashboard = () => {
  return (
    <div className={stylus.dashboard}>
      <section className={stylus.mycards}>
        <div className={stylus.cardscolumn}>
          <div className={stylus.texts}>
            <h1>My Cards</h1>
            <span>See All</span>
          </div>

          <div className={stylus.onlycards}>
            <div className={stylus.blue}>
              <div className={stylus.first}>
                <img
                  src="../../../src/assets/Dashboard/images/Chip_Card.png"
                  alt=""
                />
                <span>Balance</span>
                <h2>$5,756</h2>
              </div>

              <div className={stylus.second}>
                <div>
                  <span>CARD HOLDER</span>
                  <p>Eddy Cusuma</p>
                </div>
                <div>
                  <span>VALID THRU</span>
                  <p>12/22</p>
                </div>
              </div>

              <div className={stylus.third}>
                <span>3778 **** **** 1234</span>
                <img
                  src="../../../src/assets/Dashboard/images/Group-17.png"
                  alt=""
                />
              </div>
            </div>

            <div className={stylus.white}>
              <div className={stylus.first}>
                <img
                  src="../../../src/assets/Dashboard/images/brown.png"
                  alt=""
                />
                <span>Balance</span>
                <h2>$5,756</h2>
              </div>
              <div className={stylus.second}>
                <div>
                  <span>CARD HOLDER</span>
                  <p>Eddy Cusuma</p>
                </div>
                <div>
                  <span>VALID THRU</span>
                  <p>12/22</p>
                </div>
              </div>
              <div className={stylus.third}>
                <span>3778 **** **** 1234</span>
                <img
                  src="../../../src/assets/Dashboard/images/grey.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className={stylus.transactions}>
          <h3>Recent Transaction</h3>
          <nav>
            <ul>
              <li>
                <img
                  src="../../../src/assets/Dashboard/images/Group-313.png"
                  alt=""
                />
                <div className={stylus.spans}>
                  <span>Deposit from my Card</span>
                  <span>28 January 2021</span>
                </div>
                <span className={stylus.cost}>-$850</span>
              </li>
              <li>
                <img
                  src="../../../src/assets/Dashboard/images/Group-314.png"
                  alt=""
                />
                <div className={stylus.spans}>
                  <span>Deposit Paypal</span>
                  <span>25 January 2021</span>
                </div>
                <span className={stylus.income}>+$2,500</span>
              </li>
              <li>
                <img
                  src="../../../src/assets/Dashboard/images/Group-315.png"
                  alt=""
                />
                <div className={stylus.spans}>
                  <span>Jemi Wilson</span>
                  <span>21 January 2021</span>
                </div>
                <span className={stylus.income}>+$5,400</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className={stylus.charts}>
        <div className={stylus.weeklyActivity}>
          <h2>Weekly Activity</h2>

          <div className={stylus.leftSide}>
            <div className={stylus.dots}>
              <span className={stylus.depositDot} />
              Deposit
              <span className={stylus.withdrawDot} />
              Withdraw
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={weeklyData} barGap={4} barCategoryGap="30%">
                <CartesianGrid vertical={false} stroke="#F5F7FA" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#718EBF", fontSize: 13 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#718EBF", fontSize: 13 }}
                  domain={[0, 500]}
                  ticks={[0, 100, 200, 300, 400, 500]}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar
                  dataKey="deposit"
                  fill="#1814F3"
                  radius={[10, 10, 10, 10]}
                  barSize={12}
                />
                <Bar
                  dataKey="withdraw"
                  fill="#16DBCC"
                  radius={[10, 10, 10, 10]}
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={stylus.expenseStatistics}>
          <h2>Expense Statistics</h2>
          <div className={stylus.rightSide}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  innerRadius={0}
                  label={renderLabel}
                  labelLine={false}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={10}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className={stylus.transferBalance}>
        <div className={stylus.quickTransfer}>
          <h2>Quick Transfer</h2>
          <div className={stylus.whole}>
            <div className={stylus.people}>
            <div className={stylus.person}>
              <img src="./../../src/assets/Dashboard/images/livia.png" alt="" />
              <span className={stylus.liviaSpan}>Livia Bator</span>
              <span className={stylus.ceo}>CEO</span>
            </div>
            <div className={stylus.person}>
              <img src="./../../src/assets/Dashboard/images/rendy.png" alt="" />
              <span>Rendy Press</span>
              <p>Director</p>
            </div>
            <div className={stylus.person}>
              <img
                src="./../../src/assets/Dashboard/images/workman.png"
                alt=""
              />
              <span>Workman</span>
              <p>Designer</p>
            </div>
            <img src="./../../src/assets/Dashboard/images/arrow.png" alt="" />
          </div>
          <div className={stylus.writeAmount}>
            <span>Write Amount</span>
            <div className={stylus.btn}>
              <span>525.50</span>
               <button>
              <span className={stylus.send}>Send</span>
              <img
                src="./../../src/assets/Dashboard/images/Vector.png"
                alt=""
              />
            </button>
            </div>
           
          </div>

          </div>
          
        </div>

        <div className={stylus.balanceHistory}>
          <h2>Balance History</h2>

          <div className={stylus.lineChart}>
            <ResponsiveContainer width="100%" height={276}>
              <AreaChart data={balanceData}>
                <defs>
                  <linearGradient
                    id="balanceGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#2D60FF" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#2D60FF" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={false}
                  stroke="#F5F7FA"
                  strokeDasharray="4 4"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#718EBF", fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#718EBF", fontSize: 12 }}
                  domain={[0, 800]}
                  ticks={[0, 200, 400, 600, 800]}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#1814F3"
                  strokeWidth={2}
                  fill="url(#balanceGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};
