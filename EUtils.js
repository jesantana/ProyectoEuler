var String=new Object();

String.prototype.isPalindrom=function(str)
{
	return str == str.split('').reverse().join('');
}