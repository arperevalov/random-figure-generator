let chroma = require('chroma-js')

// global settings
const count = 12;

const borderX = window.innerWidth;
const borderY = window.innerHeight;

const figures = ['Figure', 'Circle', 'Triangle', 'Rectangle', 'Trapezoid'];

// const colors = ['577EF4', 'EA4C89'];
const colors = [chroma.random(), chroma.random()]

const palette = chroma.scale(colors).mode('lch').colors(count);
const randomPaletteColor = function() {
    let colorId = randomize(palette.length);
    return palette[colorId];
}


// randomizes things
function randomize (max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// main figure class
class Figure {
    constructor(options) {
        this.size = randomize(options.size);
        this.id = options.id;
        this.color = options.color;
        this.rotate = options.rotate;
    }

    setFigure(){
        let container = document.getElementById('container'),
        el = container.appendChild(document.createElement('div'));
        
        el.setAttribute("id", "div"+this.id);
        el.style.position = 'absolute';
        let rotation = randomize(360);
        el.style.transform = 'rotate(' + rotation + 'deg)';

        if (this.size) {
            el.style.width = this.size + 'px';
            el.style.height = this.size + 'px';
        } 

        el.style.background = this.color;

        if(this.rotate == true) {
            let deg = rotation;
            setInterval(() => {
                el.style.transform = 'rotate('+ deg +'deg)';
                el.style.transitionDuration = '1s';
                deg = (deg+ 1)
            }, 100);
        }

        el.style.top = randomize(500) + 'px';
        el.style.left = randomize(500) + 'px';
        
        
        return el;
    }
};


// circle class
class Circle extends Figure {
    constructor(options) {
        super(options)
        this.radius = options.radius;
    }

    setFigure() {
        let el = super.setFigure()
        el.style.borderRadius = this.radius + 'px';
    }
}


// triangle class
class Triangle extends Figure {
    constructor(options) {
        super(options)
    }

    setFigure() {
        let el = super.setFigure()
        el.style.width = 0 + 'px';
        el.style.height = 0 + 'px';
        el.style.borderLeft = (this.size / 2) + "px solid transparent";
        el.style.borderRight = (this.size / 2) + "px solid transparent";
        el.style.borderBottom = this.size + "px solid "+ this.color;
        el.style.background = "transparent";
    }
}


// rectangle class
class Rectangle extends Figure {
    constructor(options) {
        super(options)
    }

    setFigure() {
        let el = super.setFigure()
        el.style.width = (this.size / 2) + 'px';
    }
}


// trapezoid class
class Trapezoid extends Figure {
    constructor(options) {
        super(options)
        this.radius = options.radius;
    }

    setFigure() {
        let el = super.setFigure()

        el.style.width = this.size + 'px';
        el.style.height = 0 + 'px';
        el.style.borderLeft = (this.size / 2) + "px solid transparent";
        el.style.borderRight = (this.size / 2) + "px solid transparent";
        el.style.borderBottom = this.size + "px solid "+ this.color;
        el.style.background = "transparent";
        
        console.log(this.id)
        console.log('trapezoid!')
    }
}


// main controller
document.addEventListener("DOMContentLoaded", function(){
    let container = document.getElementById('container');
    container.style.overflow = 'hidden';
    container.style.position = 'adsolute';
    container.style.width = borderX + 'px';
    container.style.height = borderY + 'px';

    for (let i = 0; i < count; i++){

        let figureDefine = randomize(figures.length),
            rotateDefine = randomize(2),
            el;

        let rotate = function(){
            if (rotateDefine == 0) {
                return false;
            } else {
                return true;
            }
        }

        switch (figureDefine) {
            case 0: 
                el = new Figure({
                        size: 270,
                        id: i, 
                        color: randomPaletteColor(),
                        radius: null,
                        rotate: rotate(),
                    });
            break;
            
            case 1:
                el = new Circle({
                    size: 270,
                    id: i,
                    color: randomPaletteColor(),
                    radius: 1000,
                });
            break;

            case 2:
                el = new Triangle({
                    size: 270,
                    id: i,
                    color: randomPaletteColor(),
                    rotate: rotate(),
                });
            break;

            case 3:
                el = new Rectangle({
                    size: 270,
                    id: i,
                    color: randomPaletteColor(),
                    rotate: rotate(),
                });
            break;

            case 4:
                el = new Trapezoid({
                    size: 270,
                    id: i,
                    color: randomPaletteColor(),
                    rotate: rotate(),
                });
            break;

            default:
                el = new Figure({
                    size: 270,
                    id: i, 
                    color: randomPaletteColor(),
                    radius: null,
                    rotate: rotate(),
                });
            break;

        };

        el.setFigure();
        
    }

});