function log(anything){
    return console.log(anything);
}

// let myArray=[];//literal syntax

// let mySet=new Set(); //consorturctor set
// mySet.add(5)
// mySet.add("Bangladesh").add(8).add('rahim');
// // mySet.delete("Bangladesh");
// log(mySet.has("Bangladesh"));
// log(mySet.size);
// log(mySet)

//array to set===========
// let myArray=[1,2,3,4,5,6,7,8,9,10];
//  let mySet=new Set(myArray);
//  for(let value of mySet){
//      log(value);
//  }
//  log(mySet);

// set to array
// let myArray = [1,2,3,4,5,6];
// let mySet=new Set(myArray);
// log([...mySet]); //popular way
// log(Array.from(mySet)); //old way

// let myArray = [1,2,3,4,5,6,5,6,4];
// log([...new Set(myArray)]);

//set union====

// let a=new Set([1,2,3,4,5,6]);
// let b=new Set([5,6,7,8,9]);
//
// let union=new Set([...a,...b]);
// log(union);
//
// let intersection=new Set([...a].filter(x=>b.has(x)));
// log(intersection);
//
// let difference = new Set([...a].filter(x=>!b.has(x)));
// log(difference);

//weak set==========

// const ws=new WeakSet();
// ws.add([{a:1},{b:2},{c:3},{d:4}]);
// for(let value of ws){
//     log(value);
// }
// log(ws);

const ws =new WeakSet();
class SomeClass{
    constructor(){
        ws.add(this);
    }
    method(){
        if (!ws.has(this)){
            throw new Error('You can not access this method directly');
        }else{
            return 'i am method';
        }
    }
}

const a=new SomeClass();
log(a.method())

// log(SomeClass.prototype.method())