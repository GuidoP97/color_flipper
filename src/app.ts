import getRandomNumber from "./hex.js";

{
  const colors: string[] = ["green", "red", "rgba(133,122,200)", "#f15025"];

  const btn: HTMLElement = document.getElementById("btn");
  const color: HTMLSpanElement = document.querySelector(".color");

  btn.addEventListener("click", (): void => {
    // Obtener un número random entre 0 y 3
    const randomNumber: number = getRandomNumber(colors);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });
}
