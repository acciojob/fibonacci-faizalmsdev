function fibonacci(num) {
	int a=0,b=1,c,i;
	if(num ==0){
		return a;
	}
	for(i=2;i<=num;i++){
		c =a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
