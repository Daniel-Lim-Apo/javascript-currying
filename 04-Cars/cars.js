// Step 1: Define a list of cars
const cars = [
  { brand: "Toyota", color: "red", year: 2020 },
  { brand: "Honda", color: "blue", year: 2019 },
  { brand: "Ford", color: "black", year: 2018 },
  { brand: "Toyota", color: "blue", year: 2021 },
  { brand: "Honda", color: "red", year: 2018 },
];

// Step 2: Create individual filter functions
const filterByBrand = (brand) => (car) => car.brand === brand;
const filterByColor = (color) => (car) => car.color === color;
const filterByYear = (year) => (car) => car.year === year;

// Step 3: Currying function
const curry = (fn) => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...moreArgs) => curried(...args, ...moreArgs);
  return curried;
};

// Step 4: Combine filters using currying
const applyFilters = (cars, filters) => {
  return cars.filter((car) => filters.every((filter) => filter(car)));
};

// Currying the filter application
const curriedApplyFilters = curry(
  (filters) => (cars) => applyFilters(cars, filters)
);

// Example usage of curried filters
const filteredCars = curriedApplyFilters([
  filterByBrand("Toyota"),
  filterByColor("blue"),
])(cars);

console.log(filteredCars);
