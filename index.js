const colorInput = document.querySelector("#color-scheme-input")
const submit = document.querySelector("#generate_submit")

colorInput.addEventListener("change", watchColorPicker, false)

function watchColorPicker() {
      let colorHex = colorInput.value;
      return colorHex;
  }

console.log(colorInput)

fetch(`https://www.thecolorapi.com/scheme?hex=${watchColorPicker}`)
    .then(response => response.json())
    .then(data => console.log(data))

console.log(submit)

submit.addEventListener("click", () => {
    console.log(watchColorPicker())
    document.querySelector(".test").innerHTML = watchColorPicker()
})