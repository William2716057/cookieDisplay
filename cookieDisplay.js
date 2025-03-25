let cookies = document.cookie.split(';').reduce((acc, cookie) => {
	let [name, value] = cookie.trim().split('=');
	acc[name] value;
	return acc;
}, {};

console.log(cookies);
