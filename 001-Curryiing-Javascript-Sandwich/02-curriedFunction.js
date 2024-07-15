function makeSandwich(bread) {
  return function (protein) {
    return function (cheese) {
      return function (vegetables) {
        return function (condiments) {
          return `Sandwich with ${bread}, ${protein}, ${cheese}, ${vegetables}, and ${condiments}`;
        };
      };
    };
  };
}

// Using the curried function
const sandwichWithBread = makeSandwich("whole grain");
const sandwichWithProtein = sandwichWithBread("turkey");
const sandwichWithCheese = sandwichWithProtein("cheddar");
const sandwichWithVegetables = sandwichWithCheese("lettuce and tomato");
const myCurriedSandwich = sandwichWithVegetables("mustard");

console.log(myCurriedSandwich);
