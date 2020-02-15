// Code your solution in this file!

function  distanceFromHqInBlocks(num){
  return(num < 42 ? (42 - num) : (num - 42))
}

function  distanceFromHqInFeet(num){
  return(distanceFromHqInBlocks(num) * 264)
}

function distanceTravelledInFeet(pt1, pt2){
  return (264 * (pt1 < pt2 ? (pt2 - pt1) :  (pt1 - pt2)))
}

function calculatesFarePrice(start, destination){
  dtf = distanceTravelledInFeet(start, destination)
  switch(dtf){
    case dtf < 400: 
      return 0;
    case dtf > 400 && dtf < 2000:
      
  }
}