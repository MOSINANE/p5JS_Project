class Enemy {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D().mult(2);
      this.acc = createVector();
      this.hp = 50; // Hit points
    }
  
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0); // Reset acceleration
      if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x *= -1;
      }
      if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y *= -1;
      }
      
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    show() {
      fill(255, 0, 0, this.hp * 5); // Color depends on HP
      noStroke();
      ellipse(this.pos.x, this.pos.y, 20, 20);
    }
  
    isDead() {
      return this.hp <= 0;
    }
    edges() {
        if (this.pos.x > width + this.r) {
          this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
          this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
          this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
          this.pos.y = height + this.r;
        }
      }
  }