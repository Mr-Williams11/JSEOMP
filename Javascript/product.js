let storeitems = []

let main = document.querySelector('main')
let items = JSON.parse(localStorage.getItem('dealership'))

main.innerHTML = items.map(function (car, index) {
    console.log(car)
    console.log(index)
    return `
    <div class="card">
    <div class="card-border-top">
    </div>
    <div class="imgee"><img src="${car.url}" height="100px" width="90px"></div>
    <span>${car.carname}</span>
        <span>${car.year}</span>
    <span>${car.model}</span>
    <p class="job">R ${car.price}</p>
    <button class="btn btn-primary addToCart" data-add value="${index}">Add to Cart</button>
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
