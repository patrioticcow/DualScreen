'use strict';

var vertical = "position: fixed;width: 98%;bottom: 0;background: #FFF;z-index: 10000;padding: 5px;border: 5px solid #737E85;";
var horizontal = "position: fixed;height: 98%;right: 0;bottom: 0;background: #FFF;z-index: 10000;padding: 5px;border: 5px solid #737E85;";

if (strpos(document.URL, 'answersingenesis.org')) {
    $('body').after('<div id="split_view_content" style="' + horizontal + '"></div>');

    $("#split_view_content").load(chrome.extension.getURL("panel.html"), function () {

    });
}

$(function() {
    injectJs(chrome.extension.getURL('scripts/injected.js'));
});

function injectJs(link) {   $('<script type="text/javascript" src="'+link+'"/>').appendTo($('head')); }

function strpos (haystack, needle, offset) {
    var i = (haystack+'').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
}

