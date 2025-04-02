function isLeapYearr(year : any ): any {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
  } else {
      return false;
  }
}

console.log(isLeapYearr(2024)); // Output: true
console.log(isLeapYearr(1900)); // Output: false