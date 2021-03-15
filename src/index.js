
exports.min = function min (array) {
    if (!array || array.length == 0) return 0;
  return array.reduce((acc, current) => {return acc < current ? acc : current});
}

exports.max = function max (array) {
    if (!array || array.length == 0) return 0;
    return array.reduce((acc, current) => {return acc > current ? acc : current});
}

exports.avg = function avg (array) {
    if (!array || array.length == 0) return 0;
  return array.reduce((acc, current) => {return acc + current}) / array.length;
}

