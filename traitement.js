let tBody = document.createElement("tbody");


//document.querySelector('')


/**
 * erase the content of the array
 */
function emptyTable(){
    let trs = document.getElementsByClassName('monTableau').querySelectorAll('tr:not(.entete)')
    for (var k=0; k<trs.length;k++){
        trs[k].remove();
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




