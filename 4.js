/*Given an array of numbers, return a new array where each number is
squared.
Input: [2, 4, 6]
Expected Output: [4, 16, 36]*/

var data= [2, 4, 6];
var Data= x(data);
function x (y){
    return y.map(x=>x*x);
}
console.log(Data)


