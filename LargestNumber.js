var numbers = [5];
var i = 0;
var readlineSync = require('readline-sync');
for(i=0;i<5;i++)
{
    numbers[i] = readlineSync.question('Enter the number '+ i + ":");
}
var largestNumber = Math.max(...numbers);
console.log("Largest Number :" + largestNumber);