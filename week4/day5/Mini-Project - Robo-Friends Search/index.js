const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
];

//function to addd robots card to the html
function RobotCard (robot) {
    let robotCard = document.createElement('div');
    robotCard.id = `robo${robot.id}`;
    robotCard.className = 'card';
    
    let botImg = document.createElement('img');
    botImg.src = robot.image;
    //console.log(botImg)
    let botName = document.createElement('h3');
    botName.innerText = robot.name;
    //console.log(botName)
    let botEmail = document.createElement('div');
    botEmail.innerText = robot.email;
   // console.log(botEmail)
    robotCard.appendChild(botImg);
    robotCard.appendChild(botName);
    robotCard.appendChild(botEmail);       

    document.querySelector('.container').appendChild(robotCard);
    //console.log("good")
}
///call function add cards of robots
robots.forEach((robot) => RobotCard(robot));


////search bar add E listener to search bar
document.querySelector('#search').addEventListener('keyup',(e)=>
    robots.forEach((robo)=> {
      //chack if the value in the search bar is in the name of one of the robots
      //if not hides the card else remove the class .hide
        if (!robo.name.toLowerCase().includes(e.target.value.toLowerCase())){
            document.querySelector(`#robo${robo.id}`).classList.add('hide');
        } else {
            document.querySelector(`#robo${robo.id}`).classList.remove('hide');
        }
    }))