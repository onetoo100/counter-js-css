/* Get elements */
const valueCounter = document.querySelector("#value-counter"),
  btns = document.querySelectorAll(".btn");

let value = 0;

/* Check the buttons and call a function that will increase, decrease or just reset the value, 
    it will also change the value's color */
btns.forEach((element) => {
  element.addEventListener("click", () => {
    counter(element.classList[1]);
    value > 0
      ? (valueCounter.style.color = "#012340")
      : value < 0
      ? (valueCounter.style.color = "#730202")
      : (valueCounter.style.color = "#000");
  });
});

function counter(type) {
  /* Ternary operator with multiple conditions, is the same of:
        if (type === "increase") {
            value++;
        } else if (type === "decrease") {
            value--;
        } else {
            value = 0;
        }    
    */
  type === "increase" ? value++ : type === "decrease" ? value-- : (value = 0);

  valueCounter.textContent = value;
}
