Application2.home = function (params) {
    "use strict";

    var viewModel = {
        message: ko.observable("Welcome"),
        name: ko.observable(""),
        SayHi: function () {
            return this.message("Hi " + this.name());
        },
        Navigate : function () {
            Application2.app.navigate('Greeting/' + this.name());
        }
    };

    return viewModel;
};