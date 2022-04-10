


let FormNew = document.forms["theForm"];
FormNew.addEventListener(`submit`,(element)=>{
	element.preventDefault();
	const formData = new FormData(element.target);
	const data = {};
	formData.forEach((acc,key) => (data[key]=acc));
	console.log(data);
})