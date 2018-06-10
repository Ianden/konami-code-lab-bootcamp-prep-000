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

  document.addEventListener('keydown', (event) => {
  alert("yooooo");
  const keyName = event.key;

    if (keyName === codes[index]) {
      index++;
      console.log(index)

      if (index === codes.length) {
        console.log('whoop')
        alert("Whoop whoop");
      }

    } else {
      index = 0;
    }

  });

}
