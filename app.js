let allPoke = [];
let tableauFin = [];
const searchInput = document.querySelector('.recherche_poke');



function fetchPokemonBase(){
 
    fetch(" https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(reponse => reponse.json())
    .then((allPoke) => {
        //console.log(allPoke);
        allPoke.results.forEach((pokemon) => {
            fetchPokemonComplet(pokemon);
        })
    }) 
}

fetchPokemonBase();

function fetchPokemonComplet(pokemon) {
    let objetPokemonFull = {};
    let url = pokemon.url;
    let nameP = pokemon.name;
    
    fatch(url)
    .then(reponse => reponse.json())
    .then((pokeData) => {
        //console.log(pokeData);

        objetPokemonFull.pic = pokeData.sprite.front_default;
        objetPokemonFull.type = pokeData.types[0].type.name;

        fetch(`chhttps://pokeapi.co/api/v2/pokemon-species/${nameP}`)
        .then(reponse => reponse.json())
        .then((pokeData) => {
            //console.log(pokeData);

            objetPokemonFull.name = pokeData.names[4].type.name;
            allPokemon.push(objetPokemonFull);

            if(allPokemon.length === 151) {
                console.log(allPokemon);
            }
        })



    })
}

// A nimation Input

searchInput.addEventListener('input' , function(e){
    if(e. trarget.value !== "") {
        e.target.parentNote. classList.add('active-input');
    }else if(e.target.value === "") {
        e.target.parentNote.classList.remove('sctive-input');
    }
})