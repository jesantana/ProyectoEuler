function fibonacciSumaPares(cantidadMaximaSuma)
{
	var terminoActual=2;
	var terminoAnterior=1;
	
	var sumaTotal=0;

	do
	{
		if(terminoActual%2==0){
			sumaTotal+=terminoActual;	
		}
		
		var sumaActual=terminoActual+terminoAnterior;
		terminoAnterior=terminoActual;
		terminoActual=sumaActual;
	}
	while(terminoActual<cantidadMaximaSuma);
	
	console.log(sumaTotal);
}