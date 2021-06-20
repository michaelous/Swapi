export function itemHasClass(item, className) {
    return item.className.split(' ').indexOf(className) > -1;
}