function factoresPrimos(n)
{
	var factoresPrimos=[];
	var number=n;
	while(number>1){
		var mayorDivisorPosible=Math.floor(Math.sqrt(number));
		var dividido=false;
		
		for(var i=2;i<=mayorDivisorPosible;i++)
		{
			if(number%i==0)
			{
				factoresPrimos[factoresPrimos.length]=i;
				number=number/i;
				dividido=true;
				break;
			}
		}
		
		if(!dividido)
		{
			factoresPrimos[factoresPrimos.length]=number;
			number=number/number;
		}
	}
	
	console.log(factoresPrimos);
	
	return factoresPrimos;
}