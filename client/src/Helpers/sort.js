export const nameASC = (a, b) => {
    const nA = a.name.toUpperCase();
    const nB = b.name.toUpperCase();

    if (nA > nB) return -1;
    if (nA < nB) return 1;
}