"use strict";

const data = {
    img: ['img/tabs/vegy.jpg', 'img/tabs/elite.jpg', 'img/tabs/post.jpg'],
    altImg: ['vegy', 'elite', 'post'],
    header: ['Меню "Фитнес"', 'Меню “Премиум”', 'Меню "Постное"'],
    description: ['Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'],
    price: ['229', '550', '430']
}

class Menu{
    constructor(img, altImg, header, description, price, selector){
        this.img = img;
        this.altImg = altImg;
        this.header = header;
        this.description = description;
        this.price = price;
        this.selector = document.querySelector(selector);
    }
    render() {
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="menu__item">
            <img src="${this.img}" alt="${this.altImg}">
            <h3 class="menu__item-subtitle">${this.header}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>
        `;
        this.selector.append(element);
    }
}

for(let i = 0; i < 3; i++){
    new Menu(data.img[i], data.altImg[i], data.header[i], data.description[i], data.price[i], ".menu .container").render();
}
