'use strict';


var contentscript_open_chat = localStorage.getItem('contentscript_open_chat') ? localStorage.getItem('contentscript_open_chat') : 'false';
var contentscript_show_chat = contentscript_open_chat === 'true' ? 'display:block;' : 'display:none;';

var horizontal = "position: fixed;width: 99%;right: 0;bottom: 0;background: #FFF;z-index: 10000;padding: 5px;border-top: 5px solid #737E85;";
var vertical = "position: fixed;height: 99%;right: 0;bottom: 0;background: #FFF;z-index: 10000;padding: 7px;border-left: 5px solid #737E85;";
var orientationOrig = localStorage.getItem('contentscript_orientation');
var orientation = orientationOrig === 'vertical' ? vertical : horizontal;
console.log(orientationOrig);
console.log(orientation);
chrome.runtime.onConnect.addListener(function (port) {
    if (port.name == "DISQUS_CONTENTSCRIPT") {
        port.onMessage.addListener(function (msg) {
            if (msg.key == 'show_chat') {
                $split_view_content.show();
                localStorage.setItem('contentscript_open_chat', true);
            }
            if (msg.key == 'hide_chat') {
                $split_view_content.hide();
                localStorage.setItem('contentscript_open_chat', false);
            }
            if (msg.key == 'vertical_chat') {
                localStorage.setItem('contentscript_orientation', 'vertical');
                $split_view_content.attr('style', '').attr('style', vertical);
            }
            if (msg.key == 'horizontal_chat') {
                localStorage.setItem('contentscript_orientation', 'horizontal');
                $split_view_content.attr('style', '').attr('style', horizontal);
            }
        });
    }
});

$('body').after('<div id="split_view_content"></div>');

$('#split_view_content').load(chrome.extension.getURL("panel.html"), 'key=value', function (k, v) {
    $(this).attr('style', '').attr('style', orientation + contentscript_show_chat);
});

function strpos(haystack, needle, offset) {
    var i = (haystack + '').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
}