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

function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;
}

//create a new pet
let scooby = new Pet("Scooby",1,"Male","Dane","Bath","Tom","619-123-4567");
let bella = new Pet("Bella",2,"Female","Poodle","Bath","Grooming","619-888-1011");


//push the pet into the array
petSalon.pets.push(scooby,bella);

console.log(scooby,bella);

let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");

//register function
//getting the values from the inputs
function register(){
    console.log(inputName.value,inputAge.value,inputGender.value)
    //create obj
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value)
    //display the obj in the console
    console.log(thePet);
    //push the pet into the array
    petSalon.pets.push(thePet);
}

function displayPetNames(){
for(i=0; i<petSalon.pets.length; i++){
    console.log(petSalon.pets[i]);
}
alert(`We have " ${petSalon.pets.length} " registered pets!`);
}


