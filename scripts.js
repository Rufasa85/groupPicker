let groupsDiv = document.querySelector("#groupsFlex");
let randomBtn = document.querySelector("#randomGroups");

const spicyStudents = [
  "Alex Thiel",
  "Andrew Massey",
  "Artem Khomenko",
  "Bryan Gholipour",
  "Devon Durst",
  "Felisha Yu-macias",
  "Jaeger Snyder",
  "James Pace",
  "Joe Dixon",
  "Jonathan Cornet",
  "Jonathan Vu",
  "Jordan Johnson",
  "Kristen Killingsworth",
  "Machiko Carroll",
  "Michelle Beaudoin",
  "Nathan Alexander",
  "Phillip Anthony",
  "Phillip Schreiber",
  "Sharrod Willanova",
  "Shreya Mishra",
];
const mediumStudents = [
  "Bryce Mckenzie",
  "David Kovalchuk",
  "Daniel Nguyen",
  "Dian Gigrich",
  "Eileen Lu",
  "Erik Buss",
  "Esther Franco",  
  "Kevin Cain",
  "Liyuan Zhao",
  "Matthew Dacanay",
  "Mo Risk",
  "Noah Schwartz",
  "Pooja Agarwal",
  "Rachel Lally",
  "Ryan Graham",
  "Sangmi Yun",
  "Tiarnan Marsten",
  "Tiffany Marko",
  "Victor Korn",
];

const mildStudents = [
  "Darryl Tillman",
];

// console.log("students", students.length);
console.log(
  "grouped",
  spicyStudents.length + mediumStudents.length + mildStudents.length
);
//function that takes a randomized array and returns it shuffled
function shuffleArray(arr) {
  let arrCopy = arr.slice();
  let shuffled = [];
  while (arrCopy.length > 0) {
    let randomStudent = arrCopy.splice(
      Math.floor(Math.random() * arrCopy.length),
      1
    )[0];
    // console.log(randomStudent);
    shuffled.push(randomStudent);
  }
  // console.log(shuffled)
  return shuffled;
}

//function that takes in array of names and group size, returns groups maxed at that size.
//TODO: rewrite groupMaker to append to one array at a time, ensure more even size dist for uneven numbers
function groupMaker(arr, size) {
  console.log(arr);
  if (arr.length === size + 1) {
    return [arr];
  }
  let groups = [];
  // // set up group buckets based on number of students
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    groups.push([]);
  }
  // console.log("groups")
  // console.log(groups);
  // let currentGroup = [];
  // let numGroups = Math.ceil(arr.length/size);
  // console.log('total groups:', numGroups)
  arr.forEach((student, idx) => {
    console.log((idx + 1) % groups.length);
    groups[(idx + 1) % groups.length].push(student);
    // currentGroup.push(student);
    // console.log(student)
    // if(currentGroup.length===size){
    //     groups.push(currentGroup);
    //     currentGroup = [];
    // }
  });
  // //hack for uneven final group
  // if(currentGroup.length > 0) {
  //     groups.push(currentGroup);
  // }
  return groups;
}

//function to update view with groups
function updateView(twoDimensionalArray, level) {
  let groupCount = 1;
  twoDimensionalArray.forEach((array) => {
    let thisGroup = document.createElement("div");
    thisGroup.classList.add("groupDiv");
    thisGroup.classList.add(level);
    groupsDiv.appendChild(thisGroup);
    thisGroup.innerHTML = `<h2>${level} group ${groupCount}</h2><ol></ol>`;
    groupCount++;
    array.forEach((student) => {
      thisGroup.querySelector("ol").innerHTML += `<li>${student}</li>`;
    });
  });
}

//handle random button click
randomBtn.addEventListener("click", (e) => {
  let randomSpicyGroups = groupMaker(shuffleArray(spicyStudents), 4);
  let randomMedGroups = groupMaker(shuffleArray(mediumStudents), 4);
  let randomMildGroups = groupMaker(shuffleArray(mildStudents), 4);
  e.target.classList.add("hidden");
  updateView(randomSpicyGroups, "spicy");
  updateView(randomMedGroups, "medium");
  updateView(randomMildGroups, "mild");
  // mildStudents.length ? updateView([mildStudents], "mild") : null;
});

//TODO: float list of students, allow selectable absentees

//TODO: ask user for group size, adujust accordingly

// document.addEventListener("click", ({ target }) => {
//   console.log(target);
// });
