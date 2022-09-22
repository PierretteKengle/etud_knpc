let tab = new Array();
let cForm = document.getElementById('soumission_customer')
let oForm = document.getElementById('soumission_order')
let tBody = document.createElement("tbody");
document.getElementById('tableau').appendChild(tBody) ;
document.getElementById('order_table').appendChild(tBody);

/**
 * erase the content of the array
 */
function emptyTable(){
    let trs = document.getElementsByClassName('monTableau').querySelectorAll('tr:not(.entete)');
    for (var k=0; k<trs.length;k++){
        trs[k].remove();
    }
}


let customerKeys = ["firstName", "lastName", "email", "telephoneNumber"]

/**
 * Display the list of customer
 * @param {Array} tab the list to display
 */
/***function gestionTableauClient(tab){
    emptyTable();
    for (var i=0; i<tab.length;i++){

        let tR = document.createElement("tr");

        for (var j= 0; j< 4;j++){
            let tD = document.createElement("td");
            tD.innerHTML = tab[i][customerKeys[j]];
            tR.appendChild(tD);
        }
        tBody.appendChild(tR);
    }
}*/

function nouveauGetionClient(){
    emptyTable();
    tab.forEach(function(customer){

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

        tBody.appendChild(tR);
    })

}



cForm.addEventListener("submit", function(e)
{
    e.preventDefault();
    e.stopPropagation();
    let customer = new Customer()
    customer.firstName = cForm.elements["name"].value;
    customer.lastName = cForm.elements["surname"].value;
    customer.email = cForm.elements["mail"].value;
    customer.telephoneNumber =  cForm.elements["phone"].value;
    tab.push(customer);
    console.log(tab);

    // mise a j
    //gestionTableauClient(tab);
    nouveauGetionClient();

   // console.log(gestionTableauClient);
    //console.log(customer);
   /* document.getElementsByClassName('firstname1').innerHtml = +customer.firstName;
    document.getElementsByClassName('lastname1').innerHtml = +customer.lastName;
    document.getElementsByClassName('mail1').innerHtml = +customer.email;
    document.getElementsByClassName('telephone1').innerHtml = +customer.telephoneNumber;*/

})

function getOrder(){
    emptyTable();
    tab.forEach(function(order){
        let tR = document.createElement("tr");
        /**
         * creation de l'objet 'td' 
         * et remplissage du tableau par les commandes productName, price, paymentDate
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
                
                      
                tBody.appendChild(tR);
    })

};



oForm.addEventListener('submit', function(a){
    a.preventDefault();
    a.stopPropagation();
    let order = new Order()
    order.productName = oForm.elements["product"].value;
    order.price = oForm.elements["price"].value;
    order.paymentDate = oForm.elements["date"].value;
    tab.push(order);
    console.log(tab);
})

