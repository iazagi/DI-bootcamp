let tasks = JSON.parse(localStorage.getItem('Task')) || [];

const displayTask = () => {

    let strHTML = `<table><tr><th>/</th><th>TITLE</th><th>START-TASK</th><th>DAYS LEFT</th>`
    let display = document.getElementsByClassName('container')[0];
    for (let i = 0; i < tasks.length; i++) {
        let currObj = tasks[i]
        strHTML += `<tr class="task task-${i}"> <td onclick="taskComplete(this,${i})" ondblclick="deleteTask(this,${i})">❌</td>`
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

const taskComplete = (element, index) => {
    let color = element;
    if (element.textContent === '❌') {
        tasks[index]['isComplete'] = true;
        element.textContent = '✔️';
    } else {
        tasks[index]['isComplete'] = false;
        element.textContent = '❌';
    }
}
const displayDescription = (element, index) => {
    if (element.textContent === tasks[index]['name']) {
        element.textContent = `description: ${tasks[index]['description']}`;
    } else {
        element.textContent = tasks[index]['name'];
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
window.onload = displayTask();
