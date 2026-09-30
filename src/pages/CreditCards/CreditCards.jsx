import  { useState } from 'react';
import styles from './CreditCards.module.css';

export const CreditCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('Credit Cards');

  const navItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: '/home.webp' },
    { id: 'Transactions', label: 'Transactions', icon: '/phone.webp' },
    { id: 'Accounts', label: 'Accounts', icon: '/user.webp' },
    { id: 'Investments', label: 'Investments', icon: '/inves.webp' },
    { id: 'Credit Cards', label: 'Credit Cards', icon: '/vaicrediti.webp' },
    { id: 'Loans', label: 'Loans', icon: '/larimome.webp' },
    { id: 'Services', label: 'Services', icon: '/service.webp' },
    { id: 'My Privileges', label: 'My Privileges', icon: '/natu.webp' },
    { id: 'Setting', label: 'Setting', icon: '/seti.webp' }
  ];

  return (
    <div className={styles.page}>
      
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <img 
              src="/BankDash.webp" 
              alt="BankDash Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          <strong>BankDash.</strong>
        </div>

    
        <nav className={styles.sidebarNav}>
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                
                
                {isActive && <div className={styles.activeBar} />}

                <span className={styles.navIcon}>
                  <img src={item.icon} alt={item.label} />
                </span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      
      <div className={styles.content}>

        <header className={styles.header}>
          <div className={styles.headerTitle}>
            Credit Cards
          </div>

          <div className={styles.headerRight}>
        
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>
                <img 
                  src="/lupa.webp" 
                  alt="lupa" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for something"
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={styles.clearSearchBtn}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <button className={styles.headerButton} aria-label="Settings">
              <span className={styles.searchIcon} style={{ display: 'inline-block', width: '20px', height: '20px' }}>
                <img src="/stng.webp" alt="settings" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </span>
            </button>

            <button className={styles.headerButton} aria-label="Notifications">
              <span className={styles.searchIcon} style={{ display: 'inline-block', width: '20px', height: '20px' }}>
                <img src="/bell.webp" alt="bell" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </span>
            </button>

            <div className={styles.profile}>
              <div className={styles.profileImage}>
                <img 
                  src="/gogo.webp" 
                  alt="profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </header>

        <main className={styles.container}>

    
          <section className={styles.myCardsSection}>
            <h2>My Cards</h2>

            <div className={styles.cardsGrid}>

              <div className={`${styles.card} ${styles.cardBlue}`}>
                <div className={styles.cardHeader}>
                  <span>Balance</span>
                  <span><img src="/Tbarati.webp" alt="Card" /></span>
                </div>
                
                <div className={styles.cardBalance}>$5,756</div>

                <div className={styles.cardInfoRow}>
                  <div>
                    <small>CARD HOLDER</small>
                    <p>Eddy Cusuma</p>
                  </div>
                  <div>
                    <small>VALID THRU</small>
                    <p>12/22</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span>3778 **** **** 1234</span>
                  <div className={styles.cardCircles}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.cardPurple}`}>
                <div className={styles.cardHeader}>
                  <span>Balance</span>
                  <span><img src="/Tbarati.webp" alt="Card" /></span>
                </div>

                <div className={styles.cardBalance}>$5,756</div>

                <div className={styles.cardInfoRow}>
                  <div>
                    <small>CARD HOLDER</small>
                    <p>Eddy Cusuma</p>
                  </div>
                  <div>
                    <small>VALID THRU</small>
                    <p>12/22</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span>3778 **** **** 1234</span>
                  <div className={styles.cardCircles}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.cardWhite}`}>
                <div className={styles.cardHeader}>
                  <span>Balance</span>
                  <span><img src="/NBarati.webp" alt="Card" /></span>
                </div>

                <div className={styles.cardBalance}>$5,756</div>

                <div className={styles.cardInfoRow}>
                  <div>
                    <small>CARD HOLDER</small>
                    <p>Eddy Cusuma</p>
                  </div>
                  <div>
                    <small>VALID THRU</small>
                    <p>12/22</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span>3778 **** **** 1234</span>
                  <div className={styles.cardCircles}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

            </div>
          </section>

        
          <div className={styles.middleSection}>
            <section>
              <h3>Card Expense Statistics</h3>
              <div className={styles.statisticsCard}>
                
              
                <div className={styles.donutChartContainer}>
                  <svg viewBox="0 0 220 220" className={styles.donutSvg}>
                    <defs>
                      
                      <filter id="centerHoleShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow
                          dx="0"
                          dy="0"
                          stdDeviation="5"
                          floodColor="#141c40"
                          floodOpacity="0.25"
                        />
                      </filter>

                  
                      <filter id="topRightElevation" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow
                          dx="2"
                          dy="4"
                          stdDeviation="4"
                          floodColor="#0b1a30"
                          floodOpacity="0.22"
                        />
                      </filter>
                    </defs>

          
                    <path
                      d="M 110 110 L 198 110 A 88 88 0 0 1 110 198 Z"
                      fill="#E6EEF5"
                    />

        
                    <path
                      className={styles.donutSlice}
                      d="M 110 110 L 18 110 A 92 92 0 0 1 110 18 Z"
                      fill="#2E5BFF"
                    />
                    <path
                      d="M 110 110 L 56 110 A 54 54 0 0 1 110 56 Z"
                      fill="#228896"
                    />

          
                    <path
                      className={styles.donutSlice}
                      d="M 110 110 L 110 192 A 82 82 0 0 1 28 110 Z"
                      fill="#FFBB38"
                    />
                    <path
                      d="M 110 110 L 110 164 A 54 54 0 0 1 56 110 Z"
                      fill="#F4831B"
                    />

    
                    <path
                      className={styles.donutSlice}
                      d="M 110 110 L 184 110 A 74 74 0 0 1 110 184 Z"
                      fill="#FF82AC"
                    />
                    <path
                      d="M 110 110 L 164 110 A 54 54 0 0 1 110 164 Z"
                      fill="#BE2563"
                    />

            
                    <g filter="url(#topRightElevation)">
                      <path
                        className={styles.donutSlice}
                        d="M 110 110 L 110 8 A 102 102 0 0 1 212 110 Z"
                        fill="#16DBCC"
                      />
                      <path
                        d="M 110 110 L 110 56 A 54 54 0 0 1 164 110 Z"
                        fill="#18998B"
                      />
                    </g>

      
                    <circle
                      cx="110"
                      cy="110"
                      r="36"
                      fill="#ffffff"
                      filter="url(#centerHoleShadow)"
                    />
                  </svg>
                </div>

                <div className={styles.chartLegend}>
                  <span><i className={styles.blueDot}></i>DBL Bank</span>
                  <span><i className={styles.pinkDot}></i>BRC Bank</span>
                  <span><i className={styles.greenDot}></i>ABM Bank</span>
                  <span><i className={styles.orangeDot}></i>MCP Bank</span>
                </div>
              </div>
            </section>
            
            <section>
              <h3>Card List</h3>
              <div className={styles.cardList}>

                <div className={styles.cardListItem}>
                  <div className={`${styles.iconBox} ${styles.blueBg}`}>
                    <img src="/Wallet s.webp" style={{ width: '28px', height: '28px', objectFit: 'contain' }} alt="wallet" />
                  </div>
                  <div>
                    <span>Card Type</span>
                    <p>Secondary</p>
                  </div>
                  <div>
                    <span>Bank</span>
                    <p>DBL Bank</p>
                  </div>
                  <div>
                    <span>Card Number</span>
                    <p>**** 5600</p>
                  </div>
                  <div>
                    <span>Name</span>
                    <p>William</p>
                  </div>
                  <button>View Details</button>
                </div>

                <div className={styles.cardListItem}>
                  <div className={`${styles.iconBox} ${styles.pinkBg}`}>
                    <img src="/Wallet p.webp" style={{ width: '28px', height: '28px', objectFit: 'contain' }} alt="wallet" />
                  </div>
                  <div>
                    <span>Card Type</span>
                    <p>Secondary</p>
                  </div>
                  <div>
                    <span>Bank</span>
                    <p>BRC Bank</p>
                  </div>
                  <div>
                    <span>Card Number</span>
                    <p>**** 4300</p>
                  </div>
                  <div>
                    <span>Name</span>
                    <p>Michel</p>
                  </div>
                  <button>View Details</button>
                </div>

                <div className={styles.cardListItem}>
                  <div className={`${styles.iconBox} ${styles.yellowBg}`}>
                    <img src="/Walletyv.webp" style={{ width: '28px', height: '28px', objectFit: 'contain' }} alt="wallet" />
                  </div>
                  <div>
                    <span>Card Type</span>
                    <p>Secondary</p>
                  </div>
                  <div>
                    <span>Bank</span>
                    <p>ABM Bank</p>
                  </div>
                  <div>
                    <span>Card Number</span>
                    <p>**** 7560</p>
                  </div>
                  <div>
                    <span>Name</span>
                    <p>Edward</p>
                  </div>
                  <button>View Details</button>
                </div>

              </div>
            </section>

          </div>

    
          <div className={styles.bottomSection}>

            <section>
              <h3>Add New Card</h3>
              <div className={styles.addNewCardForm}>
                <p>
                  Credit Card generally means a plastic card issued by Scheduled
                  Commercial Banks assigned to a Cardholder, with a credit limit.
                </p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Card Type</label>
                      <input type="text" placeholder="Classic" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Name On Card</label>
                      <input type="text" placeholder="My Cards" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Card Number</label>
                      <input type="text" placeholder="**** **** **** ****" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Expiration Date</label>
                      <input type="text" placeholder="25 January 2025" />
                    </div>
                  </div>

                  <button type="submit" className={styles.addCardBtn}>
                    Add Card
                  </button>
                </form>
              </div>
            </section>

            <section>
              <h3>Card Setting</h3>
              <div className={styles.cardSetting}>
                
                <div className={styles.settingItem}>
                  <div className={`${styles.settingIcon} ${styles.yellowIcon}`}>
                    <img src="/brt.webp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} alt="icon" />
                  </div>
                  <div>
                    <strong>Block Card</strong>
                    <span>Instantly block your card</span>
                  </div>
                </div>

                <div className={styles.settingItem}>
                  <div className={`${styles.settingIcon} ${styles.blueIcon}`}>
                    <img src="/lock.webp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} alt="icon" />
                  </div>
                  <div>
                    <strong>Change Pin Code</strong>
                    <span>Choose another pin code</span>
                  </div>
                </div>

                <div className={styles.settingItem}>
                  <div className={`${styles.settingIcon} ${styles.pinkIcon}`}>
                    <img src="/glg.webp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} alt="google" />
                  </div>
                  <div>
                    <strong>Add to Google Pay</strong>
                    <span>Withdraw without any card</span>
                  </div>
                </div>

                <div className={styles.settingItem}>
                  <div className={`${styles.settingIcon} ${styles.greenIcon}`}>
                    <img src="/apple 2 1.webp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} alt="apple" />
                  </div>
                  <div>
                    <strong>Add to Apple Pay</strong>
                    <span>Withdraw without any card</span>
                  </div>
                </div>

                <div className={styles.settingItem}>
                  <div className={`${styles.settingIcon} ${styles.blueIcon}`}>
                    <img src="/apple 2 1.webp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} alt="appstore" />
                  </div>
                  <div>
                    <strong>Add to Apple Store</strong>
                    <span>Withdraw without any card</span>
                  </div>
                </div>

              </div>
            </section>

          </div>

        </main>
      </div>
    </div>
  );
};
