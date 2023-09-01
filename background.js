'use strict';

browser.menus.create({
	id: 'action-search',
	title: browser.i18n.getMessage('actionSearchImage'),
	contexts: ['image']
});

browser.menus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId !== 'action-search') {
		return;
	}
	
	const getOpenInBackgroundPref = browser.storage.sync.get({ openInBackground: true });
	
	getOpenInBackgroundPref.then(function(result) {
		browser.tabs.create({
			url: "https://yandex.ru/images/search?rpt=imageview&url=" + encodeURIComponent(info.srcUrl),
			active: !result.openInBackground,
			openerTabId: tab.id
		});
	});
});
