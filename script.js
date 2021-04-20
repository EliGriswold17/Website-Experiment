
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
    function jump(){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
        character.classList.remove("animate");
    },300);
       
}
var checkDead = setInterval(function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft<20 && blockLeft>-20 && characterTop>=120){
        block.style.animation = "none";
        alert("You Burst Your Bubble! Corals Conquered: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

var hopSound;
var popSound;

function preload () {
    hopSound = loadSound("sounds/Hop.mp3")
    popSound = loadSound("sounds/Pop.mp3")
}

/* source code from KnifeCircus, changed properties to better suit my version of the game 
(his channel link is on the button) */