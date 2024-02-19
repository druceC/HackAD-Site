// let yearSemesterList = ['Spring 2018', 'Fall 2018', 'Spring 2019', 'Fall 2019', 'Spring 2020', 'Fall 2020', 'Spring 2021', 'Fall 2021', 'Spring 2022', 'Fall 2022'];
let yearSemesterList = ['Fall 2023','Spring 2023','Fall 2022','Spring 2022','Fall 2021','Spring 2021','Fall 2020','Spring 2020', 'Fall 2019', 'Spring 2019','Fall 2018', 'Spring 2018'];
let count = 0;
let countLeftBtn = 0;
let i = 0;
let txt = 'Past Events'; /* The text */
// let contentText = "The <span class='tech-community'>Tech Community</span><br>at NYU Abu Dhabi";
// let contentText1 = "Tech Community";
// let contentText2 = "at NYU Abu Dhabi";
// let contentText = 'Apple';
// Select the <h1> element with the ID "content-left"
// let contentLeftElement = document.getElementById("content-left");
// Set the inner HTML of the selected element to the content text
// contentLeftElement.innerHTML = contentText;
let speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("past-event-heading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function typeWriter1() {
    if (i < contentText.length) { 
        document.getElementById("content-left").querySelector("h1").innerHTML += contentText.charAt(i); // Using contentText instead of landing_txt
        i++;
        setTimeout(typeWriter1, speed);
    }
}

function highlightMenuItem(event) {
    // Remove highlight class from previously clicked menu item
    // / Remove font color from the previously selected menu item
    var previousSelectedItem = document.querySelector('.selected');
    if (previousSelectedItem) {
        previousSelectedItem.classList.remove('selected');
    }

    // Change font color of the newly selected menu item to white
    var selectedItem = event.target;
    selectedItem.classList.add('selected');
}

window.addEventListener('load', () => {
    let rightBtn = document.getElementById('right-arrow-btn');
    let leftBtn = document.getElementById('left-arrow-btn');
    let yearTxt = document.getElementById('year-semester-heading');
    let child = document.getElementById('events-fall2021');
    let parent = child.parentNode;
    let children = parent.children;

    rightBtn.addEventListener('click', () => {
        children[count].style.display = 'none';
        count++;
        count = count % yearSemesterList.length;
        yearTxt.innerHTML = yearSemesterList[count];
        children[count].style.display = 'block';
    })

    leftBtn.addEventListener('click', () => {
        children[count].style.display = 'none';
        count--;
        if (count<0){
            countLeftBtn = yearSemesterList.length;
            count = countLeftBtn-1;
        }
        count = count % yearSemesterList.length;
        yearTxt.innerHTML = yearSemesterList[count];
        children[count].style.display = 'block';
    })

    // typeWriter();
    typeWriter();
})

