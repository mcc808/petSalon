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
    }
}

let pets = [
    {
        Name:"Star",
        Age: 1,
        Gender: "Female",  
        Service: "Grooming"  
    },
    {
        Name:"Biscuit",
        Age: 2,
        Gender: "Male",   
        Servce: "Bath" 
    },
    {
        Name:"Rocky",
        Age: 3,
        Gender: "Male",
        Service: "Haircut"    
    }
] 

alert("We have " + pets.length + " registered pets!");

//console.log("We have " + pets.length + " registered pets");

for(let i=0; i<pets.length; i++){
    console.log(pets[i].Name);
}



