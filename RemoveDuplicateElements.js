var readlineSync = require('readline-sync');
var words = [5];
var i = 0;
var readlineSync = require('readline-sync');
for(i=0;i<5;i++)
{
    words[i] = readlineSync.question('Enter the words  '+ i + ":");
}
var unique = [...new Set(words)]
console.log(unique);