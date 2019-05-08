"use strict"

$(function() {
    $(".gallery-btn").click(show_more_photoes);
    $("header a").click(change_page);
    change_header_bg();

    $(".menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

});


function show_more_photoes() {
    if ($(".img-gallery.viewed-gallery").hasClass("hide_viewed-gallery")) {

        // $(".img-gallery.viewed-1").removeClass("show_img-gallery");
        $(".img-gallery.viewed-1").addClass("hide_img-gallery");
        setTimeout(() => {
            // $(".img-gallery.viewed-gallery").removeClass("hide_viewed-gallery");
            $(".img-gallery.viewed-gallery").addClass("show_viewed-gallery");
        }, 1000);
    }
}

function change_page() {
    $("header a li").removeClass("active_page");
    $(this).find("li").addClass("active_page");
}

function change_header_bg() {
    setInterval(() => {
        let width = document.documentElement.clientWidth;
        let left = $(".bg-container").css("left");
        if (+left.slice(1, -2) > (width * 1.5)) {
            $(".bg-container").animate({ "left": "0vw" }, 1000)
        } else {
            $(".bg-container").animate({ "left": "-=100vw" }, 500)
        }
    }, 5000)
}