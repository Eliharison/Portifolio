//Seu JavaScript de validação aqui

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
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  });
