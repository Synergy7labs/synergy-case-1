function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }

  return total; 
}

// Test data
const items = [
  { name: "Product A", price: 100 },
  { name: "Product B", price: 200 },
  { name: "Product C", price: 300 }
];

console.log("Total:", calculateTotal(items));