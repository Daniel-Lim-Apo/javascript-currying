function makeSandwich(bread, protein, cheese, vegetables, condiments) {
  return `Sandwich with ${bread}, ${protein}, ${cheese}, ${vegetables}, and ${condiments}`;
}

const mySandwich = makeSandwich(
  "whole grain",
  "turkey",
  "cheddar",
  "lettuce and tomato",
  "mustard"
);
console.log(mySandwich);
