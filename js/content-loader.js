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
            $('#main-content-container').html(data);
            initSiteLanguage();
        },
        error: function () {
            console.error('Error loading main content.');
        }
    });
}

function getSiteLang() {
    var lang = localStorage.getItem('siteLang') || navigator.language || 'en';
    if (typeof lang !== 'string'){
        lang = 'en';
    }
    switch (lang) {
        case 'pt-BR':
        case 'en':
            break;
        default:
            lang = 'en';
    }
    return lang;
}

function setSiteLang(lang) {
    localStorage.setItem('siteLang', lang);
    applySiteLang(lang);
}

function applySiteLang(lang) {
    // Toggle visibility of elements with classes lang-en and langpt-br
    if (lang === 'pt-BR') {
        $('.langpt-br').show();
        $('.lang-en').hide();
        $('html').attr('lang', 'pt-BR');
    } else {
        $('.lang-en').show();
        $('.langpt-br').hide();
        $('html').attr('lang', 'en');
    }

    // Update visible current language label (element with id="lang-current")
    applySiteLangDropdown(lang);
}

function applySiteLangDropdown(lang) {
    // Update visible current language label (element with id="lang-current")
    var label = '';
    switch (lang) {
        case 'pt-BR':
            label = '🇧🇷 Português (BR)';
            break;
        case 'en':
        default:
            label = '🇺🇸 English';
            break;
    }
    $('#lang-current').text(label);
}

function initSiteLanguage() {
    // apply saved or default language
    applySiteLang(getSiteLang());

    // Click handlers for language buttons/links: use data-site-lang="en" or "pt-BR"
    $(document).off('click.siteLang', '[data-site-lang]').on('click.siteLang', '[data-site-lang]', function (e) {
        e.preventDefault();
        var newLang = $(this).data('site-lang');
        setSiteLang(newLang);
    });

    // Change handler for select element if present: <select class="site-lang-select">
    $(document).off('change.siteLang', 'select.site-lang-select').on('change.siteLang', 'select.site-lang-select', function () {
        var newLang = $(this).val();
        setSiteLang(newLang);
    });
}

// Call the functions to load the contents when the page loads
$(document).ready(function () {
    loadNavigationBar();
    loadFooter();
    loadMainContent();
});
