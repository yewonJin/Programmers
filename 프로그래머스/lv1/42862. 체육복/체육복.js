function solution(n, lost, reserve) {    
    // lost, reserve에 중복되는 숫자 제거
    var new_lost = lost.filter(x => !reserve.includes(x));    
    var new_reverse = reserve.filter(x => !lost.includes(x));
    
    new_lost.sort((a, b) => a-b);
    new_reverse.sort((a, b) => a-b);
            
    var answer = n - new_lost.length;
                
    for(const number of new_lost) {           
        if(new_reverse.includes(number-1)) {
            answer++;
            new_reverse.splice(new_reverse.indexOf(number-1), 1);
            continue;
        }       
        
        if(new_reverse.includes(number+1)) {
            answer++;
            new_reverse.splice(new_reverse.indexOf(number+1), 1);
            continue;
        }             
    }
    return answer;
}