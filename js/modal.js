function getLocation () {
    document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
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
    $("#message-modal").modal('toggle');
}

function shareLocation () {
    let user = generateId();
    let url_share = server + "?share=" + user;
    document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
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
        '<span id="text-share">¿Como desea compartir esta ubicación?</span>' +
        "<input class='form-control' id='share-url' style='display: none; margin-top: 10px' type='text' disabled value=''>" +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary" id="share-button-now"' + " onclick='" + 'shareSesion(0)' + "'>Sesión actual</button>" +
        '<button type="button" class="btn btn-primary" id="share-button-new"' + " onclick='" + 'shareSesion(1)' + "'>Crear sesión</button>" +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("#message-modal").modal('toggle');
}

function removeAll () {
    document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
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
    $("#message-modal").modal('toggle');
}

function removeLayer (index) {
    document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
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
    $("#message-modal").modal('toggle');
}

function restoreSession () {
    document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="0" role="dialog"' +
        ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">' +
        '<div class="modal-dialog modal-dialog-centered" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLongTitle">Sesión iniciada</h5>' +
        '</div>' +
        '<div class="modal-body">' +
        'Existe una sesión registrada anteriormente ¿desea restaurarla?' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary"' + "onclick='" + 'restoreLocation()' + "'" + ' data-dismiss="modal">Restaurar</button>' +
        '<button type="button" class="btn btn-secondary"' + "onclick='" + 'removeLocation()' + "'" + ' data-dismiss="modal">Eliminar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("#message-modal").modal('toggle');
}

function getDetailsPlace (data, exact) {
    if (exact) {
        
        data [0] = data[0] !== 'None' ? data[0] : 'No disponible';
        data [1] = data[1] !== 'None' ? data[1] : 'No disponible';
        data [2] = data[2] !== 'None' ? data[2] : 'No disponible';
        data [3] = data[3] !== 'None' ? data[3] : 'No disponible';
        data [4] = data[4] !== 'None' ? data[4] : 'No disponible';
        data [5] = data[5] !== 'None' ? data[5] : 'No disponible';
        data [6] = data[6] !== 'None' ? data[6] : 'No disponible';

        document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
            ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered" role="document">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<h5 class="modal-title" id="exampleModalLongTitle">Información de la ubicación</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>' +
            '<div class="modal-body">' +
            '<table class="table">' +
            '<tbody>' +
            '<tr>' +
            '<th style="border-top-color: transparent !important;" scope="row"><i class="fa-sharp fa-solid fa-location-dot"></i></th>' +
            '<td style="border-top-color: transparent !important;">Nombre</td>' +
            '<td style="word-wrap: break-word; border-top-color: transparent !important;">' + data[0] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row"><i class="fa-solid fa-people-pulling"></i></th>' +
            '<td>Calificación</td>' +
            '<td style="word-wrap: break-word;">' + data[1] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row"><i class="fa-regular fa-clock"></i></th>' +
            '<td>Estado</td>' +
            '<td style="word-wrap: break-word;">' + data[2] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row"><i class="fa-solid fa-location-crosshairs"></i></th>' +
            '<td>Dirección</td>' +
            '<td style="word-wrap: break-word;">' + data[3] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row"><i class="fa-solid fa-phone"></i></th>' +
            '<td>Numero de contacto</td>' +
            '<td style="word-wrap: break-word;">' + data[4] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th scope="row"><i class="fa-solid fa-calendar-days"></i></th>' +
            '<td>Horario</td>' +
            '<td style="word-wrap: break-word;">' + data[5] + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th style="border-bottom-color: transparent !important;" scope="row"><i class="fa-solid fa-globe"></i></th>' +
            '<td style="border-bottom-color: transparent !important;">Página web</td>' +
            '<td style="word-wrap: break-word;border-bottom-color: transparent !important;">' + data[6] + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    } else {
        document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
            ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered" role="document">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<h5 class="modal-title" id="exampleModalLongTitle">Información de la ubicación</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>' +
            '<div class="modal-body" style="overflow-wrap: break-word;">' +
            '<div style="display: flex;justify-content: center;flex-direction: column;align-content: center;flex-wrap: nowrap;align-items: center;">' +
            '<br>' +
            '<img style="max-width: 150px" src="../img/not_found.webp">' +
            '<br><br>' +
            '<p style="text-align: center;">No se pudo recuperar la información exacta del sitio.</p>' +
            '</div>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    $("#message-modal").modal('toggle');
}

function setMessageError (error) {
    document.getElementById("overall-modal").innerHTML = '<div class="modal fade" id="message-modal" tabindex="-1" role="dialog"' +
        ' aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLongTitle">Información de la ubicación</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body" style="overflow-wrap: break-word;">' +
        '<div style="display: flex;justify-content: center;flex-direction: column;align-content: center;flex-wrap: nowrap;align-items: center;">' +
        '<br>' +
        '<img style="max-width: 150px" src="../img/error.webp">' +
        '<br><br>' +
        '<p style="text-align: center;">Ha ocurrido un error fatal: ' + error + '</p>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    $("#message-modal").modal('toggle');
}