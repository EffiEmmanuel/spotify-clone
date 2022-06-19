const toggle = document.getElementById('toggle')

toggle.addEventListener('change', function(e) {
    const mobileMenu = document.querySelector('.mobile-menu')
    const overlay = document.querySelector('.overlay')
    if(e.target.checked) {
        // mobileMenu.classList.remove('slideOut')
        mobileMenu.classList.add('slideIn')
        overlay.style.display = 'block'
    } else {
        // mobileMenu.classList.add('slideOut')
        mobileMenu.classList.remove('slideIn')
        overlay.style.display = 'none'
    }
})