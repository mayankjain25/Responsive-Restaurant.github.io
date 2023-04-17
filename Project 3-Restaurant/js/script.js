let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times'); /*used to change the menu bar to cross on mobile view everytime you hover over it*/
    navbar.classList.toggle('active');
}


let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .navbar a');



window.onscroll = () =>{

    menu.classList.remove('fa-times'); /*used to change the menu bar to cross on mobile view everytime you hover over it*/
    navbar.classList.remove('active');

    section.forEach(sec=>{
        let top=window.scrollY;
        let height=sec.offsetHeight;
        let offset=sec.offsetTop-150;
        let id=sec.getAttribute('id');

        if(top=>offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };

    });
    
}


document.querySelector('#search-icon').onclick= () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick= () =>{
    document.querySelector('#search-form').classList.remove('active');
}

 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 100,
    centeredSlides:true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop:undefined,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides:true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    loop:true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// const loaderContainer=document.querySelector('.loader-container');


// window.addEventListener('load', () => {
//     loaderContainer.parentElement.removeChild(loaderContainer);
// });

// (function(){
//     var myDiv = document.getElementById("myDiv"),

//       show = function(){
//         myDiv.style.display = "block";
//         setTimeout(hide, 5000); // 5 seconds
//       },

//       hide = function(){
//         myDiv.style.display = "none";
//       };

//     show();
//   })();