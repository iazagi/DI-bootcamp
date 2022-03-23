
for (i=1; i<=6; i++) {
    if (i==1) {console.log('*');}
    if (i==2) {console.log('* *');}
    if (i==3) {console.log('* * *');}
    if (i==4) {console.log('* * * *');}
    if (i==5) {console.log('* * * * *');}
    if (i==6) {console.log('* * * * * *');}
}


for (index=1; index<=6; index++) {
    let star = "";
    for (i=1; i<=index; i++) {
        star+="* ";
    }
    console.log(star);
}

