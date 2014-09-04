function squareSum(n)
{
	var sumaCuadrados=n*(n+1)*(2*n+1)/6;
	var cuadradosSuma=Math.pow(n*(n+1)/2,2);
	
	var total=cuadradosSuma-sumaCuadrados;
	
	console.log(total);
	return total;
}