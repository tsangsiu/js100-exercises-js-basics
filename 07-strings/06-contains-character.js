let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

// implement String.prototype.includes() myself
function includes(str, char) {
	let result = false;
	
	for (let element of str) {
		if (element === char) {
			result = true;
		}
	}
	
	return result;
}

console.log(includes(byteSequence, 'x'));