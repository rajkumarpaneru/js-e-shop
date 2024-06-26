import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency');
const testCases = [
  [2095, '20.95', 'convers cents into dollars'],
  [0, '0.00', 'works with zero'],
  [2000.5, '20.01', 'rounds up to the nearest cent'],
  [2000.4, '20.00', 'rounds down to the nearest cent'],
].forEach((item) => {
  console.log(item[2]);
  if(formatCurrency(item[0]) === item[1]){
    console.log('passed');
  } else {
    console.log('failed');
  }
});
