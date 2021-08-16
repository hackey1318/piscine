window.onload = function() {
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let clock = "오전";
    if(hour > 12){
        clock = "오후";
        hour -= 12;
    }
    document.body.children[1].children[0].setAttribute('datetime', clock + " " + hour + ":" + min + ":" + sec);
    document.body.children[1].children[0].innerHTML = clock + " " + hour + ":" + min + ":" + sec;
    document.body.children[1].children[1].append(li1, li2, li3, li4);
    document.body.children[1].children[1].children[0].append("Screen: " + screen.width + " * " + screen.height);
    document.body.children[1].children[1].children[1].append("Window Outer: " + window.outerWidth + " * " + window.outerHeight);
    document.body.children[1].children[1].children[2].append("Window Inner: " + window.innerWidth + " * " + window.innerHeight);
    document.body.children[1].children[1].children[3].append("Document: " + document.body.scrollWidth + " * " + document.body.scrollHeight);
};