
function name(a,b,c){
    var d = b*b - 4*a*c;
    if(d > 0){
        var x1 = (-1*b + Math.sqrt(d))/(2*a);
        var x2 = (-1*b - Math.sqrt(d))/(2*a);
         res ={x1: x1, x2: x2}
    }
    else if(d = 0){
        var x1 = (-1*b /(2*a));
        var x2 = x1;
        res ={x1:x1, x2:x2}
    }
    else{
        result = null;
    }
    return res;
}

console.log(name(3,-12,0));