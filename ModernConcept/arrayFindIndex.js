var numbers=[1,2,3,4,5,6,7,8,9,10];
var results=numbers.findIndex((currentValue,index,arr)=>{
    return currentValue >6;
});
console.log(results);

//return here index number value