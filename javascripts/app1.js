// Rover Object Goes Here
 var Rover = {
   direction: "N",
   x: 0,
   y: 0,
   travelLog:[[0,0]]
 }
// ======================

let field = []
const obstacleProb = 10 //chance of creating obstacles, in %//
const fieldSize = 10
const commands = 'rffrfflfrff'



validation(commands)

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(Rover.direction){
    case "N":
      Rover.direction="W"
      break;
    case "W":
      Rover.direction="S"
      break;
    case "S":
      Rover.direction="E"
      break;
    case "E":
      Rover.direction="N"
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(Rover.direction){
    case "N":
      Rover.direction="E"
      break;
    case "E":
      Rover.direction="S"
      break;
    case "S":
      Rover.direction="W"
      break;
    case "W":
      Rover.direction="N"
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch(Rover.direction){
    case "N":
      Rover.y--
      break;
    case "E":
      Rover.x++
      break;
    case "S":
      Rover.y++
      break;
    case "W":
      Rover.x--
      break;
  }
  if (Rover.x<0){
    Rover.x=0
  }
  if (Rover.x>10){
    Rover.x=10
  }
  if(Rover.y<0){
    Rover.y=0
  }
  if(Rover.y>10){
    Rover.y=10
  }
  console.log(Rover.x, Rover.y)
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch(Rover.direction){
    case "N":
      Rover.y++
      break;
    case "E":
      Rover.x--
      break;
    case "S":
      Rover.y--
      break;
    case "W":
      Rover.x++
      break;
  }
  if (Rover.x<0){
    Rover.x=0
  }
  if (Rover.x>10){
    Rover.x=10
  }
  if(Rover.y<0){
    Rover.y=0
  }
  if(Rover.y>10){
    Rover.y=10
  }
  console.log(Rover.x, Rover.y)
}

function movement(instruction){
  for (let i=0; i<instruction.length; i++){
    switch(instruction[i]){
      case "f":
        moveForward()
        Rover.travelLog.push([Rover.x, Rover.y])
        break;
      case "b":
        moveBackward()
        Rover.travelLog.push([Rover.x, Rover.y])
        break;
      case "r": 
        turnRight()
        break;
      case "l":
        turnLeft()
        break;
    }
  }
  console.log(Rover.travelLog)
}

function validation(instruction){
  let valid = true
  for (let i=0; i<instruction.length; i++){
    if(instruction[i] != 'f' && instruction[i] != 'b' && instruction[i] != 'r' && instruction[i] != 'l'){
      console.log("Invalid input, only f, b, r, l allowed")
      valid = false
      break;
    } 
  }
  if (valid === true){
    movement(instruction)
  }
}

function matrixCreation(size){
  
}