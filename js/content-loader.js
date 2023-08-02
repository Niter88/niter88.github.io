// content-loader.js

// Function to load the navigation bar content
function loadNavigationBar() {
    $.ajax({
      url: 'navigation-bar.html',
      type: 'GET',
      dataType: 'html',
      success: function (data) {
        $('#navigation-bar-container').html(data);
      },
      error: function () {
        console.error('Error loading navigation bar content.');
      }
    });
  }
  
  // Function to load the footer content
  function loadFooter() {
    $.ajax({
      url: 'footer-container.html',
      type: 'GET',
      dataType: 'html',
      success: function (data) {
        $('#footer-container').html(data);
      },
      error: function () {
        console.error('Error loading footer content.');
      }
    });
  }
  
  // Function to load the main content
  function loadMainContent() {
    // You can modify the file name as needed or pass it as a parameter to this function.
    var fileName = 'main-content.html';
    $.ajax({
      url: fileName,
      type: 'GET',
      dataType: 'html',
      success: function (data) {
        $('#main-content-container').html(data);
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
  