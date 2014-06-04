// pages.js 
// Lightweight library to simplify navegation between screens in one-page apps
// Dowrow 2014

(function () { 
    
    var pages = document.getElementsByTagName('section') || [],
        numPages = pages.length,
        main = document.getElementsByTagName('main')[0],
        screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // Fix main wrapper size and disable scrolling
    main.style.position = 'absolute';
    main.style.left = '0';
    main.style.top = '0';
    main.style.width = screenWidth + 'px';
    main.style.height = screenHeight + 'px';
    main.style.overflow = 'hidden';

    // Apply style to each page
    for (var i = 0; i < numPages; i++) {
        pages[i].style.position = 'absolute';
        pages[i].style.width = '100%';
        pages[i].style.height = '100%';
        pages[i].style.top = '0';
        pages[i].style.left = (i * screenWidth) + 'px';
    }
    
})();