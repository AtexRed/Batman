$(document).ready(function () {

    let tabsLink = $('.tabs-link');

    tabsLink.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-link-active').toggleClass('tabs-link-active');
        $(this).toggleClass('tabs-link-active');
    });
});