function onExtensionInstalled(listener) {
  chromeRuntimeOnInstalledAddListener(listener)
}

function getActive() {
  return chromeStorageLocalGet('active')
}

function setActive(activeValue) {
  return chromeStorageLocalSet({ active: activeValue })
}

function onMessage(listener) {
  chromeRuntimeOnMessageAddListener(listener)
}

async function sendMessage(message) {
  const tabs = await chromeTabsQuery()

  for (const tab of tabs) {
    chromeTabsSendMessage(tab.id, message)
  }
}

// Chrome API! WARNING: not handle exceptions

function chromeRuntimeOnMessageAddListener(listener) {
  chrome.runtime.onMessage.addListener(listener)
}

function chromeTabsSendMessage(tabId, message) {
  chrome.tabs.sendMessage(tabId, message)
}

function chromeRuntimeOnInstalledAddListener(listener) {
  chrome.runtime.onInstalled.addListener(listener)
}

/**
 * chrome.storage.local.get returning a promise
 * @param {string} key
 */
function chromeStorageLocalGet(key) {
  return new Promise(resolve => {
    chrome.storage.local.get([key], result => {
      resolve(result[key])
    })
  })
}

/**
 * chrome.storage.local.set returning a promise
 * @param {object} {key: value} object
 */
function chromeStorageLocalSet(object) {
  return new Promise(resolve => {
    chrome.storage.local.set(object, result => resolve)
  })
}

/**
 * chrome.tabs.query returning a promise
 * @returns Tabs array
 */
function chromeTabsQuery(object) {
  return new Promise(resolve => {
    chrome.tabs.query({}, resolve)
  })
}
