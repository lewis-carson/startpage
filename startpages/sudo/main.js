var ops = [';']
var invisinput = document.getElementById("eventlistener");

function check(e) {
    var val = $("#eventlistener").val()
    if (val.startsWith(';')) {
        if (e.keyCode == 13) {
            window.location.href = 'https://google.com/search?q=' + val.replace(';', '')
            $("#eventlistener").val('')
        }
    }
    for (var i in $('.links').children()) {
        var shortcut = $('.links').children()[i].children[0].text.replace('[', '').replace(']', '')
        if (shortcut.includes(val)) {
            $('.links').children()[i].classList.add("highlight");
        } else {
            $('.links').children()[i].classList.remove("highlight");
        }
    }
}

$(function() {
    var interval = setInterval(function() {
        if ($('.highlight').children().length === 1) {
            window.location.href = $('.highlight')[0].children[0].id
            $("#eventlistener").val('')
            clearInterval(interval);
        }
        invisinput.focus()
    }, 500);
    for (var i in $('.links').children()) {
        if ($('.links').children()[i].children === undefined) {
            break;
        }
        $('.links').children()[i].classList.add("highlight");
    }
});