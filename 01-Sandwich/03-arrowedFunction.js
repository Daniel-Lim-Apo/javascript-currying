const makeSandwich =
  (bread) => (protein) => (cheese) => (vegetables) => (condiments) =>
    `Sandwich with ${bread}, ${protein}, ${cheese}, ${vegetables}, and ${condiments}`;

// Using the curried function
const myCurriedSandwich =
  makeSandwich("whole grain")("turkey")("cheddar")("lettuce and tomato")(
    "special mustard"
  );

console.log(myCurriedSandwich);
