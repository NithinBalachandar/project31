class particle {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
    this.r= r;
      this.body = Bodies.circle(x, y, this.r, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius,this.radius);

    }
  };
