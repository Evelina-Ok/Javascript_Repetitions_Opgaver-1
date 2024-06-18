let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");


//Opgave 1

let firstNameElement = document.querySelector('#first');
let lastNameElement = document.querySelector('#last');
const nameButton = document.getElementById('nameBtn');

let firstName;
firstNameElement.addEventListener('change', () => {
    firstName = firstNameElement.value;
    console.log(firstName);
});

let lastName;
lastNameElement.addEventListener('change', () => {
    lastName = lastNameElement.value;
    console.log(lastName);
});
//we write this outside the function (button function comes afterwards), so the name changes inside the text instead of creating new <p> each click
const fullName = document.createElement('p');
L4_1.appendChild(fullName);

nameButton.addEventListener('click', () => {
    fullName.innerText = `Welcome: ${firstName} ${lastName}`;
    
})



//Opgave 2

function delayFunction () {
    console.log('function executed after 4 seconds');
    const delayText = document.createElement('p');
    delayText.innerHTML = 'Function executed after 4 seconds';
    L4_2.appendChild(delayText);
};
//set it to 4sec:
setTimeout(delayFunction, 4000);



//Opgave 3

let time = 0;
let stopWatch = document.createElement('p');
function stopWatchFunction() {
    //i represents the placement inside the array, which starts at a 0-count
    //setInterval executes a specified function at set time intervals
    let i = setInterval(() => {
        //"time + = 1" is absolutely same as "time++" it means that if time is more than 0 like we have set at the start, if time is 1
        time++;
        if (time <= 1) {
            stopWatch.innerHTML = `${time} seconds have passed`;
        L4_3.appendChild(stopWatch);
        } else {
            stopWatch.innerHTML = `${time} seconds have passed`;
            L4_3.appendChild(stopWatch);
        }
        //if time changed to 60sec, we clear interval and start again, or we could go on or change to minutes
        if (time === 60) {
            clearInterval(i);
            stopWatch.innerHTML = `${time} seconds have passed`;
            L4_3.appendChild(stopWatch);
        }
    }, 1000)
}
stopWatchFunction();



//Opgave 4

function getScrollLength() {
    let scrollText = document.createElement('p');
    
    L4_4.appendChild(scrollText);
    window.addEventListener('scroll', () => {

        //window.scrollY shows how long we scrolled down in pixels
        let scrollTop = window.scrollY;
        // console.log(scrollTop);

        //document.body.offsetHeight calculates full document height
        let docHeight = document.body.offsetHeight;
        // console.log(docHeight);

        //window.innerHeight calculates windows height, that we see at a time, so it's always less in height (if full document is longer and we can scroll)
        let winHeight = window.innerHeight;
        // console.log(winHeight);

        //to get the percentage how long we came down, we show substract windows height from full document height
        let scrollPercent = scrollTop / (docHeight - winHeight);
        //and transform pixels into percent (* 100) and round so we don't get long numbers like 0.578587029
        let roundedPercent = Math.round(scrollPercent * 100);

        //add the text into html
        scrollText.innerHTML = `You are at ${roundedPercent}% scroll`;
    })
}
// don't forget to call the function
getScrollLength();






