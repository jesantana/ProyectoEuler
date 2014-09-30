function findNumbersAddUpTo (filterFunction,totalSum,numberOfNumbers,builtSet,lastNumberAdded){

	if(builtSet===undefined){
		builtSet=[];
	}
	
	if(lastNumberAdded===undefined){
		lastNumberAdded=1;
	}

	if(numberOfNumbers===1 && totalSum>lastNumberAdded){
		builtSet.push(totalSum);
		filterFunction(builtSet);
		builtSet.pop();
	}
	else{
		var maxValforI=totalSum/numberOfNumbers
		for(var i=lastNumberAdded;i<maxValforI;i++){
			builtSet.push(i);
			findNumbersAddUpTo(filterFunction,totalSum-i,numberOfNumbers-1,builtSet,i);
			builtSet.pop();
		}
	}
}

var isPithagorianTriplet=function (setOfNumbers){
	setOfNumbers.sort();
	
	if(Math.pow(setOfNumbers[0],2)+ Math.pow(setOfNumbers[1],2)===Math.pow(setOfNumbers[2],2)===true){
		console.log(setOfNumbers[0]*setOfNumbers[1]*setOfNumbers[2]);
	}
}