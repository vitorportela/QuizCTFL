const quizData = {
  "questions": [
    {
      "id": 1,
      "isMultipleChoice": false,
      "question": "Qual serviço AWS é usado para armazenar objetos, como arquivos e imagens?",
      "options": [
        { "option": "Amazon S3", "isCorrect": true },
        { "option": "Amazon EC2", "isCorrect": false },
        { "option": "Amazon RDS", "isCorrect": false },
        { "option": "AWS Lambda", "isCorrect": false }
      ],
      comments: "O serviço AWS usado para armazenar objetos, como arquivos e imagens é o Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos altamente escalável e durável, ideal para armazenar e acessar grandes quantidades de dados, como arquivos, imagens, vídeos e backups.Amazon RDS (Relational Database Service) é usado para bancos de dados relacionais.Amazon EC2 (Elastic Compute Cloud) fornece capacidade computacional em instâncias de máquinas virtuais.AWS Lambda executa código sem a necessidade de provisionar servidores, mas não é um serviço de armazenamento."
    },
    {
      "id": 2,
      "isMultipleChoice": true,
      "question": "Qual é o modelo de responsabilidade compartilhada da AWS?",
      "options": [
        { "option": "O cliente é responsável pela segurança da nuvem.", "isCorrect": false },
        { "option": "A AWS é responsável pela segurança da nuvem.", "isCorrect": true },
        { "option": "O cliente é responsável pela segurança na nuvem.", "isCorrect": true },
        { "option": "A AWS é responsável pela segurança na nuvem.", "isCorrect": false }
      ],
      comments: "● Responsabilidade da AWS: “segurança da nuvem”: a AWS é responsável por proteger a infraestrutura que executa todos os serviços oferecidos na Nuvem AWS, essa infraestrutura é composta por hardware, software, redes e instalações que executam os Serviços de nuvem AWS.● Responsabilidade do cliente: “segurança na nuvem”: a responsabilidade do cliente será determinada pelos Serviços de nuvem AWS selecionados por ele, isso determina a quantidade de operações de configuração que o cliente deverá executar como parte de suas responsabilidades de segurança.O cliente é responsável por gerenciar seus dados (o que inclui opções de criptografia), classificando os ativos e usando as ferramentas de IAM para aplicar as permissões apropriadas."
    },
    {
      "id": 3,
      "isMultipleChoice": true,
      "question": "Quais das opções abaixo são princípios do AWS Well-Architected Framework?",
      "options": [
        { "option": "Confiabilidade", "isCorrect": true },
        { "option": "Excelência operacional", "isCorrect": true },
        { "option": "Segurança", "isCorrect": true },
        { "option": "Desempenho de baixo custo", "isCorrect": false },
        { "option": "Acessibilidade", "isCorrect": false }
      ],
      comments: "O AWS Well-Architected Framework descreve os principais conceitos, princípios de projeto e práticas recomendadas para projetar e executar workloads na nuvem.-Excelência operacional.-Segurança.-Confiabilidade.-Eficiência de performance.-Otimização de custos.-Sustentabilidade."
    },
    {
      "id": 4,
      "isMultipleChoice": false,
      "question": "Qual serviço AWS é ideal para gerenciar bancos de dados relacionais?",
      "options": [
        { "option": "Amazon RDS", "isCorrect": true },
        { "option": "Amazon DynamoDB", "isCorrect": false },
        { "option": "AWS Glue", "isCorrect": false },
        { "option": "Amazon S3", "isCorrect": false }
      ],
      comments: "O serviço AWS ideal para gerenciar bancos de dados relacionais é o Amazon RDS (Relational Database Service). Ele oferece suporte a vários sistemas de gerenciamento de banco de dados (SGBDs) como MySQL, PostgreSQL, Oracle, SQL Server e MariaDB, facilitando a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem.Amazon S3 é usado para armazenamento de objetos, não para bancos de dados relacionais.AWS Glue é um serviço de ETL (Extração, Transformação e Carga) para integrar dados, mas não é focado em gerenciamento de bancos de dados relacionais.Amazon DynamoDB é um banco de dados NoSQL, não relacional."
    },
    {
      "id": 5,
      "isMultipleChoice": false,
      "question": "Qual ferramenta da AWS é usada para monitorar recursos e aplicações?",
      "options": [
        { "option": "Amazon CloudWatch", "isCorrect": true },
        { "option": "AWS Config", "isCorrect": false },
        { "option": "Amazon Artifact", "isCorrect": false },
        { "option": "AWS RedShift", "isCorrect": false }
      ],
      comments: "A ferramenta da AWS usada para monitorar recursos e aplicações é o Amazon CloudWatch. Ela coleta e monitora métricas, logs e eventos, permitindo a criação de alarmes e automação para responder a mudanças em recursos e aplicações.AWS RedShift: É um serviço de data warehouse para análise de dados em grande escala, não é uma ferramenta de monitoramento.AWS Config: Monitora a configuração de recursos, mas não é especificamente para monitorar desempenho e métricas.AWS Artifact: Fornece acesso a relatórios de conformidade e segurança, não é uma ferramenta de monitoramento de recursos."
    },
    {
      "id": 6,
      "isMultipleChoice": false,
      "question": "Qual é o serviço de computação sem servidor da AWS?",
      "options": [
        { "option": "AWS Lambda", "isCorrect": true },
        { "option": "Amazon EC2", "isCorrect": false },
        { "option": "Amazon ECS", "isCorrect": false },
        { "option": "AWS Outposts", "isCorrect": false }
      ],
      comments: "AWS Lambda: Serviço sem servidor que permite executar código sem precisar gerenciar servidores, automaticamente escalando conforme a demanda, ideal para tarefas event-driven, como processamento de dados e automações.Amazon EC2 (Elastic Compute Cloud): Serviço de computação em nuvem que fornece instâncias de servidores virtuais (máquinas virtuais) para rodar aplicativos e serviços, com controle total sobre o ambiente de computação.Amazon ECS (Elastic Container Service): Serviço de orquestração de contêineres que facilita a execução, gerenciamento e escalabilidade de contêineres Docker na AWS, usando clusters para distribuir a carga de trabalho.AWS Outposts: Serviço que estende a infraestrutura da AWS para dentro de seu próprio data center, oferecendo uma experiência híbrida com recursos de computação e armazenamento da AWS em um ambiente on-premises."
    },
    {
      "id": 7,
      "isMultipleChoice": true,
      "question": "Quais benefícios a computação em nuvem oferece?",
      "options": [
        { "option": "Elasticidade", "isCorrect": true },
        { "option": "Pagamento conforme o uso", "isCorrect": true },
        { "option": "Investimento inicial elevado", "isCorrect": false },
        { "option": "Disponibilidade global", "isCorrect": true }
      ],
      comments: "Disponibilidade global: Permite acessar serviços e recursos de qualquer lugar do mundo, com alta disponibilidade.Elasticidade: Ajusta automaticamente os recursos para atender à demanda, aumentando ou reduzindo conforme necessário.Pagamento conforme o uso: Cobra apenas pelos recursos efetivamente utilizados, eliminando desperdícios.Investimento inicial elevado não é um benefício; pelo contrário, a computação em nuvem reduz a necessidade de grandes investimentos iniciais, substituindo-os por custos operacionais escaláveis."
    },
    {
      "id": 8,
      "isMultipleChoice": false,
      "question": "Qual serviço AWS facilita a migração de bancos de dados para a nuvem?",
      "options": [
        { "option": "AWS DMS", "isCorrect": true },
        { "option": "Amazon RDS", "isCorrect": false },
        { "option": "AWS Glue", "isCorrect": false },
        { "option": "AWS Snowball", "isCorrect": false }
      ],
      comments: "Amazon RDS (Relacional Database Service): Serviço gerenciado que facilita a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem.AWS Snowball: Dispositivo físico para transferir grandes volumes de dados para dentro ou fora da AWS de forma segura e econômica.AWS Glue: Serviço de ETL (Extração, Transformação e Carga) totalmente gerenciado que facilita a preparação e integração de dados para análises.AWS DMS (Database Migration Service): Ferramenta para migrar bancos de dados para a AWS de forma rápida e confiável, com tempo de inatividade mínimo."
    },
    {
      "id": 9,
      "isMultipleChoice": true,
      "question": "Quais serviços podem ser usados para entrega de conteúdo globalmente?",
      "options": [
        { "option": "Amazon CloudFront", "isCorrect": true },
        { "option": "AWS Global Accelerator", "isCorrect": true },
        { "option": "AWS Elastic Beanstalk", "isCorrect": false },
        { "option": "Amazon S3", "isCorrect": false }
      ],
      comments: "Amazon CloudFront: Rede de distribuição de conteúdo (CDN) especializada em entregar conteúdo estático e dinâmico com baixa latência e alta velocidade.AWS Global Accelerator: Otimiza a entrega de conteúdo globalmente, melhorando o desempenho de aplicativos e roteando tráfego pela rede global da AWS.Amazon S3 armazena o conteúdo, mas sozinho não é otimizado para entrega global (pode ser usado em conjunto com o CloudFront para isso).AWS Elastic Beanstalk é um serviço usado para implantação e escalabilidade de aplicações e serviços Web, gerencia automaticamente a implantação, desde o provisionamento de capacidade, balanceamento de carga e escalabilidade automática até o monitoramento da integridade de aplicações."
    },
    {
      "id": 10,
      "isMultipleChoice": false,
      "question": "Qual ferramenta da AWS ajuda a estimar custos de serviços?",
      "options": [
        { "option": "AWS Pricing Calculator", "isCorrect": true },
        { "option": "AWS Trusted Advisor", "isCorrect": false },
        { "option": "Amazon CloudWatch", "isCorrect": false },
        { "option": "AWS Cost Explorer", "isCorrect": false }
      ],
      comments: "AWS Pricing Calculator: Ferramenta que ajuda a estimar os custos dos serviços da AWS com base em suas necessidades específicas.AWS Trusted Advisor: Serviço que fornece recomendações para otimizar custos, desempenho, segurança e tolerância a falhas na AWS.AWS Cost Explorer: Ferramenta para analisar e visualizar os custos e o uso de serviços da AWS ao longo do tempo.Amazon CloudWatch: Serviço de monitoramento para coletar, visualizar e agir sobre métricas e logs de recursos e aplicações na AWS."
    },
    {
      "id": 11,
      "isMultipleChoice": true,
      "question": "Quais práticas ajudam a reduzir custos na AWS?",
      "options": [
        { "option": "Uso de instâncias reservadas", "isCorrect": true },
        { "option": "Dimensionamento automático", "isCorrect": true },
        { "option": "Uso de instâncias sob demanda para todos os casos", "isCorrect": false },
        { "option": "Armazenamento em camadas no S3", "isCorrect": true }
      ],
      comments: "Dimensionamento automático: Ajusta automaticamente os recursos com base na demanda, evitando custos desnecessários durante períodos de baixa utilização.Armazenamento em camadas no S3: Move dados para classes de armazenamento mais econômicas, como S3 Standard-IA ou Glacier, com base nos padrões de acesso.Uso de instâncias reservadas: Oferece descontos significativos para cargas de trabalho previsíveis, em troca de um compromisso de uso por 1 ou 3 anos.Uso de instâncias sob demanda para todos os casos não é uma prática econômica, pois essas instâncias têm custo mais alto e são recomendadas apenas para cargas de trabalho imprevisíveis ou temporárias."
    },
    {
      "id": 12,
      "isMultipleChoice": false,
      "question": "O que é o Amazon Route 53?",
      "options": [
        { "option": "Um serviço de DNS gerenciado", "isCorrect": true },
        { "option": "Um serviço de monitoramento", "isCorrect": false },
        { "option": "Uma solução de banco de dados", "isCorrect": false },
        { "option": "Uma ferramenta de migração", "isCorrect": false }
      ],
      comments: "O Amazon Route 53 é um serviço de DNS (Domain Name System) escalável e altamente disponível da AWS.-Gerenciar a tradução de nomes de domínio para endereços IP.-Roteamento inteligente de tráfego com base em políticas, como geolocalização ou latência.-Verificação de integridade de endpoints para garantir alta disponibilidade.-Registro de nomes de domínio.O Route 53 é ideal para garantir o funcionamento eficiente e confiável de aplicativos na nuvem, além de oferecer integração nativa com outros serviços da AWS."
    },
    {
      "id": 13,
      "isMultipleChoice": false,
      "question": "Qual é a finalidade do AWS IAM?",
      "options": [
        { "option": "Gerenciar acesso e permissões", "isCorrect": true },
        { "option": "Monitorar recursos", "isCorrect": false },
        { "option": "Gerenciar bancos de dados", "isCorrect": false },
        { "option": "Armazenar dados", "isCorrect": false }
      ],
      comments: "A finalidade do AWS IAM (Identity and Access Management) é permitir o gerenciamento seguro do acesso a recursos da AWS, definindo quem pode fazer o quê dentro da conta AWS, criando e controlando usuários, grupos, permissões e políticas de segurança."
    },
    {
      "id": 14,
      "isMultipleChoice": false,
      "question": "Qual é a principal finalidade do Amazon S3 Glacier?",
      "options": [
        { "option": "Armazenar dados de longa duração com baixo custo", "isCorrect": true },
        { "option": "Gerenciar bancos de dados", "isCorrect": false },
        { "option": "Monitorar dados em tempo real", "isCorrect": false },
        { "option": "Gerenciar configurações de segurança", "isCorrect": false }
      ],
      comments: "A principal finalidade do Amazon S3 Glacier é oferecer armazenamento de dados a longo prazo e com baixo custo, ideal para arquivamento e backup de dados que não precisam de acesso frequente, com tempos de recuperação variando de minutos a horas.Amazon S3 Glacier Instant Retrieval: Oferece acesso quase imediato aos dados arquivados, com latência de recuperação de milissegundos, sendo ideal para dados que precisam ser acessados com frequência, mas ainda assim são mais baratos do que o armazenamento padrão do S3.Amazon S3 Glacier Flexible Retrieval: Proporciona recuperação flexível dos dados em minutos a horas, oferecendo uma opção mais econômica do que o Instant Retrieval para dados que não precisam ser acessados imediatamente, mas ainda requerem recuperação mais rápida do que o Deep Archive.Amazon S3 Glacier Deep Archive: A opção mais econômica para arquivamento de dados de longo prazo que raramente precisam ser acessados, com tempo de recuperação de horas. Ideal para dados que precisam ser armazenados por compliance ou necessidades legais, mas com acesso muito infrequente."
    },
    {
      "id": 15,
      "isMultipleChoice": true,
      "question": "Quais das opções abaixo são métodos de segurança na AWS?",
      "options": [
        { "option": "Uso de grupos de segurança", "isCorrect": true },
        { "option": "Configuração de ACLs", "isCorrect": true },
        { "option": "Armazenamento em EBS", "isCorrect": false },
        { "option": "Habilitar o AWS Shield", "isCorrect": true }
      ],
      comments: "Habilitar o AWS Shield: Protege contra ataques DDoS, garantindo maior segurança para os recursos da AWS.Configuração de ACLs (Access Control Lists): Usado para controlar o acesso a recursos, como buckets do S3 ou redes VPC, definindo permissões de leitura e escrita.Uso de grupos de segurança: Agem como firewalls virtuais para controlar o tráfego de rede que pode acessar instâncias do EC2.Armazenamento em EBS (Elastic Block Store) não é um método de segurança, mas uma solução de armazenamento persistente."
    },
    {
      "id": 16,
      "isMultipleChoice": false,
      "question": "O que é o AWS CloudFormation?",
      "options": [
        { "option": "Uma ferramenta de automação de infraestrutura", "isCorrect": true },
        { "option": "Um serviço de DNS", "isCorrect": false },
        { "option": "Um banco de dados gerenciado", "isCorrect": false },
        { "option": "Um serviço de monitoramento", "isCorrect": false }
      ],
      comments: "O AWS CloudFormation é um serviço que permite automatizar a criação e o gerenciamento de recursos da AWS usando modelos de infraestrutura como código (IaC). Esses modelos são escritos em JSON ou YAML e descrevem a configuração dos recursos da AWS que você deseja criar, como instâncias EC2, buckets S3, redes VPC, entre outros. O CloudFormation facilita a implantação consistente e repetível de ambientes, além de permitir a automação de atualizações e a criação de pilhas (stacks) de recursos na AWS."
    },
    {
      "id": 17,
      "isMultipleChoice": true,
      "question": "Quais dessas alternativas fazem parte da AWS Snow Family:",
      "options": [
        { "option": "SnowFlake", "isCorrect": false },
        { "option": "SnowCone", "isCorrect": true },
        { "option": "SnowBoard", "isCorrect": false },
        { "option": "SnowBall", "isCorrect": true },
        { "option": "SnowMobile", "isCorrect": true },
        { "option": "SnowTruck", "isCorrect": false }
      ],
      comments: "AWS SnowCone: Dispositivo pequeno, robusto e seguro para transferência de dados e computação de borda, com 2 CPUs, 4 GB de memória e até 14 TB de armazenamento utilizável.AWS Snowball Edge (80 TB): Oferece duas variantes.-Storage Optimized: Ideal para migrações de dados em larga escala e transferências recorrentes, com grande capacidade de armazenamento.-Compute Optimized: Fornece poder de computação para casos de uso como machine learning, análise de vídeo e computação local.AWS SnowMobile (100 PB): Solução de transferência de dados em grande escala (exabytes), ideal para mover grandes volumes de dados para a AWS de forma rápida e eficiente."
    },
    {
        "id": 18,
        "isMultipleChoice": false,
        "question": "Qual dos seguintes pilares do AWS Cloud Adoption Framework (AWS CAF) está focado em gerenciar riscos e assegurar a governança durante a adoção da nuvem?",
        "options": [
          { "option": "Pilar de Negócios (Business)", "isCorrect": false },
          { "option": "Pilar de Governança (Governance)", "isCorrect": true },
          { "option": "Pilar de Plataforma (Platform)", "isCorrect": false },
          { "option": "Pilar de Operações (Operations)", "isCorrect": false }
        ],
        comments: "O AWS Cloud Adoption Framework (AWS CAF) organiza o processo de adoção da nuvem em seis perspectivas, cada uma com foco em uma área específica.Negócios: Alinha a adoção da nuvem com os objetivos de negócios e o valor estratégico.Pessoas: Gerencia mudanças organizacionais e capacitação de equipes para a nuvem.Governança: Garante conformidade, gestão de riscos e alinhamento com políticas corporativas.Plataforma: Define e provisiona a infraestrutura e ferramentas necessárias para operar na nuvem.Segurança: Estabelece controles e práticas de proteção de dados e sistemas.Operações: Otimiza a gestão de operações para manter a eficiência e a continuidade dos serviços."
      },
      {
        "id": 19,
        "isMultipleChoice": true,
        "question": "Quais serviços da AWS são usados para armazenamento de objetos?",
        "options": [
          { "option": "Amazon S3", "isCorrect": true },
          { "option": "Amazon EBS", "isCorrect": false },
          { "option": "Amazon Glacier", "isCorrect": true },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        comments: "Os serviços da AWS usados para armazenamento de objetos são:.-Amazon S3 (Simple Storage Service): Serviço de armazenamento de objetos altamente escalável e durável, ideal para armazenar e recuperar qualquer quantidade de dados, como arquivos, imagens, vídeos e backups.-Amazon Glacier: Serviço de armazenamento de objetos para arquivamento e backup de longo prazo, com custo mais baixo e tempos de recuperação mais lentos.Os outros serviços mencionados são para tipos de armazenamento diferentes:.-Amazon EBS (Elastic Block Store): usado para armazenamento em blocos, com foco em volumes de armazenamento para instâncias EC2.-Amazon RDS (Relational Database Service): serviço gerenciado de banco de dados relacional, não é um serviço de armazenamento de objetos."
      },
      {
        "id": 20,
        "isMultipleChoice": false,
        "question": "O que é o AWS Shared Responsibility Model?",
        "options": [
          { "option": "Modelo que define as responsabilidades de segurança entre a AWS e o cliente", "isCorrect": true },
          { "option": "Modelo que define as responsabilidades de faturamento entre a AWS e o cliente", "isCorrect": false },
          { "option": "Modelo que define as responsabilidades de suporte entre a AWS e o cliente", "isCorrect": false },
          { "option": "Modelo que define as responsabilidades de rede entre a AWS e o cliente", "isCorrect": false }
        ],
        comments: "O AWS Shared Responsibility Model define a divisão de responsabilidades entre a AWS e o cliente. A AWS é responsável pela segurança da infraestrutura que executa os serviços, incluindo hardware, redes e armazenamento. O cliente é responsável pela segurança de tudo o que é executado na nuvem, como sistemas operacionais, aplicativos e dados, além da configuração de controle de acesso e proteção contra ameaças."
      },
      {
        "id": 21,
        "isMultipleChoice": true,
        "question": "Quais serviços da AWS são usados para computação sem servidor?",
        "options": [
          { "option": "AWS Lambda", "isCorrect": true },
          { "option": "Amazon EC2", "isCorrect": false },
          { "option": "Amazon Lightsail", "isCorrect": false },
          { "option": "AWS Elastic Beanstalk", "isCorrect": false }
        ],
        comments: "AWS Lambda: Permite executar código em resposta a eventos sem precisar provisionar ou gerenciar servidores, pagando apenas pelo tempo de execução do código.Os outros serviços mencionados (Amazon Lightsail, Amazon EC2 e AWS Elastic Beanstalk) não são considerados serviços de computação sem servidor, pois envolvem a gestão de infraestrutura ou instâncias de servidor.Amazon Lightsail: Serviço de computação simples que oferece máquinas virtuais, armazenamento e redes em uma interface fácil de usar, ideal para projetos menores ou iniciantes.Amazon EC2: Serviço que fornece instâncias de máquinas virtuais escaláveis e configuráveis para executar aplicações na nuvem.AWS Elastic Beanstalk: Plataforma como serviço (PaaS) que facilita o deployment, gerenciamento e escalabilidade de aplicativos web, sem se preocupar com a infraestrutura subjacente."
      },
      {
        "id": 22,
        "isMultipleChoice": false,
        "question": "Qual é a principal característica do Amazon RDS?",
        "options": [
          { "option": "Serviço gerenciado de banco de dados relacional", "isCorrect": true },
          { "option": "Serviço de armazenamento de objetos", "isCorrect": false },
          { "option": "Serviço de computação sem servidor", "isCorrect": false },
          { "option": "Serviço de rede de entrega de conteúdo", "isCorrect": false }
        ],
        comments: "O Amazon RDS (Relational Database Service) é um serviço gerenciado de banco de dados relacional que facilita a configuração, operação e escalabilidade de bancos de dados na nuvem. Ele oferece suporte para vários sistemas de gerenciamento de banco de dados (SGBDs), como MySQL, PostgreSQL, Oracle, SQL Server e MariaDB, e automatiza tarefas como backups, atualizações de software, escalabilidade e recuperação de desastres, permitindo que os usuários se concentrem mais na aplicação do que na administração do banco de dados."
      },
      {
        "id": 23,
        "isMultipleChoice": true,
        "question": "Quais serviços da AWS são usados para entrega de conteúdo?",
        "options": [
          { "option": "Amazon CloudFront", "isCorrect": true },
          { "option": "AWS Direct Connect", "isCorrect": false },
          { "option": "Amazon Route 53", "isCorrect": false },
          { "option": "AWS VPN", "isCorrect": false }
        ],
        comments: "Amazon CloudFront: Serviço de CDN (Content Delivery Network) que distribui conteúdo, como sites, vídeos e imagens, de forma rápida e segura para os usuários, melhorando a latência e a experiência do usuário.AWS Direct Connect: Serviço que permite uma conexão dedicada e privada entre o seu data center e a AWS, proporcionando maior largura de banda e uma conexão mais estável e segura.Amazon Route 53: Serviço de DNS (Domain Name System) que traduz nomes de domínio para endereços IP e oferece roteamento de tráfego inteligente, além de registrar nomes de domínio e verificar a integridade de endpoints.AWS VPN: Serviço que permite criar uma conexão segura e criptografada entre sua rede local e a AWS, usando uma VPN (Virtual Private Network), ideal para integrar redes corporativas com recursos na nuvem."
      },
      {
        "id": 24,
        "isMultipleChoice": false,
        "question": "O que é o AWS Well-Architected Framework?",
        "options": [
          { "option": "Conjunto de melhores práticas para construir arquiteturas na AWS", "isCorrect": true },
          { "option": "Ferramenta para criar arquiteturas de rede na nuvem AWS", "isCorrect": false },
          { "option": "Serviço de suporte técnico da AWS", "isCorrect": false },
          { "option": "Um guia que ajuda organizações a planejar, adotar e operar com sucesso na nuvem", "isCorrect": false }
        ],
        comments: "em breve um descriçao sobre a resposta. Aguarde. Estamos trabalhando nisso."
      },
      {
        "id": 25,
        "isMultipleChoice": true,
        "question": "Quais serviços da AWS são usados para monitoramento e gerenciamento?",
        "options": [
          { "option": "Amazon CloudWatch", "isCorrect": true },
          { "option": "AWS Config", "isCorrect": true },
          { "option": "AWS CloudTrail", "isCorrect": false },
          { "option": "AWS X-Ray", "isCorrect": false }
        ],
        comments: "Amazon CloudWatch: Serviço de monitoramento e observabilidade que fornece métricas, logs e alarmes para recursos e aplicativos na AWS, permitindo monitorar o desempenho e a saúde da infraestrutura, também oferece algumas funcionalidades de gerenciamento. AWS Config: Serviço de auditoria e conformidade que rastreia alterações na configuração de recursos AWS, permitindo auditar e avaliar a conformidade com as melhores práticas e regulamentos, é uma ferramenta que combina monitoramento e gerenciamento, com foco principal em monitoramento de conformidade e auditoria de configurações de recursos.AWS CloudTrail: Serviço de registro de auditoria que captura e armazena todas as ações feitas em sua conta AWS, proporcionando visibilidade sobre quem fez o quê e quando, para fins de segurança e conformidade), ele não é usado para gerenciar ou configurar os recursos diretamente.AWS X-Ray: Serviço de tracing e depuração de aplicativos que permite identificar gargalos e problemas de desempenho, monitorando o caminho das requisições em sistemas distribuídos, como microserviços, se enquadra mais como uma ferramenta de monitoramento e não tanto de gerenciamento de infraestrutura."
      },
      {
        "id": 26,
        "isMultipleChoice": false,
        "question": "Qual é a principal vantagem do AWS Auto Scaling?",
        "options": [
          { "option": "Ajuste automático da capacidade de recursos com base na demanda", "isCorrect": true },
          { "option": "Redução de custos operacionais", "isCorrect": false },
          { "option": "Aumento da segurança dos dados", "isCorrect": false },
          { "option": "Melhoria na performance de rede", "isCorrect": false }
        ],
        comments: "O Amazon EC2 Auto Scaling garante que o cliente tenha o número ideal de instâncias EC2 disponíveis para atender à demanda do seu aplicativo, ajustando automaticamente a capacidade conforme necessário."
      },
      {
        "id": 27,
        "isMultipleChoice": true,
        "question": "Quais serviços da AWS são usados para gerenciamento de identidade e acesso?",
        "options": [
          { "option": "AWS IAM", "isCorrect": true },
          { "option": "AWS Directory Service", "isCorrect": true },
          { "option": "AWS Single Sign-On", "isCorrect": true },
          { "option": "AWS Shield", "isCorrect": false }
        ],
        comments: "AWS Identity and Access Management (IAM): Permite gerenciar o acesso a recursos da AWS com usuários, grupos e permissões.AWS Directory Service: Oferece diretórios gerenciados, como o Active Directory, para autenticação e gerenciamento de usuários.AWS Single Sign-On (SSO): Facilita o acesso centralizado a várias contas e aplicativos com um único login.AWS Shield não é usado para gerenciamento de identidade e acesso, mas sim para proteção contra ataques DDoS."
      },
      {
        "id": 28,
        "isMultipleChoice": false,
        "question": "O que é o AWS Marketplace?",
        "options": [
          { "option": "Loja online de software e serviços de terceiros para a AWS", "isCorrect": true },
          { "option": "Loja física onde podemos comprar produtos AWS", "isCorrect": false },
          { "option": "Aplicação com os produtos, serviços e soluçoes próprias da AWS", "isCorrect": false },
          { "option": "Aplicação onde podemos baixar produtos e serviços gratuitos", "isCorrect": false }
        ],
        comments: "O AWS Marketplace é uma plataforma digital onde os clientes podem comprar, vender e gerenciar software e soluções de terceiros que são integrados com os serviços da AWS. Ele oferece uma variedade de produtos, como software de segurança, análise de dados, inteligência artificial, infraestrutura e muito mais, facilitando a busca por soluções prontas para usar na nuvem."
      },
      {
        "id": 29,
        "isMultipleChoice": false,
        "question": "Qual pilar do AWS Cloud Adoption Framework (AWS CAF) está focado em garantir que a força de trabalho tenha as habilidades necessárias para operar na nuvem?",
        "options": [
          { "option": "Pilar de Pessoas (People)", "isCorrect": true },
          { "option": "Pilar de Governança (Governance)", "isCorrect": false },
          { "option": "Pilar de Negócios (Business)", "isCorrect": false },
          { "option": "Pilar de Operações (Operations)", "isCorrect": false }
        ],
        comments: "O AWS Cloud Adoption Framework (AWS CAF) organiza o processo de adoção da nuvem em seis perspectivas, cada uma com foco em uma área específica.Negócios: Alinha a adoção da nuvem com os objetivos de negócios e o valor estratégico.Pessoas: Gerencia mudanças organizacionais e capacitação de equipes para a nuvem.Governança: Garante conformidade, gestão de riscos e alinhamento com políticas corporativas.Plataforma: Define e provisiona a infraestrutura e ferramentas necessárias para operar na nuvem.Segurança: Estabelece controles e práticas de proteção de dados e sistemas.Operações: Otimiza a gestão de operações para manter a eficiência e a continuidade dos serviços."
      },
      {
        "id": 30,
        "isMultipleChoice": true,
        "question": "Quais serviços da AWS são usados para análise de dados?",
        "options": [
          { "option": "Amazon EMR", "isCorrect": true },
          { "option": "Amazon Athena", "isCorrect": true },
          { "option": "AWS Glue", "isCorrect": true },
          { "option": "Amazon Kinesis", "isCorrect": true }
        ],
        comments: "Todas as opções são serviços da AWS usados para análise de dados.Amazon Kinesis: Serviço para processar e analisar grandes volumes de dados em tempo real, como dados de streaming de vídeos, logs ou IoT.AWS Glue: Serviço de ETL (Extração, Transformação e Carga) para preparar e integrar dados para análise, além de suportar a criação de catálogos de dados.Amazon Athena: Serviço de consulta interativa que permite realizar análises diretamente em dados armazenados no Amazon S3 usando SQL, sem necessidade de provisionar infraestrutura.Amazon EMR (Elastic MapReduce): Serviço que facilita a análise de grandes volumes de dados usando frameworks como Apache Hadoop, Spark e outros, para processamento em grande escala.Esses serviços são complementares e podem ser usados de forma conjunta dependendo das necessidades de processamento, análise e visualização de dados."
      },
      {
        "id": 31,
        "isMultipleChoice": false,
        "question": "O que é o AWS Cloud Adoption Framework (AWS CAF)?",
        "options": [
          { "option": "Conjunto de melhores práticas para construir arquiteturas na AWS", "isCorrect": false },
          { "option": "Um guia que ajuda organizações a planejar, adotar e operar com sucesso na nuvem.", "isCorrect": true },
          { "option": "Uma plataforma para gerenciar custos e orçamento.", "isCorrect": false },
          { "option": "Um Framewrok para facilitar a adoçao de serviços na nuvem AWS.", "isCorrect": false }
        ],
        comments: "O AWS Cloud Adoption Framework (AWS CAF) é um guia estruturado que ajuda organizações a planejar, adotar e operar com sucesso na nuvem, abrangendo aspectos técnicos, organizacionais e de governança.Ele organiza o processo de adoção da nuvem em seis perspectivas, cada uma com foco em uma área específica.● Negócios: Alinha a adoção da nuvem com os objetivos de negócios e o valor estratégico.● Pessoas: Gerencia mudanças organizacionais e capacitação de equipes para a nuvem.● Governança: Garante conformidade, gestão de riscos e alinhamento com políticas corporativas.● Plataforma: Define e provisiona a infraestrutura e ferramentas necessárias para operar na nuvem.● Segurança: Estabelece controles e práticas de proteção de dados e sistemas.● Operações: Otimiza a gestão de operações para manter a eficiência e a continuidade dos serviços."
      }
      /*
      {
        "id": 33 //numero sequencial,
        "isMultipleChoice": false,//true para multopla escolha
        "question": "Digite aqui a pergunta!",
        "options": [
          { "option": "Digite aqui uma opçao", "isCorrect": true },//isCorret true para a opçao verdadeira
          { "option": "Digite aqui uma opçao", "isCorrect": false },//isCorret true para a opçao verdadeira
          { "option": "Digite aqui uma opçao", "isCorrect": false },//isCorret true para a opçao verdadeira
          { "option": "Digite aqui uma opçao", "isCorrect": false },//isCorret true para a opçao verdadeira
        ],
        comments: "Comentario explicativo." //o caracter ponto faz uma quebra de linha
      }
      */

  ]
};
