

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
    return newImage;


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

const newSource = source(image, 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg')
const newTagId = tagId(image, 'hello');
const newFunction = append2(tagId);
const settingSameId = sameClass('#thing-1','#thing-2')
const anotherSettingSameId = sameClass ('#thing-1','#thing-c')
const changingColor = colorId('light green' ,'heading');

// const newSource = source('link')
// const abc = append2(source);
// const abcde = sameClass(append2);


