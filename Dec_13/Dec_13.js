var number = 10;

number -= 2;
number = number - 2;
//increment
number++;
//decrement
number--;

//array

//slice(startingIndex, endingIndex), starting index is inc. and ending is exc., it does not make any changes in original array
// its return type is array
arr = [1,2,3,4,5]

arrNew = arr.slice(1,4)

//slice(s,e) both are inc. and it make chaanges in original array

//forEach loop - return type is void

arr.forEach(function(currentValue, index, array){
	console.log(currentValue, index, array);
})

//filter - return type is array

newArray = arr.filter(function(currentValue, index, array){
	return currentValue % 2 == 0;
})

//reduce - returns final value after reduction

arr.reduce(function(sum, item){
	console.log("sum is: ", sum, "current value is: ", item);
	return sum + item;
}, 0);

//map - returns type is array

arr.map(function(currentValue, index, array){
	return currentValue += 2;
});

//push and pop

arr.push(10);//push 10 from last in array
//return type is final array length
console.log(arr);

arr.pop();//removes one element from last
//returns removed element
console.log(arr);

//unshift and shift

arr.unshift(10);//unshift 10 from beginning in array
//return type is final array length
console.log(arr);

arr.shift();//removes one element from beginning
//returns removed element
console.log(arr);

//indexOf - return type is index
arr.indexOf(4);
//returns index of 4 in array

//string
name = "nitinpahal";

//slice
name.slice(0,4)
//returns "niti"

//split
name.split("i")
//returns array = ["n", "t", "npahal"]

//concat
name = 'nitin';
name.concat(' pahal')
//returns "nitin pahal"

//indexOf
name.indexOf('t')
//returns 2

//toUpperCase
name.toUpperCase()
//returns "NITIN"

//toLowerCase
name.toLowerCase()
//returns "nitin"


//function function_name(){}
function abc(/*function parameter*/param1, param2){
	///function body
}

//calling a function
abc(1, 'name');

//anonymous function
//assigning an anonymous function to  variable
var myFunction = function(){
	console.log('hello from anonymous function');
}
myFunction();

//IIFE - Immediately invoking function expression or Self-invoking functions
(function(){
	console.log('I\'m an IIFE');
})();

//callbacks

function myCallback(callParam){
	console.log('>>>2<<< reached in callback ', callParam);
}

function useCallback(callback){
	console.log('>>>1<<< useCallback function called');
	callback('hello');
	console.log('>>>3<<< callback completed');
}

useCallback(myCallback);

useCallback(function(param){
	console.log('I am an anonymous callback ', param)
});