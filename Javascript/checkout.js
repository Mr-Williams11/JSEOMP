let purchased = JSON.parse(localStorage.getItem('storeitems'))

let main = document.querySelector('main')
main.innerHTML= purchased.map((car,index)=>{
    return `
    <div class="table-responsive-lg">
    <table class="table table-bordered table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Car Name</th>
                <th>Model</th>
                <th>Year</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${car.carname}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
                <td>R ${car.price}</td>
                <td><img src="${car.url}" height="70px" width="80px" class="img-fluid" alt="Car Image"></td>
                <td>
                    <button class='btn btn-warning edit' value='${index}'>Edit</button>
                    <button class='btn btn-danger delete' value='${index}'>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    `
}).join('')

