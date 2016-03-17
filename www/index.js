﻿window.Application2 = window.Application2 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Guide/#themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if(window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !Application2.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    Application2.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application2,
        layoutSet: DevExpress.framework.html.layoutSets[Application2.config.layoutSet],
        navigation: Application2.config.navigation,
        commandMapping: Application2.config.commandMapping
    });
    Application2.app.router.register(":view/:id", { view: "home", id: undefined });
    Application2.app.on("navigatingBack", onNavigatingBack);
    Application2.app.navigate();
});
