// Rover Object Goes Here
// ======================
let rover = {
  direction: `N`,
  x: 0,
  y: 0,
  travelLog: [],
}


// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction == `N`) {
     rover.direction = `W`;
     console.log(`Rover is facing Noth and turns left => Rover is now facing West`);
  } else if(rover.direction == `W`) {
     rover.direction = `S`
     console.log(`Rover is facing West and turns left => Rover is now facing South`)
  } else if (rover.direction == `S`) {
     rover.direction = `E`
     console.log(`Rover is facing South and turns left => Rover is now facing East`)
  } else if(rover.direction == `E`) {
     rover.direction= `N`
     console.log(`Rover is facing East and turns left => Rover is now facing North`)
  }
}

// console.log(rover.direction)
function turnRight(rover){
  console.log("turnRight was called!");
    if(rover.direction == `N`) {
       rover.direction = `E`;
       console.log(`Rover is facing Noth and turns right => Rover is now facing East`);
    } else if(rover.direction == `E`) {
       rover.direction = `S`
       console.log(`Rover is facing East and turns right => Rover is now facing South`)
    } else if (rover.direction == `S`) {
       rover.direction = `W`
       console.log(`Rover is facing South and turns right => Rover is now facing West`)
    } else if(rover.direction == `W`) {
       rover.direction = `N`
       console.log(`Rover is facing West and turns right => Rover is now facing North`)
    }
  }

function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction === `N`) {
   rover.y--;
   console.log(`(${rover.x},${rover.y})`);
} else if(rover.direction == `S`) {
   rover.x++;
   console.log(`(${rover.x},${rover.y})`)
} else if (rover.direction == `E`) {
   rover.x++;
   console.log(`(${rover.x},${rover.y})`)
} else if(rover.direction == `W`) {
   rover.x--;
   console.log(`(${rover.x},${rover.y})`)
}
}

function commands(steps) {
   for (let i = 0; i < steps.length; i++){
      console.log(steps.charAt(i))
      if (steps.charAt(i) === `l`) {
       turnLeft(rover);
    } else if (steps.charAt(i) === `r`) {
       turnRight(rover);
    } else if (steps.charAt(i) === `f`) {
       moveForward(rover);
    }
 
    rover.travelLog.push(steps.charAt(i))
   }
   
   console.log(`Travel Log: ${rover.travelLog}`)
}
