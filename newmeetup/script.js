const words = ["friendships", "skills", "networks", "passions", "careers"]

const textToReplace = document.getElementById("toreplace")

let currentIndex = 0

function updateText(){
    textToReplace.innerText = words[currentIndex]
    currentIndex = (currentIndex+1) % words.length
    setTimeout(updateText, 2000)
}

updateText()