// NOTE object below must be a valid JSON
window.Application2 = $.extend(true, window.Application2, {
  "config": {
    "layoutSet": "navbar",
    "navigation": [
      {
        "title": "Home",
        "onExecute": "#home",
        "icon": "home"
      },
      {
        "title": "About",
        "onExecute": "#about",
        "icon": "info"
      },
     
    ]
  }
});