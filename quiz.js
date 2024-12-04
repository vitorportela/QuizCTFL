// Variáveis de estado
let answeredCount = 0;
let correctCount = 0;
let percentCount = 0;
let usedQuestions = new Set();
let currentQuestion = null;

const answeredCountEl = document.getElementById('answered-count');
const correctCountEl = document.getElementById('correct-count');
const percentCountEl = document.getElementById('percent-count');
const questionsCountEl = document.getElementById('questions-count');
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-button');
const commentsEl = document.getElementById('comments');
const nextButton = document.getElementById('next-button');
const resultEl = document.getElementById('result');

// Função para sortear uma pergunta
function getRandomQuestion() {
  if (usedQuestions.size === quizData.questions.length) {
    usedQuestions.clear();
    alert("Reiniciando o quiz com novas perguntas!");
  }
  const availableQuestions = quizData.questions.filter(q => !usedQuestions.has(q.id));
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  return availableQuestions[randomIndex];
}

// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Exibe a pergunta sorteada
function displayQuestion(question) {
  currentQuestion = question;

  // Remove comentários anteriores (se existirem)
  Array.from(questionEl.parentNode.childNodes).forEach(node => {
    if (node.nodeType === Node.COMMENT_NODE) {
      node.remove();
    }
  });

  // Adiciona um comentário no HTML com o ID da pergunta
  const questionComment = document.createComment(`ID da pergunta: ${question.id}`);
  questionEl.parentNode.insertBefore(questionComment, questionEl);

  questionEl.textContent = question.question;
  optionsContainer.innerHTML = '';
  resultEl.style.display = "none";
  resultEl.textContent = '';
  resultEl.className = '';
  commentsEl.style.display = "none";
  commentsEl.innerHTML = ''; // Limpa os comentários
  nextButton.style.display = "none";

  const shuffledOptions = shuffleArray([...question.options]);
  const inputType = question.isMultipleChoice ? 'checkbox' : 'radio';
  shuffledOptions.forEach((option, index) => {
    const optionId = `option-${index}`;
    const label = document.createElement('label');
    label.setAttribute('for', optionId);
    label.textContent = option.option;

    const input = document.createElement('input');
    input.type = inputType;
    input.name = 'option';
    input.id = optionId;
    input.dataset.correct = option.isCorrect;

    label.prepend(input);
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement('br'));
  });

  submitButton.disabled = true;
  submitButton.style.display = "block"
}

// Configura o listener de mudança nas opções
optionsContainer.addEventListener('change', () => {
  const selected = Array.from(optionsContainer.querySelectorAll('input:checked'));
  submitButton.disabled = selected.length === 0;
});

// Verifica a resposta e exibe os comentários e resultado
function checkAnswer() {
  const selectedOptions = Array.from(optionsContainer.querySelectorAll('input:checked'));
  const isCorrect = selectedOptions.every(opt => opt.dataset.correct === 'true') &&
                    selectedOptions.length === currentQuestion.options.filter(opt => opt.isCorrect).length;
  //contador de respostas corretas
  if (isCorrect) {
    correctCount++;
    resultEl.textContent = "Resposta Correta!";
    resultEl.className = 'correct';
  } else {
    resultEl.textContent = "Resposta Incorreta!";
    resultEl.className = 'incorrect';
  }

  //contador de perguntas
  resultEl.style.display = "block";
  answeredCount++;
  usedQuestions.add(currentQuestion.id);

  //porcentagem de respostas corretas
  percentCount = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  updateStatus();

  // Exibe os comentários, se houver
  if (currentQuestion.comments) {
    const sentences = currentQuestion.comments.split('.').filter(sentence => sentence.trim() !== '');
    sentences.forEach(sentence => {
      const paragraph = document.createElement('p');
      paragraph.textContent = sentence.trim() + '.';
      commentsEl.appendChild(paragraph);
    });
    commentsEl.style.display = "block";
  }
  
  nextButton.style.display = "inline-block";
  submitButton.disabled = true;
  submitButton.style.display = "none"
}

// Atualiza os contadores de status
function updateStatus() {
  answeredCountEl.textContent = `Perguntas respondidas: ${answeredCount}`;
  correctCountEl.textContent = `Acertos: ${correctCount}`;
  percentCountEl.textContent = ` ${percentCount}`;
}

// Carrega a próxima pergunta
function loadNextQuestion() {
  const question = getRandomQuestion();
  displayQuestion(question);
}

// Carregamentos iniciais
function inicialLoad(){
  questionsCountEl.textContent = ` ${quizData.questions.length}`;
}


// Evento do botão "Responder"
submitButton.addEventListener('click', checkAnswer);

// Evento do botão "Continuar"
nextButton.addEventListener('click', loadNextQuestion);

//contador de tempo

let seconds = 0;
    
function formatTime(value) {
  return String(value).padStart(2, '0');
}

function updateTimer() {
  seconds++;
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  document.getElementById('timer').textContent = 
    `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;
}
setInterval(updateTimer, 1000);

// ------------------- Inicializa o quiz------------------------------

inicialLoad();
loadNextQuestion();
