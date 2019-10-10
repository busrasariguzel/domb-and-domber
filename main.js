

function append(element){
    const ulGrab = document.querySelector('ul');
    return ulGrab.appendChild(element)
}

// const newDiv = append2();
function append2(element){
    const loremDiv = document.querySelector('div#lorem')
    return loremDiv.appendChild(element);
}

function newText(str){
    const text = document.createElement('li');
    console.log(text)
    text.innerText = str;
    console.log(text.innerText)
    return text
}

function source(image, str){
    const newImage = document.createElement(image);
    newImage.src= str;
    // return newImage;


    // const imageSource = document.querySelector(img)
    // image.src(str);
}



function sameClass(element1,element2){
const newClass = element1.class
element2.class=newClass;
}

function tagId(tag,id){
const newElement = document.createElement(tag);
newElement.id= id;
return newElement.id;
}

function colorId(color, id){
    const newColor = document.querySelector(id)
    newColor.style.color = color;
}


const newLi = newText('Hello darkness my old friend');
const newLi2 = newText('boy bye');
const newLi3 = newText('not today satan');
append(newLi);
append(newLi2);
append(newLi3);

const newSource = source(image, 'https://media2.giphy.com/media/2TP6yaW6zVxq8/giphy.webp?cid=790b7611194bc161696c31c568a166465748c29c4f1a6365&rid=giphy.webp')
const newTagId = tagId(image, 'hello');
const newFunction = append2(tagId);
const settingSameId = sameClass('#thing-1','#thing-2')
const anotherSettingSameId = sameClass ('#thing-1','#thing-c')
const changingColor = colorId('light green' ,'heading');

// const newSource = source('link')
// const abc = append2(source);
// const abcde = sameClass(append2);


// HIS SOLUTIONS
// first question
function appendToList(element){
    const list = document.querySelector('ul');
    list.appendChild(element);
}
// how to test it- use below to test if the function is working
const heading = document.createElement('h1');
heading.innerText = 'TEST'
appendToList(heading);

// ----
// second question

function appendToLorem(element){
    const loremDiv = document.querySelector('#lorem');
    loremDiv.appendChild(element);
}
// how to check

const item = document.createElement('li');
item.innerText = 'TEST'

function makeListItem(text){
const item = document.createElement('li');
item.innerText = text
return item;
}
const item= makeListItem('TESTY')
appendToLorem(item)

// image question

function addUrlToImage(url,image){
    image.src = url;
}
// to tes

const newImage = document.createElement('img');
const url = LINK
addUrlToImage(url, newImage);
appendToList(newImage);

function cloneClass(elementWithOriginalClass,elementToGiveClassTo){
elementToGiveClassTo.className= elementWithOriginalClass.className

}
const thing1= document.querySelector('#thing-1');
const thing2= document.querySelector('#thing-2');
const thingC= document.querySelector('#thing-c');
cloneClass(thing1,thing2);
cloneClass(thing1,thingC);

function makeElementWithId(tagName , id){
    const newElement= document.createElement(tagname);
    newElement.id = id;
    return newElement;
}

const newImage = makeElementWithId('img' , 'dino')

function giveColorToElement(id,color){
    const element = document.querySelector(id)
    element.style.color = color;

}

giveColorToElement('#heading', 'green')