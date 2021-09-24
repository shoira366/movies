const createDOM = (elem) => document.createElement(elem);
const getElem = (param, child = document) => child.querySelector(param, child);

function newDate(data){
    let date = new Date(data)
    let day = date.getDate();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear()

    return day + '.' + month + '.' + year
}
