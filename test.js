function alertMe(){
    alert('Hello');
    prompt('He');
}
const btn2 = document.getElementById('my-btn');

function writeToPage(){
    const elementNode = document.createElement('p');
    const textNode = document.createTextNode('This text is added from Function');
    const attrNode = document.createAttribute('class');
    elementNode.appendChild(textNode);
    attrNode.value='some-class';
    elementNode.setAttributeNode(attrNode);
    document.body.appendChild(elementNode);
}

function writeToPageSecond(){
    const elementNode = document.createElement('p');
    const textNode = document.createTextNode('This text is added from Function2');
    const attrNode = document.createAttribute('class');
    elementNode.appendChild(textNode);
    attrNode.value='some-class-new';
    elementNode.setAttributeNode(attrNode);
    document.body.appendChild(elementNode);
}
function alertUser(){
    alert('Hey, you clicked a button');
}

//Register Event
//btn2.addEventListener('click',writeToPage);

//Register Event second way
//btn2.onclick = writeToPageSecond;