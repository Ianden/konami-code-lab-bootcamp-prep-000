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
  console.log(keyName);

    if (keyName === codes[index]) {
      index++;
      console.log('AAAA');
      console.log(index)
      console.log(codes.length)

      if (index === codes.length) {
        alert("Whoop whoop");
      }

    } else {
      index = 0;
    }

  });

}
