let num = prompt('Please, enter number from 1 to 10');
let random = Math.ceil(Math.random()*10);

console.log("random: ", random);

if(num*1 == random) {
    alert("You guessed the number");
} else {
    alert("You did not guess the number");
}
