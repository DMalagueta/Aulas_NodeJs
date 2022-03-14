const list = document.querySelector('ul');

function getPokeList(url = 'https://pokeapi.co/api/v2/pokemon/'){
    fetch(url)
        .then(res => res.json())
        .then(({results}) => render(results))
        .catch(err => alert(error.message));
}

function createListItem(name) {
    const li  = document.createElement('li');
    li.textContent = name;
    
    return li;
}

function render(pokeList = []){
    pokeList.forEach(({ name }) => list.appendChild(createListItem(name)))
}

window.addEventListener('load',() => getPokeList());