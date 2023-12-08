// this is where all products will be stored
let dealership = [];

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
dealership.push(car1, car2, car3, car4, car5);

// sets array from the local storage to array(items) in code
localStorage.setItem('dealership', JSON.stringify(dealership));
dealership = JSON.parse(localStorage.getItem('dealership'));

let table = document.querySelector('table');

function joel() {
    let products = dealership.map(function (car, index) {
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
        `;
    });

    table.innerHTML = products.join('');
}

// these are called nested functions
function idontknow() {
    localStorage.setItem('dealership', JSON.stringify(dealership));
    dealership = JSON.parse(localStorage.getItem('dealership'));
}

function remove(position) {
    dealership.splice(position, 1);
    idontknow();
    joel();
}

table.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        remove(event.target.value);
    }
});

let deletebutton = document.querySelector('.delete');

table.style.color = 'white';

// Event listener for my "Delete" button
table.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        remove(event.target.value);
    }
});

// Function to handle adding a new product
function openModal(title, index) {
    // Set modal title

    // Update modal body content with product information
    let modalBody = document.getElementById('modalBody');

    if (title === 'Edit Product') {
        let carToEdit = dealership[index];
        modalBody.innerHTML = `
            <p><b>Car Name:</b> <input type="text" id="newCarName" placeholder="Enter new car name" value="${carToEdit.carname}"></p>
            <p><b>Model:</b> <input type="text" id="newModel" placeholder="Enter new model" value="${carToEdit.model}"></p>
            <p><b>Year:</b> <input type="number" id="newYear" placeholder="Enter new year" value="${carToEdit.year}"></p>
            <p><b>Price:</b> R <input type="number" id="newPrice" placeholder="Enter new price" value="${carToEdit.price}"></p>
            <p><b>Image:</b> <input type="text" id="newUrl" placeholder="Enter new image URL" value="${carToEdit.url}"></p>
        `;
    }

    // Show the modal
    let infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
    infoModal.show();
}

// Function to handle saving changes
function saveChanges() {
    // Get values from modal input fields
    let newCarName = document.getElementById('newCarName').value;
    let newModel = document.getElementById('newModel').value;
    let newYear = parseInt(document.getElementById('newYear').value);
    let newPrice = parseInt(document.getElementById('newPrice').value);
    let newUrl = document.getElementById('newUrl').value;

// Updating the existing product
    let carToEdit = dealership[editIndex];
    carToEdit.carname = newCarName || carToEdit.carname;
    carToEdit.model = newModel || carToEdit.model;
    carToEdit.year = newYear || carToEdit.year;
    carToEdit.price = newPrice || carToEdit.price;
    carToEdit.url = newUrl || carToEdit.url;

// Saving changes to local storage
    idontknow();
    joel();
}
// Variable to store the index of the car being edited
let editIndex;

// Event listener for my "Edit" button
table.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit')) {
        editIndex = event.target.value;
        openModal('Edit Product', editIndex);
    }
});

// Event listener for my "Save Changes" button
document.getElementById('saveChangesBtn').addEventListener('click', saveChanges);

// Event listener for my"Add New Product" button
document.getElementById('addNewButton').addEventListener('click', openAddModal);

// Event listener for my "Save New Product" button
document.getElementById('saveNewProductBtn').addEventListener('click', function () {
    saveNewProduct();
    closeModal('addNewModal');
});

// Function to open the add modal
function openAddModal() {
    document.querySelector('.modal-title').innerText = 'Add New Product';
    document.getElementById('newCarName').value;
    document.getElementById('newModel').value;
    document.getElementById('newYear').value;
    document.getElementById('newPrice').value;
    document.getElementById('newUrl').value;
    let addModal = new bootstrap.Modal(document.getElementById('addNewModal')); // Updated modal ID
    addModal.show();
}

// Function to save the new product
function saveNewProduct() {
    let newCarName = document.getElementById('newCarName').value;
    let newModel = document.getElementById('newModel').value;
    let newYear = parseInt(document.getElementById('newYear').value);
    let newPrice = parseInt(document.getElementById('newPrice').value);
    let newUrl = document.getElementById('newUrl').value;

    // Validate inputs and add new product
    if (newCarName && newModel && !isNaN(newYear) && !isNaN(newPrice) && newUrl) {
        let newCar = new Carconstructor(newCarName, newModel, newYear, newPrice, newUrl);
        dealership.push(newCar);
        idontknow();
        joel();
    } else {
        alert('Please enter valid information for all fields.');
    }
}

document.getElementById('closModal').addEventListener('click', closeModal);
// Function to close the modal by ID
function closeModal(modalId) {
    let modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.hide();
}

// spinner function
function spinner(){
    if (dealership.length === 0) {
        spin.innerHTML += `
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        `
    } else {
        joel(dealership);
    }
    
}
spinner()
let spin = Document.querySelector('.spin')