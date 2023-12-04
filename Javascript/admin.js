// this is where all products will be stored
let items = []
// object created manually
let object1 = {
    id: 1,
    name: 'Nike Shoe',
    description:'This is better than the original',
    price: 800,
    url:'https://static.nike.com/a/images/t_default/4e27d172-06c4-48ae-94eb-00d7fdc063cc/air-force-1-07-lv8-shoes-KxDLKs.png'
}

// function to create objects
function Constructor(id,name,description,price,url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}

// second item created using constructor
let item2 = new Constructor(2,'Nike Slide', 'This is comfortable',500,'https://static.nike.com/a/images/t_default/bd2cc777-b64f-463e-b0e7-f456fff29ce4/calm-slides-NzJHxT.png')
let item3 = new Constructor(3, 'Adidas Shoe', 'this is nice', 600, mjkbkheiodjok )
// pushing items into array
items.push(object1,item2)

localStorage.setItem('items',JSON.stringify(items))

//sets array from the local storage tp array(items) in code
//JSON.parse turns the string into an object
items = JSON.parse(localStorage.getItem('items'))


let table = document.querySelector('table')
window.onload = function joel(){
    let products = items.map(function(item, index){
        console.log(item)
        console.log(index)
        return `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>R${item.price}</td>
        <td>${item.description}</td>
        <td><img src='${item.url}'></img></td>
        <td><button>Edit</button></td>
        <td><button class = 'delete' value = '${index}'>Del</button></td>
        </tr>
        `
    })
    
// these are called nested functions
    function remove(position){
        items.splice(position,1)
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
table.style.color = 'blue'
table.style.backgroundColor = 'aqua'
table.style.border = '5px solid black'

function favourite(){
    localStorage.setItem('items',JSON.stringify(items))
    items = JSON.parse(localStorage.getItem('items'))
}


// this is a callback function
// function one(){

// }

// function two(Anotherfunction){
//     Anotherfunction()
// }

// two(one())