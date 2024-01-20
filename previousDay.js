function calculatePreviousDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day); // Month is zero-based
    currentDate.setDate(currentDate.getDate() - 1);
  
    let previousDay = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()}`;
    console.log(previousDay);
  }
  calculatePreviousDay(2016, 9, 30);
   