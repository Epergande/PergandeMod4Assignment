$(function () {
    $('#add-employee-form').on('submit', function (e) {
        e.preventDefault();
        const id = $('#employee-form-ID').val();
        const firstname = $('#employee-form-firstname').val();
        const lastname = $('#employee-form-lastname').val();
        const email = $('#employee-form-email').val();
        const department = $('#employee-form-department').val();
        const hireDate = $('#employee-form-hire-date').val();
        const terminationDate = $('#employee-form-termination-date').val();
        const newEmployee = new Employee(id, firstname, lastname, email, department, hireDate, terminationDate);

        defaultEmployees.push(newEmployee);

        sessionStorage.setItem('employeesData', JSON.stringify(defaultEmployees));

        this.reset();
        console.log(newEmployee);
    })
    $('#add-supplier-form').on('submit', function (e) {
        e.preventDefault();
        const id = $('#supplier-form-ID').val();
        const companyname = $('#supplier-form-company-name').val();
        const zipcode = $('#supplier-form-zipcode').val();
        const contactfirstname = $('#supplier-form-contact-firstname').val();
        const contactlastname = $('#supplier-form-contact-lastname').val();
        const contactemail = $('#supplier-form-contact-email').val();
        const lastdeliverydate = $('#supplier-form-last-delivery-date').val();
        const isactive = $('#supplier-form-is-active').val();
        const newSupplier = new Supplier(id, companyname, zipcode, contactfirstname, contactlastname, contactemail, lastdeliverydate, isactive)

        defaultSuppliers.push(newSupplier);

        sessionStorage.setItem('suppliersData', JSON.stringify(defaultSuppliers));

        this.reset();
        console.log(newSupplier);
    })
    $('#add-customer-form').on('submit', function (e) {
        e.preventDefault();
        const id = $('#customer-form-ID').val();
        const firstname = $('#customer-form-firstname').val();
        const lastname = $('#customer-form-lastname').val();
        const email = $('#customer-form-email').val();
        const phone = $('#customer-form-phone').val();
        const notonmailinglist = $('#customer-form-notonmailinglist').val();
        const lastpurchasedate = $('#customer-form-lastpurchasedate').val();
        const newCustomer = new Customer(id, firstname, lastname, email, phone, notonmailinglist, lastpurchasedate);

        defaultCustomers.push(newCustomer);

        sessionStorage.setItem('customersData', JSON.stringify(defaultCustomers));

        this.reset();
        console.log(newCustomer);

    })

});