var left = document.querySelector('#left');
var right = document.querySelector('#right');

left.addEventListener('click', function () {
    var x = document.querySelector(".slider-card");
    x.scrollBy(-200, 0);
})
right.addEventListener('click', function () {
    var x = document.querySelector(".slider-card");
    x.scrollBy(200, 0);
})



// function scrollx() {
//     var online_page = document.querySelector('.online-right');
//     var online = document.querySelector('.online-left');
//     var position = online.getBoundingClientRect().top;
//     var screenposition = window.innerHeight;
//     if (position < screenposition) {
//         online.classList.add("onlineanimation");
//         setTimeout(function () {
//             online_page.classList.add("onlineanimation");
//         }, 3000);
//         online.classList.add("animationimg");
       
//     } else {
//         online.classList.remove("animationimg");
//         online_page.classList.remove("onlineanimation");
//     }

//     online_page.style.display ="block";
 
// }

// window.addEventListener('scroll', scrollx);

function scrolly(){
    var left_page = document.querySelector('.online-left');
    var position = online.getBoundingClientRect().top;
    var screen_posiion = window.innerHeight;
   

    if(position < screen_posiion){
        left_page.classList.add("left-side-a");
   
    }else{
        left_page.classList.remove("left-side-a");
    }
   
      
 
    
}
window.addEventListener('scroll', scrolly);