setInterval(() => {
  consultaGaSpy();
}, 1000);

function consultaGaSpy() {
  if (window?.dataLayer) {
    var dataLocal = "";
    try {
      dataLocal = JSON.stringify(window.dataLayer);
      sessionStorage.setItem("dataLocalGA", dataLocal);
    } catch (error) {
      console.log("error no parse dataLayer");
    }
  }
}
