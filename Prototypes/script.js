const piano = document.querySelector('#piano')
const data =['C','D','E','F','G','A','B']

let html =''
for (let octave = 0; octave < 2; octave++) {
    for (let i = 0; i <data; i++){
        html+=`<div class="whiteNote" data-code='${data[i]}${octave}'></div>`
    }
   
    
}
piano.insertAdjacentHTML('beforeend',html);
    