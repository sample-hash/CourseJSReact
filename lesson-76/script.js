"use strict";

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 15);
const div = new ColoredRectangleWithText(23, 33, 'Текст', 'red');
div.showProps();
console.log(div.calcArea());
console.log(square.calcArea());


