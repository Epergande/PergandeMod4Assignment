function loadEmployees() {
    const savedEmployees = sessionStorage.getItem('employeesData');
    if (savedEmployees) {
        const parsed = JSON.parse(savedEmployees);
        return parsed.map(data => new Employee(
            data.id,
            data.firstname,
            data.lastname,
            data.email,
            data.department,
            data.hiredate,
            data.terminationdate
        ));
    }
    sessionStorage.setItem('employeesData', JSON.stringify(defaultEmployees));
    return defaultEmployees;
}
const employees = loadEmployees();
function loadSuppliers() {
    const savedSupplier = sessionStorage.getItem('suppliersData');
    if (savedSupplier) {

        const parsed = JSON.parse(savedSupplier);

        return parsed.map(data => new Supplier(
            data.id,
            data.companyname,
            data.zipcode,
            data.contactfirstname,
            data.contactlastname,
            data.contactemail,
            data.lastdeliverydate,
            data.isactive
        ));
    }

    sessionStorage.setItem('suppliersData', JSON.stringify(defaultSuppliers));
    return defaultSuppliers;
}


const suppliers = loadSuppliers();
function loadCustomers() {
    const savedCustomer = sessionStorage.getItem('customersData');
    if (savedCustomer) {
        const parsed = JSON.parse(savedCustomer);
        return parsed.map(data => new Customer(
            data.id,
            data.firstname,
            data.lastname,
            data.email,
            data.phone,
            data.notonmailinglist,
            data.lastpurchasedate,
        ));
    }
    sessionStorage.setItem('customersData', JSON.stringify(defaultCustomers));
    return defaultCustomers;
}
const customers = loadCustomers();