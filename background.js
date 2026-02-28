chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openWithIMGrabber",
    title: "Use IMGrabber to open this image",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openWithIMGrabber") {
    chrome.tabs.create({ url: info.srcUrl });
  }
});