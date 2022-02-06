let hamburger = document.querySelector('.hamburger');
let wrapper = document.querySelector('.li')


hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('hamburger_active');
    wrapper.classList.toggle('li_active')
})

