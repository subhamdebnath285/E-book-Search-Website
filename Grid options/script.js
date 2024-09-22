document.addEventListener('DOMContentLoaded', function() {
  // Select the menu trigger element
  var triggerMenu = document.querySelector('.menu-trigger');

  // Function to handle navigation toggle
  function handleNavigation() {
    var body = document.querySelector('body'); // Select the body element
    body.classList.toggle('is-navigation-open'); // Toggle the class on the body element
  }

  // Add a click event listener to the menu trigger
  triggerMenu.addEventListener('click', handleNavigation);
});




  // /* Demo purposes only */
  // $(".hover").mouseleave(
  //   function () {
  //     $(this).removeClass("hover");
  //   }
  // );