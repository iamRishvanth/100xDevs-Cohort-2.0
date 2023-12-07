/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let expenses = {}
  for(const tnx of transactions){
    expenses[tnx.category] = (expenses[tnx.category] || 0) + tnx.price
  }
  let output = []
  for(const category of Object.keys(expenses)){
    output.push({category: category, totalSpent: expenses[category]})
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
