
$(document).ready(function(){
    // preloader
    setTimeout(function () {
      $(".preloader").css({
        opacity : "0" , 
        visibility : "hidden" , 
      })
    }, 2000);

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
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
  // autoplay: true,
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


//    special-offers swiper

const specialOffersSwiper = new Swiper(' .special-offers .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers .swiper-button-next ',
    prevEl: '.special-offers .swiper-button-prev',
  },
  // Responsive breakpoints
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



//  new arrivals swiper

const newArrivalSwiper = new Swiper(' .newArrivals .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.newArrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.newArrivals .swiper-button-next ',
    prevEl: '.newArrivals .swiper-button-prev',
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
  // autoplay : true , 
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
  // autoplay : true , 
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
  // autoplay : true , 
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
  // autoplay : true , 
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
  // autoplay: true,
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

    //~~~~~~~~~ fixed header
    if($(window).width() < 768){
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 150) {
            $("header").addClass("fixed");
            $(".search").css("display" , "none");
            $(".open-search-btn").css("display" , "block") ;
            $(".open-search-btn i").removeClass("la-times") ;
            $("header").css("box-shadow" , "rgba(0, 0, 0, 0.24) 0px 3px 8px")
        } else {
            $("header").removeClass("fixed");
            $(".search").css("display" , "block");
            $(".open-search-btn").css("display" , "none") ;
            $("header").css("box-shadow" , "none");
        }
      });
      var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();
        
      (window.onscroll = function () {
        var o = $(window).scrollTop();
        prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
      })   
    }

    


// **************************************************************************************************

// open search 


$(".open-search-btn").click(function(){
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
})



// **************************************************************************************************


if($(window).width()  < 768 ) {
  $('.category-item , .offers-banner').removeClass('wow');
  $(".account-btn").click(function(){
    $(".account-details").toggleClass("show-account-details");
    $(this).toggleClass("account-btn-color");
    $(this).children(".la-user").toggleClass("user-color");
  })
  $(".lang").click(function(){
    $(".lang-details").toggleClass("show-lang-details ")
  })
}



/************************************************************************ */
 

// nested menus

if($(window).width() <= 768) {  
$(".li-drop").click(function (e) {
  e.preventDefault() ;
  console.log( $(this).children().children())
  $(this).children().children(".mega-items-parent").slideToggle(300) ;
  $(this).children(".nav-ancor").toggleClass("nav-arrow-rotate");
  $(".li-drop").not($(this)).children(".ul-drop").slideUp(300);
  })
  $(".li-drop .nav-ancor").removeAttr("href")
}

})


// fire wow


// wow = new WOW(
//   {
//   boxClass:     'wow',      // default
//   animateClass: 'bounceInUp', // default
//   offset:       0,          // default
//   mobile:       false,       // default
//   live:         false        // default
// }
// )
// wow.init();
new WOW().init();

// **************************************************************************************************