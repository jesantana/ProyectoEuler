//(a+b...+z)2-(a2+b2+...+z2)=2(ab+ac+...+az+bc...+bz+..yz)=2(a(b+c..+z)+b(c+d..z)...+yz)

function squareSum(n)
{
	var total=0;
	var numeroActual=1;
	
	var sumaActual=0;
	//Hallar la suma de todos los elementos
	sumaActual=n*(n+1)/2;
	
	for(numeroActual=1;numeroActual<n;numeroActual++)
	{
		sumaActual-=numeroActual;
		total+=numeroActual*sumaActual;
		
	}
	
	total=2*total;
	
	console.log(total);
	return total;
}