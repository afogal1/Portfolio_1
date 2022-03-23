//start of javascript for navigation bar effects on scroll 
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});
//end of javascript for navigation bar effects on scroll 

/* Start of Responsive navigation sidebar menu */
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});
/* Start of Responsive navigation sidebar menu */


// Javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500)
});