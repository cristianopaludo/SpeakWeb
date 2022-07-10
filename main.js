// Toggle menu icons
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// Change header style when scrolling when 992px window size
const header = document.querySelector('#header')
const logo = document.querySelector('#logo')

function headerStyleChange() {
  if (window.scrollY <= 1 && window.innerWidth >= 992) {
    header.classList.add('on-top')
    logo.src = './assets/speaklogo1.png'
  } else {
    header.classList.remove('on-top')
    logo.src = './assets/speaklogo2.png'
  }
}
// Show/Hide budgetButton accordantly with window size
const budgetButton = document.querySelector('#budget-button')

function toggleBudgetButton() {
  if (window.innerWidth >= 992 && window.innerWidth < 1200) {
    budgetButton.classList.add('hide')
  } else {
    budgetButton.classList.remove('hide')
  }
}

// Hide nav menu when clicking on a link
const links = document.querySelectorAll('nav a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })

}

// Set active link on nav when scrolling
const sections = document.querySelectorAll('section')

function handleActiveLink() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Swiper Home
const swiper1 = new Swiper('.swiper-1', {
  autoplay: {
    delay: 5000,
  },
  speed: 1500,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Swiper Techs
const swiper2 = new Swiper('.swiper-2', {
  autoplay: {
    delay: 5000,
  },
  speed: 1500,
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

// Back to To Button
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  headerStyleChange()
  backToTop()
  handleActiveLink()
})

// When Resize 
window.addEventListener('resize', function () {
  toggleBudgetButton()
})

// When Page Load
window.addEventListener('load', function () {
  toggleBudgetButton()
  headerStyleChange()
})