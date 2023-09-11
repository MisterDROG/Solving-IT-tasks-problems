// What in console?

function b(x, y, a) {
	arguments[2] = 10;
	console.log(a);
}

b(1, 2, 3);

// 10