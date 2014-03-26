function actionTaken(type) {
    var splitViewContent = document.getElementById('split_view_content');

    if (type === 'minimize') {
        splitViewContent.style.height = "20px";
        splitViewContent.style.width = "54px";
    }
    if (type === 'maximize') {
        if (splitViewContent.style.height === '98%') {
            splitViewContent.style.height = "auto";
            splitViewContent.style.width = "98%";
        } else {
            splitViewContent.style.height = "98%";
            splitViewContent.style.width = "auto";
        }
    }
    if (type === 'close') {
        splitViewContent.parentNode.removeChild(splitViewContent);
    }
}