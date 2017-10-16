class Square{

    constructor(x, y, rotation, scale){
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.scale = scale;

        // this.color = color;
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
        ctx.stroke();
        ctx.strokeStyle="rgb("+
            Math.floor(Math.random()*156)+","+
            Math.floor(Math.random()*156)+","+
            Math.floor(Math.random()*150)+")";
        ctx.moveTo(canvasWidth/2 - 50, canvasHeight/2 + 50 );
        ctx.strokeRect(0, 0, 50, 50);

        ctx.closePath();
        ctx.restore();

    }
}