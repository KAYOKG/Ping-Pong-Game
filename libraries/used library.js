p5.prototype.collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {
    //2d
    // temporary variables to set edges for testing
    var testX = cx;
    var testY = cy;
  
    // which edge is closest?
    if (cx < rx){         testX = rx       // left edge
    }else if (cx > rx+rw){ testX = rx+rw  }   // right edge
  
    if (cy < ry){         testY = ry       // top edge
    }else if (cy > ry+rh){ testY = ry+rh }   // bottom edge
  
    // // get distance from closest edges
    var distance = this.dist(cx,cy,testX,testY)
  
    // if the distance is less than the radius, collision!
    if (distance <= diameter/2) {
      return true;
    }
    return false;
  };
