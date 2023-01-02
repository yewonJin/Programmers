function solution(numbers, hand) {
    var left = [1, 4, 7, -1]
    var right = [3, 6, 9, -1]
    var mid = [2, 5, 8, 0]
    
    var pos = [-1, -1];
    
    function getDistance(number) {   
        let distance = [0, 0]

        if(left.includes(pos[0])) {
            distance[0] = Math.abs(mid.indexOf(number) - left.indexOf(pos[0])) + 1
        } else {
            distance[0] = Math.abs(mid.indexOf(number) - mid.indexOf(pos[0]))
        }

        if(right.includes(pos[1])) {
            distance[1] = Math.abs(mid.indexOf(number) - right.indexOf(pos[1])) + 1
        } else {
            distance[1] = Math.abs(mid.indexOf(number) - mid.indexOf(pos[1]))
        }

        return [distance[0], distance[1]]
    }
    
    var result = numbers.map((number) => {
        if(left.includes(number)) {
            pos[0] = number;
            return 'L'
        } else if(right.includes(number)) {
            pos[1] = number;
            return 'R'
        } else {
            let distance = getDistance(number);
                        
            if(distance[0] > distance[1]) {
                pos[1] = number;
                return 'R';
            } else if (distance[0] < distance[1]) {
                pos[0] = number;
                return 'L'
            } else {
                if(hand === 'left') {
                    pos[0] = number;
                    return 'L'
                } else {
                    pos[1] = number;
                    return 'R';
                }
            }
            
        }
        
    })
        
    return result.join("")
}