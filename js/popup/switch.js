import {fetchData} from "../fetch.js"
import popup from "./popup";

export function handlePopup(url, type) {
    switch (type) {
        case 'films':
            return fetchData(url).then(response => popup.popupMovies(response));
        case 'characters':
            return fetchData(url).then(response => popup.popupCharacters(response));
        case 'planets':
            return fetchData(url).then(response => popup.popupPlanets(response));
        case 'starships':
            return fetchData(url).then(response => popup.popupStarships(response));
        default:
            return 'default';
    }
}


// ToDo: Refactor rendering items
