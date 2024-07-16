// Define the basic function to add items to the cart
const addItemToCart = (cart, item) => {
  return [...cart, item];
};

// Curried Discount Functions
const applyPercentageDiscount = (discount) => (price) => {
  return price - (price * discount) / 100;
};

const applyFlatRateDiscount = (discount) => (price) => {
  return price - discount;
};

const applyBulkDiscount = (discount, minQty) => (price, qty) => {
  return qty >= minQty ? price - (price * discount) / 100 : price;
};

// Curried Tax Functions
const applyTax = (taxRate) => (price) => {
  return price + (price * taxRate) / 100;
};

const applyCategoryTax = (taxRates) => (category) => (price) => {
  return price + (price * (taxRates[category] || 0)) / 100;
};

// Function to calculate the final price
const calculateFinalPrice = (item, discountFunc, taxFunc) => {
  const discountedPrice = discountFunc(item.price);
  const finalPrice = taxFunc(discountedPrice);
  return { ...item, finalPrice };
};

// Initial Shopping Cart
let cart = [];

// Add items to the cart
cart = addItemToCart(cart, {
  name: "Shoes",
  price: 100,
  quantity: 2,
  category: "clothing",
});
cart = addItemToCart(cart, {
  name: "Hat",
  price: 50,
  quantity: 1,
  category: "accessories",
});

// Define discounts and taxes
const percentageDiscount = applyPercentageDiscount(10); // 10% discount
const flatRateDiscount = applyFlatRateDiscount(5); // $5 discount
const bulkDiscount = applyBulkDiscount(15, 2); // 15% discount for buying 2 or more

const taxRate = applyTax(8); // 8% tax
const categoryTax = applyCategoryTax({ clothing: 5, accessories: 10 }); // Clothing: 5%, Accessories: 10%

// Calculate final prices
const finalCart = cart.map((item) => {
  let discountFunc;
  if (item.quantity >= 2) {
    discountFunc = (price) => bulkDiscount(price, item.quantity);
  } else {
    discountFunc = flatRateDiscount;
  }

  const taxFunc = categoryTax(item.category);

  return calculateFinalPrice(item, discountFunc, taxFunc);
});

// Display the final cart
console.log("Final cart: \n");

console.log(finalCart);
