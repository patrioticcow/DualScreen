'use strict';

window.postMessage({ type: "DISQUS_CONTENTSCRIPT", key: 'get_localstorage', value: '' }, "*");

window.addEventListener("message", function (event) {
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "DISQUS_CONTENTSCRIPT")) {
        console.log(event.data);
    }
}, false);

var vertical = "position: fixed;width: 99%;bottom: 0;background: #FFF;z-index: 10000;padding: 5px;border-top: 5px solid #737E85;";
var horizontal = "position: fixed;height: 99%;right: 0;bottom: 0;background: #FFF;z-index: 10000;padding: 5px;border-left: 5px solid #737E85;";

$('body').after('<div id="split_view_content" style="' + horizontal + ' display:none;"></div>');

$("#split_view_content").load(chrome.extension.getURL("panel.html"), function () {

});

function strpos(haystack, needle, offset) {
    var i = (haystack + '').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
}

