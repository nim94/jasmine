import 'bootstrap'
import './sass/main.scss'
import './js/navbar.js'
import { relative } from 'path'

import owlCarousel from 'owl.carousel2';
 


$(document).ready(function(){    
    //scrollTop on nav-links
    $('.nav-link').on('click tap', function(e){
        let hook = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hook).offset().top
        }, 300, 'linear')
    });
    $('.navbar-brand').on('click tap', function(){
        $('body, html').animate({
            scrollTop: $('#content-body').offset().top,
        }, 300, 'linear');
        return false;
    }); 
    $('.freccia-giu').click(function(e){
        $('body, html').animate({
            scrollTop: $('#content-body').offset().top,
        }, 300, 'linear');
    });
    $('.scrolltop-button').click(function(){
        $('body, html').animate({
          scrollTop: $('#content-body').offset().top,
        }, 300, 'linear');
    });
    $(window).scroll(function() {
        if (isScrolledIntoView( $('#chi-sono') ) === true) {
            $('#chi-sono').addClass('animated fadeInLeft');
        }
        if (isScrolledIntoView( $('#servizi') ) === true) {
            $('#servizi h2').addClass('animated fadeInRight');
            $('.item').each(function(){
                $(this).addClass('animated fadeInRight');
            });
        }
        if (isScrolledIntoView( $('#dieta-per-lo-sport') ) === true) {
            $('#dieta-per-lo-sport').addClass('animated fadeInLeft');
        }
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }); 
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}








