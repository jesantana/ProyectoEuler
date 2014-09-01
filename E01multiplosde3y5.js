function sumaDemultiplosDe3y5(hasta)
{
	var i=1;
	var sum=0;
	var listOfNumbers=[];
	
	for(i;i<hasta;i++)
	{
		if(i%5==0 || i%3==0)
		{
			sum+=i;
			listOfNumbers[listOfNumbers.length]=i;
		}
	}
	
	console.log("Hay "+sum);
	console.log("Lista "+listOfNumbers);
}