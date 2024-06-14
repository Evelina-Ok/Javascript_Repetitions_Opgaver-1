let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");


//Opgave 1
const stringOrNumber = (value) => {
const valueType = typeof value;

const textValue = document.createElement('p');
textValue.textContent = `${value} is a ${valueType}`;

L2_1.appendChild(textValue);
};


//Opgave 2
const checkEmail = (email) => { //arrow function with argument (email)

let validMessage = document.createElement('p'); //creating <p> element in html where message will show
//defining correct way email should look like
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validEmail = false; //variable we work with in next function to validate email

    function validateEmail() { //function called 'validateEmail' that will validate is email correct or not
        validEmail = emailRegex.test(email);
        if (validEmail) {
            console.log('valid');
            validMessage.textContent = `Email er valid`;
        } else {
            console.log('not valid');
            validMessage.textContent = `Email is not valid`;
        }
    }
validateEmail()
L2_2.appendChild(validMessage); //appending <p> element to html id L2_2 so <p> is shown
};

//Opgave 3
const stringLength = (string) => {
    const lengthText = document.createElement('p');

    if (string.length > 2) {
        lengthText.textContent = 'String is longer than 2 characters';
    } else if (string.length == 2) {
        lengthText.textContent = 'String has 2 characters';
    } else {
        lengthText.textContent = 'String is shorter than 2 characters';
    }
// console.log(string.length);
    L2_3.appendChild(lengthText);
    // console.log(lengthText);
};

//Opgave 4
const getRandomNumber = (min, max) => { //creating an arrow function to get a random number between 2 values
    const randomNumberBtn = document.createElement('button'); //creating button inside html
    randomNumberBtn.textContent = `Get a random number between ${min} & ${max}`; //creating a message for the button
    L2_4.appendChild(randomNumberBtn); //appending button to html so it shows

    randomNumberBtn.addEventListener('click', () => { //adding event listener to work on click of the button
        // Both min and max are inclusive - (min - max + 1)
        //notice that max is written before min. Otherwise negative numbers will also be included
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

        const randomNumberText = document.createElement('p');
        randomNumberText.textContent = `Vores tilfældige tal mellem ${min} og ${max} er: ${randomNumber}`;
        L2_4.appendChild(randomNumberText);
    });
};

//Opgave 5
const getRandomColor = () => {
    return Math.floor(Math.random() * 256);
};
    const colorBtn = document.createElement('button');
    colorBtn.textContent = 'Get a random colour';
    L2_5.appendChild(colorBtn);

    colorBtn.addEventListener('click', () => {
        let rgbColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        console.log(rgbColor);

        // if changing colour of the same div without generating new div
        // let colorElement = document.getElementById('L2_5');
        // colorElement.style.background = rgbColor;


        let colorElement = document.createElement('div');
        // colorElement.textContent = '';
       
        colorElement.style.backgroundColor = rgbColor

        L2_5.appendChild(colorElement);

    });




// const r = generateRandomInteger(0, 255);
// const g = generateRandomInteger(0, 255);
// const b = generateRandomInteger(0, 255);


//Function Calls:
stringOrNumber('120');
checkEmail('name@smth.com');
stringLength('Yellow submarine');
getRandomNumber(4, 32);
getRandomColor()






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