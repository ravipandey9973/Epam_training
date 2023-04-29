function visitLink(path) {
	if (localStorage.getItem(path) === null) {
		localStorage.setItem(path, '0');
	}
	let value = parseInt(localStorage.getItem(path));
	let newValue = value + 1;
	localStorage.setItem(path, newValue);
}

function viewResults() {
 const list=document.createElement('ul');
 let li1=document.createElement('li');
 let tex1 = document.createTextNode(`You visited Page1 ${localStorage.getItem('Page1')} time(s)`);
 let li2=document.createElement('li');
 let tex2 = document.createTextNode(`You visited Page2 ${localStorage.getItem('Page2')} time(s)`);
 let li3=document.createElement('li');
 let tex3 = document.createTextNode(`You visited Page3 ${localStorage.getItem('Page3')} time(s)`);
 li1.appendChild(tex1);
 list.appendChild(li1);
 li2.appendChild(tex2);
 list.appendChild(li2);
 li3.appendChild(tex3);
 list.appendChild(li3);
 const div=document.getElementById('content');
 div.appendChild(list);
 document.body.appendChild(div);

 localStorage.clear();
}