{
    var hex_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    // #f15025
    var btn = document.getElementById("btn");
    var color_1 = document.querySelector(".color");
    btn.addEventListener("click", function () {
        var hexColor = "#";
        for (var i = 0; i < 6; i++) {
            hexColor += hex_1[getRandomNumber(hex_1)];
        }
        color_1.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    });
}
export default function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
}
