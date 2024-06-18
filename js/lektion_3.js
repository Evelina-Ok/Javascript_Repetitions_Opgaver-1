let L3_1 = document.querySelector("#L3_1");
let L3_2 = document.querySelector("#L3_2");
let L3_3 = document.querySelector("#L3_3");
let L3_4 = document.querySelector("#L3_4");
let L3_5 = document.querySelector("#L3_5");

//Opgave 1
const webDev = {
    class: 'h1we010124',
    classroom: 'p025',
    students: ['Mathias', 'Amalie', 'Peter', 'Christian', 'Jack', 'Omid'],

    createNewStudent(studentName) {
        this.students.push(studentName);
        this.students.forEach((student) => {
            console.log(student);
        });
    }
};


//Opgave 2


//Opgave 3


//Opgave 4


//Opgave 5



//class notes
// [
// {
//     role: 'student',
//     name: 'Omid',
//     favouritePet: 'wolf',
//     editName(value) {
//         this.name = value;
//     }
// }
// ]



// function displayClassmates() {
//     console.log(classArray);
//     for(let i = 0; i < classArray.length; i++) {
//         let newElement = document.createElement('p');
//         let pet = document.createElement('p');
//         newElement.innerText = classArray[i].role + '' + classArray[i];
//         newElement.style = `font-size $(i)rem`
//         L3_1.appendChild(newElement);
//     }
    
// }
// displayClassmates()





// const classArray = ['Kasper', 'Mathias', 'Peter', 'Christian'];
// function displayClassmates() {
//     for(let i = 0; i < classArray.length; i++) {
//         let newElement = document.createElement('p')
//         newElement.innerText = classArray[i];
//         newElement.style = `font-size $(i)rem`
//         L3_1.appendChild(newElement);
//     }
    
// }
// displayClassmates()