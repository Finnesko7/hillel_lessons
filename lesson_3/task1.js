let old = prompt("How old are you?");
old = Number(old);
console.log(old);

if (old > 18) {
  alert("You got access to the service");
} else {
  let message =
    old <= 12 ? "We are recommend you another service" : "Access denided";
  alert(message);
}