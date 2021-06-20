import {characters, movies, planets, starships} from "./consts/urls";
import {fetchData} from "./fetch";
import create from "./create";

export const drawTile = (id) => {
    switch (id) {
        case 'movies':
            return fetchData(movies).then(response => create.movies(response));
        case 'characters':
            return fetchData(characters).then(response => create.characters(response));
        case 'planets':
            return fetchData(planets).then(response => create.planets(response));
        case 'ships':
            return fetchData(starships).then(response => create.ships(response));
        default:
            return 'default';
    }
};