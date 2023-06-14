// header js
  // Get the necessary elements
  const hamburgerIcon = document.querySelector('.menu-collapse');
  const homeLink = document.querySelector('a[href="#home"]');
  const aboutLink = document.querySelector('a[href="#about"]');
  const homeSection = document.getElementById('home');
  const aboutSection = document.getElementById('about');

  // Add click event listener to the hamburger icon
  hamburgerIcon.addEventListener('click', function () {
    // Toggle the active class to show/hide the menu
    hamburgerIcon.classList.toggle('active');

    // Toggle the visibility of the home and about sections
    homeSection.classList.toggle('visible');
    aboutSection.classList.toggle('visible');
  });

  // Add click event listeners to the home and about links
  homeLink.addEventListener('click', function (event) {
    event.preventDefault();
    // Hide the menu
    hamburgerIcon.classList.remove('active');
    // Show the home section and hide the about section
    homeSection.classList.add('visible');
    aboutSection.classList.remove('visible');
  });

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    // Hide the menu
    hamburgerIcon.classList.remove('active');
    // Show the about section and hide the home section
    aboutSection.classList.add('visible');
    homeSection.classList.remove('visible');
  });