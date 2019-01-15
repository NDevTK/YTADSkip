chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        if (changeInfo.url) {
            if (youtube_parser(changeInfo.url)) {
                chrome.tabs.sendMessage(tabId, {
                    message: 'ytvideo'
                })
            }
        }
    }
);

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
