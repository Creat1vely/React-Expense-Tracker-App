

function App() {
  return (
    <div className='app'>
      <h1 className="app-title">
        Expense Tracker
      </h1>

      <div className="overview-ctn">

        {/* balance container */}
        <div className="balance-ctn">
          <span className="balance">
            $ 10000
          </span>

          <button className="add-button">
            add
          </button>
        </div>

        {/* expense overview container */}
        <div className="expense-overview-ctn">
          <div className="expenses">
            <span className="expense-title">
              expense
            </span>
            <span className="expense-amount">
              $7000
            </span>
          </div>
          
          <div className="income">
            <span className="income-title">
              income
            </span>
            <span className="income-amount">
              $10000
            </span>
          </div>
        </div>

        {/* transactions list container */}
        <div className="transactions-list-ctn">

          {/* transaction search input */}
          <input type="text" className="transactions-search"/>

          {/* transactions list */}
          <div className="transactions-list">

            <div className="transaction credit">
              <span className="transaction-name">
                Salary
              </span>

              <span className="transaction-amount">
                $3000
              </span>
            </div>
            <div className="transaction credit">
              <span className="transaction-name">
                Salary
              </span>

              <span className="transaction-amount">
                $3000
              </span>
            </div>
            <div className="transaction debit">
              <span className="transaction-name">
                food
              </span>

              <span className="transaction-amount">
                $2000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
