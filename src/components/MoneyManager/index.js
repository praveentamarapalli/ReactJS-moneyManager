import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: 'INCOME',
    totalIncome: 0,
    totalExpenses: 0,
    totalAmount: 0,
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      type: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {transactionsList, title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
    }))
    if (type === 'INCOME') {
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome + parseInt(amount),
        totalAmount: prevState.totalAmount + parseInt(amount),
      }))
    }
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        totalExpenses: prevState.totalExpenses + parseInt(amount),
        totalAmount: prevState.totalAmount - parseInt(amount),
      }))
    }
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredTransactionList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    const deletedTransactionDetails = transactionsList.find(
      eachTransaction => eachTransaction.id === id,
    )
    this.setState({
      transactionsList: filteredTransactionList,
    })
    const {type, amount} = deletedTransactionDetails
    if (type === 'INCOME') {
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome - parseInt(amount),
        totalAmount: prevState.totalAmount - parseInt(amount),
      }))
    }
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        totalExpenses: prevState.totalExpenses - parseInt(amount),
        totalAmount: prevState.totalAmount + parseInt(amount),
      }))
    }
  }

  render() {
    const {
      transactionsList,
      title,
      amount,
      type,
      totalIncome,
      totalExpenses,
      totalAmount,
    } = this.state
    return (
      <div className="main-container">
        <div className="head-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="welcome-note">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails
            incomeDetails={totalIncome}
            expensesDetails={totalExpenses}
            totalAmountDetails={totalAmount}
          />
        </ul>
        <div className="bottom-container">
          <form onSubmit={this.onAddTransaction} className="form-container">
            <h1 className="heading-bottom">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              type="text"
              placeholder="TITLE"
              id="title"
              value={title}
              onChange={this.onChangeTitle}
              className="input"
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              type="text"
              placeholder="AMOUNT"
              id="amount"
              value={amount}
              onChange={this.onChangeAmount}
              className="input"
            />
            <label htmlFor="amount" className="label">
              TYPE
            </label>
            <select onChange={this.onChangeType} className="select">
              {transactionTypeOptions.map(eachTransactionType => (
                <option
                  key={eachTransactionType.optionId}
                  value={eachTransactionType.optionId}
                >
                  {eachTransactionType.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="heading-bottom">History</h1>
            <div className="transactions-list">
              <div className="title-container">
                <p className="title">Title</p>
                <p className="title">Amount</p>
                <p className="title">Type</p>
                <p className="title">Delete</p>
              </div>
              <hr className="line" />
              <ul className="history-list-container">
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    key={eachTransaction.id}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
