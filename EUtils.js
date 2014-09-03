var String=function(){;}

String.prototype.isPalindrom=function(str)
{
	return str == str.split('').reverse().join('');
}