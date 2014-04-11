'use strict';

/**
 * set port
 */
var port = null;

function setPort(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        port = chrome.tabs.connect(tabs[0].id, {name: "DISQUS_CONTENTSCRIPT"});
        callback(port);
    });
}

function clickHandler(e) {
    setPort(function (port) {
        if (port) {
            port.postMessage({key: e.menuItemId, value: true});
        }
    });
}

/**
 * create menu
 */
var parent = chrome.contextMenus.create({
    "title": "Dictum",
    "contexts": ["all"]
});

var menu = {
    "show_chat": "Show Comments",
    "hide_chat": "Hide Comments",
    "vertical_chat": "Set Horizontal",
    "horizontal_chat": "Set Vertical"
};

for (var key in menu) {
    if (menu.hasOwnProperty(key)) {
        chrome.contextMenus.create({
            "parentId": parent,
            "id": key,
            "title": menu[key],
            "contexts": ["all"],
            "onclick": clickHandler
        });
    }
}

