var under=require('underscore');

console.log(primeSumFunctional(2000000));

function primeSumFunctional(n){
	return under.reduce(under.filter(under.range(n),isPrime),sum,0);
}

function isPrime(n){

	function doesntDivideN(m){
		return n%m!=0;
	}
	
	return n>1 && under.every(under.range(2,Math.floor(Math.sqrt(n))+1),doesntDivideN);
}

function sum(n,m){
	return n+m;
}