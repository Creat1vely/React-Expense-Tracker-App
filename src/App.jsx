import { useState } from "react"

// import child components to be used in the render
import Tile from "./Tile";
import Transaction from "./Transaction"

// import creatively brand components
import CreativelyTitle from "./creatively-branding/CreativelyTitle";
import CreativelyLinks from "./creatively-branding/CreativelyWebDevLinks";


function App() {
  // define app display state
  const [ isExpenseFormVisible, setIsExpenseFormVisible ] = useState( false );

  // define input states
  const [ amount, setAmount ] = useState(0);
  const [ desc, setDesc ] = useState("");
  const [ type, setType ] = useState("Expense");
  const [ searchValue, setSearchValue ] = useState("")

  // define app's data
  const [ transactions, setTransactions ] = useState([])

  // addTransaction()
  // used to add new transactions to the transactions state data
  // on expense-form submit
  function addTransaction(e) {
    // prevent default form submit action
    e.preventDefault();

    // perform check to see if transaction data is valid
    // and alert user if invalid else add new transaction
    if ( amount != 0 && desc != "" ) {
      // add new transaction
      setTransactions([
        ...transactions,
        {
          amount: amount,
          desc: desc,
          type: type,
          id: Date.now()
        }
      ])
    } else {
      // alert user stating invalid data
      alert("Enter a valid amount or description to add expense");
    }
  }

  // getTotalIncome()
  // used to get the total income of income-type transactions
  // based on the argument passed to it ( which will be the 
  // transactions state data )
  function getTotalIncome( transactions ) {
    var totalIncome = 0;
    var incomeTransactions = transactions.filter( function( transaction ) {
      if ( transaction.type == "Income" ) {
        return true
      }
    })

    incomeTransactions.forEach( function( transaction ) {
      totalIncome += transaction.amount
    })

    return totalIncome;
  }
  
  // getTotalExpense()
  // used to get the total expense of expense-type transactions
  // based on the argument passed to it ( which will be the 
  // transactions state data )
  function getTotalExpense( transactions ) {
    var totalExpense = 0;
    var expenseTransactions = transactions.filter( function( transaction ) {
      if ( transaction.type == "Expense" ) {
        return true
      }
    })

    expenseTransactions.forEach( function( transaction ) {
      totalExpense += transaction.amount
    })

    return totalExpense;
  }



  return (
    <div className='app'>
      {/* app title */}
      <CreativelyTitle title="React Expense Tracker App"/>

      {/* expense tracker overview container */}
      <div className="overview">

        {/* balance container */}
        <div className="balance-ctn">

          {/* balance */}
          <span className="balance">
            balance: ${ getTotalIncome( transactions ) - getTotalExpense( transactions) }
          </span>

          {/* expense tracker add-expense button */}
          <button className="add-button" onClick={
            ( isExpenseFormVisible ) ? 
              () => { setIsExpenseFormVisible( false ) } :
              () => { setIsExpenseFormVisible( true ) }
          }>
            { ( isExpenseFormVisible ) ? "cancel" : "add" }
          </button>
        </div>

        {/* expense overview container */}
        <div className="expense-overview-ctn">

          {/* total expense text */}
          <Tile type="expense" getTotalExpense={getTotalExpense}
            getTotalIncome={getTotalIncome} transactions={transactions} />
          
          {/* total income text */}
          <Tile type="income" getTotalExpense={getTotalExpense}
            getTotalIncome={getTotalIncome} transactions={transactions} />
        </div>

        {/* expense addition form */}
        { isExpenseFormVisible && <form className="expense-form" onSubmit={ addTransaction }>
          {/* amount input */}
          <input type="number" className="expense-form-input" 
            placeholder="Amount" value={ amount } 
            onChange={ ( e ) => { ( !Number.isNaN( e.target.valueAsNumber ) ) ? setAmount( e.target.valueAsNumber ) : 0 } }/>
          
          {/* desc input */}
          <input type="text" className="expense-form-input" 
            placeholder="Description" value={ desc } onChange={ ( e ) => { setDesc( e.target.value ) } }/>

          {/* expense type radio button */}
          <div>
            <input type="radio" name="expense-type" id="expense-radio" className="expense-form-radio"
              checked={ ( type == "Expense") } onChange={ () => { setType("Expense") }}/>
            <label htmlFor="expense-radio" className="expense-form-label">
              expense
            </label>
            <input type="radio" name="expense-type" id="income-radio" className="expense-form-radio"
              checked={ ( type == "Income") } onChange={ () => { setType("Income") }}/>
            <label htmlFor="income-radio" className="expense-form-label">
              income
            </label>
          </div>

          {/* form "add transaction" submit */}
          <input type="submit" value="add transaction" className="add-button" />
        </form>}
      </div>

      {/* transactions list container */}
      <div className="transactions-list-ctn">

        {/* transaction search input */}
        <input type="text" className="transactions-search" placeholder="search items"
          value={ searchValue } onChange={ ( e ) => { setSearchValue( e.target.value ) }}/>

        {/* transactions list */}
        <div className="transactions-list">

          {/* render list of transactions based on values in transaction data */}
          {
            searchValue == "" && transactions.map( function( { type, desc, amount, id } ) {
              return <Transaction amount={ amount } type={ type } desc={ desc } key={ id }/>
            })
          }
          
          {/* check if transaction data is empty */}
          {
            ( transactions.length == 0 && searchValue == "" ) && <h2 className="display-text">
              You have no transactions for now
            </h2>
          }

          {/* check if use is searching for some type of transaction in history and */}
          {/* display results based on their search */}
          {
            // firstly filter out transactions that contain the searchValue from the transactions data
            ( searchValue != "" && transactions.length != 0 ) && transactions.filter( function( transaction ) {

              // filter condition checking if a transaction contains that 
              // string in it's desc
              if ( transaction.desc.includes( searchValue ) ) {
                return true;
              }
            })
            
            // render list of filtered transactions as elements for search results
            .map( function( { amount, type, id, desc } ) {
              return <Transaction amount={ amount } type={ type } desc={ desc } key={ id }/>
            })
          }
        </div>
      </div>


      {/* creatively links */}
      <CreativelyLinks/>
      
    </div>
  )
}

export default App
