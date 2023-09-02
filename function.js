// ------------------------------------------------------------------ //
//                        Burger JS
// ------------------------------------------------------------------ //
const burgerBtn = document.querySelector('.svg-btn');
const soupNav = document.querySelector('.soup-nav');
const menuImages = document.querySelectorAll('.menu-image');

// Define a function named 'toggleNav'
function toggleNav() {
  // Toggle the 'is-showing' class on the navigation menu
  soupNav.classList.toggle('is-showing');
  // Toggle the 'hidden' class on each menu image
  menuImages.forEach(image => image.classList.toggle('hidden'));
}


// Define a function named 'hideMenuOnClickOutside' which takes an 'event' parameter
function hideMenuOnClickOutside(event) {
  // Check if the click event's target is outside the navigation menu
  // and not the burger button
  console.log(soupNav)
if (soupNav.classList.contains('is-showing') &&
    event.target !== burgerBtn && 
    !soupNav.contains(event.target)) {
    // If conditions are met, remove the 'is-showing' class from the navigation menu
    soupNav.classList.remove('is-showing');
    
    // Add the 'hidden' class to each menu image to hide them
    menuImages.forEach(image => image.classList.add('hidden'));
  }
}
// Add a 'click' event listener to the burger button
// When clicked, execute the 'toggleNav' function
burgerBtn.addEventListener('click', toggleNav);

// Add a 'click' event listener to the entire document
// When clicked, execute the 'hideMenuOnClickOutside' function
document.addEventListener('click', hideMenuOnClickOutside);

// ------------------------- //
//          Sudo Code        //
// ------------------------- //
//  1.  What parts (elements) are needed for the burger menu
//    i. What buttons or links (anchors) will be interacted with.
//  2.  When and how will the burger menu show?
//    i. What part of the nav section will show in the menu
//  3.  How will the menu dissapear when its not needed?
//    i. burger menu icon vs outside the menu section ('click' , 'scroll')

// ----------------------------------------------------------------- //
//                    Function Notes / Understandings
// ----------------------------------------------------------------- //

//  1.  |----- function toggleNav() {
//                soupNav.classList.toggle('is-showing');
//                menuImages.forEach(image => image.classList.toggle('hidden')); -----| 
//
//          Here, a function named toggleNav is defined. 
//          When called, this function toggles the visibility of the navigation menu and menu images. 
//          It uses the classList.toggle() method to add or remove the specified class,
//          which controls the visibility of these elements.

//  2.  |----- function hideMenuOnClickOutside(event) {
//                if (!soupNav.contains(event.target) && event.target !== burgerBtn) {
//                  soupNav.classList.remove('is-showing')
//                   menuImages.forEach(image => image.classList.add('hidden')); -----|
//
//          Here, a function named hideMenuOnClickOutside is defined. 
//          This function takes an 'event' parameter, which represents the click event. 
//          It checks if the click event occurred outside the navigation menu and wasn't on the burger button. 
//          If these conditions are met, it hides the navigation menu by removing the 'is-showing' class 
//          and hides the menu images by adding the 'hidden' class.

//  3.  |----- burgerBtn.addEventListener('click', toggleNav);
//             document.addEventListener('click', hideMenuOnClickOutside); -----| 
//
//          These lines set up event listeners. 
//          The first one listens for a 'click' event on the burger button.
//          When the burger button is clicked, the toggleNav function is executed, 
//          toggling the visibility of the menu.
//          The second event listener listens for 'click' events anywhere on the document.
//          When a click event occurs, the hideMenuOnClickOutside function is executed, 
//          which checks if the click occurred outside the menu and burger button and hides the menu accordingly.


// ------------------------------------------------------------------ //
//                        Photo Loop (Carousel)
// ------------------------------------------------------------------ //
const imageFileNamesDesk = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  'photo4.jpg',
  'photo5.jpg',
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  const container = document.querySelector('.soup-product-container');
  const imageUrl = `url(images/${imageFileNamesDesk[currentImageIndex]})`;
  container.style.backgroundImage = imageUrl;
  currentImageIndex = (currentImageIndex + 1) % imageFileNamesDesk.length;
}

// Start the carousel on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  changeBackgroundImage(); // Change the background image immediately on load

  // Set an interval for smooth transition
  setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
});

// ------------------------- //
//          Sudo Code        //
// ------------------------- //
//  1.  What and where are the photos coming from
//    i. building an array?
//  2.  How it will start and continue. 
//    i. start from 0-5 etc
//  3.  where on the page will this carousel be and set.
//    i. what styles will be applied to the images if any. 
//  4.  How often do i want it to transition?
//    i. 3-5 seconds
//

// ----------------------------------------------------------------- //
//                    Function Notes / Understandings
// ----------------------------------------------------------------- //

//  1.  |----- const imageFileNames = [...] -----|
//
//                Here, we're creating an array called imageFileNames which holds the names of image files. 
//                These names represent the images we want to display in the carousel.
//                You can add more image names to the array as required.
//                   ** Remeber that using '[]' is for arrays. 

//  2.  |----- let currentImageIndex = 0; -----| 
//
//                We're declaring a variable named currentImageIndex and setting its initial value to 0. 
//                This variable will keep track of which image from the array is currently being displayed.
//
//  3.  |----- function changeBackgroundImage() {
//                const container = document.querySelector('.soup-product-container');
//                const imageUrl = `url(images/${imageFileNames[currentImageIndex]})`;
//                container.style.backgroundImage = imageUrl;
//                currentImageIndex = (currentImageIndex + 1) % imageFileNames.length; -----| 
//
//                    Here, we're defining a function called changeBackgroundImage
//                    that handles changing the background image of a designated container:
//
//                    We're selecting the DOM element with the class .soup-product-container.
//                    This element is where we want to display the background images.
//
//                    We're constructing an image URL using the current image name from the imageFileNames array.
//                    This URL is assigned to the imageUrl variable.
//
//                    We're setting the backgroundImage style property of the container to the constructed image URL, 
//                    effectively changing the background image.
//
//                    We're updating the currentImageIndex to the next index in a circular manner (using the modulo operator %), 
//                    ensuring that it loops back to 0 when it reaches the end of the imageFileNames array.
//
//  4.  |----- document.addEventListener('DOMContentLoaded', function() {
//                changeBackgroundImage();
//                setInterval(changeBackgroundImage, 5000); -----| 
//
//                    In this section, we're adding an event listener to the DOMContentLoaded event, 
//                    which indicates that the initial HTML document has been fully loaded:

//                    When the DOM content is ready, the provided function is executed.
//                    Inside this function, we're immediately calling the changeBackgroundImage function
//                    to change the background image when the page loads.
//                    We're using setInterval to repeatedly call the changeBackgroundImage function every 5000 milliseconds (5 seconds). 
//                    This creates a smooth transition between background images, effectively simulating an image carousel effect.

// ------------------------------------------------------------------ //
//                        Video Playback (auto)
// ------------------------------------------------------------------ //

// Get the video element
const video = document.getElementById('lux-video');

// Set the initial volume to 30%
video.volume = 0.3;

// Options for the Intersection Observer (API)
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger when at least 50% of the video is visible
};

// Callback function when the video is intersecting the viewport
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Video is in view, play it
      video.play();
    } else {
      // Video is not in view, pause it
      video.pause();
    }
  });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the video element
observer.observe(video);

// ------------------------- //
//          Sudo Code        //
// ------------------------- //
//  1.  Where am i getting the video? 
//    i. local vs URL
//  2.  How will the video play?
//    i. auto play vs user interaction
//  3.  When will the video play?
//    i. When the page loads or when the video is in view?
//

// ----------------------------------------------------------------- //
//                    Function Notes / Understandings
// ----------------------------------------------------------------- //

//  1.  |----- const video = document.getElementById('lux-video'); -----| 
//
//                In this part of the JavaScript code, we use document.getElementById to get a reference 
//                to the video element with the ID lux-video. This allows us to manipulate the video using JavaScript.

//  2.  |----- const options = {
//                root: null, // Use the viewport as the root
//                rootMargin: '0px', // No margin
//                threshold: 0.5, // Trigger when at least 50% of the video is visible  }; -----| 
//
//                  Here, we define the options for the Intersection Observer. 
//                  This observer watches for changes in the visibility of the video element within the viewport. 
//                  The root specifies the element that is used as the viewport for checking visibility. 
//                  rootMargin defines any additional margin around the root element, 
//                  and threshold sets the percentage of visibility required for the intersection callback to trigger (in this case, 50%).
//
//  3.  |----- const handleIntersection = (entries, observer) => {
//                entries.forEach(entry => {
//                  if (entry.isIntersecting) {
//                    video.play();
//                  } else {
//                    video.pause();    -----| 
//
//                  This is the callback function that gets executed when the intersection state of the video element changes.
//                  The function takes an array of entries (observed elements) and the observer as parameters. 
//                  For each entry, it checks whether the element is currently intersecting the viewport using entry.isIntersecting. 
//                  If it's intersecting, the video is played using video.play(), and if it's not intersecting, the video is paused using video.pause().
//
//  4.  |----- const observer = new IntersectionObserver(handleIntersection, options);   -----|
//  5.  |----- observer.observe(video);   -----| 
//
//                  These lines create an instance of the Intersection Observer using the provided options and the callback function. 
//                  Then, the observer starts observing the video element for changes in its intersection with the viewport.  