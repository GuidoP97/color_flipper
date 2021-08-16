import getRandomNumber from "./hex.js";
{
    var colors_1 = ["green", "red", "rgba(133,122,200)", "#f15025"];
    var btn = document.getElementById("btn");
    var color_1 = document.querySelector(".color");
    btn.addEventListener("click", function () {
        // Obtener un número random entre 0 y 3
        var randomNumber = getRandomNumber(colors_1);
        document.body.style.backgroundColor = colors_1[randomNumber];
        color_1.textContent = colors_1[randomNumber];
    });
}
