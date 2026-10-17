const questions = [
  {
    question: 'Which HTML tag creates a hyperlink?',
    options: ['<a>', '<link>', '<href>'],
    answer: 0,
  },
  {
    question: 'Which CSS property changes the text colour?',
    options: ['font', 'color', 'text-style'],
    answer: 1,
  },
  {
    question: 'Which keyword declares a block-scoped variable?',
    options: ['var', 'let', 'function'],
    answer: 1,
  },
];

const quiz = document.getElementById('quiz');
const scoreEl = document.getElementById('score');
const progress = document.getElementById('progress');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next');


let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function renderQuestion(){
    const q = questions[currentQuestion]

    progress.textContent = `Question ${currentQuestion+1} of ${questions.length}`;
    questionText.textContent = q.question;
    optionsContainer.innerHTML='';
    
    selectedOption = null;
    nextBtn.disabled = true;

    q.options.forEach((option, index)=>{
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('option');
        button.textContent = option;

        button.addEventListener('click', ()=>{
            document.querySelectorAll('.option').forEach(btn => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
            selectedOption = index;
            nextBtn.disabled = false;
        })
        optionsContainer.appendChild(button);
    })
}

nextBtn.addEventListener('click', ()=>{
    if(selectedOption==null)
        return;
    if(selectedOption===questions[currentQuestion].answer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion<questions.length){
        renderQuestion();
    }
    else{
        showScore();
    }
})


function showScore(){
    quiz.hidden = true;
    scoreEl.hidden = false;

    scoreEl.textContent = ` You scored ${score}/${questions.length}`
}

renderQuestion();