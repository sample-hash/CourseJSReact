"use strict";

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.childElementCount);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// const heartsWrapp = document.querySelector('#currHeart').parentNode;
// const div = document.createElement('div');
// div.innerText = 'Hello world!';
// heartsWrapp.append(div);
// console.log(heartsWrapp);

// console.log(document.querySelector('[data-current="2"]').nextElementSibling);

for (let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}