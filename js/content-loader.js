// content-loader.js

// Function to load the navigation bar content
function loadNavigationBar() {
    $.ajax({
        url: '/loaders/navigation-bar.html',
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('#navigation-bar-container').replaceWith(data);
        },
        error: function () {
            console.error('Error loading navigation bar content.');
        }
    });
}

// Function to load the footer content
function loadFooter() {
    $.ajax({
        url: '/loaders/footer-container.html',
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('#footer-container').replaceWith(data);
        },
        error: function () {
            console.error('Error loading footer content.');
        }
    });
}

// Function to load the main content
function loadMainContent() {
    // Use the constant variable defined in the index.html
    $.ajax({
        url: MAIN_CONTENT_FILE,
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('#main-content-container').replaceWith(data);
        },
        error: function () {
            console.error('Error loading main content.');
        }
    });
}

// Call the functions to load the contents when the page loads
$(document).ready(function () {
    loadNavigationBar();
    loadMainContent();
    loadFooter();
});
