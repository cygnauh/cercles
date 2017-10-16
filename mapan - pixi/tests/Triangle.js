class Triangle{

    constructor(rotation, scale, opts){
        this.x = 0;
        this.y = 0;
        this.size = opts.size;
        this.rotation = rotation;
        this.scale = scale;
        this.position = vec2.create();
        this.position[0]=opts.x;
        this.position[1]=opts.y;

        this.position = vec2.fromValues
        this.velocity = vec2.create();
        // this.velocity = velocity;


        // this.color = color;
    }
    update(){
        this.x += this.vx
    }
    render(){
        ctx.save();

        // this.x = x;
        // this.y = y;
        // this.rotation = rotation;
        // this.scale = scale;
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );// in radians
        ctx.scale(this.scale, this.scale);
        ctx.beginPath();
        ctx.fillStyle="rgb("+
            Math.floor(Math.random()*156)+","+
            Math.floor(Math.random()*156)+","+
            Math.floor(Math.random()*150)+")";
        ctx.moveTo(canvasWidth/2 - 50, canvasHeight/2 + 50 );
        ctx.lineTo(canvasWidth/2, canvasHeight/2 - 50 );
        ctx.lineTo(canvasWidth/2 + 50, canvasHeight/2 + 50 );
        ctx.lineTo(canvasWidth/2 - 50, canvasHeight/2 + 50 );
        ctx.fill();
        ctx.closePath();
        ctx.restore();

    }
}