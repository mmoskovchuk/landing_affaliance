$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});


var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 2,
    loopedSlides: 11,
    spaceBetween: 70,
    centeredSlides: true,
    effect: 'slide',
    //centeredSlidesBounds: true,
    pagination: {
        el: '.swiper-pagination-slider',
        type: 'fraction',
        clickable: true,
        paginationClickable: true,
        formatFractionCurrent: function (number) {
            switch (number) {
                case 1:
                    myNum = '01';
                    break;
                case 2:
                    myNum = '02';
                    break;
                case 3:
                    myNum = '03';
                    break;
                case 4:
                    myNum = '04';
                    break;
                case 5:
                    myNum = '05';
                    break;
                case 6:
                    myNum = '06';
                    break;
                case 7:
                    myNum = '07';
                    break;
                case 8:
                    myNum = '08';
                    break;
                case 9:
                    myNum = '09';
                    break;
                default:
                    myNum = number
            }
            return myNum;
        },
        formatFractionTotal: function (number) {
            switch (number) {
                case 5:
                    myNum = '05';
                    break;
                case 6:
                    myNum = '06';
                    break;
                case 7:
                    myNum = '07';
                    break;
                case 8:
                    myNum = '08';
                    break;
                case 9:
                    myNum = '09';
                    break;
                default:
                    myNum = number
            }
            return myNum;
        },
        renderFraction: function (currentClass1, totalClass1) {
            return '<div class="landing-aff__slider_fraction"><div class="landing-aff__slider_fraction-el"><p class="' + currentClass1 + '"></p></div>' + '<div class="landing-aff__slider_fraction-el"><p class="landing-aff__slider_fraction-of'
                + '">/</p></div>' +
                '<div class="landing-aff__slider_fraction-el"><p class="' + totalClass1 + '"></p></div></div>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 50,
        },
        1250: {
            direction: 'vertical',
        }
    }
});

$( document ).ready(function() {
    var copyBtn = '';
    copyBtn = $('.landing-aff__coupon_buttons');

    $(copyBtn).on('click',function() {
        $(this).addClass('anim_btn');
        $(this).text('Copied');
        /*setTimeout(function(){
            $(this).removeClass('anim_btn');
            $(this).text('Copy Code');
        },1000)*/
    });

    new ClipboardJS('.landing-aff__coupon_buttons');

    $('.terms button').on('click', function(e){
        var parentDiv = $(this).parent();
        parentDiv.toggleClass('showTerms');
        $(this).toggleClass('btnUp');
        if($('.terms').hasClass('showTerms')){
            $(this).text('Terms and Conditions');
        }else{
            $(this).text('Terms and Conditions');
        }
    })
});

$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var elementId = $(this).attr("data-id");
        swiper.slideTo(elementId, 1000);
        var destination = $(elementClick).offset().top;
       /* if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }*/
        return false;
    });
});

/*random script*/

    function mix(b) {
        for (var c = document.createElement("div"), d = 0; d < b.length; d++) {
            var a = Math.floor(Math.random() * b.length),
                e = b[d],
                f = e.parentNode,
                a = b[a],
                g = a.parentNode;
            f.insertBefore(c, e);
            g.insertBefore(e, a);
            f.insertBefore(a, c);
        }
    };

document.addEventListener("DOMContentLoaded", mix(document.getElementsByClassName("swiper-slide")));

    function count(b){
        for (var d = 0; d < b.length; d++) {
            document.querySelectorAll(".landing-aff__slider_headers p")[d].textContent = d+1;
        }
    }

document.addEventListener("DOMContentLoaded", count(document.getElementsByClassName("swiper-slide")));