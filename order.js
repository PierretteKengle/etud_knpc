let orderArray = new Array();
let oform = document.querySelector('#soumission_order');
let OtBody = document.createElement("tbody");
document.querySelector('#order_table').appendChild(OtBody);


/**
 * enregistrement des commandes
 */

function getOrder() {
    emptyTable();

       /**
     * stockage des informations des commmandes
     */
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage
            window.localStorage.setItem('orderList', JSON.stringify(orderArray));
    
        }
        
    orderArray.forEach(function (order) {
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

        OtBody.appendChild(tR);
    })

};

/**
 * gere l'evenement sur les commandes
 */

oform.addEventListener('submit', function (a) {
    a.preventDefault();
    a.stopPropagation();
    let order = new Order()
    order.productName = oform.elements["product"].value;
    order.price = oform.elements["price"].value;
    order.paymentDate = oform.elements["date"].value;
    orderArray.push(order);
    console.log(orderArray);
    getOrder();
})

