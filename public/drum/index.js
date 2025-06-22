var size=document.querySelectorAll("button").length;
for(var i=0;i<size;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

function handleClick(){
    var buttonInnerHtml=this.innerHTML;
    audio(buttonInnerHtml);
    animation(buttonInnerHtml);
    

}
document.addEventListener("keypress",function(e){
    audio(e.key);
    animation(e.key);
})
function audio(x){
        switch (x) {
        case "w":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            console.log(buttonInnerHtml);
    }
}
function animation(y){
    document.querySelector("."+y).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+y).classList.remove("pressed");
    },100);
}