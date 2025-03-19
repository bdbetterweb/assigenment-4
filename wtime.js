function waitingTime(waitingTimes, serialNumber) {
    
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    
    if (!waitingTimes.every(num => typeof num === "number")) {
        return "Invalid Input";
    }

   
    let totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    let averageTime = Math.round(totalTime / waitingTimes.length);

    
    let remainingPeople = serialNumber - 1 - waitingTimes.length;

   
    if (remainingPeople <= 0) {
        return 0;
    }

    
    return remainingPeople * averageTime;
}


// console.log(waitingTime([3, 5, 7, 11, 6], 10)); 
// console.log(waitingTime([13, 2], 6)); 
// console.log(waitingTime([13, 2, 6, 7, 10], 6)); 
// console.log(waitingTime([6], 4)); 
// console.log(waitingTime(7, 10)); 
// console.log(waitingTime("[6,2]", 9)); 
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));
