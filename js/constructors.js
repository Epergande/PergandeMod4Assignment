//this formates the date toLocalDateString or applies N/A to null ones
function formatDate(d) {
    if (!d) return 'N/A';
    if (d instanceof Date) return d.toLocaleDateString();
    try {
        return new Date(d).toLocaleDateString();
    } catch {
        return String(d);
    }
}

// --- Employee Object ---
function Employee(id, firstname, lastname, email, department, hiredate, terminationdate) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.department = department;
    this.hiredate = hiredate;
    this.terminationdate = terminationdate;
    this.createEmployeeElement = function () {
        return employeeHTML.call(this);
    }
}

function employeeHTML() {
    const card = document.createElement('div');
    card.classList.add('card', 'employee-card');
    card.innerHTML = `
            <header class="card-header">
                <h3 class="name">${this.lastname}, ${this.firstname}</h3>
                <span class="badge">ID ${this.id}</span>
            </header>
            <div class="card-body">
                <ul class="meta">
                    <li class="email">${this.email}</li>
                    <li class="department">${this.department}</li>
                    <li class="hiredate">Hired: <strong>${formatDate(this.hiredate)}</strong></li>
                    <li class="terminationdate">Termination: <strong>${this.terminationdate ? formatDate(this.terminationdate) : 'N/A'}</strong></li>
                </ul>
            </div>
        `;
    return card
}
// --- Supplier Object ---
function Supplier(id, companyname, zipcode, contactfirstname, contactlastname, contactemail, lastdeliverydate, isactive) {
    this.id = id;
    this.zipcode = zipcode;
    this.contactfirstname = contactfirstname;
    this.contactlastname = contactlastname;
    this.contactemail = contactemail;
    this.isactive = isactive;
    this.companyname = companyname;
    this.lastdeliverydate = lastdeliverydate;
    this.createSupplierElement = function () {
        return supplierHTML.call(this);
    }
}

function supplierHTML() {
    const card = document.createElement('div');
    card.classList.add('card', 'supplier-card');
    card.innerHTML = `
            <header class="card-header">
                <h3 class="name">${this.companyname}</h3>
                <span class="badge">ID ${this.id}</span>
            </header>
            <div class="card-body">
                <ul class="meta">
                    <li class="id">Zipcode ${this.zipcode}</li>
                    <li class="contact">Contact: ${this.contactfirstname} ${this.contactlastname} - ${this.contactemail}</li>
                    <li class="lastdelivery">Last delivery: <strong>${formatDate(this.lastdeliverydate)}</strong></li>
                    <li class="status">Active: <strong>${this.isactive ? 'Yes' : 'No'}</strong></li>
                </ul>
            </div>
        `;
    return card
}

// --- Customer Object ---
function Customer(id, firstname, lastname, email, phone, notonmailinglist, lastpurchasedate) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.notonmailinglist = notonmailinglist;
    this.lastpurchasedate = lastpurchasedate;
    this.createCustomerElement = function () {
        return customerHTML.call(this)
    }
}

function customerHTML() {
    const card = document.createElement('div');
    card.classList.add('card', 'customer-card');
    card.innerHTML = `
            <header class="card-header">
                <h3 class="name">${this.lastname}, ${this.firstname}</h3>
                <span class="badge">ID ${this.id}</span>
            </header>
            <div class="card-body">
                <ul class="meta">
                    <li class="contact">${this.email} - ${this.phone}</li>
                    <li class="lastpurchase">Last purchase: <strong>${formatDate(this.lastpurchasedate)}</strong></li>
                    <li class="mailing">On mailing list: <strong>${this.notonmailinglist ? 'No' : 'Yes'}</strong></li>
                </ul>
            </div>
        `;
    return card
}