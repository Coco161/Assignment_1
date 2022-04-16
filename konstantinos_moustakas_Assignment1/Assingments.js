let assignments =[];
let assignmentTitle = document.getElementById("assignmentTitle");
let description = document.getElementById("description");
let submissionDate = document.getElementById("submissionDate");
let oralMark = document.getElementById("oralMark");
let totalMark = document.getElementById("totalMark");
let results = document.getElementById("results");

let buttonSubmitassignments =document.getElementById("assignmentSubmit");
buttonSubmitassignments .addEventListener("click",submit);

let buttonResetassignments =document.getElementById("assignmentReset");
buttonResetassignments .addEventListener("click",reset);

let buttonUpdateassignments =document.getElementById("assignmentUpdate");
buttonUpdateassignments .addEventListener("click", update);


function assignmentToString(assignment){
    return(`${assignment.assignmentTitle}, ${assignment.description}, ${assignment.submissionDate}, ${assignment.oralMark}, ${assignment.totalMark}`);
}

function Assignment(assignmentTitle, description, submissionDate, oralMark, totalMark){
    this.assignmentTitle = assignmentTitle;
    this.description =description;
    this.submissionDate = submissionDate;
    this.oralMark = oralMark;
    this.totalMark = totalMark;
}

function submit(event){
    event.preventDefault();
    let assignment = new Assignment(assignmentTitle.value, description.value, submissionDate.value, oralMark.value, totalMark.value);
    assignments.push(assignment);
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.assignmentIndex = assignments.length - 1;
    editButton.addEventListener("click", edit);
    let deleteButton =document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.assignmentIndex = assignments.length - 1;
    deleteButton.addEventListener('click', deleteassignment);
    createListElement(assignment, editButton, deleteButton);
    buttonResetassignments.click();


    console.log(assignments
     );
}


function deleteassignment(event){
    event.preventDefault();
    assignments[this.assignmentIndex] = new Assignment(assignmentTitle.value, description.value, submissionDate.value, oralMark.value, totalMark.value);
    results.innerHTML = '';
    for(let i = 0; i < assignments.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.assignmentIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.assignmentIndex = i;
        deleteButton.addEventListener('click', deleteassignment);
        console.log(assignments[i]);
        createListElement(assignments[i], editButton, deleteButton);
    }
     buttonResetassignments
     .click();

}

function edit(){
    assignmentTitle.value = assignments[this.assignmentIndex].assignmentTitle;
    description.value = assignments[this.assignmentIndex].description;
    submissionDate.value = assignments[this.assignmentIndex].submissionDate;
    oralMark.value = assignments[this.assignmentIndex].oralMark;
    totalMark.value = assignments[this.assignmentIndex].totalMark;
    buttonUpdateassignments.hidden = false;
    buttonSubmitassignments.hidden = true;
    buttonUpdateassignments.assignmentIndex =this.assignmentIndex;
}

function update(event){
    event.preventDefault();
    assignments[this.assignmentIndex] = new Assignment(assignmentTitle.value, description.value, submissionDate.value, oralMark.value, totalMark.value);
    results.innerHTML = '';
    for(let i = 0; i < assignments.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.assignmentIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.assignmentIndex = i;
        deleteButton.addEventListener("click", deleteassignment);
        createListElement(assignments[i], editButton, deleteButton);
    }
    buttonUpdateassignments.hidden = true;
    buttonSubmitassignments.hidden = false;
    buttonResetassignments.click();

}

function createListElement(assignment, editButton, deleteButton){
    let assignmentLi = document.createElement("li");
    assignmentLi.innerHTML = assignmentToString(assignment);
    // let spanSpace =document.createElement('span');
    // spanSpace.innerHTML = '&nbsp;';
    assignmentLi.append(editButton, deleteButton);
    results.append(assignmentLi);
}



function reset(){
}