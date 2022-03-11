
const tbody = document.querySelector('tbody');
const btn = document.querySelector('.btn');
const btnCol = document.querySelector('.btn-column');
const table = document.querySelector('table');


tbody.addEventListener('click', (e)=>{	
	if(e.target.classList.contains('active')) {
		e.target.classList.remove('active');
	} else {
		e.target.classList.add('active');
	}
});

btn.addEventListener('click', ()=>{
	let elem = tbody.querySelector('tr:last-child').cloneNode(true);
	elem.querySelectorAll('td').forEach(element => {
		element.classList.remove('active');
	});
	tbody.append(elem);
});

btnCol.addEventListener('click', ()=>{
	table.querySelectorAll('tr').forEach(element => {
		let col = element.querySelector('td:last-child').cloneNode(true);
		col.classList.remove('active');
		element.append(col);
	});
});

