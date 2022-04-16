let teachers=[];
let firstNameTeacher = document.getElementById("firstNameTeacher");
let lastNameTeacher = document.getElementById("lastNameTeacher");
let subject = document.getElementById("subject");

let buttonSubmitteachers=document.getElementById("teacherSubmit");
buttonSubmitteachers.addEventListener("click",submit);

let buttonResetteachers=document.getElementById("teacherReset");
buttonResetteachers.addEventListener("click",reset);

let buttonUpdateteachers=document.getElementById("teacherUpdate");
buttonUpdateteachers.addEventListener("click", update);


function teacherToString(teacher){
    return(`${teacher.firstNameTeacher}, ${teacher.lastNameTeacher}, ${teacher.subject}`);
}

function Teacher(firstNameTeacher, lastNameTeacher, subject){
    this.firstNameTeacher = firstNameTeacher;
    this.lastNameTeacher =lastNameTeacher;
    this.subject = subject;
}

function submit(event){
    event.preventDefault();
    let teacher = new Teacher(firstNameTeacher.value, lastNameTeacher.value, subject.value);
    teachers.push(teacher);
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.teacherIndex = teachers.length - 1;
    editButton.addEventListener("click", edit);
    let deleteButton =document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.teacherIndex = teachers.length - 1;
    deleteButton.addEventListener('click', deleteteacher);
    createListElement(teacher, editButton, deleteButton);
    buttonResetteachers.click();
}


function deleteteacher(event){
    event.preventDefault();
    teachers[this.teacherIndex] = new Teacher(firstNameTeacher.value, lastNameTeacher.value, subject.value);
    results.innerHTML = '';
    for(let i = 0; i < teachers.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.teacherIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.teacherIndex = i;
        deleteButton.addEventListener("click",deleteteacher);
        console.log(teachers[i]);
        createListElement(teachers[i], editButton, deleteButton);
    }
     buttonResetteachers.click();

}

function edit(){
    firstNameTeacher.value = teachers[this.teacherIndex].firstNameTeacher;
    lastNameTeacher.value = teachers[this.teacherIndex].lastNameTeacher;
    subject.value = teachers[this.teacherIndex].subject;
    buttonUpdateteachers.hidden = false;
    buttonSubmitteachers.hidden = true;
    buttonUpdateteachers.teacherIndex =this.teacherIndex;
}

function update(event){
    event.preventDefault();
    teachers[this.teacherIndex] = new Teacher(firstNameTeacher.value, lastNameTeacher.value, subject.value);
    results.innerHTML = '';
    for(let i = 0; i < teachers.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.teacherIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.teacherIndex = i;
        deleteButton.addEventListener("click", deleteteacher);
        createListElement(teachers[i], editButton, deleteButton);
    }
    buttonUpdateteachers.hidden = true;
    buttonSubmitteachers.hidden = false;
    buttonResetteachers.click();

}

function createListElement(teacher, editButton, deleteButton){
    let teacherLi = document.createElement("li");
    teacherLi.innerHTML = teacherToString(teacher);
    // let spanSpace =document.createElement('span');
    // spanSpace.innerHTML = '&nbsp;';
    teacherLi.append(editButton, deleteButton);
    results.append(teacherLi);
}



function reset(){
}