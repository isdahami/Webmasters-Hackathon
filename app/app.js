/* Importing the model.js file. */
import * as MODEL from "./model.js";

function route() {
    /* Getting the hash tag from the URL. */
    let hashTag = window.location.hash;
    /* Removing the hash tag from the URL. */
    let pageID = hashTag.replace("#", "");

    /* This is a conditional statement. If the pageID is empty, then the page will be changed to the home page. If the pageID is not empty, then the page will be changed to the pageID. */
    if(pageID == "") {
        MODEL.changePage("home");
    } else {
        MODEL.changePage(pageID);
    }
}

function toggleHamburgerMenu() {
    const $hamburgerMenu = $('.nav-ham-menu');
    const $navLinks = $('.nav-links');
  
    $hamburgerMenu.click(function() {
      $navLinks.toggleClass('show');
    });
  }


  
  


function initApp() {
    /* Listening for a change in the hash tag. */
    $(window).on("hashchange", route)
    /* Calling the route function. */
    route();
    toggleHamburgerMenu();
}

 
/* This is a jQuery function that is called when the document is ready. */
$(document).ready(function () {
    initApp();
    
});