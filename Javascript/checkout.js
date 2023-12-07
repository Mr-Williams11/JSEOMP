let purchased = JSON.parse(localStorage.getItem('storeitems'))

let table = document.querySelector('table')
table.innerHTML= purchased.map((car,index)=>{
    return `
    <tr>
    <td>${car.carname}</td>
    <td>${car.model}</td>
    <td>R${car.price}</td>
    <td><img src='${car.url}' height="70px" width="80px"></img></td>
    </tr>
    `
}).join('')

