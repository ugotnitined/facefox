var constants = require('./constants.js').constants;
var Vector = require('./Vectors.js').Vector;
function Bullet(position,velocity){
    this.position = new Vector(position.x, position.y, position.z);
    this.velocity = Vector.vfns.scale(Vector.vfns.unitVector(velocity),constants.bulletSpeed);

    this.update = function(){
        this.position = Vector.vfns.add(this.position, this.velocity);
    }

    this.digest = function(){
        return {
            px:this.position.x,
            py:this.position.y,
            pz:this.position.z,
            vx:this.velocity.x,
            vy:this.velocity.y,
            vz:this.velocity.z,
        };

    }
}
exports.Bullet=Bullet;
