const questions = [
    {
        question: "What is the capital of France? Clue: Look for a clue in a painting of the Eiffel Tower. " ,
                  
        answers: [
           
            {text: "Madrid" , correct: false},
            {text: "Rome" , correct: false},
            {text: "Paris" , correct: true},
            {text: "Cannes" , correct: false},
            
        ]
    },
    {
        question: "Which IPL Team is 5 time Champion?",
        answers: [
           
            
            {text: "CSK" , correct: false},
            {text: "KKR" , correct: false},
            {text: "MI" , correct: true},
            {text: "RCB" , correct: false},
        ]
    },
    {
        question: "Which the largest continent??",
        answers: [
           
            {text: "Africa" , correct: false},
            {text: "Asia" , correct: true},
            {text: "Australia" , correct: false},
            {text: "None" , correct: false},
        ]    
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
           
            {text: "Tuvalu" , correct: false},
            {text: "Republic of Nauru" , correct: false},
            {text: "Vatican City" , correct: true},
            {text: "Republic of san marino" , correct: false},
        ]
    },
    {
        question: "The Gravitational force was discovered by??",
        answers: [
           
            {text: "Hame Watt" , correct: false},
            {text: "Alber Einstein" , correct: false},
            {text: "Issac Newton" , correct: true},
            {text: "Thomas Edison" , correct: false},
        ]
    }


];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
   currentQuestionIndex = 0;
   score = 0;
   nextButton.innerHTML = "Next";
   showQuestion();
}
function showQuestion(){
   resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}
function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();