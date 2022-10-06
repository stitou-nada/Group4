// const piano=document.querySelector('.piano')
// piano.insertAdjacentHTML('beforeend',html)
// const notes=document.querySelectorAll('.cr')
// const keys=["A","B","C","D"]

var audioA=new Audio('https://awiclass.monoame.com/pianosound/set/1.wav')
var audioB=new Audio('https://awiclass.monoame.com/pianosound/set/2.wav')
var audioC=new Audio('https://awiclass.monoame.com/pianosound/set/3.wav')
var audioD=new Audio('https://awiclass.monoame.com/pianosound/set/4.wav')
var audioE=new Audio('https://awiclass.monoame.com/pianosound/set/5.wav')
var audioF=new Audio('https://awiclass.monoame.com/pianosound/set/6.wav')
var audioG=new Audio('https://awiclass.monoame.com/pianosound/set/7.wav')
var audioH=new Audio('https://awiclass.monoame.com/pianosound/set/8.wav')



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
        // audioB.play()
        audioA.play()
        document.getElementById("B").style.color="red"

    }
})
const key3='C'
document.addEventListener('keydown',(e)=>{
    if(e.key==key3  || e.key==key3.toLowerCase()){
        // audioC.play()
        audioB.play()
        document.getElementById("C").style.color="red"

    }

})
const key4='D'
document.addEventListener('keydown',(e)=>{
    if(e.key==key4  || e.key==key4.toLowerCase()){
        // audioD.play()
        audioA.play()
        document.getElementById("D").style.color="red"




    }})

const key5='E'
document.addEventListener('keydown',(e)=>{
    if(e.key==key5 || e.key==key5.toLowerCase()){
        // audioE.play()
        audioD.play()
        document.getElementById("E").style.color="red"
    
    
    
    
        }
    
    })
    const key6='F'
document.addEventListener('keydown',(e)=>{
    if(e.key==key6  || e.key==key6.toLowerCase()){
        // audioF.play()
        audioC.play()
        document.getElementById("F").style.color="red"




    }

})
const key7='G'
document.addEventListener('keydown',(e)=>{
    if(e.key==key7  || e.key==key7.toLowerCase()){
        audioG.play()
        document.getElementById("G").style.color="red"




    }

})
const key8='H'
document.addEventListener('keydown',(e)=>{
    if(e.key==key8  || e.key==key8.toLowerCase()){
        audioH.play()
        document.getElementById("H").style.color="red"




    }

})