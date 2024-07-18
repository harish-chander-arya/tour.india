var owl = $('.Top-Trending-Destinations');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }

    }
});
owl.on('.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
var owl = $('.Holidays-by-Interest');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    responsive: {
        0: {
            items: 2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }

    }
});
owl.on('.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

var owl = $('.banner-slide');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,

});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
}) 



  function f1(){
    document.querySelector(".navbar").style.display="block";
    document.getElementById("openmenubtn").style.display="none";
    document.getElementById("closemenubtn").style.display="block";
  

  }

  function f2(){

document.getElementById('hill-station').style.display='flex';
document.getElementById('wildlife').style.display='none';

  }

  function f3(){

    document.getElementById('hill-station').style.display='none';
    document.getElementById('wildlife').style.display='flex';
    
      }
      
   function closemenu(){
    document.querySelector(".navbar").style.display="none";
    document.getElementById("openmenubtn").style.display="block";
    document.getElementById("closemenubtn").style.display="none";
   }   