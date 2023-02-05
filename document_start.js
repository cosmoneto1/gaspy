var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
// s.onload = function() {
//     this.remove();
// };
(document.head || document.documentElement).appendChild(s);

function consultaGA() {
  if (sessionStorage.getItem("dataLocalGA")) {
    var val = sessionStorage.getItem("dataLocalGA");
    console.log(val);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (sessionStorage.getItem("dataLocalGA")) {
    let list = JSON.parse(sessionStorage.getItem("dataLocalGA"));
    sendResponse({ list, ok: true });
  } else {
    sendResponse({ ok: false });
  }
});
