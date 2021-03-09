module.exports = function reverse(n) {
	if (n < 0) {
		n = n * -1;
	}
	const str = String(n);
	let arr = [];
	for (let i = str.length - 1; i >= 0; i--) {
		arr.push(str[i]);
	}
	const newStr = arr.join('');
	return Number(newStr);
}
