var btnTeste = document.querySelector("#btn");
var listEvents = document.querySelector("#listEvents");

btnTeste.onclick = async () => {
  let queryOptions = { active: true, lastFocusedWindow: true };

  try {
    let [tab] = await chrome.tabs.query(queryOptions);
    const response = await chrome.tabs.sendMessage(tab.id, {
      message: "teste",
    });
    if (response.ok) {
      carregarItem(response.list);
    } else {
      listEvents.innerHTML = "<p> Sem dados!</p>";
    }
    console.log(response);
  } catch (error) {
    listEvents.innerHTML = "<p> -- Falha na consulta -- </p>";
    console.error("-- Falha na consulta --");
    console.error(error);
  }
};

function carregarItem(list) {
  if (list) {
    const div = document.createElement("div");
    div.className = "code";
    div.innerHTML = JSON.stringify(list, null, "\t");
    hljs.highlightElement(div);
    listEvents.replaceChildren(div);
  }
}

function carregar(list) {
  for (const item of list) {
    const div = document.createElement("div");
    div.className = "code";
    div.innerHTML = JSON.stringify(item, null, "\t");
    hljs.highlightElement(div);
    listEvents.appendChild(div);
  }
}
