let customerArray = new Array();
let form = document.querySelector('#soumission_customer');
document.querySelector('#tableau').appendChild(tBody) ;


/**
 * enregistrement des clients
 */

 function nouveauGetionClient(){
    emptyTable();
    customerArray.forEach(function(customer){

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


/**
 * l'evenement sur l'enregistrement d'un client
 */
form.addEventListener('submit',function(e){
    e.preventDefault();
    e.stopPropagation();
    let customer = new Customer()
    customer.firstName = form.elements["name"].value;
    customer.lastName = form.elements["surname"].value;
    customer.email = form.elements["mail"].value;
    customer.telephoneNumber =  form.elements["phone"].value;
    customerArray.push(customer);
    console.log(customerArray);

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



