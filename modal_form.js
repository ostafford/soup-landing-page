// ----------------------------------------------------------------- //
//                      Soup Sign Up
// ----------------------------------------------------------------- //
const soupSignUpBtn = document.querySelectorAll('.sign-up');
const modalSignUpBox = document.querySelector('#modal-sign-up-box');
const modalCloseBtn = modalSignUpBox.querySelector('.modal-close');
const modalSignUp = modalSignUpBox.querySelector('.modal-sign-up');

function showSignUpModal(event) {
  // Prevent the default behavior of a link click
  event.preventDefault();
  // Add a class to make the sign-up modal box visible
  modalSignUpBox.classList.add('is-showing');
}

// Attach the event listener to each '.sign-up' element
soupSignUpBtn.forEach((btn) => {
  // Add a click event listener to show the sign-up modal
  btn.addEventListener('click', showSignUpModal);
});

// Add click event listeners to close the modal
modalCloseBtn.addEventListener('click', hideSignUpModalOutsideClick);
modalSignUpBox.addEventListener('click', hideSignUpModalOutsideClick);

function hideSignUpModalOutsideClick(event) {
  // Check if the clicked element is not within the modal content
  if (!event.target.closest('.modal-content')) {
    // Remove the class to hide the sign-up modal box
    modalSignUpBox.classList.remove('is-showing');
  }
}


// ------------------------- //
//          Sudo Code        //
// ------------------------- //
//  1.  What parts (elements) are needed for the form (modal)
//    i. What buttons or links (anchors) will be interacted with.
//  2.  show vs hidden (modal)
//    i. By default the modal will need to be hidden and only shown when requested ('click')
//  3.  Will there be mulitple buttons that access the same modal?
//    i. creating a '.foreach' function for mulitple buttons on the page.
//  4.  When the modal is present what can and can't it do.
//    i. submit, push, etc
//  5.  When exiting the modal is there only 1 option or multiple?
//    i. Modal box to dissapear when clicked outside of 'target'

// ----------------------------------------------------------------- //
//                    Function Notes / Understandings
// ----------------------------------------------------------------- //

//  1.  |----- const '...' = document.querySelectorAll('...'); -----| 
//
//          These lines of code select various elements using the provided CSS class and ID selectors.

//  2.  |----- function showSignUpModal(event) {...} -----| 
//
//          The showSignUpModal function handles showing the sign-up modal box.
//
//      |----- event.preventDefault(); -----| 
//
//          It takes an event parameter and uses event.preventDefault() 
//          to prevent the default behavior of a link click (usually redirecting to another page).
//
//      |----- modalSignUpBox.classList.add('is-showing'); -----| 
//
//          It adds the class 'is-showing' to the modalSignUpBox, which toggles its visibility.

//  3.  |----- function hideSignUpModalOutsideClick(event) {} -----| 
//
//          The hideSignUpModalOutsideClick function allows the modal to be closed when the user clicks outside of its content.
//
//      |----- if (!event.target.closest('.modal-content')) { -----| 
//
//          It checks if the clicked element is not within the modal content (using event.target.closest('.modal-content')).
//
//      |----- modalSignUpBox.classList.remove('is-showing'); -----| 
//
//          If the click is outside the modal content, it hides the modal by removing the 'is-showing' class.

//  4.  |----- soupSignUpBtn.forEach((btn) => {
//                btn.addEventListener('click', showSignUpModal); -----| 
//
//          This code attaches event listeners to various elements to enable the modal's functionality.
//          For each element with the class .sign-up, a click event listener is added to show the sign-up modal.
//
//      |----- modalCloseBtn.addEventListener('click', hideSignUpModalOutsideClick); -----|
//      |----- modalSignUpBox.addEventListener('click', hideSignUpModalOutsideClick); -----| 
//
//          For the close button (modalCloseBtn) and the entire modal (modalSignUpBox), 
//          click event listeners are added to hide the modal when clicked outside its content.


// ----------------------------------------------------------------- //
//                        Soup Sign In
// ----------------------------------------------------------------- //
const soupSignInBtn = document.querySelectorAll('.sign-in');
const modalSignInBox = document.querySelector('#modal-sign-in-box');
const modalCloseBtnIn = modalSignInBox.querySelector('.modal-close');
const modalSignIn = modalSignInBox.querySelector('.modal-sign-in');

function showSignInModal(event) {
  event.preventDefault();
  modalSignInBox.classList.add('is-showing');
}

function hideSignInModal() {
  modalSignInBox.classList.remove('is-showing');
}

// Attach the event listener to each '.sign-in' element
soupSignInBtn.forEach((btn) => {
  btn.addEventListener('click', showSignInModal);
});

modalCloseBtnIn.addEventListener('click', hideSignInModal);
modalSignIn.addEventListener('click', hideSignInModal);

// This allows the modal to disappear when clicked outside the modal content
function hideSignInModal(event) {
  if (!event.target.closest('.modal-content')) {
    modalSignInBox.classList.remove('is-showing');
  }
}
modalSignInBox.addEventListener('click', hideSignInModal);

// ------------------------------------------------------------------ //
//                        Soup Contact Us
// ------------------------------------------------------------------ //
const soupContactBtns = document.querySelectorAll('.soup-contact');
const modalSponserBox = document.querySelector('#modal-sponser-box');
const modalCloseBtnReg = modalSponserBox.querySelector('.modal-close');
const modalRegister = modalSponserBox.querySelector('.modal-register');

function showSponserModal(event) {
  event.preventDefault();
  modalSponserBox.classList.add('is-showing');
}

function hideSponserModal() {
  modalSponserBox.classList.remove('is-showing');
}

// Attach the event listener to each '.soup-contact' element
soupContactBtns.forEach((btn) => {
  btn.addEventListener('click', showSponserModal);
});

modalCloseBtnReg.addEventListener('click', hideSponserModal);
modalRegister.addEventListener('click', hideSponserModal);

// This allows the modal to disappear when clicked outside the modal content
function hideSponserModal(event) {
  if (!event.target.closest('.modal-content')) {
    modalSponserBox.classList.remove('is-showing');
  }
}
modalSponserBox.addEventListener('click', hideSponserModal);

// ------------------------------------------------------------------ //
//                        
// ------------------------------------------------------------------ //