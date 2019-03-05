let groupsDiv = document.querySelector('#groupsFlex');
let students = ["Abram Thau", "Anthony Erickson","Anthony Winters","Aprille Perez", "Arpana George", "Bret Allan", "Bronson Turnquist","Carl Janz", "Carrie Plank", "Claire Gibeau", "Dennis Sarmiento", "Elliott Ricklefs", "Emile Blouin", "Hunter Wiegand", "Ivan Rouskov", "James Dizon", "Jean Nielson", "Jordan Babbitt", "Katherine Haster", "Kenus Vinberg", "Leif Aesoph", "Matthew Zemek", "Micah Rabinowitz", "Michael Albaneze", "Ming Lee", "Nicholas Anderson", "Nicklas Aaland", "Percival Mariano", "Phi Hai Nguyen", "Robert Fanfant", "Ruili Gao", "Sammy Tang", "Stacy Nowak", "Vera Weikel", "William Wilkens"]

//function that takes a randomized array and returns it shuffled
function shuffleArray(arr) {
    let shuffled = [];
    while(arr.length>0) {
        let randomStudent = arr.splice(Math.floor(Math.random() * arr.length),1)[0];
        console.log(randomStudent);
        shuffled.push(randomStudent);
    }
    return shuffled;
}

//function that takes in array of names and group size, returns groups maxed at that size.  

function groupMaker(arr, size) {
    let groups = [];
    let currentGroup = [];
    arr.forEach(student=>{
        currentGroup.push(student);
        console.log(student)
        if(currentGroup.length===size){
            groups.push(currentGroup);
            currentGroup = [];
        }
    })
    //hack for uneven final group
    if(currentGroup.length > 0) {
        groups.push(currentGroup);
    }
    return groups;
}