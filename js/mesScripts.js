$(document).ready(function () {
    $('#nav-burger').click(function(e){
        e.preventDefault();
        $('.nav-principale').toggleClass('sidebar-open');
        $('#nav-close').toggleClass.addClass('show');
    })
    $('#nav-close').click(function(e){
        e.preventDefault();
        $('.nav-principale').toggleClass('sidebar-open');
        $('#nav-close').toggleClass('sidebar-open');
    })
});
