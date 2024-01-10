function decimalToBinary(num) {
  // your code here
	 return (num >>> 0).toString(2);
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));