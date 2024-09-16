const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");
const items = document.querySelectorAll(".item");
console.log(items)


function showOn(array) {
    for (let item of items) {
   item.textContent = "🤑";
    }

} 
showOn(items)
