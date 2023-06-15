// 1 - Write a function which, if the 'h2' element  has the class "header",
// it will be removed; otherwise the class "toogleHeader" is added.

const toggleClass = () => {
        const header = document.querySelector('h2');
    if(header.classList.contains('header')){
  header.classList.remove("header");

    }else{
            header.classList.toggle("toggleHeader");

    }
};
toggleClass(); //uncomment me to test

// 2- Select the section with an id of 'container' without using querySelector,
// and style the font with 'blue' color

const styleContainer = () => {
    const section = document.getElementById('container');
    section.style.color = 'blue';
};
// styleContainer(); //uncomment me to test

// 3 - Select the 'nav' with a class of "firstNav" and style the font with 'italic' fontStyle.

const styleItalic = () => {
    const nav = document.getElementsByClassName('firstNav')[0];
    nav.style.fontStyle = 'italic';
};
// styleItalic(); //uncomment me to test

// 4 - Select a list item with a class of 'contact', but only the list item inside of the 'secondList' nav,
// and style it with background color 'yellow'

const backgroundList = () => {
    const nav = document.querySelector('.secondList');
    const concat = nav.querySelector('.contact');
    concat.style.backgroundColor = 'yellow';
};

// backgroundList(); //uncomment me to test

// 5- Create a new 'li' element , give it the text 'project' and append it to the 'fisrtList' .
const newList = () => {
    const li = document.createElement('li');
    li.textContent = 'project';
    const firstList = document.querySelector('.firstNav');
    firstList.append(li);
};
// newList(); //uncomment me to test

// 6 - Loop over all of the 'li' elements inside the 'secondList' and give them a background color of "brown".
const brownColor = () => {
    const secondNav = document.querySelector('.secondList');
   const items  =  secondNav.querySelectorAll('li');
   for (const item of items) {
    item.style.backgroundColor = 'brown'
   }
};
// brownColor(); //uncomment me to test

// 7- Create 'p' eleement with any text and append it to the footer
const addFooter = () => {
    const para = document.createElement('p');
    para.textContent = 'test';
    const footer = document.querySelector('.footer');
    footer.appendChild(para);
};
// addFooter(); //uncomment me to test

// 8- Remove the 'div' with a class of 'footer'.
const removeFooter = () => {
    const elem = document.querySelector('.footer');
    elem.remove()
};
// removeFooter(); //uncomment me to test
