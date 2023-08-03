function loadMainStructure() {
    $.ajax({
        url: '/loaders/main-content.html',
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('#main-loader').replaceWith(data);
        },
        error: function () {
            console.error('Error loading footer content.');
        }
    });
}

$(document).ready(function () {
    loadMainStructure();
});