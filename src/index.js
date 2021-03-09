
exports.min = function min(arr){
    return(arr&&arr.length)? Math.min.apply(null, arr): 0;
}

exports.max = function max(arr){
    return(arr&&arr.length)? Math.max.apply(null, arr) : 0;
}

exports.avg = function avg(arr){
let calc, summ=0;
if (arr&&arr.length){
 for(i=0; i<arr.length; i++){
   summ=summ+arr[i];
 }
  return(calc=summ/arr.length);
}
else{
  return(0);
}
}
