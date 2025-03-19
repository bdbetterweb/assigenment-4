function calculateFinalScore(obj) {
 
    if (
        typeof obj !== "object" || obj === null ||
        typeof obj.name !== "string" ||
        typeof obj.testScore !== "number" || obj.testScore > 50 ||
        typeof obj.schoolGrade !== "number" || obj.schoolGrade > 30 ||
        typeof obj.isFFamily !== "boolean"
    ) {
        return "Invalid Input";
    }

    
    let finalScore = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20 : 0);

   
    return finalScore >= 80;
}


// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true })); // true
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); // false
// console.log(calculateFinalScore("hello")); // Invalid Input
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); // false
