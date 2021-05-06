const button = document.getElementById("generate-button")
const apiKey = "2b97a5e7-1e72-4c35-96bc-038a43bdcafc"
deepai.setApiKey(apiKey)

deepai.callStandardApi("sentiment-analysis", {
  text: "I'm really happy today!"
}).then(res => console.log(res))

button.addEventListener("click", generateImage)

function generateImage() {
    console.log("Button is working!")
}