'use strict';

var contentscript_open_chat = localStorage.getItem('contentscript_open_chat') ? localStorage.getItem('contentscript_open_chat') : 'false';
var contentscript_show_chat = contentscript_open_chat === 'true' ? 'display:block;' : 'display:none;';
console.log(contentscript_open_chat);

chrome.runtime.onConnect.addListener(function(port) { console.log(port);
    if (port.name == "DISQUS_CONTENTSCRIPT") {
        port.onMessage.addListener(function(msg) {
            if(msg.key == 'show_chat') {
                $('#split_view_content').show();
                localStorage.setItem('contentscript_open_chat', true);
            }
            if(msg.key == 'hide_chat') {
                $('#split_view_content').hide();
                localStorage.setItem('contentscript_open_chat', false);
            }
        });
    }
});

var vertical = "position: fixed;width: 99%;bottom: 0;background: #FFF;z-index: 10000;padding: 5px;border-top: 5px solid #737E85;";
var horizontal = "position: fixed;height: 99%;right: 0;bottom: 0;background: #FFF;z-index: 10000;padding: 5px;border-left: 5px solid #737E85;";

$('body').after('<div id="split_view_content" style="' + horizontal + contentscript_show_chat + '"></div>');

$("#split_view_content").load(chrome.extension.getURL("panel.html"), function () {

});

function strpos(haystack, needle, offset) {
    var i = (haystack + '').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
}

