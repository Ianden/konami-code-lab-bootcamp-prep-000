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
  const keyName = event.key;
  console.log(keyName);

    if (keyName === codes[index]) {
      index++;
      console.log('AAAA');

      if (index === codes.length - 1) {
        alert("Whoop whoop");
      }

    } else {
      index = 0;
    }

  });

}
