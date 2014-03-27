'use strict';

$(document).ready(function () {
    var windowEvent = localStorage.getItem('closed');

    $('#show_chat').on('click', function () {
        if (windowEvent) {
            windowEvent = localStorage.setItem('closed', false);
        }

        console.log(windowEvent);
        window.postMessage({ type: "DISQUS_CONTENTSCRIPT", key: 'window_event', value: false }, "*");
    });


    window.addEventListener("message", function (event) {
        if (event.source != window)
            return;

        if (event.data.type && (event.data.type == "DISQUS_CONTENTSCRIPT")) {
            console.log(event.data);
            if (event.data.key == 'get_localstorage') {
                window.postMessage({ type: "DISQUS_CONTENTSCRIPT", key: 'window_event', value: windowEvent }, "*");
            }
        }
    }, false);
});