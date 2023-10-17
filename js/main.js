$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
        autoplayHoverPause: true,
        responsive: {

            0: {
                items: 2,
                margin: 20,
                nav: false,
            },

            601: {
                items: 2,
                margin: 40,
                nav: false,
            },

            1000: {
                items: 3,
                margin: 40,
                nav: false,
              
            },
        },
    });
  });

const openNavBtn = document.querySelector('#openMobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');




openNavBtn.onclick = function () {
        mobileNav.classList.remove('none');
        document.body.classList.add('none-scroll');
}

closeNavBtn.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('none-scroll');
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }