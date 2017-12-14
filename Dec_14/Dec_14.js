//promises

function callPromise(param1){
	console.log('Promise called');
	return new Promise(function(resolve, reject){
		if(param1 == 'hello'){
			setTimeout(function(){
				resolve('This is resolved');
			}, 5000);
		} else {
			setTimeout(function(){
				reject('This is rejected');
			}, 5000);
		}
	})
}
function print(){
	console.log('print function called')
	callPromise('hello').then(function(res){
		console.log('from then part, response is : ', res);
	}).catch(function(res){
		console.log('This is from catch part, response is: ', res);
	})	
}
function hover(){
	console.log('Hovered')
	document.getElementById('hover').style.color = "red";
}

function clickedtwice(){
	console.log('clicked twice')
	document.getElementById('dblpara').innerHTML = "I'm double clicked"
}

//Difference between ES5 n ES6

//constants

const pi = 3.414;

//rest parameters

function arr(a, ...b){
	console.log(a,b);
}

arr(1,2,3,4,5,6,7,8,9);

//arrow functions

function arr(a, ...b){
	console.log(a,b);
	b.forEach(function(item){
		console.log(item);
	});
	
	b.forEach(item=>console.log(item));
}

arr(1,2,3,4,5,6,7,8,9);
