function randStories (data) {
    let stories = [
        `My ${data[0].value} is rather ${data[1].value}, but never the less, I asked ${data[2].value} to take it to ${data[4].value} and ${data[3].value} it.`,
        `I once had a ${data[0].value} which was very ${data[1].value}. One day, ${data[2].value} came by and wanted to ${data[3].value} it. Needless to say, I sent ${data[2].value} to ${data[4].value}`,
        `I saw a ${data[0].value} on my way to ${data[4].value}. It wasn't too ${data[1].value}. But I could swear ${data[2].value} will ${data[3].value} it.`
    ];

    let max = stories.length;
    let index = Math.floor(Math.random() * max);
    return stories[index];
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