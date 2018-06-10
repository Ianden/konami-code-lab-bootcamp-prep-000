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
  // your code here
  let index = 0;

  function onKeyDownHandler(e) {
    const key = e.key;

    if (key === codes[index]) {
      console.log(index);
      index++;

      if (index === codes.length) {
        alert("Whoop whoop");
      }

    } else {
      index = 0;
    }
  }
}
