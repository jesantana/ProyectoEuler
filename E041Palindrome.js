var Candidato=function(x,y,producto)
{
	this.x=x;
	this.y=y;
	this.producto=producto;
}

var ConjuntoCandidatos=function()
{
	this.candidatos=[];
	this.mayorNumeroAInsertar=undefined;
	
	var InfoProducto=function(y,prod)
	{
		this.factorDerecho=y;
		this.producto=prod;
	}
	
	this.init=function(n)
	{
		this.mayorNumeroAInsertar=Math.pow(10,n)-1;
		this.crearProximoCandidato();
	};
	
	this.crearProximoCandidato=function()
	{
		if(this.mayorNumeroAInsertar>0){
			this.candidatos[this.mayorNumeroAInsertar]=new InfoProducto(this.mayorNumeroAInsertar,Math.pow(this.mayorNumeroAInsertar,2));
			this.mayorNumeroAInsertar=this.mayorNumeroAInsertar-1;
		}
	};
	
	this.existenCandidatos=function()
	{
		return this.candidatos.length;	
	};
	
	this.hallaCandidatoConMayorProducto=function()
	{
		console.log("hallaCandidatoConMayorProducto");
		var maxProducto=0;
		var indiceDeMaxProd=-1;
		
		for(var indiceActual in this.candidatos)
		{
			console.log("indiceActual "+indiceActual);
			console.log("this.candidatos "+this.candidatos);
			if(this.candidatos[indiceActual].producto>maxProducto)
			{
				maxProducto=this.candidatos[indiceActual];
				indiceDeMaxProd=indiceActual;
			}
		}
		console.log("hallaCandidatoConMayorProducto 2");
		if(this.candidatos[indiceDeMaxProd].producto<Math.pow(this.mayorNumeroAInsertar,2))
		{
			console.log("Es menor que el mayor numero a insertar 2");
			indiceDeMaxProd=this.mayorNumeroAInsertar;
			this.crearProximoCandidato();
		}
		console.log("hallaCandidatoConMayorProducto 3 "+indiceDeMaxProd+" this.candidatos[this.indiceDeMaxProd] "+this.candidatos[indiceDeMaxProd]);
		
		return new Candidato(indiceDeMaxProd,this.candidatos[indiceDeMaxProd].factorDerecho,this.candidatos[indiceDeMaxProd].producto);
	}
	
	this.decrementaCandidato=function(candidato)
	{
			if(this.candidatos[candidato.x].factorDerecho>1)
			{
				this.candidatos[candidato.x].factorDerecho-=1;
				this.candidatos[candidato.x].producto=candidato.x*this.candidatos[candidato.x].factorDerecho;
			}
			else
			{
				this.candidatos.splice(candidato.x,1);
			}
	}

}

function biggestPalindrom2(n)
{
	var candidatos=new ConjuntoCandidatos();
	var palindrome=undefined;
	var stringInstance=new String();
	candidatos.init(n);
	
	while(candidatos .existenCandidatos() && palindrome===undefined){
		var candidatoMayorProd=candidatos.hallaCandidatoConMayorProducto();
		console.log("Candidato escogido "+candidatoMayorProd.producto +"  "+candidatoMayorProd.x +"  "+candidatoMayorProd.y );
		if(!stringInstance.isPalindrom(candidatoMayorProd.producto.toString()))
		{
			candidatos.decrementaCandidato(candidatoMayorProd);
		}
		else
		{
			palindrome=candidatoMayorProd.producto;
		}
	}
	
	console.log(palindrome);
	return palindrome
}

