let menu = document.querySelector(".centerHead");
let menuToggle = document.querySelector(".hedBlok");
let menuNeToggle = document.querySelector(".BlockSkrit");
menuToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.add("show-menu");
    menuNeToggle.classList.remove("SvgKrestNo");
    menuNeToggle.classList.add("SvgKrestYes");
});
menuNeToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.remove("show-menu");
    menuNeToggle.classList.remove("SvgKrestNo");
    menuNeToggle.classList.add("SvgKrestYes");
});
window.addEventListener('resize', function(){
    if (window.innerWidth > 425 && menu.classList.contains('show-menu')){
        menu.classList.remove('show-menu');
    }
})