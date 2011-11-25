var contextMenu = require("context-menu");
var tabs = require("tabs");

exports.main = function(options, callback) {
    var contextMenuImage = contextMenu.Item({
        label: "Open Image in New Tab",
        context: contextMenu.SelectorContext("img"),
        contentScript: 'self.on("click", function (node, data) {' +
                       '  self.postMessage(node.src);' +
                       '});',
        onMessage: function (data) {
            tabs.open(data);
        }
    });
};
