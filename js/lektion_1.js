let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");



let myName = document.querySelector('#name')

// Opgave 1
// function fullName(firstName, lastName) {
//   let greeting = "Welcome " + firstName + " " + lastName;
//   let newH3 = document.createElement("h3");
//   newH3.innerText = greeting;
//   L1_1.appendChild(newH3);
// }


// function getFullName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }

function getFullName(firstName, lastName) {
  let fullName = "";
  
  const nameElement = document.createElement('p');
  

  
  if (lastName && typeof lastName === "string") {
    fullName = firstName + " " + lastName;
  } else {
    fullName = firstName;
  }
  // console.log(fullName);
  nameElement.textContent = fullName;
  L1_1.appendChild(nameElement);
  return fullName;  
}

// Opgave 2
//Firstly I add class name to the existing ID L1_2 from opgave 2 in my scss: #L1_2 .hidden {visibility: hidden;}
//Then 

L1_2.addEventListener("click", () => {
  L1_2.classList.toggle("hiddendisplay");
  console.log('test');
});

//alternative way:
/* in html:
<button onclick="myToggle()">hide me</button>
in js:
function myToggle() {
let element = document.getElementById('L1_2');
element.classList.toggle('hidden');
}
in js function calls:
myToggle()
*/


// Opgave 3
//firstly made a button inside html with id "toggleColorBtn"
// variable with empty function which we call in "Function Calls"
  const toggleColor = () => {
  const h4Element = document.querySelector('#L1_3 h4'); //variable which we call from html 
  
  const messageDiv = document.getElementById('L1_3') 
  let messageText = document.createElement('p'); //variable that creates <p> component inside html id L1_3
 
  messageText.classList.toggle('hiddendisplay'); // let variable just created  to toggle visibility
  messageText.innerText = 'Color has changed'; // let variable is a text message
  messageDiv.appendChild(messageText); //append the let to the const so it shows

//select what element has event listener
//pack both variables that have event listener inside of this function
  document.getElementById('toggleColorBtn').addEventListener('click', ()=> { 
    h4Element.classList.toggle('color-togglebtn');
    messageText.classList.toggle('hiddendisplay');
  });
};


// Opgave 4
let count = 0;
let clickButton = document.getElementById('clickBtn');

const clickElement = document.getElementById('L1_4');
let clickCount = document.createElement('p');
clickCount.innerText = 'Button clicked ' + count + ' Times';
clickElement.appendChild(clickCount)

clickBtn.addEventListener('click', function() {
  count++;

clickCount.innerText = 'Button clicked ' + count + ' Times';
clickElement.appendChild(clickCount)

});

/* alternative method using <p> inside html:
<p>Button Clicked <span id="display">0</span> Times</p>
js:
let count = 0;
let clickButton = document.getElementById("clickBtn");
let disp = document.getElementById("display");
clickButton.addEventListener("click", function () {
count++;
disp.innerHTML = count;
}); 
*/

// Opgave 5

const wordLength = (word) => { // arrow function with an argument
  const userWord = document.createElement('h3'); //created <p> element inside html
  userWord.textContent = word; 
  //textContent value is not parsed as HTML
  //The textContent property in HTML is used to set or return the text content of the specified node and all its descendants. This property is very similar to nodeValue property but this property returns the text of all child nodes. Syntax: It is used to set the text of node.
  console.log(word.length);

  const wordLength = document.createElement('p');
  wordLength.textContent = `Word length is: ${word.length}`;

  L1_5.appendChild(userWord); //appends variable with created h3 to html so it can be seen
  L1_5.appendChild(wordLength);
}


// Opgave 6

const wordCut = (word) => {
  const wordCutVowels = word.replace(/[aeiouæøåAEIOUÆØÅ]/g, '');
  const wordNew = document.createElement('p');
  wordNew.textContent = wordCutVowels;

  L1_6.appendChild(wordNew); //append 'wordNew' to the L1_6 id
}

// Function Calls
// fullName("Ukendt", "Person");
// myName.innerText = getFullName("John" "Wilson")
getFullName('John', 'Wilson')
// hideElement()
toggleColor()
wordLength('John Doe')
wordCut('John Doe')

