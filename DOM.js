/** HTML document is structured as a js object. 
 * selecting HTML element using javascript is similar as selecting using css 
 * 
 */

// Getting element 
// we can access an element using js . 
// so there's an html in dom.html file then we are going to get it using different methods 

// the first one is Getting elements by tag name 
// getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object.

document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')
console.log(allTitles.length)
// when ever we use this method we access each element by loop through each element 

for(let i = 0; i <= allTitles.length; i++){
    console.log(allTitles[i])
}
console.log(allTitles)

// the second one is Getting element by class name
// it's possible to loop through elements if they have the same class name .

document.getElementsByClassName('class name')

const allClass = document.getElementsByClassName('title')
console.log(allClass.length)

for(let i=0; i <= allClass.length; i++){
    console.log(allClass[i])
}

// getting element by id

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

// getting by query selector 
// when using this method we can access html elements through by tagName, by class or by id

let firstOne = document.querySelector('h1')// using tagname just tag name
let secondOne = document.querySelector('#second-title')// using id to indicate we use #
let thirdOne = document.querySelector('.title') // using class to indicate we use .

console.log(firstOne)
console.log(secondOne)
console.log(thirdOne)

// Adding class using classList
// the class list method is  the best approach to append child class . it does not override the original class rather it adds additional class for the element 

allTitles[3].classList.add('title', 'header-title')

// adding title to an HTML 

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'fourth-title'
console.log(titles)



