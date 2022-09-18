function getLocation () {
    const template = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
        ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLongTitle">Obtener ubicación</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        'Seleccione el nivel de radio a explorar: <br/><br/>' +
        '<label for="input-range" class="form-label" id="currentRange">Rango actual: 500 metros.</label>' +
        "<input id='input-range' type='range' style='width: 100%' class='form-range' min='100' max='1000' value='500' oninput='updateRank(this.value)'>" +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary"' + " onclick='" + 'locationUser()' + "'>Aceptar</button>'" +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById("overall-modal").innerHTML = template;
    $("#message-modal").modal('toggle');
}

function shareLocation () {
    var url_compartir = "http://localhost:63342//geomap/mapa.html?share=" + userID;
    const template = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
        ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLongTitle">Compartir mapa</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        'Copie el siguiente enlace para compartir su mapa: <br/><br/>' +
        "<input class='form-control' id='compartirURL' type='text' disabled value='" + url_compartir + "'>" +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary"' + " onclick='" + 'copyCompartir("' + url_compartir +'")' + "'>Copiar</button>" +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById("overall-modal").innerHTML = template;
    $("#message-modal").modal('toggle');
}

function removeAll () {
    const template = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
        ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLongTitle">Reiniciar mapa</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '¿Desea reiniciar solamente los marcadores o todo el mapa?' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary"' + " onclick='" + 'removeAllMap(false, true, false)' + "'>Solo marcadores</button>" +
        '<button type="button" class="btn btn-secondary"' + " onclick='" + 'removeAllMap(true, true, true)' + "'>Todo el mapa</button>" +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById("overall-modal").innerHTML = template;
    $("#message-modal").modal('toggle');
}

function removeLayer (index) {
    const template = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
        ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLongTitle">Eliminar ubicación en el mapa</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '¿Realmente desea eliminar esta ubicacióm marcada en el mapa?' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary"' + "onclick='" + 'removeLayerSelect(' + index + ')' + "'>Aceptar</button>'" +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById("overall-modal").innerHTML = template;
    $("#message-modal").modal('toggle');
}