const 
dropdowns = document.querySelectorAll(".dropdown"),
menus = document.querySelectorAll(".dropdown-menu")

dropdowns.forEach(dropdown => {
    dropdown.onclick = () => {
        if (!dropdown.classList.contains('active')) {
            dropdowns.forEach(e => {
                e.classList.remove('active')
            })
            dropdown.classList.add('active')
        } else {
            dropdown.classList.remove('active')
        }
    }
});