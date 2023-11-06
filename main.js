async function createPokemonCard(name, url) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-6 col-sm-2 m-3";
    
    const card = document.createElement("div");
    card.className = "card text-center border-primary shadow-lg";
    
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = name;
    
    const detailLink = document.createElement("a");
    detailLink.href = url;
    detailLink.className = "btn btn-primary";
    detailLink.innerText = "Detail";
    
    cardBody.appendChild(cardText);
    cardBody.appendChild(detailLink);
    
    card.appendChild(cardBody);
    cardDiv.appendChild(card);
    
    return cardDiv;
}

async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`);
    const data = await response.json();

    console.log(data);

    const pokemonCards = document.getElementById("pokemon-cards");

    for (let i = 0; i < data.results.length; i++) {
        const name = data.results[i].name;
        const url = data.results[i].url;

        const card = await createPokemonCard(name, url);
        pokemonCards.appendChild(card);
    }
}

fetchPokemon();
