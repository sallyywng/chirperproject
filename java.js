

//These functions play audio and video - you will need these and you may implement them in your work 


function playVid() {

    let vid = document.getElementById("video1");
    if (vid.paused) {
        vid.play();
        vid.volume = 0.3

    } else {
        vid.pause();
    }
}

function playAud() {

    let aud = document.getElementById("audio1");
    if (aud.paused) {
        aud.play();
        aud.volume = 0.3

    } else {
        aud.pause();
    }
}

function changechirperplustext() {
    document.getElementById('chirperplustext').innerHTML = "<h3>For 72.99 credits / month --<br> - Edit your posts within 3 hours of posting<br> - Unlock API functionality<br> - Get rid of the ads<br> - and much, much, more!<br></h3>";
}

function mypopup() {
    mywindow = window.open("chirperplus.html", "mywindow", "location=1,status=1,scrollbars=1,  width=600,height=500");
    mywindow.moveTo(0, 0);
}


function closetab() {
    let open = document.getElementById("floatingbox");
    open.remove();
}

function opentl() {
    window.location.href = 'timeline.html';
}

function openmsgs() {
    window.location.href = 'messages.html';
}

function openprofile() {
    window.location.href = 'profile.html';
}

function opennews() {
     window.open('index.html', '_blank');
}

function dmsappear() {
    if (document.getElementById('msg').style.opacity==0) {
        document.getElementById('msg').style.opacity=1;
        document.getElementById('msg').style.width="30%";
    } else {
        document.getElementById('msg').style.width="1%";
        document.getElementById('msg').style.opacity="0";
    }
    
}

function closead() {
    document.getElementById("adbg").remove();
    document.getElementById("popupad").remove();
}

function randomad() {
    const adlist = ["images/japantravelad.png", "images/gachagamead.png", "images/tiredofmarking.jpg","images/supplementad.jpg"];
    const randomItem = adlist[Math.floor(Math.random() * adlist.length)];
    document.getElementById("ad").src=(randomItem);

}
