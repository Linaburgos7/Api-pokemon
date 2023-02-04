function Urlpokemon(pokemonurl = "https://pokeapi.co/api/v2/pokemon") {
    let apipokemon = fetch(pokemonurl)
    apipokemon.then(res => res.json())
        .then(infoapi => {
            document.getElementById("dataInfo").innerHTML = ""
            for (const pokemon of infoapi.results) {
                
                document.getElementById("searchButton").addEventListener("click", function() {
                    let searchTerm = document.getElementById("searchInput").value;

                   searchTerm = (infoapi.results.name.toLowerCase().includes(searchTerm.toLowerCase()));
                
                    document.getElementById("dataInfo").innerHTML = `<p> ${infoapi.results["0"].name} </p>`;
                  });
             
                  
                fetch(pokemon.url)
                    .then(con => con.json())
                    .then(elpokemon => {
                        for (const habilidades of elpokemon.stats) {

                            document.getElementById("dataInfo").innerHTML += `     
                                        
                        
                                        <div class="card mt-5 gap-1 ">
                                            <div class="imgPokemon  border-bottom w-100" style="background:url(${elpokemon.sprites.other.dream_world.front_default})"></div>
                                            <div class="card-body text-center">
                                                <div class="">
                                            
                                                    <h2 class="card-title">${pokemon.name}</h2>
                                                    <p class="card-text"> ${elpokemon.stats["0"].base_stat} ${habilidades.stat.name}</p>
                                                    <p class="card-text">${elpokemon.stats["1"].base_stat} ${elpokemon.stats["1"].stat.name} </p>
                                                    <p class="card-text">${elpokemon.stats["2"].base_stat} ${elpokemon.stats["2"].stat.name} </p>
                                                    <p class="card-text">${elpokemon.stats["3"].base_stat} ${elpokemon.stats["3"].stat.name} </p>
                                                    
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>`
                            console.log(habilidades)

                            return

                   



                        }

                    })
            }

function Buscador(){
    

}

            armar_boton_paginacion(infoapi.next, infoapi.previous)
        })
}


function armar_boton_paginacion(url_next, url_previous) {
    let disabledBotonNext = (url_next == null) ? "disabled" : "";
    let disabledBotonPrev = (url_previous == null) ? "disabled" : "";
    document.querySelector("#botonesPages").innerHTML = `
                                <button class=" btn btn-warning  fs-3" ${ disabledBotonPrev } onclick = "Urlpokemon('${url_previous}')" > Anterior</button >
                                
                                    <button class=" btn btn-warning  fs-3" ${disabledBotonNext} onclick="Urlpokemon('${url_next}')">Siguiente</button>
                            `
}

Urlpokemon()

