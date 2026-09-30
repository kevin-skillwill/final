import lifeInsuranceIcon from "../../assets/Services/life-insurance-icon.png"
import shoppingBagIcon from "../../assets/Services/shopping-bag-icon.png"
import safetyIcon from "../../assets/Services/safety-icon.png"
import businessLoansIcon from "../../assets/Services/businessloansicon.png"
import checkingAccountsIcon from "../../assets/Services/checkingaccountsicon.png"
import savingsIcon from "../../assets/Services/savingsicon.png"
import debitandcreditcardsicon from "../../assets/Services/debitandcreditcardsicon.png"
import stylus from "./services.module.css"

export const Services = () => {
  return (
    <div className={stylus.home}>

      <div className={stylus.cardRow}>

        <div className={stylus.card}>
          <div className={`${stylus.cardIcon} ${stylus.iconBlue}`}>
            <img src={lifeInsuranceIcon} alt="Life Insurance" />
          </div>
          <div>
            <p className={stylus.cardTitle}>Life Insurance</p>
            <p className={stylus.cardSubtitle}>Unlimited protection</p>
          </div>
        </div>

        <div className={stylus.card}>
          <div className={`${stylus.cardIcon} ${stylus.iconYellow}`}>
            <img src={shoppingBagIcon} alt="Shopping" />
          </div>
          <div>
            <p className={stylus.cardTitle}>Shopping</p>
            <p className={stylus.cardSubtitle}>Buy. Think. Grow.</p>
          </div>
        </div>

        <div className={stylus.card}>
          <div className={`${stylus.cardIcon} ${stylus.iconTeal}`}>
            <img src={safetyIcon} alt="Safety" />
          </div>
          <div>
            <p className={stylus.cardTitle}>Safety</p>
            <p className={stylus.cardSubtitle}>We are your allies</p>
          </div>
        </div>

      </div>

      <h2 className={stylus.listHeading}>Bank Services List</h2>

      {/* N1 Business loans */}
      <div className={stylus.listRow}>
        <div className={`${stylus.rowIcon} ${stylus.iconPink}`}>
          <img src={businessLoansIcon} alt="Business loans" />
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Business loans</p>
          <p className={stylus.rowSubtitle}>It is a long established</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <button className={stylus.viewDetails}>View Details</button>
      </div>

      {/* Checking accounts */}
      <div className={stylus.listRow}>
        <div className={`${stylus.rowIcon} ${stylus.iconYellow}`}>
          <img src={checkingAccountsIcon} alt="Checking accounts" />
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Checking accounts</p>
          <p className={stylus.rowSubtitle}>It is a long established</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <button className={stylus.viewDetails}>View Details</button>
      </div>

      {/* Savings accounts */}
      <div className={stylus.listRow}>
        <div className={`${stylus.rowIcon} ${stylus.iconPink}`}>
          <img src={savingsIcon} alt="Savings accounts" />
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Savings accounts</p>
          <p className={stylus.rowSubtitle}>It is a long established</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <button className={stylus.viewDetails}>View Details</button>
      </div>

      {/* Debit and credit cards */}
      <div className={stylus.listRow}>
        <div className={`${stylus.rowIcon} ${stylus.iconBlue}`}>
          <img src={debitandcreditcardsicon} alt="Debit and credit cards" />
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Debit and credit cards</p>
          <p className={stylus.rowSubtitle}>It is a long established</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <button className={stylus.viewDetails}>View Details</button>
      </div>

      {/* Life Insurance */}
      <div className={stylus.listRow}>
        <div className={`${stylus.rowIcon} ${stylus.iconTeal}`}>
          <img src={safetyIcon} alt="Life Insurance" />
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Life Insurance</p>
          <p className={stylus.rowSubtitle}>It is a long established</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <button className={stylus.viewDetails}>View Details</button>
      </div>

      {/* Business loans N2 */}
      <div className={stylus.listRow}>
        <div className={`${stylus.rowIcon} ${stylus.iconPink}`}>
          <img src={businessLoansIcon} alt="Business loans" />
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Business loans</p>
          <p className={stylus.rowSubtitle}>It is a long established</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <div className={stylus.rowInfo}>
          <p className={stylus.rowTitle}>Lorem Ipsum</p>
          <p className={stylus.rowSubtitle}>Many publishing</p>
        </div>
        <button className={stylus.viewDetails}>View Details</button>
      </div>

    </div>
  )
}