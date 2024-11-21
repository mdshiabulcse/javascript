var numbers=[1,2,3,4,5,6,7,8,9,10];

var results=numbers.filter((currentValue,index,arr)=>{
    console.log(arr);
    console.log(index);
    return currentValue>4;
});
console.log(numbers);
console.log(results);