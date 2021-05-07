
const button = document.getElementById("generate-button")
const apiKey = "2b97a5e7-1e72-4c35-96bc-038a43bdcafc"
deepai.setApiKey(apiKey)

// Generate an image from input string when button is clicked
button.addEventListener("click", generateImage)

// Feed string to API as text input
function generateImage() {
    //Get text input from user
    const textInput = document.getElementById("text-input").value
    
    //Makes call to the api and returns the image url. Once returns passes response into 
    //updateImageUrl which updates the image source on the main page
    deepai.callStandardApi("text2img", {
          text: textInput
        }).then(res => {
            updateImageUrl(res.output_url)
            getCaptions(res.output_url)
        })
        

}

//updates image url from api response
function updateImageUrl(url){
    document.getElementById("generated-image").src = url
}

function getCaptions(img){
    deepai.callStandardApi("densecap", {
        image: img
      }).then(res => updateImageCaptions(res))
    
    function updateImageCaptions(captions) {
        for (let cap in captions.output.captions) {
            if (cap.includes("grass"||"leaves"||"sky"||"ground")) {
                delete cap
            } else {
                continue
            }
        }
        document.getElementById("image-tags").innerHTML = captions.output.captions[0].caption
        console.log(captions)
    }
}







