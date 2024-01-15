"use strict";

browser.action.onClicked.addListener(handleClick);

async function handleClick(tab) {
  // via activeTab, we have what we need from tab.*
  let newIndex = tab.index + 1,
      newUrl = `https://cooked.wiki/${encodeURI(tab.url)}`;
  // tabs API is available
  await browser.tabs.create({url: newUrl, index: newIndex}); // active defaults to true
}
