let storeitems = []

let main = document.querySelector('main')
let items = JSON.parse(localStorage.getItem('dealership'))

main.innerHTML = items.map(function (car, index) {
    console.log(car)
    console.log(index)
    return `
    <div class="container-fluid">
 <table>
        <tr>
            <td>${car.carname}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>R ${car.price}</td>
            <td><img src="${car.url}" height="70px" width="80px"></td>
        </tr>
        <tr>
        <button class = "addToCart" data-add value = "${index}">Add to Cart</button>
        </tr>
    </table>
    </div>
    `
}).join('')

function add(index){
    storeitems.push(items[index])
    localStorage.setItem('storeitems',JSON.stringify(storeitems))
}

main.addEventListener('click',function(){
    if(event.target.hasAttribute('data-add')){
        // alert('button')
        add(event.target.value)
    }
})
