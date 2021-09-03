function mostrarResultados (results){
    console.log(results);
    const postTemplateEl = document.querySelector(".post-template");
    const template = document.querySelector("#template")
    // console.log(template);
    const titleEl = template.content.querySelector(".result-item-title");
    const conditionEl = template.content.querySelector(".result-item-condition");
    const itemSellsEl = template.content.querySelector(".result-item-sells");
    const itemPriceEl = template.content.querySelector(".result-item-price");
    const itemImgEl = template.content.querySelector(".result-item-img");

    for( i of results){
    itemImgEl.src = i.thumbnail;
    titleEl.textContent = i.title;
    conditionEl.textContent = i.condition;
    itemSellsEl.textContent = i.sold_quantity;
    itemPriceEl.textContent = i.price;

    var clone = document.importNode(template.content, true);
    postTemplateEl.appendChild(clone);
    // console.log(postTemplateEl);
    }

}

// function deleteElements() {
//     const botonFormularioEl = document.querySelector(".boton");
//     const productsEls = document.querySelectorAll(".content-results");
//     botonFormularioEl.addEventListener("click", (e) => {
//       //console.log("soy el segundo botón");
//       productsEls.forEach((element) => {
//         //console.log(element);
//         element.remove();
//       });
//     });
// }

// function fetch(){
// const formEl= document.querySelector(".form")
//     formEl.addEventListener("submit", function(e){
//     e.preventDefault();
//     // console.log(e);
//     const palabraABuscar= e.target.buscar.value;
//     console.log(palabraABuscar);
//     fetch('https://api.mercadolibre.com/sites/MLA/search?q='+palabraABuscar)
//   .then(response => response.json())
//   .then(data => console.log(data.results));
    
// })
// }

function main (){
    const formEl= document.querySelector(".form")
    formEl.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(e);
    const palabraABuscar= e.target.buscar.value;
    console.log(palabraABuscar);
    fetch('https://api.mercadolibre.com/sites/MLA/search?q='+palabraABuscar)
  .then(response => response.json())
  .then(data => mostrarResultados(data.results));
    
})
}

main();