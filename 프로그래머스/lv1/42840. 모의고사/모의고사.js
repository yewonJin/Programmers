function getScore(answers, person) {
    let score = 0;
    
    answers.forEach((answer, index) => {
        if(answer === person[index % person.length]) score++;
    })
        
    return score;
}

function solution(answers) {        
    var answer = [];
    
    var countArr = [getScore(answers, [1, 2, 3, 4, 5]), getScore(answers, [2, 1, 2, 3, 2, 4, 2, 5]), getScore(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5])];
    
    countArr.forEach((item, index) => {
        if(Math.max(...countArr) === item) answer.push(index+1)
    })

    return answer
    

}
