const string = "Good morning Pinecone Academy!";
const characters = string.split("");
const displayOfText = document.getElementById("theText");
let currentIn = 0;

let reversing = false;


function type () {
    if (!reversing) {
        displayOfText.innerHTML = characters.slice(0, currentIn + 3).join("");
        currentIn++;
        if(currentIn===string.length - 1) reversing = true;
    }else{
        displayOfText.innerHTML = characters.slice(0, currentIn - 1).join("");
        currentIn--;
        if(currentIn===0) reversing = false;
    }
}
setInterval(type, 100);