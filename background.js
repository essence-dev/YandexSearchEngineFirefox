'use strict';

const createContextMenu = () => {
  browser.menus.create({
    id: 'action-search',
    title: browser.i18n.getMessage('actionSearchImage'),
    contexts: ['image']
  });
};

const handleMenuItemClick = async (info, tab) => {
  if (info.menuItemId !== 'action-search') {
    return;
  }

  try {
    const { openInBackground } = await browser.storage.sync.get({ openInBackground: true });

    const imageUrl = chrome.i18n.getMessage("extensionImageUrl") + encodeURIComponent(info.srcUrl);

    browser.tabs.create({
      url: imageUrl,
      active: !openInBackground,
      openerTabId: tab.id
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

createContextMenu();
browser.menus.onClicked.addListener(handleMenuItemClick);
