// Part 1: Navigation and Search Functionality
console.log('navigation-live');

// Detect if the page is in Spanish
var isSpanish = window.location.href.includes('/es/');

// Select all elements with the class nav-button
let links = document.querySelectorAll('.nav-button');

// Get the radio buttons and search input elements
var searchInput = document.getElementById('searchText');
var form = document.getElementById('catalog_search');
searchInput.focus();

// Set default checked radio button
document.getElementById('searchCat').checked = true;

function updatePlaceholder() {
    // Find the checked radio button
    let checkedRadio = document.querySelector('input[name="searchType"]:checked');
    // Get the label text associated with the checked radio button
    let labelText = checkedRadio.nextElementSibling.innerText;
    // Set the placeholder to the label text
    searchInput.placeholder = labelText;
    searchInput.focus();
}

// Initialize placeholder on page load
updatePlaceholder();

// Add the event listener to radio buttons to update placeholder on change
document.querySelectorAll('input[name="searchType"]').forEach(radio => {
    radio.addEventListener('change', updatePlaceholder);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchQuery = encodeURIComponent(searchInput.value);
    var url;

    if (document.getElementById('searchWeb').checked) {
        url = '/search-website?search=' + searchQuery;
    } else {
        url = 'https://austin.bibliocommons.com/v2/search?query=' + searchQuery;
    }

    window.location.href = url;
});

// Part 2: jQuery Functionality
(function ($, jQuery) {
    $(document).ready(function() {
        console.log('hhh')
        var hash = window.location.hash;
        if (hash) {
            $(hash + ' h2').addClass('active')
            $(hash + ' h3').addClass('active')
            $(hash + ' h4').addClass('active')
        }
/*
        $('h2, h3').click(function() {
            $(this).toggleClass('active');
        });
*/
        $('.jobportal-menu a, .accordion a').click(function() {
            var hash2 = $(this).attr('href');
            console.log(hash2 + ' is my hash2');

            var dd = hash2 + ' h2';
            var dd1 = hash2 + ' h3';
            var dd2 = hash2 + ' h4';
            console.log(dd);
            $(dd).addClass('active');
            $(dd1).addClass('active');
            $(dd2).addClass('active');
        });
    });
})(jQuery);

// Function to deactivate all active elements related to navigation
function deactivateNavActiveElements() {
    console.log('deactivate');
    let activeNavLinks = document.querySelectorAll('.nav-button.active, .apl-submenu.active');
    for (let i = 0; i < activeNavLinks.length; i++) {
        activeNavLinks[i].classList.remove('active');
    }
}

// Loop through each link
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();

        let wasActive = this.classList.contains('active');

        if (!wasActive) {
            deactivateNavActiveElements();
            this.classList.add('active');

            let submenu = document.getElementById('sub-' + this.id);
            if (submenu) {
                submenu.classList.add('active');
                searchInput.focus();
            }
        } else {
            this.classList.remove('active');

            let submenu = document.getElementById('sub-' + this.id);
            if (submenu) {
                submenu.classList.remove('active');
            }
        }
    });
}

// Function to check if the clicked target is outside the "apl-submenu" and "active" areas
function handleClickOutside(event) {
    const clickedElement = event.target;

    // Add a check to see if the clicked element is inside an element with the class "details"
    const isInsideDetails = clickedElement.closest('.details');

    if (
        !clickedElement.classList.contains('apl-submenu') &&
        !clickedElement.classList.contains('active') &&
        !clickedElement.closest('.apl-submenu') &&
        !clickedElement.closest('.active') &&
        !isInsideDetails // if it's not inside details, then deactivate
    ) {
        deactivateNavActiveElements();
    }
}

// Add the event listener to the document
document.addEventListener('click', handleClickOutside);

// Accordions Functionality
(function ($) {
    $(document).ready(function() {
        console.log('accordions');

        function setClassBasedOnHash(hash) {
            // Remove 'active' class from all accordion items first
            $('.details').find('h2, h3').removeClass('active');
        
            if (hash && $(hash).length) {
                console.log('adding active')
                
                // Traverse up the DOM to find parent accordions and activate them
                $(hash).parents('.grid-col-10.grid-offset-1').find('> h2.section-heading').addClass('active');
                // Add 'active' class only to the top-level header of the targeted section
                $(hash + ' > h2.section-heading').addClass('active');
        
                // Optionally, if you want to also expand the direct child of the hash section, uncomment the next line
                // $(hash).find('> h2, > h3').first().addClass('active');
        
                // Scroll to the opened section
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000);
            }
        }
        

        // Set the 'active' class based on the initial hash if available
        if (window.location.hash) {
            setClassBasedOnHash(window.location.hash);
        }

        // Log the current hash
        console.log('hash = ' + window.location.hash);

        // Toggle active class on click
        $('.accordion h2, .accordion h3').click(function() {
            console.log('dude!');
            // Modified to only toggle 'closed' for the clicked element
            $(this).toggleClass('active');
        });

        // Update the 'active' class when an accordion link is clicked
        $('.jobportal-menu a, .accordion a').click(function(e) {
            const href = $(this).attr('href');
            if (href.startsWith("#")) {
                e.preventDefault();
                setClassBasedOnHash(href);
            }
        });

        // Update the 'active' class when the hash changes
        $(window).on('hashchange', function() {
            setClassBasedOnHash(window.location.hash);
        });
    });
})(jQuery);
