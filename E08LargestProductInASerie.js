function findLargestProductInASerie(chainStr,numberOfDigits){
	var chain=arrayFromString(chainStr);
	arrayReplaceAll(chain,0,-1);
	console.log(chain);
	var currentProduct=1;
	var maxProduct=1;
	var maxArray=[];
	var i=0;
	
	for(i=0;i<chain.length;i++){
		if(i<numberOfDigits){
			console.log("i<numberOfDigits");
			currentProduct*=chain[i];
		}
		else{
			console.log("current product "+currentProduct);
			console.log("chain chain[i-numberOfDigits] "+chain[i-numberOfDigits]);
			console.log("chain[i] "+chain[i]);
			
			if(chain[i-numberOfDigits]!==0){
				currentProduct=currentProduct/chain[i-numberOfDigits];
				console.log("current product 2 "+currentProduct);
				currentProduct*=chain[i];
				console.log("current product 3 "+currentProduct);
			}
			else{
				currentProduct=1;
			}
			
			
			if(currentProduct>maxProduct){
				maxProduct=currentProduct;
				maxArray=arrayExtractSubArray(chain,i-numberOfDigits+1,i);
			}
		}
	}
	
	console.log(maxProduct);
	console.log(maxArray);
	return maxProduct;	
}


function arrayExtractSubArray(array,from,to){
	var i=0;
	
	var result=[];
	for(i=from;i<=to;i++){
		result[result.length]=array[i];
	}
	
	return result;
}

function arrayFromString(str){
	var result=[];
	var i=0;
	for(i=0;i<str.length;i++){
		result[result.length]=Number(str[i]);
	}
	
	return result;
}

function arrayReplaceAll(array,oldValue,newValue){
	var i=0;
	for(i;i<array.length;i++){
		if(array[i]===oldValue){
			array[i]=newValue;
		}
	}
}