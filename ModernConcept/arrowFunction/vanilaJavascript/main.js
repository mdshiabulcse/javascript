const searchInput= document.querySelector(".search");
const display= document.querySelector(".result");
const thanks= document.querySelector(".thanks");


/* Normal function work perfectly*/

// function show(){
// //     display.innerHTML=this.value;
// //     let self =this;
// //     setTimeout(function (){
// //         thanks.innerHTML=`You Have typed: ${self.value}`;
// //     }, 1000);
// // }

const show=()=>{
    display.innerHTML=this.value;

}

searchInput.addEventListener("keyup",()=>{
    display.innerHTML=this.value;
});