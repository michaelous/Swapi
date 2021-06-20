class popup {
    static async popupMovies(data) {
        const {title, release_date, episode_id, opening_crawl} = data;
        const newPopup = document.createElement('div');
        const closeBtn = `<button class="closePopup">X</button>`
        newPopup.innerHTML += `<div><p class="typeHeader">Name: ${title}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Episode: ${episode_id}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Released: ${release_date}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Opening: ${opening_crawl}</p>`;
        newPopup.className = "popup";
        newPopup.innerHTML += closeBtn;
        document.querySelector('.app-wrapper').appendChild(newPopup);
    }

    static async popupCharacters(data) {
        const {mass, height, eye_color, name} = data;
        const newPopup = document.createElement('div');
        const closeBtn = `<button class="closePopup">X</button>`
        newPopup.innerHTML += `<div><p class="typeHeader">Name:</p>${name}`;
        newPopup.innerHTML += `<div><p class="typeHeader">Eyes:</p>${eye_color}`;
        newPopup.innerHTML += `<div><p class="typeHeader">Mass:</p>${mass}`;
        newPopup.innerHTML += `<div><p class="typeHeader">Height:</p>${height}`;
        newPopup.className = "popup";
        newPopup.innerHTML += closeBtn;
        document.querySelector('.app-wrapper').appendChild(newPopup);
    }


    static async popupStarships(data) {
        const {name, crew, length, cargo_capacity, manufacturer} = data;
        const newPopup = document.createElement('div');
        const closeBtn = `<button class="closePopup">X</button>`
        newPopup.innerHTML += `<div><p class="typeHeader">Name: ${name}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Crew: ${crew}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Length: ${length}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Capacity: ${cargo_capacity}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Manufacturer: ${manufacturer}</p>`;
        newPopup.className = "popup";
        newPopup.innerHTML += closeBtn;
        document.querySelector('.app-wrapper').appendChild(newPopup);
    }


    static async popupPlanets(data) {
        const {climate, diameter, name, terrain} = data;
        const newPopup = document.createElement('div');
        const closeBtn = `<button class="closePopup">X</button>`
        newPopup.innerHTML += `<div><p class="typeHeader">Name: ${name}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Terrain: ${terrain}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Climate: ${climate}</p>`;
        newPopup.innerHTML += `<div><p class="typeHeader">Diamter: ${diameter}</p></div>`;
        newPopup.className = "popup";
        newPopup.innerHTML += closeBtn;
        document.querySelector('.app-wrapper').appendChild(newPopup);
    }
}

export default popup;