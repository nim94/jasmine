import 'bootstrap'
import './sass/main.scss'
import './js/navbar.js'
import { relative } from 'path';


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
            scrollTop: 0
        }, 300, 'linear');
        return false;
    });
     
});







