import 'bootstrap'
import './sass/main.scss'
import './js/navbar.js'
import { relative } from 'path';


$(document).ready(function(){
    
    //change color after link
    $('.contact, .nav-contact').on('click tap', function(){ 
        $(this).css('background', '#c4db0d');
    });  

    //scrollTop on nav-links
    $('.nav-link').on('click tap', function(e){
        let hook = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hook).offset().top
        }, 500, 'linear')
    });
    $('.sticky-brand').on('click tap', function(e){
        e.preventDefault;
        $('html, body').animate({
            scrollTop: 0   //doesn't work
        }, 500, 'linear');
        return false;
    });
     
});







