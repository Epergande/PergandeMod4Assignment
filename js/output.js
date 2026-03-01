
function loopAndDisplay(dataArray, elementCreator) {
    const outputElement = document.getElementById('output');

    outputElement.innerHTML = '';
    outputElement.classList.remove('hidden');

    dataArray.forEach(item => {
        outputElement.appendChild(elementCreator(item));
    });
}
document.getElementById('dropdown').addEventListener('change', function (e) {
    const selectedValue = e.target.value;

    if (selectedValue === 'employee') {
        loopAndDisplay(employees, employee => employee.createEmployeeElement());
    } else if (selectedValue === 'supplier') {
        loopAndDisplay(suppliers, supplier => supplier.createSupplierElement());
    } else if (selectedValue === 'customer') {
        loopAndDisplay(customers, customer => customer.createCustomerElement());
    } else {
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = '';
        outputElement.classList.remove('hidden');


        customers.forEach(customer => {
            outputElement.appendChild(customer.createCustomerElement());
        });
        suppliers.forEach((supplier) => {
            outputElement.appendChild(supplier.createSupplierElement());
        });
        employees.forEach(employee => {
            outputElement.appendChild(employee.createEmployeeElement());
        });
    }
});