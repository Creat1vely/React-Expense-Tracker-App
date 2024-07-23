// prop-types library import
import PropTypes from 'prop-types';

function Transaction({ type, desc, amount }) {
  // check transaction type and return appropriate jsx markup based on the type
  if ( type == "Expense" ) {
    return  <div className="transaction debit">
              <span className="transaction-name">
                { desc }
              </span>

              <span className="transaction-amount">
                ${ amount }
              </span>
            </div>
  } else if ( type == "Income" ) {
    return <div className="transaction credit">
              <span className="transaction-name">
                { desc }
              </span>

              <span className="transaction-amount">
                ${ amount }
              </span>
            </div>
  }
}

// add prop-types for props-type-checking and intellisense
Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}


export default Transaction
