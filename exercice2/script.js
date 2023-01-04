const div = document.querySelector("div")
console.log(div?.style)

const divBackground = getComputedStyle(div).backgroundColor 
const users =document.querySelectorAll("li")
console.log('users:', users)

if(divBackground === "rgb(173, 216, 230)"){
    console.log("this is lightblue !")
    console.log(`Hello ${users[0].textContent} and ${users[1].textContent} !`)
}