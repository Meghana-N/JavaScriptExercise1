var readlineSync = require('readline-sync');
var num=readlineSync.question('Enter the number: ');
var str = num;
var finalstr;
for (var i=0;i<str.length;i++)
{
    if(parseInt(str[i])%2 == 0 && parseInt(str[i+1])%2 == 0)
    {
        finalstr = finalstr+str[i]+"-";
    }else{
        finalstr = finalstr+str[i];
    }
}
console.log(finalstr);