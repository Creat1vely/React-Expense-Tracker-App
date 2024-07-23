// prop-types library import
import PropTypes from 'prop-types';

function Tile({ type, getTotalExpense, getTotalIncome, transactions }) {
  return (
    <div className="tile">
        <span className="tile-title">
            { ( type == "expense" ) ? "expense" : "" }
            { ( type == "income" ) ? "income" : "" }
        </span>
        <span className={`tile-amount ${ ( type == "expense" ) ? "expense" : "" }
          ${ ( type == "income" ) ? "income" : "" }`}>
            { ( type == "expense" ) ? `$${ getTotalExpense( transactions) }`: "" }
            { ( type == "income" ) ? `$${ getTotalIncome( transactions ) }`: "" }
        </span>
    </div>
  )
}


// add prop-types for props-type-checking and intellisense
Tile.propTypes = {
    type: PropTypes.string.isRequired,
    getTotalExpense: PropTypes.func.isRequired,
    getTotalIncome: PropTypes.func.isRequired,
    transactions: PropTypes.array.isRequired
}


export default Tile
