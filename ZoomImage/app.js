let imgList = document.querySelectorAll('.zoomer img')
let mirror = document.querySelector('#mirror')
let scope = 4

imgList.forEach(function (img) {
    img.addEventListener('mousemove', function (e) {
        mirror.classList.remove('hide')
        var percentMouseOfWidth = (e.offsetX / this.offsetWidth) * 100
        var percentMouseOfHeight = (e.offsetY / this.offsetHeight) * 100
        mirror.style.top = `${e.clientY}px`
        mirror.style.left = `${e.clientX}px`

        mirror.style.backgroundSize = `1000px 1000px`

        mirror.style.backgroundPosition = `${percentMouseOfWidth}% ${percentMouseOfHeight}%`

        var duongDan = e.target.getAttribute('src')
        mirror.style.backgroundImage = `url(${duongDan})`
    })

    img.addEventListener('mouseleave', function (e) {
        mirror.classList.add('hide')
    })
})
