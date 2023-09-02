'use strict';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  try {
    const lblOpenBackground = document.getElementById('lbl-open-background');
    const inputOpenBackground = document.getElementById('input-open-background');

    if (!lblOpenBackground || !inputOpenBackground) {
      console.error('Required elements not found.');
      return;
    }

    lblOpenBackground.textContent = browser.i18n.getMessage('lblOpenInBackground');

    const result = await browser.storage.sync.get({ openInBackground: true });

    inputOpenBackground.checked = result.openInBackground;
  } catch (error) {
    console.error('Error initializing options:', error);
  }
}

document.getElementById('input-open-background').addEventListener('change', saveOptions);

function saveOptions() {
  const isOpenInBackgroundPrefChecked = document.getElementById('input-open-background').checked;
  browser.storage.sync.set({ openInBackground: isOpenInBackgroundPrefChecked })
    .then(() => {
      console.log('Options saved successfully.');
    })
    .catch((error) => {
      console.error('Error saving options:', error);
    });
}
