emailjs.init("vFvhvcR2LUu9sjhRI");

document
  .querySelector(".formcontato__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .send("service_xuara99", "template_6jpbpu3", {
        from_name: document.getElementById("nome").value,
        to_name: document.getElementById("email").value,
        reply_to: document.getElementById("assunto").value,
        message: document.getElementById("mensagem").value,
      })
      .then(
        function (response) {
          if (response) {
            alterarDisplayClasse(".overlay", true);
            alterarDisplayClasse(".overlay__modal", true);
            alterarDisplayClasse(".overlay__modal--success", true);
            console.log("SUCCESS!", response.status, response.text);
          }
        },
        function (error) {
          if (error) {
            alterarDisplayClasse(".overlay", true);
            alterarDisplayClasse(".overlay__modal", true);
            alterarDisplayClasse(".overlay__modal--error", true);
            console.log("FAILED...", error);
          }
        }
      );
  });

function alterarDisplayClasse(classe, mostrar) {
  const elemento = document.querySelector(classe);
  if (elemento) {
    elemento.style.display = mostrar ? "flex" : "none";
  }
}
function fecharModal() {
  alterarDisplayClasse(".overlay", false);
  alterarDisplayClasse(".overlay__modal", false);
  alterarDisplayClasse(".overlay__modal--error", false);
  alterarDisplayClasse(".overlay__modal--success", false);
}
