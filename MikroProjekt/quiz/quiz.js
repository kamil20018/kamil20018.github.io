class question {
    constructor(q, answers, correctAnswer) {
        this.q = q;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

var questions = [];
questions[0] = new question(
    "Jaka jest inna nazwa na Stare Miasto w Sztokholmie?",
    [
        "Gamla Stan",
        "Stan Gamla",
        "Galma Stan",
        "Stan Galma"
    ],
    0
)

questions[1] = new question(
    "Jaka część statku z muzeum Vasa jest zbudowana z oryginalnych części?",
    [
        "96%",
        "97%",
        "98%",
        "99%"
    ],
    2
)

questions[2] = new question(
    "Co najczęściej jest wystawiane w galerii Fotografiska?",
    [
        "obrazy",
        "rzeźby",
        "rysunki",
        "zdjęcia"
    ],
    3
)

questions[3] = new question(
    "Kto założył muzeum skansen?",
    [
        "Mikołaj Kopernik",
        "Artur Hazelius",
        "Marek Gajęcki",
        "Jan Paweł"
    ],
    1
)