var numbers = [ 2, 3, 4, 5, 6, 7, 8];

var evens = numbers.filter(filterOdds);

console.log(evens);
    
    function filterOdds(item) {
        if ( items % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }