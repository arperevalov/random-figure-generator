class Figure {
    constructor(options) {
        this.size = options.size;
        this.posX = options.posX;
        this.posY = options.posY;
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
        } else {
            el.style.width = randomize(borderX) + 'px';
            el.style.height = randomize(borderY) + 'px';
            console.log(el.style.height = randomize() + 'px')
        }

        if(typeof(this.color) == Number){
            el.style.background = this.color;
        } else {
            el.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
        }

        el.style.top = randomize(borderY) + 'px';
        el.style.left = randomize(borderX) + 'px';
        el.style.transform = 'rotate(' + randomize(360) + 'deg)';
    }
}

function randomize (max) {
    return Math.floor(Math.random() * Math.floor(max));
}



const count = 10;
const borderX = window.innerWidth;
const borderY = window.innerHeight;


document.addEventListener("DOMContentLoaded", function(){
    let container = document.getElementById('container');
    container.style.overflow = 'hidden';
    container.style.position = 'relative';
    container.style.width = borderX + 'px';
    container.style.height = borderY + 'px';

    for (let i = 0; i < count; i++){

        let el = new Figure({
            size: 1222,
            posX: 12,
            posY: 12,
            id: i,
            color: null,
        });

        el.setFigure();
        
    }

});
    
