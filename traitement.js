let tab = new Array();
let form = document.getElementById('soumission_customer');
let tBody = document.createElement("tbody");
document.getElementById('tableau').appendChild(tBody) ;

let customerKeys = ["firstName", "lastName", "email", "telephoneNumber"]
function gestionTableauClient(tab){
    let trs = document.getElementById('tableau').querySelectorAll('tr:not(.entete)');
    for (var k=0; k<trs.length;k++){
        trs[k].remove();
    }
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
    gestionTableauClient(tab);

   // console.log(gestionTableauClient);
    //console.log(customer);
   /* document.getElementsByClassName('firstname1').innerHtml = +customer.firstName;
    document.getElementsByClassName('lastname1').innerHtml = +customer.lastName;
    document.getElementsByClassName('mail1').innerHtml = +customer.email;
    document.getElementsByClassName('telephone1').innerHtml = +customer.telephoneNumber;*/

})

