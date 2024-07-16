// Basic function that takes three arguments
function identifyUFO(location, date, type) {
  return `UFO sighted at ${location} on ${date}, type: ${type}`;
}

// Currying the function to take one argument at a time
function identifyUFO(location) {
  return function (date) {
    return function (type) {
      return `UFO sighted at ${location} on ${date}, type: ${type}`;
    };
  };
}

// Example usage
const identifyAtArea51 = identifyUFO("Area 51");
const identifyOnDate = identifyAtArea51("2023-07-15");
const ufoSighting = identifyOnDate("Flying Saucer");

console.log(ufoSighting); // Output: UFO sighted at Area 51 on 2023-07-15, type: Flying Saucer
