//Depends on E03MayorFactorPrimo.js

MinimalFactorEntry=function(valor,pos){
	this.valor=valor;
	this.posicion=pos;
}

MinimalFactorEntry.prototype.equals=function(other)
{
	return this.valor===other.valor && this.posicion===other.posicion;
}

MinimalFactorEntry.prototype.toString=function()
{
	return +this.valor+":"+this.posicion;
}

MinimalFactorSet=function()
{
	this.alreadyStoredEntries=[];
};

MinimalFactorSet.prototype.toString=function()
{
	var result="[";
	var i=0;
	
	for(i;i<this.alreadyStoredEntries.length;i++)
	{
		result+=this.alreadyStoredEntries[i]+" , ";
	}
	result+="]";
	return result;
}
MinimalFactorSet.prototype.createEntriesFromArray=function(array)
{
	var result=[];
	var allocatedNumbers=[];
	var i=0;
	
	for(i;i<array.length;i++)
	{
		if(allocatedNumbers[array[i]]===undefined)
		{
			allocatedNumbers[array[i]]=0;
		}
		result[i]=new MinimalFactorEntry(array[i],allocatedNumbers[array[i]]);
		allocatedNumbers[array[i]]+=1;
	}
	
	return result;
}
MinimalFactorSet.prototype.union=function(newEntries)
{
	var i,j=0;
	var found=false;
	console.log("Merging this "+this.alreadyStoredEntries+" con "+newEntries);
	
	for(i=0;i<newEntries.length;i++)
	{
		found=false;
		for(j=0;j<this.alreadyStoredEntries.length;j++)
		{
			if(newEntries[i].equals(this.alreadyStoredEntries[j]))
			{
				found=true;
				break;
			}
		}
		if(!found)
		{
				this.alreadyStoredEntries[this.alreadyStoredEntries.length]=newEntries[i];
				console.log("Added "+this.alreadyStoredEntries);
		}
	}
}



function findSmallestNumberDivisibleByIntegerLowerThanN(n)
{
	var i=2;
	var result=1;
	var insMinimalFactorSet=new MinimalFactorSet();
	
	for(i;i<=n;i++)
	{
		var factoresPrimosI=factoresPrimos(i);
		
		var factoresPrimosConPosicion=insMinimalFactorSet.createEntriesFromArray(factoresPrimosI);
		insMinimalFactorSet.union(factoresPrimosConPosicion);
	}
	
	for(i=0;i<insMinimalFactorSet.alreadyStoredEntries.length;i++)
	{
		result*=insMinimalFactorSet.alreadyStoredEntries[i].valor;
	}
	
	console.log(result);
}

