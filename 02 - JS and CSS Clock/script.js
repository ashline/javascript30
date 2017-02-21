window.onload = function() {
    var hourHand = document.getElementsByClassName('hour-hand')[0];
    var minHand = document.getElementsByClassName('min-hand')[0];
    var secondHand = document.getElementsByClassName('second-hand')[0];

    function setHandPositions(){
        var date = new Date();
        var second = (date.getSeconds() / 60 * 360) + 90;
        var hour = date.getHours() / 24 * 360 + 90;
        var min = date.getMinutes() / 60 * 360 + 90;

        hourHand.style.transform = 'rotate(' + hour + 'deg)';
        minHand.style.transform = 'rotate(' + min + 'deg)';
        secondHand.style.transform = 'rotate(' + second + 'deg)';
    }

    setInterval(function(){
        setHandPositions();
    }, 100);
    setHandPositions();
};
