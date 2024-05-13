// var mockData = [{
//     name: 'Sp 1',
//     price: 999,
//     picture: `images/shoes4.png`
// }, {
//     name: 'Sp 2',
//     price: 999,
//     picture: `images/shoes4.png`
// }, {
//     name: 'Sp 3',
//     price: 999,
//     picture: `images/shoes4.png`
// }]
fetch('http://fakestoreapi.com/products')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);

        //init
        var products = document.querySelector('.products')

        products.innerHTML = ''

        data.forEach(item => {

            // <div class="product">
            //     <img src="images/shoes5.png" alt="">
            //         <div class="info">
            //             <div class="name">SP1</div>
            //             <div class="price">99</div>
            //         </div>
            // </div>

            var newProduct = document.createElement('div')
            newProduct.classList.add('product')
            newProduct.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="info">
                <div class="name">${item.title}</div>
                <div class="price">${item.price}</div >
            </div > `

            products.appendChild(newProduct)
        })
    })


var searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', function (e) {
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProductDOM = document.querySelectorAll('.product')
    listProductDOM.forEach(item => {
        if (item.innerText.includes(txtSearch)) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })

})



