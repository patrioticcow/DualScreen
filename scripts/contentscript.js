'use strict';

console.log('\'Allo \'Allo! Content script');

if (document.URL === '') {
    $('body').after('<div id="split_view" style="position: fixed;width: 100%;bottom: 0;background: #FFF;z-index: 1000;"></div>');

    $("#split_view").load(chrome.extension.getURL("panel.html"), function () {

    });
}