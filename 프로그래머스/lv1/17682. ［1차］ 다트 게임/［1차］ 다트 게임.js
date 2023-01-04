function solution(dartResult) {
    var answer = [];
    
    var arr = dartResult.match(/[\d]{1,2}[S,D,T][*,#]|[\d]{1,2}[S,D,T]/g)            
                      
    for(let i = 0; i < arr.length; i++) {
        let number = parseInt(arr[i].match(/[\d]{1,2}/));
        
        if(arr[i].match(/[S]/)) answer.push(number);
        if(arr[i].match(/[D]/)) answer.push(number**2);
        if(arr[i].match(/[T]/)) answer.push(number**3);
        
        if(arr[i].match(/[*]/)) {
            if(answer[i]) answer[i] *= 2
            if(answer[i-1]) answer[i-1] *= 2
        }
        
        if(arr[i].match(/[#]/)) {
            if(answer[i]) answer[i] *= -1
        }
    }

    return answer.reduce((acc, cur) => acc + cur)
}
