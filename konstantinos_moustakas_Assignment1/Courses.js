let courses=[];
let title = document.getElementById("title");
let stream = document.getElementById("stream");
let type = document.getElementById("type");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let results = document.getElementById("results");

let buttonSubmitCourses=document.getElementById("courseSubmit");
buttonSubmitCourses.addEventListener("click",submit);

let buttonResetCourses=document.getElementById("courseReset");
buttonResetCourses.addEventListener("click",reset);

let buttonUpdateCourses=document.getElementById("courseUpdate");
buttonUpdateCourses.addEventListener("click", update);


function courseToString(course){
    return(`${course.title}, ${course.stream}, ${course.type}, ${course.startDate}, ${course.endDate}`);
}

function Course(title, stream, type, startDate, endDate){
    this.title = title;
    this.stream = stream;
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
}

function submit(event){
    event.preventDefault();
    let course = new Course(title.value, stream.value, type.value, startDate.value, endDate.value);
    courses.push(course);
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.courseIndex = courses.length - 1;
    editButton.addEventListener("click", edit);
    let deleteButton =document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.courseIndex = courses.length - 1;
    deleteButton.addEventListener('click', deleteCourse);
    createListElement(course, editButton, deleteButton);
    buttonResetCourses.click();


    console.log(courses);
}


function deleteCourse(event){
    event.preventDefault();
    courses[this.courseIndex] = new Course(title.value, stream.value, type.value, startDate.value, endDate.value);
    results.innerHTML = '';
    for(let i = 0; i < courses.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.courseIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.courseIndex = i;
        deleteButton.addEventListener('click', deleteCourse);
        console.log(courses[i]);
        createListElement(courses[i], editButton, deleteButton);
    }
     buttonResetCourses.click();

}

function edit(){
    title.value = courses[this.courseIndex].title;
    stream.value = courses[this.courseIndex].stream;
    type.value = courses[this.courseIndex].type;
    startDate.value = courses[this.courseIndex].startDate;
    endDate.value = courses[this.courseIndex].endDate;
    buttonUpdateCourses.hidden = false;
    buttonSubmitCourses.hidden = true;
    buttonUpdateCourses.courseIndex =this.courseIndex;
}

function update(event){
    event.preventDefault();
    courses[this.courseIndex] = new Course(title.value, stream.value, type.value, startDate.value, endDate.value);
    results.innerHTML = '';
    for(let i = 0; i < courses.length; i++){
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.courseIndex = i;
        editButton.addEventListener('click', edit);
        let deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.courseIndex = i;
        deleteButton.addEventListener('click', deleteCourse);
        createListElement(courses[i], editButton, deleteButton);
    }
    buttonUpdateCourses.hidden = true;
    buttonSubmitCourses.hidden = false;
    buttonResetCourses.click();

}

function createListElement(course, editButton, deleteButton){
    let courseLi = document.createElement("li");
    courseLi.innerHTML = courseToString(course);
    // let spanSpace =document.createElement('span');
    // spanSpace.innerHTML = '&nbsp;';
    courseLi.append(editButton, deleteButton);
    results.append(courseLi);
}



function reset(){
}