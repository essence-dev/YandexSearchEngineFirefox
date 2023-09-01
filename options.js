'use strict';

function init() {
	document.getElementById('lbl-open-background').textContent = browser.i18n.getMessage('lblOpenInBackground');
	
	const getOpenInBackgroundPref = browser.storage.sync.get({ openInBackground: true });
	
	getOpenInBackgroundPref.then(function(result) {
		document.getElementById('input-open-background').checked = result.openInBackground;
	});
}

function saveOptions() {
	const isOpenInBackgroundPrefChecked = document.getElementById('input-open-background').checked;
	browser.storage.sync.set({ openInBackground: isOpenInBackgroundPrefChecked });
}

document.addEventListener('DOMContentLoaded', init);
document.getElementById('input-open-background').addEventListener('change', saveOptions);
