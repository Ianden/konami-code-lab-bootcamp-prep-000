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

  document.keyup(function(e) {
    keyName = e.which

    if (keyName === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Whoop whoop");
      }

    } else {
      index = 0;
    }
  }




}
