// ------------------------------------------------------------------ //
//                      Up arrow function 
// ------------------------------------------------------------------ //

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
  
    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function () {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    };
  
    // Scroll back to the top of the page when the button is clicked
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

// ------------------------- //
//          Sudo Code        //
// ------------------------- //
//  1.  Where am i getting the information from? 
//  2.  What element (button) is going to do what i tell it to do?
//  3.  What properties/functions do i want to apply to my element (button)
//  4.  When at the top not to show button but when nav bar is not present to show button
//  5.  What does the button when triggered? ('click') function
//  6.  How do i want the function to occur? (smooth, snappy, slow, etc )

// ----------------------------------------------------------------- //
//                    Function Notes / Understandings
// ----------------------------------------------------------------- //

//      |----- document.addEventListener("DOMContentLoaded", function () { ... }) -----| 
//
//  1.      This part of the code listens for the "DOMContentLoaded" event, 
//          which indicates that the HTML document's initial structure has been loaded and parsed. 
//          It ensures that the JavaScript code runs only after the HTML content is ready for manipulation.

//      |----- const scrollToTopButton = document.getElementById("scrollToTopButton") -----| 
//
//  2.      This line retrieves a reference to an HTML element with the id attribute set to "scrollToTopButton". 
//          This element is assumed to be the "Scroll to Top" button that the script will work with.

//      |----- window.onscroll = function () { ... } -----|
//
//  3.      Here, an event handler is assigned to the onscroll property of the window object. 
//          This handler is triggered whenever the user scrolls the webpage. 
//          It checks how far the user has scrolled down the page and adjusts the visibility of the "Scroll to Top" button accordingly.

//      |----- if (document.body.scrollTop > 'X' || document.documentElement.scrollTop > 'X') { ... } else { ... } -----|
//      
//  4.      Within the scroll event handler, this conditional statement checks whether the user has scrolled down more than 60 pixels 
//          either from the body element or the documentElement (which usually represents the <html> element). 
//          If the condition is met, the "show" class is added to the scrollToTopButton element to make it visible. 
//          Otherwise, the "show" class is removed to hide the button.

//      |----- scrollToTopButton.addEventListener("click", function () { ... }) -----|
//
//  5.      This code block adds a click event listener to the "Scroll to Top" button. 
//          When the button is clicked, the specified function is executed.

//      |----- window.scrollTo({ top: 0, behavior: 'smooth' }) -----|
//
//  6.      Inside the click event listener, this line scrolls the webpage back to the top using a smooth scrolling animation. 
//          It uses the window.scrollTo() method with an object parameter that specifies the target position (top: 0) 
//          and the scrolling behavior (behavior: 'smooth').


// ----------------------------------------------------------------- //
//                    Stories Scroll Function
// ----------------------------------------------------------------- //
// Function to calculate the position of the target element
function getStoryPosition(element) {
  // Get information about the element's position
  const rect = element.getBoundingClientRect();
  // Calculate the absolute vertical position on the entire page
  return rect.top + window.pageYOffset;
}

// Function to handle the click event and scroll to the 'soup-story-container'
function scrollToStoryContainer() {
  // Find the target element with class 'soup-story-container'
  const soupStoryContainer = document.querySelector('.soup-story-container');
  // Calculate the target position using the getStoryPosition function
  const targetPosition = getStoryPosition(soupStoryContainer);

  // Scroll smoothly to the target position
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}

// Add click event listener to each of the 'soup-cta-search' buttons
document.querySelectorAll('.story-scroll').forEach((button) => {
  // Attach a click event listener to each button
  button.addEventListener('click', scrollToStoryContainer);
});

// ------------------------- //
//          Sudo Code        //
// ------------------------- //
//  1.  What position of the page am i wanting to address. (vertical halves or horizontal) 
//  2.  How do i calculate and action to the section (element) of the page
//  3.  What effects can i apply to the action (scroll, flash, snap, fade in-out, etc)
//  4.  What and where do i apply the listener of the created funtion. (button)

// ----------------------------------------------------------------- //
//                    Function Notes / Understandings
// ----------------------------------------------------------------- //    
//      
//      |----- function getStoryPosition(element) { ... }) -----|
//
//  1.      The getStoryPosition function 
//          calculates the absolute vertical position of a given target element on the entire webpage.
//
//      |----- const '...' = element.getBoundingClientRect(); -----|
//
//          It takes an element parameter, and the calculation involves 
//          using the getBoundingClientRect() method to determine the element's position relative to the viewport.
//
//      |----- return '...'.top + window.pageYOffset; -----|
//      
//          By adding the '...'.top (the distance from the top of the viewport) 
//          to the current vertical scroll position (window.pageYOffset), 
//          it obtains the absolute vertical position of the element.
//
//    
//      |----- function scrollToStoryContainer() {...} -----|
//
//  2.      The scrollToStoryContainer function manages the click event on specific buttons
//          and enables smooth scrolling to a designated target element (assumed to have the class 'soup-story-container').
//
//      |----- const soupStoryContainer = document.querySelector('.soup-story-container'); -----|
//
//          It begins by locating the target element using document.querySelector('.soup-story-container').
//  
//      |----- const targetPosition = getStoryPosition(soupStoryContainer); -----|
//
//          The target position is calculated by calling the getStoryPosition function with the identified target element.
//
//      |----- window.scrollTo({
//              top: targetPosition,
//              behavior: 'smooth',
//                                 }); -----|
//
//          It uses window.scrollTo() to smoothly scroll to the calculated target position. 
//          The behavior: 'smooth' option ensures the scrolling animation is smooth.
//
//      |----- document.querySelectorAll('.story-scroll').forEach((button) => {...} -----|
//
//  3.   This part of the code selects all elements with the class story-scroll using document.querySelectorAll('.story-scroll').
//       For each selected element (assumed to be buttons), it adds a click event listener. 
//
//      |----- button.addEventListener('click', scrollToStoryContainer); -----|
//
//        When any of these buttons are clicked, the scrollToStoryContainer function is triggered, 
//        leading to a smooth scroll to the soup-story-container.
//    
// ------------------------------------------------------------------ //
//                    Product Scroll Function
// ------------------------------------------------------------------ //
// Function to calculate the position of the target element
function getProductPosition(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  }
  
  // Function to handle the click event and scroll to the 'soup-product-container'
  function scrollToProductContainer() {
    const soupProduct = document.querySelector('.product-collage');
    const targetProduct = getProductPosition(soupProduct);
  
    window.scrollTo({
      top: targetProduct,
      behavior: 'smooth',
    });
  }
  
  // Add click event listener to each of the 'soup-cta-search' buttons
  document.querySelectorAll('.product-scroll').forEach((button) => {
    button.addEventListener('click', scrollToProductContainer);
  });

// ----------------------------------------------------------------- //
//                    Team Scroll Function
// ----------------------------------------------------------------- //
// Function to calculate the position of the target element
function getTeamPosition(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  }
  
  // Function to handle the click event and scroll to the 'soup-team-section'
  function scrollToTeamContainer() {
    const soupTeam = document.querySelector('.soup-team-section');
    const targetTeam = getTeamPosition(soupTeam);
  
    window.scrollTo({
      top: targetTeam,
      behavior: 'smooth',
    });
  }
  
  // Add click event listener to each of the 'soup-cta-search' buttons
  document.querySelectorAll('.team-scroll').forEach((button) => {
    button.addEventListener('click', scrollToTeamContainer);
  });

// ------------------------------------------------------------------ //
//                        
// ------------------------------------------------------------------ //