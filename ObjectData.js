var object =
    [{ 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
    { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
    { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
    { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
    { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
    { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }];

//Display all objects with occupation as 'Programmer'
var programmer = [];
for(var i=0;i<object.length;i++)
{
    for (key in object[i]) {
        if (object[i][key] == "Programmer") {
            programmer.push(object[i]);
        }
    }
}
console.log(programmer);

//Sort the object on basis of the age key in the descending order
function compare(a,b) 
  {
   if (a.age > b.age)
     return -1;
   if (a.age < b.age)
     return 1;
   return 0;
  }

 console.log("Sort the object on basis of the age key in the descending order");
 console.log(object.sort(compare));

 //Objects of objects
 //convert
var result = {};
for (var i=0; i<object.length; i++) {
  result[arr[i].key] = arr[i].value;
}

//result
console.log(result);

//Recreate the above array of objects into the following object of objects 


//Use the map function to create a new array containing only names present in myObj

