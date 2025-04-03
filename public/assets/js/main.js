

(function($) {
    "use strict";
    

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });        

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

        //>> Brand Slider Start <<//
        if($('.brand-slider').length > 0) {
            const brandSlider = new Swiper(".brand-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 6,
                    },
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                },
            });
        }

         //>> Brand Slider Start <<//
         if($('.brand-slider-2').length > 0) {
            const brandSlider2 = new Swiper(".brand-slider-2", {
                spaceBetween: 0,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 6,
                    },
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                },
            });
        }

        //>> Testimonial Slider Start <<//
        if($('.testimonial-slider').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot2",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 3,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }
        
        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot4",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 1,
                    },
                    1199: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

         //>> Service Slider Start <<//
         if($('.service-slider').length > 0) {
            const serviceSlider = new Swiper(".service-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot3",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Brand Slider Start <<//
        if($('.project-slider').length > 0) {
            const projectSlider = new Swiper(".project-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 2,
                    },

                    575: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($(".get-insurance__progress-range").length) {
            $(".get-insurance__progress-range").each(function() {
                let balanceTag = $(this).find(".get-insurance__balance span");
                let balanceInput = $(this).find(".get-insurance__balance__input");
                $(this).find(".balance-range-slider").ionRangeSlider({
                    onStart: function(data) {
                        balanceTag.html(data.from);
                        balanceInput.prop("value", data.from);
                    },
                    onChange: function(data) {
                        balanceTag.html(data.from);
                        balanceInput.prop("value", data.from);
                    }
                });
            });
        }

        //>> Custom Accordion Tabs <<//
		$(".accordion-single .header-area").on("click", function () {
			if ($(this).closest(".accordion-single").hasClass("active")) {
				$(this).closest(".accordion-single").removeClass("active");
				$(this).next(".content-area").slideUp();
			} else {
				$(".accordion-single").removeClass("active");
				$(this).closest(".accordion-single").addClass("active");
				$(".content-area").not($(this).next(".content-area")).slideUp();
				$(this).next(".content-area").slideToggle();
			}
		});
        
        //Cart Increment Decriemnt

        // quntity increment and decrement
        const quantityIncrement = document.querySelectorAll(".quantityIncrement");
        const quantityDecrement = document.querySelectorAll(".quantityDecrement");
        if (quantityIncrement && quantityDecrement) {
            quantityIncrement.forEach((increment) => {
                increment.addEventListener("click", function () {
                    const value = parseInt(
                        increment.parentElement.querySelector("input").value
                    );
                    increment.parentElement.querySelector("input").value = value + 1;
                });
            });

            quantityDecrement.forEach((decrement) => {
                decrement.addEventListener("click", function () {
                    const value = parseInt(
                        decrement.parentElement.querySelector("input").value
                    );
                    if (value > 1) {
                        decrement.parentElement.querySelector("input").value = value - 1;
                    }
                });
            });
        }

         //Quantity 
         const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
         const btnminus = document.querySelectorAll('.qtyminus');
         const btnplus = document.querySelectorAll('.qtyplus');
 
         if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {
 
             inputs.forEach(function(input, index) {
                 const min = Number(input.getAttribute('min'));
                 const max = Number(input.getAttribute('max'));
                 const step = Number(input.getAttribute('step'));
 
                 function qtyminus(e) {
                     const current = Number(input.value);
                     const newval = (current - step);
                     if (newval < min) {
                         newval = min;
                     } else if (newval > max) {
                         newval = max;
                     }
                     input.value = Number(newval);
                     e.preventDefault();
                 }
 
                 function qtyplus(e) {
                     const current = Number(input.value);
                     const newval = (current + step);
                     if (newval > max) newval = max;
                     input.value = Number(newval);
                     e.preventDefault();
                 }
 
                 btnminus[index].addEventListener('click', qtyminus);
                 btnplus[index].addEventListener('click', qtyplus);
             });
         }

        //>> PaymentMethod Js Start <<//
        const paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
        $(".checkout-radio-single").on("click", function() {
            let paymentMethod = $("input[name='pay-method']:checked").val();
            $(".payment").html(paymentMethod);
        });
      

        //>> Mouse Cursor Start <<//
        function mousecursor() {
           if ($("body")) {
               const e = document.querySelector(".cursor-inner"),
                   t = document.querySelector(".cursor-outer");
               let n,
                   i = 0,
                   o = !1;
               (window.onmousemove = function(s) {
                   o ||
                       (t.style.transform =
                           "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                       (e.style.transform =
                           "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                       (n = s.clientY),
                       (i = s.clientX);
               }),
               $("body").on("mouseenter", "a, .cursor-pointer", function() {
                       e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                   }),
                   $("body").on("mouseleave", "a, .cursor-pointer", function() {
                       ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                       (e.classList.remove("cursor-hover"),
                           t.classList.remove("cursor-hover"));
                   }),
                   (e.style.visibility = "visible"),
                   (t.style.visibility = "visible");
           }
       }
       $(function() {
           mousecursor();
       });
       
        //>> Back To Top Slider Start <<//
        $(window).on('scroll', function() {
           if ($(this).scrollTop() > 20) {
               $("#back-top").addClass("show");
           } else {
               $("#back-top").removeClass("show");
           }
       });
       
       $(document).on('click', '#back-top', function() {
           $('html, body').animate({ scrollTop: 0 }, 800);
           return false;
       });
       

    }); // End Document Ready Function

     //Price Range Slideer
     document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");

        function updateAmount() {
            const minValue = parseInt(minSlider.value, 10);
            const maxValue = parseInt(maxSlider.value, 10);

            // Ensure the minimum value is always lower than the maximum value
            if (minValue > maxValue) {
                minSlider.value = maxValue;
            }

            // Update the displayed price range
            amount.value = "$" + minSlider.value + " - $" + maxSlider.value;

            // Calculate the percentage positions of the sliders
            const minPercent =
                ((minSlider.value - minSlider.min) /
                    (minSlider.max - minSlider.min)) *
                100;
            const maxPercent =
                ((maxSlider.value - maxSlider.min) /
                    (maxSlider.max - maxSlider.min)) *
                100;

            // Update the background gradient to show the active track color
            minSlider.style.background = `linear-gradient(to right, #F947351A ${minPercent}%, #F94735 ${minPercent}%, #F94735 ${maxPercent}%, #F947351A ${maxPercent}%)`;
            maxSlider.style.background = `linear-gradient(to right, #F947351A ${minPercent}%, #F94735 ${minPercent}%, #F94735 ${maxPercent}%, #F947351A ${maxPercent}%)`;
        }

        // Initialize the sliders and track with default values
        amount && updateAmount();

        // if (minSlider && maxSlider) {

        // Add event listeners for both sliders
        minSlider && minSlider.addEventListener("input", updateAmount);
        maxSlider && maxSlider.addEventListener("input", updateAmount);
        // }
    });

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }

    loader();
   

})(jQuery); // End jQuery

