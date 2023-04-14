
$(window).load(function(){
  $(".preloader").fadeOut();
})




$(document).ready(function(){
  
   
// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

//  bestseller swiper

const bestsellerSwiper = new Swiper(' .bestseller .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});





//  Ceramic swiper

const ceramicSwiper = new Swiper(' .ceramic .swiper', {
  loop: true,
  autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.ceramic .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.ceramic .swiper-button-next ',
    prevEl: '.ceramic .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

//  sanitary Ware swiper

const sanitaryWareSwiper = new Swiper(' .sanitary-ware .swiper', {
  loop: true,
  autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.sanitary-ware .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.sanitary-ware .swiper-button-next ',
    prevEl: '.sanitary-ware .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

//  marble  swiper

const marbleSwiper = new Swiper(' .marble .swiper', {
  loop: true,
  autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.marble .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.marble .swiper-button-next ',
    prevEl: '.marble .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//  decorations  swiper

const decorationsSwiper = new Swiper(' .decorations .swiper', {
  loop: true,
  autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.decorations .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.decorations .swiper-button-next ',
    prevEl: '.decorations .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// brands swiper
const brandsSwiper = new Swiper('.brands .swiper', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ' .brands  .swiper-button-next ',
    prevEl: '.brands .swiper-button-prev',
  },
  pagination: {
    el: '.brands .swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween:10,
    },
    400: {
      slidesPerView: 3,
      spaceBetween:20,
    },
    530: {
      slidesPerView: 4,
      spaceBetween:10,
    },
    992: {
      slidesPerView:5,
      spaceBetween:20,
    },
    1200: {
      slidesPerView:7,
      spaceBetween:10,
    },
  },
});


/*******************************************************************************************/



// **************************************************************************************************


// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "visible") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").css("overflow" , "hidden") ;
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
})

// **************************************************************************************************



// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


// **************************************************************************************************

//  nested menus in footer


if($(window).width() < 768){
$(".footer-title").click(function(e){
  e.preventDefault() ;
  $(this).next().slideToggle(300) ; 
  $(this).toggleClass("arrow-rotate");
  $(".footer-title").not($(this)).next().slideUp(300);
  $(".footer-title").not($(this)).removeClass("arrow-rotate");
})
}


// **************************************************************************************************



//fixed nav

    //~~~~~~~~~ fixed header in mobile
  
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 150) {
            $("header").addClass("fixed");
            $(".search").css("display" , "none");
            if($(window).width() < 768){
              $(".open-search-btn").css("display" , "block") ;
            } 
            $(".open-search-btn i").removeClass("la-times") ;
            $("header").css("box-shadow" , "rgba(0, 0, 0, 0.24) 0px 3px 8px");
            $(".account-details").removeClass("show-account-details");
            $(".account-btn").children(".la-user").removeClass("user-color");
            if($(window).width() > 768){
              $(".logo img").css("width" , "200px");
            $(".main-nav").css("padding" , "10px 0");
            $(".li-drop > a").css("line-height" , "35px");
            } 
            
        } else {
            $("header").removeClass("fixed");
            $(".search").css("display" , "block");
            $(".open-search-btn").css("display" , "none") ;
            $("header").css("box-shadow" , "none");
            if($(window).width() > 768){
              $(".logo img").css("width" , "279px");
              $(".main-nav").css("padding" , "25px 0");
              $(".li-drop > a").css("line-height" , "46px");
            } 
            
        }
      });
      var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();
        
      (window.onscroll = function () {
        var o = $(window).scrollTop();
        prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
      })   
    


// **************************************************************************************************

// open search 


$(".open-search-btn").click(function(){
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
})


$(".cart").click(function(){
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
})


// **************************************************************************************************


if($(window).width()  < 768 ) {
  // $('.category-item , .offers-banner').removeClass('wow');
  $(".account-btn").click(function(){
    $(".account-details").toggleClass("show-account-details");
    $(this).toggleClass("account-btn-color");
    $(this).children(".la-user").toggleClass("user-color");
  })
  $(".lang").click(function(){
    $(".nav-dropdown-lang-details").slideToggle(300)
  })
}



/************************************************************************ */
 

// nested menus

if($(window).width() <= 768) {  
$(".li-drop").click(function (e) {
  e.preventDefault() ;
  $(this).children().children(".mega-items-parent").slideToggle(300) ;
  $(this).children(".nav-ancor").toggleClass("nav-arrow-rotate");
  $(".li-drop").not($(this)).children(".ul-drop").slideUp(300);
  })
  $(".li-drop .nav-ancor").removeAttr("href")
}

})


// fire wow



new WOW().init();

// **************************************************************************************************