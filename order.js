let orderArray = new Array();
let oform = document.querySelector('#soumission_order');
let OtBody = document.createElement("tbody");
document.querySelector('#order_table').appendChild(OtBody);


/**
 * enregistrement des commandes
 */

function getOrder(o) {
    emptyTable();

    /**
  * stockage des informations des commmandes
  *         let localcustomerArray = new Array();
        let control = window.localStorage.getItem('customerList');
        //verification: console.log(control);
        if (control == null) {
            localcustomerArray.push(c);
            window.localStorage.setItem('customerList', JSON.stringify(localcustomerArray));

        }
        else {


            localcustomerArray = JSON.parse(control);
            localcustomerArray.push(c);


            window.localStorage.setItem('customerList', JSON.stringify(localcustomerArray));
        }

  */
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage
        let localOrderArray = new Array();
        let orderControl = window.localStorage.getItem('orderList');
        if (orderControl == null) {
            localOrderArray.push(o);
            window.localStorage.setItem('orderList', JSON.stringify(localOrderArray));

        }
        else {

            localOrderArray = JSON.parse(orderControl);
            localOrderArray.push(o);

            window.localStorage.setItem('orderList', JSON.stringify(localOrderArray));
        }




        localOrderArray.forEach(function (order) {
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
    }

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
    //orderArray.push(order);
    console.log(orderArray);
    getOrder(order);
    oform.elements["product"].value = '';
    oform.elements["price"].value = '';
    oform.elements["date"].value = '';

})


