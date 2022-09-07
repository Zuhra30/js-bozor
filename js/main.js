var elForm = document.querySelector(".site-form");
var elInputText = document.querySelector("#js-inputText");
var elBtn = document.querySelector(".btn");
var elList = document.querySelector(".list");
var thinks = [];

elForm.addEventListener("submit", function(e) {
    e.preventDefault();

    thinks.push(elInputText.value);
    elList.textContent = "";
    console.log(elInputText.value);
    for (var think of thinks) {
        var item = document.createElement("li");
        item.textContent = think;
        item.classList.add("list-group-item")
        elList.appendChild(item);
        elInputText.value = "";
    }
});


var elCheckInput = document.querySelector(".js-input");
var elCheckBtn = document.querySelector("#js-btn");
var elCheckResult = document.querySelector(".js-result");



elCheckBtn.addEventListener("click", ()=> {
    var checkInputValue = elCheckInput.value;
    var checkResult = thinks.includes(checkInputValue);
    checkResult ? elCheckResult.textContent = "Bor" : elCheckResult.textContent = "Yo'q"
})

