let groupsDiv = document.querySelector('#groupsFlex');
let randomBtn = document.querySelector('#randomGroups');
let students = ["Aaron Miller", "Adam Minkus", "Andrew Joung", "Aoki Cullan","Cameron Ousbey", "Christian O'keefe", "Christina Dias", "Daniel Rogalsky", "Devin Poore", "Edward Mara", "Everett Smith", "Georgia Chrisinger", "Helan Jose", "Heon Lee", "Iman Gure", "Jacob Zamano", "Jessica Huynh", "Joe Hutchinson", "Felix Zhang","Keil Aloia", "Kim Chau","Lawrence Fiesta", "Maryanne Heinbaugh", "Meghan Mullally", "Monali Chandurkar", "Monica Sochenda", "Nina Teng", "Scott Willis", "Shawn Liu", "Sofia Spagnoletti", "Svitlana Yanina", "David Li", "Weimin Yang"]
let presentStudents = ["Aaron Miller", "Adam Minkus", "Andrew Joung", "Aoki Cullan","Cameron Ousbey", "Christian O'keefe", "Christina Dias", "Daniel Rogalsky", "Devin Poore", "Edward Mara", "Everett Smith", "Georgia Chrisinger", "Helan Jose", "Heon Lee", "Iman Gure", "Jacob Zamano", "Jessica Huynh", "Joe Hutchinson", "Felix Zhang","Keil Aloia", "Kim Chau","Lawrence Fiesta", "Maryanne Heinbaugh", "Meghan Mullally", "Monali Chandurkar", "Monica Sochenda", "Scott Willis", "Shawn Liu", "Sofia Spagnoletti", "Svitlana Yanina", "David Li", "Weimin Yang"]

//function that takes a randomized array and returns it shuffled
function shuffleArray(arr) {
    let arrCopy = arr.slice();
    let shuffled = [];
    while(arrCopy.length>0) {
        let randomStudent = arrCopy.splice(Math.floor(Math.random() * arrCopy.length),1)[0];
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
    for(let i =0; i<Math.ceil(arr.length/size);i++){
        groups.push([]);
    }
    // console.log(groups);
    // let currentGroup = [];
    // let numGroups = Math.ceil(arr.length/s ize);
    // console.log('total groups:', numGroups)
    arr.forEach((student,idx)=>{
        console.log((idx+1)%groups.length);
        groups[(idx+1)%groups.length].push(student)
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
function updateView (twoDimensionalArray) {
    let groupCount = 1;
    twoDimensionalArray.forEach(array=>{
        let thisGroup = document.createElement('div');
        thisGroup.classList.add('groupDiv')
        groupsDiv.appendChild(thisGroup);
        thisGroup.innerHTML = `<ul></ul>`
        groupCount++;
        array.forEach(student=>{
            thisGroup.querySelector('ul').innerHTML += `<li>${student}</li>`
        })
    })
}

//handle random button click
randomBtn.addEventListener('click',e=>{
    let randomGroups = groupMaker(shuffleArray(presentStudents),4);
    e.target.classList.add('hidden');
    updateView(randomGroups);
})

//TODO: float list of students, allow selectable absentees

//TODO: ask user for group size, adujust accordingly