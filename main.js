class Customer {
        constructor(firstName, lastName, email, telephoneNumber) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.telephoneNumber = telephoneNumber;
        }

};
class Order {
        constructor(productName, price, paymentDate, validation) {
                this.productName = productName;
                this.price = price;
                this.paymentDate = paymentDate;
                this.validation = validation;
        }

};

/**
 * erase the content of the array
 */
function emptyTable() {
        let exception = document.querySelectorAll('tr:not(.entete)');
        // console.log(exception);verification du contenu de esception


        let trs = document.getElementsByClassName('monTableau');//recuperation des deux tableaux
        //     console.log(trs);


        for (var k = 0; k < trs.length; k++) {
                /**
                 * pour ces tableaux, on recupère tout les tr en dehors de ceux qui ont 'entete' comme class
                 */
                let trNotEntete = trs[k].querySelectorAll('tr:not(.entete)');

                /**
                 * suppression des elements pour le tableau en question
                 */
                trNotEntete.forEach((el) => {
                        el.remove();
                });
                //az.remove();
        }
}


//let customerKeys = ["firstName", "lastName", "email", "telephoneNumber"]

/**
 * Display the list of customer
 * @param {Array} customerArray the list to display
 */
/***function gestionTableauClient(customerArray){
    emptyTable();
    for (var i=0; i<customerArray.length;i++){

        let tR = document.createElement("tr");

        for (var j= 0; j< 4;j++){
            let tD = document.createElement("td");
            tD.innerHTML = customerArray[i][customerKeys[j]];
            tR.appendChild(tD);
        }
        tBody.appendChild(tR);
    }
}*/





