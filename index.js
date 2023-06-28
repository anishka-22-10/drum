var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btn = this.innerHTML;
        handleClick(btn);
        buttonAnimation(btn);


    });
}
document.addEventListener("keypress", function(event) {

    handleClick(event.key);
  
    buttonAnimation(event.key);
  
  });
function handleClick(key) {
    switch (key) {
        case "w":
            var tom2 = new Audio("./tom-2.mp3");
            tom2.play();
            break;

        case "a":
            var tom1 = new Audio("./tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var crash = new Audio('./crash.mp3');
            crash.play();
            break;

        case "d":
            var tom4 = new Audio('./tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var kick = new Audio('./kick-bass.mp3');
            kick.play();
            break;

        case "k":
            var snare = new Audio('./snare.mp3');
            snare.play();
            break;

        case "l":
            var tom3= new Audio('./tom-3.mp3');
            tom3.play();
            break;


        default: console.log(key);

    }
}

    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);
      
        activeButton.classList.add("pressed");
      
        setTimeout(function() {
          activeButton.classList.remove("pressed");
        }, 100);
      
      }
    

