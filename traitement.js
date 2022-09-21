let tab = new Array();
let form = document.getElementById('soumission_customer');
let tBody = document.createElement("tbody");
document.getElementById('tableau').appendChild(tBody) ;


/**
 * erase the content of the array
 */
function emptyTable(){
    let trs = document.getElementById('tableau').querySelectorAll('tr:not(.entete)');
    for (var k=0; k<trs.length;k++){
        trs[k].remove();
    }
}


let customerKeys = ["firstName", "lastName", "email", "telephoneNumber"]

/**
 * Display the list of customer
 * @param {Array} tab the list to display
 */
function gestionTableauClient(tab){
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
}

function nouveauGetionClient(){
    emptyTable();
    tab.forEach(function(customer){

        let tR = document.createElement("tr");

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




form.addEventListener('submit', function(e)
{
    e.preventDefault();
    e.stopPropagation();
    let customer = new Customer()
    customer.firstName = form.elements["name"].value;
    customer.lastName = form.elements["surname"].value;
    customer.email = form.elements["mail"].value;
    customer.telephoneNumber =  form.elements["phone"].value;
    tab.push(customer);
    console.log(tab, 'fgg');

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

