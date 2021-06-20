import {itemHasClass} from "./helpers/helper";
import {handlePopup} from "./popup/switch";

document.addEventListener('click', function ({target}) {
    if (itemHasClass(target, 'btnPopup')) {
        const url = target.getAttribute('data-url');
        const type = target.getAttribute('data-type');
        handlePopup(url, type)
    }

    if (itemHasClass(target, 'closePopup')) {
        const popup = document.querySelector('.popup');
        popup.parentNode.removeChild(popup);
    }
});