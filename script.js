let questions = [
    {
        'question': 'Aus wie vielen Inseln besteht Japan in etwa?',
        'answer_1': '4',
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
        'answer_1': 'Das 13. Stockwerk.',
        'answer_2': 'Das 4. Stockwerk.',
        'answer_3': 'Das 8. Stockwerk.',
        'answer_4': 'Das 3. Stockwerk.',
        'right_answer': '2',
    },
    {
        'question': 'wie viele Erdbeben gibt es in Japan etwa pro Jahr?',
        'answer_1': '1.500',
        'answer_2': '500',
        'answer_3': '6.000',
        'answer_4': '200',
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
        'question': 'Was sieht man in japanischen Innenstädten besonders selten?',
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

let currentQuestion = 0;

function init() {
    document.getElementById('page').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question_head').innerHTML = question['question'];
}