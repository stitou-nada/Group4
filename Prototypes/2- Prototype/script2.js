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

const cmp=0

const key1='A'
document.addEventListener('keydown',(e)=>{
    if(e.key==key1  || e.key==key1.toLowerCase() ){
        audioA.play()
        audioA.currentTime=0;
    
        document.getElementById("A").style.color="green"
    }
    // else{
    //     document.getElementById("A").style.color="red"

    // }

})
const key2='B'
document.addEventListener('keydown',(e)=>{
    if(e.key==key2 || e.key==key2.toLowerCase()){
        // audioB.play()
        audioA.play()
        audioA.currentTime=0;

        document.getElementById("B").style.color="green"
    }

})
const key3='C'
document.addEventListener('keydown',(e)=>{
    if(e.key==key3  || e.key==key3.toLowerCase()){
        // audioC.play()
        audioB.play()
        audioB.currentTime=0;
        document.getElementById("C").style.color="green"

    }
   

})
const key4='D'
document.addEventListener('keydown',(e)=>{
    if(e.key==key4  || e.key==key4.toLowerCase()){
        // audioD.play()
        audioA.play()
        audioA.currentTime=0;

        document.getElementById("D").style.color="green"
    }
  

})

const key5='E'
document.addEventListener('keydown',(e)=>{
    if(e.key==key5 || e.key==key5.toLowerCase()){
        // audioE.play()
        audioD.play()
        audioD.currentTime=0;

        document.getElementById("E").style.color="green"
    }
   
    })
    const key6='F'
document.addEventListener('keydown',(e)=>{
    if(e.key==key6  || e.key==key6.toLowerCase()){
        // audioF.play()
        audioC.play()
        audioC.currentTime=0;
        document.getElementById("F").style.color="green"
    }
   
})
const key7='G'
document.addEventListener('keydown',(e)=>{
    if(e.key==key7  || e.key==key7.toLowerCase()){
        audioG.play()
        audioG.currentTime=0;
        document.getElementById("G").style.color="green"
    }


})
const key8='H'
document.addEventListener('keydown',(e)=>{
    if(e.key==key8  || e.key==key8.toLowerCase()){
        audioH.play()
        audioH.currentTime=0;
        document.getElementById("H").style.color="green"
    }
    

})