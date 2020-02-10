let position = prompt("Please enter your position");
var old = "";
var exp = "";
let result = "";

switch (position) {
  case "driver":
    getData();
    result =
      old >= 30 && exp >= 2 ? "Good. You suit us" : "Sorry, you not suit us";
    break;
  case "teacher":
    getData();
    result =
      old >= 30 && exp >= 3 ? "Good. You suit us" : "Sorry, you not suit us";
    break;
  case "pilot":
    getData();
    result =
      old >= 30 && exp >= 3 ? "Good. You suit us" : "Sorry, you not suit us";
    break;
  default:
    result = "Sorry we have only this vacations: driver, pilot, teacher";
    break;
}

alert(result);

function getData() {
  old = Number(prompt("How old are you?"));
  exp = Number(prompt("How many you work?"));
}
