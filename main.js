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
    }

    setFigure(){
        let container = document.getElementById('container'),
        el = container.appendChild(document.createElement('div'));
        
        el.setAttribute("id", "div"+this.id);
        el.style.position = 'absolute';

        if (this.size) {
            el.style.width = this.size + 'px';
            el.style.height = this.size + 'px';
        } 

        if(typeof(this.color) == Number){
            el.style.background = this.color;
        } else {
            el.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
        }

        // el.style.top = randomize(borderY) + 'px';
        // el.style.left = randomize(borderX) + 'px';
        el.style.transform = 'rotate(' + randomize(360) + 'deg)';
        
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


// global settings
const count = 10;
const borderX = window.innerWidth;
const borderY = window.innerHeight;


// main controller
document.addEventListener("DOMContentLoaded", function(){
    let container = document.getElementById('container');
    container.style.overflow = 'hidden';
    container.style.position = 'adsolute';
    container.style.width = borderX + 'px';
    container.style.height = borderY + 'px';

    for (let i = 0; i < count; i++){

        let figureDefine = randomize(2),
            el;

        if (figureDefine == 0) {
            el = new Circle({
                size: 270,
                id: i,
                color: null,
                radius: 1000
            });
        } else {
            el = new Figure({
                size: 270,
                id: i,
                color: null,
                radius: null,
            });
        };

        el.setFigure();
        
    }

});
    
