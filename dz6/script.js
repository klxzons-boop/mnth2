let str = "hello";     
let num = 10;          
let empty;             

console.log(empty);            
console.log(str === num);           
console.log(num < 13);             
console.log(num / str);       
console.log(typeof num);       
console.log(typeof str);       

let sum = prompt(")500 - получить 15% скидку, от 100 до 500 - 5%, от 500 до 1000 - 10% скидка. Введите сумму покупки:");
sum = Number(sum);

if (isNaN(sum) || sum < 0) {
  console.log("");
} else {
  let discount = 0;

  if (sum < 100) {
    discount = 0;
  } else if (sum >= 100 && sum < 500) {
    discount = 0.05;
  } else if (sum >= 500 && sum < 1000) {
    discount = 0.10;
  } else {
    discount = 0.15;
  }

  let finalSum = sum - sum * discount;
  finalSum = finalSum.toFixed(2); 
  console.log("скидка:", discount * 100 + "%");
  console.log("итоговая сумма   :", finalSum);
}  