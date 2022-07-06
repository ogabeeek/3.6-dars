var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elSelect = document.querySelector(".select");
var elBtn = document.querySelector(".button");
var elResult = document.querySelector(".result");

// const elRubl = 0.0057;
// const elEuro = 0.000087;
// const elDollar = 0.00009;

console.log(elInput , elSelect , elBtn);

elForm.addEventListener("submit" , function(event) {
    event.preventDefault();
    const elInputValue = elInput.value;
    const elSelectValue = elSelect.value;
    console.log(elInputValue);


    elResult.textContent = elInputValue * elSelectValue
})