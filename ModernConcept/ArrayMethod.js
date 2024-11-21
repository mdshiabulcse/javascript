// var numbers=[1,2,3,4,5,6];
// var results =numbers.find(function(currentValue,currentIndex,array){
//     return currentValue > 4;
// },this);
// console.log(results)


class ArrayMethod{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    test(){
        console.log("Hello World!");
    }
    // exampleFunction(){ //this ned declara
    //     let array=[1,2,3];
    //     array.find(function(){
    //         this.test();
    //     }, this);
    // }

    exampleFunction(){//arrow function work here
        let array=[1,2,3];
        array.find(()=>{
            this.test();
        });
    }
}
let array = new ArrayMethod('shiab',30);
array.exampleFunction()