function loadMainStructure() {
    $.ajax({
        url: 'main-content.html',
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('#main-loader').html(data);
        },
        error: function () {
            console.error('Error loading footer content.');
        }
    });
}

$(document).ready(function () {
    loadMainStructure();
});