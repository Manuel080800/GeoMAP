function loading() {
    $('body').loadingModal('destroy');
    $('body').loadingModal({
        text: '<b>Cargando</b>',
        eText: ['Espere un momento por favor...',
                'Seguimos trabajando, un momento por favor...',
                'Esto está tardando un poco más de lo normal, por favor espere...',
                'A ocurrido un error, recargue el sitio y vuelva a intentarlo']
    });
    $('body').loadingModal('show');
}

function finish() {
    $('body').loadingModal('hide');
}

loading();
window.onload = (function () { finish() });