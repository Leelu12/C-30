class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    //visibilty is bettween 0 and 255,0= commpletly invisible,255=commpletly visible
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      //tint creates vanishing effect by adding a transperent layer to the image
      tint(255,this.Visibility)
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    
  }
};