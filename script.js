let courses = [];

const result = document.querySelector('.wynik');
const customerName = document.querySelector('.customer--name');
const customerCourse = document.querySelector('.customer--course');
const customerAuthor = document.querySelector('.customer--author');
const submit = document.querySelector('.submit');


function pushCourses() {

    const customerAuthorValue = customerAuthor.value.trim();
    const customerCourseValue = customerCourse.value.trim();
    const customerNameValue = customerName.value.trim();

    if (customerNameValue === '' || customerCourseValue === '' || customerAuthorValue === '') {
        alert("You have to fill all places")

    } else {
        courses.push({
            name: customerNameValue,
            course: customerCourseValue,
            author: customerAuthorValue,
        });
        displayResult();
        
    }
}


function displayResult() {
    let submitWindow = "";

    for (const kurs of courses) {

       const random = this.randomPicture();
        submitWindow +=
            `
    <div class="card">
        <div class="image">
        <img src="Img/cust-${random}.jpg" class="image-img" alt="" >
        </div>

        <div class="card--info">
        <p><span class="card--info_name">Name: </span>${kurs.name}</p>
        <p><span class="card--info_course">Course: </span> ${kurs.course}</p>
        <p><span class="card--info_author">Author: </span> ${kurs.author}</p>
        </div>
    </div>
    `
        result.innerHTML = submitWindow;
       
    }



}

function randomPicture(){

    let randomPicture = Math.floor(Math.random()*5);
    console.log(randomPicture)
    return randomPicture;
    
}


const reset = document.querySelector('.reset')

reset.addEventListener("click",() => {
    courses.length = 0;
    result.innerHTML = '';
})

function loadScreen(){
    const load = document.querySelector('.load-screen');
    result.innerHTML = "";
    load.innerHTML = `<img src="Img/loading.gif">`
    const caclulate = document.querySelector('.calculating');
    caclulate.style.display = "block";
    caclulate.innerHTML = "...Calculating";

    setTimeout(() => {
        load.innerHTML = "";
        caclulate.style.display = "none";
        caclulate.innerHTML = "";
        pushCourses();
    }, 2000)
}

const form = document.querySelector('.form')
form.addEventListener("submit", (e) => {
    e.preventDefault();
    loadScreen();
    
   
});