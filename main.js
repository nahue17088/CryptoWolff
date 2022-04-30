//Proyecto Final Js (CoderHouse)
//Este proyecto trata de una Pagina que vos podes interactuar "comprando" criptomonedas
//Tambien contiene un seccion para calcular el tipo de cambio de cada criptomoneda con cada peso de cada pais
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// incorporado para la estetica web (start) //
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  ScrollReveal().reveal('#section-cards, #section-inicio, #section-main', {
    delay: 500,
    useDelay: 'onload',
    reset: true,
})

ScrollReveal().reveal('#section-cards, #section-inicio, #section-main', {
    delay: 0,
    interval: 80
})


function desp() {
  if ($("#p-nft").length < 1){
    $("#qe-e").append(`<div id="box"><p id="p-nft">What is an NFT system?
    NFT stands for “Non-Fungible Token”, “Non-fungible” means that they cannot be acquired by something else. A dollar bill can be removed for another or exchange one bitcoin for another and it will have exactly the same value and liquidity.</p></div>`);
  }
  else{
    $("#price-type").append("");
  }
}

let question = document.getElementById("question-d");
question.addEventListener("click", (e) => {
  e.preventDefault();
  desp()
});


function ant() {
  if ($("#p-cripto").length < 1){
    $("#qe-a").append(`<div id="box"><p id="p-cripto">A cryptocurrency, cryptocurrency, or cryptoasset is a digital medium of exchange that uses strong cryptography to secure transactions, control the creation of additional units, and verify the transfer of assets using distributed ledger technologies.</p></div>`);
  }
  else{
    $("#price-type").append("");
  }
}

let ants = document.getElementById("question-e");
ants.addEventListener("click", (e) => {
  e.preventDefault();
  ant()
});

let traerv2 = document.querySelector("#hola")

  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log(data.results['0'])
    traerv2.innerHTML = `
    <span class="cryptowolf">${data.results['0'].name.last}</span>
    `
  });
