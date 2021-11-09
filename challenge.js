function gradingStudents(grades) {
    // Write your code here
    let newGrades = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] >= 38){
            if(grades[i] % 5 >= 3){
                newGrades.push(Math.ceil(grades[i]/5)*5);
            } else {
            newGrades.push(grades[i]);
        }
        } else {
            newGrades.push(grades[i]);
        }
    }
    return(newGrades);
}
