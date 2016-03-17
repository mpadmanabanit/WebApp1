Application2.Greeting = function (params) {
    "use strict";
    
    var viewModel = {
        message: ko.observable("Hello " + params.id + "!")
    };

    return viewModel;
};