/*jslint browser: true*/
/*global jQuery, $*/

$(document).ready(function () {
    
    /* For the Sticky navigation */
    'use strict';
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '85px'
    });
    
    /* Scroll on Buttons */
    
    
});

/**/