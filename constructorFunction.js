function createCircle(radius, location) {
  this.radius = radius;
  this.location = location;
  this.draw = function() {
    console.log('Draw');
  }
  this.move = function() {}
    
}

const circle = new circle(1, {x: 1, y: 2});
