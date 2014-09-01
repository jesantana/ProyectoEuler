PalindromResult=function(){};
PalindromResult.prototype.getEmpty= function(){
	return {palindromvalue:0};
};
PalindromResult.prototype.create= function(multiplyValue,i,j){
	return {
				palindromvalue:multiplyValue,
				i:i,
				j:j
				};
};
var palindromResultInstance=new PalindromResult();
var stringInstance= new String();


function biggestPalindrom1(n)
{
	var biggestNumberOfNDigits=Math.pow(10,n)-1;
	
	var biggestPalindrom=palindromResultInstance.getEmpty();
	
	var i=biggestNumberOfNDigits;
	var currentBiggestPal;
	
	for(i;i>0;i--)
	{
		currentBiggestPal=finBiggestPalindromeWithNAsFactor(i);
		if(currentBiggestPal.palindromvalue>biggestPalindrom.palindromvalue)
		{
			biggestPalindrom=currentBiggestPal;
		}
	}
	
	console.log(biggestPalindrom);
}

function finBiggestPalindromeWithNAsFactor(n)
{
	var i=n;
	var currentNum;
	
	for(i;i>0;i--)
	{
		currentNum=n*i;
		if(stringInstance.isPalindrom(String(currentNum)))
		{
			result=palindromResultInstance.create(currentNum,n,i);
			return result;
		}
	}
	
	return palindromResultInstance.getEmpty();
}
