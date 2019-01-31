var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

var properties = []

for (var key in student) {
    if (student.hasOwnProperty(key)) {
        properties.push(key)
    }
}
console.log(properties);
    