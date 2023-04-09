// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeDetails, expensesDetails, totalAmountDetails} = props

  return (
    <>
      <li className="money-details-totalAmount">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="img"
          />
        </div>
        <div>
          <p className="title">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {totalAmountDetails}
          </p>
        </div>
      </li>
      <li className="money-details-totalIncome">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="img"
          />
        </div>
        <div>
          <p className="title">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeDetails}
          </p>
        </div>
      </li>
      <li className="money-details-totalExpenses">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="img"
          />
        </div>
        <div>
          <p className="title">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesDetails}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
