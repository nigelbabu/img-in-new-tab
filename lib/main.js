var contextMenu = require("context-menu");
var tabs = require("tabs");
var data = require("self").data;

exports.main = function(options, callback) {
    var contextMenuImage = contextMenu.Item({
        label: "Open Image in New Tab",
        context: contextMenu.SelectorContext("img"),
        contentScriptFile: data.url('data.js'),
        onMessage: function (data) {
            tabs.open(data);
        }
    });
};
