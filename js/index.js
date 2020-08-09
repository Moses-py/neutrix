$(document).ready(() => {

    $(window).scroll({
        behavior: "smooth"
    })

    $('#navMenu').click(() => {
        $('.navigation').css({
            "left" : 0
        })
    })

    $(".close-button").click(() => {
        $('.navigation').css({
            "left" : "-105%"
        })
    })
})