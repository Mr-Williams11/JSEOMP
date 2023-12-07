let storeitems = []

let main = document.querySelector('main')
let items = JSON.parse(localStorage.getItem('dealership'))

let produce = function bitchesGotMoney(prod){
main.innerHTML = prod.map(function (car, index) {
    console.log(car)
    console.log(index)
    return `
    <div class="card">
    <div class="card-border-top">
    </div>
    <div class="imgee"><img src="${car.url}" height="100px" width="120px"></div>
    <span>${car.carname}</span>
        <span>${car.year}</span>
    <span>${car.model}</span>
    <p class="job">R ${car.price}</p>
    <button class="btn btn-primary addToCart" data-add value="${index}">Add to Cart</button>
    </div>
    `
}).join('')};
produce(items)


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

// Search bar and sorting button function

document.getElementById('searchInput').addEventListener('input', searchFunction);
document.getElementById('select').addEventListener('change', searchFunction);

function searchFunction() {
    let searchIt = document.getElementById('searchInput').value.toLowerCase();
    let options = document.getElementById('select').value;
    let sortedProducts = items.filter(item => {
        return item.carname.toLowerCase().includes(searchIt);
    })

    if (options === 'Lowest to Highest') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (options === 'Highest to Lowest') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    produce(sortedProducts);
}