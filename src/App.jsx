

function App() {
  return (
    <div className='app'>
      <h1 className="app-title">
        Expense Tracker
      </h1>

      <div className="overview">

        {/* balance container */}
        <div className="balance-ctn">
          <span className="balance">
            balance: $10000
          </span>

          <button className="add-button">
            add
          </button>
        </div>

        {/* expense overview container */}
        <div className="expense-overview-ctn">
          <div className="tile">
            <span className="tile-title">
              expense
            </span>
            <span className="tile-amount expense">
              $7000
            </span>
          </div>
          
          <div className="tile">
            <span className="tile-title">
              income
            </span>
            <span className="tile-amount income">
              $10000
            </span>
          </div>
        </div>

        {/* expense addition form */}
        <form className="expense-form">
          <input type="text" className="expense-form-input" placeholder="Amount"/>
          <input type="text" className="expense-form-input" placeholder="Description"/>

          <div>
            <input type="radio" name="expense-type" id="expense-radio" className="expense-form-radio"/>
            <label htmlFor="expense-radio" className="expense-form-label">
              expense
            </label>
            <input type="radio" name="expense-type" id="income-radio" className="expense-form-radio"/>
            <label htmlFor="income-radio" className="expense-form-label">
              income
            </label>
          </div>

          <input type="submit" value="add transaction" className="add-button" />
        </form>
      </div>

      {/* transactions list container */}
      <div className="transactions-list-ctn">

        {/* transaction search input */}
        <input type="text" className="transactions-search" placeholder="search items"/>

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
  )
}

export default App
