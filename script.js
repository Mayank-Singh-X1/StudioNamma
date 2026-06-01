let b2=document.querySelector('.body2')
let menu=document.querySelector('.menu')
// let video=document.querySelector('.video-container video')
let boxes=document.querySelectorAll('.box')

let h1 = document.querySelector('.heading1')
let h2 = document.querySelector('.heading2')
let h3 = document.querySelector('.heading3')
let h4 = document.querySelector('.heading4')
let h5 = document.querySelector('.heading5')
let h6 = document.querySelector('.heading6')
let h7 = document.querySelector('.heading7')

let v1= document.querySelector('.video1')
let v2= document.querySelector('.video2')
let v3= document.querySelector('.video3')
let v4= document.querySelector('.video4')
let v5= document.querySelector('.video5')
let v6= document.querySelector('.video6')
let v7= document.querySelector('.video7')


let seeall = document.querySelector('.seeall')
let bluebox = document.querySelector('.bluebox')

const detailHeading = document.querySelector('.underline-detail');
const images = document.querySelectorAll('.underline-detail .img');



flag=1
menu.addEventListener('click', ()=>{
    if(flag){
        b2.style.scale='1'
        b2.style.top='0'
        b2.style.transform='rotate(0deg)'
        menu.textContent='CLOSE'
        flag=0
    }else{
        b2.style.scale='0.6'
        b2.style.transform='rotate(-20deg)'
        b2.style.top='-100vh'
        menu.textContent='MENU'
        flag=1
        
    } 
})


document.addEventListener('mousemove', (e)=>{
    video.style.top= e.clientY + 'px'
    video.style.left= e.clientX + 'px'
    video.style.transition='linear 0.2s'
})

h1.addEventListener('mouseover', ()=>{
    v1.style.display='block'
})
h1.addEventListener('mouseout', ()=>{
    v1.style.display='none'
})


h2.addEventListener('mouseover', ()=>(
    v2.style.display='block'
))
h2.addEventListener('mouseout', ()=>(
    v2.style.display='none'
))

h3.addEventListener('mouseover', ()=>(
    v3.style.display='block'
))
h3.addEventListener('mouseout', ()=>(
    v3.style.display='none'
))

h4.addEventListener('mouseover', ()=>(
    v4.style.display='block'
))
h4.addEventListener('mouseout', ()=>(
    v4.style.display='none'
))

h5.addEventListener('mouseover', ()=>(
    v5.style.display='block'
))
h5.addEventListener('mouseout', ()=>(
    v5.style.display='none'
))

h6.addEventListener('mouseover', ()=>(
    v6.style.display='block'
))
h6.addEventListener('mouseout', ()=>(
    v6.style.display='none'
))

h7.addEventListener('mouseover', ()=>(
    v7.style.display='block'
))
h7.addEventListener('mouseout', ()=>(
    v7.style.display='none'
))

seeall.addEventListener('mouseover', ()=>{
    bluebox.style.visibility='visible'
})
seeall.addEventListener('mouseout', ()=>{
    bluebox.style.visibility='hidden'
})



let intervalId = null;
let index = 0;

detailHeading.addEventListener('mouseenter', () => {

    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        images.forEach(img => {
            img.style.opacity = 0;
        });

        images[index].style.opacity = 1;
        index = (index + 1) % images.length;
    }, 200);
});


detailHeading.addEventListener('mouseleave', () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        
        images.forEach(img => {
            img.style.opacity = 0;
        });
    }
});
