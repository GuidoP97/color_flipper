let hola: string = "sadasd"

{
  const hex: Array<string | number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  // #f15025
  const btn: HTMLElement = document.getElementById("btn");
  const color: HTMLSpanElement = document.querySelector(".color");

  btn.addEventListener("click", () => {
    let hexColor:string = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber(hex)]      
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  });
}

export default function getRandomNumber(arr:Array<any>): number {
  return Math.floor(Math.random() * arr.length);
}