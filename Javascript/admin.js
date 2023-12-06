// this is where all products will be stored
let dealership = []

// function to create objects
function Carconstructor(carname, model, year, price, url) {
    this.carname = carname;
    this.model = model;
    this.year = year;
    this.price = price;
    this.url = url;
}

// Items that are going into the constructor
let car1 = new Carconstructor("BMW", "M5", 2022, 60000, "https://i.postimg.cc/XYc2cxNj/2022-BMW-M5-Competition-F90-1.png");
let car2 = new Carconstructor("Honda", "S200", 2022, 30000, "https://i.postimg.cc/QN90njNn/clean-s2000.png");
let car3 = new Carconstructor("Nissan", "Skyline", 2021, 32000, "https://i.postimg.cc/tT72bj3J/8c836328-97b5-4264-9593-31800069876a.png");
let car4 = new Carconstructor("Audi", "A4", 2023, 55000, "https://i.postimg.cc/4Nc2nsrh/The-Audi-S4-Is-Relentless-Precise-and-Way-Better-Looking-for-2020.png");
let car5 = new Carconstructor("Toyota", "Supra MK4", 2022, 25000, "https://i.postimg.cc/rmhFRx0Q/widebody-toyota-supra.png");



// pushing items into array
dealership.push(car1,car2,car3,car4,car5)

//sets array from the local storage tp array(items) in code
//JSON.parse turns the string into an object
localStorage.setItem('dealership',JSON.stringify(dealership))
dealership = JSON.parse(localStorage.getItem('dealership'))



let table = document.querySelector('table')
window.onload = function joel(){
    let products = dealership.map(function(car, index){
        console.log(car)
        console.log(index)
        return `
        <tr>
        <td>${car.carname}</td>
        <td>${car.model}</td>
        <td>${car.year}</td>
        <td>R ${car.price}</td>
        <td><img src="${car.url}" height="100px" width="100px"></td>
        <td><button>Edit</button></td>
        <td><button class = 'delete' value = '${index}'>Del</button></td>
        </tr>
        `
    })  
    
// these are called nested functions
    function remove(position){
        car.splice(position,1)
        favourite()
        joel()
    }

    table.addEventListener('click', function(){
        if(event.target.classList.contains('delete')){
            remove(event.target.value)
            // alert(event.target.value)
        }
    })

    let deletebutton = document.querySelector('.delete')

    table.innerHTML = products.join('')
}
table.style.color = 'white'

function idontknow(){
    localStorage.setItem('dealership',JSON.stringify(dealership))
    dealership = JSON.parse(localStorage.getItem('dealership'))
}