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
    //--Capitulo 4----
  
    {
      "id": 401,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "O que é teste baseado em checklist?",
      "options": [
        {
          "option": "Uma técnica de teste na qual os testes são derivados com base no conhecimento do testador sobre falhas do passado, ou conhecimento geral de falhas",
          "isCorrect": false
        },
        {
          "option": "Uma técnica de teste baseada em uma análise da especificação de um componente ou sistema",
          "isCorrect": false
        },
        {
          "option": "Uma abordagem aos testes onde os testadores projetam e executam dinamicamente testes baseados em seu conhecimento, exploração do item de teste e nos resultados dos testes anteriores",
          "isCorrect": false
        },
        {
          "option": "Uma técnica de teste baseada na experiência em que o testador experiente usa uma lista de itens a serem anotados, verificados ou lembrados, ou um conjunto de regras ou critérios contra os quais um produto deve ser verificado",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Uma técnica de teste baseada na experiência em que o testador experiente usa uma lista de itens a serem anotados, verificados ou lembrados, ou um conjunto de regras ou critérios contra os quais um produto deve ser verificado.\n O teste baseado em checklist envolve o uso de listas de verificação que são criadas com base na experiência do testador, no conhecimento sobre o que é importante para o usuário ou na compreensão de como o software pode falhar. \nEssas listas ajudam a garantir que todas as condições de teste importantes sejam cobertas e verificadas durante o processo de teste."
    },
    {
      "id": 402,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das seguintes opções é classificada como uma técnica de teste caixa-preta?",
      "options": [
        {
          "option": "Uma técnica baseada no conhecimento de falhas do passado, ou conhecimento geral de falhas",
          "isCorrect": false
        },
        {
          "option": "Uma técnica que verifica se o objeto de teste está funcionando de acordo com o projeto detalhado",
          "isCorrect": false
        },
        {
          "option": "Uma técnica baseada em requisitos formais",
          "isCorrect": true
        },
        {
          "option": "Uma técnica baseada na análise da arquitetura",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Uma técnica baseada em requisitos formais.\n Uma técnica baseada em requisitos formais: Esta é uma técnica de teste caixa-preta, pois se baseia na análise das especificações e requisitos formais do sistema, sem considerar a estrutura interna do software.\n\nUma técnica baseada na análise da arquitetura: Esta é uma técnica de teste caixa-branca, pois envolve a análise da estrutura interna do sistema, como a arquitetura.\n\nUma técnica que verifica se o objeto de teste está funcionando de acordo com o projeto detalhado: Esta descrição se aproxima mais de uma técnica de teste caixa-branca, que se baseia na estrutura interna do sistema, como o código ou a arquitetura.\n\nUma técnica baseada no conhecimento de falhas do passado, ou conhecimento geral de falhas: Esta é uma técnica baseada na experiência, não uma técnica de teste caixa-preta. Técnicas baseadas na experiência utilizam o conhecimento do testador sobre falhas anteriores para guiar o teste."
    },
    {
      "id": 403,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das seguintes afirmações é correta sobre a cobertura de decisões?",
      "options": [
        {
          "option": "A afirmação é falsa. Um único caso de teste só pode garantir uma cobertura de decisão de 25% neste caso.",
          "isCorrect": false
        },
        {
          "option": "A afirmação é verdadeira. Qualquer caso isolado de teste faria com que o resultado da declaração 'se' fosse verdadeiro ou falso.",
          "isCorrect": true
        },
        {
          "option": "A declaração é verdadeira. Qualquer caso de teste único fornece 100% de cobertura de decisão e, portanto, 50% de cobertura de decisão.",
          "isCorrect": false
        },
        {
          "option": "A afirmação é falsa. A declaração é muito ampla. Ela pode estar correta ou não, dependendo do software testado.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A afirmação é verdadeira. Qualquer caso isolado de teste faria com que o resultado da declaração 'se' fosse verdadeiro ou falso.: Esta afirmação está correta porque, ao testar uma única declaração 'se', um caso de teste pode verificar uma das duas condições (verdadeira ou falsa), alcançando 50% de cobertura de decisão.\n A afirmação é verdadeira. Qualquer caso isolado de teste faria com que o resultado da declaração 'se' fosse verdadeiro ou falso: Esta afirmação está correta porque, ao testar uma única declaração 'se', um caso de teste pode verificar uma das duas condições (verdadeira ou falsa), alcançando 50% de cobertura de decisão.\n\nA declaração é verdadeira. Qualquer caso de teste único fornece 100% de cobertura de decisão e, portanto, 50% de cobertura de decisão: Esta afirmação está incorreta porque um único caso de teste não pode fornecer 100% de cobertura de decisão; ele só pode cobrir uma das duas condições possíveis, resultando em 50% de cobertura de decisão.\n\nA afirmação é falsa. Um único caso de teste só pode garantir uma cobertura de decisão de 25% neste caso: Esta afirmação está incorreta porque, em um cenário com uma única declaração 'se', um caso de teste pode cobrir uma das duas possíveis saídas (verdadeira ou falsa), resultando em 50% de cobertura de decisão.\n\nA afirmação é falsa. A declaração é muito ampla. Ela pode estar correta ou não, dependendo do software testado: Esta afirmação está incorreta porque a declaração é específica para um cenário com uma única declaração 'se', onde um caso de teste pode cobrir uma das duas saídas possíveis, resultando em 50% de cobertura de decisão."
    },
    {
      "id": 405,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual declaração sobre a relação entre a cobertura de declarações e a cobertura de decisões é verdadeira?",
      "options": [
        {
          "option": "A cobertura de decisão nunca pode chegar a 100%.",
          "isCorrect": false
        },
        {
          "option": "100% de cobertura de declaração também garante 100% de cobertura de decisão",
          "isCorrect": false
        },
        {
          "option": "50% de cobertura de decisão também garante 50% de cobertura de declaração",
          "isCorrect": false
        },
        {
          "option": "100% de cobertura de decisão também garante 100% de cobertura de declaração",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: 100% de cobertura de decisão também garante 100% de cobertura de declaração. \n Cobertura de declaração: Refere-se à porcentagem de instruções executáveis no código que foram exercitadas por um conjunto de casos de teste. Quando se atinge 100% de cobertura de declaração, todas as instruções executáveis no código foram executadas pelo menos uma vez.\n\nCobertura de decisão: Refere-se à porcentagem de resultados de decisões (verdadeiro/falso) que foram exercitadas por um conjunto de casos de teste. Quando se atinge 100% de cobertura de decisão, todas as ramificações de decisão no código foram exercitadas.\n\nA relação entre as duas é que 100% de cobertura de decisão implica que todas as decisões e suas ramificações foram testadas, o que, por sua vez, garante que todas as instruções dentro dessas ramificações também foram executadas, resultando em 100% de cobertura de declaração."
    },
    {
      "id": 406,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Para qual das seguintes situações é adequado o teste exploratório?",
      "options": [
        {
          "option": "Quando o sistema é desenvolvido de forma incremental, e não há carta de teste disponível",
          "isCorrect": false
        },
        {
          "option": "Quando houver testadores disponíveis que tenham conhecimento suficiente de aplicações e tecnologias similares",
          "isCorrect": true
        },
        {
          "option": "Quando já existe um conhecimento avançado do sistema, e é necessário fornecer provas de que ele deve ser testado intensivamente",
          "isCorrect": false
        },
        {
          "option": "Quando a pressão do tempo requer a aceleração da execução de testes já especificados",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Quando houver testadores disponíveis que tenham conhecimento suficiente de aplicações e tecnologias similares: Esta é a situação ideal para o teste exploratório, pois testadores experientes podem usar seu conhecimento para explorar o sistema de forma eficaz e identificar áreas problemáticas sem depender de especificações detalhadas \n Quando houver testadores disponíveis que tenham conhecimento suficiente de aplicações e tecnologias similares: Esta é a situação ideal para o teste exploratório, pois testadores experientes podem usar seu conhecimento para explorar o sistema de forma eficaz e identificar áreas problemáticas sem depender de especificações detalhadas.\n\nQuando o sistema é desenvolvido de forma incremental, e não há carta de teste disponível: Embora o teste exploratório possa ser útil em sistemas desenvolvidos de forma incremental, a falta de uma carta de teste não é uma condição ideal para o teste exploratório, pois ele se beneficia de algum nível de orientação e objetivos.\n\nQuando já existe um conhecimento avançado do sistema, e é necessário fornecer provas de que ele deve ser testado intensivamente: O teste exploratório é mais adequado para descobrir problemas desconhecidos em áreas menos exploradas, não necessariamente para fornecer provas de testes intensivos em um sistema já bem conhecido.\n\nQuando a pressão do tempo requer a aceleração da execução de testes já especificados: O teste exploratório é útil sob pressão de tempo, mas é mais eficaz quando se explora novas áreas ou se complementa testes formais, não apenas para acelerar testes já especificados.\n Teste Exploratório: No teste exploratório, os testes são modelados, executados e avaliados simultaneamente enquanto o Testador aprende sobre o objeto de teste. O teste é usado para aprender mais sobre o objeto de teste, para explorá-lo mais profundamente com testes focados e para criar testes para áreas não testadas.  "
    },
    {
      "id": 407,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual é o número mínimo de casos de teste necessário para cobrir todas as partições de equivalência válidas para o cálculo do bônus?",
      "options": [
        {
          "option": "4",
          "isCorrect": true
        },
        {
          "option": "3",
          "isCorrect": false
        },
        {
          "option": "2",
          "isCorrect": false
        },
        {
          "option": "5",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 4\n\nPara cobrir todas as partições de equivalência válidas para o cálculo do bônus, precisamos identificar as diferentes categorias de duração do emprego mencionadas e criar um caso de teste para cada uma delas:\n\nMenor que zero: Valores menores que zero não serão considerados porque qualquer valor de duração de emprego que resulte em um bônus negativo não é uma partição válida de equivalência.\n\nMenor ou igual a 2 anos: Um caso de teste para verificar o cálculo do bônus para funcionários com até 2 anos de emprego.\n\nMais de 2 anos, mas menos de 5 anos: Um caso de teste para verificar o cálculo do bônus para funcionários com mais de 2 anos, mas menos de 5 anos de emprego.\n\n5 a 10 anos, inclusive: Um caso de teste para verificar o cálculo do bônus para funcionários com 5 a 10 anos de emprego.\n\nMais de 10 anos: Um caso de teste para verificar o cálculo do bônus para funcionários com mais de 10 anos de emprego.\n\nCada uma dessas categorias representa uma partição de equivalência válida, e precisamos de um caso de teste para cada uma delas, totalizando 4 casos de teste."
    },
    {
      "id": 408,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual seria o conjunto mais provável de valores (km/h) identificado pela aplicação da análise de valores limite, onde apenas os valores nos limites das classes de equivalência são selecionados?",
      "options": [
        {
          "option": "50, 51, 55, 56, 60, 61",
          "isCorrect": true
        },
        {
          "option": "0, 49, 50, 54, 59, 60",
          "isCorrect": false
        },
        {
          "option": "50, 55, 60",
          "isCorrect": false
        },
        {
          "option": "49, 50, 54, 55, 60, 62",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 50, 51, 55, 56, 60, 61\n\nA análise de valores limite (BVA) foca nos valores nos limites das partições de equivalência, pois é onde os erros são mais prováveis de ocorrer. Vamos analisar cada faixa de velocidade e identificar os valores de limite:\n\n50 km/h ou menos: O limite superior é 50, então o valor de limite é 50.\n\nMais de 50 km/h, mas não mais que 55 km/h: Os limites são 51 (logo acima de 50) e 55.\n\nMais de 55 km/h, mas não mais que 60 km/h: Os limites são 56 (logo acima de 55) e 60.\n\nMais de 60 km/h: O limite inferior é 61 (logo acima de 60).\n\nPortanto, os valores de limite são 50, 51, 55, 56, 60, e 61."
    },
    {
      "id": 409,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos seguintes casos de teste representa uma situação que pode acontecer na vida real, e está faltando na tabela de decisão acima?",
      "options": [
        {
          "option": "Condição1 = NÃO, Condição2 = SIM, Condição3 = NÃO, Ação = NÃO",
          "isCorrect": true
        },
        {
          "option": "Condição1 = SIM, Condição2 = NÃO, Condição3 = SIM, Ação = NÃO",
          "isCorrect": false
        },
        {
          "option": "Condição1 = NÃO, Condição2 = NÃO, Condição3 = SIM, Ação = NÃO",
          "isCorrect": false
        },
        {
          "option": "Condição1 = SIM, Condição2 = SIM, Condição3 = NÃO, Ação = SIM",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Condição1 = NÃO, Condição2 = SIM, Condição3 = NÃO, Ação = NÃO\n\nA tabela de decisão atual cobre as seguintes situações:\n\nT1: Emprego por mais de 1 ano (SIM), Objetivo acordado (NÃO), Alcançado o objetivo (NÃO), Pagamento de bônus (NÃO)\n\nT2: Emprego por mais de 1 ano (NÃO), Objetivo acordado (NÃO), Alcançado o objetivo (NÃO), Pagamento de bônus (NÃO)\n\nT3: Emprego por mais de 1 ano (NÃO), Objetivo acordado (SIM), Alcançado o objetivo (SIM), Pagamento de bônus (NÃO)\n\nT4: Emprego por mais de 1 ano (SIM), Objetivo acordado (SIM), Alcançado o objetivo (SIM), Pagamento de bônus (SIM)\n\nO caso de teste que está faltando e pode ocorrer na vida real é quando um funcionário não está na empresa por mais de um ano, tem um objetivo acordado, mas não alcançou o objetivo. Neste caso, a ação correta seria não pagar o bônus."
    },
    {
      "id": 411,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos seguintes casos de teste é resultado da aplicação da técnica de teste de equivalência de partição para testar este requisito?",
      "options": [
        {
          "option": "Verificar se a aplicação pode reproduzir um vídeo em um display de tamanho 640x480 e 1920x1080 (2 casos de teste)",
          "isCorrect": false
        },
        {
          "option": "Verificar se a aplicação pode reproduzir um vídeo em qualquer um dos tamanhos de tela na exigência (1 caso de teste)",
          "isCorrect": false
        },
        {
          "option": "Verificar se a aplicação pode reproduzir um vídeo em uma tela de tamanho 1920x1080 (1 caso de teste)",
          "isCorrect": false
        },
        {
          "option": "Verificar se a aplicação pode reproduzir um vídeo em cada um dos tamanhos de exibição na exigência (4 casos de teste)",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Verificar se a aplicação pode reproduzir um vídeo em cada um dos tamanhos de exibição na exigência (4 casos de teste).\n\nA técnica de particionamento de equivalência divide os dados de entrada em partições, onde cada partição representa um conjunto de valores que são tratados da mesma forma pelo sistema. Neste caso, cada resolução de tela é uma partição diferente, e é necessário testar cada uma delas para garantir que o aplicativo funcione corretamente em todas as resoluções especificadas."
    },
    {
      "id": 412,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos itens a seguir fornece a MELHOR descrição de testes exploratórios?",
      "options": [
        {
          "option": "Testes baseados na experiência, conhecimento e intuição do testador",
          "isCorrect": false
        },
        {
          "option": "Uma prática de teste na qual uma investigação aprofundada dos antecedentes do objeto de teste é utilizada para identificar potenciais pontos fracos que são examinados pelos casos de teste",
          "isCorrect": false
        },
        {
          "option": "Uma abordagem aos testes em que os testadores projetam e executam dinamicamente testes baseados em seu conhecimento, exploração do item de teste e nos resultados dos testes anteriores",
          "isCorrect": true
        },
        {
          "option": "Uma abordagem de projeto de teste na qual as atividades de teste são planejadas como sessões ininterruptas de análise e projeto de teste, frequentemente usadas em conjunto com testes baseados em checklist",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Uma abordagem aos testes em que os testadores projetam e executam dinamicamente testes baseados em seu conhecimento, exploração do item de teste e nos resultados dos testes anteriores.\nEsta é a melhor descrição dos testes exploratórios, pois enfatiza o aspecto dinâmico e adaptativo, onde os testadores ajustam seus testes com base no que aprendem durante a execução.\n\nTestes baseados na experiência, conhecimento e intuição do testador: Esta descrição é correta, pois os testes exploratórios dependem da experiência e intuição do testador para explorar o sistema e identificar defeitos. No entanto, é uma descrição bastante genérica e não captura a natureza dinâmica e adaptativa dos testes exploratórios.\n\nUma prática de teste na qual uma investigação aprofundada dos antecedentes do objeto de teste é utilizada para identificar potenciais pontos fracos que são examinados pelos casos de teste: Esta descrição se aproxima mais de uma análise de risco ou de uma abordagem de teste baseada em histórico, mas não descreve adequadamente a natureza exploratória e adaptativa dos testes exploratórios.\n\nUma abordagem de projeto de teste na qual as atividades de teste são planejadas como sessões ininterruptas de análise e projeto de teste, frequentemente usadas em conjunto com testes baseados em checklist: Esta descrição refere-se a uma técnica específica dentro dos testes exploratórios, conhecida como \"testes baseados em sessões\", que é uma forma estruturada de conduzir testes exploratórios, mas não abrange toda a abordagem exploratória."
    },
    {
      "id": 413,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos seguintes MELHORES combina as descrições com as diferentes categorias de técnicas de teste?",
      "options": [
        {
          "option": "Preto – 4; Branco - 1, 2; Experiência - 3, 5",
          "isCorrect": false
        },
        {
          "option": "Preto - 4, 5; Branco - 1, 2; Experiência - 3",
          "isCorrect": true
        },
        {
          "option": "Preto – 3; Branco - 1, 2; Experiência - 4, 5",
          "isCorrect": false
        },
        {
          "option": "Preto - 1, 3, 5; Branco - 2; Experiência - 4",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é:\nPreto - 4, 5; Branco - 1, 2; Experiência - 3\n\nPreto (Técnicas de teste caixa-preta):\n(4) Os desvios das exigências são verificados: As técnicas de teste caixa-preta verificam o comportamento do sistema em relação às suas especificações, sem considerar a estrutura interna.\n(5) As histórias de usuários são usadas como base de teste: As histórias de usuários são frequentemente usadas em técnicas de teste caixa-preta para derivar casos de teste baseados em requisitos.\n\nBranco (Técnicas de teste caixa-branca):\n(1) A cobertura é medida com base em uma estrutura selecionada do objeto de teste: As técnicas de teste caixa-branca são baseadas na análise da estrutura interna do objeto de teste.\n(2) O processamento dentro do objeto de teste é verificado: As técnicas de teste caixa-branca verificam o processamento interno e a estrutura do sistema.\n\nExperiência (Técnicas de teste baseadas na experiência):\n(3) Os testes são baseados na probabilidade de defeitos e sua distribuição: As técnicas de teste baseadas na experiência utilizam o conhecimento e a intuição do testador para identificar áreas propensas a defeitos."
    },
    {
      "id": 414,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos seguintes conjuntos de entradas de teste alcançaria a MELHOR equivalência de cobertura de partição?",
      "options": [
        {
          "option": "0, 1000, 2000, 3000, 4000",
          "isCorrect": false
        },
        {
          "option": "1000, 2001, 4000, 4001, 6000",
          "isCorrect": false
        },
        {
          "option": "666, 999, 2222, 5555, 6666",
          "isCorrect": true
        },
        {
          "option": "123, 2345, 3456, 4567, 5678",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 666, 999, 2222, 5555, 6666\n\nA questão é complexa pois se refere a opção que tem a MELHOR cobertura e nenhuma das opções cobre todas as opções:\n\nopção: 666, 999, 2222, 5555, 6666 Cobertura: 4\n\nopção: 0, 1000, 2000, 3000, 4000 Cobertura: 3\n\nopção: 123, 2345, 3456, 4567, 5678 Cobertura: 3\n\nopção: 1000, 2001, 4000, 4001, 6000 Cobertura: 3"
    },
    {
      "id": 415,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual é o número mínimo de casos de teste adicionais que são necessários para garantir a cobertura total de TODAS as partições de equivalência de entrada válida?",
      "options": [
        {
          "option": "3",
          "isCorrect": false
        },
        {
          "option": "2",
          "isCorrect": true
        },
        {
          "option": "1",
          "isCorrect": false
        },
        {
          "option": "4",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 2\n\nOs casos de testes ao contemplaram a exposição solar de 3 a 6 horas e a intensidade média da luz solar: baixa e alta. O tempo de exposição solar e a intensidade é possível serem testadas juntas por isso será necessário mais 2 casos de teste adicionais."
    },
    {
      "id": 416,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Usando BVA (somente valores Min e Max), qual dos seguintes conjuntos de entradas de teste fornece o mais alto nível de cobertura de limite?",
      "options": [
        {
          "option": "0°C, 11°C, 20°C, 22°C, 23°C",
          "isCorrect": false
        },
        {
          "option": "10°C, 16°C, 19°C, 22°C, 23°C",
          "isCorrect": true
        },
        {
          "option": "9°C, 15°C, 19°C, 23°C, 100°C",
          "isCorrect": false
        },
        {
          "option": "14°C, 15°C, 18°C, 19°C, 19°C, 21°C, 22°C",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 10°C, 16°C, 19°C, 22°C, 23°C\n\nUma pergunta complexa que não cobra uma resposta totalmente correta mas uma resposta que MAIS atenda.\n\nA resposta 10°C, 16°C, 19°C, 22°C, 23°C utiliza BVA e possui uma cobertura maior que as outras;\n\n0°C, 11°C, 20°C, 22°C, 23°C Não tende os critérios BVA pois 0°C não é valor limite;\n\n9°C, 15°C, 19°C, 23°C, 100°C Não tende os critérios BVA pois 9°C e 100°C não são valores limites;\n\n14°C, 15°C, 18°C, 19°C, 19°C, 21°C, 22°C Está utilizando algo parecido com BVA de 3 valores mas está cobrindo apenas 3 casos de uso."
    },
    {
      "id": 419,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das seguintes declarações BEST descreve como os casos de teste são derivados de um caso de uso?",
      "options": [
        {
          "option": "Os casos de teste são gerados através da análise das interações dos atores com o sistema para garantir que as interfaces do usuário sejam fáceis de usar",
          "isCorrect": false
        },
        {
          "option": "Os casos de teste são criados para exercer comportamentos básicos, excepcionais e de erro definidos pelo sistema em teste, em colaboração com os atores",
          "isCorrect": true
        },
        {
          "option": "Os casos de teste são derivados para exercer cada um dos pontos de decisão nos fluxos do processo comercial do caso de uso, para atingir 100% de cobertura de decisão desses fluxos",
          "isCorrect": false
        },
        {
          "option": "Os casos de teste são derivados da identificação dos componentes incluídos no caso de uso e da criação de testes de integração que exercem as interações desses componentes",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Os casos de teste são criados para exercer comportamentos básicos, excepcionais e de erro definidos pelo sistema em teste, em colaboração com os atores.\n\nEsta opção é a mais abrangente, pois cobre os comportamentos básicos, excepcionais e de erro, que são aspectos essenciais de um caso de uso. Ela também menciona a colaboração com os atores, que é uma prática comum na derivação de casos de teste a partir de casos de uso.\n\nOs casos de teste são gerados através da análise das interações dos atores com o sistema para garantir que as interfaces do usuário sejam fáceis de usar: Esta opção foca na usabilidade das interfaces do usuário, mas derivar casos de teste de um caso de uso vai além de apenas garantir a facilidade de uso; envolve testar o comportamento funcional do sistema.\n\nOs casos de teste são derivados para exercer cada um dos pontos de decisão nos fluxos do processo comercial do caso de uso, para atingir 100% de cobertura de decisão desses fluxos: Esta opção se concentra exclusivamente na cobertura de decisão, o que é uma técnica de teste mais específica e não cobre todos os aspectos de um caso de uso.\n\nOs casos de teste são derivados da identificação dos componentes incluídos no caso de uso e da criação de testes de integração que exercem as interações desses componentes: Esta opção se refere à criação de testes de integração com base nos componentes, o que é mais relacionado a testes de integração do que à derivação de casos de teste de casos de uso."
    },
    {
      "id": 420,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das seguintes descrições de cobertura de declarações é CORRETA?",
      "options": [
        {
          "option": "A cobertura de declaração é uma medida da porcentagem de linhas de código fonte (sem comentários) exercida por testes",
          "isCorrect": false
        },
        {
          "option": "A cobertura das declarações é uma medida da proporção de declarações executáveis no código fonte exercida por testes",
          "isCorrect": true
        },
        {
          "option": "A cobertura das declarações é uma medida do número de declarações executáveis no código fonte exercido por testes",
          "isCorrect": false
        },
        {
          "option": "A cobertura de declaração é uma medida do número de linhas de código fonte exercidas por testes",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A cobertura das declarações é uma medida da proporção de declarações executáveis no código fonte exercida por testes\n\nEsta opção é correta, pois a cobertura de declaração mede a proporção de declarações executáveis no código que são exercidas pelos testes, expressa como uma porcentagem.\n\nA cobertura de declaração é uma medida da porcentagem de linhas de código fonte (sem comentários) exercida por testes: Esta opção está incorreta porque a cobertura de declaração não mede a porcentagem de linhas de código fonte, mas sim a proporção de declarações executáveis exercidas;\n\nA cobertura das declarações é uma medida do número de declarações executáveis no código fonte exercido por testes: Esta opção está incorreta porque a cobertura de declaração não mede o número absoluto de declarações executáveis, mas sim a proporção delas que são exercidas;\n\nA cobertura de declaração é uma medida do número de linhas de código fonte exercidas por testes: Esta opção está incorreta porque a cobertura de declaração não mede o número de linhas de código fonte, mas sim a proporção de declarações executáveis exercidas."
    },
    {
      "id": 421,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das seguintes descrições de cobertura de decisão é CORRETA?",
      "options": [
        {
          "option": "A cobertura de decisão é uma medida da proporção de resultados de decisão no código fonte exercida por testes",
          "isCorrect": true
        },
        {
          "option": "A cobertura de decisão é uma medida da porcentagem de caminhos possíveis através do código fonte exercida por testes",
          "isCorrect": false
        },
        {
          "option": "A cobertura de decisão é uma medida da porcentagem dos fluxos comerciais através do componente exercido por testes",
          "isCorrect": false
        },
        {
          "option": "A cobertura de decisão é uma medida das declarações 'se' no código que são exercidas tanto com os resultados verdadeiros como falsos",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A cobertura de decisão é uma medida da proporção de resultados de decisão no código fonte exercida por testes\n\nEsta opção é correta porque a cobertura de decisão mede se cada decisão no código, como as ramificações de uma instrução 'se','for','switch' entre outras, foi avaliada em todos os resultados possíveis.\n\nA cobertura de decisão é uma medida da porcentagem de caminhos possíveis através do código fonte exercida por testes: Esta opção está incorreta porque a cobertura de decisão não mede a porcentagem de caminhos possíveis, mas sim se cada decisão no código foi testada em todos os resultados possíveis;\n\nA cobertura de decisão é uma medida da porcentagem dos fluxos comerciais através do componente exercido por testes: Esta opção está incorreta porque a cobertura de decisão não se refere a fluxos comerciais, mas sim a decisões no código, como instruções 'se' e 'switch';\n\nA cobertura de decisão é uma medida das declarações 'se' no código que são exercidas tanto com os resultados verdadeiros como falsos: Esta opção está incorreta porque, embora a cobertura de decisão inclua as declarações 'se', ela não se limita a elas; também inclui outras estruturas de decisão, como 'switch' e loops."
    },
    {
      "id": 422,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos seguintes itens descreve MELHOR o conceito por trás da adivinhação de erros?",
      "options": [
        {
          "option": "A suposição de erros envolve o uso de seu conhecimento e experiência de defeitos encontrados no passado e erros típicos cometidos pelos desenvolvedores",
          "isCorrect": true
        },
        {
          "option": "A adivinhação de erros envolve o uso de sua experiência pessoal de desenvolvimento e os erros que você cometeu como desenvolvedor",
          "isCorrect": false
        },
        {
          "option": "Adivinhação de erro requer que você imagine que é o usuário do objeto de teste e adivinhe os erros que o usuário poderia cometer ao interagir com ele",
          "isCorrect": false
        },
        {
          "option": "A adivinhação de erros exige que você duplique rapidamente a tarefa de desenvolvimento para identificar o tipo de erros que um desenvolvedor pode cometer",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A suposição de erros envolve o uso de seu conhecimento e experiência de defeitos encontrados no passado e erros típicos cometidos pelos desenvolvedores\n\nEsta opção é correta porque a suposição de erros baseia-se no conhecimento e na experiência do testador sobre defeitos anteriores e erros comuns dos desenvolvedores para prever onde novos erros podem ocorrer.\n\nA suposição de erro é uma técnica usada para prever a ocorrência de erros, defeitos e falhas, com base no conhecimento do Testador, incluindo:\n-Como o aplicativo funcionou no passado;\n-Os tipos de erros que os desenvolvedores tendem a cometer e os tipos de defeitos que resultam desses erros;\n-Os tipos de falhas que ocorreram em outros aplicativos semelhantes."
    },
    {
      "id": 423,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "O que é cobertura de decisão?",
      "options": [
        {
          "option": "A cobertura dos resultados das condições",
          "isCorrect": false
        },
        {
          "option": "Cobertura de decisões é sinônimo de cobertura de declarações",
          "isCorrect": false
        },
        {
          "option": "A cobertura das declarações executáveis",
          "isCorrect": false
        },
        {
          "option": "A cobertura dos resultados das decisões",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: A cobertura dos resultados das decisões\n\nA cobertura de decisão não se refere apenas aos resultados das condições, mas sim aos resultados das decisões completas, que podem incluir múltiplas condições."
    },
    {
      "id": 424,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Antes de uma sessão de planejamento de iteração, você está estudando uma história de usuário e seus critérios de aceite, derivando as condições de teste e casos de teste associados da história do usuário como uma forma de aplicar o princípio de qualidade e teste antecipados. Que técnica de teste você está aplicando?",
      "options": [
        {
          "option": "Baseado na experiência",
          "isCorrect": false
        },
        {
          "option": "Caixa-branca",
          "isCorrect": false
        },
        {
          "option": "Suposição de erros",
          "isCorrect": false
        },
        {
          "option": "Caixa-preta",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Caixa-preta\n\nEsta técnica é baseada na análise do comportamento especificado do objeto de teste, como histórias de usuário e critérios de aceite, sem referência à estrutura interna, o que se alinha com a atividade descrita;\n\nCaixa-branca: Esta técnica foca na estrutura interna do código, o que não é o caso aqui, pois você está derivando testes a partir de histórias de usuário e critérios de aceite, sem considerar a implementação interna;\n\nSuposição de erros: Esta técnica envolve prever onde os erros podem ocorrer com base em defeitos anteriores e erros comuns, mas não é o foco principal ao derivar condições de teste de histórias de usuário;\n\nBaseado na experiência: Esta técnica envolve o uso de conhecimento e intuição do testador, mas não se aplica diretamente ao derivar condições de teste de histórias de usuário e critérios de aceite."
    },
    {
      "id": 425,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos seguintes aspectos é uma afirmação verdadeira sobre testes exploratórios?",
      "options": [
        {
          "option": "Testadores mais experientes que testaram aplicações e tecnologias similares provavelmente farão melhor do que testadores menos experientes em testes exploratórios",
          "isCorrect": true
        },
        {
          "option": "Os testes exploratórios não identificam nenhum teste adicional além daqueles que resultariam de técnicas de teste formais",
          "isCorrect": false
        },
        {
          "option": "Os testes exploratórios podem envolver o uso de técnicas caixa-preta, mas não técnicas caixa-branca",
          "isCorrect": false
        },
        {
          "option": "O tempo necessário para completar uma sessão de testes exploratórios não pode ser previsto com antecedência",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Testadores mais experientes que testaram aplicações e tecnologias similares provavelmente farão melhor do que testadores menos experientes em testes exploratórios\nEsta opção é verdadeira porque testadores experientes têm um melhor entendimento do domínio e das tecnologias, o que lhes permite explorar mais efetivamente o objeto de teste e identificar áreas problemáticas;\n\nOs testes exploratórios não identificam nenhum teste adicional além daqueles que resultariam de técnicas de teste formais: Esta opção é falsa porque testes exploratórios podem identificar testes adicionais que não seriam necessariamente cobertos por técnicas formais, especialmente em áreas não especificadas ou mal documentadas;\n\nOs testes exploratórios podem envolver o uso de técnicas caixa-preta, mas não técnicas caixa-branca: Esta opção é parcialmente verdadeira, mas incompleta. Embora os testes exploratórios frequentemente usem técnicas de caixa-preta, eles não estão limitados a elas e podem incorporar elementos de outras técnicas, incluindo técnicas de caixa-branca, dependendo do contexto e do objetivo do teste;\n\nO tempo necessário para completar uma sessão de testes exploratórios não pode ser previsto com antecedência: Esta opção é falsa porque, embora o tempo exato para completar uma sessão de testes exploratórios possa ser flexível, ele geralmente é planejado e estruturado dentro de um período definido, como em abordagens baseadas em sessões."
    },
    {
      "id": 426,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando um aplicativo móvel que permite aos clientes acessar e gerenciar suas contas bancárias. Você está executando um conjunto de testes que envolve a avaliação de cada tela e cada campo em cada tela em relação a uma lista geral de melhores práticas de interface com o usuário, derivada de um livro popular sobre o tema, que maximiza a atratividade, facilidade de uso e acessibilidade para tais aplicativos. Qual das seguintes opções MELHOR categoriza a técnica de teste que você está usando?",
      "options": [
        {
          "option": "Suposição de erros",
          "isCorrect": false
        },
        {
          "option": "Exploratório",
          "isCorrect": false
        },
        {
          "option": "Baseado na especificação",
          "isCorrect": false
        },
        {
          "option": "Baseado em checklist",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Baseado em checklist\nEsta técnica envolve o uso de uma lista de verificação para guiar o teste, o que se alinha com o uso de uma lista de melhores práticas para avaliar a interface do usuário;\n\nBaseado na especificação: Esta técnica envolve testar com base em requisitos ou especificações formais, o que não é o caso aqui, pois você está usando uma lista de melhores práticas;\n\nExploratório: Embora o teste exploratório possa ser usado para avaliar a interface do usuário, ele geralmente não se baseia em uma lista predefinida de melhores práticas, mas sim na exploração livre e na intuição do testador;\n\nSuposição de erros: Esta técnica envolve prever onde os erros podem ocorrer com base em defeitos anteriores e erros comuns, o que não se aplica diretamente ao uso de uma lista de melhores práticas."
    },
    {
      "id": 427,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Considere um aplicativo móvel que permita aos clientes acessar e gerenciar suas contas bancárias. Uma história de usuário acabou de ser adicionada ao conjunto de recursos que verifica as contas de mídia social e os registros bancários dos clientes para dar saudações personalizadas em aniversários e outros marcos pessoais. Qual das seguintes técnicas de teste um PROGRAMADOR poderia utilizar durante um teste unitário do código para garantir que a cobertura de situações quando as saudações são supostas ocorrer e quando as saudações NÃO são supostas ocorrer?",
      "options": [
        {
          "option": "Teste de declaração",
          "isCorrect": false
        },
        {
          "option": "Testes de decisão",
          "isCorrect": true
        },
        {
          "option": "Testes de transição do Estado",
          "isCorrect": false
        },
        {
          "option": "Testes exploratórios",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Testes de decisão\nEsta técnica foca em garantir que todas as condições de decisão no código sejam avaliadas em ambas as direções (verdadeira e falsa), o que é essencial para testar quando saudações devem ou não ocorrer;\n\nTeste de declaração: Esta técnica verifica se cada linha de código foi executada, mas não garante que todas as condições de decisão foram avaliadas em ambas as direções.\n\nTestes de transição do Estado: Esta técnica é usada para testar sistemas que podem estar em diferentes estados, mas não é a mais adequada para verificar condições de decisão específicas;\n\nTestes exploratórios: Esta técnica é mais adequada para descobrir problemas inesperados e não é usada para garantir a cobertura sistemática de condições de decisão."
    },
    {
      "id": 428,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Uma aplicação em lote está em produção inalterada há mais de dois anos. Ele funciona durante a noite uma vez por mês para produzir declarações que serão enviadas aos clientes por e-mail. Para cada cliente, o aplicativo passa por cada conta e lista todas as transações nessa conta no último mês. Ele usa uma estrutura neste loop para processar clientes (loop externo), as contas de cada cliente (loop médio) e as transações de cada conta (loop interno). Uma noite, o pedido de lote termina prematuramente, deixando de enviar extratos por e-mail a alguns clientes, quando encontra um cliente com uma conta para a qual não ocorreram transações no último mês. Esta é uma situação muito incomum e não tem ocorrido nos anos desde que este aplicativo foi colocado em produção. Enquanto conserta o defeito, um programador pede que você recomende técnicas de teste que sejam eficazes contra este tipo de defeito. Qual das seguintes técnicas de teste provavelmente teria sido capaz de detectar o defeito subjacente?",
      "options": [
        {
          "option": "Testes baseados em listas de verificação",
          "isCorrect": false
        },
        {
          "option": "Suposição de erros",
          "isCorrect": false
        },
        {
          "option": "Teste de declaração",
          "isCorrect": false
        },
        {
          "option": "Teste de decisão",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Teste de decisão\nEsta técnica foca em garantir que todas as condições de decisão no código sejam avaliadas em ambas as direções (verdadeira e falsa), o que é essencial para detectar situações incomuns, como a ausência de transações;\n\nTeste de declaração: Esta técnica verifica se cada linha de código foi executada, mas não garante que todas as condições de decisão foram avaliadas em ambas as direções;\n\nSuposição de erros: Esta técnica se baseia na experiência para prever onde os erros podem ocorrer, mas não garante a cobertura sistemática de todas as condições de decisão;\n\nTestes baseados em listas de verificação: Esta técnica envolve verificar se o software atende a uma lista de critérios, mas pode não cobrir todas as condições lógicas específicas, como a ausência de transações."
    },
    {
      "id": 429,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando uma bomba de gasolina desacompanhada que só aceita cartões de crédito. Uma vez validado o cartão de crédito, o bico da bomba colocado no tanque e a nota desejada selecionada, o cliente digita a quantidade desejada de combustível em galões usando o teclado. O teclado permite apenas a entrada de dígitos. O combustível é vendido em décimos (0,1) de um galão, até 50,0 galões. Qual dos seguintes é um conjunto mínimo de quantidades desejadas que cobre as partições de equivalência para esta entrada?",
      "options": [
        {
          "option": "0.0, 20.0, 60.0",
          "isCorrect": true
        },
        {
          "option": "-0.1, 0.0, 0.1, 49.9, 50.0, 50.1",
          "isCorrect": false
        },
        {
          "option": "0.0, 0.1, 50.0, 70.0",
          "isCorrect": false
        },
        {
          "option": "0.0, 0.1, 50.0",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 0.0, 20.0, 60.0\n0.0 cobre o limite inferior válido.\n20.0 cobre um valor dentro do intervalo válido.\n60.0 cobre um valor acima do limite superior, testando a partição inválida.\nEsses valores cobrem as partições de equivalência para entradas válidas e inválidas."
    },
    {
      "id": 430,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando um sistema de comércio eletrônico que vende suprimentos de cozinha como especiarias, farinha e outros itens a granel. As unidades em que os itens são vendidos são gramas (para especiarias e outros itens caros) ou quilogramas (para farinha e outros itens baratos). Independentemente das unidades, a menor quantidade válida de pedido é de 0,5 unidades (p. ex., meia grama de casulos de cardamomo) e a maior quantidade válida de pedido é de 25,0 unidades (p. ex., 25 quilos de açúcar). A precisão do campo de unidades é de 0,1 unidades. Qual dos seguintes é um conjunto de valores de entrada que cobrem os valores limite com valores limite de dois pontos para este campo?",
      "options": [
        {
          "option": "0.5, 0.6, 24.9, 25.0",
          "isCorrect": false
        },
        {
          "option": "0.4, 0.5, 0.6, 24.9, 25.0, 25.1",
          "isCorrect": true
        },
        {
          "option": "0.4, 0.5, 25.0, 25.1",
          "isCorrect": false
        },
        {
          "option": "0.3, 10.0, 28.0",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 0.4, 0.5, 0.6, 24.9, 25.0, 25.1\nEste conjunto cobre os valores limite inferiores e superiores, incluindo valores imediatamente abaixo e acima dos limites válidos."
    },
    {
      "id": 432,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando um sistema de comércio eletrônico que vende suprimentos de cozinha como especiarias, farinha e outros itens a granel. As unidades em que os itens são vendidos são gramas (para especiarias e outros itens caros) ou quilogramas (para farinha e outros itens baratos). Independentemente das unidades, a menor quantidade válida de pedido é de 0,5 unidades (p. ex., meia grama de casulos de cardamomo) e a maior quantidade válida de pedido é de 25,0 unidades (p. ex., 25 quilos de açúcar). A precisão do campo das unidades é de 0,1 unidades. Qual dos seguintes é um conjunto MÍNIMO de valores de entrada que cobre as partições de equivalência para este campo?",
      "options": [
        {
          "option": "12.3",
          "isCorrect": false
        },
        {
          "option": "0.2, 0.9, 29.5",
          "isCorrect": true
        },
        {
          "option": "0.4, 0.5, 25.0, 25.1",
          "isCorrect": false
        },
        {
          "option": "10.0, 28.0",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 0.2, 0.9, 29.5\nA resposta cobre as 3 partições de equivalência: menor que 0.5, entre 0.5 e 25, e maior que 25."
    },
    {
      "id": 433,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das seguintes é uma característica das técnicas de teste baseadas em experiência?",
      "options": [
        {
          "option": "Os casos de teste são usados para identificar desvios dos requisitos.",
          "isCorrect": false
        },
        {
          "option": "Os casos de teste são criados com base em informações detalhadas do projeto.",
          "isCorrect": false
        },
        {
          "option": "Os itens testados na seção de código da interface são usados para medir a cobertura.",
          "isCorrect": false
        },
        {
          "option": "As técnicas dependem muito do conhecimento do testador sobre o software e o domínio do negócio.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: As técnicas dependem muito do conhecimento do testador sobre o software e o domínio do negócio.\nTestes baseado em experiência não utiliza caso de testes (informações detalhadas do projeto), apenas cartas de teste, fichas de teste, check-lists.\nDesvios de requisitos normalmente são identificados por testes de caixa-preta."
    },
    {
      "id": 434,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando um formulário simplificado de busca de apartamento que tem apenas dois critérios de busca: andar (com três opções possíveis: térreo; primeiro andar; segundo andar) tipo de jardim (com três opções possíveis: sem jardim; jardim pequeno; jardim grande) Somente apartamentos no andar térreo podem ter jardins. O formulário tem um mecanismo de validação integrado que não permitirá que você use os critérios de pesquisa que violam essa regra. Cada teste tem dois valores de entrada: andar e tipo de jardim. Você deseja aplicar o particionamento de equivalência (EP) para cobrir cada andar e cada tipo de jardim em seus testes. Qual é o número mínimo de casos de teste para atingir 100% de cobertura do EP?",
      "options": [
        {
          "option": "6",
          "isCorrect": false
        },
        {
          "option": "4",
          "isCorrect": true
        },
        {
          "option": "5",
          "isCorrect": false
        },
        {
          "option": "3",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 4\nSeriam 2 testes para primeiro e segundo andar sem jardim e mais dois testes para o térreo com jardim pequeno e grande."
    },
    {
      "id": 435,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando um sistema que calcula a nota final do curso para um determinado aluno. A nota final é atribuída com base no resultado final de pontos, de acordo com as regras a seguir: Reprovado: 0 a 50 Razoável: 51 a 60 Satisfatório: 61 a 70 Bom: 71 a 80 Muito Bom: 81 a 90 Excelente: 91 a 100 Você preparou o seguinte conjunto de casos de teste: TC1 - Resultado final: 91 Nota final: Excelente TC2 - Resultado final: 50 Nota final: Reprovado TC3 - Resultado final: 81 Nota final: Muito Bom TC4 - Resultado final: 60 Nota final: Razoável TC5 - Resultado final: 70 Nota final: Satisfatório TC6 - Resultado final: 80 Nota final: Bom Qual é a cobertura da Análise de Valor Limite - BVA (Boundary Value Analysis) de dois valores para o resultado final obtido com os casos de teste existentes?",
      "options": [
        {
          "option": "100%",
          "isCorrect": false
        },
        {
          "option": "50%",
          "isCorrect": true
        },
        {
          "option": "33.3%",
          "isCorrect": false
        },
        {
          "option": "60%",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 50%"
    },

    {
      "id": 437,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Seu conjunto de testes atingiu 100% de cobertura de instrução. Qual é a consequência desse fato?",
      "options": [
        {
          "option": "Cada instrução no código que contém um defeito foi executada pelo menos uma vez.",
          "isCorrect": true
        },
        {
          "option": "Cada caminho no código foi executado pelo menos uma vez.",
          "isCorrect": false
        },
        {
          "option": "Qualquer conjunto de testes que contenha mais casos de teste do que o seu conjunto de testes também alcançará 100% de cobertura de instrução.",
          "isCorrect": false
        },
        {
          "option": "Cada combinação de valores de entrada foi testada pelo menos uma vez.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Cada instrução no código que contém um defeito foi executada pelo menos uma vez.\nIsso é verdadeiro, pois atingir 100% de cobertura de instrução significa que todas as instruções executáveis no código foram executadas pelo menos uma vez, o que inclui aquelas que podem conter defeitos.\n Cada caminho no código foi executado pelo menos uma vez: Isso não é garantido apenas com cobertura de instrução, pois a cobertura de instrução não assegura que todas as combinações de caminhos (ou fluxos de controle) foram testadas;\n Qualquer conjunto de testes que contenha mais casos de teste do que o seu conjunto de testes também alcançará 100% de cobertura de instrução: Isso não é necessariamente verdadeiro, pois a quantidade de casos de teste não garante a cobertura de instrução; depende de quais instruções os casos de teste exercitam;\nCada combinação de valores de entrada foi testada pelo menos uma vez: Isso não é garantido pela cobertura de instrução, pois a cobertura de instrução não considera todas as combinações possíveis de valores de entrada."
    },
    
    {
      "id": 438,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das opções a seguir NÃO é verdadeira para testes caixa-branca?",

      "options": [
        {
          "option": "As métricas de cobertura caixa-branca podem ajudar a identificar testes adicionais para aumentar a cobertura do código.",
          "isCorrect": false
        },
        {
          "option": "As técnicas de teste caixa-branca podem ser usadas em testes estáticos.",
          "isCorrect": true
        },
        {
          "option": "O teste caixa-branca pode ajudar a identificar lacunas na implementação dos requisitos.",
          "isCorrect": false
        },
        {
          "option": "Durante o teste caixa-branca, toda a implementação do software é considerada.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: As técnicas de teste caixa-branca podem ser usadas em testes estáticos.\nOlhando apenas o código não é possível identificar se algum requisito não foi atendido é necessário comparar com alguma especificação.\nDurante o teste caixa-branca, toda a implementação do software é considerada. Todo tipo de código e linha de comando pode ser considerado.\nAs métricas de cobertura caixa-branca podem ajudar a identificar testes adicionais para aumentar a cobertura do código. Realmente pode ajudar a identificar algum ponto que não foi contemplado, algum 'else' alguma saída de 'for', qualquer coisa que não foi identificado durante um teste caixa-preta.\nO teste caixa-branca pode ajudar a identificar lacunas na implementação dos requisitos. Basicamente o teste estático pode ser considerado um teste caixa-branca."
    },
    {
      "id": 439,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das opções a seguir descreve MELHOR o conceito por trás da suposição de erros?",
      "options": [
        {
          "option": "A suposição de erros exige que você duplique rapidamente a tarefa de desenvolvimento para identificar os tipos de erros que um desenvolvedor pode cometer.",
          "isCorrect": false
        },
        {
          "option": "A suposição de erros envolve o uso de seu conhecimento e experiência de defeitos encontrados no passado e erros típicos cometidos por desenvolvedores.",
          "isCorrect": true
        },
        {
          "option": "A suposição de erros exige que você imagine que é o usuário do objeto de teste e adivinhe os erros que o usuário poderia cometer ao interagir com ele.",
          "isCorrect": false
        },
        {
          "option": "A suposição de erros envolve o uso de sua experiência pessoal de desenvolvimento e os erros que você cometeu como desenvolvedor.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A suposição de erros envolve o uso de seu conhecimento e experiência de defeitos encontrados no passado e erros típicos cometidos por desenvolvedores."
    },
    {
      "id": 440,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Em seu projeto, houve um atraso no lançamento de um aplicativo totalmente novo e a execução do teste começou tarde, mas você tem um conhecimento de domínio muito detalhado e boas habilidades analíticas. A lista completa de requisitos ainda não foi compartilhada com a equipe, mas a gerência está pedindo que alguns resultados de testes sejam apresentados. Qual técnica de teste se encaixa MELHOR nessa situação?",
      "options": [
        {
          "option": "Suposição de erros.",
          "isCorrect": false
        },
        {
          "option": "Testes baseados em listas de verificação.",
          "isCorrect": false
        },
        {
          "option": "Testes exploratórios.",
          "isCorrect": true
        },
        {
          "option": "Teste de ramificação.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Testes exploratórios.\nTestes exploratórios são adequados quando há falta de documentação completa, pois permitem que o testador use seu conhecimento e habilidades analíticas para explorar o sistema e identificar problemas potenciais."
    },
    {
      "id": 441,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das opções a seguir descreve MELHOR a maneira como os critérios de aceite podem ser documentados?",
      "options": [
        {
          "option": "Documentar os riscos relacionados a uma determinada história de usuário em um plano de teste para facilitar o teste baseado em riscos de uma determinada história de usuário.",
          "isCorrect": false
        },
        {
          "option": "Realizar retrospectivas para determinar as necessidades reais dos stakeholders em relação a uma determinada história de usuário.",
          "isCorrect": false
        },
        {
          "option": "Usar a comunicação verbal para reduzir o risco de outras pessoas não entenderem os critérios de aceite.",
          "isCorrect": false
        },
        {
          "option": "Usar o formato dado/quando/então para descrever um exemplo de condição de teste relacionada a uma determinada história de usuário.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Usar o formato dado/quando/então para descrever um exemplo de condição de teste relacionada a uma determinada história de usuário.\nEsta é a melhor maneira de documentar critérios de aceite. O formato dado/quando/então é amplamente utilizado em metodologias ágeis, como o Desenvolvimento Orientado por Comportamento (BDD), para descrever cenários de teste de forma clara e estruturada. Ele ajuda a definir as condições iniciais, ações e resultados esperados de maneira compreensível e verificável.\nDocumentar os riscos relacionados a uma determinada história de usuário em um plano de teste para facilitar o teste baseado em riscos de uma determinada história de usuário.\n  Esta opção se refere ao uso de planos de teste para documentar riscos, o que é útil para testes baseados em riscos, mas não é a melhor maneira de documentar critérios de aceite. Os critérios de aceite são condições específicas que devem ser atendidas para que uma história de usuário seja aceita, não apenas uma lista de riscos.\nRealizar retrospectivas para determinar as necessidades reais dos stakeholders em relação a uma determinada história de usuário.\n  Retrospectivas são úteis para entender as necessidades dos stakeholders e melhorar processos, mas não são uma forma de documentar critérios de aceite. Elas são mais voltadas para a melhoria contínua e ajuste de processos.\nUsar a comunicação verbal para reduzir o risco de outras pessoas não entenderem os critérios de aceite.\n  A comunicação verbal pode ajudar na compreensão, mas não é uma forma eficaz de documentar critérios de aceite, pois a documentação precisa ser clara e acessível a todos os membros da equipe de forma consistente e verificável"
    },
    {
      "id": 442,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Considere a seguinte história de usuário: “Como editor, quero revisar o conteúdo antes de ser publicado, para que eu possa garantir que a gramática esteja correta”, e seus critérios de aceite: O usuário pode fazer login no sistema de gerenciamento de conteúdo com o papel de 'Editor'; O editor pode visualizar as páginas de conteúdo existentes; O editor pode editar o conteúdo da página; O editor pode adicionar comentários de marcação; O editor pode salvar as alterações; O editor pode reatribuir a função de 'proprietário do conteúdo' para fazer atualizações. Qual dos seguintes é o MELHOR exemplo de um teste ATDD para essa história de usuário?",
      "options": [
        {
          "option": "testar se o proprietário do conteúdo pode fazer login e fazer atualizações no conteúdo.",
          "isCorrect": false
        },
        {
          "option": "testar se o editor pode programar o conteúdo editado para publicação.",
          "isCorrect": false
        },
        {
          "option": "testar se o editor pode reatribuir a outro editor para fazer atualizações.",
          "isCorrect": false
        },
        {
          "option": "testar se o editor pode salvar o documento após excluir o conteúdo da página.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: testar se o editor pode salvar o documento após excluir o conteúdo da página.\nEste teste ATDD (Acceptance Test-Driven Development) foca em verificar uma funcionalidade crítica para o papel do editor, garantindo que as alterações possam ser salvas corretamente após a edição do conteúdo."
    },
    {
      "id": 445,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual das seguintes afirmações DESCREVE MELHOR a diferença entre o teste de tabela de decisão e o teste de ramificação?",
      "options": [
        {
          "option": "No teste de tabela de decisão, os casos de teste são derivados da especificação que descreve a lógica de negócios. No teste de ramificação, os casos de teste são baseados na antecipação de possíveis defeitos no código-fonte.",
          "isCorrect": false
        },
        {
          "option": "No teste de tabela de decisão, os casos de teste são independentes de como o software é implementado. No teste de ramificação, os casos de teste só podem ser criados após o design ou implementação do código.",
          "isCorrect": true
        },
        {
          "option": "No teste de tabela de decisão, os casos de teste são derivados das declarações de decisão no código. No teste de ramificação, os casos de teste são derivados do conhecimento do fluxo de controle do objeto de teste.",
          "isCorrect": false
        },
        {
          "option": "No teste de tabela de decisão, os casos de teste são derivados do conhecimento do fluxo de controle do objeto de teste. No teste de ramificação, os casos de teste são derivados da especificação que descreve a lógica de negócios.",
          "isCorrect": false
        }
      ],
      "comments": "Resposta correta: No teste de tabela de decisão, os casos de teste são independentes de como o software é implementado. No teste de ramificação, os casos de teste só podem ser criados após o design ou implementação do código.\n\nTeste de Tabela de Decisão: Este teste é uma técnica de caixa-preta baseado em especificações que descrevem a lógica de negócios e não depende de como o software é implementado. Ele utiliza tabelas para representar combinações de condições e ações, permitindo testar diferentes cenários de decisão.\n\nTeste de Ramificação: Este teste é uma técnica de caixa-branca que requer conhecimento do fluxo de controle do código. Os casos de teste são criados para cobrir as diferentes ramificações no código, o que só é possível após o design ou implementação do código."
    },
    {
      "id": 446,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Clientes da cadeia de lava-rápidos TestWash têm cartões com um registro do número de lavagens que eles compraram até agora. O valor inicial é 0. Após entrar no lava-rápido, o sistema aumenta o número no cartão em um. Esse valor representa o número da lavagem atual. Com base nesse número, o sistema decide qual desconto o cliente tem direito. Para cada décima lavagem, o sistema oferece um desconto de 10%, e para cada vigésima lavagem, o sistema oferece mais um desconto de 40% (ou seja, um desconto total de 50%). Qual dos seguintes conjuntos de dados de entrada (entendidos como os números da lavagem atual) alcança a cobertura de partição de equivalência mais alta?",
      "options": [
        {
          "option": "19, 20, 30",
          "isCorrect": true
        },
        {
          "option": "1, 10, 50",
          "isCorrect": false
        },
        {
          "option": "11, 12, 20",
          "isCorrect": false
        },
        {
          "option": "10, 29, 30, 31",
          "isCorrect": false
        }
      ],
      "comments": "Sua resposta está correta. A resposta correta é: 19, 20, 30\n\nEstá correto. 19 cobre a partição 'sem desconto', 20 cobre a partição 'desconto de 50%', e 30 cobre a partição 'desconto de 10%'. Esses três valores cobrem todas as três partições de equivalência válidas."
    },
    {
      "id": 447,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando um formulário que verifica a correção do comprimento da senha fornecida como entrada. O formulário aceita uma senha com o comprimento correto e rejeita uma senha que é muito curta ou muito longa. O comprimento da senha é considerado correto se tiver entre 6 e 12 caracteres, inclusivamente. Caso contrário, é considerado incorreto. Inicialmente, o formulário está vazio (comprimento da senha = 0). Você aplica a análise de valores de fronteira à variável 'comprimento da senha'. Seu conjunto de casos de teste alcança 100% de cobertura de valores de fronteira de 2 valores. A equipe decidiu que, devido ao alto risco desse componente, casos de teste devem ser adicionados para garantir 100% de cobertura de valores de fronteira de 3 valores. Quais comprimentos de senha adicionais devem ser testados para alcançar isso?",
      "options": [
        {
          "option": "7, 11",
          "isCorrect": false
        },
        {
          "option": "4, 5, 13, 14",
          "isCorrect": false
        },
        {
          "option": "1, 4, 7, 11, 14",
          "isCorrect": true
        },
        {
          "option": "1, 5, 13",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1, 4, 7, 11, 14\n\nO BVA de 2 valores nessa questao seria:\n[0] Partiçao invalida menor [5,6] Partiçao valida [12,13] Partiçao invalida maior\nPor se tratar de um componente de alto risco foi utilizado BVA de 3 valores em todas as partiçoes o que gerou um efeito de 4 valores limites sequencias:\n[0,1] Partiçao invalida menor [4,5,6,7] Partiçao valida [11,12,13,14] Partiçao invalida maior"
    },
    {
      "id": 448,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "A tabela de decisão a seguir contém as regras para determinar o risco de aterosclerose. \nRegra 1 muito baixo Colesterol (mg/dl) ≤ 124 Pressão sanguínea (mmHg) ≤ 140 \nRegra 2 baixo Colesterol (mg/dl) ≤ 124 Pressão sanguínea (mmHg) > 140 \nRegra 3 médio Colesterol (mg/dl) 125 - 200 Pressão sanguínea (mmHg) ≤ 140 \nRegra 4 alto Colesterol (mg/dl) 125 - 200 Pressão sanguínea (mmHg) > 140 \nRegra 5 muito alto Colesterol (mg/dl) ≥ 201 Pressão sanguínea (mmHg) - \nVocê projetou os casos de teste com os seguintes dados de entrada de teste: \nTC1: Colesterol = 125 mg/dl Pressão sanguínea = 141 mmHg \nTC2: Colesterol = 200 mg/dl Pressão sanguínea = 201 mmHg \nTC3: Colesterol = 124 mg/dl Pressão sanguínea = 201 mmHg \nTC4: Colesterol = 109 mg/dl Pressão sanguínea = 200 mmHg \nTC5: Colesterol = 201 mg/dl Pressão sanguínea = 140 mmHg \nQual é a cobertura da tabela de decisão alcançada por esses casos de teste?",
      "options": [
        {
          "option": "100%",
          "isCorrect": false
        },
        {
          "option": "80%",
          "isCorrect": false
        },
        {
          "option": "40%",
          "isCorrect": false
        },
        {
          "option": "60%",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: 60%\n\nApenas as regras 2, 4 e 5 foram cobertas pelos casos de teste.\nCada regra equivale 20%."
    },
    {
      "id": 450,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você executou dois casos de teste, T1 e T2, no mesmo código. O teste T1 alcançou 40% de cobertura de instruções e o teste T2 alcançou 65% de cobertura de instruções. Qual das seguintes afirmações deve ser necessariamente verdadeira?",
      "options": [
        {
          "option": "Existe pelo menos uma instrução que deve ter sido executada tanto por T1 quanto por T2",
          "isCorrect": true
        },
        {
          "option": "O conjunto de testes composto pelos testes T1 e T2 alcança 105% de cobertura de instruções",
          "isCorrect": false
        },
        {
          "option": "O conjunto de testes composto pelos testes T1 e T2 alcança cobertura total de branches",
          "isCorrect": false
        },
        {
          "option": "Pelo menos 5% das instruções no código em teste são não executáveis",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Existe pelo menos uma instrução que deve ter sido executada tanto por T1 quanto por T2\nSe as instruções executadas por T1 e T2 fossem disjuntas, a cobertura do conjunto de testes {T1, T2} seria de 105%, o que é impossível. Portanto, pelo menos 5% das instruções executáveis devem ter sido executadas tanto por T1 quanto por T2."
    },
    {
      "id": 451,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Seja a métrica de cobertura de ramificação definida como BCov=X/Y×100. \nO que X e Y representam nesta fórmula?",
      "options": [
        {
          "option": "X = número de resultados de decisões exercidos pelos casos de teste\nY = número total de resultados de decisão no código",
          "isCorrect": false
        },
        {
          "option": "X = número de ramificações exercidas pelos casos de teste\nY = número total de ramificações no código",
          "isCorrect": true
        },
        {
          "option": "X = número de ramificações condicionais exercidos pelos casos de teste\nY = número total de ramificações no código",
          "isCorrect": false
        },
        {
          "option": "X = número de ramificações condicionais exercidas pelos casos de teste\nY = número total de resultados de decisão no código",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: X = número de ramificações exercidas pelos casos de teste\nY = número total de ramificações no código\nEsta definição considera todas as ramificações, tanto condicionais quanto incondicionais, para calcular a cobertura de ramificação."
    },
    {
      "id": 452,
      "isMultipleChoice": true,
      "tag": ["Capítulo 4"],
      "question": "Quais DUAS das seguintes afirmações fornecem a MELHOR justificativa para usar testes exploratórios?",
      "options": [
        {
          "option": "Os testadores têm experiência no domínio de negócios e têm boas habilidades analíticas",
          "isCorrect": true
        },
        {
          "option": "Os testadores não foram alocados tempo suficiente para o design e execução de testes",
          "isCorrect": true
        },
        {
          "option": "Os testadores são membros de uma equipe ágil e têm boas habilidades de programação",
          "isCorrect": false
        },
        {
          "option": "A estratégia de teste existente requer que os testadores usem técnicas formais de teste caixa-preta",
          "isCorrect": false
        },
        {
          "option": "A especificação é escrita em uma linguagem formal que pode ser processada por uma ferramenta",
          "isCorrect": false
        }
      ],
      "comments": "As respostas corretas são: Os testadores não foram alocados tempo suficiente para o design e execução de testes, Os testadores têm experiência no domínio de negócios e têm boas habilidades analíticas\n\nTestes exploratórios são mais eficazes quando os testadores têm experiência no domínio e boas habilidades analíticas, pois isso permite que eles explorem o sistema de forma mais eficiente e identifiquem áreas problemáticas rapidamente.\n\nQuando há pressão de tempo e não há tempo suficiente para o design e execução de testes formais, os testes exploratórios permitem que os testadores avaliem rapidamente o sistema e identifiquem defeitos potenciais."
    },
    {
      "id": 453,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual dos seguintes se encaixa MELHOR como um elemento da lista de verificação usada no teste baseado em lista de verificação?",
      "options": [
        {
          "option": "“A cobertura de declarações alcançada excede 85%”",
          "isCorrect": false
        },
        {
          "option": "“As mensagens de erro são escritas em uma linguagem que o usuário pode entender”",
          "isCorrect": true
        },
        {
          "option": "“O desenvolvedor cometeu um erro ao implementar o código”",
          "isCorrect": false
        },
        {
          "option": "“O programa funciona corretamente em relação aos requisitos funcionais e não funcionais”",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: “As mensagens de erro são escritas em uma linguagem que o usuário pode entender”\n\nListas de verificação são usadas para garantir que aspectos específicos e importantes do sistema sejam verificados, como a clareza das mensagens de erro para o usuário."
    },
    {
      "id": 454,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Sua equipe analisa a seguinte história do usuário para definir os critérios de aceitação: \nComo cliente registrado, quero poder visualizar meus pedidos anteriores no site da empresa, para que eu possa acompanhar minhas compras. \nQual dos seguintes casos de teste NÃO será relevante para esta história do usuário?",
      "options": [
        {
          "option": "Entrada: o cliente clica no botão \"Ordenar ascendente\" na tela de histórico de pedidos Saída esperada: o sistema mostra o histórico de pedidos ordenado pelo número do pedido em ordem ascendente",
          "isCorrect": false
        },
        {
          "option": "Entrada: o cliente faz login em sua conta no site e clica no botão \"ver histórico de pedidos\" Saída esperada: o sistema mostra uma lista de todos os pedidos anteriores do cliente, incluindo a data, número do pedido e custo total",
          "isCorrect": false
        },
        {
          "option": "Entrada: um cliente não registrado se registra como novo cliente com um endereço de e-mail válido",
          "isCorrect": true
        },
        {
          "option": "Entrada: o cliente clica em um pedido na lista de pedidos Saída esperada: o sistema exibe os itens individuais comprados, juntamente com seus preços e quantidades",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Entrada: um cliente não registrado se registra como novo cliente com um endereço de e-mail válido\n\nEste caso de teste não é relevante para a história do usuário, pois a história se concentra em clientes registrados visualizando seus pedidos anteriores, não em novos registros de clientes."
    },
    {
      "id": 455,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Qual é a principal diferença entre as técnicas de teste caixa-preta e as técnicas de teste baseadas em experiência?",
      "options": [
        {
          "option": "A base de teste",
          "isCorrect": true
        },
        {
          "option": "O objeto de teste",
          "isCorrect": false
        },
        {
          "option": "O ciclo de vida de desenvolvimento de software (SDLC) no qual a técnica de teste pode ser usada",
          "isCorrect": false
        },
        {
          "option": "O nível de teste no qual a técnica de teste é usada",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A base de teste\nAs técnicas de teste caixa-preta são baseadas em especificações e requisitos do sistema, sem considerar a estrutura interna do software. Já as técnicas de teste baseadas em experiência dependem do conhecimento e da experiência dos testadores, utilizando suposições sobre onde os defeitos podem estar;\n\nO objeto de teste: Ambas as técnicas podem ser aplicadas ao mesmo objeto de teste, mas diferem na abordagem e nos critérios utilizados para criar casos de teste;\n\nO ciclo de vida de desenvolvimento de software (SDLC) no qual a técnica de teste pode ser usada: Ambas as técnicas podem ser usadas em diferentes fases do SDLC, dependendo das necessidades do projeto;\n\nO nível de teste no qual a técnica de teste é usada: As técnicas de teste caixa-preta e baseadas em experiência podem ser aplicadas em vários níveis de teste, como teste de sistema ou teste de aceitação, dependendo do contexto e dos objetivos do teste."
    },
    {
      "id": 456,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Você está testando um validador de PIN, que aceita PINs válidos e rejeita PINs inválidos. Um PIN é uma sequência de dígitos. \nUm PIN é válido se consistir de quatro dígitos, sendo pelo menos dois deles diferentes. Você identificou as seguintes partições de equivalência válidas: Variável: Comprimento do código PIN\n\nA partição 'comprimento correto' - PINs de quatro dígitos\nA partição 'comprimento incorreto' - PINs com comprimento diferente de 4 Variável: Número de dígitos diferentes\nA partição 'número de dígitos diferentes correto' - PINs com pelo menos dois dígitos diferentes\nA partição 'número de dígitos diferentes incorreto' - PINs com todos os dígitos iguais\nQual dos seguintes é um conjunto MÍNIMO de dados de entrada que cobre todas as partições de equivalência identificadas?",
      "options": [
        {
          "option": "1, 123, 1111, 1234",
          "isCorrect": false
        },
        {
          "option": "112, 1111, 1234, 123456",
          "isCorrect": true
        },
        {
          "option": "12, 112, 1112, 11112",
          "isCorrect": false
        },
        {
          "option": "1, 111, 1111, 11111",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 112, 1111, 1234, 123456\nEste conjunto cobre todas as partições de equivalência identificadas: comprimento correto e incorreto, e número de dígitos diferentes correto e incorreto."
    },
    {
      "id": 457,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Um desenvolvedor foi solicitado a implementar a seguinte regra de negócio:\n\nENTRADA: valor (número inteiro)\nSE (valor ≤ 100 OU valor ≥ 200) ENTÃO escreva “valor incorreto”\nSENÃO escreva “valor OK”\n\nVocê projeta os casos de teste usando análise de valores limite de 2 valores.\nQual dos seguintes conjuntos de entradas de teste alcança a maior cobertura?",
      "options": [
        {
          "option": "100, 150, 200, 201",
          "isCorrect": false
        },
        {
          "option": "99, 100, 200, 201",
          "isCorrect": false
        },
        {
          "option": "98, 99, 100, 101",
          "isCorrect": false
        },
        {
          "option": "101, 150, 199, 200",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: 101, 150, 199, 200\nEste conjunto de entradas de teste cobre os valores limite de 2 valores para a regra de negócio, garantindo a maior cobertura possível."
    },
    {
      "id": 462,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Como o teste de caixa branca pode ser útil para apoiar o teste de caixa preta?",
      "options": [
        {
          "option": "As medidas de cobertura de caixa branca podem ajudar os testadores a avaliar os testes de caixa preta em termos da cobertura de código alcançada por esses testes de caixa preta",
          "isCorrect": true
        },
        {
          "option": "A análise de cobertura de caixa branca pode ajudar os testadores a identificar fragmentos inacessíveis do código-fonte",
          "isCorrect": false
        },
        {
          "option": "O teste de ramificação subsume técnicas de teste de caixa preta, então alcançar cobertura de ramificação completa garante alcançar cobertura completa de qualquer técnica de caixa preta",
          "isCorrect": false
        },
        {
          "option": "As técnicas de teste de caixa branca podem fornecer itens de cobertura para técnicas de caixa preta",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: As medidas de cobertura de caixa branca podem ajudar os testadores a avaliar os testes de caixa preta em termos da cobertura de código alcançada por esses testes de caixa preta\nAs medidas de cobertura de caixa branca, como a cobertura de instrução ou de ramificação, permitem que os testadores verifiquem se os casos de teste de caixa preta estão exercitando adequadamente o código subjacente. Isso ajuda a identificar áreas do código que não estão sendo testadas e a melhorar a eficácia dos testes de caixa preta."
    },
    {
      "id": 463,
      "isMultipleChoice": false,
      "tag": ["Capítulo 4"],
      "question": "Considerando a seguinte lista: Entrada correta não aceita, Entrada incorreta aceita, Formato de saída errado, Divisão por zero. Qual técnica de teste é MAIS PROVAVELMENTE usada pelo testador que usa esta lista ao realizar testes?",
      "options": [
        {
          "option": "Teste exploratório",
          "isCorrect": false
        },
        {
          "option": "Ataque de falha",
          "isCorrect": true
        },
        {
          "option": "Teste baseado em lista de verificação",
          "isCorrect": false
        },
        {
          "option": "Análise de valor limite",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Ataque de falha\nO ataque de falha é uma técnica que envolve a criação ou aquisição de uma lista de possíveis erros, defeitos e falhas, e a modelagem de testes que identificam os defeitos associados a esses erros, expõem os defeitos ou causam as falhas. A lista fornecida, que inclui itens como \"Entrada correta não aceita\" e \"Divisão por zero\", é típica de um ataque de falha, onde o testador está focado em identificar falhas específicas que podem ocorrer no sistema."
    },
    //--Capitulo 5

    {
      "id": 501,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes declarações MELHOR descreve como as tarefas são divididas entre o gerente de testes e o testador?",
      "options": [
        {
          "option": "O gerente de testes planeja as atividades de teste e escolhe os padrões a serem seguidos, enquanto o testador escolhe as ferramentas e estabelece as diretrizes de uso das ferramentas",
          "isCorrect": false
        },
        {
          "option": "O gerente de testes planeja e organiza os testes e especifica os casos de teste, enquanto o testador executa os testes",
          "isCorrect": false
        },
        {
          "option": "O gerente de testes planeja, coordena e controla as atividades de teste, enquanto o testador automatiza os testes",
          "isCorrect": true
        },
        {
          "option": "O gerente de testes planeja, monitora e controla as atividades de teste, enquanto o testador projeta os testes e decide sobre a liberação do objeto de teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: O gerente de testes planeja, coordena e controla as atividades de teste, enquanto o testador automatiza os testes. \nO gerente de testes é responsável por coordenar e controlar as atividades de teste, garantindo que o processo de teste seja executado conforme planejado. \nO testador, por outro lado, foca na automação dos testes, utilizando ferramentas e scripts para executar testes de forma eficiente. \nEscolher ferramentas e estabelecer diretrizes é geralmente uma função do gerente. \nDecidir sobre a liberação do objeto de teste é uma decisão de negócios, não do testador. \nEspecificar casos de teste é responsabilidade do testador, não do gerente."
    },
    {
      "id": 502,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes métricas seria a mais útil para monitorar durante a execução do teste?",
      "options": [
        {
          "option": "Porcentagem de casos de teste executados",
          "isCorrect": true
        },
        {
          "option": "Número médio de testadores envolvidos na execução do teste",
          "isCorrect": false
        },
        {
          "option": "Cobertura dos requisitos por código fonte",
          "isCorrect": false
        },
        {
          "option": "Porcentagem de casos de teste já criados e revisados",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Porcentagem de casos de teste executados. \nEsta métrica é crucial para monitorar o progresso da execução dos testes, \npois indica quantos testes planejados foram realmente executados, \npermitindo uma avaliação do andamento do processo de teste."
    },
    {
      "id": 503,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes aspectos pode afetar e fazer parte do planejamento (inicial) do teste?",
      "options": [
        {
          "option": "Limitações orçamentárias",
          "isCorrect": true
        },
        {
          "option": "Casos de uso",
          "isCorrect": false
        },
        {
          "option": "Diário de testes",
          "isCorrect": false
        },
        {
          "option": "Taxa de falha",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Limitações orçamentárias. \nCasos de uso: Parte da etapa de modelagem não planejamento. \nDiário de testes: é coletado na etapa de execução. \nTaxa de falha: é coletado na etapa de execução."
    },
    {
      "id": 504,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das listas a seguir contém apenas os critérios típicos de saída dos testes?",
      "options": [
        {
          "option": "Medidas de confiabilidade, cobertura do teste, cronograma e status sobre a correção de defeitos e riscos remanescentes",
          "isCorrect": true
        },
        {
          "option": "Tempo para comercialização, defeitos restantes, qualificação do testador, disponibilidade de casos de uso testável, cobertura de teste e custo do teste",
          "isCorrect": false
        },
        {
          "option": "Medidas de confiabilidade, cobertura de teste, custo do teste, disponibilidade do ambiente de teste, tempo de colocação no mercado e completude do produto",
          "isCorrect": false
        },
        {
          "option": "Medidas de confiabilidade, cobertura de teste, grau de independência do testador e completude do produto",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Medidas de confiabilidade, cobertura do teste, cronograma e status sobre a correção de defeitos e riscos remanescentes. \nOs critérios de saída típicos incluem: medidas de precisão (p. ex., nível de cobertura alcançado, número de defeitos não resolvidos, densidade de defeitos, número de casos de teste com falha) e critérios de conclusão (p. ex., testes planejados foram executados, testes estáticos foram realizados, todos os defeitos encontrados foram relatados, todos os testes de regressão foram automatizados). \nO esgotamento do tempo ou do orçamento também pode ser visto como um critério de saída válido. Mesmo sem que outros critérios de saída sejam atendidos, pode ser aceitável encerrar os testes nessas circunstâncias, se os stakeholders tiverem analisado e aceitado o risco de entrar em operação sem mais testes."
    },
    {
      "id": 505,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos itens a seguir NÃO está incluído em um relatório resumido de teste?",
      "options": [
        {
          "option": "Desvios da abordagem de teste",
          "isCorrect": false
        },
        {
          "option": "Medições do progresso real em relação aos critérios de saída",
          "isCorrect": false
        },
        {
          "option": "Definição de critérios de aprovação/reprovação e objetivos dos testes",
          "isCorrect": true
        },
        {
          "option": "Avaliação da qualidade do objeto de teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Definição de critérios de aprovação/reprovação e objetivos dos testes. \nUm relatório resumido de teste geralmente é realizado no final do teste, ele inclui informações como desvios da abordagem de teste, medições do progresso real em relação aos critérios de saída e avaliação da qualidade do objeto de teste. \nA definição de critérios de aprovação/reprovação e objetivos dos testes é geralmente parte do planejamento inicial de testes, não do relatório de conclusão."
    },
    {
      "id": 506,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "O projeto desenvolve um termostato de aquecimento 'inteligente'. Os algoritmos de controle do termostato foram modelados como modelos Matlab/Simulink e executados no servidor conectado a Internet.\n O termostato usa as especificações do servidor para acionar as válvulas de aquecimento. O gerente de teste definiu a seguinte estratégia/abordagem de teste no plano de teste: \n 1. O teste de aceite para todo o sistema e executado como um teste baseado na experiência. \n 2. Os algoritmos de controle no servidor são verificados em relação ao padrão do regulamento de economia de energia. \n 3. O teste funcional do termostato é executado como um teste baseado em risco. \n 4. Os testes de segurança de dados / comunicação via internet são executados em conjunto com especialistas externos em segurança. \n Que quatro tipos comuns de estratégias/abordagens de teste o gerente de testes implementou no plano de teste?",
      "options": [
        {
          "option": "regressão-aversão, consultiva, reativa e metódica",
          "isCorrect": false
        },
        {
          "option": "baseada em modelos, metódica, analítica e consultiva",
          "isCorrect": false
        },
        {
          "option": "analítico, conforme às normas, consultivo e reativo",
          "isCorrect": true
        },
        {
          "option": "metódico, analítico, reativo e avesso à regressão",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: analítico, conforme às normas, consultivo e reativo. \n🔹Analítico: O teste funcional do termostato é executado como um teste baseado em risco, que é uma abordagem analítica. Base em risco, base em caso de teste, base em requisito, base em historia, tudo isso seria analítico. \n🔹Conforme às normas: Os algoritmos de controle no servidor são verificados em relação ao padrão do regulamento de economia de energia, o que implica conformidade com normas. \n🔹Consultivo: Os testes de segurança de dados/comunicação via internet são executados em conjunto com especialistas externos em segurança, o que caracteriza uma abordagem consultiva. \n🔹Reativo: O teste de aceite para todo o sistema é executado como um teste baseado na experiência, que é uma abordagem reativa. \nExplicação das respostas erradas: \n🔹Regressão-aversão ou avesso à regressão: Esta abordagem foca em evitar a introdução de novos defeitos após mudanças no software, mas não é mencionada nas estratégias adotadas para este projeto específico. \n🔹Baseada em modelos: Refere-se ao uso de modelos para derivar casos de teste, como modelos Matlab/Simulink, mas não é explicitamente mencionada como uma estratégia adotada neste contexto. \n🔹Metódico: Envolve seguir um conjunto específico de métodos ou processos, mas não é uma abordagem destacada nas estratégias mencionadas para este projeto."
    },
    {
      "id": 507,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes é a característica de uma abordagem baseada em métricas para a estimativa de teste?",
      "options": [
        {
          "option": "Experiência geral coletada em entrevistas com gerentes de testes",
          "isCorrect": false
        },
        {
          "option": "Orçamento que foi utilizado por um projeto de teste anterior semelhante",
          "isCorrect": true
        },
        {
          "option": "Média dos cálculos coletados de especialistas empresariais",
          "isCorrect": false
        },
        {
          "option": "Estimativa de esforço para automação de testes acordada na equipe de teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Orçamento que foi utilizado por um projeto de teste anterior semelhante. \nEstá alinhado com essa abordagem porque utiliza dados concretos e históricos para prever os custos do novo projeto. \nUma abordagem baseada em métricas para estimativa de testes se baseia em dados históricos e quantitativos para prever o esforço, custo e tempo necessários para os testes. \n🔹Experiência geral coletada em entrevistas com gerentes de testes → Está mais próxima de uma abordagem baseada em especialistas, pois se apoia na experiência subjetiva dos gerentes. \n🔹Média dos cálculos coletados de especialistas empresariais → Também faz parte da abordagem baseada em especialistas, pois depende da opinião de pessoas ao invés de métricas passadas. \n🔹Estimativa de esforço para automação de testes acordada na equipe de teste → Isso pode ser útil, mas não é um método baseado em métricas históricas, e sim em consenso da equipe, o que se aproxima mais de uma abordagem empírica."
    },
    {
      "id": 509,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Que informações valiosas foram omitidas no relatório de defeitos acima?",
      "options": [
        {
          "option": "Status do defeito",
          "isCorrect": false
        },
        {
          "option": "Os resultados reais dos testes",
          "isCorrect": false
        },
        {
          "option": "Idéias para melhorar o caso teste",
          "isCorrect": false
        },
        {
          "option": "Identificação da versão testada do software",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Identificação da versão testada do software. \nA identificação da versão testada é crucial para rastrear o defeito e garantir que ele seja corrigido na versão correta. \nSem essa informação, pode haver confusão sobre qual versão do software está sendo referida."
    },
    {
      "id": 510,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes explica MELHOR um benefício dos testes independentes?",
      "options": [
        {
          "option": "Uma equipe de teste independente pode trabalhar totalmente separada dos desenvolvedores, não precisa se distrair com a mudança dos requisitos do projeto e pode restringir a comunicação com os desenvolvedores a relatórios de defeitos através do sistema de gerenciamento de defeitos",
          "isCorrect": false
        },
        {
          "option": "Se uma equipe de teste externa à organização pode ser proporcionada, então há benefícios distintos em termos de esta equipe externa não ser tão facilmente influenciada pelas preocupações de entrega do gerenciamento do projeto e pela necessidade de cumprir prazos de entrega rígidos",
          "isCorrect": false
        },
        {
          "option": "O uso de uma equipe de teste independente permite que a gerência do projeto atribua a responsabilidade pela qualidade da entrega final à equipe de teste, garantindo assim que todos estejam cientes de que a qualidade é responsabilidade geral da equipe de teste",
          "isCorrect": false
        },
        {
          "option": "Quando as especificações contêm ambiguidades e inconsistências, são feitas suposições sobre sua interpretação, e um testador independente pode ser útil para questionar essas suposições e a interpretação feita pelo desenvolvedor.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Quando as especificações contêm ambiguidades e inconsistências, são feitas suposições sobre sua interpretação, e um testador independente pode ser útil para questionar essas suposições e a interpretação feita pelo desenvolvedor. \n🔹Incorreto → Uma equipe de teste independente não deve trabalhar completamente separada dos desenvolvedores. A comunicação entre testadores e desenvolvedores é essencial para um bom processo de testes. \n🔹Incorreto → Embora uma equipe externa possa reduzir a influência da pressão do gerenciamento, a principal vantagem dos testes independentes não é evitar prazos rígidos, mas sim fornecer uma visão imparcial. \n🔹Incorreto → A qualidade do produto não é responsabilidade exclusiva da equipe de teste, mas sim de toda a equipe de desenvolvimento. Os testadores identificam problemas, mas não são os únicos responsáveis pela qualidade."
    },
    {
      "id": 511,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes tarefas é MUITO MAIS EFICIENTE a ser executada pelo gerente de testes?",
      "options": [
        {
          "option": "Escrever relatórios resumidos de testes com base nas informações coletadas durante os testes",
          "isCorrect": true
        },
        {
          "option": "Analisar, rever e avaliar os requisitos, especificações e modelos de testabilidade",
          "isCorrect": false
        },
        {
          "option": "Testes de revisão desenvolvidos por outros",
          "isCorrect": false
        },
        {
          "option": "Preparar e adquirir dados de teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Escrever relatórios resumidos de testes com base nas informações coletadas durante os testes. \nEssa é uma atividade estratégica que requer uma visão ampla dos testes realizados. O gerente de testes coleta informações da equipe e apresenta um resumo para stakeholders, ajudando na tomada de decisão sobre a qualidade do software. \nO gerente de testes tem um papel estratégico, focado no planejamento, supervisão e comunicação dos testes dentro do projeto. Entre suas principais responsabilidades estão: \n✅ Monitoramento e controle do progresso dos testes \n✅ Análise de riscos e planejamento \n✅ Gestão da equipe de testes \n✅ Relatórios para stakeholders \n🔹Incorreto: Analisar, rever e avaliar os requisitos, especificações e modelos de testabilidade → Analisar e avaliar requisitos está mais relacionado à equipe de QA e testadores técnicos. O gerente pode supervisionar essa atividade, mas ela é normalmente realizada por analistas de teste. \n🔹Incorreto: Testes de revisão desenvolvidos por outros → Revisar testes desenvolvidos por outros é uma tarefa que pode ser executada por testadores seniores ou pares dentro da equipe. O gerente de testes foca mais na coordenação e no planejamento. \n🔹Incorreto: Preparar e adquirir dados de teste → Preparação e aquisição de dados de teste são tarefas mais técnicas, realizadas por testadores funcionais ou engenheiros de teste. O gerente pode garantir que os recursos estejam disponíveis, mas não executa essa tarefa diretamente."
    },
    {
      "id": 512,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes MELHORES os classifica como critérios de entrada e saída?",
      "options": [
        {
          "option": "Critérios de entrada - 2, 3, 6; Critérios de saída - 1, 4, 5",
          "isCorrect": false
        },
        {
          "option": "Critérios de entrada - 1, 3; Critérios de saída - 2, 4, 5, 6",
          "isCorrect": false
        },
        {
          "option": "Critérios de entrada - 5, 6; Critérios de saída - 1, 2, 3, 4",
          "isCorrect": false
        },
        {
          "option": "Critérios de entrada - 3, 5, 6; Critérios de saída - 1, 2, 4",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Critérios de entrada - 3, 5, 6; Critérios de saída - 1, 2, 4. \nCritérios de entrada: \n(3) O ambiente de teste de desempenho comercial foi projetado, montado e verificado. \nO ambiente precisa estar pronto antes de iniciar os testes, então é um critério de entrada. \n(5) As especificações de projeto do piloto automático foram revisadas e retrabalhadas. \nTer especificações revisadas e corrigidas é necessário antes de testar, então é critério de entrada. \n(6) O componente de cálculo da taxa de imposto passou nos testes unitários. \nPara começar testes de níveis mais altos, os componentes individuais devem passar nos testes unitários. \nCritérios de saída: \n(1) O orçamento original de teste de $30.000 mais a contingência de $7.000 foi gasto. \nO uso do orçamento pode ser um critério de saída para encerrar os testes. \n(2) 96% dos testes planejados para o pacote de desenho foram executados e os testes restantes estão agora fora do escopo. \nIndica que os testes foram completados conforme planejado, sendo um critério de saída. \n(4) O status atual não é nenhum defeito crítico pendente e dois de alta prioridade. \nO critério de saída pode incluir a aceitação de um certo nível de defeitos antes da liberação."
    },
    {
      "id": 513,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes cronogramas de execução de testes BEST considera as prioridades e dependências técnicas e lógicas?",
      "options": [
        {
          "option": "TC4 - TC3 - TC1 - TC2 - TC5 - TC6",
          "isCorrect": true
        },
        {
          "option": "TC4 - TC1 - TC3 - TC5 - TC6 - TC2",
          "isCorrect": false
        },
        {
          "option": "TC1 - TC3 - TC4 - TC6 - TC2 - TC5",
          "isCorrect": false
        },
        {
          "option": "TC4 - TC2 - TC5 - TC1 - TC3 - TC6",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: TC4 - TC3 - TC1 - TC2 - TC5 - TC6. \nExecuta TC4 antes de TC1 e TC3 (respeitando dependências). \nDá prioridade a TC1 e TC3 antes dos testes de menor prioridade. \nColoca TC2 antes de TC5 (respeitando a dependência)."
    },
    {
      "id": 514,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes afirmações sobre os métodos de estimativa de teste é CORRETA?",
      "options": [
        {
          "option": "Com a abordagem baseada em especialistas, os gerentes de testes responsáveis pelas diferentes atividades de teste preveem o esforço de teste esperado",
          "isCorrect": true
        },
        {
          "option": "Com a abordagem baseada em métricas, uma média dos custos de teste registrados de vários projetos passados é usada como orçamento de teste",
          "isCorrect": false
        },
        {
          "option": "Com a abordagem baseada em especialistas, um grupo de usuários experientes identificados pelo cliente recomenda o orçamento de teste necessário",
          "isCorrect": false
        },
        {
          "option": "Com a abordagem baseada em métricas, a estimativa é baseada em medidas de teste do projeto e, portanto, esta estimativa só está disponível após o início dos testes",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Com a abordagem baseada em especialistas, os gerentes de testes responsáveis pelas diferentes atividades de teste preveem o esforço de teste esperado. \nNa abordagem baseada em especialistas, a estimativa é feita com base no conhecimento e experiência de profissionais que entendem as necessidades do projeto. \nIsso pode envolver gerentes de testes ou outros especialistas que fazem uma previsão com base em sua experiência prévia. \nEmbora os especialistas façam as estimativas, não é comum que sejam 'usuários experientes identificados pelo cliente' quem recomenda o orçamento. \nO grupo de especialistas geralmente inclui membros da equipe de testes e não necessariamente usuários do produto. \nA abordagem baseada em métricas não utiliza apenas os custos de projetos passados. \nEla se baseia em dados reais de métricas de teste (como o número de casos de teste executados, falhas, etc.) para estimar o esforço de testes, e não em médias de custos. \nEmbora a abordagem baseada em métricas utilize dados do projeto, é possível fazer estimativas iniciais com base em métricas anteriores de projetos similares. \nNão é necessário esperar até o início dos testes para começar a estimativa."
    },
    {
      "id": 515,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes define MELHOR o nível de risco?",
      "options": [
        {
          "option": "O nível de risco é calculado somando as probabilidades de todas as situações problemáticas e os danos financeiros que delas resultam",
          "isCorrect": false
        },
        {
          "option": "O nível de risco é determinado por uma combinação da probabilidade de um evento indesejável e o impacto esperado desse evento",
          "isCorrect": true
        },
        {
          "option": "O nível de risco é a soma de todos os perigos potenciais de um sistema multiplicada pela soma de todas as perdas potenciais desse sistema",
          "isCorrect": false
        },
        {
          "option": "O nível de risco é estimado pela multiplicação da probabilidade de uma ameaça ao sistema pela chance de que a ameaça ocorra e resulte em dano financeiro",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: O nível de risco é determinado por uma combinação da probabilidade de um evento indesejável e o impacto esperado desse evento. \nEsta é a definição clássica de risco. \nEla reconhece que o nível de risco é uma função da probabilidade de ocorrência de um evento e da gravidade (impacto) desse evento."
    },
    {
      "id": 516,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes é o mais provável de ser um exemplo de risco de PRODUTO?",
      "options": [
        {
          "option": "As características de segurança esperadas podem não ser suportadas pela arquitetura do sistema",
          "isCorrect": true
        },
        {
          "option": "Os desenvolvedores podem não ter tempo para corrigir todos os defeitos encontrados pela equipe de teste",
          "isCorrect": false
        },
        {
          "option": "Os casos de teste podem não oferecer cobertura total dos requisitos especificados",
          "isCorrect": false
        },
        {
          "option": "O ambiente de teste de desempenho pode não estar pronto antes que o sistema esteja pronto para entrega",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: As características de segurança esperadas podem não ser suportadas pela arquitetura do sistema. \nEste é um exemplo de risco de produto. Refere-se a uma falha potencial no produto que afeta suas características e funcionalidades, como a segurança. \nA arquitetura do sistema pode não ser capaz de atender aos requisitos de segurança desejados, afetando diretamente a qualidade do produto final. \nErrado: Os desenvolvedores podem não ter tempo para corrigir todos os defeitos encontrados pela equipe de teste. Este é um risco relacionado ao processo de desenvolvimento e à gestão do projeto, não ao produto em si. \nRefere-se à falta de tempo para corrigir os defeitos, o que está mais relacionado ao gerenciamento de prazos e recursos. \nErrado: Os casos de teste podem não oferecer cobertura total dos requisitos especificados. Este é um risco relacionado à estratégia de teste e à qualidade da cobertura dos testes, mas não é diretamente um risco de produto. \nEle está mais relacionado ao processo de teste do que à falha do próprio produto. \nErrado: O ambiente de teste de desempenho pode não estar pronto antes que o sistema esteja pronto para entrega. Este é um risco relacionado ao ambiente de testes e à infraestrutura necessária para realizar os testes de desempenho, e não diretamente ao produto em si."
    },
    {
      "id": 517,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes é o MENOS provável que seja um exemplo de análise de risco do produto CORRETAMENTE influenciando os testes?",
      "options": [
        {
          "option": "O tempo necessário para carregar as páginas web é crucial para o sucesso do novo site, por isso foi empregado para este projeto um especialista em testes de desempenho",
          "isCorrect": false
        },
        {
          "option": "Os usuários tiveram problemas com a interface de usuário do sistema anterior, de modo que testes de usabilidade adicionais estão planejados para o sistema de substituição",
          "isCorrect": false
        },
        {
          "option": "O impacto potencial das falhas de segurança foi identificado como sendo particularmente alto, portanto os testes de segurança foram priorizados antes de algumas outras atividades de teste",
          "isCorrect": false
        },
        {
          "option": "Os testes constataram que a qualidade do módulo de rede é superior ao esperado, portanto não serão realizados testes adicionais nessa área",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Os testes constataram que a qualidade do módulo de rede é superior ao esperado, portanto não serão realizados testes adicionais nessa área. \nEste é o menos provável de ser um exemplo de análise de risco do produto corretamente influenciando os testes, pois a decisão de não realizar testes adicionais pode ignorar riscos potenciais não identificados. \nOs outros exemplos mostram como a análise de risco pode levar a decisões de teste que abordam diretamente os riscos identificados."
    },
    {
      "id": 518,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual destas informações é a mais útil para incluir no relatório de defeitos?",
      "options": [
        {
          "option": "2, 3, 4, 5",
          "isCorrect": false
        },
        {
          "option": "1, 4, 5, 6",
          "isCorrect": false
        },
        {
          "option": "3, 5, 6",
          "isCorrect": true
        },
        {
          "option": "1, 2, 6",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 3, 5, 6. \n(3) Detalhes do ambiente de teste: É essencial fornecer informações sobre o ambiente onde o defeito foi identificado, pois o defeito pode ser específico de um determinado ambiente (por exemplo, configurações de hardware, software ou rede). \n(5) Resultados reais: Mostrar o que aconteceu durante o teste (resultados reais) ajuda a ilustrar o comportamento do sistema em relação ao esperado, permitindo que os desenvolvedores reproduzam o problema de forma precisa. \n(6) Referência à especificação do caso de teste: Essa referência ajuda a contextualizar o defeito com base no caso de teste que foi executado e oferece uma correspondência direta com os requisitos especificados, facilitando a identificação do comportamento incorreto."
    },
    {
      "id": 519,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes aspectos seria um bom resumo para um relatório de defeitos para esta falha, um que capte tanto a essência da falha quanto seu impacto sobre as partes interessadas?",
      "options": [
        {
          "option": "Os desenvolvedores introduziram um grande defeito de disponibilidade que irá perturbar seriamente nossos clientes",
          "isCorrect": false
        },
        {
          "option": "O desempenho é lento e confiável sob carga",
          "isCorrect": false
        },
        {
          "option": "A típica transação de transferência de fundos resulta no término da sessão do cliente, com um atraso na disponibilidade quando se tenta reconectar",
          "isCorrect": true
        },
        {
          "option": "Os logs do servidor Web mostram erro 0x44AB27 ao executar o teste 07.005, que não é uma mensagem de erro esperada no sistema de arquivos /tmp",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: A típica transação de transferência de fundos resulta no término da sessão do cliente, com um atraso na disponibilidade quando se tenta reconectar. \nEssência da falha: A descrição especifica que o problema ocorre durante uma transação de transferência de fundos, o que ajuda a contextualizar onde a falha ocorre no processo. \nImpacto sobre as partes interessadas: Destaca que o defeito afeta a 'disponibilidade' (um aspecto crítico), já que os clientes não conseguem se reconectar por um período de três a cinco minutos, o que é problemático para um sistema bancário online onde a disponibilidade é essencial. \nClareza e especificidade: A frase descreve claramente o que acontece quando o defeito é acionado, de forma a ser facilmente compreendido pelas partes interessadas."
    },
    {
      "id": 520,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes é um possível cronograma de execução de testes que considera tanto as prioridades quanto as dependências?",
      "options": [
        {
          "option": "01.001, 01.002, 01.004, 01.003, 01.005",
          "isCorrect": true
        },
        {
          "option": "01.001, 01.002, 01.003, 01.005, 01.004",
          "isCorrect": false
        },
        {
          "option": "01.003, 01.004, 01.002, 01.001, 01.002",
          "isCorrect": false
        },
        {
          "option": "01.001, 01.002, 01.004, 01.005, 01.003",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 01.001, 01.002, 01.004, 01.003, 01.005. \nEste cronograma respeita as dependências e prioridades dos casos de teste. \n01.001 deve ser executado primeiro, pois 01.002 depende dele. \n01.004 e 01.003 têm a mesma prioridade, mas 01.004 pode ser executado logo após 01.002, enquanto 01.003 deve esperar a execução de 01.002. \nFinalmente, 01.005 pode ser executado após 01.002, respeitando sua prioridade."
    },
    {
      "id": 521,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes é uma métrica de teste comum frequentemente usada para monitorar a preparação e execução do teste BOTH?",
      "options": [
        {
          "option": "Taxas de localização/correção de defeitos",
          "isCorrect": false
        },
        {
          "option": "Status do caso de teste",
          "isCorrect": true
        },
        {
          "option": "Preparação do ambiente de teste",
          "isCorrect": false
        },
        {
          "option": "Custo estimado para encontrar o próximo defeito",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Status do caso de teste. \nA questão possui um erro de tradução, o BOTH significaria AMBOS, preparação e execução. \nQual é a métrica comum para monitorar AMBOS os testes de preparação e execução. \nA resposta mais apropriada, então, seria 'Status do caso de teste', porque isso geralmente envolve o acompanhamento tanto da preparação dos testes (como criação e revisão de casos de teste, configuração de ambientes) quanto da execução dos testes (execução dos testes, rastreamento dos resultados e defeitos encontrados)."
    },
    {
      "id": 522,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Quais dos dois fatores a seguir podem ser usados para determinar o nível de risco?",
      "options": [
        {
          "option": "Probabilidade e impacto",
          "isCorrect": true
        },
        {
          "option": "Declaração e decisão",
          "isCorrect": false
        },
        {
          "option": "Dinâmico e reativo",
          "isCorrect": false
        },
        {
          "option": "Testes e desenvolvimento",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Probabilidade e impacto. \nO nível de risco é determinado pela probabilidade de um evento indesejado ocorrer e pelo impacto que esse evento pode causar caso ocorra. \n🔹Probabilidade: Quão provável é que o risco se materialize? \n🔹Impacto: Se o risco acontecer, qual será a consequência para o sistema, os usuários ou o negócio? \nEssa abordagem é usada em análises de risco para priorizar testes e tomar decisões sobre mitigação de riscos no desenvolvimento de software."
    },
    {
      "id": 523,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você está trabalhando como gerente de projeto em um projeto de software bancário interno. Para evitar retrabalho e ciclos excessivos de encontrar/corrigir/retestar, o seguinte processo foi colocado em prática para resolver um defeito, uma vez encontrado no laboratório de testes: (a) O desenvolvedor designado encontra e conserta o defeito, depois cria uma construção experimental (b) Um desenvolvedor de um par revisa, testa e confirma a correção do defeito em sua área de trabalho (c) Um testador, geralmente o que encontrou o defeito, testa a confirmação da correção do defeito no ambiente de desenvolvimento (d) Uma vez por dia, um novo lançamento com todas as correções de defeitos confirmadas é instalado no ambiente de teste (e) O mesmo testador da etapa 3 de confirmação testa a correção do defeito no ambiente de teste. No entanto, um elevado número de defeitos que os testadores confirmaram como corrigidos no ambiente de desenvolvimento (na etapa 3) são de alguma forma reprovados nos testes de confirmação no ambiente de teste, com os resultados do retrabalho e do tempo de ciclo resultantes. Você tem a maior confiança em seus testadores, e descartou erros ou omissões na etapa 3. Qual dos seguintes aspectos é a parte mais provável do processo a ser verificada a seguir?",
      "options": [
        {
          "option": "A atividade dos desenvolvedores, que podem não estar corrigindo defeitos corretamente na etapa 1",
          "isCorrect": false
        },
        {
          "option": "Gerenciamento da configuração, que pode não estar mantendo a integridade do produto na etapa 4",
          "isCorrect": true
        },
        {
          "option": "A atividade dos desenvolvedores, que podem não estar testando adequadamente na etapa 2",
          "isCorrect": false
        },
        {
          "option": "A atividade dos testadores, que podem estar confusos sobre o que testar no passo 5",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Gerenciamento da configuração, que pode não estar mantendo a integridade do produto na etapa 4. \nSe os defeitos são confirmados como corrigidos no ambiente de desenvolvimento, mas reaparecem no ambiente de teste, isso pode indicar um problema no gerenciamento de configuração. \nPossíveis causas incluem: \n🔹O código corrigido não está sendo corretamente incluído no build diário. \n🔹Há um problema de versionamento, onde uma versão antiga ou incorreta do software está sendo implantada. \n🔹Dependências ou configurações específicas do ambiente de teste podem estar diferentes do ambiente de desenvolvimento. \nRevisar o processo de build, empacotamento e implantação pode ajudar a identificar e corrigir essa falha."
    },
    {
      "id": 524,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você está empenhado em planejar um esforço de teste para uma nova aplicação bancária móvel. Como parte da estimativa, você se encontra primeiro com os testadores propostos e outros sobre o projeto. A equipe está bem coordenada e já trabalhou em projetos similares. Para verificar a estimativa resultante, você então se refere a algumas médias do setor para esforço de teste e custos em projetos similares, publicadas por um consultor de renome. Qual declaração descreve com exatidão sua abordagem de estimativa?",
      "options": [
        {
          "option": "Primeiramente o planning poker, verificado por velocidade a partir de gráficos burndown",
          "isCorrect": false
        },
        {
          "option": "Principalmente uma abordagem baseada em especialistas, complementada com uma baseada em métricas",
          "isCorrect": true
        },
        {
          "option": "Principalmente uma abordagem baseada em métricas, complementada com uma baseada em especialistas",
          "isCorrect": false
        },
        {
          "option": "Uma abordagem simultânea baseada em especialistas e em métricas",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Principalmente uma abordagem baseada em especialistas, complementada com uma baseada em métricas. \nVocê começou a estimativa reunindo-se com testadores experientes e outros membros do projeto para discutir o esforço de teste. Isso caracteriza uma abordagem baseada em especialistas, pois se baseia no conhecimento e na experiência da equipe para estimar o esforço necessário. \nDepois, você verificou essa estimativa usando médias do setor publicadas por um consultor de renome. Isso caracteriza uma abordagem baseada em métricas, pois usa dados históricos e estatísticas de projetos semelhantes para validar a estimativa inicial."
    },
    {
      "id": 525,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Durante um projeto seguindo métodos ágeis, você encontra uma discrepância entre a interpretação do desenvolvedor de um critério de aceite e a interpretação do proprietário do produto, que você traz à tona durante uma sessão de refinamento da história do usuário. Qual dos seguintes aspectos é um benefício de independência de teste exemplificado por esta situação?",
      "options": [
        {
          "option": "Remoção precoce de um defeito",
          "isCorrect": false
        },
        {
          "option": "Desafiar as suposições das partes interessadas",
          "isCorrect": true
        },
        {
          "option": "Assumir a responsabilidade primária pela qualidade",
          "isCorrect": false
        },
        {
          "option": "Reconhecimento de diferentes tipos de falhas",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Desafiar as suposições das partes interessadas. \nA independência do testador permite que ele questione e desafie as interpretações e suposições das partes interessadas, como desenvolvedores e o proprietário do produto."
    },
    {
      "id": 526,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você está definindo o processo para realizar a análise de risco do produto como parte de cada iteração em um projeto Ágil. Qual dos seguintes é o lugar apropriado para documentar este processo em um plano de teste?",
      "options": [
        {
          "option": "Gerenciamento da configuração do objeto de teste",
          "isCorrect": false
        },
        {
          "option": "Abordagem de testes",
          "isCorrect": true
        },
        {
          "option": "Escopo dos testes",
          "isCorrect": false
        },
        {
          "option": "Métricas de testes",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Abordagem de testes. \nA análise de risco do produto faz parte da estratégia de testes e da forma como os testes serão conduzidos no projeto Ágil. \nO local adequado para documentar esse processo no plano de teste é a Abordagem de Testes, pois essa seção define métodos, técnicas e critérios que serão utilizados para identificar e lidar com riscos durante as iterações. \nAs demais opções não são apropriadas: \n🔹Gerenciamento da configuração do objeto de teste: Refere-se ao controle de versões e rastreabilidade dos artefatos de teste. \n🔹Escopo dos testes: Define os recursos, funcionalidades e áreas do sistema a serem testadas, mas não detalha processos de análise de risco. \n🔹Métricas de testes: Relaciona-se ao acompanhamento e medição dos testes, mas não descreve a abordagem para análise de risco."
    },
    {
      "id": 527,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Considere a seguinte lista de resultados indesejáveis que poderiam ocorrer em um esforço de desenvolvimento de aplicativos móveis: (a) Totais incorretos nos relatórios (b) Mudança nos critérios de aceite durante os testes de aceite (c) Os usuários acham o teclado macio muito difícil de usar com seu aplicativo (d) O sistema responde muito lentamente à entrada do usuário durante a entrada da cadeia de busca (e) Testadores não autorizados a relatar resultados de testes em reuniões diárias. Qual dos seguintes aspectos classifica adequadamente estes resultados como riscos de projeto e de produto?",
      "options": [
        {
          "option": "Riscos do produto: A, C, D; Riscos do projeto: B, E",
          "isCorrect": true
        },
        {
          "option": "Riscos do produto: A, C Riscos do projeto: B, D, E",
          "isCorrect": false
        },
        {
          "option": "Riscos do produto: A, C, D, E Riscos do projeto: B",
          "isCorrect": false
        },
        {
          "option": "Riscos do produto: B, E; Riscos de projeto: A, C, D",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Riscos do produto: A, C, D; Riscos do projeto: B, E. \nRiscos do produto: São riscos que afetam a qualidade do software entregue ao usuário. \n(a) Totais incorretos nos relatórios → Impacta a funcionalidade do produto. \n(c) Usuários acham o teclado difícil de usar → Impacta a usabilidade do produto. \n(d) Sistema responde lentamente → Impacta a performance do produto. \nRiscos do projeto: São riscos que afetam o processo de desenvolvimento. \n(b) Mudança nos critérios de aceite durante os testes de aceite → Impacta o planejamento e execução dos testes. \n(e) Testadores não podem relatar resultados nas reuniões → Impacta a comunicação e gestão do projeto."
    },
    {
      "id": 528,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Como os testadores agregam valor aos planejamentos de iteração e lançamento?",
      "options": [
        {
          "option": "Os testadores garantem o lançamento de software de alta qualidade por meio de um projeto de teste antecipado durante o planejamento do lançamento.",
          "isCorrect": false
        },
        {
          "option": "Os testadores se concentram apenas nos aspectos funcionais do sistema a ser testado.",
          "isCorrect": false
        },
        {
          "option": "Os testadores participam da identificação de riscos e da avaliação de riscos das histórias de usuários.",
          "isCorrect": true
        },
        {
          "option": "Os testadores determinam a prioridade das histórias de usuários a serem desenvolvidas.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Os testadores participam da identificação de riscos e da avaliação de riscos das histórias de usuários. \nA avaliação e validação de riscos acontecem tanto no planejamento da iteração quanto no planejamento do lançamento: \nNo planejamento da iteração, os testadores se envolvem na identificação de riscos específicos que podem afetar o sucesso da iteração. Isso pode incluir riscos relacionados a novas funcionalidades, problemas de integração, mudanças de requisitos ou qualquer outra área que possa impactar a entrega dentro do ciclo de desenvolvimento. \nNo planejamento do lançamento, os testadores também precisam considerar os riscos globais que podem afetar a qualidade geral do produto, como problemas críticos, falhas de desempenho ou questões de segurança. \nJustificativa para as demais alternativas: \nOs testadores garantem o lançamento de software de alta qualidade por meio de um projeto de teste antecipado durante o planejamento do lançamento: O planejamento do lançamento geralmente se refere à fase final do ciclo de desenvolvimento, enquanto o planejamento de iterações está mais relacionado ao desenvolvimento incremental de funcionalidades ao longo do projeto. \nOs testadores se concentram apenas nos aspectos funcionais do sistema a ser testado: Isso é uma visão limitada, pois os testadores não devem se concentrar apenas nos aspectos funcionais. Eles também analisam riscos, desempenho, segurança, entre outros aspectos não funcionais. \nOs testadores determinam a prioridade das histórias de usuários a serem desenvolvidas: A determinação da prioridade das histórias de usuários normalmente é uma função do produto e do gestor de produto. Os testadores podem fornecer informações valiosas para o planejamento, mas não são responsáveis por determinar as prioridades das histórias."
    },
    {
      "id": 529,
      "isMultipleChoice": true,
      "tag": ["Capítulo 5"],
      "question": "Quais das DUAS opções a seguir são os critérios de saída para testar um sistema?",
      "options": [
        {
          "option": "Os requisitos são traduzidos para o formato dado/quando/então.",
          "isCorrect": false
        },
        {
          "option": "A capacidade do testador de fazer login no objeto de teste.",
          "isCorrect": false
        },
        {
          "option": "Prontidão do ambiente de teste.",
          "isCorrect": false
        },
        {
          "option": "A densidade de defeitos estimada é atingida.",
          "isCorrect": true
        },
        {
          "option": "Os testes de regressão são automatizados.",
          "isCorrect": true
        }
      ],
      "comments": "As respostas corretas são: A densidade de defeitos estimada é atingida., Os testes de regressão são automatizados. \nA densidade de defeitos estimada é atingida: É importante que, ao final do ciclo de testes, o número de defeitos encontrados seja avaliado para garantir que o sistema atingiu um nível aceitável de qualidade, é um critério de saída. \nOs testes de regressão são automatizados: Poderia ser uma meta de final de um processo de teste, é um critério de saída. \nJustificativa para as demais alternativas: \nProntidão do ambiente de teste: É o que eu preciso para começar a testar, é um critério de entrada. \nOs requisitos são traduzidos para o formato dado/quando/então: Dado quando então é um jeito de formatar documentação, poderia ser um critério de entrada. \nA capacidade do testador de fazer login no objeto de teste: Saber as informações de usuário e senha seria uma entrada."
    },
    {
      "id": 530,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Sua equipe usa a técnica de estimativa de três pontos para estimar o esforço de teste de um novo recurso de alto risco. Foram feitas as seguintes estimativas: \nEstimativa mais otimista: 2 homens/hora \nEstimativa mais provável: 11 homens/hora \nEstimativa mais pessimista: 14 homens/hora \nQual é a estimativa final?",
      "options": [
        {
          "option": "14 homens/hora",
          "isCorrect": false
        },
        {
          "option": "9 homens/hora",
          "isCorrect": false
        },
        {
          "option": "10 homens/hora",
          "isCorrect": true
        },
        {
          "option": "11 homens/hora",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 10 homens/hora \nA estimativa de três pontos, também chamada de Monte Carlo funciona dessa forma: \nMultiplica o provável por 4 + otimista + pessimista e divide tudo por 6."
    },
    {
      "id": 531,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você está testando um aplicativo móvel que permite que os usuários encontrem um restaurante próximo com base no tipo de comida que desejam comer. Considere a seguinte lista de casos de teste, prioridades (ou seja, um número menor significa uma prioridade maior) e dependências:",
      "options": [
        {
          "option": "TC 001 - Selecione o tipo de alimento - Prioridade: 3 - Dependência: nenhum",
          "isCorrect": false
        },
        {
          "option": "TC 002 - Selecione o restaurante - Prioridade: 2 - Dependência: TC 001",
          "isCorrect": false
        },
        {
          "option": "TC 003 - Obter direção - Prioridade: 1 - Dependência: TC 002",
          "isCorrect": true
        },
        {
          "option": "TC 004 - Ligar para o restaurante - Prioridade: 2 - Dependência: TC 002",
          "isCorrect": false
        },
        {
          "option": "TC 005 - Fazer reserva - Prioridade: 3 - Dependência: TC 002",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: TC 003 - Obter direção - Prioridade: 1 - Dependência: TC 002. \nEste caso de teste tem a maior prioridade e depende da seleção do restaurante, que é coberta por TC 002. \nA execução dos casos de teste deve seguir a ordem de dependência e prioridade para garantir que as funcionalidades críticas sejam testadas primeiro."
    },
    {
      "id": 532,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Considere as seguintes categorias de teste (1-4) e os quadrantes de teste ágil (A-D).\ncategorias de teste:\n(1) Teste de usabilidade	\n(2) Teste de componentes	\n(3) Teste funcional	\n(4) Teste de confiabilidade	\nquadrantes de teste ágil:\n(A) Q1: voltado para a tecnologia, apoiando o desenvolvimento\n(B) Q2: voltado para o negócio, apoiando o desenvolvimento\n(C) Q3: voltado para o negócio, crítica do produto\n(D) Q4: voltado para a tecnologia, crítica do produto\nComo as seguintes categorias de teste são mapeadas nos quadrantes de teste ágil?",
      "options": [
        {
          "option": "1D, 2A, 3C, 4B",
          "isCorrect": false
        },
        {
          "option": "1C, 2B, 3D, 4A",
          "isCorrect": false
        },
        {
          "option": "1C, 2A, 3B, 4D",
          "isCorrect": true
        },
        {
          "option": "1D, 2B, 3C, 4A",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 1C, 2A, 3B, 4D. \nO teste de usabilidade (1) está relacionado ao quadrante Q3, voltado para o negócio e crítica do produto, pois foca na experiência do usuário. \nO teste de componentes (2) se encaixa no quadrante Q1, voltado para a tecnologia, apoiando o desenvolvimento, pois verifica componentes isolados. \nO teste funcional (3) está no quadrante Q2, voltado para o negócio, apoiando o desenvolvimento, pois verifica requisitos funcionais. \nO teste de confiabilidade (4) se encaixa no quadrante Q4, voltado para a tecnologia e crítica do produto, pois foca na estabilidade e confiabilidade do sistema."
    },
    {
      "id": 533,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Durante uma análise de risco, o seguinte risco foi identificado e avaliado: Risco: o tempo de resposta é muito longo para gerar um relatório. Probabilidade do risco: média. Impacto do risco: alto. Resposta ao risco: (1) uma equipe de teste independente realiza testes de performance durante o teste do sistema; (2) uma amostra selecionada de usuários finais realiza testes de aceite alfa e beta antes do lançamento. Que medida é proposta para ser tomada em resposta a esse risco analisado?",
      "options": [
        {
          "option": "Aceite de riscos",
          "isCorrect": false
        },
        {
          "option": "Mitigação de riscos.",
          "isCorrect": true
        },
        {
          "option": "Transferência de risco.",
          "isCorrect": false
        },
        {
          "option": "Plano de contingência.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Mitigação de riscos. \nA mitigação de riscos envolve ações para reduzir a probabilidade ou o impacto de um risco identificado. Neste caso, a resposta ao risco 'o tempo de resposta é muito longo para gerar um relatório' inclui ações como a realização de testes de performance para verificar a capacidade do sistema e permitir ajustes antes do lançamento (ação de mitigação). Além disso, envolver usuários finais em testes de aceite também ajuda a garantir que o sistema atenda aos requisitos de desempenho esperados, o que contribui para a redução do impacto de um possível problema de desempenho."
    },
    {
      "id": 534,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual ferramenta pode ser usada por uma equipe ágil para mostrar a quantidade de trabalho que foi concluída e a quantidade de trabalho total restante para uma determinada iteração?",
      "options": [
        {
          "option": "Gráfico de Burndown.",
          "isCorrect": true
        },
        {
          "option": "Relatório de conclusão do teste.",
          "isCorrect": false
        },
        {
          "option": "Relatório de defeitos.",
          "isCorrect": false
        },
        {
          "option": "Critérios de aceite.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Gráfico de Burndown. \nO Gráfico de Burndown é uma ferramenta amplamente utilizada em equipes ágeis para visualizar o progresso durante uma iteração (sprint). Ele mostra a quantidade de trabalho que foi concluída e a quantidade de trabalho restante ao longo do tempo, geralmente de forma diária. Esse gráfico ajuda a equipe a monitorar seu progresso e a identificar se está no caminho certo para completar todas as tarefas dentro do prazo da iteração."
    },
    {
      "id": 535,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você precisa atualizar um dos scripts de teste automatizados para que esteja de acordo com um novo requisito. Qual processo indica que você deve criar uma nova versão do script de teste no repositório de testes?",
      "options": [
        {
          "option": "Teste de Manutenção.",
          "isCorrect": false
        },
        {
          "option": "Gerenciamento de Rastreabilidade.",
          "isCorrect": false
        },
        {
          "option": "Gerenciamento de Configuração.",
          "isCorrect": true
        },
        {
          "option": "Engenharia de Requisitos.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Gerenciamento de Configuração. \nO Gerenciamento de Configuração envolve a prática de controlar as mudanças em documentos, scripts de teste, código-fonte e outros artefatos ao longo do ciclo de vida do projeto."
    },
    {
      "id": 536,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você recebeu o seguinte relatório de defeito dos desenvolvedores afirmando que a anomalia descrita neste relatório de teste não é reproduzível. O aplicativo desliga. 2022-May-03 - John Doe - Rejeitado. O aplicativo desliga depois de inserir 'Test input: $ä' no campo Nome na tela de criação de novo usuário. Tentei fazer logoff e fazer login com a conta test_admin01, o mesmo problema. Tentei com outras contas de administrador de teste, o mesmo problema. Nenhuma mensagem de erro recebida; o registro (veja anexo) contém notificação de erro fatal. Com base no caso de teste TC-1305, o aplicativo deve aceitar a entrada fornecida e criar o usuário. Corrija com alta prioridade, pois esse recurso está relacionado ao REQ-0012, que é um novo requisito crítico de negócio. Que informações essenciais estão FALTANDO nesse relatório de teste que teriam sido úteis para os desenvolvedores?",
      "options": [
        {
          "option": "Resultado esperado e resultado real.",
          "isCorrect": false
        },
        {
          "option": "Prioridade e gravidade.",
          "isCorrect": false
        },
        {
          "option": "Ambiente de teste e item de teste.",
          "isCorrect": true
        },
        {
          "option": "Referências e status do defeito.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Ambiente de teste e item de teste. \nItem de teste é informado mas o ambiente não está sendo informado."
    },
    {
      "id": 537,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você está testando uma aplicação web que permite aos usuários BUSCAR por produtos, VER detalhes do produto, ADICIONAR produtos a um carrinho de compras e fazer um PEDIDO. Você preparou os seguintes cinco casos de teste, que deseja executar de acordo com suas prioridades: \nTC1: BUSCAR produto A Prioridade: média \nTC2: VER detalhes do produto A Prioridade: baixa \nTC3: ADICIONAR produto B ao carrinho de compras Prioridade: média \nTC4: ADICIONAR produto C ao carrinho de compras Prioridade: alta \nTC5: fazer um PEDIDO Prioridade: alta \nVocê também identificou as seguintes dependências lógicas entre os casos de teste: \nA funcionalidade de BUSCA deve ser testada antes que a funcionalidade de VISUALIZAÇÃO possa ser testada, pois os detalhes do produto dependem da funcionalidade de busca. \nA funcionalidade de VISUALIZAÇÃO deve ser testada antes da funcionalidade de ADIÇÃO, pois adicionar produtos depende da disponibilidade de detalhes precisos do produto. \nA funcionalidade de ADIÇÃO deve ser testada antes da funcionalidade de PEDIDO, pois fazer um pedido depende da disponibilidade de informações precisas do carrinho de compras. \nQual caso de teste deve ser executado como o quarto?",
      "options": [
        {
          "option": "TC3",
          "isCorrect": true
        },
        {
          "option": "TC2",
          "isCorrect": false
        },
        {
          "option": "TC4",
          "isCorrect": false
        },
        {
          "option": "TC1",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: TC3. A ordem de dependência é: BUSCAR > VER > ADICIONAR > PEDIDO. Dessa forma a ordem de teste é: TC1, TC2, TC4, TC3, TC5."
    },
    {
      "id": 538,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "De acordo com o modelo de quadrantes de teste, qual das seguintes opções se enquadra no quadrante Q1 ('orientado à tecnologia' e 'suporte à equipe')?",
      "options": [
        {
          "option": "Teste de integração de componentes",
          "isCorrect": true
        },
        {
          "option": "Teste de usabilidade",
          "isCorrect": false
        },
        {
          "option": "Teste de aceitação do usuário",
          "isCorrect": false
        },
        {
          "option": "Teste funcional",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Teste de integração de componentes. O quadrante Q1 do modelo de quadrantes de teste ágil é orientado à tecnologia e foca no suporte à equipe de desenvolvimento. Ele inclui testes que ajudam a garantir a qualidade do código durante o desenvolvimento, como: Testes de unidade, Testes de componentes, Testes de integração de componentes. Esses testes são normalmente automatizados e têm o objetivo de validar a funcionalidade do código antes de passar para testes mais avançados. Por que as outras opções estão erradas? Teste de aceitação do usuário → Q3 ou Q2 (Voltado para o negócio) Teste funcional → Q2 ou Q3, dependendo do contexto (voltado para o negócio e suporte ao desenvolvimento ou crítica do produto) Teste de usabilidade → Q3 (Voltado para o negócio, crítica do produto)"
    },
    {
      "id": 539,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Dadas os seguintes riscos: \n1. Implementação de loop ineficaz causa respostas longas do sistema \n2. Consumidores alteram suas preferências \n3. Inundação da sala do servidor \n4. Pacientes acima de uma certa idade recebem relatórios imprecisos \nE as seguintes atividades de mitigação: \nA. Aceitação do risco \nB. Teste de desempenho \nC. Utilização da análise de valor limite como técnica de teste \nD. Transferência de risco \nQual das seguintes opções melhor corresponde aos riscos com as atividades de mitigação?",
      "options": [
        {
          "option": "1C, 2A, 3D, 4B",
          "isCorrect": false
        },
        {
          "option": "1C, 2D, 3A, 4B",
          "isCorrect": false
        },
        {
          "option": "1B, 2D, 3A, 4C",
          "isCorrect": false
        },
        {
          "option": "1B, 2A, 3D, 4C",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: 1B, 2A, 3D, 4C. Considerando cada um dos riscos listados e suas mitigações: Respostas longas do sistema (1) podem ser testadas no teste de desempenho (B) Mudanças nas preferências dos consumidores (2) geralmente estão fora de nosso controle, então geralmente aceitamos esse risco (A) Inundação da sala do servidor (3) pode causar perdas significativas, então devemos transferir o risco, por exemplo, comprando uma apólice de seguro (D) O fato de pacientes acima de uma certa idade receberem relatórios imprecisos (4) sugere um potencial problema de limite, que pode ser detectado efetivamente com técnicas como BVA (C)"
    },
    {
      "id": 542,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes é uma métrica de qualidade do produto?",
      "options": [
        {
          "option": "Número de defeitos encontrados",
          "isCorrect": false
        },
        {
          "option": "Tempo médio até a falha",
          "isCorrect": true
        },
        {
          "option": "Cobertura de requisitos",
          "isCorrect": false
        },
        {
          "option": "Percentual de detecção de defeitos",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Tempo médio até a falha\n\nO Tempo Médio até a Falha (MTTF - Mean Time to Failure) é uma métrica que indica a reliabilidade do produto, ou seja, o tempo médio que o sistema ou componente pode operar antes de falhar. Ela mede a durabilidade e a robustez do produto, sendo, portanto, uma métrica diretamente relacionada à qualidade do produto.\n\nVamos analisar as outras opções:\n\n🔹Número de defeitos encontrados: Essa é uma métrica de qualidade do processo de teste, pois mede quantos defeitos foram encontrados durante a execução dos testes, mas não diretamente a qualidade do produto em si.\n\n🔹Cobertura de requisitos: Também é uma métrica de qualidade do processo de teste. Ela indica o quanto os requisitos foram testados, mas não descreve a qualidade do produto final.\n\n🔹Percentual de detecção de defeitos: Essa métrica é relacionada ao processo de testes, pois mede a eficácia dos testes em detectar defeitos, mas não é uma medida direta da qualidade do produto final."
    },
    {
      "id": 543,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você é membro de uma equipe de teste localizada na América do Norte, desenvolvendo um produto para um cliente localizado na Europa. A equipe é ágil e segue a abordagem DevOps, usando um pipeline de integração/distribuição contínua.\n\nQual das seguintes é a maneira MENOS eficaz de comunicar o progresso do teste ao cliente?",
      "options": [
        {
          "option": "E-mail",
          "isCorrect": false
        },
        {
          "option": "Cara-a-cara",
          "isCorrect": true
        },
        {
          "option": "Painéis de controle",
          "isCorrect": false
        },
        {
          "option": "Videoconferência",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Cara-a-cara\n\nO melhor meio de comunicar o status do teste varia, dependendo das preocupações com o gerenciamento de testes, das estratégias de teste da organização, dos padrões normativos ou, no caso de equipes auto-organizadas (ver seção 1.5.2), da própria equipe. As opções incluem:\n\n🔹Comunicação verbal com membros da equipe e outros stakeholders;\n🔹Painéis (p. ex., painéis de CI/CD, painéis de tarefas e gráficos de burn-down);\n🔹Canais de comunicação eletrônica (p. ex., e-mail, bate-papo);\n🔹Documentação on-line;\n🔹Relatórios de testes formais (ver seção 5.3.2)."
    },
    {
      "id": 544,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes opções descreve MELHOR um exemplo de como o gerenciamento de configuração (CM) apoia os testes?",
      "options": [
        {
          "option": "Tendo um registro dos valores das entradas de teste, a ferramenta de CM pode executar os casos de teste para essas configurações e calcular a cobertura de teste",
          "isCorrect": false
        },
        {
          "option": "Tendo dados sobre a data de compra de uma licença de software, a ferramenta de CM automaticamente gera informações sobre o fato de que a licença do produto está chegando ao fim",
          "isCorrect": false
        },
        {
          "option": "Tendo o número da versão do ambiente, a ferramenta de CM pode recuperar os números de versão das bibliotecas, stubs e drivers usados nesse ambiente",
          "isCorrect": true
        },
        {
          "option": "Tendo o número da versão do caso de teste, a ferramenta de CM pode automaticamente gerar dados de teste para este caso de teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Tendo o número da versão do ambiente, a ferramenta de CM pode recuperar os números de versão das bibliotecas, stubs e drivers usados nesse ambiente."
    },
    {
      "id": 545,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Você está testando uma função de classificação que recebe um conjunto de números como entrada e retorna o mesmo conjunto de números classificados em ordem crescente. O registro da execução do teste é o seguinte.\n\nTC1 - Input:[3] output:[3]\nTC2 - Input:[3,11,6,5] output:[3,5,6,11]\nTC3 - Input:[8,7,3,7,1] output:[1,3,7,8]\nTC4 - Input:[-2,-2,-2,-3,-3] output:[-2,-3]\nTC5 - Input:[0,-2,0,3,4,4] output:[-2,0,3,4]\n\nQual das seguintes fornece a MELHOR descrição da falha que pode ser usada em um relatório de defeitos?",
      "options": [
        {
          "option": "O sistema falha ao classificar números negativos. Referência: TC4, TC5.",
          "isCorrect": false
        },
        {
          "option": "O sistema parece ignorar duplicatas durante a classificação. Referência: TC3, TC4, TC5.",
          "isCorrect": true
        },
        {
          "option": "O sistema falha ao classificar várias sequências de números. Referência: TC3, TC4, TC5.",
          "isCorrect": false
        },
        {
          "option": "TC3, TC4 e TC5 possuem defeitos (dados de entrada duplicados) e devem ser corrigidos.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: O sistema parece ignorar duplicatas durante a classificação. Referência: TC3, TC4, TC5."
    },
    {
      "id": 546,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes NÃO é um propósito de um plano de teste?",
      "options": [
        {
          "option": "Definir dados de teste e resultados esperados para testes de componente e testes de integração de componentes.",
          "isCorrect": true
        },
        {
          "option": "Definir como critério de saída do nível de teste de componente que \"cobertura de 100% de instruções e cobertura de 100% de ramificação devem ser alcançadas\".",
          "isCorrect": false
        },
        {
          "option": "Descrever quais campos o relatório de progresso do teste deve conter e qual deve ser o formato deste relatório.",
          "isCorrect": false
        },
        {
          "option": "Explicar por que os testes de integração do sistema serão excluídos dos testes, embora a estratégia de teste exija esse nível de teste.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Definir dados de teste e resultados esperados para testes de componente e testes de integração de componentes.\n\nA definição de dados de teste e resultados esperados normalmente está mais diretamente associada à execução do teste, não sendo um propósito primário do plano de teste.\n\nUm plano de teste descreve os objetivos, os recursos e os processos de um projeto de teste, demonstra que os testes seguirão a política e a estratégia de testes existentes (ou explica por que os testes se desviarão delas);\n\nO conteúdo típico de um plano de teste inclui:\n• Contexto do teste (p. ex., escopo, objetivos do teste, restrições, base do teste);\n• Premissas e restrições do projeto de teste;\n• Stakeholders (p. ex., funções, responsabilidades, relevância para os testes, necessidades de contratação e treinamento);\n• Comunicação (p. ex., formas e frequência de comunicação, modelos de documentação);\n• Registro de riscos (p. ex., riscos do produto, riscos do projeto);\n• Abordagem de teste (p. ex., níveis de teste, tipos de teste, técnicas de teste, produtos de teste, critérios de entrada e de saída, independência do teste, métricas a serem coletadas, requisitos de dados de teste, requisitos de ambiente de teste, desvios da política de teste organizacional e da estratégia de teste);\n• Orçamento e cronograma."
    },

    {
      "id": 549,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual é a relação entre os quadrantes de teste, os níveis de teste e os tipos de teste?",
      "options": [
        {
          "option": "Os quadrantes de teste representam combinações específicas de níveis de teste e tipos de teste, definindo sua localização no ciclo de vida do desenvolvimento de software.",
          "isCorrect": false
        },
        {
          "option": "Os quadrantes de teste descrevem o grau de granularidade dos tipos de teste individuais realizados em cada nível de teste.",
          "isCorrect": false
        },
        {
          "option": "Os quadrantes de teste atribuem os tipos de teste que podem ser realizados aos níveis de teste.",
          "isCorrect": false
        },
        {
          "option": "Os quadrantes de teste agrupam níveis de teste e tipos de teste com base em vários critérios, como o direcionamento a partes interessadas específicas.",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Os quadrantes de teste agrupam níveis de teste e tipos de teste com base em vários critérios, como o direcionamento a partes interessadas específicas."
    },
    {
      "id": 551,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes é um exemplo de como a análise de risco do produto pode influenciar a minuciosidade e o escopo dos testes?",
      "options": [
        {
          "option": "O monitoramento contínuo de riscos permite identificar riscos emergentes o mais cedo possível.",
          "isCorrect": false
        },
        {
          "option": "A identificação de riscos permite implementar atividades de mitigação de riscos e reduzir o nível de risco.",
          "isCorrect": false
        },
        {
          "option": "O nível de risco avaliado ajuda a selecionar o rigor dos testes.",
          "isCorrect": true
        },
        {
          "option": "A análise de riscos permite derivar itens de cobertura.",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: O nível de risco avaliado ajuda a selecionar o rigor dos testes.\n\nA análise de risco do produto ajuda a determinar onde se deve concentrar mais esforço e recursos nos testes, com base no risco potencial de falhas em diferentes áreas do sistema. Quanto maior o risco associado a uma funcionalidade ou componente, mais rigorosos e abrangentes os testes deverão ser para mitigar a probabilidade de falhas graves.\n\nErrado: O monitoramento contínuo de riscos permite identificar riscos emergentes o mais cedo possível: Embora o monitoramento contínuo seja importante para identificar novos riscos, essa ação se refere mais à gestão de riscos ao longo do projeto, e não diretamente à definição do rigor e escopo dos testes com base na avaliação de risco. A análise de risco influencia a estratégia de teste no início, antes da execução, para determinar onde concentrar os testes.\n\nErrado: A identificação de riscos permite implementar atividades de mitigação de riscos e reduzir o nível de risco: Esta afirmação fala sobre a mitigação dos riscos, mas não trata diretamente de como a análise de risco influencia a minuciosidade e o escopo dos testes. A mitigação pode envolver ações de design, alterações de processo ou ajustes de arquitetura, mas a forma como a mitigação afeta os testes é mais indireta. A análise de risco específica ajuda a definir onde os testes devem ser mais profundos (ou não).\n\nErrado: A análise de riscos permite derivar itens de cobertura: Embora a análise de riscos ajude a identificar áreas de risco, que podem ser cobradas nos testes, a derivação dos itens de cobertura não é uma consequência direta da análise de risco. A cobertura dos testes é mais uma questão de especificação e planejamento dos testes, que pode ser influenciada por outros fatores além dos riscos identificados."
    },
    {
      "id": 552,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual das seguintes atividades no processo de teste faz o MAIOR uso de relatórios de progresso de teste?",
      "options": [
        {
          "option": "Design de teste",
          "isCorrect": false
        },
        {
          "option": "Conclusão do teste",
          "isCorrect": true
        },
        {
          "option": "Análise de teste",
          "isCorrect": false
        },
        {
          "option": "Planejamento de teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Conclusão do teste\n\nA conclusão de teste é onde os relatórios de progresso têm maior impacto, pois eles fornecem o panorama final e os dados para a avaliação do sucesso dos testes."
    },
    {
      "id": 553,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Qual dos seguintes NÃO é um exemplo de como o gerenciamento de configuração suporta o teste?",
      "options": [
        {
          "option": "Todos os commits no repositório são identificados de forma única e controlados por versão",
          "isCorrect": false
        },
        {
          "option": "Todas as mudanças nos elementos do ambiente de teste são rastreadas",
          "isCorrect": false
        },
        {
          "option": "Todas as especificações de requisitos são referenciadas de forma inequívoca nos planos de teste",
          "isCorrect": false
        },
        {
          "option": "Todos os defeitos identificados têm um status atribuído",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Todos os defeitos identificados têm um status atribuído\n\nO gerenciamento de configuração não trata diretamente do status dos defeitos. O gerenciamento de defeitos pode estar relacionado a outras práticas, como o gerenciamento de incidentes ou a ferramenta de rastreamento de defeitos, mas não é um exemplo típico de como o gerenciamento de configuração apoia o teste.\n\nAnalisando as outras opções:\n\nTodos os commits no repositório são identificados de forma única e controlados por versão: Isso é uma prática de gerenciamento de configuração, onde o controle de versão dos códigos e commits garante que cada alteração seja rastreada adequadamente.\n\nTodas as mudanças nos elementos do ambiente de teste são rastreadas: Isso também faz parte do gerenciamento de configuração, que garante que qualquer alteração no ambiente de teste seja documentada e controlada.\n\nTodas as especificações de requisitos são referenciadas de forma inequívoca nos planos de teste: Isso é um exemplo de rastreamento de requisitos, que é parte do gerenciamento de configuração, garantindo que todos os requisitos sejam seguidos nos planos de teste."
    },
    {
      "id": 554,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "Considere o seguinte relatório de defeitos para um aplicativo de compras online:\n\nAplicação: WebShop v0.99\n\nDefeito: Botão de login não funciona\n\nPassos para Reproduzir:\n\nInicie o site\n\nClique no botão de login\n\nResultado Esperado:\n\nO usuário deve ser redirecionado para a página de login.\n\nResultado Real: O botão de login não responde quando clicado.\n\nSeveridade: Alta\n\nPrioridade: Urgente\n\nQual é a informação MAIS importante que está faltando neste relatório?",
      "options": [
        {
          "option": "Nome do testador e data do relatório",
          "isCorrect": false
        },
        {
          "option": "Elementos do ambiente de teste e seus números de versão",
          "isCorrect": true
        },
        {
          "option": "Identificação do objeto de teste",
          "isCorrect": false
        },
        {
          "option": "Impacto nos interesses das partes interessadas",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Elementos do ambiente de teste e seus números de versão\n\nA informação mais importante faltando neste relatório é o ambiente de teste no qual o defeito foi encontrado, incluindo os números de versão da aplicação, sistema operacional, navegador, etc. Isso é crucial porque um defeito pode se comportar de maneira diferente dependendo do ambiente em que o software está sendo testado. Se o ambiente de teste não for especificado, fica mais difícil reproduzir e corrigir o defeito."
    },
    {
      "id": 548,
      "isMultipleChoice": false,
      "tag": ["Capítulo 5"],
      "question": "O modelo da pirâmide de testes mostra:",
      "options": [
        {
          "option": "Que os testes podem ter diferentes prioridades",
          "isCorrect": false
        },
        {
          "option": "Que os testes podem ter granularidades diferentes",
          "isCorrect": true
        },
        {
          "option": "Que os testes podem requerer diferentes critérios de cobertura",
          "isCorrect": false
        },
        {
          "option": "Que os testes podem depender de outros testes",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Que os testes podem ter granularidades diferentes\n\nO modelo da pirâmide de testes ilustra a distribuição e a granularidade dos testes em um projeto de software. Na pirâmide, a base é composta por testes unitários, que são mais granulares e são executados em grande quantidade, enquanto a parte superior da pirâmide inclui testes de integração, funcionais e de interface, que são menos granulares e realizados em menor quantidade.\n\nA pirâmide sugere que a maior parte dos testes deve ser de baixo nível (unitários), pois são rápidos e fáceis de executar, enquanto os testes de níveis mais altos, como os testes de integração e de interface, são mais complexos e devem ser executados em menor quantidade."
    },
    //---Capitulo 6---
    
    
{
  "id": 601,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual dos seguintes é o MAIS provável que seja um benefício das ferramentas de execução de testes?",
  "options": [
    {
      "option": "É fácil criar testes de regressão",
      "isCorrect": false
    },
    {
      "option": "É fácil projetar testes para testes de segurança",
      "isCorrect": false
    },
    {
      "option": "É fácil executar testes de regressão",
      "isCorrect": true
    },
    {
      "option": "É fácil manter o controle de versão dos ativos de teste",
      "isCorrect": false
    }
  ],
  "comments": "A resposta correta é: É fácil executar testes de regressão\n\nAs ferramentas de execução de testes são projetadas para automatizar a execução de testes, o que torna mais fácil e eficiente executar testes de regressão repetidamente. Isso ajuda a garantir que as alterações no código não introduzam novos defeitos em funcionalidades já testadas."
},
{
  "id": 602,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual das seguintes ferramentas de teste é mais adequada para desenvolvedores do que para testadores?",
  "options": [
    {
      "option": "Ferramentas de teste de desempenho",
      "isCorrect": false
    },
    {
      "option": "Ferramentas de gerenciamento da configuração",
      "isCorrect": false
    },
    {
      "option": "Ferramentas de gerenciamento de requisitos",
      "isCorrect": false
    },
    {
      "option": "Ferramentas de gerenciamento de defeitos",
      "isCorrect": true
    }
  ],
  "comments": "A resposta correta é: Ferramentas de gerenciamento de defeitos\n\nAs ferramentas de gerenciamento de requisitos, gerenciamento da configuração e gerenciamento de defeitos são usadas tanto por desenvolvedores quanto por testadores. Ferramentas de teste de desempenho são mais voltadas para testadores. Gerenciamento de defeitos está relacionado a uma ferramenta de análise estática, uma ferramenta específica que checa o código para identificar erros."
},
{
  "id": 603,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Dadas as seguintes atividades de teste e ferramentas de teste:\n\n(1) Medição de desempenho e análise dinâmica\n(2) Execução de testes e registro\n(3) Gerenciamento de testes e tesouras\n(4) Projeto do teste\n\n(a) Ferramentas de cobertura de necessidades\n(b) Ferramentas de análise dinâmica\n(c) Ferramentas de preparação de dados de teste\n(d) Ferramentas de gerenciamento de defeitos\n\nQual dos seguintes MELHORES combina com as atividades e ferramentas?",
  "options": [
    {
      "option": "1 - A, 2 - B, 3 - D, 4 - C",
      "isCorrect": false
    },
    {
      "option": "1 - B, 2 - C, 3 - D, 4 - A",
      "isCorrect": false
    },
    {
      "option": "1 - B, 2 - A, 3 - D, 4 - C",
      "isCorrect": true
    },
    {
      "option": "1 - B, 2 - A, 3 - C, 4 - D",
      "isCorrect": false
    }
  ],
  "comments": "A resposta correta é: 1 - B, 2 - A, 3 - D, 4 - C\n\nMedição de desempenho e análise dinâmica → (B) Ferramentas de análise dinâmica\nFerramentas de análise dinâmica ajudam a identificar problemas como vazamento de memória, consumo excessivo de CPU e gargalos de desempenho durante a execução do software.\n\nExecução de testes e registro → (A) Ferramentas de cobertura de necessidades\nFerramentas de cobertura analisam quais partes do código foram exercitadas pelos testes, garantindo que os testes cobrem os requisitos adequadamente.\n\nGerenciamento de testes e tesouras → (D) Ferramentas de gerenciamento de defeitos\nFerramentas de gerenciamento de defeitos, como JIRA e Bugzilla, auxiliam no rastreamento, priorização e resolução de defeitos encontrados durante o processo de teste.\n\nProjeto do teste → (C) Ferramentas de preparação de dados de teste\nFerramentas de preparação de dados ajudam a criar, manipular e gerenciar conjuntos de dados para garantir que os testes sejam executados com dados apropriados e realistas."
},
{
  "id": 604,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual dos seguintes é o mais provável de ser usado como motivo para usar um projeto piloto para introduzir uma ferramenta em uma organização?",
  "options": [
    {
      "option": "A necessidade de avaliar se a ferramenta fornece a funcionalidade necessária e não duplica as ferramentas de teste existentes",
      "isCorrect": false
    },
    {
      "option": "A necessidade de avaliar como a ferramenta se ajusta aos processos e práticas existentes e determinar o que precisaria mudar",
      "isCorrect": true
    },
    {
      "option": "A necessidade de avaliar as habilidades de automação de testes e as necessidades de treinamento, mentoria e coaching dos testadores que irão utilizar a ferramenta",
      "isCorrect": false
    },
    {
      "option": "A necessidade de avaliar o fornecedor de ferramentas em termos de treinamento e outros tipos de apoio que eles fornecem",
      "isCorrect": false
    }
  ],
  "comments": "A resposta correta é: A necessidade de avaliar como a ferramenta se ajusta aos processos e práticas existentes e determinar o que precisaria mudar\n\nUm projeto piloto é usado para testar a introdução de uma ferramenta em um ambiente controlado e limitado antes de uma adoção mais ampla. Ele ajuda a entender:\n🔹Como a ferramenta se encaixa nos processos atuais da organização.\n🔹Quais mudanças serão necessárias nos fluxos de trabalho.\n🔹Se há desafios na integração com outras ferramentas e sistemas já em uso.\nPor que as outras opções estão incorretas?\n🔹Embora avaliar a funcionalidade da ferramenta seja importante, isso normalmente é feito antes do projeto piloto, na fase de seleção da ferramenta.\n🔹A necessidade de avaliar habilidades e necessidades de treinamento pode ser um objetivo secundário, mas o foco principal do piloto é a integração da ferramenta no processo.\n🔹Avaliar o fornecedor pode ser relevante, mas isso geralmente acontece na fase de negociação e aquisição, e não no projeto piloto."
},
{
  "id": 605,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Você acaba de concluir um projeto piloto para uma ferramenta de teste de regressão. Você entende muito melhor a ferramenta e adaptou seu processo de teste a ela. Você padronizou uma abordagem para usar a ferramenta e seus produtos de trabalho associados. Qual dos seguintes objetivos é um projeto piloto típico de automação de testes que ainda deve ser realizado?",
  "options": [
    {
      "option": "Veja como a ferramenta se ajustaria aos processos e práticas existentes",
      "isCorrect": false
    },
    {
      "option": "Decidir sobre formas padrão de usar, gerenciar, armazenar e manter a ferramenta e os ativos de teste",
      "isCorrect": false
    },
    {
      "option": "Saiba mais detalhes sobre a ferramenta",
      "isCorrect": false
    },
    {
      "option": "Avaliar se os benefícios serão alcançados a um custo razoável",
      "isCorrect": true
    }
  ],
  "comments": "A resposta correta é: Avaliar se os benefícios serão alcançados a um custo razoável\n\nO projeto piloto já ajudou a entender a ferramenta, adaptar processos e padronizar a abordagem de uso. No entanto, um objetivo típico que ainda precisa ser alcançado é avaliar se os benefícios compensam os custos. Isso envolve verificar:\n🔹Se a ferramenta realmente reduz o esforço manual.\n🔹Se os custos de aquisição, manutenção e treinamento justificam o investimento.\n🔹Se o tempo de execução dos testes automatizados compensa o desenvolvimento e manutenção dos scripts.\nPor que as outras opções estão incorretas?\n\"Veja como a ferramenta se ajustaria aos processos e práticas existentes\" → Já foi realizado durante o piloto, quando os processos foram adaptados.\n\"Decidir sobre formas padrão de usar, gerenciar, armazenar e manter a ferramenta e os ativos de teste\" → Também já foi feito ao padronizar a abordagem.\n\"Saiba mais detalhes sobre a ferramenta\" → Durante o piloto, a equipe já adquiriu conhecimento suficiente sobre o uso da ferramenta."
},
{
  "id": 606,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual das seguintes ferramentas é mais útil para relatar as métricas de teste?",
  "options": [
    {
      "option": "Ferramentas de teste baseadas em modelos",
      "isCorrect": false
    },
    {
      "option": "Ferramenta de gerenciamento de testes",
      "isCorrect": true
    },
    {
      "option": "Ferramenta de cobertura",
      "isCorrect": false
    },
    {
      "option": "Ferramenta de análise estática",
      "isCorrect": false
    }
  ],
  "comments": "A resposta correta é: Ferramenta de gerenciamento de testes\n\nFerramentas de gerenciamento de testes são as mais adequadas para relatar métricas de teste, pois elas:\n🔹Acompanham o progresso dos testes (casos executados, pass/fail, bloqueios).\n🔹Geram relatórios e dashboards com estatísticas sobre cobertura de testes, defeitos e execução.\n🔹Facilitam a rastreabilidade entre requisitos, casos de teste e defeitos.\nPor que as outras opções estão incorretas?\nFerramentas de teste baseadas em modelos → Usadas para gerar testes automaticamente a partir de modelos, mas não são especializadas em métricas.\nFerramentas de cobertura → Medem a cobertura do código (ex.: linhas executadas), mas não gerenciam métricas de progresso e qualidade.\nFerramentas de análise estática → Identificam problemas no código sem executá-lo, mas não geram métricas gerais de teste."
},
{
  "id": 607,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual atividade de teste é suportada por uma ferramenta de preparação de dados?",
  "options": [
    {
      "option": "Implementação e execução de testes.",
      "isCorrect": true
    },
    {
      "option": "Conclusão do teste.",
      "isCorrect": false
    },
    {
      "option": "Monitoramento e controle de testes.",
      "isCorrect": false
    },
    {
      "option": "Análise e projeto de testes.",
      "isCorrect": false
    }
  ],
  "comments": "A resposta correta é: Implementação e execução de testes.\n\nFerramentas de preparação de dados de teste são usadas para criar, modificar ou gerenciar dados que serão usados na execução dos testes. Elas suportam diretamente a fase de implementação e execução de testes, pois:\n🔹Permitem gerar dados realistas para cenários de teste.\n🔹Automatizam a criação e limpeza de dados antes e depois da execução dos testes.\n🔹Ajudam a evitar dependências externas ao preparar dados de teste isolados.\nPor que as outras opções estão incorretas?\nConclusão do teste → Relaciona-se a avaliação dos resultados e lições aprendidas, não à preparação de dados.\nMonitoramento e controle de testes → Diz respeito ao acompanhamento do progresso dos testes e métricas, não à geração de dados.\nAnálise e projeto de testes → Envolve a criação dos casos de teste e definição de critérios, mas a preparação de dados ocorre depois dessa fase."
},
{
  "id": 608,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual item identifica corretamente um risco potencial de realizar a automação de testes?",
  "options": [
    {
      "option": "Esforços suficientes para manter o material de teste podem não ser alocados adequadamente.",
      "isCorrect": true
    },
    {
      "option": "Ele pode introduzir regressões desconhecidas na produção.",
      "isCorrect": false
    },
    {
      "option": "As ferramentas de teste e o material de teste associado podem não ser suficientemente confiáveis.",
      "isCorrect": false
    },
    {
      "option": "Pode reduzir o tempo alocado para testes manuais.",
      "isCorrect": false
    }
  ],
  "comments": "A resposta correta é: Esforços suficientes para manter o material de teste podem não ser alocados adequadamente.\n\nUm dos riscos mais comuns na automação de testes é a falta de alocação adequada de esforços para manter os testes automatizados. Com o tempo, os testes podem:\n🔹Quebrar devido a mudanças no sistema.\n🔹Tornar-se obsoletos se não forem atualizados.\n🔹Exigir ajustes para garantir que continuem cobrindo os cenários corretos.\n🔹Se não houver planejamento e recursos suficientes para a manutenção dos testes, a automação pode acabar sendo mais um problema do que uma solução.\nPor que as outras opções estão incorretas?\nEle pode introduzir regressões desconhecidas na produção.\nA automação não causa regressões, mas pode não detectá-las se os testes não forem bem projetados.\nAs ferramentas de teste e o material de teste associado podem não ser suficientemente confiáveis.\nEsse risco pode ocorrer, mas geralmente ferramentas bem estabelecidas são confiáveis. O maior problema está na manutenção dos scripts e atualização dos testes.\nPode reduzir o tempo alocado para testes manuais.\nIsso geralmente é um benefício, pois permite que testadores foquem em testes exploratórios e complexos."
},
{
  "id": 609,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Dada às seguintes descrições:\n\n1. Suporte ao rastreamento de fluxo de trabalho\n2. Facilitar a comunicação\n3. Máquinas virtuais\n4. Suporte a revisões\n\nE as seguintes categorias de ferramentas de teste:\n\nA. Ferramentas de teste estático\nB. Ferramentas que suportam escalabilidade e padronização de implantação\nC. Ferramentas DevOps\nD. Ferramentas de colaboração\n\nQual das seguintes combinações corresponde MELHOR às descrições e categorias?",
  "options": [
    {
      "option": "1D, 2C, 3A, 4B",
      "isCorrect": false
    },
    {
      "option": "1B, 2D, 3C, 4A",
      "isCorrect": false
    },
    {
      "option": "1C, 2D, 3B, 4A",
      "isCorrect": true
    },
    {
      "option": "1A, 2B, 3C, 4D",
      "isCorrect": false
    }
  ],
  "comments": "A resposta correta é: 1C, 2D, 3B, 4A\n\nSuporte ao rastreamento de fluxo de trabalho → (C) Ferramentas DevOps\nFerramentas DevOps, como Jenkins, GitLab CI/CD e Azure DevOps, ajudam no rastreamento de fluxo de trabalho ao gerenciar pipelines de CI/CD e automação de tarefas.\n\nFacilitar a comunicação → (D) Ferramentas de colaboração\nFerramentas como Slack, Microsoft Teams, Jira e Confluence são usadas para facilitar a comunicação entre equipes, permitindo discussões, compartilhamento de informações e documentação.\n\nMáquinas virtuais → (B) Ferramentas que suportam escalabilidade e padronização de implantação\nFerramentas como Docker, Kubernetes e VMware permitem a criação e gerenciamento de máquinas virtuais e contêineres, ajudando na escalabilidade e padronização.\n\nSuporte a revisões → (A) Ferramentas de teste estático\nFerramentas de análise estática, como SonarQube, ESLint e Checkstyle, ajudam na revisão de código, detectando defeitos antes da execução do software."
},
{
  "id": 610,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual dos seguintes é MAIS provável de ser um benefício da automação de testes?",
  "options": [
    {
      "option": "Gera casos de teste a partir de uma análise do código do programa",
      "isCorrect": false
    },
    {
      "option": "Remove a necessidade de pensamento crítico ao analisar os resultados dos testes",
      "isCorrect": false
    },
    {
      "option": "Compartilha a responsabilidade pelos testes com o fornecedor da ferramenta",
      "isCorrect": false
    },
    {
      "option": "Fornece medidas de cobertura que são muito complicadas para os humanos derivarem",
      "isCorrect": true
    }
  ],
  "comments": "A resposta correta é: Fornece medidas de cobertura que são muito complicadas para os humanos derivarem.\n\nFerramentas de automação podem calcular métricas complexas, como cobertura de código (linhas, ramos, caminhos, mutação, etc.), que seriam difíceis de medir manualmente.\n\nExplicação das alternativas:\nGera casos de teste a partir de uma análise do código do programa → ERRADO\nNão está correto. Nem os testadores nem as ferramentas podem gerar casos de teste simplesmente a partir de uma análise do código do programa, pois o código é a implementação e não fornece informações sobre os resultados esperados, que precisarão vir de outra parte da base de teste, como a especificação de design.\n\nRemove a necessidade de pensamento crítico ao analisar os resultados dos testes → ERRADO\nA automação não substitui o pensamento crítico dos testadores. Ainda é necessário analisar os resultados, interpretar falhas e garantir que os testes são relevantes.\n\nCompartilha a responsabilidade pelos testes com o fornecedor da ferramenta → ERRADO\nO fornecedor da ferramenta fornece suporte, mas a responsabilidade pelos testes continua sendo da equipe."
},
{
  "id": 611,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Ferramentas de qual das seguintes categorias ajudam na organização de casos de teste, defeitos detectados e gerenciamento de configuração?",
  "options": [
    {
      "option": "Ferramentas de execução de teste e cobertura",
      "isCorrect": false
    },
    {
      "option": "Ferramentas de design e implementação de teste",
      "isCorrect": false
    },
    {
      "option": "Ferramentas de gerenciamento de defeitos",
      "isCorrect": false
    },
    {
      "option": "Ferramentas de gerenciamento de teste",
      "isCorrect": true
    }
  ],
  "comments": "A resposta correta é: Ferramentas de gerenciamento de teste.\n\nFerramentas de gerenciamento de teste são projetadas para organizar todos os aspectos do processo de teste, incluindo casos de teste, defeitos detectados, e gerenciamento de configuração. Elas ajudam a planejar, rastrear e organizar as atividades de teste.\n\nFerramentas de execução de teste e cobertura → ERRADO\nFerramentas de execução de teste e cobertura são usadas para automatizar e medir a execução de testes, mas não focam no gerenciamento de casos de teste, defeitos ou configuração.\n\nFerramentas de design e implementação de teste → ERRADO\nFerramentas de design e implementação de teste são usadas para criar, implementar e até executar os testes, mas não se concentram na organização de casos de teste ou no gerenciamento de defeitos e configurações.\n\nFerramentas de gerenciamento de defeitos → ERRADO\nFerramentas de gerenciamento de defeitos são úteis para rastrear e controlar defeitos detectados, mas não gerenciam casos de teste ou a configuração como um todo."
},
{
  "id": 612,
  "isMultipleChoice": false,
  "tag": ["Capítulo 6"],
  "question": "Qual dos seguintes é MAIS provável de ser um benefício da automação de testes?",
  "options": [
    {
      "option": "A capacidade de gerar casos de teste sem acesso à base de teste",
      "isCorrect": false
    },
    {
      "option": "O aumento da cobertura por meio de avaliação mais objetiva",
      "isCorrect": false
    },
    {
      "option": "O aumento do tempo de execução do teste com maior capacidade de processamento",
      "isCorrect": false
    },
    {
      "option": "A prevenção de erros humanos por meio de maior consistência e repetibilidade",
      "isCorrect": true
    }
  ],
  "comments": "A resposta correta é: A prevenção de erros humanos por meio de maior consistência e repetibilidade.\n\nUm dos principais benefícios da automação de testes é a redução dos erros humanos, já que os testes automatizados são executados de maneira consistente e repetitiva, garantindo que os testes sejam realizados da mesma forma todas as vezes, sem variações causadas por falhas humanas.\n\nA capacidade de gerar casos de teste sem acesso à base de teste → ERRADO\nA automação de testes pode ajudar na execução de testes repetitivos, mas não gera casos de teste sem a base de teste. Os casos de teste precisam ser projetados ou criados antes de serem automatizados.\n\nO aumento da cobertura por meio de avaliação mais objetiva → ERRADO\nA automação de testes pode aumentar a cobertura de testes ao permitir a execução de uma maior quantidade de testes, mas não necessariamente leva a uma avaliação mais objetiva. A objetividade depende de como os testes são projetados.\n\nO aumento do tempo de execução do teste com maior capacidade de processamento → ERRADO\nEmbora a automação de testes possa melhorar a eficiência, ela não aumenta diretamente o tempo de execução. Na verdade, a automação pode reduzir o tempo de execução, especialmente quando se trata de testes repetitivos."
},

    //---Perguntas Variadas----
    {
      "id": 1,
      "isMultipleChoice": false,
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "id": 4,
      "isMultipleChoice": false,
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "id": 17,
      "isMultipleChoice": false,
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
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
      "tag": ["Variado"],
      "question": "Quais das seguintes ferramentas seriam utilizadas na automação do teste de regressão?",
      "options": [
        { "option": "Uma verificadora de dados", "isCorrect": false },
        { "option": "Uma verificadora de limites", "isCorrect": false },
        { "option": "Ferramenta de captura e reprodução", "isCorrect": true },
        { "option": "Comparadora de resultados (outputs)", "isCorrect": false }
      ],
      "comments": "Ferramentas de captura e reprodução são amplamente usadas em testes de regressão para automatizar a execução de casos de teste e comparar os resultados com execuções anteriores."
    },
    //Perguntas com imagens
    {
      "id": 410,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Qual das seguintes afirmações sobre o diagrama de transição de estado dado e tabela de casos de teste é VERDADEIRA?",
      "imagem": "Q410",
      "options": [
        {
          "option": "Os casos de teste em questão representam pares de transições no diagrama de transição estatal",
          "isCorrect": false
        },
        {
          "option": "Os casos de teste em questão cobrem transições válidas e inválidas no diagrama de transição estatal",
          "isCorrect": false
        },
        {
          "option": "Os casos de teste em questão representam todas as transições válidas possíveis no diagrama de transição estatal",
          "isCorrect": true
        },
        {
          "option": "Os casos de teste em questão representam algumas das transições válidas no diagrama de transição estatal",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: Os casos de teste em questão representam todas as transições válidas possíveis no diagrama de transição estatal.\nComo se trata de um sistema simples, todas as transições possíveis que poderiam existir estão sendo representadas, normalmente um diagrama não representa transições inválidas."
    },

    {
      "id": 418,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Qual das seguintes sequências de transições proporciona o mais alto nível de cobertura de transição para o modelo?",
      "imagem": "Q418",
      "options": [
        {
          "option": "WAIT → TRICKLE → WAIT → OFF → WAIT → TRICKLE → CHARGE → LOW → CHARGE",
          "isCorrect": false
        },
        {
          "option": "OFF → WAIT → OFF → WAIT → TRICKLE → CHARGE → HIGH → CHARGE → LOW",
          "isCorrect": false
        },
        {
          "option": "WAIT → TRICKLE → CHARGE → HIGH → CHARGE → TRICKLE → WAIT → OFF → WAIT",
          "isCorrect": true
        },
        {
          "option": "HIGH → CHARGE → LOW → CHARGE → TRICKLE → WAIT → TRICKLE → WAIT → TRICKLE",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: WAIT → TRICKLE → CHARGE → HIGH → CHARGE → TRICKLE → WAIT → OFF → WAIT\nÉ a única opção onde não existe repetição de transições."
    },

    {
      "id": 431,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Considere o seguinte diagrama de transição de estado apenas para uma bomba de gasolina sem supervisão, com cartão de crédito: Suponha que você queira desenvolver o número mínimo de testes para cobrir cada transição no diagrama de transição de estado. Suponha ainda que cada teste deve começar no estado inicial, esperando pelo cliente, e cada teste termina quando uma transição chega ao estado inicial. Quantos testes você precisa?",
      "imagem": "Q431",
      "options": [
        {
          "option": "4 testes",
          "isCorrect": true
        },
        {
          "option": "5 testes",
          "isCorrect": false
        },
        {
          "option": "7 testes",
          "isCorrect": false
        },
        {
          "option": "1 teste",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 4\nUma maneira de descobrir o número mínimo de testes para cobrir cada transição, que funciona na maioria das vezes, é contar quantas transições estão retornando ao ponto inicial. No caso da imagem, 4 transições retornam para o início."
    },

    {
      "id": 436,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Você testa um sistema cujo ciclo de vida é modelado pelo diagrama de transição de estado mostrado abaixo. O sistema começa no estado INIT e termina sua operação no estado OFF. Qual é o número MÍNIMO de casos de teste para obter uma cobertura de transições válida?",
      "imagem": "Q436",
      "options": [
        {
          "option": "2",
          "isCorrect": false
        },
        {
          "option": "7",
          "isCorrect": false
        },
        {
          "option": "4",
          "isCorrect": false
        },
        {
          "option": "3",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: 3\nPara cobrir todas as transições válidas no diagrama de transição de estado, são necessários 3 casos de teste, garantindo que cada transição seja exercitada pelo menos uma vez."
    },
    {
      "id": 449,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Um sistema de armazenamento pode armazenar até três elementos e é modelado pelo seguinte diagrama de transição de estados. A variável N representa o número de elementos atualmente armazenados.\n Qual dos seguintes casos de teste, representados como sequências de eventos, alcança o maior nível de cobertura de transições válidas?",
      "imagem": "Q449",
      "options": [
        {
          "option": "Add, Add, Add, Remove, Add",
          "isCorrect": false
        },
        {
          "option": "Add, Add, Add, Add, Remove, Remove",
          "isCorrect": false
        },
        {
          "option": "Add, Remove, Add, Add, Add",
          "isCorrect": false
        },
        {
          "option": "Add, Add, Add, Remove, Remove",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: Add, Add, Add, Remove, Remove\nEsta sequência cobre todas as transições válidas sem repetir transições desnecessárias, garantindo a cobertura máxima de transições."
    },

    {
      "id": 460,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Você está projetando casos de teste com base no seguinte diagrama de transição de estados: Qual é o número MÍNIMO de casos de teste necessários para alcançar uma cobertura de transições válidas de 100%?",
      "imagem": "Q460",
      "options": [
        {
          "option": "3",
          "isCorrect": true
        },
        {
          "option": "2",
          "isCorrect": false
        },
        {
          "option": "5",
          "isCorrect": false
        },
        {
          "option": "6",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 3\nPara alcançar 100% de cobertura de transições válidas, é necessário projetar casos de teste que cubram todas as transições possíveis no diagrama de estados. Neste caso, três casos de teste são suficientes para cobrir todas as transições sem repetições desnecessárias."
    },

    {
      "id": 461,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Você deseja aplicar teste de branch ao código representado pelo seguinte grafo de fluxo de controle. Quantos itens de cobertura você precisa testar?",
      "imagem": "Q461",
      "options": [
        {
          "option": "2",
          "isCorrect": true
        },
        {
          "option": "4",
          "isCorrect": false
        },
        {
          "option": "8",
          "isCorrect": false
        },
        {
          "option": "7",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: 2\nO teste de branch requer que cada decisão no código seja avaliada em ambas as direções possíveis (verdadeira e falsa). Neste caso, dois itens de cobertura são suficientes para garantir que todas as ramificações do grafo de fluxo de controle sejam testadas."
    },

    {
      "id": 508,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Como gerente de testes, você é responsável por testar as seguintes partes dos requisitos: \n • R1 - Anomalias de processo \n• R2 - Sincronização \n• R3 - Aprovação \n• R4 - Solução de problemas \n• R5 - Dados financeiros \n• R6 - Dados do diagrama \n• R7 - Mudanças no perfil do usuário \n Qual das seguintes opções estrutura o cronograma de execução de testes de acordo com as dependências de requisitos?",
      "imagem": "Q508",
      "options": [
        {
          "option": "R1 → R3 → R4 → R7 → R2 → R5 → R6",
          "isCorrect": false
        },
        {
          "option": "R1 → R3 → R2 → R4 → R7 → R5 → R6",
          "isCorrect": false
        },
        {
          "option": "R1 → R2 → R5 → R6 → R3 → R4 → R7",
          "isCorrect": false
        },
        {
          "option": "R1 → R3 → R2 → R5 → R6 → R4 → R7",
          "isCorrect": true
        }
      ],
      "comments": "A resposta correta é: R1 → R3 → R2 → R5 → R6 → R4 → R7. \nO correto é eliminar as dependências antes de seguir com o próximo teste."
    },
    {
      "id": 547,
      "isMultipleChoice": false,
      "tag": ["Questões com imagens"],
      "question": "Qual caso de teste deve ser executado em sexto lugar?",
      "imagem": "Q547",
      "options": [
        {
          "option": "TC 3",
          "isCorrect": true
        },
        {
          "option": "TC 5",
          "isCorrect": false
        },
        {
          "option": "TC 6",
          "isCorrect": false
        },
        {
          "option": "TC 2",
          "isCorrect": false
        }
      ],
      "comments": "A resposta correta é: TC 3\n\nA caso tenha um teste prioritário em um encadeamento de testes esse encadeamento se torna prioritário."
    },
  ]
};
