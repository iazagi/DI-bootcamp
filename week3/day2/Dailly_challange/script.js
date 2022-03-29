function randStories (data) {
    let textS = [`I have a ${data[1].value} ${data[0].value} so ${data[1].value} it can't fit my hat, 
        my ${data[3].value} ${data[2].value} that my ${data[0].value} can replace the ${data[4].value}`    
    ];

    let max = textS.length;
    let index = Math.floor(Math.random() * max);
    return texts[index];
    

}

function arrayInput (event) {
    event.preventDefault();
    let missingInput = 0;
    const data = document.getElementsByTagName('input');
    for (let item of data) {
        if (item.value == "") {
            item.style.backgroundColor = "red";
            missingInput++;
        } else {
            item.style.backgroundColor = "white";
        }
    }
    if (missingInput > 0) {
        alert("You must fill out all fields");
    } else {
        document.getElementById('story').innerHTML = randStories(data);
    }
}

const Butt = document.querySelector('#lib-button');
Butt.addEventListener('click', arrayInput);