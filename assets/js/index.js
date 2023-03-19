alert("Connection Successful!");

/// To select all the buttons
let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function buttonClicked() {
      /// alert("Button Clicked !!");  ///Check the All buttons are clicked

      /////////////Detecting Mouse Click Pressed
      let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);

      //////// Button Animation
      buttonAnimation(buttonInnerHTML);
    });
}

//////////////Detecting Keyboard Button Pressed

document.addEventListener("keypress", function (event) {
  // console.log(event);
  makeSound(event.key);

  //////// Button Animation
  buttonAnimation(event.key);
});

///////////////////////////////Function for Sound
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("assets/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("assets/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("assets/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("assets/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("assets/sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("assets/sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("assets/sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentButton) {
  let activeButton = document.querySelector("." + currentButton);
  activeButton.classList.add("pressed");

  setTimeout(function (currentButton) {
    activeButton.classList.remove("pressed");
  }, 200);
}
// document.addEventListener("keypress", function keyboard() {
//   alert("Keyboard Buttons Pressed !!");
// });

/*----------------Select the single buttons

document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  alert("Button Clicked !!");
}

 */

/*--------------
for (let i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function buttonClicked() {


      console.log(this);     //////////////Return //// <button class="w drum">w</button>
      console.log(this.innerHTML);   ///////////Return the value inside the Button 
      this.style.color="white"       ///////////Change the color of the text inside the Button 
    });
}

*/
