const questions = [
    {
        question: "Bagaimana cara menyapa teman sebaya di Jawa?",
        options: [
            "Halo, kamu apa kabar?",
            "Sugeng enjing, sampeyan sehat?",
            "Nuwun sewu, kulo nyuwun pirsa"
        ],
        correct: 0
    },
    {
        question: "Bagaimana menyapa guru di sekolah?",
        options: [
            "Piye kabare?",
            "Sugeng enjing, Pak/Bu!",
            "Opo kabare, Pak/Bu?"
        ],
        correct: 1
    },
    {
        question: "Bagaimana menyapa orang tua dengan hormat?",
        options: [
            "Sugeng enjang, simbah",
            "Piye, simbah?",
            "Kabar apik, mbah?"
        ],
        correct: 0
    },
    {
        question: "Kalimat yang sesuai untuk meminta maaf secara halus dalam bahasa Jawa adalah?",
        options: [
            "Nuwun sewu, kula nyuwun ngapunten.",
            "Sugeng enjang, kula nggih.",
            "Matur nuwun sanget."
        ],
        correct: 0
    },
    {
        question: "Ungkapan yang benar untuk mengucapkan terima kasih dalam krama inggil adalah?",
        options: [
            "Nuhun, sampeyan apik.",
            "Matur nuwun sanget.",
            "Sugeng rawuh, nuhun."
        ],
        correct: 1
    },
    {
        question: "Bagaimana cara memanggil teman dengan bahasa ngoko?",
        options: [
            "Mas/Mbak",
            "Sampeyan",
            "Kowe"
        ],
        correct: 2
    },
    {
        question: "Saat berbicara dengan orang yang lebih tua, kata yang digunakan untuk 'makan' adalah?",
        options: [
            "Mangan",
            "Nedha",
            "Dhahar"
        ],
        correct: 2
    },
    {
        question: "Apa arti dari 'Sugeng dalu'?",
        options: [
            "Selamat pagi",
            "Selamat malam",
            "Selamat siang"
        ],
        correct: 1
    },
    {
        question: "Kata yang digunakan untuk menggantikan 'saya' dalam bahasa Jawa halus adalah?",
        options: [
            "Aku",
            "Kula",
            "Sampeyan"
        ],
        correct: 1
    },
    {
        question: "Bagaimana cara mempersilakan orang tua duduk dalam bahasa Jawa halus?",
        options: [
            "Kula nyuwun pinarak.",
            "Mangga pinarak.",
            "Sugeng lenggah."
        ],
        correct: 1
    },
    {
        question: "Ungkapan yang benar untuk mengucapkan 'selamat pagi' dalam bahasa Jawa adalah?",
        options: [
            "Sugeng enjing",
            "Sugeng rawuh",
            "Selamet pagi"
        ],
        correct: 0
    },
    {
        question: "Apa arti kata 'Sampun' dalam bahasa Jawa?",
        options: [
            "Belum",
            "Sudah",
            "Tidak"
        ],
        correct: 1
    },
    {
        question: "Bagaimana cara mengucapkan permisi dalam bahasa Jawa?",
        options: [
            "Nuwun sewu",
            "Nyuwun pangapunten",
            "Matur nuwun"
        ],
        correct: 0
    },
    {
        question: "Kalimat mana yang tepat untuk berbicara dengan orang yang lebih tua?",
        options: [
            "Kowe arep menyang endi?",
            "Sampeyan arep menyang endi?",
            "Aku arep menyang endi?"
        ],
        correct: 1
    },
    {
        question: "Bagaimana cara mengatakan 'terima kasih' kepada seseorang yang lebih tua?",
        options: [
            "Matur nuwun",
            "Nuwun sewu",
            "Sampun matur"
        ],
        correct: 0
    },
    {
        question: "Bagaimana cara mengucapkan selamat tidur dalam bahasa Jawa?",
        options: [
            "Sugeng dalu",
            "Selamet wengi",
            "Sampun selamet"
        ],
        correct: 0
    },
    {
        question: "Bagaimana cara mengucapkan 'selamat datang' dalam bahasa Jawa?",
        options: [
            "Sugeng rawuh",
            "Sugeng enjing",
            "Selamat datang"
        ],
        correct: 0
    },
    {
        question: "Bagaimana cara menyapa teman sebaya di Jawa?",
        options: [
            "Halo, kamu apa kabar?",
            "Sugeng enjing, sampeyan sehat?",
            "Nuwun sewu, kulo nyuwun pirsa"
        ],
        correct: 0
    },
    {
        question: "Bagaimana menyapa guru di sekolah?",
        options: [
            "Piye kabare?",
            "Sugeng enjing, Pak/Bu!",
            "Opo kabare, Pak/Bu?"
        ],
        correct: 1
    },
    {
        question: "Bagaimana menyapa orang tua dengan hormat?",
        options: [
            "Sugeng enjang, simbah",
            "Piye, simbah?",
            "Kabar apik, mbah?"
        ],
        correct: 0
    },
    {
        question: "Kalimat yang sesuai untuk meminta maaf secara halus dalam bahasa Jawa adalah?",
        options: [
            "Nuwun sewu, kula nyuwun ngapunten.",
            "Sugeng enjang, kula nggih.",
            "Matur nuwun sanget."
        ],
        correct: 0
    },
    {
        question: "Ungkapan yang benar untuk mengucapkan terima kasih dalam krama inggil adalah?",
        options: [
            "Nuhun, sampeyan apik.",
            "Matur nuwun sanget.",
            "Sugeng rawuh, nuhun."
        ],
        correct: 1
    },
    {
        question: "Apa arti dari 'Sugeng dalu'?",
        options: [
            "Selamat pagi",
            "Selamat malam",
            "Selamat siang"
        ],
        correct: 1
    },
    {
        question: "Bagaimana cara mempersilakan orang tua duduk dalam bahasa Jawa halus?",
        options: [
            "Kula nyuwun pinarak.",
            "Mangga pinarak.",
            "Sugeng lenggah."
        ],
        correct: 1
    },
    {
        question: "Apa makna kata 'kula' dalam bahasa Jawa?",
        options: [
            "Saya (bahasa halus)",
            "Kamu (bahasa halus)",
            "Dia (bahasa halus)"
        ],
        correct: 0
    },
    {
        question: "Bagaimana cara menyebut makan dalam bahasa Jawa krama inggil?",
        options: [
            "Dhahar",
            "Nedha",
            "Mangan"
        ],
        correct: 0
    },
    {
        question: "Kata yang digunakan untuk menyebut 'rumah' dalam bahasa Jawa krama adalah?",
        options: [
            "Omah",
            "Gria",
            "Dalem"
        ],
        correct: 2
    },
    {
        question: "Saat berbicara dengan guru, kata ganti yang benar untuk 'Anda' adalah?",
        options: [
            "Sampeyan",
            "Panjenengan",
            "Kowe"
        ],
        correct: 1
    },
    {
        question: "Kalimat yang benar untuk meminta izin meninggalkan kelas adalah?",
        options: [
            "Kula nyuwun pamit dhisik.",
            "Sugeng enjang kula nyuwun pamit.",
            "Matur nuwun, kula lunga."
        ],
        correct: 0
    },
    {
        question: "Saat bertemu tetangga lebih tua, ucapan yang sopan adalah?",
        options: [
            "Piye kabare, Bu?",
            "Sugeng enjang, Bu.",
            "Opo kabare, Bu?"
        ],
        correct: 1
    },
    {
        question: "Kata ganti 'mereka' dalam bahasa Jawa krama adalah?",
        options: [
            "Dheweke",
            "Panjenengan sedoyo",
            "Kula sedoyo"
        ],
        correct: 1
    },
    {
        question: "Apa makna kata 'matur nuwun'?",
        options: [
            "Permisi",
            "Terima kasih",
            "Selamat datang"
        ],
        correct: 1
    },
    {
        question: "Apa ungkapan yang tepat untuk menyambut tamu dalam bahasa Jawa?",
        options: [
            "Sugeng rawuh.",
            "Pinarak.",
            "Sugeng dalu."
        ],
        correct: 0
    },
    {
        question: "Kata 'nyuwun' dalam bahasa Jawa berarti?",
        options: [
            "Mengucapkan",
            "Meminta",
            "Memberikan"
        ],
        correct: 1
    },
    {
        question: "Kalimat yang benar untuk menawarkan minuman ke tamu adalah?",
        options: [
            "Mangga pinarak, dhahar dhisik.",
            "Mangga pinarak, nyuwun wedang.",
            "Mangga pinarak, nggih dhahar dhisik."
        ],
        correct: 1
    },
    {
        question: "Apa makna 'panjenengan' dalam bahasa Jawa?",
        options: [
            "Anda (bahasa halus)",
            "Dia (bahasa halus)",
            "Kami (bahasa halus)"
        ],
        correct: 0
    },
    {
        question: "Bagaimana cara menyebut 'anak-anak' dalam bahasa Jawa halus?",
        options: [
            "Anak-anak",
            "Putra-putri",
            "Bocah-bocah"
        ],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = [];

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Reset options
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    correctAnswers.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.options[currentQuestion.correct]
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    const scoreElement = document.getElementById("score");
    const correctAnswersElement = document.getElementById("correct-answers");

    scoreElement.textContent = `Skor Anda: ${score}/${questions.length}`;
    correctAnswersElement.innerHTML = "<h3>Jawaban yang Benar:</h3>";

    correctAnswers.forEach((item, index) => {
        const answerDiv = document.createElement("div");
        answerDiv.textContent = `${index + 1}. ${item.question} → ${item.correctAnswer}`;
        correctAnswersElement.appendChild(answerDiv);
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = [];

    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
}
