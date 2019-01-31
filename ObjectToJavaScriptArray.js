var object = {
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
    }
value = [];
for(key in object) {
    if(object.hasOwnProperty(key)) {
        value.push("\""+object[key]+"\"");
        //do something with value;
    }
}
console.log("["+value.toString()+"]");