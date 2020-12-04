function getPokemonByNum(data, num) {
    let filtered = data.filter(pokemon => pokemon.num == num);
    if (filtered[0]) {
        return filtered[0];
    }
    return false;
};

function filterData(data, condition) {
    return data.filter(pokemon => {
        if (condition.name != 'undefined' && pokemon.name.includes(condition.name)) {
            return true;
        }
        if (condition.type && pokemon.type.indexOf(condition.type) != -1 || condition.type == "") {
            return true;
        }
        return false;
    });
};

function orderData(data) {
    data.sort();
};

export { getPokemonByNum, filterData, orderData };