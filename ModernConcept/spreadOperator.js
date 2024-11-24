var numbers = [1,2,3];

var a=[...numbers]
var newNumbers=[...numbers,4,5,6];

console.log(newNumbers);

numbers.push(6,7)
console.log(a)


var num1=[1,2,3,4,5];
var num2=[6,7,8];

var num3=[...num1,...num2];
console.log(num3);

//object spread

var myObj={
    a:1,
    b:2,
};
var myObj2={
    x:3,
    y:4,
}
console.log(
    {
        ...myObj,
        ...myObj2
    }
);