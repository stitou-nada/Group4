// const piano=document.querySelector('.piano')
// piano.insertAdjacentHTML('beforeend',html)
// const notes=document.querySelectorAll('.cr')
// const keys=["A","B","C","D"]

var audioA=new Audio('./../notes/A.mp3')
var audioB=new Audio('./../notes/B.mp3')
var audioC=new Audio('./../notes/C.mp3')
var audioD=new Audio('./../notes/D.mp3')

const key1='A'
document.addEventListener('keydown',(e)=>{
    if(e.key==key1  || e.key==key1.toLowerCase() ){
        audioA.play()
        document.getElementById("A").style.color="red"

    }

})
const key2='B'
document.addEventListener('keydown',(e)=>{
    if(e.key==key2 || e.key==key2.toLowerCase()){
        audioB.play()
        document.getElementById("B").style.color="red"

    }
})
const key3='C'
document.addEventListener('keydown',(e)=>{
    if(e.key==key3  || e.key==key3.toLowerCase()){
        audioC.play()
        document.getElementById("C").style.color="red"

    }

})
const key4='D'
document.addEventListener('keydown',(e)=>{
    if(e.key==key4  || e.key==key4.toLowerCase()){
        audioD.play()
        document.getElementById("D").style.color="red"


    }

})
