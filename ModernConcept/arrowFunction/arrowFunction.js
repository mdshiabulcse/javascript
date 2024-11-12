// function number(){
//     return 10;
// }
//
// console.log(number());

//fat arrow function

// let number =()=>{
//     return 10;
// }
// console.log(number());

//simple arrow online
// let number=()=> 10;
// console.log(number())

//parameter function
// function playGround(number) {
//     return number;
// }
//
// console.log(playGround(10));

// let playGround=(number)=>{
//     return number;
// }
// console.log(playGround(60));


// let arrowFunction = (a, b)=>{
//     return a + b;
// }
// console.log(arrowFunction(30,60));

//this not work in foreach so call self variable self
// var javaScript={
//     name: 'JavaScript',
//     libraries:['React','Vue','Angular'],
//     printLibraries:function (){
//         var self=this;
//         this.libraries.forEach((parameterValue)=>{
//             console.log(`${self.name} loves ${parameterValue}`);
//         })
//     }
// };
// javaScript.printLibraries();

//fat arrow function  ============
var javaScript={
    name: 'JavaScript',
    libraries:['React','Vue','Angular'],
    printLibraries:function (){
        this.libraries.forEach((parameterValue)=> console.log(`${this.name} loves ${parameterValue}`));
    },
};
javaScript.printLibraries();