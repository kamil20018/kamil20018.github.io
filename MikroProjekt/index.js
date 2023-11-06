window.addEventListener("load", activateImageResize);

function activateImageResize() {
    document.getElementById("youtube").addEventListener("click", () => {window.open('http://www.youtube.com', '_blank')});
    document.getElementById("twitter").addEventListener("click", () => {window.open('http://www.twitter.com', '_blank')});
    document.getElementById("github").addEventListener("click", () => {window.open('https://github.com/kamil20018', '_blank')});
    handleComments();

    resizeImages();
    window.addEventListener("resize", resizeImages);
}

function handleComments(){
    document.getElementById("comment").addEventListener("click", () => {
        let name = document.getElementById("nick");
        if(!validateName(name.value)){
            alert("Imię może zawierać wyłącznie polskie litery");
            return;
        }
        let mail = document.getElementById("mail");
        if(!validateMail(mail.value)){
            alert("W mailu nie ma małpy, lub są polskie litery");
            return;
        }
        let age = document.getElementById("age");
        if(!validateAge(age.value)){
            return;
        }
        let commentText = document.getElementById("commentText");

        document.getElementById("comments").innerHTML += `
        <div class="single_comment">
        <h3>`+ name.value +' '+ age.value +', '+ mail.value + `</h3>
        <div>`+commentText.value+`</div>
        </div>
        `
        ;
        console.log("fine");
    })

}

function validateName(name){
    let regex = /^[\s\p{L}]+$/u; //ukradziony ale działa
    return regex.test(name);
}

function validateMail(mail){
    let regex = /[a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+/ //nie miałem siły na nic mądrzejszego
    return regex.test(mail);

}

function validateAge(age){
    let regex = /[0-9]+/;
    if(regex.test(age)){
        let ageInt = parseInt(age);
        if(ageInt < 18){
            alert("za mlody jesteś");
            return false;
        }

        if(ageInt > 120){
            alert("powinieneś już nie żyć");
            return false;
        }
        return true;
    } 
    return false;

}


function resizeImages() {
    var images = document.getElementsByClassName("img");
    for (var i = 0; i < images.length; i++) {
        console.log(images[i].height);
        images[i].addEventListener("load", () => { images[i].width = images[i].height;});
    }
    document.getElementById("filler").height = images[i].height;
}