//object liretal
let petSaloon = {
    //attributes
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

let students = [
    
    {
        Name:"Myles",
        Age: 98,
        Grade: "A"    
    },
    {
        Name:"Toung",
        Age: 99,
        Grade: "A"    
    },
    {
        Name:"Miguel",
        Age: 97,
        Grade: "F"    
    }

]; //this is an array of students

//FOR LOOP: start point; stopping condition; increment
//lenght return the number of elements in the array
for(let i=0; i<students.length; i++){
    console.log(students[i].age);
}
console.log("We have " + students.length + "students");

//brute force
//console.log(students[i]);
//console.log(students[i]);
//console.log(students[i]);
//console.log(students[i]);

