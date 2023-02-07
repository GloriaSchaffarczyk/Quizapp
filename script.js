let questions = [
    {
        'question': 'Aus wie vielen Inseln besteht Japan in etwa?',
        'answer_1': '1.500',
        'answer_2': '2.900',
        'answer_3': '4.700',
        'answer_4': '6.800',
        'right_answer': '4',
    },
    {
        'question': 'Bei welchem Fastfood-Giganten kaufen viele Japaner ihr Weihnachtsessen?',
        'answer_1': 'Kentucky Fried Chicken',
        'answer_2': 'Subway',
        'answer_3': 'Burger King',
        'answer_4': 'McDonalds',
        'right_answer': '1',
    },
    {
        'question': 'Japan hat viele außergewöhnliche Inseln. Welche Insel gibt es nicht?',
        'answer_1': 'Hasen-Insel',
        'answer_2': 'Katzen-Insel',
        'answer_3': 'Panda-Insel',
        'answer_4': 'Reh-Insel',
        'right_answer': '3',
    },
    {
        'question': 'Welches Stockwerk fehlt in den meisten japanischen Krankenhäusern?',
        'answer_1': 'Das 13. Stockwerk',
        'answer_2': 'Das 4. Stockwerk',
        'answer_3': 'Das 8. Stockwerk',
        'answer_4': 'Das 21. Stockwerk',
        'right_answer': '2',
    },
    {
        'question': 'wie viele Erdbeben gibt es in Japan etwa pro Jahr?',
        'answer_1': '1.500',
        'answer_2': '700',
        'answer_3': '250',
        'answer_4': '1.000',
        'right_answer': '1',
    },
    {
        'question': 'Welches ist das beliebteste Zahlungsmittel in Japan?',
        'answer_1': 'Bargeld',
        'answer_2': 'Kreditkarte',
        'answer_3': 'Bitcoin',
        'answer_4': 'PayPal',
        'right_answer': '1',
    },
    {
        'question': 'Was sollte man in Japan niemals tun?',
        'answer_1': 'Geräuschvoll Nudelsuppe schlürfen.',
        'answer_2': 'Essstäbchen aufrecht in den Reis stecken.',
        'answer_3': 'Sushi mit den Händen essen.',
        'answer_4': 'Nackt in heißen Quellen baden.',
        'right_answer': '2',
    },
    {
        'question': 'Was sieht man in japanischen Innenstädten eher selten?',
        'answer_1': 'Betrunkene Männer',
        'answer_2': 'Taxis',
        'answer_3': 'Mülleimer',
        'answer_4': 'Straßenlaternen',
        'right_answer': '3',
    },
    {
        'question': 'Japan ist bekannt für seine verrückten KitKat-Sorten. Welche Sorte gibt es (noch) nicht?',
        'answer_1': 'Wasabi',
        'answer_2': 'Mais',
        'answer_3': 'Sojasauce',
        'answer_4': 'Ketchup',
        'right_answer': '4',
    },
    {
        'question': 'Welches Event wird im August in Yokohama gefeiert?',
        'answer_1': 'Godzilla Invasion',
        'answer_2': 'Pikachu Outbreak',
        'answer_3': 'Hello Kitty Burst',
        'answer_4': 'Sailon Moon Takeover',
        'right_answer': '2',
    },
];

let currentQuestion = 0; //wir legen fest, dass das aktuelle JSON, das nullte JSON ist (wir fangen als bei 0 an zu zählen)
// currentQuestion erhöhen wir jedes Mal um 1, wenn wir eine Antwort auswählen bis wir beim Ende angekommen sind
let correctAnswers = 0; //da zählen wir immer hoch, wenn wir die richtige Antwort ausgewählt haben
let AUDIO_SUCCESS = new Audio('audio/success.wav');
let AUDIO_FAIL = new Audio('audio/fail.wav');
let AUDIO_YAY = new Audio('audio/yay.wav');

function init() { // die Funktion wird bei onload aufgerufen und lädt die Fragen und Antworten + die aktuelle Seitenzahl
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() { //die Funktion sorgt dafür, dass die richtige aktuelle Frage und die aktuellen Antworten geladen werden an der Stelle 0
    
    if (currentQuestion >= questions.length) {
        // Show end Screen
        document.getElementById('game-finished').classList.remove('d-none');
        document.getElementById('game-active').classList.add('d-none');
        document.getElementById('card-img-top').src = "img/win.png";
        document.getElementById('sumOfQuestions').innerHTML = questions.length;
        document.getElementById('correct-answers').innerHTML = correctAnswers;
        AUDIO_YAY.play();
    } else {
        // Show Current Question
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100); // Zahl wird gerundet
        document.getElementById('progress-bar').innerHTML = percent + ' %'; // oder `${percent} %`
        document.getElementById('progress-bar').style.width = `${percent}%`;

        let question = questions[currentQuestion];

        document.getElementById('currentPage').innerHTML = currentQuestion + 1;
        document.getElementById('question_head').innerHTML = question['question']; // wir greifen auf die Frage zu
        document.getElementById('answer_1').innerHTML = question['answer_1'] //wir greifen auf die Antworten 1-4 zu
        document.getElementById('answer_2').innerHTML = question['answer_2']
        document.getElementById('answer_3').innerHTML = question['answer_3']
        document.getElementById('answer_4').innerHTML = question['answer_4']
    }
}

/* function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question_head').innerHTML = question['question'];
    
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`];
    }
} */

function answer(selection) { // selection ist aus dem HTML Code der Wert der mitgegeben wird. Also z.B. answer('answer_1')
    let question = questions[currentQuestion]; // wir greifen auf das JSON an der Stelle 0 zu
    let selectedQuestionNumber = selection.slice(-1); // wir speichern in einer Variable die letzte Zahl der ausgewählten Antwort ab. Also 1 bei answer_1 und so weiter.

    let idOfRightAnswer = `answer_${question['right_answer']}`; //definieren einen String, der die richtige Antwort anzeigt

    if(selectedQuestionNumber == question['right_answer']) { // wir vergleichen ob der Wert der richtigen Antwort mit der letzten Zahl der gewählten Antwort übereinstimmt.
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correctAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-btn').disabled = false;
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function nextQuestion() {
    currentQuestion++; // die Variable wird z.B. von 0 auf 1 erhöht
    document.getElementById('next-btn').disabled = true; // button wird wieder disabled
    resetAnswerButtons(); // Farbe der Antworten wird zurückgesetzt
    showQuestion(); // wir rufen wieder die Funktion auf um die neue Frage anzuzeigen
}

function restartGame() {
    document.getElementById('card-img-top').src = "img/travel.png";
    document.getElementById('game-active').classList.remove('d-none'); // Fragentemplate wieder anzeigen
    document.getElementById('game-finished').classList.add('d-none'); //Endscreen ausblenden

    currentQuestion = 0; // das let kommt weg, weil wir die Variable ganz am Anfang bereits definiert haben.
    correctAnswers = 0; // hier setzen wir die Variablen einfach wieder auf null;

    init();
}
