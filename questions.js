const quizData = {
  "questions": [
    {
      "id": 1,
      "isMultipleChoice": false,
      "tag": ["Análise e Modelagem de Teste"],
      "question": "Cobertura de código é usada para medir o que?",
      "options": [
        { "option": "Defeitos", "isCorrect": false },
        { "option": "Analisar as tendências", "isCorrect": false },
        { "option": "Eficácia do teste", "isCorrect": true },
        { "option": "O tempo gasto com o teste", "isCorrect": false }
      ],
      "comments": "Cobertura de código mede a eficácia dos testes ao avaliar quais partes do código foram exercitadas. Não identifica defeitos diretamente, mas ajuda a garantir que os testes abrangem uma boa parte do código."
    },
    {
      "id": 2,
      "isMultipleChoice": false,
      "tag": ["Gerenciamento das Atividades de Teste"],
      "question": "Verificação e Validação independente é:",
      "options": [
        { "option": "Feita por uma empresa de fora, que não influência o projeto", "isCorrect": true },
        { "option": "Feita pela gerência", "isCorrect": false },
        { "option": "Feita pelos engenheiros de teste", "isCorrect": false },
        { "option": "Feita pelo desenvolvedor", "isCorrect": false }
      ],
      "comments": "A Verificação e Validação independentes são feitas por uma equipe externa para garantir uma avaliação imparcial do software. Isso reduz o risco de viés e melhora a qualidade do produto."
    },
    {
      "id": 3,//-------------------------------------------------------------------------------------------verificar
      "isMultipleChoice": false,
      "tag": ["Análise e Modelagem de Teste"],
      "question": "Cobertura de sentença (comando) não irá checar:",
      "options": [
        { "option": "Sentenças (comandos) que faltam", "isCorrect": false },
        { "option": "Desvios não utilizados", "isCorrect": true },
        { "option": "Código morto", "isCorrect": false },
        { "option": "Sentenças (comandos) não utilizadas", "isCorrect": false }
      ],
      "comments": "A cobertura de sentença mede quais linhas do código foram executadas, mas não verifica se todas as condições de desvio (como if-else) foram testadas. Isso significa que caminhos lógicos alternativos podem não ser cobertos, mesmo que todas as linhas tenham sido executadas."
    },
    {
      "id": 4,
      "isMultipleChoice": false,
      "tag": ["Testes ao longo do ciclo de Vida de Desenvolvimento de Software"],
      "question": "Os casos de teste de aceitação são baseados no que?",
      "options": [
        { "option": "Requisitos", "isCorrect": true },
        { "option": "Design", "isCorrect": false },
        { "option": "Código", "isCorrect": false },
        { "option": "Tabela de decisão", "isCorrect": false }
      ],
      "comments": "Os testes de aceitação verificam se o software atende aos requisitos definidos pelos usuários e stakeholders. Eles são baseados nos requisitos funcionais e de negócio."
    },
    {
      "id": 5,
      "isMultipleChoice": false,
      "tag": ["Gerenciamento das Atividades de Teste"],
      "question": "Quanto teste é suficiente?",
      "options": [
        { "option": "Esta questão é impossível de responder", "isCorrect": false },
        { "option": "Esta questão é fácil de ser respondida", "isCorrect": false },
        { "option": "A resposta depende do risco para a sua empresa, contrato e de requisitos especiais", "isCorrect": true },
        { "option": "A resposta depende da maturidade dos seus desenvolvedores", "isCorrect": false }
      ],
      "comments": "A quantidade suficiente de testes depende do risco do projeto, dos requisitos do contrato e das exigências específicas da empresa. Não há uma resposta fixa, pois cada contexto tem necessidades diferentes."
    },
    {
      "id": 6,
      "isMultipleChoice": false,
      "tag": ["Fundamentos de Teste"],
      "question": "Uma técnica de teste comum durante o teste de componente é?",
      "options": [
        { "option": "Teste de comando e desvio", "isCorrect": true },
        { "option": "Teste de usabilidade", "isCorrect": false },
        { "option": "Teste de segurança", "isCorrect": false },
        { "option": "Teste de performance (desempenho)", "isCorrect": false }
      ],
      "comments": "Durante os testes de componente, técnicas estruturais como teste de comando e desvio são utilizadas para garantir a cobertura do código e verificar a execução correta dos fluxos programados."
    },
    {
      "id": 7,
      "isMultipleChoice": false,
      "tag": ["Análise e Modelagem de Teste"],
      "question": "Quantos casos de testes são necessários para cobrir todas as possibilidades de declarações (caminhos) para o seguinte fragmento de código? Supondo que as duas condições são independentes entre elas.\nif (Condition 1)\nthen statement 1\nelse statement 2\nfi\nif (Condition 2)\nthen statement 3\nfi",
      "options": [
        { "option": "2 casos", "isCorrect": false },
        { "option": "3 casos", "isCorrect": false },
        { "option": "4 casos", "isCorrect": true },
        { "option": "Não há como estimar", "isCorrect": false }
      ],
      "comments": "Como as duas condições são independentes, existem 2×2 = 4 combinações possíveis de execução do código.\n Precisamos de 4 casos de teste para cobrir todos os caminhos." 
    },
    {
      "id": 8,
      "isMultipleChoice": false,
      "tag": ["Análise e Modelagem de Teste"],
      "question": "Dado o seguinte programa\nIF X < Y\nTHEN Statement 1;\nELSE IF Y >= Z\nTHEN Statement 2;\nEND\nA complexidade ciclomática de McCabe é",
      "options": [
        { "option": "2", "isCorrect": false },
        { "option": "3", "isCorrect": true },
        { "option": "4", "isCorrect": false },
        { "option": "5", "isCorrect": false }
      ],
      "comments": "A complexidade ciclomática de McCabe é calculada como E - N + 2P, onde E é o número de arestas, N o número de nós e P o número de componentes conectados. O grafo de fluxo de controle desse código possui 3 caminhos distintos, resultando em uma complexidade de 3."
    },
    {
      "id": 11,
      "isMultipleChoice": false,
      "tag": ["Teste Estático"],
      "question": "Em uma reunião de revisão o moderador tem qual papel?",
      "options": [
        { "option": "Tomar alguns minutos da reunião", "isCorrect": false },
        { "option": "Mediador entre as pessoas", "isCorrect": true },
        { "option": "Atender os telefonemas", "isCorrect": false },
        { "option": "Escrever os documentos a serem revisados", "isCorrect": false }
      ],
      "comments": "O moderador em uma reunião de revisão atua como mediador, garantindo que a reunião siga um fluxo organizado e produtivo. Ele não é responsável por criar os documentos, mas por facilitar a discussão e revisão."
    },
    {
      "id": 12,
      "isMultipleChoice": false,
      "tag": ["Fundamentos de Teste"],
      "question": "Escolha a melhor definição de qualidade:",
      "options": [
        { "option": "Qualidade é um trabalho", "isCorrect": false },
        { "option": "Zero defeitos", "isCorrect": false },
        { "option": "Conformidade com os requisitos", "isCorrect": true },
        { "option": "Trabalhar como foi planejado", "isCorrect": false }
      ],
      "comments": "A melhor definição de qualidade é conformidade com os requisitos, pois um software de qualidade deve atender às especificações definidas para atender às necessidades do usuário."
    },
    {
      "id": 13,
      "isMultipleChoice": false,
      "tag": ["Fundamentos de Teste"],
      "question": "Qual a melhor definição para mascaramento de defeito (faltas)?",
      "options": [
        { "option": "Um defeito escondendo outro defeito", "isCorrect": true },
        { "option": "Criação de um caso de teste que não revela defeito", "isCorrect": false },
        { "option": "Mascarar a culpa do desenvolvedor", "isCorrect": false },
        { "option": "Mascarar a culpa do tester", "isCorrect": false }
      ],
      "comments": "O mascaramento de defeito ocorre quando um defeito esconde outro, dificultando sua detecção. Isso pode acontecer, por exemplo, quando um erro impede a execução de um trecho de código que contém outro defeito."
    },
    {
      "id": 14,
      "isMultipleChoice": false,
      "tag": ["Fundamentos de Teste"],
      "question": "Uma das principais razões pela qual os desenvolvedores têm dificuldade de testar o seu próprio trabalho é:",
      "options": [
        { "option": "Falta de documentação técnica", "isCorrect": false },
        { "option": "Falta de ferramentas de testes específicas para os desenvolvedores", "isCorrect": false },
        { "option": "Falta de treinamento", "isCorrect": false },
        { "option": "Falta de objetividade", "isCorrect": true }
      ],
      "comments": "Os desenvolvedores têm dificuldade de testar seu próprio código devido à falta de objetividade. Eles tendem a confiar que seu código está correto e podem não conseguir identificar erros com a mesma eficácia que um testador independente."
    },
    {
      "id": 15,
      "isMultipleChoice": false,
      "tag": ["Testes ao longo do ciclo de Vida de Desenvolvimento de Software"],
      "question": "Durante o processo de desenvolvimento de software, qual é o momento do processo de teste começar?",
      "options": [
        { "option": "Quando o código estiver pronto", "isCorrect": false },
        { "option": "Quando a modelagem estiver finalizada", "isCorrect": false },
        { "option": "Quando os requisitos do software tiverem sido aprovados", "isCorrect": true },
        { "option": "Quando o primeiro módulo de código estiver pronto para o teste de unidade", "isCorrect": false }
      ],
      "comments": "O processo de teste deve começar o mais cedo possível, preferencialmente quando os requisitos do software são aprovados. Isso permite identificar problemas desde as fases iniciais, reduzindo custos e retrabalho."
    },
    {
      "id": 16,//-----------------------------------------------------------------------------------verificar
      "isMultipleChoice": false,
      "tag": ["Análise e Modelagem de Teste"],
      "question": "Uma forma de cobertura lógica incorreta é:",
      "options": [
        { "option": "Cobertura de sentença (comando)", "isCorrect": true },
        { "option": "Cobertura de pólo", "isCorrect": false },
        { "option": "Cobertura de condição", "isCorrect": false },
        { "option": "Cobertura de caminho", "isCorrect": false }
      ],
      "comments": "A cobertura de sentença é considerada uma forma incorreta de cobertura lógica, pois ela apenas verifica se cada linha de código foi executada, mas não garante que todas as condições lógicas foram testadas corretamente."
    },
    {
      "id": 17,
      "isMultipleChoice": false,
      "tag": ["Fundamentos de Teste"],
      "question": "Qual das seguintes características de qualidade não faz parte da Norma ISO 9126?",
      "options": [
        { "option": "Funcionalidade", "isCorrect": false },
        { "option": "Usabilidade", "isCorrect": false },
        { "option": "Suportabilidade", "isCorrect": true },
        { "option": "Mantenabilidade", "isCorrect": false }
      ],
      "comments": "A norma ISO 9126 define qualidade do software em termos de funcionalidade, usabilidade, confiabilidade, eficiência, mantenabilidade e portabilidade. 'Suportabilidade' não é uma das características da norma."
    },
    {
      "id": 18,
      "isMultipleChoice": false,
      "tag": ["Teste Estático"],
      "question": "Para testar uma função, o programador precisa escrever um ________, que chama a função a ser testada e passa os dados do teste.",
      "options": [
        { "option": "Stub", "isCorrect": false },
        { "option": "Driver", "isCorrect": true },
        { "option": "Proxy", "isCorrect": false },
        { "option": "Nenhuma das alternativas", "isCorrect": false }
      ],
      "comments": "O driver é um programa auxiliar usado para chamar a função a ser testada e fornecer os dados de entrada necessários. Ele é comum em testes de integração e testes unitários."
    },
    {
      "id": 19,
      "isMultipleChoice": false,
      "tag": ["Análise e Modelagem de Teste"],
      "question": "Qual das seguintes afirmações está correta, quanto ao teste de valor limite?",
      "options": [
        { "option": "É o mesmo que o teste de Partição de Equivalência", "isCorrect": false },
        { "option": "Verifica as condições de limite, ou seja, abaixo e acima dos limites de cada entrada e saída das partições equivalentes", "isCorrect": true },
        { "option": "Testa as combinações de entrada", "isCorrect": false },
        { "option": "É utilizada como uma estratégia de teste de caixa branca", "isCorrect": false }
      ],
      "comments": "O teste de valor limite verifica valores nas extremidades das partições equivalentes, ajudando a identificar falhas que ocorrem em pontos críticos do software."
    },
    {
      "id": 20,
      "isMultipleChoice": false,
      "tag": ["Análise e Modelagem de Teste"],
      "question": "Um campo de entrada (input field) referente ao ano de aniversário aceita valores de 1900 até 2004. Utilizando a análise do valor limite o teste usaria quais valores?",
      "options": [
        { "option": "0,1900,2004,2005", "isCorrect": false },
        { "option": "1900, 2004", "isCorrect": false },
        { "option": "1899,1900,2004,2005", "isCorrect": true },
        { "option": "1899, 1900, 1901,2003,2004,2005", "isCorrect": false }
      ],
      "comments": "A análise de valor limite testa os valores nos extremos da entrada permitida. Assim, os valores corretos para o teste seriam 1899 (abaixo do limite), 1900 (limite inferior válido), 2004 (limite superior válido) e 2005 (acima do limite)."
    },
    {
      "id": 21,
      "isMultipleChoice": false,
      "tag": ["Fundamentos de Teste"],
      "question": "Quais dos seguintes testes não é um teste do tipo funcional?",
      "options": [
        { "option": "Teste de sistema", "isCorrect": false },
        { "option": "Teste de usabilidade", "isCorrect": false },
        { "option": "Teste de performance (desempenho)", "isCorrect": false },
        { "option": "Teste de usabilidade e Teste de performance (desempenho)", "isCorrect": true }
      ],
      "comments": "Os testes de usabilidade e de desempenho não são testes funcionais, pois avaliam aspectos não funcionais do software, como experiência do usuário e eficiência."
    },
    {
      "id": 22,
      "isMultipleChoice": false,
      "tag": ["Gerenciamento das Atividades de Teste"],
      "question": "Quais das seguintes ferramentas seriam utilizadas na automação do teste de regressão?",
      "options": [
        { "option": "Uma verificadora de dados", "isCorrect": false },
        { "option": "Uma verificadora de limites", "isCorrect": false },
        { "option": "Ferramenta de captura e reprodução", "isCorrect": true },
        { "option": "Comparadora de resultados (outputs)", "isCorrect": false }
      ],
      "comments": "Ferramentas de captura e reprodução são amplamente usadas em testes de regressão para automatizar a execução de casos de teste e comparar os resultados com execuções anteriores."
    }
  ]
};
