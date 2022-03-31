const colorInput = document.querySelector("#color-scheme-input")
const colorSchemeSelect = document.querySelector("#color-scheme")
const submit = document.querySelector("#generate_submit")
const redBg = document.querySelector(".generator_color_bg.red")
const app = document.querySelector("#generator_colors")

function renderColorsHtml(data) {
    const colorsArr = data.colors;
    let html = ''

    for (let color of colorsArr) {
        html += `
        <div class="generator_color">
            <div class="generator_color_bg" style="background:${color.hex.value}">
                <p class="generator_color_content_mobile">${color.hex.value}</p>
            </div>
            <div class="generator_color_content"><p>${color.hex.value}</p></div>
        </div>`
    }
    app.innerHTML = html
}

colorInput.addEventListener("change", watchColorPicker, false)

function watchColorPicker() {
      const colorHex = colorInput.value;
      return colorHex;
  }

submit.addEventListener("click", () => {
    const colorHex = colorInput.value.substring(1);
    const colorScheme = colorSchemeSelect.value;

    const baseUrl = 'https://www.thecolorapi.com';
    const endPoint = '/scheme'
    const query = `?hex=${colorHex}&mode=${colorScheme}`
    const url = `${baseUrl}${endPoint}${query}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        renderColorsHtml(data)
    })
})