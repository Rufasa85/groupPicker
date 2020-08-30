let groupsDiv = document.querySelector('#groupsFlex');
let randomBtn = document.querySelector('#randomGroups');
const students = [
    "Adam Levine",
    "Ahmed Al-karzoun",
    "Alex Milroy",
    "Alexander Sun",
    "Andrew Crow",
    "Ann Guinee",
    "Brandon Phillips",
    "Caitlin Bouroncle",
    "Chris Asmar",
    "Chris Sison",
    "Christopher  MacGeorge",
    "Christopher  Wesonga",
    "Daniel Gentile",
    "Daniel Yoder",
    "Darrian Coleman",
    "David Guthmann",
    "Devin Gillogy",
    "Dexter Sage",
    "Doug Mcntosh",
    "Elijah Blaisdell",
    "Ellie Fu",
    "Emily Goeres",
    "Eric Rosario",
    "Evan Kirkland",
    "Francine Babauta",
    "Gabriel Rodrguez",
    "Gavin Calkins",
    "Hao Guan",
    "Hilary Valencia-Walsh",
    "Issac Walls",
    "Ismahan  Jamea",
    "Jack Solaro",
    "Jacob Cowan",
    "Jae Kim",
    "Jae Mclain",
    "Janelle Dean",
    "Jonathan Kemp",
    "Jose Morales",
    "Joshua Jainga",
    "Katie Dickson",
    "Kayla Newton",
    "Larry Cessna",
    "Louis Longo",
    "Maged Abdelsalam",
    "Magnus Appel",
    "Maria Waslick",
    "Matthew Taylor",
    "Matthew  Weber",
    "Maxwell Hanson",
    "Mercury Springberry",
    "Mikael Fallesen",
    "Nathan Brown",
    "Neil Comisioneru",
    "Nicholas Van Baak",
    "Patrick Ceriale",
    "Petar Zivkovic",
    "Quint Turner",
    "Robert Dalton",
    "Samuel Clitty",
    "Scott Dancer",
    "Sean Morgan",
    "Shunpin Tseng",
    "Sophia Jung",
    "Steven Bong",
    "Thomas An",
    "Timothy Phillips",
    "Wesley Mcmillan",
    "Zhouyi Wang",
]
//function that takes a randomized array and returns it shuffled
function shuffleArray(arr) {
    let arrCopy = arr.slice();
    let shuffled = [];
    while (arrCopy.length > 0) {
        let randomStudent = arrCopy.splice(Math.floor(Math.random() * arrCopy.length), 1)[0];
        // console.log(randomStudent);
        shuffled.push(randomStudent);
    }
    return shuffled;
}

//function that takes in array of names and group size, returns groups maxed at that size.  
//TODO: rewrite groupMaker to append to one array at a time, ensure more even size dist for uneven numbers
function groupMaker(arr, size) {
    let groups = [];
    // set up group buckets based on number of students
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        groups.push([]);
    }
    // console.log(groups);
    // let currentGroup = [];
    // let numGroups = Math.ceil(arr.length/s ize);
    // console.log('total groups:', numGroups)
    arr.forEach((student, idx) => {
        console.log((idx + 1) % groups.length);
        groups[(idx + 1) % groups.length].push(student)
        // currentGroup.push(student);
        // console.log(student)
        // if(currentGroup.length===size){
        //     groups.push(currentGroup);
        //     currentGroup = [];
        // }
    })
    //hack for uneven final group
    // if(currentGroup.length > 0) {
    //     groups.push(currentGroup);
    // }
    return groups;
}

//function to update view with groups
function updateView(twoDimensionalArray) {
    let groupCount = 1;
    twoDimensionalArray.forEach(array => {
        let thisGroup = document.createElement('div');
        thisGroup.classList.add('groupDiv')
        groupsDiv.appendChild(thisGroup);
        thisGroup.innerHTML = `<ol></ol>`
        groupCount++;
        array.forEach(student => {
            thisGroup.querySelector('ol').innerHTML += `<li>${student}</li>`
        })
    })
}

//handle random button click
randomBtn.addEventListener('click', e => {
    let randomGroups = groupMaker(shuffleArray(students), 5);
    e.target.classList.add('hidden');
    updateView(randomGroups);
})



//TODO: float list of students, allow selectable absentees

//TODO: ask user for group size, adujust accordingly