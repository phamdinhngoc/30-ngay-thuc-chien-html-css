var animationElements = document.querySelectorAll('.show-on-scroll')

function chkElementInWindow(element) {

    var rect = element.getClientRects()[0]
    console.log(rect, element)
    var heightScreen = window.innerHeight
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start')
    } else {
        element.classList.remove('start')
    }

}

function checkAnimation() {
    animationElements.forEach(element => {
        chkElementInWindow(element)
    })
}


window.onscroll = checkAnimation








/* window.onscroll = function () {
    // console.log('test')

    var rectH1 = h1.getClientRects()
    // console.log(rectH1)
    var heightScreen = window.innerHeight

    //kiểm tra đối tượng H1 có nằm trong phạm vi màn hình hay không
    if (!(rectH1.bottom < 0 || rectH1.top > heightScreen)) {
        h1.classList.add('start')
    } else {
        h1.classList.remove('start')
    }

} */