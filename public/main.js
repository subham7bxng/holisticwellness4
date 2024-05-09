var video = document.getElementById('videoPlayer');

function playVideo() {
    video.play();
}
function stopVideo() {
    video.pause();
    video.currentTime = 0;
};

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('nav-tp');
    if (window.scrollY > 80) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled'); 
    }
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150 ;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', jump_txty);

function jump_txty(){
    var reveals = document.querySelectorAll('.jump_txt');

    for(var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150 ;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('bhejo');
        }else{
            reveals[i].classList.remove('bhejo');
        }
    }
}



