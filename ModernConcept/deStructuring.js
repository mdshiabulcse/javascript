const user={
    id:335,
    name:"John",
    age:30,
    // education:{
    //     degree:'BSC',
    //     department:'CSE',
    // }
};

// const {name:title}= user; //none nested
// console.log(title)

const {education:{degree}={}}=user; //nested data
console.log(degree)



