document.addEventListener("DOMContentLoaded", function () {
  const checkboxContainer = document.getElementById("checkboxContainer");
  const form = document.getElementById("quizForm");

  // Obtendo todas as tags únicas
  const tags = [...new Set(quizData.questions.flatMap(q => q.tag))];

  // Criando os checkboxes
  tags.forEach(tag => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "quizTag";
    checkbox.value = tag;
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(tag));
    
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
  });

  // Evento de envio do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const selectedTags = Array.from(document.querySelectorAll("input[name='quizTag']:checked"))
                              .map(input => input.value)
                              .join(",");

    if (selectedTags) {
      window.location.href = `quiz.html?tag=${encodeURIComponent(selectedTags)}`;
    } else {
      alert("Selecione pelo menos um assunto para iniciar o quiz!");
    }
  });
});