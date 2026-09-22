"use strict";
const arr = Object.freeze([{year: 2023}, {year: 2024}]);
try {
  arr.sort((a, b) => b.year - a.year);
  console.log("Success");
} catch (e) {
  console.error("Error:", e.message);
}
