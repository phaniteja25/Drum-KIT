
$("h1").animate({opacity:0.5});

var n = document.querySelectorAll(".drum").length;               //calc the number of btns with class drum


//for adding event listener to all buttons
for(i=0;i<n;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonName = this.innerHTML;          //returns the inner html of each button
    makeSound(buttonName);
    buttonAnimation(buttonName);                     //function call
});
}




//adding event listener to the entire web site using keydown
document.addEventListener("keydown",function(event){
makeSound(event.key);//returns value if btn pressed
buttonAnimation(event.key);
});


//common function call for both button and key press
function makeSound(key)
{
    var buttonName = key;
    switch (buttonName) {
            case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
    
            case "s":    
                var snare= new Audio("sounds/snare.mp3");
                snare.play();
                break;
    
            case "d":    
                var tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
    
            case "j":    
                var tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
    
            case "k":    
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
    
            case "l":    
                var tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
    
        default: alert("Please check your code!");
            break;
    }

}


//for adding animation to the website
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);
}





