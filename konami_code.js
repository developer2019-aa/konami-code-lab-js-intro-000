const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

  let i = 0;

document.body.addEventListener("keydown", (pressedHere) => {
  const key = pressedHere.key
  console.log(key)

  if (codes[i] == key) {
    i++;

    if (i === codes.length) {
      alert("Hurray you did something...");
      i = 0;
    }
  } else {
    i = 0;
  }
});
}
