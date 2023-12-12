let _btn = document.querySelectorAll('ul>li>div')
function _reset() {

    _btn.forEach((val2) => {
        val2.nextElementSibling.style.height = 0
        val2.style.color ='#595959'
        val2.children[1].classList.remove('rotate-180')
        val2.nextElementSibling.setAttribute('height', 0)
    })
}

_btn.forEach((val, i) => {
    val.addEventListener('click', (e) => {
        let y = val.nextElementSibling.getAttribute('height')

        _reset()

        let _children = val.children
        _children[1].classList.toggle('rotate-180')
        
        let _li = document.querySelectorAll('ul>li:nth-of-type(' + (i + 1) + ')>ul>li')
        let _height = ((_li.length) * 50) + 'px';
        val.nextElementSibling.setAttribute('height' , y) 
        if (val.nextElementSibling.getAttribute('height') == "null" || val.nextElementSibling.getAttribute('height') == 0) {
            val.nextElementSibling.style.height = _height
            val.nextElementSibling.setAttribute('height', _height)
            val.style.color ='#c12c42'
        }
        else {
            val.nextElementSibling.style.height = 0
            val.nextElementSibling.setAttribute('height', 0)
        }
    })
})