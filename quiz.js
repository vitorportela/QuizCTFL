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
const selectedTags = getSelectedTagsFromURL();

// Pega a TAG na URL
function getSelectedTagsFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("tag") ? params.get("tag").split(",") : [];
}

// Função para sortear uma pergunta
function getRandomQuestion(selectedTags) {
  const filteredQuestions = quizData.questions.filter(q => q.tag.some(tag => selectedTags.includes(tag)));
  
  if (usedQuestions.size === filteredQuestions.length) {
    usedQuestions.clear();
    alert("Reiniciando o quiz com novas perguntas!");
  }
  
  const availableQuestions = filteredQuestions.filter(q => !usedQuestions.has(q.id));
  
  if (availableQuestions.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  return availableQuestions[randomIndex];
}

// Contar Perguntas
function getTotalQuestion(selectedTags) {
  const filteredQuestions = quizData.questions.filter(q => q.tag.some(tag => selectedTags.includes(tag)));
  return filteredQuestions.filter(q => !usedQuestions.has(q.id)).length;
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
  questionEl.innerHTML = '';
  
  const sentences = question.question.split('\n').filter(sentence => sentence.trim() !== '');
  sentences.forEach(sentence => {
    const paragraph = document.createElement('p');
    paragraph.textContent = sentence.trim();
    questionEl.appendChild(paragraph);
  });

  optionsContainer.innerHTML = '';
  resultEl.style.display = "none";
  resultEl.textContent = '';
  resultEl.className = '';
  commentsEl.style.display = "none";
  commentsEl.innerHTML = '';
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
  });

  submitButton.disabled = true;
  submitButton.style.display = "block";
}

// Configura o listener de mudança nas opções
optionsContainer.addEventListener('change', () => {
  submitButton.disabled = !Array.from(optionsContainer.querySelectorAll('input:checked')).length;
});

// Verifica a resposta e exibe os comentários e resultado
function checkAnswer() {
  const selectedOptions = Array.from(optionsContainer.querySelectorAll('input:checked'));
  const isCorrect = selectedOptions.every(opt => opt.dataset.correct === 'true') &&
                    selectedOptions.length === currentQuestion.options.filter(opt => opt.isCorrect).length;
  
  if (isCorrect) {
    correctCount++;
    resultEl.textContent = "Resposta Correta!";
    resultEl.className = 'correct';
  } else {
    resultEl.textContent = "Resposta Incorreta!";
    resultEl.className = 'incorrect';
  }

  resultEl.style.display = "block";
  answeredCount++;
  usedQuestions.add(currentQuestion.id);
  percentCount = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  updateStatus();

  if (currentQuestion.comments) {
    const sentences = currentQuestion.comments.split('\n').filter(sentence => sentence.trim() !== '');
    sentences.forEach(sentence => {
      const paragraph = document.createElement('p');
      paragraph.textContent = sentence.trim();
      commentsEl.appendChild(paragraph);
    });
    commentsEl.style.display = "block";
  }
  
  nextButton.style.display = "inline-block";
  submitButton.disabled = true;
  submitButton.style.display = "none";
}

// Atualiza os contadores de status
function updateStatus() {
  answeredCountEl.textContent = `Perguntas respondidas: ${answeredCount}`;
  correctCountEl.textContent = `Acertos: ${correctCount}`;
  percentCountEl.textContent = ` ${percentCount}`;
}

// Carrega a próxima pergunta
function loadNextQuestion() {
  const question = getRandomQuestion(selectedTags);
  displayQuestion(question);
}

// Carregamentos iniciais
function inicialLoad(){
  questionsCountEl.textContent = getTotalQuestion(selectedTags);
}

// Evento do botão "Responder"
submitButton.addEventListener('click', checkAnswer);

// Evento do botão "Continuar"
nextButton.addEventListener('click', loadNextQuestion);

// Contador de tempo
let seconds = 0;
function formatTime(value) {
  return String(value).padStart(2, '0');
}
function updateTimer() {
  seconds++;
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  document.getElementById('timer').textContent = `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;
}
setInterval(updateTimer, 1000);

// Inicializa o quiz
inicialLoad();
loadNextQuestion();
