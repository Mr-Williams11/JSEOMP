let purchased = JSON.parse(localStorage.getItem('storeitems')) || [];

// Sample HTML content
let main = document.querySelector('main');
main.innerHTML = `
    <table class="tableing">
        <thead>
            <tr>
                <th>Car Name</th>
                <th>Model</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            ${purchased.map((car, index) => `
                <tr>
                    <td>${car.carname}</td>
                    <td>${car.model}</td>
                    <td>R${car.price}</td>
                    <td><input type="number" min="1" value="${car.quantity || 1}" class="quantity-input" data-index="${index}"></td>
                    <td>R<span class="total" data-index="${index}">${car.price * (car.quantity || 1)}</span></td>
                    <td><img src='${car.url}' height="70px" width="80px"></img></td>
                </tr>
            `).join('')}
        </tbody>
    </table>
    <div id="totalArea">Total Value: R
    <span id="totalValue"> ${calculateTotal()}</span>
    </div>
`;

// Function to calculate total value
function calculateTotal() {
    let total = purchased.reduce((acc, car) => acc + (car.price * (car.quantity || 1)), 0);
    return total;
}

// Function to update total and quantity
function updateTotals() {
    let totalValueElement = document.getElementById('totalValue');
    let totalArea = document.getElementById('totalArea');

    totalValueElement.textContent = calculateTotal();

    if (purchased.length === 0) {
        totalArea.style.display = 'none';
    } else {
        totalArea.style.display = 'block';
    }
}

// Event listener for quantity input changes
main.addEventListener('input', function (event) {
    if (event.target.classList.contains('quantity-input')) {
        let index = event.target.dataset.index;
        let newQuantity = parseInt(event.target.value, 10);

        if (!isNaN(newQuantity) && newQuantity > 0) {
            purchased[index].quantity = newQuantity;
            updateTotals();
        }
    }
});

// Initial update of totals
updateTotals();

document.getElementById('purchaseButton').addEventListener('click', function () {
    alert('Thanks for Purchasing!');
    purchased= []
    localStorage.setItem('purchased', JSON.stringify(purchased))
    updateTotals();
});
