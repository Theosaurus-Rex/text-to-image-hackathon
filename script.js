
const button = document.getElementById("generate-button")
const apiKey = "2b97a5e7-1e72-4c35-96bc-038a43bdcafc"
deepai.setApiKey(apiKey)

// deepai.callStandardApi("sentiment-analysis", {
//   text: "I'm really happy today!"
// }).then(res => console.log(res))

// Generate an image from input string when button is clicked
button.addEventListener("click", generateImage)

// Feed string to API as text input
function generateImage() {
    const textInput = document.getElementById("text-input").value
    console.log(textInput)
}



