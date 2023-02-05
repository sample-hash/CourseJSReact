"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContents = document.querySelectorAll('.tabcontent'),
          tabHeaderItems = document.querySelector('.tabheader__items');

function hideTabsContent(){
    tabContents.forEach(block => {
        block.classList.add('hide');
        block.classList.remove('show');
    });

    tabs.forEach(tab => {
        tab.classList.remove('tabheader__item_active');
    });
}

function showTabContent(i = 0){
    tabContents[i].classList.add('show');
    tabContents[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabsContent();
showTabContent();

tabHeaderItems.addEventListener('click', (e) => {
    const target = e.target;

    if(e.target && e.target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if(target == item){
                hideTabsContent();
                showTabContent(i);
            }
        });
    }
});

});
