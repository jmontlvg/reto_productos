const divProductos = document.getElementById("divProductos");
const alertError=document.getElementById("alertError");
const URLMain="https://fakestoreapi.com/products/";

function getData(){
    fetch(URLMain).then((response)=>{ // El fetch regresa una promesa
        console.log(response);
        response.json().then((res) => {
            createCards(res);            
        });
    }).catch((error)=>{
        alertError.innerText=`Problema al traer la información ${error}`;
        alertError.style.display="block";
    });

}//getData

getData();

function createCards(res){   
            res.forEach((r)=>{
                let row = `
                <div class="card" style="width: 25rem;">
                    <img src="${r.image}" class="card-img-top" alt="Foto del producto">
                    <h5 class="card-title">${r.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${r.category}</h6>
                    <div class="card-body">
                        <p class="card-text">${r.description}</p>
                        <p class="card-text"><strong>Precio: </strong>${r.price}</p>
                    </div>
                </div>`
                divProductos.insertAdjacentHTML("beforeend", row);
            });//Aquí se coloca el código de card
}//createCards

