class question {
    constructor(q, answers, correctAnswer, name) {
        this.q = q;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.name = name;
    }
}

var questions = [];
questions[0] = new question(
    "1. Jaka jest inna nazwa na Stare Miasto w Sztokholmie?",
    [
        "Gamla Stan",
        "Stan Gamla",
        "Galma Stan",
        "Stan Galma"
    ],
    0,
    "stare_miasto"
)

questions[1] = new question(
    "2. Jaka część statku z muzeum Vasa jest zbudowana z oryginalnych części?",
    [
        "96%",
        "97%",
        "98%",
        "99%"
    ],
    2,
    "muzeum_vasa"
)

questions[2] = new question(
    "3. Co najczęściej jest wystawiane w galerii Fotografiska?",
    [
        "obrazy",
        "rzeźby",
        "rysunki",
        "zdjęcia"
    ],
    3,
    "fotograf"
)

questions[3] = new question(
    "4. Kto założył muzeum skansen?",
    [
        "Mikołaj Kopernik",
        "Artur Hazelius",
        "Marek Gajęcki",
        "Jan Paweł"
    ],
    1,
    "muzeum_skansen"
)

const questionContainer = document.getElementById('container');

function generateQuestionDiv(qNum){
    let currQ = questions[qNum];

    let div = document.createElement('div');
    div.id = 'question';


    let innerText = `<h4>`+currQ.q+`</h4>`;
    for(i = 0; i < 4; i++){
        let id = qNum + "." + i;
        innerText += `
            <input type="radio" id=`+id+` name=`+currQ.name+` value="HTML">
            <label for=`+id+`>`+currQ.answers[i]+`</label><br>
        `
    }
    div.innerHTML = innerText;
    return div;
}

questionContainer.appendChild(generateQuestionDiv(0));
questionContainer.appendChild(generateQuestionDiv(1));
questionContainer.appendChild(generateQuestionDiv(2));
questionContainer.appendChild(generateQuestionDiv(3));

document.getElementById("submit").addEventListener('click', onSubmit);
function onSubmit(){
    var correctCounter = 0;
    for(i = 0; i < 4; i++){
        if(document.getElementById(i + "." + questions[i].correctAnswer).checked){
            correctCounter++;
        }
    }
    alert("Dobrze odpowiedziałeś na " + correctCounter + " z 4 pytań.");
}