function bang(text) {
    window.location.href = $('.highlight')[0].children[0].id
}

var ops = [';']
var invisinput = document.getElementById("eventlistener");

function check(e) {
    var val = $("#eventlistener").val()
    for (var i in $('.links').children()) {
        if ($('.links').children()[i].children === undefined) {
            break;
        }
        var shortcut = $('.links').children()[i].children[0].text.replace('[', '').replace(']', '') //className.split(/\s+/)[1]
        if (shortcut.includes(val.replace(':', ''))) {
            console.log(shortcut + ' includes ' + val)
            $('.links').children()[i].classList.add("highlight");
        } else {
            $('.links').children()[i].classList.remove("highlight");
        }
    }
    if (e.keyCode == 13) {
        for (var i in ops) {
            if ($("#eventlistener").val().startsWith(ops[i]) == false) {
                $("#eventlistener").val('')
                bang(val)
            }
        }
    }
}

$(function() {
    console.log("ready!");
    var interval = setInterval(function() {
        if ($('.highlight').children().length === 1) {
            window.location.href = $('.highlight')[0].children[0].id
            $("#eventlistener").val('')
            clearInterval(interval);
        }
        invisinput.focus()
    }, 500);
    for (var i in $('.links').children()) {
        $('.links').children()[i].classList.add("highlight");
    }
});