var object = JSON.parse('{"mike":"Book","jason":"sweater","chels":"iPad"}');
var value = [];
for(key in object) {
    if(object.hasOwnProperty(key)) {
        value.push(object[key]);
        //do something with value;
    }
}
console.log(value);