const $myColours = ["red", "orange", "yellow", "green", "blue", "purple"]
// console.log($myColours[3])
const messageList = document.getElementById("colorMessages")
messageList.innerHTML += `<li>Value on the 3rd index is: ${$myColours[3]}</li>`
$myColours[4] = "cyan"
messageList.innerHTML += `<li>Value on the 4th index is: ${$myColours[4]}</li>`
$myColours.push("avicado")
messageList.innerHTML += `<li>Array values after push method: ${$myColours}</li>`
$myColours.pop()
messageList.innerHTML += `<li>Array values after pop method: ${$myColours}</li>`
$myColours.unshift("salmon")
messageList.innerHTML += `<li>Array values after unshift method: ${$myColours}</li>`
$myColours.shift()
messageList.innerHTML += `<li>Array values after shift method: ${$myColours}</li>`
const $darkColours = ["darkred", "darkorange", "blue", "darkgreen", "darkblue", "magenta"]
const $allColours = $myColours.concat($darkColours)
messageList.innerHTML += `<li>allColour array contains: ${$allColours.join("-")}</li>`
function doYouHaveColour(colourName){
    const colourMessage = document.getElementById("colorResponse")
    if ($allColours.includes(colourName)){
        colourMessage.innerHTML = `Yes we have ${colourName} colour`
    }
    else{
        colourMessage.innerHTML = `No we do not have ${colourName} colour`
    }
}
doYouHaveColour("purple")
for(let i = 0; i < 6; i++){
    console.log($allColours[i])
}
for(let i = 0; i < $allColours.length; i++){
    console.log($allColours[i])
}
const colourBoxSection = document.getElementById("coloredBoxes")
function addBoxes (){
    for(color of $allColours){
        colourBoxSection.innerHTML += `<div class = "box" style = "background-color: ${color}"></div>`
    }
}