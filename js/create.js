class create {
    static clearPrevious() {
        document.querySelector('.contentWrapper').innerHTML = ''
    }

    static movies(data) {
        const content = document.querySelector('.contentWrapper');
        this.clearPrevious();

        for (const {title, producer, director, url} of data.results) {
            let el = `<div class='itemWrapper'>
        <p class='item'>${title}</p>
        <p class='item'>Producers: ${producer}</p>
        <p class='item'>Director: ${director}</p>

        <button data-url=${url}  data-type='films' class="btnPopup">More</button>
    </div>`
            content.innerHTML += el;
        }
    }

    static characters(data) {
        const content = document.querySelector('.contentWrapper');
        this.clearPrevious();

        for (const {name, birth_year, height, url} of data.results) {
            let el = `<div class='itemWrapper'>
        <p class='item'>${name}</p>
        <p class='item'>Birth:${birth_year}</p>
        <p class='item'>Height:${height}</p>
         <button data-url=${url} data-type='characters' class="btnPopup">More info</button>
        </div>`
            content.innerHTML += el;
        }
    }


    static planets(data) {
        const content = document.querySelector('.contentWrapper');
        this.clearPrevious();

        for (const {name, rotation_period, diameter, climate, url} of data.results) {
            let el = `<div class='itemWrapper'>
        <p class='item'>${name}</p>
        <p class='item'>Rotation:${rotation_period}</p>
        <p class='item'>Climate:${climate}</p>
         <button data-url=${url} data-type='planets' class="btnPopup">More info</button>
        </div>`
            content.innerHTML += el;
        }
    }


    static ships(data) {
        const content = document.querySelector('.contentWrapper');
        this.clearPrevious();

        for (const {name, length, starship_class, url} of data.results) {
            let el = `<div class='itemWrapper'>
        <p class='item'>${name}</p>
        <p class='item'>Length:${length}</p>
        <p class='item'>Class:${starship_class}</p>
         <button data-url=${url} data-type='starships' class="btnPopup">More info</button>
        </div>`
            content.innerHTML += el;
        }
    }
}

export default create;
