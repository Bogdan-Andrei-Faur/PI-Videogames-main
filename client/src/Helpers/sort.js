export const nameASC = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
}

export const nameDES = (a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
}

export const ratingASC = (a, b) => {
    if (a.rating < b.rating) return -1;
    if (a.rating > b.rating) return 1;
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
}

export const ratingDESC = (a, b) => {
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
}