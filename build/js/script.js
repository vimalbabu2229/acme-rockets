const initApp = () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

  const toggleMenu = () => {
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("toggle-btn");
  };

  hamburger.addEventListener('click', toggleMenu);

  menu.addEventListener('click', (e) => {
    if(e && e.target.nodeName == 'A'){
        toggleMenu();
    }
  });
};

document.addEventListener('DOMContentLoaded', initApp)