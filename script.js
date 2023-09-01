browser.contextMenus.create({
    id: "ruYandex",
    title: browser.i18n.getMessage("searchFor") + "Ru",
    contexts: ["image"],
    onclick: function(info, tab) {
        browser.tabs.create({
            url: "https://yandex.ru/images/search?rpt=imageview&url=" + encodeURIComponent(info.srcUrl)
        })
    }
});

browser.contextMenus.create({
    id: "comYandex",
    title: browser.i18n.getMessage("searchFor") + "Com",
    contexts: ["image"],
    onclick: function(info, tab) {
        browser.tabs.create({
            url: "https://yandex.com/images/search?rpt=imageview&url=" + encodeURIComponent(info.srcUrl)
    })
}
});


// ROMKAQ
// 2021 август 12

// remake for firefox 12 dec 2021