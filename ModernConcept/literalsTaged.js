function modifier(strings, ...values){
    const m=strings.reduce((preValues,currentValue)=>{
       return preValues+currentValue+(values.length ? "Mr."+values.shift():"");
    },"");
    return m;
}

var player1='Mahmudullah';
var player2='Tamim';

console.log(modifier`we have ${player1} and ${player2} in our cricket team.`);