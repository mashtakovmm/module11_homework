// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.


// returns percent of number with up to 2 decimals
// accepts floats and ints 
function getPercents(percent, number) {
    if(isNaN(number*1) || isNaN(percent*1)) {
        return "Error"
    } else {
        return Math.round((number*percent*0.01 + Number.EPSILON) * 100) / 100
    }
}

module.exports = getPercents;