// Basic function for making a pizza
function makePizza(size, crust, toppings) {
  return `Making a ${size} pizza with ${crust} crust and the following toppings: ${toppings.join(
    ", "
  )}.`;
}

// Curried version of the function
function curriedMakePizza(size) {
  return function (crust) {
    return function (toppings) {
      return `Making a ${size} pizza with ${crust} crust and the following toppings: ${toppings.join(
        ", "
      )}.`;
    };
  };
}

// Using the curried function
const makeLargePizza = curriedMakePizza("Large");
const makeLargeThinCrustPizza = makeLargePizza("Thin crust");
const pizzaDescription = makeLargeThinCrustPizza([
  "Pepperoni",
  "Mushrooms",
  "Onions",
]);

console.log(pizzaDescription);
