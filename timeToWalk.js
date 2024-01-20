function calculateWalkingTime(steps, footprintLength, speed) {
    let distanceMeters = steps * footprintLength;
    let restCount = Math.floor(distanceMeters / 500);
    let restTimeMinutes = restCount * 1;
  
    let walkingTimeHours = Math.floor(distanceMeters / 1000 / speed);
    let walkingTimeMinutes = Math.floor((distanceMeters / 1000 / speed * 60) + restTimeMinutes);
    let walkingTimeSeconds = Math.round((distanceMeters / 1000 / speed * 3600) % 60);
  
    console.log(`${String(walkingTimeHours).padStart(2, '0')}:${String(walkingTimeMinutes).padStart(2, '0')}:${String(walkingTimeSeconds).padStart(2, '0')}`);
  }
  
  // Example usage:
  calculateWalkingTime(4000, 0.60, 5);