let contextMenuItem = {
  id: "workTime",
  title: "WorkTime",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (OnClickData) {
  console.log(OnClickData.menuItemId);
});
