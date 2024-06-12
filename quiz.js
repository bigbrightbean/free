// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "It was a __________ day, perfect for a picnic in the park.",
        chinese_question: "这是一个 __________ 的日子，非常适合在公园里野餐。",
        answers: [
            { option: "A", answer: "cloudy", chinese_answer: "多云", chinese_romanization: "duōyún" },
            { option: "B", answer: "rainy", chinese_answer: "雨天", chinese_romanization: "yǔtiān" },
            { option: "C", answer: "sunny", chinese_answer: "晴朗", chinese_romanization: "qínglǎng" },
            { option: "D", answer: "stormy", chinese_answer: "暴风雨", chinese_romanization: "bàofēngyǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sunny' means bright with sunlight." +
            "<br><br>" +
            "(A) 'cloudy' means covered with or characterized by clouds." +
            "<br><br>" +
            "(B) 'rainy' means characterized by rain." +
            "<br><br>" +
            "(D) 'stormy' means characterized by strong winds and usually rain, thunder, lightning, or snow.",
        chinese_explanation: "(C) '晴朗' 意味着阳光明媚。" +
            "<br><br>" +
            "(A) '多云' 意味着被云覆盖或以云为特征。" +
            "<br><br>" +
            "(B) '雨天' 意味着以降雨为特征。" +
            "<br><br>" +
            "(D) '暴风雨' 意味着强风和通常雨、雷、电或雪。"
    },
    {
        id: 2,
        question: "Teachers are often __________ with paperwork at the end of the school year.",
        chinese_question: "在学年结束时，教师们经常被繁重的文书工作所 __________，让他们感到喘不过气来。",
        answers: [
            { option: "A", answer: "alleviated", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "B", answer: "inundated", chinese_answer: "淹没", chinese_romanization: "yānmò" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inundated' means to overwhelm someone with things or people to be dealt with." +
            "<br><br>" +
            "(A) 'alleviated' means to make something less severe." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of." +
            "<br><br>" +
            "(D) 'simplified' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(B) '淹没' 意味着使某人应接不暇。" +
            "<br><br>" +
            "(A) '缓解' 意味着使某事不那么严重。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 3,
        question: "The security guard will __________ your ID before allowing you to enter the building.",
        chinese_question: "保安会 __________ 你的身份证，然后才允许你进入大楼。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "damage", chinese_answer: "损坏", chinese_romanization: "sǔnhuài" },
            { option: "C", answer: "check", chinese_answer: "检查", chinese_romanization: "jiǎnchá" },
            { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'check' means to examine something in order to determine its accuracy, quality, or condition." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(B) 'damage' means to inflict physical harm on something." +
            "<br><br>" +
            "(D) 'forget' means to fail to remember.",
        chinese_explanation: "(C) '检查' 意味着检查某物以确定其准确性、质量或状况。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(B) '损坏' 意味着对某物造成物理伤害。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 4,
        question: "Her __________ skipped a beat when she saw the surprise birthday party her friends had arranged for her.",
        chinese_question: "当她看到朋友们为她安排的惊喜生日派对时，她的 __________ 漏了一拍。",
        answers: [
            { option: "A", answer: "mind", chinese_answer: "思想", chinese_romanization: "sīxiǎng" },
            { option: "B", answer: "heart", chinese_answer: "心", chinese_romanization: "xīn" },
            { option: "C", answer: "eye", chinese_answer: "眼睛", chinese_romanization: "yǎnjīng" },
            { option: "D", answer: "ear", chinese_answer: "耳朵", chinese_romanization: "ěrduo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heart' refers to the organ in the chest that sends blood around the body, often used metaphorically to represent feelings and emotions." +
            "<br><br>" +
            "(A) 'mind' refers to the element of a person that enables them to be aware, think, and feel." +
            "<br><br>" +
            "(C) 'eye' refers to the organ of sight." +
            "<br><br>" +
            "(D) 'ear' refers to the organ of hearing.",
        chinese_explanation: "(B) '心' 指的是胸部的器官，它将血液输送到身体各处，通常比喻代表感情和情绪。" +
            "<br><br>" +
            "(A) '思想' 指的是使人能够意识、思考和感受的元素。" +
            "<br><br>" +
            "(C) '眼睛' 指的是视觉器官。" +
            "<br><br>" +
            "(D) '耳朵' 指的是听觉器官。"
    },
    {
        id: 5,
        question: "She always had a __________ disposition, making everyone around her feel happier.",
        chinese_question: "她总是有一种 __________ 的性格，使周围的每个人都感到更快乐。",
        answers: [
            { option: "A", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "B", answer: "sunny", chinese_answer: "开朗的", chinese_romanization: "kāilǎng de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "irritable", chinese_answer: "易怒的", chinese_romanization: "yìnù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sunny' means cheerful or happy." +
            "<br><br>" +
            "(A) 'gloomy' means feeling distressed or pessimistic." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'irritable' means having or showing a tendency to be easily annoyed or made angry.",
        chinese_explanation: "(B) '开朗的' 意味着开朗或快乐。" +
            "<br><br>" +
            "(A) '忧郁的' 意味着感到沮丧或悲观。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；漠不关心。" +
            "<br><br>" +
            "(D) '易怒的' 意味着容易恼怒或生气的倾向。"
    },
    {
        id: 6,
        question: "The injection was __________, but it was over quickly.",
        chinese_question: "注射是 __________ 的，但很快就结束了。",
        answers: [
            { option: "A", answer: "soothing", chinese_answer: "舒缓的", chinese_romanization: "shūhuǎn de" },
            { option: "B", answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
            { option: "C", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "amusing", chinese_answer: "有趣的", chinese_romanization: "yǒuqù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'painful' means causing physical or emotional pain." +
            "<br><br>" +
            "(A) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(C) 'relaxing' means making one feel relaxed." +
            "<br><br>" +
            "(D) 'amusing' means causing laughter or providing entertainment.",
        chinese_explanation: "(B) '痛苦的' 意味着引起身体或情感痛苦。" +
            "<br><br>" +
            "(A) '舒缓的' 意味着具有轻柔的镇静效果。" +
            "<br><br>" +
            "(C) '放松的' 意味着让人感到放松。" +
            "<br><br>" +
            "(D) '有趣的' 意味着引起笑声或提供娱乐。"
    },
    {
        id: 7,
        question: "The layoffs were a __________ experience for everyone at the company.",
        chinese_question: "裁员对公司里的每个人来说都是一次 __________ 的经历。",
        answers: [
            { option: "A", answer: "painless", chinese_answer: "无痛的", chinese_romanization: "wútòng de" },
            { option: "B", answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
            { option: "C", answer: "amusing", chinese_answer: "有趣的", chinese_romanization: "yǒuqù de" },
            { option: "D", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'painful' means causing physical or emotional pain." +
            "<br><br>" +
            "(A) 'painless' means causing no pain." +
            "<br><br>" +
            "(C) 'amusing' means causing laughter or providing entertainment." +
            "<br><br>" +
            "(D) 'joyful' means feeling, expressing, or causing great pleasure and happiness.",
        chinese_explanation: "(B) '痛苦的' 意味着引起身体或情感痛苦。" +
            "<br><br>" +
            "(A) '无痛的' 意味着不引起痛苦。" +
            "<br><br>" +
            "(C) '有趣的' 意味着引起笑声或提供娱乐。" +
            "<br><br>" +
            "(D) '快乐的' 意味着感到、表达或引起极大的快乐和幸福。"
    },
    {
        id: 8,
        question: "He had to __________ his temper when he heard the unfair criticism from his colleague.",
        chinese_question: "当他听到同事的不公平批评时，他不得不 __________ 自己的脾气。",
        answers: [
                { option: "A", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "check", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
                { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'check' means to control or restrain." +
            "<br><br>" +
            "(A) 'exacerbate' means to make (a problem, bad situation, or negative feeling) worse." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(D) 'enjoy' means to take delight or pleasure in.",
        chinese_explanation: "(C) '控制' 意味着控制或抑制。" +
            "<br><br>" +
            "(A) '加剧' 意味着使（问题、糟糕的情况或负面情绪）变得更糟。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '享受' 意味着从某事中获得乐趣或愉悦。"
    },
    {
        id: 9,
        question: "The town was __________ by the rising floodwaters, forcing residents to evacuate.",
        chinese_question: "小镇被上涨的洪水 __________ ，迫使居民撤离。",
        answers: [
            { option: "A", answer: "drained", chinese_answer: "排干", chinese_romanization: "páigān" },
            { option: "B", answer: "inundated", chinese_answer: "淹没", chinese_romanization: "yānmò" },
            { option: "C", answer: "dried", chinese_answer: "使干燥", chinese_romanization: "shǐ gānzào" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inundated' means to flood." +
            "<br><br>" +
            "(A) 'drained' means to cause the water or other liquid in something to run out." +
            "<br><br>" +
            "(C) 'dried' means to remove moisture from something." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of.",
        chinese_explanation: "(B) '淹没' 意味着洪水泛滥。" +
            "<br><br>" +
            "(A) '排干' 意味着使某物中的水或其他液体流出。" +
            "<br><br>" +
            "(C) '使干燥' 意味着去除某物中的水分。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 10,
        question: "She had to __________ her emotions before speaking to avoid saying something she might regret.",
        chinese_question: "在说话之前，她必须 __________ 自己的情绪，以免说出让自己后悔的话。",
        answers: [
                { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                { option: "B", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
                { option: "C", answer: "check", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
                { option: "D", answer: "convey", chinese_answer: "传达", chinese_romanization: "chuándá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'check' means to control or restrain." +
            "<br><br>" +
            "(A) 'embrace' means to accept or support willingly and enthusiastically." +
            "<br><br>" +
            "(B) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'convey' means to communicate or make known.",
        chinese_explanation: "(C) '控制' 意味着控制或抑制。" +
            "<br><br>" +
            "(A) '接受' 意味着愿意并热情地接受或支持。" +
            "<br><br>" +
            "(B) '忽略' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '传达' 意味着交流或使之为人所知。"
    } 
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
