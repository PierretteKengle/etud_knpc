let customerArray = new Array();
let form = document.querySelector('#soumission_customer');
let CtBody = document.createElement("tbody");
document.querySelector('#tableau').appendChild(CtBody);


/**
 * enregistrement des clients
 */

function nouveauGetionClient(c) {

    emptyTable();


    /**
     * window.localStorage.setItem('user', JSON.stringify(person));
     * stockage des informations du client
     */
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage

        let localcustomerArray = new Array();
        let customerControl = window.localStorage.getItem('customerList');
        //verification: console.log(control);
        if (customerControl == null) {
            localcustomerArray.push(c);
            window.localStorage.setItem('customerList', JSON.stringify(localcustomerArray));

        }
        else {


            localcustomerArray = JSON.parse(customerControl);
            localcustomerArray.push(c);


            window.localStorage.setItem('customerList', JSON.stringify(localcustomerArray));
        }

        localcustomerArray.forEach(function (customer) {


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

            CtBody.appendChild(tR);
        })

    }
}


/**
 * l'evenement sur l'enregistrement d'un client
 */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let customer = new Customer()
    customer.firstName = form.elements["name"].value;
    customer.lastName = form.elements["surname"].value;
    customer.email = form.elements["mail"].value;
    customer.telephoneNumber = form.elements["phone"].value;
    customerArray.push(customer);
    //console.log(customerArray);

    // mise a j
    //gestionTableauClient(tab);
    nouveauGetionClient(customer);
    form.elements["name"].value = '';
    form.elements["surname"].value = '';
    form.elements["mail"].value = '';
    form.elements["phone"].value = '';
})
