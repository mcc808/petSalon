function displayPetCards(){
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
    
}

function displayPetTable(){
    //get HTML element where we display the pets
    let petsTbl = document.getElementById("petsTable");
    let tmp1;
    //travel the pets array
    for(let i=0;i<petSalon.pets.length;i++){
        //getting the pet
        let aPet = petsSalon.pets[i];
        //create the template (card)
        tmp1+=`
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
    petsTbl.innerHTML=tmp1; 

}