var wrap = document.querySelector('.wrapper');
var splash = document.querySelector('.splash');
var elem = document.querySelector('.base-bullet');
var ship = document.querySelector('.ship');
var explosion = document.querySelector('.explosion');

function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function linear(timeFraction) {
    return timeFraction;
}
ship.style.right = '0%';
ship.style.top = '-10%';
animate({
    duration: 6000,
    timing: makeEaseOut(linear),
    draw: function (progress) {
        ship.style.right = progress * 25 + '%';
        ship.style.top = progress * 10 + '%';
    }
});
ship.onclick = function (e) {
    function expBefore() {
        explosion.style.display = 'none';
    }
    setTimeout(expBefore, 700);

    function exp() {
        explosion.style.display = 'block';
    }
    setTimeout(exp, 500);

}
wrap.onclick = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    elem.style.opacity = '1';
    elem.style.left = '50%';
    elem.style.top = '50%';
    animate({
        duration: 500,
        timing: makeEaseOut(linear),
        draw: function (progress) {

            elem.style.left = centerX + progress * (x - centerX) + 'px';
            elem.style.top = centerY + progress * (y - centerY) + 'px';
            var shipX = ship.clientX;
            var shipY = ship.clientY;

            function splash2() {
                elem.style.opacity = '0';
                splash.style.left = x - 65 + 'px';
                splash.style.top = y - 55 + 'px';
                splash.style.display = 'block';
            }
            setTimeout(splash2, 400);
        }
    });
    elem.style.opacity = '1';
    splash.style.display = 'none';


};
