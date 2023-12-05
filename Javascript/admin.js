// this is where all products will be stored
let dealership = []

// function to create objects
function Carconstructor(carname,description,year,price,url){
    this.carname = carname,
    this.description = description,
    this.year = year,
    this.price = price,
    this.url = url
}

// items that are goinginto the constructor
let car1 = new Carconstructor()
let car2 = new Carconstructor()
let car3 = new Carconstructor()
let car4 = new Carconstructor()
let car5 = new Carconstructor()

// pushing items into array
dealership.push(car1,car2,car3,car4,car5)

localStorage.setItem('dealership',JSON.stringify(dealership))

//sets array from the local storage tp array(items) in code
//JSON.parse turns the string into an object
dealership = JSON.parse(localStorage.getItem('dealership'))


let table = document.querySelector('table')
window.onload = function joel(){
    let products = items.map(function(car, index){
        console.log(car)
        console.log(index)
        return `
        <tr>
        <td>${car.carname}</td>
        <td>${car.description}</td>
        <td>${car.year}</td>
        <td>${car.price}</td>
        <td>${car.url}</td>
        <td><button>Edit</button></td>
        <td><button class = 'delete' value = '${index}'>Del</button></td>
        </tr>
        `
    })
    
// these are called nested functions
    function remove(position){
        items.splice(position,1)
        idontknow()
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
table.style.color = 'blue'
table.style.backgroundColor = 'aqua'
table.style.border = '5px solid black'

function idontknow(){
    localStorage.setItem('dealership',JSON.stringify(dealership))
    dealership = JSON.parse(localStorage.getItem('dealership'))
}