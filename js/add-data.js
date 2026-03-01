$(function () {
    //todo SIMPLIFY
    $('#add-employee-form').on('submit', function (e) {
        e.preventDefault();
        const id = $('#employee-form-ID').val();
        const firstname = $('#employee-form-firstname').val();
        const lastname = $('#employee-form-lastname').val();
        const email = $('#employee-form-email').val();
        const department = $('#employee-form-department').val();
        const hiredate = $('#employee-form-hiredate').val();
        const terminationdate = $('#employee-form-terminationdate').val();
        const newEmployee = new Employee(id, firstname, lastname, email, department, hiredate, terminationdate);

        defaultEmployees.push(newEmployee);

        sessionStorage.setItem('employeesData', JSON.stringify(defaultEmployees));

        this.reset();
        console.log(newEmployee);
    })
    $('#add-supplier-form').on('submit', function (e) {
        e.preventDefault();
        const id = $('#supplier-form-ID').val();
        const companyname = $('#supplier-form-companyname').val();
        const zipcode = $('#supplier-form-zipcode').val();
        const contactfirstname = $('#supplier-form-contactfirstname').val();
        const contactlastname = $('#supplier-form-contactlastname').val();
        const contactemail = $('#supplier-form-contactemail').val();
        const lastdeliverydate = $('#supplier-form-lastdeliverydate').val();
        const isactive = $('#supplier-form-isactive').val();
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
    $('.form-tabs>.tabs').on('click', function (e) {

        console.log({a: this, b: e.target})

        if (e.target.tagName.toLowerCase() === 'li' && !e.target.classList.contains('active')) {

            $(e.target).siblings('.active').removeClass('active');

            $(e.target).addClass('active');

            let tabSelector = $(e.target).data('tab');

            const $parentTabs = $(e.target).parents('.form-tabs');
            $parentTabs.children('div:not(.hidden)').addClass('hidden');
            $parentTabs.children(tabSelector).removeClass('hidden');
        }
    });
});