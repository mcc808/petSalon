//object liretal
let petSalon = {
    name:"The Fashion Pet",
    phone: "123-123-123",
    address:{
        country:"USA",
        city:"San Diego",
        street:"263-k",
        number: "1327",
        zip:"22141"
    },
    pets:[]
}

let count=0;

//constructor 
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;
    this.id=count++;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let selectService = document.getElementById("selService");

function isValid(newPet){
    let valid=true;
    if(newPet.service==""){
        valid=false;
    }
    return valid;
}

//register function and getting the values from the inputs
function register(){
    //create obj
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,selectService.value);
    if(isValid(thePet)==true){
    //push the pet into the array
    petSalon.pets.push(thePet);
    //displayPetCards();
    displayPetTable();
    }else{
        alert("Please enter a service");
    }
    //clear fields
    clearInputs();
    displayNumberOfPets(); 
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    selectService.value="";
}

function displayNumberOfPets(){
    document.getElementById("numberOfPets").innerHTML=`We have ${petSalon.pets.length} pets in the system!`;
}

function deletePet(petID){
    console.log("Deleting a pet... " + petID);
    let deleteIndex;
    for(i=0;i<petSalon.pets.length;i++){
        let aPet = petSalon.pets[i];
        if(aPet.id==petID){
            deleteIndex=i;
            console.log("The deleted pet is in the position" + deleteIndex);
        }
    }
    document.getElementById(petID).remove();
}

function init(){
    //create new pet
    let scooby = new Pet("Scooby",1,"Male","Dane","Bath");
    let bella = new Pet("Bella",2,"Female","Poodle","Bath","Grooming");
    //push the pet into the array
    petSalon.pets.push(scooby,bella);
    displayNumberOfPets();
    //displayPetCards();
    displayPetTable();
}

window.onload = init;





