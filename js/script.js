/* Nav Menu */
const toggleBtn = document.getElementById('toggle-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLink = document.querySelector('.nav-link');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('active');
});

/* Smooth Scroll */
let anchorSelector = '#mobile-menu a[href^="#"]';
let anchorList = document.querySelectorAll(anchorSelector);
    
    anchorList.forEach(link => {
    link.onclick = function (e) {
        toggleBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('active');
        e.preventDefault();

        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// Scroll to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  backToTopButton.addEventListener("click", goToTop)


/* Tabs */
document.addEventListener('DOMContentLoaded', function(){
  const tabLinks = document.getElementsByClassName('tab-links');
  for(let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', tabSwitch, false);
  }

  function tabSwitch(){
    document.getElementsByClassName('active-link')[0].classList.remove('active-link');
    this.classList.add('active-link');
    
    document.getElementsByClassName('active-tab')[0].classList.remove('active-tab');
    const arrayTabs = Array.prototype.slice.call(tabLinks);
    const index = arrayTabs.indexOf(this);

    document.getElementsByClassName('tab-contents')[index].classList.add('active-tab');
  };
}, false);


