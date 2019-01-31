var string = "webmaster";
var splitString = string.split("");
var sortedArray = splitString.sort();
var sortedString = "";
for(let i=0;i<sortedArray.length;i++)
{
    sortedString = sortedString+sortedArray[i];
}
console.log(sortedString);