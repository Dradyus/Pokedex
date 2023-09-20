const pokedex=document.getElementById("pokedex"),pokeCache={},fetchPokemon=async()=>{let e=await fetch("https://pokeapi.co/api/v2/pokemon?limit=150"),o=await e.json(),a=o.results.map((e,o)=>({...e,id:o+1,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o+1}.png`}));displayPokemon(a)},displayPokemon=e=>{console.log(e);let o=e.map(e=>`<li class="card" onclick="selectPokemon(${e.id})">
        <img class="card-image" src="${e.image}" />
        <h2 class="card-title">${e.id}. ${e.name}</h2>
        </li>`).join("");pokedex.innerHTML=o},selectPokemon=async e=>{if(!pokeCache[e]){let o=`https://pokeapi.co/api/v2/pokemon/${e}`,a=await fetch(o),p=await a.json();pokeCache[e]=p,displayPopup(p)}displayPopup(pokeCache[e])},displayPopup=e=>{let o=e.types.map(e=>e.type.name).join(", "),a=e.sprites.front_default,p=`
    <div class = "popup">
        <button id="closeBtn" onclick="closePopUp()">Close</button>
        <div class="card">
            <img class="card-image" src="${a}" />
            <h2 class="card-title">${e.id}.
            ${e.name}</h2>
            <p><small>Height: </small>${e.height}
            | <small>Weight: </small>${e.weight}
            | <small>Type: </small>${o}
            </p>
        </div>
    </div>

    `;pokedex.innerHTML=p+pokedex.innerHTML,console.log(p)},closePopUp=()=>{let e=document.querySelector(".popup");e.parentElement.removeChild(e)};fetchPokemon();
