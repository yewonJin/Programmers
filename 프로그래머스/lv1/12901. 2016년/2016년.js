function solution(a, b) {
    var month_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        
    var day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']

    var sum = 0;
    
    // 월 to 일 계산
    for(let i = 0; i < a-1; i++) sum += month_days[i];                
    
    sum += b-1
    
    return day[sum % 7]
}