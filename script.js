const deepai = require('deepai')
let input = document.getElementById("text-input").value
const generateButton = document.getElementById("generate-button")
generateButton.addEventListener("click", generate)

deepai.setApiKey('2b97a5e7-1e72-4c35-96bc-038a43bdcafc')

(async function generate() {
    var response = await deepai.callStandardApi("text2img", {
            text: input,
    });
    console.log(response);
})()