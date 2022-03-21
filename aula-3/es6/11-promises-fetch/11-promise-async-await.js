const list = document.querySelector('ul');

async function getPokeList(url = 'https://pokeapi.co/api/v2/pokemon') {
    try {
        const res = await fetch(url);
        const { results } = await res.json();
        render(results);
    } catch (error) {
        alert(error.message);
    }
}

function createListItem(name) {
    const li = document.createElement('li');
    li.textContent = name;
    return li;
}

function render(pokeList = []) {
    pokeList.forEach(({ name }) => list.appendChild(createListItem(name)))
}

window.addEventListener('load', () => getPokeList());