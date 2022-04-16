let students=[];
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let dateOfBirth = document.getElementById("dateOfBirth");
let tuitionFees = document.getElementById("tuitionFees");

let buttonSubmitstudents=document.getElementById("studentSubmit");
buttonSubmitstudents.addEventListener("click",submit);

let buttonResetstudents=document.getElementById("studentReset");
buttonResetstudents.addEventListener("click",reset);

let buttonUpdatestudents=document.getElementById("studentUpdate");
buttonUpdatestudents.addEventListener("click", update);


function studentToString(student){
    return(`${student.firstName}, ${student.lastName}, ${student.dateOfBirth}, ${student.tuitionFees}`);
}

function Student(firstName, lastName, dateOfBirth, tuitionFees){
    this.firstName = firstName;
    this.lastName =lastName;
    this.dateOfBirth = dateOfBirth;
    this.tuitionFees = tuitionFees;
}

function submit(event){
    event.preventDefault();
    let student = new Student(firstName.value, lastName.value, dateOfBirth.value, tuitionFees.value);
    students.push(student);
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.studentIndex = students.length - 1;
    editButton.addEventListener("click", edit);
    let deleteButton =document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.studentIndex = students.length - 1;
    deleteButton.addEventListener('click', deletestudent);
    createListElement(student, editButton, deleteButton);
    buttonResetstudents.click();
}


function deletestudent(event){
    event.preventDefault();
    students[this.studentIndex] = new Student(firstName.value, lastName.value, dateOfBirth.value, tuitionFees.value);
    results.innerHTML = '';
    for(let i = 0; i < students.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.studentIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.studentIndex = i;
        deleteButton.addEventListener("click", deletestudent);
        createListElement(students[i], editButton, deleteButton);
    }
     buttonResetstudents.click();

}

function edit(){
    firstName.value = students[this.studentIndex].firstName;
    lastName.value = students[this.studentIndex].lastName;
    dateOfBirth.value = students[this.studentIndex].dateOfBirth;
    tuitionFees.value = students[this.studentIndex].tuitionFees;
    buttonUpdatestudents.hidden = false;
    buttonSubmitstudents.hidden = true;
    buttonUpdatestudents.studentIndex =this.studentIndex;
}

function update(event){
    event.preventDefault();
    students[this.studentIndex] = new Student(firstName.value, lastName.value, dateOfBirth.value, tuitionFees.value);
    results.innerHTML = '';
    for(let i = 0; i < students.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.studentIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.studentIndex = i;
        deleteButton.addEventListener("click", deletestudent)
        createListElement(students[i], editButton, deleteButton);
    }
    buttonUpdatestudents.hidden = true;
    buttonSubmitstudents.hidden = false;
    buttonResetstudents.click();

}

function createListElement(student, editButton, deleteButton){
    let studentLi = document.createElement("li");
    studentLi.innerHTML = studentToString(student);
    // let spanSpace =document.createElement('span');
    // spanSpace.innerHTML = '&nbsp;';
    studentLi.append(editButton, deleteButton);
    results.append(studentLi);
}



function reset(){
}