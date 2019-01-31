var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var averageMarks = 0;
for (var i = 0; i < students.length; i++) {
    averageMarks += students[i][1];
    var average = (averageMarks / students.length);
}

console.log("Average grade: " + (averageMarks) / students.length);

if (average < 60) {
    console.log("Grade : F");
}
else if (average < 70) {
    console.log("Grade : D");
}
else if (average < 80) {
    console.log("Grade : C");
} 
else if (average < 90) {
    console.log("Grade : B");
} 
else if (average < 100) {
    console.log("Grade : A");
}