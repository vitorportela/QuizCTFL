const quizData = {
  "questions": [
    {
      "id": 11,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Quais das seguintes afirmações descrevem um objetivo de teste válido?",
      "options": [
        { "option": "Para provar que não há defeitos não corrigidos no sistema em teste.", "isCorrect": false },
        { "option": "Para verificar se não há combinações não testadas de entradas.", "isCorrect": false },
        { "option": "Para provar que não haverá falhas após a implementação do sistema na produção.", "isCorrect": false },
        { "option": "Reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade.", "isCorrect": true }
      ],
      "comments": "O objetivo principal dos testes é reduzir o risco associado ao uso do software e aumentar a confiança na sua qualidade. Isso é alcançado ao identificar e corrigir defeitos antes que o software seja implementado em produção. A resposta correta, 'Reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade', reflete essa meta, pois os testes ajudam a garantir que o software funcione conforme esperado em diferentes cenários, minimizando a probabilidade de falhas e aumentando a confiança dos stakeholders na qualidade do produto."
    },
    {
      "id": 12,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das opções a seguir mostra um exemplo que contribui para o sucesso das atividades de teste?",
      "options": [
        {
          "option": "Os testadores certificados modelarão casos de teste muito melhores do que os testadores não certificados.",
          "isCorrect": false
        },
        {
          "option": "Os testadores tentam não perturbar os desenvolvedores durante a codificação, para que eles escrevam um código melhor.",
          "isCorrect": false
        },
        {
          "option": "O envolvimento dos testadores durante várias atividades do ciclo de vida de desenvolvimento de software (SDLC) ajudará a detectar defeitos nos produtos de trabalho.",
          "isCorrect": true
        },
        {
          "option": "Os testadores que colaboram com os usuários finais ajudam a melhorar a qualidade dos relatórios de defeitos durante a integração de componentes e o teste do sistema.",
          "isCorrect": false
        }
      ],
      "comments": "O envolvimento dos testadores em várias fases do ciclo de vida de desenvolvimento de software (SDLC) é crucial para o sucesso das atividades de teste. Isso ocorre porque os testadores podem identificar defeitos nos produtos de trabalho em estágios iniciais, como requisitos e design, além de durante o desenvolvimento e testes. Essa abordagem proativa permite que os defeitos sejam corrigidos antes que se tornem mais complexos e caros de resolver nas fases posteriores. A resposta correta, 'O envolvimento dos testadores durante várias atividades do ciclo de vida de desenvolvimento de software (SDLC) ajudará a detectar defeitos nos produtos de trabalho', reflete a importância de uma colaboração contínua e integrada dos testadores ao longo de todo o processo de desenvolvimento, garantindo uma melhor qualidade do produto final."
    },
    {
      "id": 13,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Você foi designado como testador de uma equipe que está produzindo um novo sistema de forma incremental. Você notou que nenhuma alteração foi feita nos casos de teste de regressão existentes durante várias iterações e nenhum novo defeito de regressão foi identificado. Seu gerente está feliz, mas você não está. Qual princípio de teste explica seu ceticismo?",
      "options": [
        {
          "option": "Falácia da ausência de erros.",
          "isCorrect": false
        },
        {
          "option": "Os defeitos se agrupam.",
          "isCorrect": false
        },
        {
          "option": "É impossível realizar testes exaustivos.",
          "isCorrect": false
        },
        {
          "option": "Os testes se desgastam.",
          "isCorrect": true
        }
      ],
      "comments": "O princípio de que 'os testes se desgastam' explica o ceticismo do testador. Quando os casos de teste de regressão não são atualizados, eles podem não detectar novos defeitos, pois o software evolui e os testes podem se tornar obsoletos ou menos eficazes. É importante revisar e atualizar os casos de teste regularmente para garantir que eles continuem a ser relevantes e eficazes na detecção de defeitos."
    },
    {
      "id": 14,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Você trabalha em uma equipe que desenvolve um aplicativo móvel para pedidos de comida. Na iteração atual, a equipe decidiu implementar a funcionalidade de pagamento. Qual das atividades a seguir faz parte da análise de teste?",
      "options": [
        {
          "option": "Analisar a discrepância entre o resultado real e o resultado esperado após a execução de um caso de teste que verifica o processo de pagamento com cartão de crédito e relatar um defeito.",
          "isCorrect": false
        },
        {
          "option": "Estimativa de que o teste da integração com o serviço de pagamento levará 8 dias/homem.",
          "isCorrect": false
        },
        {
          "option": "Usar a análise de valor limite (BVA) para derivar os dados de teste para os casos de teste que verificam o processamento correto do pagamento para o valor mínimo permitido a ser pago.",
          "isCorrect": false
        },
        {
          "option": "Decidir que a equipe deve testar se é possível realizar o pagamento entre muitos usuários.",
          "isCorrect": true
        }
      ],
      "comments": "A atividade de 'decidir que a equipe deve testar se é possível realizar o pagamento entre muitos usuários' faz parte da análise de teste. Durante a análise de teste, as possibilidades de teste são avaliadas para garantir que todos os cenários relevantes sejam cobertos. Isso inclui determinar quais funcionalidades precisam ser testadas e como elas devem ser testadas, garantindo que o sistema atenda aos requisitos e funcione conforme esperado."
    },
    {
      "id": 15,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Quais dos seguintes fatores (i-v) têm influência SIGNIFICATIVA no processo de teste?\ni. O SDLC;\nii. O número de defeitos detectados em projetos anteriores;\niii. Os riscos identificados do produto;\niv. Novos requisitos regulatórios forçando;\nv. O número de testadores certificados na organização;\nFazer estimativa de tempo é planejamento.\nUsar uma técnica como valor limite é modelagem, projeto de teste.\nValidar a possibilidade de se testar ou analisar as possibilidades de teste é analise de teste.",
      "options": [
        {
          "option": "iii, v têm influência significativa; i, ii, iv não têm",
          "isCorrect": false
        },
        {
          "option": "i, iii, iv têm influência significativa; ii, v não têm.",
          "isCorrect": true
        },
        {
          "option": "ii, iv, v têm influência significativa; i, iii não têm.",
          "isCorrect": false
        },
        {
          "option": "i, ii têm influência significativa; iii, iv, v não têm.",
          "isCorrect": false
        }
      ],
      "comments": "Os fatores que têm influência significativa no processo de teste incluem o SDLC (i), os riscos identificados do produto (iii) e novos requisitos regulatórios (iv). O SDLC determina a abordagem e as fases do teste, enquanto os riscos do produto ajudam a priorizar as áreas de foco do teste. Novos requisitos regulatórios podem introduzir novas necessidades de teste para garantir conformidade. A resposta correta, 'i, iii, iv têm influência significativa; ii, v não têm', reflete a importância desses fatores no planejamento e execução eficazes do teste."
    },
    {
      "id": 16,
      "isMultipleChoice": true,
      "tag": ["Capítulo 1"],
      "question": "Quais das DUAS tarefas a seguir pertencem PRINCIPALMENTE a um papel no teste?",
      "options": [
        {
          "option": "Manter o backlog do produto.",
          "isCorrect": false
        },
        {
          "option": "Criar o plano de teste.",
          "isCorrect": false
        },
        {
          "option": "Relatório sobre a cobertura alcançada.",
          "isCorrect": true
        },
        {
          "option": "Configurar ambientes de teste.",
          "isCorrect": true
        },
        {
          "option": "Projetar soluções para novos requisitos",
          "isCorrect": false
        }
      ],
      "comments": "As tarefas que pertencem principalmente a um papel no teste incluem 'Relatório sobre a cobertura alcançada' e 'Configurar ambientes de teste'. O relatório sobre a cobertura alcançada é uma responsabilidade do testador, que deve monitorar e comunicar o progresso dos testes. Configurar ambientes de teste também é uma tarefa do testador, garantindo que o ambiente esteja pronto para a execução dos testes. Manter o backlog do produto é uma atividade do time, criar o plano de teste é responsabilidade do gerente de testes, e projetar soluções para novos requisitos é tarefa do desenvolvedor."
    },
    {
      "id": 17,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Quais das seguintes habilidades (i-v) são as MAIS importantes para um testador?\ni. Ter conhecimento do domínio; \nii. Criação de uma visão do produto;\niii. Ser um bom membro da equipe;\niv. Planejar e organizar o trabalho da equipe;\nv. Pensamento crítico; ",
      "options": [
        {
          "option": "i, iii e v são importantes; ii e iv não são",
          "isCorrect": true
        },
        {
          "option": "ii e iv são importantes; i, iii e v não são",
          "isCorrect": false
        },
        {
          "option": "i, ii e v são importantes; iii e iv não são",
          "isCorrect": false
        },
        {
          "option": "iii e iv são importantes; i, ii e v não são",
          "isCorrect": false
        }
      ],
      "comments": "As habilidades mais importantes para um testador incluem ter conhecimento do domínio (i), ser um bom membro da equipe (iii) e ter pensamento crítico (v). O conhecimento do domínio permite que o testador compreenda melhor o contexto do produto e identifique possíveis áreas de risco. Ser um bom membro da equipe é crucial para colaborar eficazmente com outros membros do projeto, garantindo que os objetivos de teste sejam alcançados. O pensamento crítico é essencial para analisar problemas complexos, identificar falhas e propor soluções eficazes. A resposta correta, 'i, iii e v são importantes; ii e iv não são', reflete a importância dessas habilidades para o sucesso no papel de testador."
    },
    {
      "id": 18,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Como a abordagem de equipe inteira está presente nas interações entre os testadores e os representantes da empresa?",
      "options": [
        {
          "option": "Os testadores ajudam os representantes de negócio a criar testes de aceite adequados",
          "isCorrect": true
        },
        {
          "option": "Os representantes do negócio decidem sobre as abordagens de automação de testes",
          "isCorrect": false
        },
        {
          "option": "Os testadores ajudam os representantes da empresa a definir a estratégia de teste.",
          "isCorrect": false
        },
        {
          "option": "Os representantes de negócio não participam da abordagem de equipe inteira.",
          "isCorrect": false
        }
      ],
      "comments": "Na abordagem de equipe inteira, os testadores colaboram com os representantes de negócio para criar testes de aceite adequados. Essa colaboração garante que os testes reflitam as necessidades e expectativas do negócio, aumentando a probabilidade de que o produto final atenda aos requisitos dos usuários. A resposta correta, 'Os testadores ajudam os representantes de negócio a criar testes de aceite adequados', destaca a importância da colaboração entre testadores e representantes de negócio para garantir a qualidade e a adequação do produto."
    },
    {
      "id": 19,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é um exemplo do porquê testar é necessário?",
      "options": [
        {
          "option": "Revisões aumentam a qualidade das especificações de requisitos e levam a menos alterações sendo necessárias nos produtos de trabalho derivados.",
          "isCorrect": true
        },
        {
          "option": "Análise estática fornece evidências aos clientes de que os elementos do sistema que não fornecem saídas são adequados para lançamento.",
          "isCorrect": false
        },
        {
          "option": "Teste dinâmico aumenta a qualidade ao fazer com que objetos de teste falhem de maneiras que nunca poderiam ser alcançadas pelos usuários.",
          "isCorrect": false
        },
        {
          "option": "Teste estático é usado pelos desenvolvedores para identificar falhas em seu código de programa mais cedo do que pode ser alcançado através do teste dinâmico.",
          "isCorrect": false
        }
      ],
      "comments": "Revisões são essenciais para aumentar a qualidade das especificações de requisitos, pois permitem identificar e corrigir problemas antes que eles se propaguem para os produtos de trabalho derivados. Isso resulta em menos alterações necessárias posteriormente, economizando tempo e recursos. A resposta correta, 'Revisões aumentam a qualidade das especificações de requisitos e levam a menos alterações sendo necessárias nos produtos de trabalho derivados', destaca a importância das revisões como uma prática preventiva eficaz no processo de desenvolvimento de software."
    },
    {
      "id": 110,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes afirmações sobre garantia de qualidade (QA) e/ou controle de qualidade está correta?",
      "options": [
        {
          "option": "QA é realizada como parte dos testes",
          "isCorrect": false
        },
        {
          "option": "Os testes são realizados como parte do QC",
          "isCorrect": true
        },
        {
          "option": "Testar é outro termo para QC",
          "isCorrect": false
        },
        {
          "option": "Os testes são realizados como parte da QA",
          "isCorrect": false
        }
      ],
      "comments": "Os testes são uma parte integral do Controle de Qualidade (QC), que se concentra na identificação de defeitos no produto final. A Garantia de Qualidade (QA), por outro lado, é uma disciplina que visa melhorar os processos de desenvolvimento para prevenir defeitos. A resposta correta, 'Os testes são realizados como parte do QC', reflete essa distinção, enfatizando que o teste é uma ferramenta de QC para garantir a qualidade do produto."
    },
    {
      "id": 111,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Um dos 'princípios de teste' afirma que testes exaustivos são impossíveis. Qual das seguintes opções é um exemplo de abordar esse princípio na prática?",
      "options": [
        {
          "option": "Documentar todas as variações de entrada de teste possíveis e priorizá-las com base na importância.",
          "isCorrect": false
        },
        {
          "option": "Criar casos de teste que cubram todas as possíveis saídas especificadas.",
          "isCorrect": false
        },
        {
          "option": "Usar particionamento de equivalência e análise de valores limite para gerar casos de teste.",
          "isCorrect": true
        },
        {
          "option": "Iniciar os testes o mais cedo possível com revisões e outras abordagens de teste estático.",
          "isCorrect": false
        }
      ],
      "comments": "O princípio de que testes exaustivos são impossíveis é abordado na prática através de técnicas como o particionamento de equivalência e a análise de valores limite. Essas técnicas permitem que os testadores reduzam o número de casos de teste necessários, agrupando entradas similares e focando em pontos críticos, como limites, para garantir uma cobertura eficaz sem testar todas as combinações possíveis. A resposta correta, 'Usar particionamento de equivalência e análise de valores limite para gerar casos de teste', exemplifica essa abordagem prática."
    },
    {
      "id": 12,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual atividade de teste envolve trabalhar com requisitos de dados de teste, condições de teste, requisitos de ambiente de teste e casos de teste?",
      "options": [
        { "option": "Execução de teste", "isCorrect": false },
        { "option": "Análise de teste", "isCorrect": false },
        { "option": "Implementação de teste", "isCorrect": false },
        { "option": "Modelagem de Teste", "isCorrect": true }
      ],
      "comments": "A modelagem de teste é a atividade que envolve a criação de casos de teste e outros artefatos de teste a partir das condições de teste. Isso inclui a definição de requisitos de dados de teste, diretrizes para testes exploratórios e especificação dos requisitos de ambiente de teste, como infraestrutura e ferramentas necessárias. Essa atividade é crucial para garantir que todos os aspectos do teste sejam bem planejados e organizados antes da execução."
    },
    {
      "id": 113,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é MAIS provável de impactar como os testes são realizados para um determinado objeto de teste?",
      "options": [
        { "option": "O nível médio de experiência da equipe de marketing da organização", "isCorrect": false },
        { "option": "A estrutura organizacional do usuário final para um aplicativo de streaming de música comercial", "isCorrect": false },
        { "option": "O conhecimento dos usuários para os quais um novo sistema está sendo desenvolvido", "isCorrect": false },
        { "option": "O número de anos de experiência dos membros da equipe de teste", "isCorrect": true }
      ],
      "comments": "O número de anos de experiência dos membros da equipe de teste de desempenho ajudará a determinar as capacidades e o conhecimento (por exemplo, de diferentes ferramentas e tipos de defeitos) que os membros da equipe aplicarão quando estiverem realizando os testes. A experiência acumulada pode influenciar diretamente a eficácia e a eficiência dos testes realizados."
    },
    {
      "id": 114,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes afirmações é um exemplo CORRETO do valor da rastreabilidade?",
      "options": [
        { "option": "Rastreabilidade entre os riscos mitigados e os casos de teste aprovados fornece um meio de determinar o nível de risco residual.", "isCorrect": false },
        { "option": "Rastreabilidade entre os testadores e casos de teste com falha fornece um meio de determinar o nível de habilidade dos testadores.", "isCorrect": false },
        { "option": "Rastreabilidade entre os riscos identificados e condições de teste escritas fornece um meio de determinar quais riscos valem a pena testar.", "isCorrect": false },
        { "option": "Rastreabilidade entre os requisitos do usuário e os resultados da execução do teste fornece um meio de medir o progresso do projeto em relação aos objetivos comerciais.", "isCorrect": true }
      ],
      "comments": "A rastreabilidade entre os requisitos do usuário e os resultados da execução dos testes fornece uma indicação de quais requisitos do usuário foram testados e, portanto, fornece um meio de medir o progresso do projeto (no contexto dos testes) em relação aos objetivos comerciais. Isso é essencial para garantir que o desenvolvimento do projeto esteja alinhado com as expectativas e necessidades do negócio."
    },
    {
      "id": 115,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é MAIS provável de ser um exemplo de um testador usando uma habilidade genérica ao testar?",
      "options": [
        { "option": "O testador era um ex-piloto e foi capaz de entender melhor os critérios de aceitação para o sistema de controle de helicópteros.", "isCorrect": true },
        { "option": "O testador foi muito cuidadoso para não cometer erros ao gerar metodicamente casos de teste antes de iniciar sua sessão de teste exploratório.", "isCorrect": false },
        { "option": "O profundo conhecimento do testador em uma variedade de jogos de computador fez com que se desse bem com um dos desenvolvedores que também era fã de jogos.", "isCorrect": false },
        { "option": "O testador trabalhou anteriormente como programador e usou suas habilidades nessa área para se comunicar melhor com os analistas de negócios.", "isCorrect": false }
      ],
      "comments": "O conhecimento do domínio que pode ser usado para entender e se comunicar com os usuários finais e representantes de negócios é uma das habilidades genéricas necessárias para os testadores. Um testador com experiência como piloto seria capaz de apreciar melhor os critérios de aceitação para o sistema de controle de helicópteros, demonstrando como habilidades e experiências passadas podem ser aplicadas para melhorar a compreensão e a comunicação no contexto de testes."
    },
    {
      "id": 116,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é uma vantagem da abordagem de equipe inteira?",
      "options": [
        {
          "option": "Gera uma sinergia de equipe que beneficia o projeto inteiro",
          "isCorrect": true
        },
        {
          "option": "Permite que os membros da equipe assumam qualquer papel a qualquer momento",
          "isCorrect": false
        },
        {
          "option": "Incorpora representantes de negócios ao lado de desenvolvedores na mesma equipe",
          "isCorrect": false
        },
        {
          "option": "Apenas requer uma única equipe para apoiar o projeto de desenvolvimento completo",
          "isCorrect": false
        }
      ],
      "comments": "A abordagem de equipe inteira promove a colaboração e comunicação entre todos os membros da equipe, incluindo desenvolvedores, testadores e representantes de negócios. Isso gera uma sinergia que beneficia o projeto como um todo, pois todos compartilham a responsabilidade pela qualidade do produto. Não se trata de uma única equipe, mas sim de uma mentalidade coletiva onde todos contribuem para o sucesso do projeto."
    },
    {
      "id": 117,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é um objetivo típico de teste?",
      "options": [
        {
          "option": "Verificar se o objeto de teste atende às expectativas do usuário",
          "isCorrect": false
        },
        {
          "option": "Validar que os requisitos documentados são atendidos",
          "isCorrect": false
        },
        {
          "option": "Causar falhas e identificar defeitos",
          "isCorrect": true
        },
        {
          "option": "Iniciar erros e identificar causas raízes",
          "isCorrect": false
        }
      ],
      "comments": "Um dos objetivos principais do teste é causar falhas e identificar defeitos no sistema. Isso ajuda a garantir que os problemas sejam detectados e corrigidos antes que o produto seja liberado para os usuários finais. Identificar defeitos é crucial para melhorar a qualidade do software e garantir que ele funcione conforme o esperado."
    },
    {
      "id": 118,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Dado o seguinte testware:\n 1-Itens de cobertura\n 2-Solicitações de mudança\n 3-Cronograma de execução de teste\n 4-Condições de teste priorizadas \nE as seguintes atividades de teste:\n A. Análise de teste\n B. Projeto de teste\n C. Implementação de teste\n D. Conclusão de teste\n Qual das seguintes opções MELHOR mostra o testware produzido pelas atividades?",
      "options": [
        {
          "option": "1B, 2D, 3A, 4C",
          "isCorrect": false
        },
        {
          "option": "1D, 2C, 3B, 4A",
          "isCorrect": false
        },
        {
          "option": "1B, 2D, 3C, 4A",
          "isCorrect": true
        },
        {
          "option": "1D, 2C, 3A, 4B",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1B, 2D, 3C, 4A \n Análise de teste - Condições de teste priorizadas\n Projeto de teste - Itens de coberturan\n Implementação de teste - Cronograma de execução de testen \n Conclusão de teste - Solicitações de mudança \n Cada atividade de teste produz artefatos específicos que são essenciais para o processo de teste e ajudam a garantir que os testes sejam bem organizados e eficazes."
    },
    {
      "id": 119,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes afirmações MELHOR descreve a diferença entre teste e depuração (debugging)?",
      "options": [
        {
          "option": "O teste encontra a causa dos defeitos enquanto a depuração corrige a causa dos defeitos",
          "isCorrect": false
        },
        {
          "option": "O teste causa falhas enquanto a depuração corrige falhas",
          "isCorrect": false
        },
        {
          "option": "O teste determina que existem defeitos enquanto a depuração remove defeitos",
          "isCorrect": true
        },
        {
          "option": "O teste é uma atividade negativa enquanto a depuração é uma atividade positiva",
          "isCorrect": false
        }
      ],
      "comments": "O teste é o processo de identificar a presença de defeitos em um sistema, enquanto a depuração é o processo de localizar e corrigir esses defeitos. O teste não corrige defeitos, mas sim revela sua existência, permitindo que a equipe de desenvolvimento os depure e corrija."
    },
    {
      "id": 120,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "A falácia da “ausência de defeitos” é um dos princípios do teste. Qual das seguintes é um exemplo de abordar este princípio na prática?",
      "options": [
        {
          "option": "Modificar testes que não causam falhas para garantir que poucos defeitos permaneçam",
          "isCorrect": false
        },
        {
          "option": "Apoiar os usuários finais na realização de testes de aceitação",
          "isCorrect": true
        },
        {
          "option": "Explicar que não é possível que o teste mostre a ausência de defeitos",
          "isCorrect": false
        },
        {
          "option": "Garantir que não restem defeitos de implementação no sistema entregue",
          "isCorrect": false
        }
      ],
      "comments": "A falácia da 'ausência de defeitos' sugere que mesmo que um software não apresente defeitos técnicos, ele pode não atender às necessidades do cliente. Apoiar os usuários finais na realização de testes de aceitação ajuda a garantir que o software atenda às expectativas e requisitos reais dos usuários, abordando assim este princípio."
    },
    {
      "id": 121,
      "isMultipleChoice": true,
      "tag": ["Capítulo 1"],
      "question": "Quais das seguintes atividades de teste são MAIS prováveis de envolver a aplicação da análise de valor de fronteira e particionamento por equivalência?(Selecione DUAS opções)",
      "options": [
        {
          "option": "Análise de teste",
          "isCorrect": true
        },
        {
          "option": "Execução de teste",
          "isCorrect": false
        },
        {
          "option": "Implementação de teste",
          "isCorrect": false
        },
        {
          "option": "Projeto de teste",
          "isCorrect": true
        },
        {
          "option": "Monitoramento de teste",
          "isCorrect": false
        }
      ],
      "comments": "A análise de teste e o projeto de teste são fases em que técnicas como particionamento de equivalência e análise de valor de fronteira são aplicadas. Durante a análise de teste, os requisitos são avaliados para determinar quais técnicas serão usadas. No projeto de teste, os casos de teste são desenvolvidos, definindo quais valores serão testados. Essas técnicas ajudam a definir conjuntos de testes ideais, tornando-as essenciais nessas etapas."
    },
    
    {
      "id": 122,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes afirmações sobre os diferentes papéis de teste é MAIS provável de ser CORRETA?",
      "options": [
        {
          "option": "No desenvolvimento ágil de software, a função de gerenciamento de testes é a principal responsabilidade da equipe, enquanto a função de teste é principalmente a responsabilidade de um único indivíduo de fora da equipe.",
          "isCorrect": false
        },
        {
          "option": "No desenvolvimento ágil de software, as atividades de gerenciamento de testes que abrangem várias equipes são tratadas por um gerente de testes fora da equipe, enquanto algumas tarefas de gerenciamento de testes são tratadas pela própria equipe.",
          "isCorrect": true
        },
        {
          "option": "A função de gerenciamento de testes é principalmente responsável pela análise de testes e pelo design de testes, enquanto a função de teste é principalmente responsável pela implementação e execução de testes.",
          "isCorrect": false
        },
        {
          "option": "A função de teste é principalmente responsável pelo monitoramento e controle de testes, enquanto a função de gerenciamento de testes é principalmente responsável pelo planejamento de testes e conclusão de testes.",
          "isCorrect": false
        }
      ],
      "comments": "No desenvolvimento ágil, a equipe é autogerenciada e compartilha responsabilidades, incluindo o gerenciamento de testes. No entanto, atividades de gerenciamento de testes que abrangem várias equipes, como padronização, métricas e alinhamento estratégico, podem ser tratadas por um gerente de testes externo à equipe. Enquanto isso, dentro da equipe, algumas tarefas de gerenciamento de testes (como priorização e definição de critérios de aceite) são feitas pelo próprio time, incluindo desenvolvedores e testadores."
    },
    {
      "id": 123,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes é uma vantagem da abordagem de toda a equipe?",
      "options": [
        {
          "option": "Equipes sem testadores",
          "isCorrect": false
        },
        {
          "option": "Membros de equipe especialistas",
          "isCorrect": false
        },
        {
          "option": "Tamanhos de equipe maiores",
          "isCorrect": false
        },
        {
          "option": "Dinâmica de equipe melhorada",
          "isCorrect": true
        }
      ],
      "comments": "A abordagem de toda a equipe melhora a dinâmica da equipe, pois promove a colaboração e a responsabilidade compartilhada entre todos os membros, resultando em um ambiente de trabalho mais coeso e eficaz."
    },
    {
      "id": 124,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes afirmações sobre a independência dos testes é CORRETA?",
      "options": [
        {
          "option": "A familiaridade dos desenvolvedores com seu próprio código significa que eles encontram poucos defeitos nele, no entanto, seu conhecimento de software compartilhado com os testadores significa que esses defeitos também seriam encontrados pelos testadores.",
          "isCorrect": false
        },
        {
          "option": "Testadores de fora da equipe de desenvolvimento são mais independentes do que testadores de dentro da equipe, mas os testadores de dentro da equipe são mais propensos a serem culpados por atrasos no lançamento do produto.",
          "isCorrect": false
        },
        {
          "option": "Testadores independentes encontrarão defeitos devido à sua perspectiva técnica diferente da dos desenvolvedores, mas sua independência pode levar a um relacionamento adverso com os desenvolvedores.",
          "isCorrect": true
        },
        {
          "option": "Testes independentes requerem testadores que estão fora da equipe de desenvolvimento e, idealmente, fora da organização, no entanto, esses testadores têm dificuldade em entender o domínio da aplicação.",
          "isCorrect": false
        }
      ],
      "comments": "Testadores independentes têm uma perspectiva diferente da dos desenvolvedores, o que os ajuda a identificar falhas que os próprios desenvolvedores podem não notar. No entanto, essa independência pode criar um relacionamento adverso, pois os desenvolvedores podem ver os testadores como 'caçadores de defeitos', o que pode gerar atritos."
    },
    {
      "id": 125,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes é um objetivo típico de teste?",
      "options": [
        {
          "option": "Encontrar e corrigir defeitos no objeto de teste",
          "isCorrect": false
        },
        {
          "option": "Manter comunicações eficazes com os desenvolvedores",
          "isCorrect": false
        },
        {
          "option": "Validar que os requisitos legais foram atendidos",
          "isCorrect": false
        },
        {
          "option": "Construir confiança na qualidade do objeto de teste",
          "isCorrect": true
        }
      ],
      "comments": "Um dos objetivos principais do teste é construir confiança na qualidade do objeto de teste, garantindo que ele atenda aos requisitos e funcione conforme esperado, o que é essencial para a satisfação do cliente e o sucesso do projeto."
    },
    {
      "id": 126,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Um designer documenta um design para uma interface de usuário que não aborda adequadamente os usuários com deficiência porque o designer está cansado. O programador implementa a interface de usuário de acordo com o design, mas como está trabalhando sob forte pressão de tempo, não inclui tratamento adequado de exceções em seu código para cálculos de bônus. Quando o sistema operacional é usado, reclamações são feitas por alguns usuários com deficiência sobre a interface e a empresa é subsequentemente multada pela autoridade reguladora relevante. Ninguém percebe que os cálculos de bônus às vezes estão incorretos. Qual das seguintes afirmações está CORRETA?",
      "options": [
        {
          "option": "O erro de cálculo de bônus é um defeito que ocasionalmente ocorre.",
          "isCorrect": false
        },
        {
          "option": "A multa recebida por não abordar alguns usuários com deficiência é uma falha.",
          "isCorrect": false
        },
        {
          "option": "O programador trabalhando sob forte pressão de tempo é uma causa raiz.",
          "isCorrect": true
        },
        {
          "option": "O design da interface de usuário inclui um erro do designer.",
          "isCorrect": false
        }
      ],
      "comments": "A pressão de tempo sob a qual o programador estava trabalhando é identificada como a causa raiz, pois contribuiu para a falta de tratamento adequado de exceções no código. A identificação de causas raiz é crucial para entender por que os defeitos ocorrem e como podem ser evitados no futuro."
    },
    {
      "id": 127,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Condições de teste de alto nível estão sendo usadas por testadores para gerar casos de teste e executar testes. Mesmo que as condições de teste permaneçam as mesmas, os casos de teste são variados a cada vez. Qual dos seguintes 'princípios de teste' está sendo abordado através da variação dos casos de teste?",
      "options": [
        {
          "option": "Os testes se desgastam",
          "isCorrect": true
        },
        {
          "option": "Falácia da ausência de defeitos",
          "isCorrect": false
        },
        {
          "option": "Teste antecipado economiza tempo e dinheiro",
          "isCorrect": false
        },
        {
          "option": "Defeitos se agrupam juntos",
          "isCorrect": false
        }
      ],
      "comments": "O princípio de que 'os testes se desgastam' refere-se à ideia de que, com o tempo, os mesmos casos de teste podem se tornar menos eficazes na detecção de novos defeitos. Variar os casos de teste ajuda a mitigar esse efeito, garantindo que diferentes aspectos do sistema sejam testados."
    },
    {
      "id": 128,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Dadas as seguintes tarefas de teste:\n 1-Derivar casos de teste a partir de condições de teste \n 2-Identificar testware reutilizável \n 3-Organizar casos de teste em procedimentos de teste \n 4-Avaliar a base de teste e o objeto de teste \n E as seguintes atividades de teste: \n A-Análise de teste \n B-Projeto de teste \n C-Implementação de teste \n D-Conclusão de teste \nQual das seguintes opções MELHOR corresponde às tarefas com as atividades?",
      "options": [
        {
          "option": "1B, 2A, 3D, 4C",
          "isCorrect": false
        },
        {
          "option": "1B, 2D, 3C, 4A",
          "isCorrect": true
        },
        {
          "option": "1C, 2A, 3B, 4D",
          "isCorrect": false
        },
        {
          "option": "1C, 2D, 3A, 4B",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1B, 2D, 3C, 4A \n A correspondência correta das tarefas com as atividades de teste é: Derivar casos de teste a partir de condições de teste (Projeto de teste), Identificar testware reutilizável (Conclusão de teste), Organizar casos de teste em procedimentos de teste (Implementação de teste), Avaliar a base de teste e o objeto de teste (Análise de teste)."
    },
    {
      "id": 129,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Considerando o seguinte testware: \n i-Relatório de conclusão de teste \n ii-Dados armazenados em um banco de dados usados para entradas de teste e resultados esperados \n iii-A lista de elementos necessários para construir o ambiente de teste \n iv-Sequências documentadas de casos de teste na ordem de execução \n v-Casos de teste\n Qual das seguintes opções MELHOR mostra o testware produzido como resultado da realização da implementação do teste?",
      "options": [
        {
          "option": "ii, iv",
          "isCorrect": true
        },
        {
          "option": "iii, v",
          "isCorrect": false
        },
        {
          "option": "i, ii, v",
          "isCorrect": false
        },
        {
          "option": "i, iii, iv",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: ii, iv \n Durante a implementação do teste, os dados armazenados em um banco de dados usados para entradas de teste e resultados esperados, bem como as sequências documentadas de casos de teste na ordem de execução, são produzidos. Esses elementos são essenciais para a execução dos testes e para garantir que os resultados esperados sejam comparados corretamente com os resultados reais."
    },
    {
      "id": 130,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes é a descrição MAIS provável de uma tarefa realizada por alguém em um papel de gerenciamento de teste?",
      "options": [
        {
          "option": "Avaliar a base de teste e o objeto de teste",
          "isCorrect": false
        },
        {
          "option": "Definir requisitos de ambiente de teste",
          "isCorrect": false
        },
        {
          "option": "Avaliar a testabilidade do objeto de teste",
          "isCorrect": false
        },
        {
          "option": "Criar relatório de conclusão de teste",
          "isCorrect": true
        }
      ],
      "comments": "Criar um relatório de conclusão de teste é uma tarefa típica de um gerente de teste. Este relatório resume os resultados dos testes, destacando as descobertas, problemas e recomendações. Ele é essencial para comunicar o status do teste e a qualidade do produto para as partes interessadas."
    },
    {
      "id": 131,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes é uma vantagem da abordagem de equipe inteira?",
      "options": [
        {
          "option": "Melhoria na comunicação entre os membros da equipe",
          "isCorrect": true
        },
        {
          "option": "Diminuição da responsabilidade individual pela qualidade",
          "isCorrect": false
        },
        {
          "option": "Implantação mais rápida de entregáveis para os usuários finais",
          "isCorrect": false
        },
        {
          "option": "Redução da colaboração com usuários comerciais externos",
          "isCorrect": false
        }
      ],
      "comments": "A abordagem de equipe inteira promove a melhoria na comunicação entre os membros da equipe, pois todos os membros são incentivados a colaborar e compartilhar informações. Isso resulta em uma melhor compreensão dos objetivos do projeto e em uma maior coesão da equipe."
    },
    {
      "id": 132,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Dadas as seguintes vantagens e desvantagens da independência do teste:\n i-Os testadores trabalham em um local diferente dos desenvolvedores \n ii-Os testadores questionam os pressupostos que os programadores fazem ao escrever o código \n iii-Uma dinâmica de confronto foi estabelecida entre testadores e desenvolvedores \n iv-Os desenvolvedores convenceram-se de que os testadores são principalmente responsáveis pela qualidade \n v-Os testadores têm viéses diferentes dos mantidos pelos desenvolvedores \n Quais são MAIS prováveis de serem consideradas vantagens?",
      "options": [
        {
          "option": "i, iv",
          "isCorrect": false
        },
        {
          "option": "ii, v",
          "isCorrect": true
        },
        {
          "option": "i, iii, iv",
          "isCorrect": false
        },
        {
          "option": "ii, iii, v",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: ii, v \n Os testadores que questionam os pressupostos dos programadores (ii) e que têm viéses diferentes (v) são considerados vantagens da independência do teste. \n Isso porque eles trazem uma perspectiva nova e crítica, ajudando a identificar problemas que podem não ser evidentes para os desenvolvedores."
    },
    {
      "id": 133,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes respostas descreve uma condição de teste?",
      "options": [
        {
          "option": "Uma característica distinta de um componente ou sistema",
          "isCorrect": false
        },
        {
          "option": "Casos de teste projetados para executar combinações de condições e ações resultantes delas",
          "isCorrect": false
        },
        {
          "option": "O grau em que um produto de software fornece funções que atendem às necessidades declaradas e implícitas quando",
          "isCorrect": false
        },
        {
          "option": "Um aspecto testável de um componente ou sistema identificado como base para os testes",
          "isCorrect": true
        }
      ],
      "comments": "Uma condição de teste é um aspecto testável de um componente ou sistema que é identificado como base para os testes. Ela serve como um ponto de partida para o desenvolvimento de casos de teste, garantindo que todos os aspectos importantes do sistema sejam verificados."
    },
    {
      "id": 134,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes declarações é um objetivo válido para os testes?",
      "options": [
        {
          "option": "Para provar que qualquer defeito remanescente não causará nenhuma falha",
          "isCorrect": false
        },
        {
          "option": "O teste deve começar o mais tarde possível para que o desenvolvimento tenha tempo suficiente para criar um bom produto",
          "isCorrect": false
        },
        {
          "option": "Para validar se o objeto de teste funciona como esperado pelos usuários e outras partes interessadas",
          "isCorrect": true
        },
        {
          "option": "Para provar que todos os possíveis defeitos são identificados",
          "isCorrect": false
        }
      ],
      "comments": "O objetivo dos testes é validar se o objeto de teste funciona conforme esperado pelos usuários e outras partes interessadas. Isso garante que o produto atenda aos requisitos e expectativas, proporcionando confiança na sua qualidade. Testes não podem provar a ausência de defeitos, mas podem demonstrar que o sistema funciona conforme o esperado em cenários específicos."
    },
    {
      "id": 135,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes declarações descreve corretamente a diferença entre teste e depuração?",
      "options": [
        {
          "option": "Os testes não removem as falhas; mas a depuração remove os defeitos que causam as falhas",
          "isCorrect": false
        },
        {
          "option": "Os testes dinâmicos mostram falhas causadas por defeitos; a depuração elimina os defeitos, que são a fonte das falhas",
          "isCorrect": true
        },
        {
          "option": "Os testes dinâmicos previnem as causas das falhas; a depuração remove as falhas",
          "isCorrect": false
        },
        {
          "option": "Os testes identificam a fonte dos defeitos; a depuração analisa os defeitos e propõe atividades de prevenção",
          "isCorrect": false
        }
      ],
      "comments": "Os testes dinâmicos são usados para identificar falhas no sistema, que são causadas por defeitos. A depuração, por outro lado, é o processo de localizar e corrigir esses defeitos. Portanto, enquanto os testes revelam a presença de falhas, a depuração é responsável por eliminar os defeitos que causam essas falhas."
    },
    {
      "id": 136,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das declarações abaixo descreve a situação mais comum para uma falha descoberta durante os testes ou na produção?",
      "options": [
        {
          "option": "O algoritmo de computação utilizou as variáveis de entrada erradas",
          "isCorrect": false
        },
        {
          "option": "O desenvolvedor interpretou erroneamente a exigência do algoritmo",
          "isCorrect": false
        },
        {
          "option": "O produto falhou quando o usuário selecionou uma opção em uma caixa de diálogo",
          "isCorrect": true
        },
        {
          "option": "A versão errada de um arquivo de código fonte compilado foi incluída na compilação",
          "isCorrect": false
        }
      ],
      "comments": "A falha mais comum durante os testes ou na produção ocorre quando o produto não se comporta conforme esperado em uma situação específica, como quando um usuário seleciona uma opção em uma caixa de diálogo. Isso pode ser devido a um defeito no código ou a uma interpretação incorreta dos requisitos."
    },
    {
      "id": 137,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "O Sr. Test tem testado aplicações de software em dispositivos móveis por um período de 5 anos. Ele tem uma grande experiência em testar aplicações móveis e alcança os melhores resultados em um tempo mais curto do que outros. \n Durante vários meses, o Sr. Test não modificou os casos de testes automatizados existentes e não criou casos de testes. Isto leva a que cada vez menos defeitos sejam encontrados através da execução dos testes. \n Que princípio de teste o Sr. Test não observou?",
      "options": [
        {
          "option": "A repetição dos mesmos testes não encontrará novos defeitos",
          "isCorrect": true
        },
        {
          "option": "Os testes dependem do ambiente",
          "isCorrect": false
        },
        {
          "option": "Não é possível realizar testes exaustivos",
          "isCorrect": false
        },
        {
          "option": "Defeitos agrupados",
          "isCorrect": false
        }
      ],
      "comments": "O Sr. Test não observou o princípio de que a repetição dos mesmos testes não encontrará novos defeitos. Com o tempo, os testes se tornam menos eficazes na detecção de novos problemas, pois os defeitos que eles foram projetados para encontrar já foram corrigidos. É importante atualizar e diversificar os casos de teste para continuar a encontrar novos defeitos."
    },
    {
      "id": 138,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "De que forma os testes podem ser parte da Garantia de Qualidade?",
      "options": [
        {
          "option": "Mede a qualidade do software em termos de número de casos de teste executados",
          "isCorrect": false
        },
        {
          "option": "Assegura que as normas da organização sejam seguidas",
          "isCorrect": false
        },
        {
          "option": "Os testes reduzem o risco de má qualidade do software",
          "isCorrect": true
        },
        {
          "option": "Ela garante que os requisitos sejam suficientemente detalhados",
          "isCorrect": false
        }
      ],
      "comments": "Os testes são uma parte essencial da Garantia de Qualidade, pois ajudam a identificar defeitos e problemas no software antes que ele seja liberado para os usuários finais. Ao detectar e corrigir esses problemas, os testes reduzem o risco de má qualidade do software, garantindo que ele funcione conforme esperado e atenda aos requisitos especificados."
    },
    {
      "id": 139,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes atividades faz parte da atividade principal 'análise de teste' no processo de teste?",
      "options": [
        {
          "option": "Análise das lições aprendidas para a melhoria do processo",
          "isCorrect": false
        },
        {
          "option": "Identificação de qualquer infraestrutura e ferramentas necessárias",
          "isCorrect": false
        },
        {
          "option": "Criação de conjuntos de teste a partir de scripts de teste",
          "isCorrect": false
        },
        {
          "option": "Avaliando a base de teste de testabilidade",
          "isCorrect": true
        }
      ],
      "comments": "A análise de teste envolve a avaliação da base de teste para determinar sua testabilidade. Isso inclui verificar se os requisitos são claros, completos e sem ambiguidades, o que é crucial para o sucesso do processo de teste.\n As atividades e suas respectivas fases:\n Identificação de qualquer infraestrutura e ferramentas necessárias → Planejamento de Teste\nAvaliando a base de teste de testabilidade → Análise de Teste \n Criação de conjuntos de teste a partir de scripts de teste → Implementação de Teste \n Análise das lições aprendidas para a melhoria do processo → Conclusão do Teste"
    },
    {
      "id": 140,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Combine os seguintes produtos: \n Trabalho de teste: \n(1) Conjunto de teste \n(2) Caso de teste \n(3) Roteiro de teste \n(4) Carta de teste \nDescrição correta:\n(a) Um conjunto de scripts de teste a serem executados em uma execução de teste específica \n(b) Um conjunto de instruções para a execução de um teste \n(c) Contém os resultados esperados \n(d) Documentação das atividades de teste em testes exploratórios baseados em sessões",
      "options": [
        {
          "option": "1A, 2C, 3D, 4B",
          "isCorrect": false
        },
        {
          "option": "1A, 2C, 3B, 4D",
          "isCorrect": true
        },
        {
          "option": "1D, 2C, 3B, 4A",
          "isCorrect": false
        },
        {
          "option": "1D, 2B, 3A, 4C",
          "isCorrect": false
        }
      ],
      "comments": "A combinação correta é 1A, 2C, 3B, 4D.\n Um conjunto de teste (1) é um conjunto de scripts de teste a serem executados em uma execução de teste específica (A). \n Um caso de teste (2) contém os resultados esperados (C). \n Um roteiro de teste (3) é um conjunto de instruções para a execução de um teste (B). \n Uma carta de teste (4) documenta as atividades de teste em testes exploratórios baseados em sessões (D)."
    },
    {
      "id": 141,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos itens a seguir fornece a definição do termo caso de teste?",
      "options": [
        {
          "option": "Um conjunto de condições prévias, insumos, ações, resultados esperados e pós condições, desenvolvido com base em condições de teste",
          "isCorrect": true
        },
        {
          "option": "Produtos de trabalho produzidos durante o processo de teste para uso no planejamento, projeto, execução, avaliação e relatórios sobre testes",
          "isCorrect": false
        },
        {
          "option": "Uma fonte para determinar um resultado esperado para comparar com o resultado real do sistema em teste",
          "isCorrect": false
        },
        {
          "option": "Subconjunto do domínio do valor de uma variável dentro de um componente ou sistema no qual todos os valores devem ser tratados da mesma forma com base na especificação",
          "isCorrect": false
        }
      ],
      "comments": "Um caso de teste é um conjunto de condições prévias, insumos, ações, resultados esperados e pós-condições, desenvolvido com base em condições de teste. Ele é usado para verificar se o sistema em teste funciona conforme o esperado em cenários específicos, ajudando a identificar defeitos e garantir a qualidade do software."
    },
    {
      "id": 142,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é um objetivo típico dos testes?",
      "options": [
        {
          "option": "Garantia de testes completos",
          "isCorrect": false
        },
        {
          "option": "Comparação dos resultados reais com os resultados esperados",
          "isCorrect": false
        },
        {
          "option": "Para validar os trabalhos do plano do projeto, conforme necessário",
          "isCorrect": false
        },
        {
          "option": "Encontrar defeitos e falhas",
          "isCorrect": true
        }
      ],
      "comments": "O objetivo principal dos testes é encontrar defeitos e falhas no software. Isso ajuda a garantir que o produto final funcione conforme o esperado e atenda aos requisitos especificados. Embora a comparação de resultados e a validação do plano do projeto sejam partes do processo de teste, o foco principal é identificar problemas que possam comprometer a qualidade do software."
    },
    {
      "id": 143,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é um exemplo de falha em um sistema de controle de velocidade 'cruize control' de um carro?",
      "options": [
        {
          "option": "Código desnecessário que soa um alarme quando a inversão de marcha foi incluída no sistema",
          "isCorrect": false
        },
        {
          "option": "O desenvolvedor do sistema esqueceu de renomear variáveis após uma operação de cortar e colar",
          "isCorrect": false
        },
        {
          "option": "A especificação do projeto do sistema indica erroneamente as velocidades",
          "isCorrect": false
        },
        {
          "option": "O sistema deixa de manter uma velocidade definida quando o volume do rádio é aumentado ou diminuído",
          "isCorrect": true
        }
      ],
      "comments": "Uma falha ocorre quando o sistema não se comporta conforme o esperado. No caso do controle de velocidade 'cruize control', a falha é evidente quando o sistema não consegue manter a velocidade definida ao ajustar o volume do rádio, indicando um problema de integração ou interferência entre os sistemas."
    },
    {
      "id": 144,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes aspectos é mais um defeito do que uma causa raiz em um rastreador de fitness?",
      "options": [
        {
          "option": "Uma variável de configuração incorreta implementada para a função GPS poderia causar problemas de localização durante o horário de verão",
          "isCorrect": true
        },
        {
          "option": "Como o autor dos requisitos não estava familiarizado com o domínio do treinamento físico, ele, portanto, assumiu erroneamente que os usuários queriam batimentos cardíacos em batidas por hora",
          "isCorrect": false
        },
        {
          "option": "Como a projetista nunca havia trabalhado em dispositivos que pudessem ser usados, ela, como projetista da interface do usuário, entendeu mal os efeitos da luz solar refletida",
          "isCorrect": false
        },
        {
          "option": "O testador da interface do smartphone não tinha sido treinado em testes de transição de estado, então falhou um defeito grave",
          "isCorrect": false
        }
      ],
      "comments": "Um defeito é um erro no código ou configuração que pode causar um comportamento inesperado no sistema. A variável de configuração incorreta para a função GPS é um exemplo de defeito, pois afeta diretamente a funcionalidade do rastreador de fitness, enquanto as outras opções são mais relacionadas a causas raízes ou problemas de entendimento."
    },
    {
      "id": 145,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Como resultado da análise de risco, mais testes estão sendo direcionados para aquelas áreas do sistema em teste onde os testes iniciais encontraram mais defeitos do que a média. Qual dos seguintes princípios de teste está sendo aplicado?",
      "options": [
        {
          "option": "Cuidado com o paradoxo do pesticida",
          "isCorrect": false
        },
        {
          "option": "Os testes são dependentes do contexto",
          "isCorrect": false
        },
        {
          "option": "A ausência de erros é uma falácia",
          "isCorrect": false
        },
        {
          "option": "Defeitos agrupados",
          "isCorrect": true
        }
      ],
      "comments": "O princípio dos 'defeitos agrupados' sugere que a maioria dos defeitos em um sistema tende a se concentrar em um pequeno número de módulos ou áreas. Direcionar mais testes para essas áreas pode ajudar a identificar e corrigir mais problemas, melhorando a qualidade geral do sistema."
    },
    {
      "id": 146,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Dadas as seguintes atividades:\n(a) Projeto do teste\n(b) Implementação de testes\n(c) Execução de testes\n(d) Conclusão do teste \n e tarefas de teste:\n(1) Entrada de pedidos de alteração para relatórios de defeitos em aberto\n(2) Identificação de dados de teste para apoiar os casos de teste\n(3) Priorização de procedimentos de teste e criação de dados de teste\n(4) Analisar as discrepâncias para determinar sua causa\nqual dos seguintes MELHORES combina as atividades com as tarefas?",
      "options": [
        {
          "option": "A-2, B-1, C-3, D-4",
          "isCorrect": false
        },
        {
          "option": "A-2, B-3, C-4, D-1",
          "isCorrect": true
        },
        {
          "option": "A-3, B-2, C-1, D-4",
          "isCorrect": false
        },
        {
          "option": "A-3, B-2, C-4, D-1",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A-2, B-3, C-4, D-1 \n A combinação correta das atividades e tarefas de teste é: (a) Projeto do teste - Identificação de dados de teste para apoiar os casos de teste (2), (b) Implementação de testes - Priorização de procedimentos de teste e criação de dados de teste (3), (c) Execução de testes - Analisar as discrepâncias para determinar sua causa (4), (d) Conclusão do teste - Entrada de pedidos de alteração para relatórios de defeitos em aberto (1)."
    },
    {
      "id": 147,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes MELHORES descreve como o valor é agregado ao manter a rastreabilidade entre a base de teste e os artefatos de teste?",
      "options": [
        {
          "option": "As áreas que podem ser impactadas por efeitos colaterais de uma mudança podem ser alvo de testes de confirmação",
          "isCorrect": false
        },
        {
          "option": "É possível determinar se um novo caso de teste aumentou a cobertura das exigências",
          "isCorrect": true
        },
        {
          "option": "Os testes de manutenção podem ser totalmente automatizados com base em mudanças nas exigências iniciais",
          "isCorrect": false
        },
        {
          "option": "Os gerentes de testes podem identificar quais testadores encontraram os defeitos de maior gravidade",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: É possível determinar se um novo caso de teste aumentou a cobertura das exigências.\nManter a rastreabilidade entre a base de teste e os artefatos de teste permite que as equipes de teste determinem se novos casos de teste estão efetivamente cobrindo os requisitos especificados. Isso é crucial para garantir que todas as funcionalidades esperadas sejam testadas e que o sistema atenda às necessidades dos usuários finais."
    },
    {
      "id": 148,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual das seguintes qualidades é MAIS provável que seja encontrada na mentalidade de um testador e não na de um desenvolvedor?",
      "options": [
        {
          "option": "Atenção aos detalhes",
          "isCorrect": false
        },
        {
          "option": "A mentalidade de um testador tende a crescer e amadurecer à medida que o testador ganha experiência",
          "isCorrect": false
        },
        {
          "option": "Boa comunicação com os membros da equipe",
          "isCorrect": false
        },
        {
          "option": "Capacidade de ver o que pode dar errado",
          "isCorrect": true
        }
      ],
      "comments": "Os testadores são frequentemente treinados para antecipar problemas e identificar áreas onde o software pode falhar. Essa mentalidade de 'ver o que pode dar errado' é essencial para encontrar defeitos que podem não ser imediatamente óbvios durante o desenvolvimento."
    },
    {
      "id": 149,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "O que é qualidade?",
      "options": [
        {
          "option": "Atividades focadas em proporcionar confiança de que os requisitos de qualidade serão cumpridos",
          "isCorrect": false
        },
        {
          "option": "O grau em que um componente ou sistema satisfaz as necessidades declaradas e implícitas de suas diversas partes interessadas",
          "isCorrect": true
        },
        {
          "option": "O grau em que um componente ou sistema protege informações e dados para que as pessoas ou outros componentes ou sistemas tenham o grau de acesso adequado a seus tipos e níveis de autorização",
          "isCorrect": false
        },
        {
          "option": "Os custos totais incorridos em atividades e questões de qualidade e frequentemente divididos em custos de prevenção, custos de avaliação, custos de falhas internas e custos de falhas externas",
          "isCorrect": false
        }
      ],
      "comments": "Qualidade é definida como o grau em que um sistema ou componente atende às necessidades declaradas e implícitas de suas partes interessadas. Isso envolve não apenas a funcionalidade, mas também a usabilidade, confiabilidade, eficiência e outros atributos que contribuem para a satisfação do usuário."
    },
    {
      "id": 150,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é um objetivo típico do teste?",
      "options": [
        {
          "option": "Comparação dos resultados reais com os resultados esperados",
          "isCorrect": false
        },
        {
          "option": "Prevenir defeitos",
          "isCorrect": true
        },
        {
          "option": "Analisando a causa do fracasso",
          "isCorrect": false
        },
        {
          "option": "Reparação de defeitos",
          "isCorrect": false
        }
      ],
      "comments": "Um dos objetivos principais dos testes é prevenir defeitos, garantindo que o software seja desenvolvido de acordo com os requisitos e que potenciais problemas sejam identificados e corrigidos antes que o produto seja liberado."
    },
    {
      "id": 151,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Um telefone tocando momentaneamente distrai um programador, fazendo com que o programador programe inadequadamente a lógica que verifica o limite superior de uma variável de entrada. Mais tarde, durante os testes do sistema, um testador percebe que este campo de entrada aceita valores de entrada inválidos. A lógica codificada impropriamente para a verificação do limite superior é:",
      "options": [
        {
          "option": "O defeito",
          "isCorrect": true
        },
        {
          "option": "O erro",
          "isCorrect": false
        },
        {
          "option": "A causa raiz",
          "isCorrect": false
        },
        {
          "option": "O fracasso",
          "isCorrect": false
        }
      ],
      "comments": "A lógica codificada incorretamente que permite a entrada de valores inválidos é considerada um defeito. Um defeito é um erro no código que pode levar a um comportamento inesperado ou incorreto do sistema."
    },
    {
      "id": 152,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Um proprietário de produto diz que seu papel como testador em uma equipe Ágil é pegar todos os bugs antes do final de cada iteração.\n Qual dos seguintes é um princípio de teste que poderia ser usado para responder a esta falsa afirmação?",
      "options": [
        {
          "option": "Análise da causa raiz",
          "isCorrect": false
        },
        {
          "option": "Agrupamento de defeitos",
          "isCorrect": false
        },
        {
          "option": "Ausência de erros de falácia",
          "isCorrect": false
        },
        {
          "option": "Os testes mostram a presença de defeitos",
          "isCorrect": true
        }
      ],
      "comments": "O princípio de que 'os testes mostram a presença de defeitos' destaca que os testes podem revelar a existência de defeitos, mas não podem garantir que todos os defeitos foram encontrados. Portanto, é irrealista esperar que todos os bugs sejam capturados antes do final de cada iteração."
    },
    {
      "id": 153,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Os programadores frequentemente escrevem e executam testes unitários contra o código que eles escreveram. Durante esta atividade de autoteste, qual dos seguintes aspectos é uma mentalidade de testador que os programadores devem adotar para realizar estes testes unitários de forma eficaz?",
      "options": [
        {
          "option": "Atenção aos detalhes",
          "isCorrect": true
        },
        {
          "option": "Avaliação de defeitos de código",
          "isCorrect": false
        },
        {
          "option": "Boa habilidade de comunicação",
          "isCorrect": false
        },
        {
          "option": "Cobertura de código",
          "isCorrect": false
        }
      ],
      "comments": "Durante os testes unitários, os programadores devem adotar uma mentalidade de atenção aos detalhes para identificar pequenos erros que podem levar a defeitos maiores. Essa atenção aos detalhes é crucial para garantir que o código funcione conforme o esperado."
    },
    {
      "id": 154,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Considere as seguintes atividades de teste:\n(1) Seleção de testes de regressão\n(2) Avaliando a completude da execução do teste\n(3) Identificar quais histórias de usuários têm relatórios de defeitos em aberto\n(4) Avaliar se o número de testes para cada exigência é consistente com o nível de risco do produto\nConsidere as seguintes maneiras como a rastreabilidade pode ajudar nos testes:\n(a) Melhorar a compreensibilidade dos relatórios de status dos testes para incluir o status dos itens de base do teste\n(b) Tornar os testes auditáveis\n(c) Fornecer informações para avaliar a qualidade do processo\n(d) Analisar o impacto das mudanças\nQual dos seguintes aspectos combina a atividade de teste com a forma como a rastreabilidade pode auxiliar essa atividade?",
      "options": [
        {
          "option": "1b; 2d; 3a; 4c",
          "isCorrect": false
        },
        {
          "option": "1d; 2c; 3a; 4b",
          "isCorrect": false
        },
        {
          "option": "1d; 2b; 3a; 4c",
          "isCorrect": true
        },
        {
          "option": "1d; 2b; 3c; 4a",
          "isCorrect": false
        }
      ],
      "comments": "A rastreabilidade é uma ferramenta poderosa no processo de teste, pois permite analisar o impacto das mudanças (1d), tornar os testes auditáveis (2b), melhorar a compreensibilidade dos relatórios de status dos testes (3a) e fornecer informações para avaliar a qualidade do processo (4c). Isso garante que as atividades de teste sejam bem documentadas e que as mudanças no sistema sejam gerenciadas de forma eficaz."
    },
    {
      "id": 155,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Um testador identificou um problema potencial de desempenho em uma discussão sobre a estrutura de banco de dados proposta. Qual dos seguintes aspectos é uma contribuição de teste para o sucesso que o MELHOR corresponde a esta situação?",
      "options": [
        {
          "option": "Reduzindo o risco de defeitos fundamentais de projeto",
          "isCorrect": true
        },
        {
          "option": "Reduzindo o risco de funcionalidade não testada",
          "isCorrect": false
        },
        {
          "option": "Permitindo que os testes requeridos sejam identificados em um estágio inicial",
          "isCorrect": false
        },
        {
          "option": "Assegurar que os processos sejam realizados corretamente",
          "isCorrect": false
        }
      ],
      "comments": "A identificação precoce de problemas de desempenho em discussões de design ajuda a reduzir o risco de defeitos fundamentais de projeto. Isso permite que a equipe de desenvolvimento faça ajustes antes que o sistema seja implementado, economizando tempo e recursos."
    },
    {
      "id": 156,
      "isMultipleChoice": false,
      "tag": ["Capítulo 1"],
      "question": "Qual dos seguintes é um exemplo de uma tarefa que pode ser realizada como parte do processo de teste?",
      "options": [
        {
          "option": "Dados de teste de projeto",
          "isCorrect": true
        },
        {
          "option": "Escrever uma história de usuário",
          "isCorrect": false
        },
        {
          "option": "Atribuição de uma versão a um item de teste",
          "isCorrect": false
        },
        {
          "option": "Análise de um defeito",
          "isCorrect": false
        }
      ],
      "comments": "Projetar dados de teste é uma tarefa essencial no processo de teste, pois garante que os casos de teste sejam executados com dados relevantes e abrangentes, permitindo uma validação eficaz do sistema."
    },
    //capitulo 2 ----------------------------------------------------------------
    {
      "id": 201,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Considere a seguinte regra: 'para cada atividade do SDLC, há uma atividade de teste correspondente'. Em quais modelos de SDLC essa regra é válida?",
      "options": [
        { "option": "Somente em modelos sequenciais.", "isCorrect": false },
        { "option": "Em modelos de sequenciais, incrementais e iterativos.", "isCorrect": true },
        { "option": "Somente em modelos iterativos.", "isCorrect": false },
        { "option": "Somente em modelos iterativos e incrementais.", "isCorrect": false }
      ],
      "comments": "A regra de que para cada atividade do SDLC (Software Development Life Cycle) há uma atividade de teste correspondente é válida em modelos sequenciais, incrementais e iterativos.\nNos modelos sequenciais, como o modelo em cascata, cada fase do desenvolvimento é seguida por uma fase de teste correspondente.\nNos modelos incrementais e iterativos, o desenvolvimento e os testes são realizados em ciclos, permitindo que cada incremento ou iteração seja testado antes de passar para o próximo.\nIsso garante que o software seja continuamente verificado e validado, independentemente do modelo de desenvolvimento adotado."
    },
    {
      "id": 202,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes afirmações descreve MELHOR a abordagem de desenvolvimento orientado por testes de aceite (ATDD)?",
      "options": [
        { "option": "No ATDD, os testes são baseados no comportamento desejado do software, o que facilita a compreensão dos membros da equipe.", "isCorrect": false },
        { "option": "No ATDD, os critérios de aceite geralmente são criados com base no formato dado/quando/então.", "isCorrect": false },
        { "option": "No ATDD, os testes são criados com base em critérios de aceite para orientar o desenvolvimento do software.", "isCorrect": true },
        { "option": "No ATDD, os casos de teste são criados principalmente no teste de componentes e são orientados para o código.", "isCorrect": false }
      ],
      "comments": "A resposta correta é: No ATDD, os testes são criados com base em critérios de aceite para orientar o desenvolvimento do software\nA abordagem de Desenvolvimento Orientado por Testes de Aceite (ATDD) foca na criação de testes baseados em critérios de aceite definidos antes do desenvolvimento do software.\nEsses critérios são acordados entre as partes interessadas, incluindo clientes, desenvolvedores e testadores, para garantir que o software atenda às expectativas do cliente.\nDiferente do TDD, que é mais orientado ao código e ao teste de componentes, o ATDD é mais voltado para o cliente e frequentemente envolve testes de sistema e de integração.\nO formato dado/quando/então é mais associado ao BDD (Behavior Driven Development), não sendo exclusivo do ATDD."
    },
    {
      "id": 203,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das opções a seguir NÃO é um exemplo da abordagem shift-left?",
      "options": [
        { "option": "Escrever um script de teste antes de definir o processo de gerenciamento de configuração.", "isCorrect": true },
        { "option": "Execução de um teste de eficiência de performance para um componente durante o teste do componente.", "isCorrect": false },
        { "option": "Escrever um teste de componente antes que o código correspondente seja escrito.", "isCorrect": false },
        { "option": "Revisar os requisitos do usuário antes que eles sejam formalmente aceitos pelos stakeholders.", "isCorrect": false }
      ],
      "comments": "A abordagem shift-left refere-se à prática de mover atividades de teste e garantia de qualidade para fases mais iniciais do ciclo de desenvolvimento de software.\nIsso inclui atividades como escrever testes antes do desenvolvimento do código (TDD) ou revisar requisitos antecipadamente.\nNo entanto, 'Escrever um script de teste antes de definir o processo de gerenciamento de configuração' não se alinha com a abordagem shift-left, pois o gerenciamento de configuração é uma prática de suporte que deve estar estabelecida para garantir que os scripts de teste e outros artefatos sejam gerenciados adequadamente desde o início."
    },
    {
      "id": 204,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual dos argumentos abaixo você usaria para convencer seu gerente a organizar retrospectivas no final de cada ciclo de lançamento?",
      "options": [
        {
          "option": "As retrospectivas adotam cinco valores, incluindo coragem e respeito, que são cruciais para manter o aprimoramento contínuo na organização.",
          "isCorrect": false
        },
        {
          "option": "As retrospectivas são muito populares hoje em dia e os clientes gostariam que as adicionássemos aos nossos processos.",
          "isCorrect": false
        },
        {
          "option": "Os pontos fracos do processo, identificados durante a retrospectiva, podem ser analisados e servir como uma lista de tarefas para o programa de melhoria contínua do processo da organização",
          "isCorrect": true
        },
        {
          "option": "A organização de retrospectivas economizará dinheiro, pois os representantes dos usuários finais não fornecem feedback imediato sobre o produto.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é a opção que destaca a utilidade das retrospectivas para identificar pontos fracos no processo.\nDurante as retrospectivas, a equipe pode refletir sobre o ciclo de desenvolvimento recém-concluído, identificar áreas de melhoria e criar um plano de ação para abordar essas questões.\nIsso não só promove a melhoria contínua, mas também ajuda a equipe a se adaptar e melhorar seus processos ao longo do tempo, resultando em um produto final de maior qualidade."
    },
    {
      "id": 205,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Quais tipos de falhas (1-4) se encaixam melhor em quais níveis de teste (A-D)?\n(1) Falhas no comportamento do sistema à medida que ele se desvia das necessidades de negócio do usuário.\n(2) Falhas na comunicação entre os componentes.	\n(3) Falhas na lógica em um módulo.	\n(4) Falhas nas regras de negócios não implementadas corretamente.	\n(A) Teste de componentes.\n(B) Teste de integração de componentes.\n(C) Teste de sistema.\n(D) Teste de aceite.",
      "options": [
        {
          "option": "1C, 2B, 3A, 4D",
          "isCorrect": false
        },
        {
          "option": "1B, 2A, 3D, 4C",
          "isCorrect": false
        },
        {
          "option": "1D, 2B, 3A, 4C",
          "isCorrect": true
        },
        {
          "option": "1D, 2B, 3C, 4A",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1D, 2B, 3A, 4C.\nA resposta correta associa cada tipo de falha ao nível de teste mais apropriado.\nFalhas no comportamento do sistema que se desviam das necessidades de negócio do usuário (1) são melhor identificadas no teste de aceite (D), pois este nível de teste foca em validar se o sistema atende aos requisitos do usuário.\nFalhas na comunicação entre componentes (2) são detectadas no teste de integração de componentes (B), que verifica a interação entre diferentes partes do sistema.\nFalhas na lógica em um módulo (3) são encontradas no teste de componentes (A), que testa unidades individuais de código.\nFinalmente, falhas nas regras de negócios não implementadas corretamente (4) são melhor identificadas no teste de sistema (C), que verifica o comportamento do sistema como um todo."
    },
    {
      "id": 206,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes afirmações sobre o ciclo de vida de desenvolvimento de software escolhido é CORRETA?",
      "options": [
        {
          "option": "Se um modelo de desenvolvimento incremental for utilizado, então o teste estático é realizado nos incrementos iniciais e o teste dinâmico nos incrementos posteriores.",
          "isCorrect": false
        },
        {
          "option": "Se o desenvolvimento de software ágil for utilizado, a automação de teste de sistema substitui a necessidade de testes de regressão.",
          "isCorrect": false
        },
        {
          "option": "Se um modelo de desenvolvimento iterativo for utilizado, então o teste de componentes é tipicamente realizado manualmente pelos desenvolvedores.",
          "isCorrect": false
        },
        {
          "option": "Se um modelo de desenvolvimento sequencial for utilizado, então o teste dinâmico é tipicamente restrito a estágios posteriores no ciclo de vida.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é que, em um modelo de desenvolvimento sequencial, o teste dinâmico é tipicamente restrito a estágios posteriores no ciclo de vida.\nIsso ocorre porque, nos modelos sequenciais, como o modelo em cascata, o desenvolvimento é realizado em fases distintas e sequenciais.\nAs fases iniciais são focadas em planejamento, análise e design, enquanto a implementação e o teste dinâmico ocorrem nas fases posteriores.\nIsso significa que o código executável, necessário para testes dinâmicos, só está disponível nas fases finais, limitando a possibilidade de realizar testes dinâmicos antecipadamente.\nEm contraste, modelos iterativos e incrementais permitem testes em cada iteração, e o desenvolvimento ágil favorece a automação de testes para facilitar testes de regressão frequentes."
    },
    {
      "id": 207,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual dos seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software?",
      "options": [
        {
          "option": "Os testadores devem revisar os produtos de trabalho como parte da próxima fase de desenvolvimento.",
          "isCorrect": false
        },
        {
          "option": "Os testadores devem revisar os produtos de trabalho assim que os rascunhos estiverem disponíveis.",
          "isCorrect": true
        },
        {
          "option": "Os testadores devem revisar os produtos de trabalho antes que a análise e o design de teste comecem.",
          "isCorrect": false
        },
        {
          "option": "Os testadores devem revisar os produtos de trabalho imediatamente após serem publicados.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é que os testadores devem revisar os produtos de trabalho assim que os rascunhos estiverem disponíveis.\nEsta prática é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software, pois permite a detecção precoce de defeitos e a aplicação do princípio do teste antecipado. Ao revisar os produtos de trabalho desde os rascunhos, os testadores podem identificar problemas antes que eles se propaguem para fases posteriores, apoiando a estratégia shift-left, que visa mover as atividades de teste para o início do ciclo de desenvolvimento. Isso ajuda a garantir a qualidade desde o início e a reduzir o custo e o esforço associados à correção de defeitos em fases posteriores."
    },
    {
      "id": 208,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual dos seguintes é um exemplo de uma abordagem de desenvolvimento orientada por testes?",
      "options": [
        {
          "option": "Desenvolvimento Orientado por Cobertura (Coverage-Driven Development)",
          "isCorrect": false
        },
        {
          "option": "Desenvolvimento Orientado por Testes (Test-Driven Development)",
          "isCorrect": true
        },
        {
          "option": "Desenvolvimento Orientado por Recursos (Feature-Driven Development)",
          "isCorrect": false
        },
        {
          "option": "Desenvolvimento Orientado pela Qualidade (Quality-Driven Development)",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é Desenvolvimento Orientado por Testes (Test-Driven Development).\nO TDD é uma abordagem de desenvolvimento onde os testes são escritos antes do código. Isso ajuda a garantir que o código atenda aos requisitos especificados nos testes.\nO TDD, junto com ATDD (Desenvolvimento Orientado por Teste de Aceite) e BDD (Desenvolvimento Orientado pelo Comportamento), implementa o princípio do teste antecipado e segue a abordagem shift-left, onde os testes são definidos antes do desenvolvimento do código.\nEssas abordagens suportam um modelo de desenvolvimento iterativo, permitindo que os testes persistam como testes automatizados para garantir a qualidade do código em futuras adaptações ou refatorações."
    },
    {
      "id": 209,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes afirmações sobre o DevOps é CORRETA?",
      "options": [
        {
          "option": "Para acelerar os lançamentos, a integração contínua é usada para incentivar os desenvolvedores a enviar código rapidamente, sem a necessidade de concluir testes de componentes.",
          "isCorrect": false
        },
        {
          "option": "Para criar uma sinergia aumentada entre testadores, desenvolvedores e operações, os testes devem se tornar totalmente automatizados, sem nenhum teste manual.",
          "isCorrect": false
        },
        {
          "option": "Para tratar tanto desenvolvedores quanto operações igualmente, os testadores alocarão mais esforço para o teste de lançamento pelas operações usando uma abordagem shift-right.",
          "isCorrect": false
        },
        {
          "option": "Para poder atualizar e lançar sistemas com mais frequência, muitos testes de regressão automatizados são necessários para reduzir o perigo de regressão.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Para poder atualizar e lançar sistemas com mais frequência, muitos testes de regressão automatizados são necessários para reduzir o perigo de regressão.\nNo contexto do DevOps, a automação de testes, especialmente testes de regressão, é crucial para garantir que as atualizações frequentes de software não introduzam novos defeitos. Isso é parte de uma abordagem contínua de integração e entrega, onde o feedback rápido e a qualidade do código são mantidos através de testes automatizados. Embora a automação seja uma parte importante, os testes manuais ainda são necessários para validar a experiência do usuário e outros aspectos que não podem ser totalmente automatizados."
    },
    {
      "id": 210,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual dos seguintes é MAIS provável de ser realizado como parte dos testes de sistema?",
      "options": [
        {
          "option": "Testar a interface de um sistema de câmbio de moedas com um sistema bancário externo",
          "isCorrect": false
        },
        {
          "option": "Testar as interações entre a interface do usuário e o banco de dados de um sistema de recursos humanos",
          "isCorrect": false
        },
        {
          "option": "Teste beta de um sistema de aprendizagem remota por desenvolvedores de material didático",
          "isCorrect": false
        },
        {
          "option": "Teste de segurança de um sistema de gestão de crédito por uma equipe de teste independente",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Teste de segurança de um sistema de gestão de crédito por uma equipe de teste independente.\nTeste de Sistema foca no comportamento geral e nos recursos de todo um sistema ou produto, incluindo teste funcional de ponta a ponta e teste não funcional de características de qualidade. Pode envolver simulações de subsistemas e é geralmente realizado por uma equipe de teste independente. Os níveis de teste são diferenciados por atributos como objeto de teste, objetivos do teste, base de teste, defeitos e falhas, abordagem e responsabilidades, visando evitar a sobreposição de atividades de teste."
    },
    {
      "id": 211,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida do desenvolvimento de software?",
      "options": [
        {
          "option": "Para cada atividade de desenvolvimento de software, há uma atividade de teste correspondente",
          "isCorrect": true
        },
        {
          "option": "Para cada nível de teste, há um nível de desenvolvimento correspondente",
          "isCorrect": false
        },
        {
          "option": "Para cada objetivo de teste, há um objetivo de desenvolvimento correspondente",
          "isCorrect": false
        },
        {
          "option": "Para cada atividade de teste de software, há uma atividade de usuário correspondente",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Para cada atividade de desenvolvimento de software, há uma atividade de teste correspondente.\nEsta prática é conhecida como 'teste em paralelo' ou 'teste em conjunto', onde as atividades de teste são planejadas e executadas em paralelo com as atividades de desenvolvimento. Isso ajuda a identificar e corrigir defeitos mais cedo no ciclo de vida do desenvolvimento, reduzindo o custo e o tempo de correção. Além disso, garante que o produto final atenda aos requisitos de qualidade esperados, promovendo uma abordagem de desenvolvimento mais ágil e eficiente."
    },
    {
      "id": 212,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes é um exemplo de uma abordagem de desenvolvimento orientada a testes?",
      "options": [
        {
          "option": "Desenvolvimento Orientado a Testes de Componentes",
          "isCorrect": false
        },
        {
          "option": "Desenvolvimento Orientado a Testes de Sistema",
          "isCorrect": false
        },
        {
          "option": "Desenvolvimento Orientado a Testes de Integração",
          "isCorrect": false
        },
        {
          "option": "Desenvolvimento Orientado a Testes de Aceitação",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Desenvolvimento Orientado a Testes de Aceitação.\nEsta abordagem, também conhecida como Acceptance Test-Driven Development (ATDD), foca em definir critérios de aceitação antes do desenvolvimento começar. Esses critérios são usados para guiar o desenvolvimento e garantir que o software atenda às expectativas do cliente. ATDD promove a colaboração entre desenvolvedores, testadores e stakeholders, assegurando que todos tenham um entendimento claro dos requisitos e que o produto final seja validado contra esses critérios desde o início."
    },
    {
      "id": 213,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes fornece a MELHOR descrição da abordagem de shift-left?",
      "options": [
        {
          "option": "Onde for economicamente viável, atividades de teste são movidas para serem realizadas mais cedo no ciclo de vida do desenvolvimento de software (SDLC) para reduzir o custo total da qualidade, reduzindo o número de defeitos encontrados mais tarde no SDLC.",
          "isCorrect": true
        },
        {
          "option": "Quando têm tempo disponível, os testadores são obrigados a automatizar testes para testes de regressão, começando com testes de componentes e testes de integração de componentes.",
          "isCorrect": false
        },
        {
          "option": "Quando disponível, os testadores são treinados para realizar tarefas no início do SDLC para permitir que mais atividades de teste sejam automatizadas posteriormente no SDLC.",
          "isCorrect": false
        },
        {
          "option": "Quando acordado pelos desenvolvedores, atividades manuais do lado esquerdo do processo de teste são automatizadas para apoiar o princípio de 'testes antecipados economizam tempo e dinheiro'.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Onde for economicamente viável, atividades de teste são movidas para serem realizadas mais cedo no ciclo de vida do desenvolvimento de software (SDLC) para reduzir o custo total da qualidade, reduzindo o número de defeitos encontrados mais tarde no SDLC.\nA abordagem shift-left enfatiza a importância de integrar atividades de teste nas fases iniciais do desenvolvimento de software. Isso permite a identificação precoce de defeitos, o que é geralmente mais econômico e menos disruptivo do que corrigir problemas em fases posteriores. Ao mover os testes para a esquerda no cronograma do projeto, as equipes podem melhorar a qualidade do software e acelerar o tempo de entrega, promovendo uma cultura de desenvolvimento mais proativa e colaborativa."
    },
    {
      "id": 214,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual dos seguintes é MENOS provável de ocorrer como resultado de uma retrospectiva?",
      "options": [
        {
          "option": "A compreensão dos usuários finais sobre os processos de desenvolvimento e teste é aprimorada.",
          "isCorrect": true
        },
        {
          "option": "A eficiência dos testes melhora ao acelerar a configuração de ambientes de teste através da automação.",
          "isCorrect": false
        },
        {
          "option": "Scripts de teste automatizados são aprimorados através de feedback dos desenvolvedores.",
          "isCorrect": false
        },
        {
          "option": "A qualidade dos futuros objetos de teste melhora ao identificar melhorias nas práticas de desenvolvimento.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A compreensão dos usuários finais sobre os processos de desenvolvimento e teste é aprimorada.\nRetrospectivas são reuniões internas focadas em melhorar processos e práticas dentro da equipe de desenvolvimento e teste. Elas geralmente não envolvem usuários finais, mas sim membros da equipe que trabalham diretamente no projeto. O objetivo principal é identificar áreas de melhoria e implementar mudanças que aumentem a eficiência e a qualidade do trabalho. Portanto, é menos provável que uma retrospectiva diretamente melhore a compreensão dos usuários finais sobre os processos internos."
    },
    {
      "id": 215,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual dos seguintes níveis de teste é MAIS provável que esteja sendo realizado se o foco dos testes é a validação e não está sendo realizado por testadores?",
      "options": [
        {
          "option": "Teste de aceitação",
          "isCorrect": true
        },
        {
          "option": "Teste de integração de sistema",
          "isCorrect": false
        },
        {
          "option": "Teste de integração de componentes",
          "isCorrect": false
        },
        {
          "option": "Teste de componente",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Teste de aceitação. O teste de aceitação é geralmente realizado para validar se um sistema atende aos requisitos de negócios e está pronto para ser entregue aos usuários finais.\nEste nível de teste é frequentemente conduzido por stakeholders, como clientes ou usuários finais, em vez de testadores profissionais. O foco está na validação do sistema em um ambiente realista, garantindo que ele funcione conforme esperado em cenários do mundo real. Isso difere de outros níveis de teste, que são mais técnicos e geralmente realizados por testadores para verificar a funcionalidade e a integração de componentes do sistema."
    },
    {
      "id": 216,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Como os testes caixa-branca podem ser aplicados durante os testes de aceite?",
      "options": [
        {
          "option": "Para cobrir todas as navegações da página web",
          "isCorrect": false
        },
        {
          "option": "Para verificar se grandes volumes de dados podem ser transferidos entre sistemas integrados",
          "isCorrect": false
        },
        {
          "option": "Verificar se todos os fluxos de trabalho foram cobertos",
          "isCorrect": true
        },
        {
          "option": "Para verificar se todas as declarações de código e caminhos de decisão de código foram executadas",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Verificar se todos os fluxos de trabalho foram cobertos.\nO teste de caixa-branca, embora tradicionalmente associado à verificação de código, pode ser aplicado em testes de aceite para garantir que todos os fluxos de trabalho do sistema sejam cobertos. \nIsso é importante para validar que o sistema atende aos requisitos de negócios e funciona conforme esperado em cenários do mundo real. \nDurante os testes de aceite, o foco está em garantir que o sistema funcione corretamente para o usuário final, e a cobertura dos fluxos de trabalho é uma parte crítica desse processo. \nEmbora a verificação de declarações de código seja uma prática comum em testes de unidade realizados por desenvolvedores, os testes de aceite se concentram mais na experiência do usuário e na funcionalidade do sistema como um todo."
    },
    {
      "id": 217,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes declarações comparando testes de componentes e testes de sistemas é VERDADEIRA?",
      "options": [
        {
          "option": "Os testes de componentes são de responsabilidade dos testadores, enquanto os testes de sistemas são tipicamentede responsabilidade dos usuários",
          "isCorrect": false
        },
        {
          "option": "O teste de componentes verifica a funcionalidade de módulos de software, objetos de programa e classes que são testados separadamente, enquanto o teste de sistema verifica interfaces entre componentes e interações entre diferentes partes do sistema",
          "isCorrect": false
        },
        {
          "option": "Os casos de teste para teste de componentes são geralmente derivados das especificações de componentes, especificações de projeto ou modelos de dados, enquanto os casos de teste para teste de sistemas são geralmente derivados das especificações de requisitos ou casos de uso",
          "isCorrect": true
        },
        {
          "option": "O teste de sistema verifica se os componentes individuais funcionam conforme o esperado, enquanto o teste de componentes verifica a integração entre diferentes módulos do sistema.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Os casos de teste para teste de componentes são geralmente derivados das especificações de componentes, especificações de projeto ou modelos de dados, enquanto os casos de teste para teste de sistemas são geralmente derivados das especificações de requisitos ou casos de uso.\nO teste de componentes foca em verificar a funcionalidade de partes isoladas do software, como módulos ou classes, utilizando artefatos técnicos como base. Já o teste de sistema avalia o comportamento do sistema como um todo, garantindo que ele atenda aos requisitos funcionais e de negócios, utilizando especificações de requisitos e casos de uso como base para os casos de teste."
    },
    {
      "id": 218,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes opções é VERDADEIRA?",
      "options": [
        {
          "option": "O objetivo do teste de regressão é verificar se a nova funcionalidade está funcionando, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido",
          "isCorrect": false
        },
        {
          "option": "O objetivo do teste de regressão e verificar se a correção foi implementada com sucesso, enquanto o objetivo do teste de confirmação é confirmar que a correção não tem efeitos colaterais",
          "isCorrect": false
        },
        {
          "option": "O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido",
          "isCorrect": true
        },
        {
          "option": "O objetivo do teste de regressão e detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o sistema ainda está funcionando em um novo ambiente",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido.\nO teste de regressão é realizado para garantir que alterações no código, como correções de defeitos ou novas funcionalidades, não introduzam novos problemas em partes já funcionais do sistema. Por outro lado, o teste de confirmação, também conhecido como reteste, é especificamente focado em verificar se um defeito relatado anteriormente foi efetivamente corrigido."
    },
    {
      "id": 219,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes definições é a MELHOR definição de um modelo de desenvolvimento incremental?",
      "options": [
        {
          "option": "Uma fase no processo de desenvolvimento deve começar quando a fase anterior estiver concluída",
          "isCorrect": false
        },
        {
          "option": "Os testes são vistos como uma fase separada que ocorre após a conclusão do desenvolvimento",
          "isCorrect": false
        },
        {
          "option": "Os testes são adicionados ao desenvolvimento como um incremento",
          "isCorrect": false
        },
        {
          "option": "Definição de requisitos, projeto de software e testes são feitos em fases em que em cada uma parte do sistema é adicionada",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Definição de requisitos, projeto de software e testes são feitos em fases em que em cada uma parte do sistema é adicionada.\nNo modelo de desenvolvimento incremental, o sistema é desenvolvido e entregue em partes ou incrementos. Cada incremento adiciona funcionalidade ao sistema, permitindo que partes do sistema sejam testadas e validadas antes que o sistema completo esteja finalizado. Isso permite uma entrega mais rápida de funcionalidades e facilita a identificação e correção de problemas em estágios iniciais do desenvolvimento."
    },
    {
      "id": 220,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual dos seguintes itens NÃO deve ser um gatilho para testes de manutenção?",
      "options": [
        {
          "option": "Decisão de testar após 'hot fixes'",
          "isCorrect": false
        },
        {
          "option": "Decisão de testar se os dados arquivados são possíveis de serem recuperados",
          "isCorrect": false
        },
        {
          "option": "Decisão de testar a possibilidade de manutenção do software",
          "isCorrect": true
        },
        {
          "option": "Decisão de testar o sistema após a migração para uma nova plataforma operacional",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Decisão de testar a possibilidade de manutenção do software.\nTestes de manutenção são geralmente realizados em resposta a mudanças específicas no sistema, como correções de bugs ('hot fixes'), recuperação de dados arquivados, ou migração para novas plataformas.\nNo entanto, testar a 'possibilidade de manutenção' do software não é um gatilho típico para testes de manutenção, pois a manutenção refere-se à capacidade de modificar o software após a entrega, e não a uma ação específica que requer testes imediatos."
    },
    {
      "id": 221,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Dadas as seguintes declarações sobre as relações entre as atividades de desenvolvimento de software e as atividades de teste no ciclo de vida de desenvolvimento de software:\n(1) Cada atividade de desenvolvimento deve ter uma atividade de teste correspondente\n(2) A revisão deve começar assim que as versões finais dos documentos estiverem disponíveis\n(3) O projeto e a implementação de testes devem começar durante a atividade de desenvolvimento correspondente\n(4) As atividades de teste devem começar nos estágios iniciais do ciclo de vida de desenvolvimento de software.\nQuais dos seguintes CORRETAMENTE mostram quais são verdadeiros e quais são falsos?",
      "options": [
        {
          "option": "Verdadeiro - 1, 2; Falso - 3, 4",
          "isCorrect": false
        },
        {
          "option": "Verdadeiro - 1, 4; Falso - 2, 3",
          "isCorrect": true
        },
        {
          "option": "Verdadeiro - 2, 3; Falso - 1, 4",
          "isCorrect": false
        },
        {
          "option": "Verdadeiro - 1, 2, 4; Falso - 3",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Verdadeiro - 1, 4; Falso - 2, 3.\nAnalisando as opções:\n1️⃣ Cada atividade de desenvolvimento deve ter uma atividade de teste correspondente → Verdadeiro, pois cada fase do desenvolvimento (como requisitos, design, implementação) deve ter uma atividade de teste associada (revisão, teste de sistema, teste de integração etc.).\n2️⃣ A revisão deve começar assim que as versões finais dos documentos estiverem disponíveis → Falso, pois as revisões devem começar o mais cedo possível, antes mesmo de os documentos estarem finalizados.\n3️⃣ O projeto e a implementação de testes devem começar durante a atividade de desenvolvimento correspondente → Falso, porque o projeto e a implementação de testes devem começar antes da atividade de desenvolvimento correspondente, não durante. Isso está alinhado com a abordagem de teste antecipado (early testing), um dos princípios fundamentais de teste descritos na CTFL.\n4️⃣ As atividades de teste devem começar nos estágios iniciais do ciclo de vida de desenvolvimento de software → Verdadeiro, pois o teste antecipado reduz custos e melhora a qualidade do produto final."
    },
    {
      "id": 222,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Dado que os testes que estão sendo realizados têm os seguintes atributos:\n• Com base nas especificações da interface\n• Focado em encontrar falhas na comunicação\n• A abordagem de teste utiliza tanto tipos de teste funcionais quanto estruturais.\nQual dos seguintes níveis de teste é o MAIS provável de ser realizado?",
      "options": [
        {
          "option": "Teste de aceitação",
          "isCorrect": false
        },
        {
          "option": "Teste do sistema",
          "isCorrect": false
        },
        {
          "option": "Teste de componentes",
          "isCorrect": false
        },
        {
          "option": "Teste de integração",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Teste de integração.\nO teste de integração é focado em verificar a interação entre diferentes componentes ou sistemas. Ele é baseado nas especificações da interface, pois se concentra em como os componentes se comunicam entre si. Este nível de teste é projetado para encontrar falhas na comunicação e na interação entre módulos, utilizando tanto abordagens funcionais (para verificar se a integração atende aos requisitos) quanto estruturais (para garantir que todos os caminhos de comunicação sejam testados)."
    },
    {
      "id": 223,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes declarações sobre tipos e níveis de teste é CORRETA?",
      "options": [
        {
          "option": "Os testes funcionais podem ser realizados em qualquer nível de teste, enquanto o teste caixa-branca é restrito ao teste de componentes",
          "isCorrect": false
        },
        {
          "option": "É possível realizar testes funcionais, não-funcionais e caixa-branca em qualquer nível de teste",
          "isCorrect": true
        },
        {
          "option": "Os testes funcionais e não funcionais podem ser realizados nos níveis de teste do sistema e de aceitação, enquanto o teste caixa-branca é restrito aos testes de componentes e de integração",
          "isCorrect": false
        },
        {
          "option": "Os testes funcionais e não funcionais podem ser realizados em qualquer nível de teste, enquanto os testes caixa-branca são restritos aos testes de componentes e integração",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: É possível realizar testes funcionais, não-funcionais e caixa-branca em qualquer nível de teste.\nEsta afirmação é verdadeira porque os testes funcionais e não-funcionais podem ser aplicados em todos os níveis de teste (como componente, integração, sistema e aceitação) para verificar se o sistema atende aos requisitos funcionais e de desempenho. Além disso, o teste caixa-branca, que envolve a verificação da lógica interna do código, também pode ser aplicado em diferentes níveis, dependendo do objetivo do teste e do nível de detalhe necessário. Portanto, não há restrições rígidas sobre onde esses tipos de teste podem ser aplicados."
    },
    {
      "id": 224,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes declarações MELHOR compara os propósitos de teste de confirmação e teste de regressão?",
      "options": [
        {
          "option": "O objetivo do teste de regressão é garantir que todos os testes executados anteriormente ainda funcionem corretamente, enquanto o objetivo do teste de confirmação é garantir que quaisquer reparos feitos em uma parte do sistema não tenham afetado adversamente outras partes",
          "isCorrect": false
        },
        {
          "option": "O objetivo dos testes de confirmação é confirmar que as mudanças no sistema foram feitas com sucesso, enquanto o objetivo dos testes de regressão é executar testes que anteriormente não funcionavam para garantir que agora funcionem corretamente",
          "isCorrect": false
        },
        {
          "option": "O objetivo do teste de confirmação é verificar se um defeito previamente encontrado foi corrigido, enquanto o objetivo do teste de regressão é garantir que nenhuma outra parte do sistema foi afetada adversamente pela correção",
          "isCorrect": true
        },
        {
          "option": "O objetivo dos testes de regressão é assegurar que quaisquer mudanças em uma parte do sistema não tenham causado falha em outra parte, enquanto o objetivo dos testes de confirmação é verificar se todos os testes executados anteriormente ainda fornecem os mesmos resultados que antes",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: O objetivo do teste de confirmação é verificar se um defeito previamente encontrado foi corrigido, enquanto o objetivo do teste de regressão é garantir que nenhuma outra parte do sistema foi afetada adversamente pela correção.\nO teste de confirmação, também conhecido como reteste, é focado em verificar se um defeito específico foi corrigido com sucesso.\nPor outro lado, o teste de regressão é realizado para assegurar que a correção de um defeito ou a introdução de novas funcionalidades não introduziu novos problemas em outras partes do sistema que já estavam funcionando corretamente."
    },
    {
      "id": 225,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes declarações descreve CORRETAMENTE um papel da análise de impacto nos testes de manutenção?",
      "options": [
        {
          "option": "A análise de impacto é utilizada para identificar como os dados devem ser migrados para o sistema mantido",
          "isCorrect": false
        },
        {
          "option": "A análise de impacto é utilizada para determinar a eficácia de novos casos de teste de manutenção",
          "isCorrect": false
        },
        {
          "option": "A análise de impacto é utilizada para decidir quais correções quentes são de maior valor para o usuário",
          "isCorrect": false
        },
        {
          "option": "A análise de impacto é utilizada quando se decide se vale a pena uma correção para um sistema mantido",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: A análise de impacto é utilizada quando se decide se vale a pena uma correção para um sistema mantido.\nA análise de impacto em testes de manutenção tem como objetivo avaliar as consequências de uma modificação no sistema. Isso inclui: Identificar quais partes do software serão afetadas pela mudança. Avaliar o risco da alteração, ou seja, se pode gerar novos defeitos. Determinar quais testes precisam ser reexecutados para validar a mudança. Decidir se a mudança vale a pena, considerando o custo e os possíveis impactos negativos."
    },
    {
      "id": 226,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Você está executando um teste de desempenho com o objetivo de encontrar possíveis gargalos de rede nas interfaces entre os componentes de um sistema.\nQual das seguintes afirmações descreve este teste?",
      "options": [
        {
          "option": "Um teste não-funcional durante o nível de teste de componentes",
          "isCorrect": false
        },
        {
          "option": "Um teste funcional durante o nível de teste de integração",
          "isCorrect": false
        },
        {
          "option": "Um teste funcional durante o nível de teste de componentes",
          "isCorrect": false
        },
        {
          "option": "Um teste não-funcional durante o nível de teste de integração",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Um teste não-funcional durante o nível de teste de integração.\nTestes de desempenho são classificados como testes não-funcionais, pois avaliam aspectos como tempo de resposta, capacidade de carga e uso de recursos, em vez de funcionalidades específicas. Quando o foco é identificar gargalos de rede entre componentes, o teste é realizado no nível de integração, onde a interação entre diferentes partes do sistema é avaliada. Este tipo de teste é crucial para garantir que o sistema possa operar eficientemente sob condições de carga esperadas."
    },
    {
      "id": 227,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Qual das seguintes afirmações é verdadeira?",
      "options": [
        {
          "option": "O teste de confirmação é útil para a análise de impacto durante os testes de manutenção",
          "isCorrect": false
        },
        {
          "option": "A análise de impacto é útil para testes de regressão durante os testes de manutenção",
          "isCorrect": true
        },
        {
          "option": "A análise de impacto é útil para os testes de confirmação durante os testes de manutenção",
          "isCorrect": false
        },
        {
          "option": "O teste de confirmação é útil para o teste de regressão durante o projeto do sistema",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A análise de impacto é útil para testes de regressão durante os testes de manutenção.\nA análise de impacto é uma prática essencial durante os testes de manutenção, pois ajuda a identificar quais partes do sistema podem ser afetadas por uma mudança. Isso é particularmente importante para testes de regressão, que têm como objetivo garantir que as alterações ou correções não introduzam novos defeitos em partes do sistema que já estavam funcionando corretamente. Ao realizar uma análise de impacto, as equipes de teste podem determinar quais casos de teste de regressão precisam ser executados, otimizando o processo de teste e garantindo a estabilidade do sistema após modificações."
    },
    {
      "id": 228,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Considere os seguintes tipos de defeitos nos quais um nível de teste pode se concentrar:\n(1) Defeitos em módulos ou objetos testáveis separadamente\n(2) Não focado na identificação de defeitos\n(3) Defeitos nas interfaces e interações\n(4) Defeitos em todo o objeto de teste\nQual da lista a seguir corresponde corretamente aos níveis de teste do programa da Fundação com as opções de foco de defeitos dadas acima?",
      "options": [
        {
          "option": "1 = teste de componentes; 2 = teste de aceite; 3 = teste de integração; 4 = teste de sistema",
          "isCorrect": true
        },
        {
          "option": "1 = teste de desempenho; 2 = teste de componentes; 3 = teste de sistema; 4 = teste de aceite",
          "isCorrect": false
        },
        {
          "option": "1 = teste de integração; 2 = teste do sistema; 3 = teste de componentes; 4 = teste de aceite",
          "isCorrect": false
        },
        {
          "option": "1 = teste de componentes; 2 = teste de aceite; 3 = teste de sistema; 4 = teste de integração",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1 = teste de componentes; 2 = teste de aceite; 3 = teste de integração; 4 = teste de sistema.\nNo teste de componentes, o foco está em identificar defeitos em módulos ou objetos testáveis separadamente, garantindo que cada parte do software funcione corretamente de forma isolada.\nO teste de aceite não é focado na identificação de defeitos, mas sim em verificar se o sistema atende aos requisitos e expectativas do usuário final.\nO teste de integração se concentra em defeitos nas interfaces e interações entre componentes ou sistemas, assegurando que eles funcionem bem juntos.\nPor fim, o teste de sistema busca identificar defeitos em todo o objeto de teste, avaliando o sistema como um todo em relação aos requisitos especificados."
    },
    {
      "id": 229,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Um produto de software de sistema operacional de mercado de massa é projetado para rodar em qualquer hardware de PC com um processador da família x86.\nVocê está executando um conjunto de testes para procurar defeitos relacionados ao suporte dos vários PCs que usam tal processador e para criar confiança de que marcas importantes de PCs funcionarão.\nQue tipo de teste você está realizando?",
      "options": [
        {
          "option": "Teste de portabilidade",
          "isCorrect": true
        },
        {
          "option": "Teste do processador",
          "isCorrect": false
        },
        {
          "option": "Teste funcional",
          "isCorrect": false
        },
        {
          "option": "Teste de desempenho",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Teste de portabilidade.\nO teste de portabilidade é realizado para garantir que o software possa ser executado em diferentes ambientes de hardware e software. No contexto de um sistema operacional projetado para rodar em qualquer hardware de PC com um processador da família x86, o teste de portabilidade verifica se o software é compatível com diferentes marcas e modelos de PCs.\nEste tipo de teste é crucial para produtos de mercado de massa, pois assegura que o software funcione corretamente em uma ampla variedade de configurações de hardware, aumentando a confiança dos usuários de que o produto funcionará em seus dispositivos específicos."
    },
    {
      "id": 230,
      "isMultipleChoice": false,
      "tag": ["Capítulo 2"],
      "question": "Durante um esforço de desenvolvimento ágil, um proprietário de produto descobre uma exigência regulatória desconhecida anteriormente que se aplica à maioria das histórias de usuários dentro de um determinado épico.\nAs histórias de usuários são atualizadas para proporcionar as mudanças necessárias no comportamento do software. Os programadores da equipe estão modificando o código de forma apropriada.\nComo um testador da equipe, que tipos de testes serão executados?",
      "options": [
        {
          "option": "Testes relacionados a mudanças",
          "isCorrect": true
        },
        {
          "option": "Testes de regressão",
          "isCorrect": false
        },
        {
          "option": "Testes funcionais",
          "isCorrect": false
        },
        {
          "option": "Testes de confirmação",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Testes relacionados a mudanças.\nQuando uma exigência regulatória é descoberta e as histórias de usuários são atualizadas, é essencial realizar testes relacionados a mudanças para garantir que as modificações no código atendam aos novos requisitos. Esses testes incluem a validação das alterações feitas para cumprir a exigência regulatória. Embora os testes de regressão sejam parte dos testes relacionados a mudanças, pois verificam se as alterações não impactaram negativamente as funcionalidades existentes, eles não cobrem a validação da nova exigência regulatória em si. Portanto, é crucial focar em testes que validem diretamente as mudanças introduzidas."
    },
    //--------Capitulo 3--------
    {
      "id": 301,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Quais das seguintes opções são papéis em uma revisão formal?",
      "options": [
        { "option": "Autor, Moderador, Gerente, Revisor, Desenvolvedor.", "isCorrect": false },
        { "option": "Autor, Gerente, Líder de revisão, Revisor, Designer.", "isCorrect": false },
        { "option": "Desenvolvedor, Moderador, Líder de revisão, Revisor, Testador.", "isCorrect": false },
        { "option": "Autor, Moderador, Líder de revisão, Revisor, Redator.", "isCorrect": true }
      ],
      "comments": "A resposta correta é: Autor, Moderador, Líder de revisão, Revisor, Redator.\nNa revisão formal, os papéis típicos e suas responsabilidades são:\n1. Autor: Cria e corrige o produto de trabalho que está sendo revisado.\n2. Moderador (Facilitador): Garante o andamento eficaz das reuniões de revisão, mediando discussões, gerenciando o tempo e criando um ambiente seguro para que todos possam se expressar livremente.\n3. Líder da Revisão: Assume a responsabilidade geral pela revisão, decidindo quem participará e organizando quando e onde a revisão será realizada.\n4. Revisor: Realiza as revisões, podendo ser alguém que trabalha no projeto, um especialista no assunto ou qualquer outra parte interessada.\n5. Relator (Registrador): Reúne as anomalias identificadas pelos revisores e registra informações da revisão, como decisões e novas anomalias encontradas durante a reunião."
    },
    {
      "id": 302,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Quais atividades são realizadas no âmbito do planejamento de uma revisão formal?",
      "options": [
        { "option": "Definição e verificação do cumprimento dos critérios de entrada para a revisão", "isCorrect": true },
        { "option": "Avaliação dos resultados da revisão em relação aos critérios de saída", "isCorrect": false },
        { "option": "Responder a quaisquer perguntas que os participantes possam ter", "isCorrect": false },
        { "option": "Coleta de métricas para a avaliação da eficácia da revisão", "isCorrect": false }
      ],
      "comments": "A resposta correta é: Definição e verificação do cumprimento dos critérios de entrada para a revisão.\nDurante o planejamento de uma revisão formal, a atividade principal é a definição do escopo da revisão, que inclui o objetivo, o produto de trabalho a ser revisado, as características de qualidade a serem avaliadas, as áreas a serem enfocadas, os critérios de saída, as informações de apoio, como padrões, o esforço e os prazos para a revisão."
    },
    {
      "id": 303,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual dos tipos de revisão abaixo é a MELHOR opção para escolher quando a revisão deve seguir um processo formal baseado em regras e listas de verificação?",
      "options": [
        { "option": "Inspeção", "isCorrect": true },
        { "option": "Passagem", "isCorrect": false },
        { "option": "Revisão Informal", "isCorrect": false },
        { "option": "Revisão Técnica", "isCorrect": false }
      ],
      "comments": "Resposta correta é: Inspeção.\nInspeção: É o tipo mais formal de revisão e utiliza listas de verificação (check-lists) para garantir que todos os aspectos importantes sejam cobertos.\nRevisão Informal: Como o nome sugere, não segue um processo formal e não exige documentação formal dos resultados. O principal objetivo é detectar anomalia.\nRevisão Técnica: Pode ser conduzida por pares ou especialistas e não requer necessariamente o uso de listas de verificação ou um conjunto rígido de regras. O foco é em obter consenso e tomar decisões técnicas.\nPassagem (Walkthrough): A tradução mais comum seria 'acompanhamento'. É conduzida pelo autor e pode servir a vários propósitos, como avaliar a qualidade e criar confiança no produto de trabalho. Embora os revisores possam realizar uma revisão individual antes, isso não é obrigatório."
    },
    {
      "id": 304,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Quais das seguintes afirmações sobre testes estáticos são as mais verdadeiras?",
      "options": [
        { "option": "Os testes estáticos permitem encontrar problemas de tempo de execução no início do ciclo de vida", "isCorrect": false },
        { "option": "Os testes estáticos são uma forma barata de detectar e remover defeitos", "isCorrect": true },
        { "option": "Ao testar um sistema crítico de segurança, os testes estáticos tem menos valor porque os testes dinâmicos encontram melhor os defeitos", "isCorrect": false },
        { "option": "Os testes estáticos tornam os testes dinâmicos menos desafiadores", "isCorrect": false }
      ],
      "comments": "A resposta correta é:Os testes estáticos são uma forma barata de detectar e remover defeitos\nOs testes estáticos permitem detectar defeitos nas fases iniciais do ciclo de vida do desenvolvimento de software, o que geralmente resulta em menor custo e esforço para corrigir esses defeitos."
    },
    {
      "id": 305,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual das seguintes declarações sobre sua revisão é correta?",
      "options": [
        {
          "option": "Você percebe que além do verificador e do verificador, o validador também deve ser convidado. Como este item não faz parte de sua lista de verificação, você não cria um comentário correspondente",
          "isCorrect": false
        },
        {
          "option": "O ponto II da lista de verificação foi violado porque não está claro qual condição deve ser preenchida para convidar para a revisão.",
          "isCorrect": false
        },
        {
          "option": "O ponto I da lista de verificação foi violado porque não está claro quem está fornecendo a lista de verificação para o convite para a revisão",
          "isCorrect": true
        },
        {
          "option": "O ponto III da lista de verificação foi violado, pois não está claro o que marca a revisão como concluída.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: O ponto I da lista de verificação foi violado porque não está claro quem esta fornecendo a lista de verificação para o convite para a revisão\nEm nenhum momento é especificado quem criou a lista de verificação.\nAtenção: Essa é uma pergunta armadilha, muito grande, muito complexa e tomará muito tempo para ser solucionada. O ideal é sempre tentar deixar esse tipo de pergunta por último e focar em perguntas mais rápidas de serem respondidas."
    },
    {
      "id": 306,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual das seguintes afirmações reflete CORRETAMENTE o valor dos testes estáticos?",
      "options": [
        {
          "option": "Desde que começamos a usar análise estática, encontramos defeitos de codificação que podem não ter sido encontrados realizando apenas testes dinâmicos",
          "isCorrect": true
        },
        {
          "option": "Usando testes estáticos significa que temos melhor controle e gerenciamento de defeitos mais barato devido à facilidade de detecção de defeitos mais tarde no ciclo de vida",
          "isCorrect": false
        },
        {
          "option": "Ao introduzir revisões, descobrimos que tanto a qualidade das especificações quanto o tempo necessário para o desenvolvimento e os testes aumentaram",
          "isCorrect": false
        },
        {
          "option": "Agora que exigimos o uso de análise estática, as exigências não atendidas diminuíram e a comunicação entre testadores e desenvolvedores melhorou",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Desde que começamos a usar análise estática, encontramos defeitos de codificação que podem não ter sido encontrados realizando apenas testes dinâmicos.\nOs testes estáticos podem detectar defeitos nas primeiras fases do ciclo de vida do desenvolvimento de software e identificar defeitos que não podem ser detectados por testes dinâmicos, como código inacessível e padrões de projeto não implementados conforme desejado."
    },
    {
      "id": 307,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual das seguintes declarações sobre o uso de listas de verificação em uma revisão formal é CORRETA?",
      "options": [
        {
          "option": "Como parte da reunião de revisão, os revisores criam relatórios de defeitos com base nas listas de verificação previstas para a revisão",
          "isCorrect": false
        },
        {
          "option": "Como parte da comunicação da questão, os revisores preenchem as listas de verificação previstas para a revisão",
          "isCorrect": false
        },
        {
          "option": "Como parte do planejamento da revisão, os revisores criam as listas de verificação necessárias para a revisão",
          "isCorrect": false
        },
        {
          "option": "Como parte do início da revisão, os revisores recebem as listas de verificação necessárias para a revisão",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Como parte do início da revisão, os revisores recebem as listas de verificação necessárias para a revisão\nDurante o início da revisão, é importante garantir que todos os participantes tenham acesso ao produto de trabalho e às listas de verificação necessárias para realizar a análise.\nAs outras opções estão incorretas pelas seguintes razões:\n- Avaliação dos resultados da revisão em relação aos critérios de saída: Esta atividade ocorre após a revisão, não durante o planejamento. O planejamento foca na definição do escopo e critérios de entrada, não na avaliação dos resultados.\n- Responder a quaisquer perguntas que os participantes possam ter: Esta atividade é mais relevante durante a fase de execução da revisão, onde os participantes podem discutir e esclarecer dúvidas, não especificamente durante o planejamento.\n\n- Coleta de métricas para a avaliação da eficácia da revisão: A coleta de métricas é uma atividade que ocorre após a revisão para avaliar sua eficácia e não faz parte do planejamento inicial."
    },
    {
      "id": 308,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual das seguintes funções e responsabilidades se encaixa CORRETAMENTE em uma revisão formal?",
      "options": [
        {
          "option": "Moderador - Monitora a relação custo-benefício contínua",
          "isCorrect": false
        },
        {
          "option": "Líder de revisão - Assegura o funcionamento eficaz das reuniões de revisão",
          "isCorrect": false
        },
        {
          "option": "Escriba - Corrige defeitos no produto de trabalho em revisão",
          "isCorrect": false
        },
        {
          "option": "Gerente - Decide sobre a execução das revisões",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Gerente - Decide sobre a execução das revisões.\nO gerente é responsável por decidir o que deve ser revisado e fornecer os recursos necessários, como equipe e tempo, para a revisão.\n\nAs outras opções estão incorretas porque:\n- Moderador - Monitora a relação custo-benefício contínua: O moderador é responsável por garantir o andamento eficaz das reuniões de revisão, incluindo mediação e gerenciamento de tempo, não por monitorar a relação custo-benefício.\n- Líder de revisão - Assegura o funcionamento eficaz das reuniões de revisão: O líder de revisão assume a responsabilidade geral pela revisão, mas o funcionamento eficaz das reuniões é mais atribuído ao moderador.\n- Escriba - Corrige defeitos no produto de trabalho em revisão: O escriba (ou relator) reúne as anomalias dos revisores e registra as informações da revisão, mas não corrige defeitos."
    },
    {
      "id": 309,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "As revisões que estão sendo utilizadas em sua organização têm os seguintes atributos:\n\n• Há um papel de escriba\n• O objetivo é detectar defeitos potenciais\n• A reunião de revisão é liderada pelo autor\n• Os revisores encontram defeitos potenciais por revisão individual\n• É produzido um relatório de revisão\n\nQual dos seguintes tipos de revisão é o MAIS provável que seja utilizado?",
      "options": [
        {
          "option": "Inspeção",
          "isCorrect": false
        },
        {
          "option": "Revisão Informal",
          "isCorrect": false
        },
        {
          "option": "Caminhada",
          "isCorrect": true
        },
        {
          "option": "Revisão Técnica",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Caminhada (Walkthrough)\nNo Walkthrough, a reunião de revisão é conduzida pelo autor, e os revisores podem realizar uma revisão individual para encontrar defeitos potenciais. Além disso, é comum produzir um relatório de revisão.\nInspeção: Embora a inspeção também utilize um papel de escriba e produza um relatório de revisão, ela é mais formal e não é liderada pelo autor. Além disso, as inspeções seguem um processo rigoroso e não se encaixam bem com a descrição de ser liderada pelo autor.\nRevisão Informal: Este tipo de revisão não segue um processo definido e não exige um resultado formal documentado, como um relatório de revisão. Além disso, não há papéis formais como o de escriba.\nRevisão Técnica: Embora possa incluir um papel de escriba e a detecção de defeitos, a revisão técnica é geralmente liderada por um moderador e não pelo autor. Além disso, pode não necessariamente resultar em um relatório formal."
    },
    {
      "id": 310,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Você foi convidado a participar de uma revisão baseada em checklist do seguinte trecho da especificação de requisitos para um sistema de biblioteca:\nOs bibliotecários podem:\n(1) Registrar novos mutuários\n(2) Devolver livros dos mutuários\n(3) Aceitar multas de mutuários\n(4) Acrescentar novos livros ao sistema com seu ISBN, autor e título\n(5) Remover livros do sistema\n(6) Obter respostas do sistema em 5 segundos\nOs tomadores de empréstimo podem:\n(7) Pedir emprestado um máximo de 3 livros de uma vez\n(8) Veja a história dos livros que eles emprestaram/reservaram\n(9) Ser multado por não devolver um livro dentro de 3 semanas\n(10) Obter respostas do sistema em 3 segundos\n(11) Emprestar um livro sem custo por um período máximo de 4 semanas\n(12) Livros de reserva (se estiverem em empréstimo)\nTodos os usuários (bibliotecários e mutuários):\n(13) Podem pesquisar livros por ISBN, autor ou título\n(14) Pode consultar o catálogo do sistema\n(15) O sistema deve responder às solicitações dos usuários em 3 segundos\n(16) A interface do usuário deve ser fácil de usar\nFoi-lhe atribuída a entrada da lista de verificação que exige a revisão da especificação em busca de inconsistências entre exigências individuais (ou seja, conflitos entre exigências).\nQual dos seguintes CORRETAMENTE identifica inconsistências entre pares de requisitos?",
      "options": [
        {
          "option": "6-15, 9-11",
          "isCorrect": true
        },
        {
          "option": "6-10, 6-15, 7-12",
          "isCorrect": false
        },
        {
          "option": "6-10, 6-15, 9-11",
          "isCorrect": false
        },
        {
          "option": "6-15, 7-12",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 6-15, 9-11\n6-15: Existe uma inconsistência entre o tempo de resposta do sistema para bibliotecários (5 segundos) e a exigência geral de resposta do sistema (3 segundos).\n9-11: Existe uma inconsistência entre o período de multa por não devolver um livro (3 semanas) e o período máximo de empréstimo sem custo (4 semanas).\nAs inconsistências não podem ocorrer entre bibliotecários (1 a 6) e mutuários (7 a 12) pois são requisitos de usuários diferentes.\nEssa é uma pergunta armadilha de tempo, relativamente grande e com certo grau de dificuldade. O recomendado é deixá-la para o final."
    },
    {
      "id": 311,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Em uma revisão formal, qual é o nome do papel do participante que dirige uma reunião de inspeção?",
      "options": [
        {
          "option": "Programador",
          "isCorrect": false
        },
        {
          "option": "Autor",
          "isCorrect": false
        },
        {
          "option": "Facilitador",
          "isCorrect": true
        },
        {
          "option": "Gerente de projetos",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Facilitador\nEm uma revisão formal, o papel do participante que dirige uma reunião de inspeção é o Facilitador (também conhecido como moderador)."
    },
    {
      "id": 312,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Você está lendo uma história de usuário no acúmulo de produtos para se preparar para uma reunião com o proprietário do produto e um desenvolvedor, notando defeitos potenciais à medida que você vai. Qual das seguintes afirmações é verdadeira sobre esta atividade?",
      "options": [
        {
          "option": "Não é um teste estático, pois os testes estáticos são sempre realizados com uma ferramenta",
          "isCorrect": false
        },
        {
          "option": "É um teste estático, porque o teste estático não envolve a execução do objeto de teste",
          "isCorrect": true
        },
        {
          "option": "É um teste estático, pois qualquer defeito encontrado pode ser encontrado mais barato durante os testes dinâmicos",
          "isCorrect": false
        },
        {
          "option": "Não é um teste estático, porque o teste estático envolve a execução do objeto de teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: É um teste estático, porque o teste estático não envolve a execução do objeto de teste\nO teste estático é caracterizado pela avaliação de produtos de trabalho sem a execução do código, como a revisão de documentos ou código.\nUma história de usuário no acúmulo de produtos representa um recurso que será valioso para um usuário ou comprador de um sistema ou software.\nAs histórias de usuários têm três aspectos críticos, conhecidos como '3C': Cartão (onde a história é descrita), Conversação (explicação de como o software será usado) e Confirmação (critérios de aceite)."
    },
    {
      "id": 313,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Durante um período intensivo de horas extras do projeto, um documento de arquitetura de sistema é enviado a vários participantes do projeto, anunciando uma revisão técnica previamente não planejada para ocorrer em uma semana. Não são feitos ajustes na lista de tarefas atribuídas aos participantes. Com base apenas nestas informações, qual dos seguintes fatores é um fator de sucesso para a revisão que é AUSENTE?",
      "options": [
        {
          "option": "Métricas suficientes para avaliar o autor",
          "isCorrect": false
        },
        {
          "option": "Tipo de revisão apropriada",
          "isCorrect": false
        },
        {
          "option": "Tempo adequado para a preparação",
          "isCorrect": true
        },
        {
          "option": "Reunião de revisão bem gerenciada",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Tempo adequado para a preparação\nCom base nas informações fornecidas, o fator de sucesso ausente para a revisão é Tempo adequado para a preparação. Não houve ajustes na lista de tarefas dos participantes, o que sugere que eles podem não ter tempo suficiente para se preparar adequadamente para a revisão.\nReunião de revisão bem gerenciada: Esta opção está incorreta porque a questão não fornece informações sobre a gestão da reunião em si, mas sim sobre a preparação para a revisão.\nTipo de revisão apropriada: Esta opção está incorreta porque o tipo de revisão (neste caso, uma revisão técnica) foi escolhido, mas a questão não menciona que o tipo de revisão é inadequado. O problema está na falta de tempo para preparação.\nMétricas suficientes para avaliar o autor: Esta opção está incorreta porque a avaliação do autor não é um fator de sucesso para revisões. O foco deve ser na melhoria do produto de trabalho, não na avaliação dos participantes."
    },
    {
      "id": 314,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Você está trabalhando como um testador em uma equipe Ágil e participou de mais de duas dúzias de sessões de refinamento da história do usuário com o proprietário do produto e os desenvolvedores da equipe no início de cada iteração. Como as revisões se tornaram mais eficazes na detecção de defeitos nas histórias de usuários e o proprietário do produto mais apto a corrigir esses defeitos, você e a equipe notam que a velocidade da equipe, como mostrado em seus gráficos queimados, começou a aumentar. Qual dos seguintes é um benefício dos testes estáticos que DIRETAMENTE se aplica ao aumento da velocidade?",
      "options": [
        {
          "option": "Redução do custo dos testes",
          "isCorrect": false
        },
        {
          "option": "Aumentar a produtividade do desenvolvimento",
          "isCorrect": true
        },
        {
          "option": "Reduzir o custo total da qualidade",
          "isCorrect": false
        },
        {
          "option": "Aumento do custo total da qualidade",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Aumentar a produtividade do desenvolvimento\nOs testes estáticos permitem detectar defeitos nas fases iniciais do ciclo de vida do desenvolvimento, o que pode levar a menos retrabalho e, portanto, aumentar a produtividade."
    },
    {
      "id": 315,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Você está trabalhando em um projeto de desenvolvimento de videogame, usando métodos ágeis. Ele é baseado na mitologia grega e na história, e os jogadores podem desempenhar papéis-chave em cenários como as batalhas entre gregos e troianos. Considere a seguinte história de usuário e seus critérios de aceite associados:\nComo um jogador, quero ser capaz de adquirir a Vara de Midas (um novo objeto mágico), para que eu possa transformar objetos e outros jogadores em ouro.(1) A Vara deve funcionar em qualquer objeto ou jogador, não importa o tamanho, funciona pelo simples toque.\n(2) Segurar o bastão não transforma o jogador que o segura em ouro\n(3) Qualquer objeto ou jogador tocado pelo bastão se transforma completamente em ouro dentro de um milissegundo.\n(4) A Vara aparece como mostrado no Protótipo O.W.RoM\n(5) A transformação começa no ponto de contato com a Vara e se move a uma taxa de um metro por milissegundo\nVocê está participando de uma sessão de revisão baseada em checklist desta história de usuário. Esta história de usuário e seus critérios de aceite associados contêm quais dos seguintes defeitos típicos identificados por testes estáticos neste tipo de produto de trabalho?",
      "options": [
        {
          "option": "Lacunas de cobertura",
          "isCorrect": false
        },
        {
          "option": "Contradição",
          "isCorrect": true
        },
        {
          "option": "Desvio das Normas",
          "isCorrect": false
        },
        {
          "option": "Vulnerabilidade de segurança",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Contradição\nIsso ocorre porque há uma contradição entre o critério (3), que afirma que a transformação ocorre em um milissegundo, e o critério (5), que descreve a transformação como se movendo a uma taxa de um metro por milissegundo."
    },
    {
      "id": 316,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "[CTFL 4.0 - SAQ14] Você está testando uma história de usuário com três critérios de aceite: AC1, AC2 e AC3. O AC1 é coberto pelo caso de teste TC1, o AC2 pelo TC2 e o AC3 pelo TC3. O histórico de execução do teste teve três execuções de teste em três versões consecutivas do software, como segue:\nTC1 (1) Falhou, (4) Aprovado, (7) Aprovado\nTC2 (2) Aprovado, (5) Falhou, (8) Aprovadon\nTC3 (3) Falhou, (6) Falhou, (9) Aprovado.\nOs testes são repetidos quando você é informado de que todos os defeitos encontrados na execução do teste foram corrigidos e que uma nova versão do software está disponível.\nQuais dos testes acima são executados como testes de regressão?",
      "options": [
        {
          "option": "5, 7",
          "isCorrect": true
        },
        {
          "option": "5, 6",
          "isCorrect": false
        },
        {
          "option": "4, 6, 8, 9",
          "isCorrect": false
        },
        {
          "option": "4, 7, 8, 9",
          "isCorrect": false
        }
      ],
      "comments": "Após uma falha o teste realizado na sequência é o teste de confirmação, para confirmar se o bug foi solucionado. Após um Aprovado (sucesso) o teste realizado na sequência é um teste de regressão, para confirmar que nenhuma consequência adversa foi causada por uma alteração, inclusive uma correção que já tenha sido confirmada após o teste."
    },
    {
      "id": 317,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "[CTFL 4.0 - SAQ15] Qual das opções a seguir NÃO é um benefício dos testes estáticos?",
      "options": [
        {
          "option": "Encontrar defeitos de codificação que poderiam não ter sido encontrados apenas com a realização de testes dinâmicos.",
          "isCorrect": false
        },
        {
          "option": "Detecção de lacunas e inconsistências nos requisitos.",
          "isCorrect": false
        },
        {
          "option": "A correção de defeitos encontrados durante o teste estático geralmente é muito mais barata do que a correção de defeitos encontrados durante o teste dinâmico.",
          "isCorrect": false
        },
        {
          "option": "Ter um gerenciamento de defeitos menos dispendioso devido à facilidade de detectar defeitos mais tarde no processo SDLC.",
          "isCorrect": true
        }
      ],
      "comments": "Resposta correta é: Ter um gerenciamento de defeitos menos dispendioso devido à facilidade de detectar defeitos mais tarde no processo SDLC.\nOs testes estáticos não facilitam detectar defeitos mais tarde e sim permitem detectar defeitos nas fases iniciais do SDLC, o que geralmente torna a correção de defeitos mais barata do que quando encontrados mais tarde no processo."
    },
    {
      "id": 318,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "[CTFL 4.0 - SAQ16] Qual dos seguintes é um benefício do feedback antecipado e frequente?",
      "options": [
        {
          "option": "Isso ajuda a evitar mal-entendidos sobre os requisitos.",
          "isCorrect": true
        },
        {
          "option": "Melhora o processo de teste para projetos futuros.",
          "isCorrect": false
        },
        {
          "option": "Ele força os clientes a priorizarem seus requisitos com base nos riscos acordados.",
          "isCorrect": false
        },
        {
          "option": "Essa é a única maneira de medir a qualidade das mudanças.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Isso ajuda a evitar mal-entendidos sobre os requisitos. Pois o feedback antecipado e frequente permite a comunicação precoce de possíveis problemas de qualidade e garante que as alterações nos requisitos sejam compreendidas e implementadas mais cedo.\nMelhora o processo de teste para projetos futuros.: Embora o feedback possa contribuir para melhorias, o benefício direto do feedback antecipado e frequente é evitar mal-entendidos e não necessariamente melhorar processos futuros.\nEle força os clientes a priorizarem seus requisitos com base nos riscos acordados.: O feedback não força os clientes a priorizarem requisitos; ele facilita a comunicação e compreensão dos requisitos existentes.\nEssa é a única maneira de medir a qualidade das mudanças.: O feedback não é a única maneira de medir a qualidade das mudanças; existem outras práticas e métricas para isso."},
    {
      "id": 319,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "[CTFL 4.0 - SAQ17] As revisões que estão sendo usadas em sua organização têm os seguintes atributos: \n\n• Há o papel de um redator. \n• O principal objetivo é avaliar a qualidade.\n• A reunião é conduzida pelo autor do produto de trabalho.\n• Há uma preparação individual.\n• É produzido um relatório de revisão.\n\nQual dos seguintes tipos de revisão é MAIS provável que esteja sendo usado?",
      "options": [
        {
          "option": "Revisão técnica.",
          "isCorrect": false
        },
        {
          "option": "Walkthrough.",
          "isCorrect": true
        },
        {
          "option": "Inspeção.",
          "isCorrect": false
        },
        {
          "option": "Revisão informal.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Walkthrough.\nNo walkthrough, a reunião é conduzida pelo autor do produto de trabalho, há preparação individual, e pode ser produzido um relatório de revisão. Para ser Inspeção seria necessário que um moderador conduzisse a reunião, e teríamos também a figura do revisor líder."
    },
    {
      "id": 320,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "[CTFL 4.0 - SAQ18] Qual dessas afirmações NÃO é um fator que contribui para revisões bem-sucedidas?",
      "options": [
        {
          "option": "Os participantes devem evitar comportamentos que possam indicar tédio, exasperação ou hostilidade com outros participantes.",
          "isCorrect": false
        },
        {
          "option": "Os participantes devem dedicar tempo suficiente para a análise.",
          "isCorrect": false
        },
        {
          "option": "As falhas encontradas devem ser reconhecidas, apreciadas e tratadas de forma objetiva.",
          "isCorrect": true
        },
        {
          "option": "Dividir grandes produtos de trabalho em pequenas partes para tornar o esforço necessário menos intenso.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: As falhas encontradas devem ser reconhecidas, apreciadas e tratadas de forma objetiva.\nFalhas não ocorrem em revisões (testes estáticos)."
    },
    {
      "id": 321,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual das seguintes afirmações é CORRETA?",
      "options": [
        {
          "option": "O teste de regressão se preocupa em verificar se o ambiente operacional permanece inalterado, enquanto o teste de confirmação se preocupa em testar as mudanças no objeto de teste.",
          "isCorrect": false
        },
        {
          "option": "Os testes de regressão são criados e executados quando o objeto de teste é corrigido, enquanto os testes de confirmação são executados sempre que o objeto de teste é aprimorado.",
          "isCorrect": false
        },
        {
          "option": "Os testes de regressão aumentam em número à medida que o projeto avança, enquanto o número de testes de confirmação diminui à medida que o projeto avança.",
          "isCorrect": false
        },
        {
          "option": "O teste de regressão se preocupa com efeitos adversos no código inalterado, enquanto o teste de confirmação se preocupa em testar o código alterado.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: O teste de regressão se preocupa com efeitos adversos no código inalterado, enquanto o teste de confirmação se preocupa em testar o código alterado.\nOs testes de regressão são realizados para garantir que alterações no código não causem efeitos adversos em partes do software que não foram alteradas. Já os testes de confirmação são realizados para verificar se um defeito foi corrigido com sucesso no código alterado."
    },
    {
      "id": 322,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual dos seguintes é um exemplo de defeito que pode ser encontrado por testes estáticos, mas NÃO por testes dinâmicos?",
      "options": [
        {
          "option": "Código sem nenhum caminho que o alcance",
          "isCorrect": true
        },
        {
          "option": "Recursos necessários que não estão implementados no código",
          "isCorrect": false
        },
        {
          "option": "Tempos de resposta ruins para a maioria dos usuários esperados",
          "isCorrect": false
        },
        {
          "option": "Falta de usabilidade fornecida pela interface do usuário",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Código sem nenhum caminho que o alcance\nTestes estáticos, como revisões de código e análise estática, podem identificar código inacessível ou 'código morto', que é código que não pode ser alcançado por nenhum caminho de execução. Esse tipo de defeito não é detectado por testes dinâmicos, pois eles dependem da execução do código, e código inacessível nunca é executado."
    },
    {
      "id": 323,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual dos seguintes é um benefício do feedback precoce e frequente das partes interessadas?",
      "options": [
        {
          "option": "Facilita a comunicação precoce de possíveis problemas de qualidade",
          "isCorrect": true
        },
        {
          "option": "Isso permite que os gerentes de projeto priorizem suas interações com as partes interessadas",
          "isCorrect": false
        },
        {
          "option": "Os usuários finais entendem melhor por que a entrega do produto de trabalho está atrasada",
          "isCorrect": false
        },
        {
          "option": "Os gerentes estão cientes de quais desenvolvedores são menos produtivos",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Facilita a comunicação precoce de possíveis problemas de qualidade\nO feedback antecipado e frequente permite a comunicação precoce de possíveis problemas de qualidade, ajudando a evitar mal-entendidos sobre os requisitos e garantindo que as alterações sejam compreendidas e implementadas mais cedo. Isso ajuda a equipe de desenvolvimento a se concentrar nos recursos que agregam mais valor aos stakeholders e têm o maior impacto positivo sobre os riscos identificados."
    },
    {
      "id": 324,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Dadas as seguintes descrições de tarefa:\n1. As características de qualidade a serem avaliadas e os critérios de saída são selecionados\n2. Todos têm acesso ao produto de trabalho\n3. Anomalias são identificadas no produto de trabalho\n4. Anomalias são discutidas\nE as seguintes atividades de revisão:n\A. Revisão individual\nB. Início da revisão\nC. Planejamento\nD. Comunicação e análise\nQual das seguintes MELHOR corresponde às descrições de tarefa e atividades?",
      "options": [
        {
          "option": "1B, 2C, 3D, 4A",
          "isCorrect": false
        },
        {
          "option": "1C, 2B, 3A, 4D",
          "isCorrect": true
        },
        {
          "option": "1B, 2D, 3C, 4A",
          "isCorrect": false
        },
        {
          "option": "1C, 2A, 3B, 4D",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1C, 2B, 3A, 4D\n1C: As características de qualidade a serem avaliadas e os critérios de saída são selecionados durante o Planejamento.\n2B: Todos têm acesso ao produto de trabalho no Início da revisão.\n3A: Anomalias são identificadas no produto de trabalho durante a Revisão individual.\n4D: Anomalias são discutidas na Comunicação e análise.\nA revisão inicia-se com a fase de Planejamento, onde são definidas as características de qualidade a serem avaliadas e os critérios de saída. Em seguida, ocorre o Início da Revisão, no qual todos os participantes recebem acesso ao produto de trabalho para que possam analisá-lo individualmente.\nNa fase de Revisão Individual, cada participante examina o produto e identifica possíveis anomalias de forma independente. Essas anomalias são então levadas para a fase de Comunicação e Análise, que inclui a Reunião de Revisão. Nessa reunião, os participantes discutem as anomalias encontradas, esclarecem dúvidas e avaliam possíveis correções."
    },
    {
      "id": 325,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Dadas as seguintes funções em revisões:\n1. Escrivão\n2. Líder da revisão\n3. Facilitador\n4. Gerente\nE as seguintes responsabilidades em revisões:\nA. Garante o funcionamento eficaz das reuniões de revisão e a criação de um ambiente de revisão seguro\nB. Registra informações da revisão, como decisões e novas anomalias encontradas durante a reunião de revisão\nC. Decide o que será revisado e fornece recursos, como pessoal e tempo para a revisão\nD. Assume a responsabilidade geral pela revisão, como organizar quando e onde a revisão ocorrerá\nQual das seguintes MELHOR corresponde às funções e responsabilidades?",
      "options": [
        {
          "option": "1B, 2D, 3A, 4C",
          "isCorrect": true
        },
        {
          "option": "1B, 2D, 3C, 4A",
          "isCorrect": false
        },
        {
          "option": "1A, 2B, 3D, 4C",
          "isCorrect": false
        },
        {
          "option": "1A, 2C, 3B, 4D",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1B, 2D, 3A, 4C\n1B: O Escrivão registra informações da revisão, como decisões e novas anomalias encontradas durante a reunião de revisão.\n2D: O Líder da revisão assume a responsabilidade geral pela revisão, como organizar quando e onde a revisão ocorrerá.\n3A: O Facilitador garante o funcionamento eficaz das reuniões de revisão e a criação de um ambiente de revisão seguro.\n4C: O Gerente decide o que será revisado e fornece recursos, como pessoal e tempo para a revisão."
    },
    {
      "id": 326,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "O software do sistema de navegação foi atualizado devido a ele sugerir rotas que violam as leis de trânsito, como dirigir na contramão de ruas de sentido único. Qual das seguintes alternativas DESCREVE MELHOR os testes que serão realizados?",
      "options": [
        {
          "option": "Apenas testes de confirmação",
          "isCorrect": false
        },
        {
          "option": "Testes de regressão e depois testes de confirmação",
          "isCorrect": false
        },
        {
          "option": "Apenas testes de regressão",
          "isCorrect": false
        },
        {
          "option": "Testes de confirmação e depois testes de regressão",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Testes de confirmação e depois testes de regressão\nOs testes de confirmação são realizados primeiro para garantir que o defeito original, como a sugestão de rotas que violam as leis de trânsito, foi corrigido com sucesso. Após a confirmação, os testes de regressão são realizados para verificar se a correção não introduziu novos defeitos em outras partes do sistema."
    },
    {
      "id": 327,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Dadas os seguintes defeitos exemplos:\ni. Duas partes diferentes da especificação de design discordam devido à complexidade do design\nii. O tempo de resposta é muito longo e faz com que os usuários percam a paciência\niii. Um caminho no código não pode ser alcançado durante a execução\niv. Uma variável é declarada, mas nunca usada posteriormente no programa\nv. A quantidade de memória necessária pelo programa para gerar um relatório é muito alta\nQual das seguintes opções IDENTIFICA MELHOR exemplos de defeitos que poderiam ser encontrados por testes estáticos (em vez de testes dinâmicos)?",
      "options": [
        {
          "option": "ii, v",
          "isCorrect": false
        },
        {
          "option": "i, iii, iv",
          "isCorrect": true
        },
        {
          "option": "iii, v",
          "isCorrect": false
        },
        {
          "option": "i, ii, iv",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: i, iii, iv\ni. Duas partes diferentes da especificação de design discordam devido à complexidade do design: Este é um defeito que pode ser identificado por meio de revisões e inspeções estáticas, onde inconsistências no design são detectadas sem a necessidade de execução do código.\niii. Um caminho no código não pode ser alcançado durante a execução: Este tipo de defeito, conhecido como 'código morto' ou inacessível, pode ser encontrado por análise estática, que verifica o código sem executá-lo.\niv. Uma variável é declarada, mas nunca usada posteriormente no programa: Este é um defeito que pode ser identificado por ferramentas de análise estática, que verificam o código para encontrar variáveis não utilizadas."
    },
    {
      "id": 328,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Durante um período intensivo de horas extras do projeto, um documento de arquitetura de sistema é enviado a vários participantes do projeto, anunciando uma revisão técnica previamente não planejada para ocorrer em uma semana. Não são feitos ajustes na lista de tarefas atribuídas aos participantes. Com base apenas nestas informações, qual dos seguintes fatores é um fator de sucesso para a revisão que é AUSENTE?",
      "options": [
        { "option": "Tempo adequado para a preparação", "isCorrect": true },
        { "option": "Tipo de revisão apropriada", "isCorrect": false },
        { "option": "Reunião de revisão bem gerenciada", "isCorrect": false },
        { "option": "Métricas suficientes para avaliar o autor", "isCorrect": false }
      ],
      "comments": "A resposta correta é: Tempo adequado para a preparação\nOs participantes não tiveram tempo suficiente para se preparar adequadamente para a revisão técnica, já que o documento foi enviado com apenas uma semana de antecedência e sem ajustes nas tarefas atribuídas.\nTipo de revisão apropriada: Um exemplo de tipo de revisão apropriada seria escolher uma revisão técnica para avaliar questões técnicas específicas, enquanto uma revisão informal poderia ser mais adequada para detectar anomalias em um estágio inicial.\nReunião de revisão bem gerenciada: Um exemplo de reunião de revisão bem gerenciada seria uma reunião onde há um moderador que guia a discussão, assegura que todos os pontos da agenda sejam cobertos e que as decisões sejam documentadas.\nMétricas suficientes para avaliar o autor: Um exemplo de métricas suficientes seria coletar dados sobre o número de defeitos encontrados por autor em diferentes revisões para identificar áreas de melhoria, embora a avaliação direta dos autores não deva ser um objetivo principal."
    },
    {
      "id": 329,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Dado os seguintes tipos de revisão:\n1.Revisão técnica\n2.Revisão informal\n3.Inspeção\n4.Revisão detalhada\nE as seguintes descrições:\nA. Inclui objetivos como alcançar consenso, gerar novas ideias e motivar os autores a melhorarem\nB. Inclui objetivos como educar os revisores, alcançar consenso, gerar novas ideias e detectar defeitos potenciais\nC. O principal objetivo é detectar defeitos potenciais e requer coleta de métricas para apoiar a melhoria do processo\nD. O principal objetivo é detectar defeitos potenciais e não gera uma saída formal documentada\nQual das seguintes combinações corresponde MELHOR aos tipos de revisão e às descrições?",
      "options": [
        {
          "option": "1A, 2B, 3C, 4D",
          "isCorrect": true
        },
        {
          "option": "1B, 2C, 3D, 4A",
          "isCorrect": false
        },
        {
          "option": "1A, 2D, 3C, 4B",
          "isCorrect": false
        },
        {
          "option": "1C, 2D, 3A, 4B",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1A, 2D, 3C, 4B\nRevisão técnica (1) corresponde à descrição A, que inclui objetivos como alcançar consenso, gerar novas ideias e motivar os autores a melhorarem.\nRevisão informal (2) corresponde à descrição D, cujo principal objetivo é detectar defeitos potenciais e não gera uma saída formal documentada.\nInspeção (3) corresponde à descrição C, cujo principal objetivo é detectar defeitos potenciais e requer coleta de métricas para apoiar a melhoria do processo.\nRevisão detalhada (4) corresponde à descrição B, que inclui objetivos como educar os revisores, alcançar consenso, gerar novas ideias e detectar defeitos potenciais."
    },
    {
      "id": 330,
      "isMultipleChoice": false,
      "tag": ["Capítulo 3"],
      "question": "Qual dos seguintes é um fator que contribui para uma revisão bem-sucedida?",
      "options": [
        {
          "option": "Garantir que a gerência participe como revisores",
          "isCorrect": false
        },
        {
          "option": "Definir a avaliação do revisor como um objetivo",
          "isCorrect": false
        },
        {
          "option": "Dividir grandes produtos de trabalho em partes menores",
          "isCorrect": true
        },
        {
          "option": "Planejar cobrir um documento por revisão",
          "isCorrect": false
        }
      ],
      "comments": "Resposta correta: Dividir grandes produtos de trabalho em partes menores\nDividir grandes produtos de trabalho em partes menores ajuda a manter o foco e a eficácia da revisão.\nGarantir que a gerência participe como revisores: Embora o apoio da gerência seja importante, a participação direta deles como revisores não é um fator crítico para o sucesso de uma revisão.\nDefinir a avaliação do revisor como um objetivo: Avaliar os revisores não deve ser um objetivo das revisões. O foco deve estar na melhoria do produto de trabalho.\nPlanejar cobrir um documento por revisão: Tentar cobrir um documento inteiro em uma única revisão pode ser ineficaz, especialmente se o documento for grande."
    },
    //---Perguntas Variadas----
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
    },
    
  ]
};
