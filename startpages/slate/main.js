function start() {
    document.getElementById('keywords').focus();
    window.setInterval(function() {
        updatetime();
    }, 200);
}

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
        var text = document.getElementById("keywords").value;
        window.location = "https://duckduckgo.com/?q=" + text;
    }
}

function updatetime() {
    var d = new Date();
    var mins = String(d.getMinutes());
    var hours = String(d.getHours());
    if (hours.length == 1) {
        hours = '0' + hours;
    }
    if (mins.length == 1) {
        mins = '0' + mins;
    }
    var time = hours + ' ' + mins;
    document.getElementById("time").innerHTML = time;
}