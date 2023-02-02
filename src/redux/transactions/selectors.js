import { selectAllTransactions } from "./transactionsSlice"
import { selectFilteredValue } from "./transactionsSlice"

export const selectFilteredTransactions = state => {
  const transactions = selectAllTransactions(state)
  const filteredValues = selectFilteredValue(state)
  let sortedTransactions = [...transactions];

  if(filteredValues) {
    Object.keys(filteredValues).forEach(property => {
      const value = filteredValues[property]
      if(property === 'transactionDate' && value !== ''){
        sortedTransactions = sortedTransactions.filter((transaction) => new Date(transaction[property]).getMonth() === Number(filteredValues[property]))
      }

      if(property === 'comment' && value){
        sortedTransactions = sortedTransactions.filter(transaction => transaction[property].toLowerCase().trim().includes(filteredValues[property].toLowerCase().trim()))
      }

      if(property === 'amount' && value){
        if(filteredValues[property] === 'low'){
        sortedTransactions =  sortedTransactions.sort((prevTransaction, nextTransaction) => prevTransaction[property] - nextTransaction[property])
          }
        else if(filteredValues[property] === 'high') {
          sortedTransactions =  sortedTransactions.sort((prevTransaction, nextTransaction) => nextTransaction[property] - prevTransaction[property])
        }
      }

      if((property === 'type' || property === 'categoryId') && value){
        sortedTransactions = sortedTransactions.filter(transaction => transaction[property] === filteredValues[property])
      }
    })
    }
    return sortedTransactions
  }
