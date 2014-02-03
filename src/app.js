define(function(require) {
    var App = function() {
    };

    App.prototype.render = function() {
        console.log("Test is saying: " + require("helloWorld").sayHello("Hello World !!"));
        return ('require.js up and running');
    };

    return App;

});
