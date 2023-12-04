function solution(babbling) {
    const pronunciations = ["aya", "ye", "woo", "ma"];
    
    let count = 0;
    
    babbling.forEach((word) => {
        // 연속된 발음 있는지 체크        
        const isContinuous = pronunciations.map((pronunciation) => {
            if(word.match(pronunciation + pronunciation)) return true;            
            
            return false
        }).some((item) => item);  
    
        // 연속된 발음 있으면 건너뛰기
        if(isContinuous) return;
                                
        let words = word;
        
        pronunciations.forEach((pronunciation) => {                        
            words = words.replaceAll(pronunciation, '-');
        })
        
        const answer = words.replaceAll('-', '');
                            
        if(answer !== '') return;
        
        count++        
    })                       
    
    return count
}