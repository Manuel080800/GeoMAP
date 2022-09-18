function checkSelection (select) {
    return select === 'Choose...';
}

function updateRank (rank) {
    component = document.getElementById("currentRange")
    component.innerHTML = "Rango actual: " + rank + " metros."
}

function addOptions (element, options) {
    let menu = document.getElementById(element);
    options.forEach((option) => {
        let add = document.createElement("option");
        add.setAttribute("value", "value");
        let value = document.createTextNode(option);
        add.appendChild(value);
        menu.appendChild(add);
    });
}

function removeOptions (element) {
    let menu = document.getElementById(element);
    for (i = menu.options.length; i >= 1; i--) {
        menu.remove(i);
    }
}

function resetOptions (element) {
    let menu = document.getElementById(element);
    menu.value = 'Choose...';
}

function toogleMessage () {
    $("#message-modal").modal('toggle');
}

function download (filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
