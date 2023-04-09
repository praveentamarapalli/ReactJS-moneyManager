// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onClickDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <>
      <li className="transaction-item">
        <p className="title">{title}</p>
        <p className="title">{amount}</p>
        <p className="title">{type}</p>
        <div>
          <button
            type="button"
            className="delete-button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </li>
      <hr />
    </>
  )
}

export default TransactionItem
