// requirejs.config({
//     paths: {
//         'jquery': '../lib/jquery',
//         'underscore': '../lib/underscore'
//     },

//     shim: {
//         'underscore': {
//             exports: '_'
//         }
//     }
// });

define(['app'], function (App) {
    var app = new App();
    app.render();
    var hello = require("HelloWorld");

});
