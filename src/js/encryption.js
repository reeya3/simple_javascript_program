let str = prompt('enter any alphanumeric char', "");
let b=0;
let newstr = '';
for (let i = 0; i<=str.length ;  i++) {

	b = str.charCodeAt(i);
	newstr += String.fromCharCode(b+2);
}

alert(newstr);

