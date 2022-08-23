// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palette = document.querySelector("#palette")

const currentColor = document.querySelector("#current-color")

palette.addEventListener('click', (event)=>{
  currentColor.style.backgroundColor = event.target.style.backgroundColor;

})

const cell = document.querySelectorAll('.cell')
cell.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.target.style.backgroundColor = `${currentColor.style.backgroundColor}`;
  });
})