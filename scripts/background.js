'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    //console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');


console.log(chrome.windows.getCurrent({}, function (callback) {
    console.log(callback);
}));

chrome.windows.getCurrent(function (win) {
    chrome.tabs.getAllInWindow(win.id, function (tabs) {
        // Should output an array of tab objects to your dev console.
        console.debug(tabs);
    });
});


