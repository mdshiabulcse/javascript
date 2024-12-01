function log(anything){
    return console.log(anything);
}

// let myArray=[];//literal syntax

let mySet=new Set(); //consorturctor set
mySet.add(5)
mySet.add("Bangladesh").add(8).add('rahim');
// mySet.delete("Bangladesh");
log(mySet.has("Bangladesh"));
log(mySet.size);
log(mySet)