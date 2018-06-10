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
  var index = 0;
  window.onLoad = function() {

  document.addEventListener('keypress', (event) => {
  const keyName = event.key;

    if (keyName === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Whoop whoop");
      }

    } else {
      index = 0;
    }
  });

}

}

init()
