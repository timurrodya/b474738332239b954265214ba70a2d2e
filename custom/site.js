function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}


function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}
var check_coockie = getCookie('auth');
console.log(check_coockie);
var checklocal = localStorage.getItem('auth') 

 if (!check_coockie && !checklocal){
    window.location.href = "auth.html"
}
$(document).ready(function () {
    var vsego = 10;
    var user = 9;
    var width = 100 / vsego * user;
    $('.fill_bar').width(width + '%');
    $("#open-chest a.button-big").click(function () {
        console.log('open-chest a.big-button');
        $('.level-block .count-level').html('0/10');

        user = 0;
        width = 100 / vsego * user;
        $('.fill_bar').width(width + '%');

        $('.chest-block').html('<img src="dash-assets/chest.png">');
        $('.level-block .number-level').html('<img src="dash-assets/num_2.png">');
        $('.luk img').removeClass('gray');
    });
});