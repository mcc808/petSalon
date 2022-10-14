/*function displayPetCards(){
    //get HTML element where we display the pets
    let petsDiv = document.getElementById("pets");
    let tmp="";
    //travel the pets array
    for(let i=0;i<petSalon.pets.length;i++){
        //getting the pet
        let aPet = petSalon.pets[i];
        //create the template (card)
        tmp+=`
            <div id="${aPet.id}" class="pet">
                <p>Name: ${aPet.name}</p>
                <p>Age: ${aPet.age}</p>
                <p>Gender: ${aPet.gender}</p>
                <p>Breed: ${aPet.breed}</p>
                <p>Service: ${aPet.service}</p>
                <button class="btn btn-danger" onclick="deletePet(${aPet.id});"</button>
            </div> 
        `;    
    }
    //insert the card into the HTML element   
    petsDiv.innerHTML=tmp; 
    
}*/

function displayPetTable(){
    
    let tmp = "";
    //travel the pets array
    for(let i=0;i<petSalon.pets.length;i++){
        //getting the pet
        let aPet = petSalon.pets[i];
        //console.log(aPet)
        //create the (table)
        tmp+=`
            <tr  id="${aPet.id}">
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.service}</td>
                <button class="btn btn-danger" onclick="deletePet(${aPet.id});"</button>
            </tr>
        `;    
    }
    //insert the input into the HTML element   
    document.getElementById('petsTbl').innerHTML=tmp; 

}


