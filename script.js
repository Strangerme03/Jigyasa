const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});


// script.js

// Get the modal for terms and conditions
var termsModal = document.getElementById('termsModal');

// Get the link that opens the terms modal
var termsLink = document.getElementById('terms-link');

// Get the <span> element that closes the terms modal
var closeTermsModal = document.querySelector('#termsModal .close');

// When the user clicks on the link, open the terms modal
termsLink.onclick = function() {
    termsModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the terms modal
closeTermsModal.onclick = function() {
    termsModal.style.display = 'none';
}

// Get the modal for forgot password
var forgotPasswordModal = document.getElementById('forgotPasswordModal');

// Get the link that opens the forgot password modal
var forgotPasswordLink = document.querySelector('.forgot-pass-link');

// Get the <span> element that closes the forgot password modal
var closeForgotPasswordModal = document.querySelector('#forgotPasswordModal .close');

// When the user clicks on the link, open the forgot password modal
forgotPasswordLink.onclick = function() {
    forgotPasswordModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the forgot password modal
closeForgotPasswordModal.onclick = function() {
    forgotPasswordModal.style.display = 'none';
}

// Get the reset password button
var resetPasswordBtn = document.getElementById('resetPasswordBtn');

// When the user clicks on the reset password button, perform the reset password action
resetPasswordBtn.onclick = function() {
    // Simulate resetting password (you can replace this with your actual functionality)
    alert('Reset password instructions sent to your email.');
    // Close the modal after sending instructions
    forgotPasswordModal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == termsModal) {
        termsModal.style.display = 'none';
    }
    if (event.target == forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none';
    }
}
