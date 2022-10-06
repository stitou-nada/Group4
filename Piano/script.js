// const Random_API = 'https://api.quotable.io/random';
const keys = document.querySelectorAll(".key"),
note = document.querySelector(".nowplaying"),
hints = document.querySelectorAll(".hints");
const notes = [ 'QQSQFD',
              'QQSQGF',
              'QQKJHHG',
              'FFDQSQ',];
var position = 0;
console.log(notes);
document.getElementById("notes").innerHTML = notes[position];
// const insertedText = e.target.value;
// if (insertedText === notes[position]) {
//   position++;
// }



// function playNote(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
//     key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     console.log(String.fromCharCode(e.keyCode));


//   if (!key) return;

//   const keyNote = key.getAttribute("data-note");

//   key.classList.add("playing");
//   note.innerHTML = keyNote;
//   audio.currentTime = 0;
//   audio.play();
// }



// promis 
// function getApi(){
//  return fetch(Random_API)
//   .then(response=> response.json())
//   .then(data => data.content)
// }

// function nextApi(notes){

//   notes.split('').forEach(character => {
//     const characterSpan = document.createElement('span')
//     characterSpan.innerText = character 
//     document.getElementById('notes').appendChild(characterSpan)
//   })

// }
// nextApi()

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);
