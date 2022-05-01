/*let tasks = JSON.parse(localStorage.getItem('task')) || [];
console.log(task);

const displayTask = () =>{
	for(let i of tasks){
		let div1 = document.createElement('div');
		let h1 = document.createElement('h1');
		h1.innerText = i.name;
		let h2 =document.createElement('h2');
		h2.innerText = i.desc;
		let h3 = document.createElement('h2');
		h3.innerText = 'starts : ${i.starttime}';
		let h4 = document.createElement('h2');
		h4.innerText = 'ends : ${i.endtime}';

		let finish =document.createElement('div');
		finish.innerText = 'x';
		finish.style.color = 'red';
		finish.fontSize = 3em;

		let editButton = document.createElement('butoon');
		editButton.innerText = 'edit';

		finish.addEventListener('click', ended)
		editButton.addEventListener('click', edit);
		div.classList.add('i');
		div.setAttribute('data', i.name);
		div.append(h1,h2,h3,h4,finish,editButton);
		document.getElementById('container').appendChild(div);
		}
}*/


let tasks = JSON.parse(localStorage.getItem('Task')) || [];

const displayTask = () => {

    let strHTML = `<table><tr><th>/</th><th>TITLE</th><th>START-TASK</th><th>DAYS LEFT</th>`
    let display = document.getElementsByClassName('wraper')[0];
    for (let i = 0; i < tasks.length; i++) {
        let currObj = tasks[i]
        strHTML += `<tr class="task task-${i}"> <td onclick="completeTask(this,${i})" ondblclick="deleteTask(this,${i})">❌</td>`
        for (const key in currObj) {
            let element = currObj[key];
            if (element === false || key === "endTime" || key === "description") {
                continue;
            } else if (key === "name") {
                strHTML += `<td onclick="displayDescription(this,${i})">${element}</td>`
            } else {
                strHTML += `<td>${element}</td>`
            }
        }
        strHTML += `</tr>`;
    }
    strHTML += `</table>`
    display.innerHTML = strHTML;
}

const completeTask = (e, n) => {
    let color = e;
    if (e.textContent === '❌') {
        tasks[n]['isComplete'] = true;
        e.textContent = '✔️';
    } else {
        tasks[n]['isComplete'] = false;
        e.textContent = '❌';
    }
}
const displayDescription = (e, n) => {
    if (e.textContent === tasks[n]['name']) {
        e.textContent = `description: ${tasks[n]['description']}`;
    } else {
        e.textContent = tasks[n]['name'];
    }
}

const deleteTask = (i) => {
    let del = confirm('you sure you want to delete this task?');
    if (del) {
        tasks.splice(i, 1)
        localStorage.setItem('Task', JSON.stringify(tasks));
        displayTask();
    }
}