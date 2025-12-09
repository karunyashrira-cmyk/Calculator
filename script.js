const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if(value === "C") {
            currentInput = "";
            display.value = "";
        } 
        else if(value === "=") {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
