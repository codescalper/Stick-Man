let canvas;
let ctx;
let FlowField;
let FlowFieldAnimation

window.onload = function(){
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    FlowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    FlowField.animate();
}


//For making the canvas responsive
window.addEventListener('resize', function(){
    cancelAnimationFrame(FlowFieldAnimation)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    FlowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    FlowField.animate();
})


//Here if i want to make my canvas interact with my mouse position

const mouse =   {
    x:0,
    y:0,
}
window.addEventListener('mousemove',function(e){
    mouse.x = e.x
    mouse.y = e.y
})

class FlowFieldEffect{
    #ctx; //#variable name # function name this hash(#) indicates that it's a private var or private function respectively
    #width;
    #height;
    constructor(ctx, width,height){
        this.#ctx = ctx;
        this.#ctx.strokeStyle = 'yellow';
        this.#width= width;
        this.#height = height;
        this.x = 0;
        this.y = 0;
        
        // this.#draw(100, 100); this will print a line
    }
    //this is to draw a line 
    #draw(x, y){
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(mouse.x,mouse.y);
        this.#ctx.stroke();
        
    }
    //Here this code is to animate the line 
    animate(){
        this.#ctx.clearRect(0,0,this.#width,this.#height)
        this.#draw(this.#width/2,this.#height/2);

        // console.log("animating");
        FlowFieldAnimation= requestAnimationFrame(this.animate.bind(this));

    }
 //There is also delta time which act acc to our input and it'based on fps
    

}