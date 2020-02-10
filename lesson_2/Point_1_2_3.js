let numbers = prompt('Please, enter numbers separated by commas');
let count = 0;
let sum = 0;
let avarage = 0;

numbers.trim();
numbers.split(',').forEach(function(n) {
    if(Number(n) || n == 0){
        count++;
        sum += parseInt(n);
    } else {
        alert("Error: " + n + " is not a number!");
        return false;
    }
});

avarage = sum/count;
alert("Avarage: " + avarage);
