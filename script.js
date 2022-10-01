let customerTBody = document.createElement("tbody");
let customerDashboard = document.querySelector('#customerDashboard')
customerDashboard.appendChild(customerTBody);

/**
 * affichage des clients dans le dashboard
 */
function dasboardCustomer() {
    
    //recuperation des informations du clients dans le localstorage
    let customerLocal = JSON.parse(window.localStorage.getItem('customerList'));
   //petite verification: console.log(customerLocal);
    if (customerLocal != null) {

        customerLocal.forEach(function (customer) {
            console.log(customer);

            let tR = document.createElement("tr");
            /**
             * creation de l'objet 'td' 
             * et remplissage du tableau par les clients
             */
            let tdFirstName = document.createElement("td");
            tdFirstName.innerHTML = customer.firstName;
            tR.appendChild(tdFirstName);

            let tdlastName = document.createElement("td");
            tdlastName.innerHTML = customer.lastName;
            tR.appendChild(tdlastName);

            let tdmailName = document.createElement("td");
            tdmailName.innerHTML = customer.email;
            tR.appendChild(tdmailName);

            let tdphone = document.createElement("td");
            tdphone.innerHTML = customer.telephoneNumber;
            tR.appendChild(tdphone);

            customerTBody.appendChild(tR);
        })
    }
    document.querySelector('.client').innerHTML = customerLocal.length + ' ' + 'customer';

};




let orderTBody = document.createElement("tbody");
let orderDashboard = document.querySelector('#orderDashboard');
orderDashboard.appendChild(orderTBody);

/**
 * affichage des commandes dans le dashboard
 */
function dasboardOrder() {
    //emptyTable();
    //recuperation des informations des commandes dans le localstorage
    let orderLocal = JSON.parse(window.localStorage.getItem('orderList'));
    if (orderLocal != null) {

        orderLocal.forEach(function (order) {

            let tR = document.createElement("tr");
            /**
             * creation de l'objet 'td' 
             * et remplissage du tableau par les commandes 
             */
            let tdProductName = document.createElement("td");
            tdProductName.innerHTML = order.productName;
            tR.appendChild(tdProductName);

            let tdPrice = document.createElement("td");
            tdPrice.innerHTML = order.price;
            tR.appendChild(tdPrice);

            let tdPaymentDate = document.createElement("td");
            tdPaymentDate.innerHTML = order.paymentDate;
            tR.appendChild(tdPaymentDate);

            orderTBody.appendChild(tR);
        })
    }
    document.querySelector('.order').innerHTML = orderLocal.length + ' ' + 'Order';


}

emptyTable();
dasboardCustomer();
dasboardOrder();



