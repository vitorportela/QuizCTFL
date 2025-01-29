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
        { "option": "Desempenho", "isCorrect": false },
        { "option": "Acessibilidade", "isCorrect": false },
        { "option": "Otimizaçao de custos", "isCorrect": true },
        { "option": "Sustentabilidade", "isCorrect": true },
        { "option": "Previsibilidade", "isCorrect": false },
        { "option": "Governança", "isCorrect": false }
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
        "isMultipleChoice": false,
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
      },
      //novas pergunta - 05/12/2024
      {
        "id": 32,
        "isMultipleChoice": false,
        "question": "Qual é uma característica essencial da computação em nuvem?",
        "options": [
          { "option": "Baixa disponibilidade", "isCorrect": false },
          { "option": "Elasticidade", "isCorrect": true },
          { "option": "Custos fixos", "isCorrect": false },
          { "option": "Manutenção manual", "isCorrect": false }
        ],
        "comments": "Baixa disponibilidade significa que o serviço não está sempre disponível. Elasticidade permite que os recursos sejam ajustados automaticamente conforme a demanda. Custos fixos referem-se a despesas que não mudam com o uso. Manutenção manual requer intervenção humana para ajustes."
      },
      {
        "id": 33,
        "isMultipleChoice": false,
        "question": "Uma empresa deseja aproveitar os benefícios de escalabilidade e custo reduzido da nuvem pública, mas também precisa manter dados sensíveis em servidores dedicados. Qual modelo de implantação em nuvem atende a esses requisitos?",
        "options": [
          { "option": "Nuvem pública", "isCorrect": false },
          { "option": "Nuvem privada", "isCorrect": false },
          { "option": "Nuvem híbrida", "isCorrect": true },
          { "option": "Nuvem comunitária", "isCorrect": false }
        ],
        "comments": "Nuvem pública é acessível ao público e oferece escalabilidade. Nuvem privada é restrita a uma organização e ideal para dados sensíveis. Nuvem híbrida combina os benefícios da nuvem pública com a segurança da nuvem privada. Nuvem comunitária é compartilhada por várias organizações com interesses comuns."
      },
      
      {
        "id": 34,
        "question": "Qual serviço da AWS permite adicionar autenticação, autorização e gerenciamento de usuários em aplicativos móveis e web?",
        "isMultipleChoice": false,
        "options": [
          { "option": "Amazon Cognito", "isCorrect": true },
          { "option": "AWS IAM", "isCorrect": false },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Directory Service", "isCorrect": false }
        ],
        "comments": "Amazon Cognito: Permite gerenciar usuários, autenticação e autorização em aplicativos móveis e web.\nAWS IAM: Gerencia acesso a recursos da AWS para usuários e serviços, mas não é voltado para aplicativos móveis ou web.\nAmazon S3: Serviço de armazenamento, sem foco em autenticação de usuários.\nAWS Directory Service: Permite gerenciar diretórios, mas não adiciona autenticação diretamente a aplicativos móveis ou web."
      },
      {
        "id": 36,
        "isMultipleChoice": false,
        "question": "Qual dos seguintes é um modelo de serviço em nuvem?",
        "options": [
          { "option": "IaaS", "isCorrect": true },
          { "option": "VPN", "isCorrect": false },
          { "option": "LAN", "isCorrect": false },
          { "option": "HTTP", "isCorrect": false }
        ],
        "comments": "IaaS é Infrastructure as a Service. VPN é uma rede privada virtual. LAN é uma rede local. HTTP é um protocolo de transferência de hipertexto."
      },
      {
        "id": 37,
        "isMultipleChoice": false,
        "question": "Qual é a principal vantagem do modelo de nuvem pública?",
        "options": [
          { "option": "Controle total sobre a infraestrutura", "isCorrect": false },
          { "option": "Custo reduzido", "isCorrect": true },
          { "option": "Segurança máxima", "isCorrect": false },
          { "option": "Personalização completa", "isCorrect": false }
        ],
        "comments": "Controle total sobre a infraestrutura é mais comum em nuvens privadas. Custo reduzido é uma vantagem da nuvem pública. Segurança máxima é mais associada a nuvens privadas. Personalização completa é mais fácil em nuvens privadas."
      },
      {
        "id": 38,
        "isMultipleChoice": false,
        "question": "Qual é um exemplo de PaaS?",
        "options": [
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "Google App Engine", "isCorrect": true },
          { "option": "Microsoft OneDrive", "isCorrect": false },
          { "option": "AWS IAM", "isCorrect": false }
        ],
        "comments": "PaaS (plataforma como serviço) é um modelo de cloud computing que permite que as empresas desenvolvam, executem e gerenciem aplicativos em nuvem, sem a necessidade de manter sua própria infraestrutura e servidores. Google App Engine é um exemplo de PaaS. Amazon S3 é um serviço de armazenamento. Microsoft OneDrive é um serviço de armazenamento em nuvem. AWS IAM é um serviço de gerenciamento de identidade."
      },
      {
        "id": 39,
        "isMultipleChoice": false,
        "question": "Qual é uma característica do modelo de nuvem privada?",
        "options": [
          { "option": "Acesso público irrestrito", "isCorrect": false },
          { "option": "Maior controle de segurança", "isCorrect": true },
          { "option": "Custo mais baixo", "isCorrect": false },
          { "option": "Escalabilidade ilimitada", "isCorrect": false }
        ],
        "comments": "Acesso público irrestrito é uma característica da nuvem pública. Maior controle de segurança é uma vantagem da nuvem privada. Custo mais baixo é geralmente associado à nuvem pública. Escalabilidade ilimitada é uma característica da nuvem pública."
      },
      {
        "id": 40,
        "isMultipleChoice": false,
        "question": "Qual é um exemplo de IaaS?",
        "options": [
          { "option": "Amazon EC2", "isCorrect": true },
          { "option": "Dropbox", "isCorrect": false },
          { "option": "Salesforce", "isCorrect": false },
          { "option": "Google Docs", "isCorrect": false }
        ],
        "comments": "IaaS (infraestrutura como serviço) fornece recursos de infraestrutura de TI sob demanda, como computação, armazenamento, rede e virtualização.Amazon EC2 é um exemplo de IaaS. Dropbox é um serviço de armazenamento, é classificado como SaaS. Salesforce é um exemplo de SaaS. Google Docs é um serviço de SaaS."
      },
      {
        "id": 41,
        "isMultipleChoice": false,
        "question": "Qual é um benefício do uso de serviços em nuvem?",
        "options": [
          { "option": "Dependência de hardware", "isCorrect": false },
          { "option": "Escalabilidade sob demanda", "isCorrect": true },
          { "option": "Responsabilidade individual", "isCorrect": false },
          { "option": "Infraestrutura privativa", "isCorrect": false }
        ],
        "comments": "-Escalabilidade sob demanda: Um dos principais benefícios dos serviços em nuvem, permitindo que recursos sejam aumentados ou diminuídos conforme a necessidade.-Dependência de hardware: No modelo em nuvem, a dependência física de hardware é minimizada, pois a AWS gerencia a infraestrutura necessária.Responsabilidade individual: Embora a nuvem ofereça muitos recursos, a responsabilidade é compartilhada entre o provedor e o cliente.-Infraestrutura privativa: Nem todos os serviços em nuvem garantem infraestrutura privativa, pois muitos são projetados para operar em ambientes compartilhados ou multi-tenant."
      },
      {
        "id": 42,
        "isMultipleChoice": true,
        "question": "Quais dos seguintes serviços da AWS são projetados para oferecer soluções em nuvem híbrida, facilitando a integração entre a infraestrutura local e a nuvem AWS?",
        "options": [
          { "option": "AWS Outposts", "isCorrect": true },
          { "option": "AWS Wavelength", "isCorrect": true },
          { "option": "AWS DataSync", "isCorrect": true },
          { "option": "AWS Basic Support", "isCorrect": false }
        ],
        "comments": "AWS Outposts: Proporciona infraestrutura e serviços AWS no ambiente local do cliente, oferecendo uma solução híbrida robusta e de fácil integração com a nuvem.\n\nAWS Wavelength: Integra a AWS diretamente com provedores de rede de telecomunicações, oferecendo latência ultrabaixa para aplicações híbridas e de edge computing.\n\nAWS DataSync: Facilita a transferência rápida e eficiente de grandes volumes de dados entre a infraestrutura local e a nuvem AWS, facilitando a integração híbrida.\n\nAWS Basic Support: É um plano básico de suporte que oferece acesso a recursos limitados, mas não inclui funcionalidades específicas para integração híbrida entre a nuvem e a infraestrutura local."
      },
      {
        "id": 43,
        "isMultipleChoice": false,
        "question": "Qual é um exemplo de serviço SaaS?",
        "options": [
          { "option": "Amazon RDS", "isCorrect": false },
          { "option": "Microsoft Office 365", "isCorrect": true },
          { "option": "AWS CloudFormation", "isCorrect": false },
          { "option": "Google Cloud Storage", "isCorrect": false }
        ],
        "comments": "SaaS (Software as a Service) é um modelo de computação em nuvem que permite aos usuários acessar aplicativos baseados em nuvem pela internet. Microsoft Office 365 é um exemplo de SaaS. AWS CloudFormation é um serviço de infraestrutura como código. Google Cloud Storage é um serviço de armazenamento.Amazon RDS é um serviço de banco de dados."
      },
      {
        "id": 44,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar permissões de acesso aos recursos?",
        "options": [
          { "option": "AWS Shield", "isCorrect": false },
          { "option": "AWS IAM", "isCorrect": true },
          { "option": "AWS WAF", "isCorrect": false },
          { "option": "Amazon GuardDuty", "isCorrect": false }
        ],
        "comments": "AWS Shield protege contra DDoS. AWS IAM gerencia identidades e acessos. AWS WAF protege aplicações web. Amazon GuardDuty detecta ameaças."
      },
      {
        "id": 45,
        "isMultipleChoice": false,
        "question": "Qual é o modelo de responsabilidade compartilhada da AWS?",
        "options": [
          { "option": "AWS é responsável por tudo", "isCorrect": false },
          { "option": "O cliente é responsável por tudo", "isCorrect": false },
          { "option": "AWS e o cliente compartilham responsabilidades", "isCorrect": true },
          { "option": "Não há responsabilidades definidas", "isCorrect": false }
        ],
        "comments": "AWS é responsável pela segurança da nuvem. O cliente é responsável pela segurança na nuvem. Ambos compartilham responsabilidades. Não há responsabilidades definidas é incorreto."
      },
      {
        "id": 46,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS ajuda a proteger contra ataques DDoS?",
        "options": [
          { "option": "AWS IAM", "isCorrect": false },
          { "option": "AWS Shield", "isCorrect": true },
          { "option": "AWS CloudTrail", "isCorrect": false },
          { "option": "AWS Config", "isCorrect": false }
        ],
        "comments": "AWS IAM gerencia identidades. AWS Shield protege contra DDoS. AWS CloudTrail monitora ações. AWS Config gerencia configurações."
      },
      {
        "id": 47,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS permite monitorar e auditar ações em sua conta?",
        "options": [
          { "option": "AWS CloudTrail", "isCorrect": true },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS EC2", "isCorrect": false }
        ],
        "comments": "AWS CloudTrail monitora ações. AWS Lambda executa código. Amazon S3 armazena dados. AWS EC2 fornece computação."
      },
      {
        "id": 48,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS oferece criptografia de dados em repouso?",
        "options": [
          { "option": "AWS KMS", "isCorrect": true },
          { "option": "AWS CloudWatch", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "AWS KMS (Key Management Service): É o serviço responsável por gerenciar e controlar chaves de criptografia, garantindo que os dados em repouso sejam criptografados de maneira segura. \nAWS CloudWatch: É um serviço de monitoramento e gerenciamento de recursos e aplicativos na AWS, mas não está relacionado à criptografia de dados.\nAWS Lambda: Permite executar código em resposta a eventos, mas não gerencia a criptografia de dados em repouso. \nAmazon RDS: É um serviço gerenciado de banco de dados que armazena dados, mas a criptografia em repouso deve ser configurada explicitamente utilizando chaves do AWS KMS."
      },
      {
        "id": 49,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para proteger aplicações web de ameaças comuns?",
        "options": [
          { "option": "AWS WAF", "isCorrect": true },
          { "option": "AWS CloudFront", "isCorrect": false },
          { "option": "AWS S3", "isCorrect": false },
          { "option": "AWS EC2", "isCorrect": false }
        ],
        "comments": "AWS WAF (Web Application Firewall): Protege aplicações web contra ameaças e ataques comuns, garantindo a segurança do tráfego.AWS CloudFront: Content Delivery Network (CDN) que distribui e entrega conteúdo de forma rápida e segura em todo o mundo.AWS S3 (Simple Storage Service): Armazena dados de forma escalável, durável e com alta disponibilidade.AWS EC2 (Elastic Compute Cloud): Oferece instâncias de computação flexíveis e escaláveis para atender às demandas das aplicações."
      },
      {
        "id": 50,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS oferece detecção de ameaças e monitoramento contínuo?",
        "options": [
          { "option": "Amazon GuardDuty", "isCorrect": true },
          { "option": "AWS CloudFormation", "isCorrect": false },
          { "option": "AWS Elastic Beanstalk", "isCorrect": false },
          { "option": "AWS CodeDeploy", "isCorrect": false }
        ],
        "comments": "Amazon GuardDuty detecta ameaças. AWS CloudFormation gerencia infraestrutura. AWS Elastic Beanstalk implanta aplicações. AWS CodeDeploy automatiza implantações."
      },
      {
        "id": 51,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS permite gerenciar chaves de criptografia?",
        "options": [
          { "option": "AWS KMS", "isCorrect": true },
          { "option": "AWS CloudWatch", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "AWS KMS gerencia chaves de criptografia. AWS CloudWatch monitora recursos. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 52,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS garante a criptografia de dados em trânsito?",
        "options": [
          { "option": "AWS Certificate Manager (ACM)", "isCorrect": true },
          { "option": "AWS Key Management Service (KMS)", "isCorrect": false },
          { "option": "AWS Transit Gateway", "isCorrect": false },
          { "option": "AWS Database Migration Service (DMS)", "isCorrect": false }
        ],
        "comments": "O AWS Certificate Manager (ACM) gerencia certificados SSL/TLS para proteger dados em trânsito. O AWS Key Management Service (KMS) gerencia chaves de criptografia para proteger dados em repouso. O AWS Transit Gateway conecta redes VPC e locais, mas não oferece criptografia direta de dados em trânsito. O AWS Database Migration Service (DMS) ajuda na migração de bancos de dados e não oferece proteção direta de dados em trânsito."
      },
      {
        "id": 53,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS oferece proteção contra perda de dados?",
        "options": [
          { "option": "AWS Backup", "isCorrect": true },
          { "option": "AWS CloudWatch", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "AWS Backup gerencia backups. AWS CloudWatch monitora recursos. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 54,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS permite criar políticas de segurança personalizadas?",
        "options": [
          { "option": "AWS IAM", "isCorrect": true },
          { "option": "AWS CloudFormation", "isCorrect": false },
          { "option": "AWS Elastic Beanstalk", "isCorrect": false },
          { "option": "AWS CodeDeploy", "isCorrect": false }
        ],
        "comments": "AWS IAM gerencia identidades e acessos. AWS CloudFormation gerencia infraestrutura. AWS Elastic Beanstalk implanta aplicações. AWS CodeDeploy automatiza implantações."
      },
      {
        "id": 55,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS oferece proteção contra ameaças de rede?",
        "options": [
          { "option": "AWS Shield", "isCorrect": true },
          { "option": "AWS CloudFront", "isCorrect": false },
          { "option": "AWS S3", "isCorrect": false },
          { "option": "AWS EC2", "isCorrect": false }
        ],
        "comments": "AWS Shield protege contra DDoS. AWS CloudFront entrega conteúdo. AWS S3 armazena dados. AWS EC2 fornece computação."
      },
      {
        "id": 56,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS permite auditar e monitorar o uso de recursos?",
        "options": [
          { "option": "AWS CloudTrail", "isCorrect": true },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS EC2", "isCorrect": false }
        ],
        "comments": "AWS CloudTrail monitora ações. AWS Lambda executa código. Amazon S3 armazena dados. AWS EC2 fornece computação."
      },
      {
        "id": 57,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS oferece proteção contra ameaças de segurança?",
        "options": [
          { "option": "Amazon GuardDuty", "isCorrect": true },
          { "option": "AWS CloudFormation", "isCorrect": false },
          { "option": "AWS Elastic Beanstalk", "isCorrect": false },
          { "option": "AWS CodeDeploy", "isCorrect": false }
        ],
        "comments": "Amazon GuardDuty detecta ameaças. AWS CloudFormation gerencia infraestrutura. AWS Elastic Beanstalk implanta aplicações. AWS CodeDeploy automatiza implantações."
      },
      {
        "id": 58,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS permite gerenciar identidades e acessos?",
        "options": [
          { "option": "AWS IAM", "isCorrect": true },
          { "option": "AWS CloudFormation", "isCorrect": false },
          { "option": "AWS Elastic Beanstalk", "isCorrect": false },
          { "option": "AWS CodeDeploy", "isCorrect": false }
        ],
        "comments": "AWS IAM gerencia identidades e acessos. AWS CloudFormation gerencia infraestrutura. AWS Elastic Beanstalk implanta aplicações. AWS CodeDeploy automatiza implantações."
      },
      {
        "id": 59,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS facilita a orquestração e o gerenciamento de contêineres usando Kubernetes?",
        "options": [
          { "option": "Amazon ECS", "isCorrect": false },
          { "option": "Amazon EKS", "isCorrect": true },
          { "option": "AWS KMS", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "-Amazon EKS (Elastic Kubernetes Service): É o serviço da AWS que facilita a orquestração e o gerenciamento de contêineres Kubernetes na nuvem, oferecendo alta escalabilidade e segurança.-Amazon ECS: Orquestração de contêineres usando o AWS Fargate e ECS, mas não é baseado no Kubernetes.-AWS KMS (Key Management Service): Gerencia chaves de criptografia, mas não é usado para orquestração de contêineres.-Amazon RDS: Serviço de banco de dados gerenciado e não relacionado ao Kubernetes."
      },
      {
        "id": 60,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS permite executar código sem provisionar ou gerenciar servidores?",
        "options": [
          { "option": "Amazon EC2", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": true },
          { "option": "Amazon RDS", "isCorrect": false },
          { "option": "Amazon S3", "isCorrect": false }
        ],
        "comments": "Amazon EC2 fornece computação. AWS Lambda executa código sem servidores. Amazon RDS gerencia bancos de dados. Amazon S3 armazena dados."
      },
      {
        "id": 61,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar bancos de dados relacionais?",
        "options": [
          { "option": "Amazon EC2", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false }
        ],
        "comments": "Amazon EC2 fornece computação. Amazon RDS gerencia bancos de dados relacionais. Amazon S3 armazena dados. AWS Lambda executa código."
      },
      {
        "id": 62,
        "isMultipleChoice": false,
        "question": "Uma empresa de comércio eletrônico deseja implementar um sistema de recomendação personalizado para seus clientes, mas enfrenta dificuldades para construir, treinar e implantar modelos de aprendizado de máquina. Qual serviço da AWS pode ajudar a resolver esse problema?",
        "options": [
          {
            "option": "Amazon SageMaker",
            "isCorrect": true
          },
          {
            "option": "Amazon RDS",
            "isCorrect": false
          },
          {
            "option": "Amazon CloudWatch",
            "isCorrect": false
          },
          {
            "option": "AWS Lambda",
            "isCorrect": false
          }
        ],
        "comments": "O Amazon SageMaker é ideal para construir, treinar e implantar modelos de aprendizado de máquina, como sistemas de recomendação. O Amazon RDS é um banco de dados relacional gerenciado, não específico para aprendizado de máquina. O Amazon CloudWatch monitora métricas e logs, mas não está relacionado ao treinamento de modelos. O AWS Lambda executa código sem provisionar servidores, mas não é adequado para gerenciar o ciclo de vida de modelos de aprendizado de máquina."
      },
      
      {
        "id": 63,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para criar e gerenciar máquinas virtuais?",
        "options": [
          { "option": "Amazon EC2", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon EC2 cria e gerencia máquinas virtuais. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 64,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para monitorar e gerenciar recursos?",
        "options": [
          { "option": "AWS CloudWatch", "isCorrect": true },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "AWS CloudWatch monitora recursos. AWS Lambda executa código. Amazon S3 armazena dados. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 65,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar contêineres?",
        "options": [
          { "option": "Amazon ECS", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon ECS gerencia contêineres. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 66,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para criar redes virtuais?",
        "options": [
          { "option": "Amazon VPC", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon VPC cria redes virtuais. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 67,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar filas de mensagens?",
        "options": [
          { "option": "Amazon SQS", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "O Amazon Simple Queue Service (SQS) permite que você envie, armazene e receba mensagens entre componentes de software em qualquer volume, sem perder mensagens ou precisar que outros serviços estejam disponíveis."
      },
      {
        "id": 68,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar APIs?",
        "options": [
          { "option": "Amazon API Gateway", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "O Amazon API Gateway ajuda você a criar HTTP, REST e WebSocket APIs com um serviço gerenciado que permite criar, publicar, manter, gerenciar, monitorar e proteger APIs."
      },
      {
        "id": 69,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar bancos de dados NoSQL?",
        "options": [
          { "option": "Amazon DynamoDB", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon DynamoDB gerencia bancos de dados NoSQL. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados relacionais."
      },
      {
        "id": 70,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar logs e eventos?",
        "options": [
          { "option": "AWS CloudWatch Logs", "isCorrect": true },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "AWS CloudWatch Logs gerencia logs e eventos. AWS Lambda executa código. Amazon S3 armazena dados. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 71,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar funções sem servidor?",
        "options": [
          { "option": "AWS Lambda", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false },
          { "option": "Amazon EC2", "isCorrect": false }
        ],
        "comments": "AWS Lambda gerencia funções sem servidor. Amazon S3 armazena dados. Amazon RDS gerencia bancos de dados. Amazon EC2 fornece computação."
      },
      {
        "id": 72,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar armazenamento em bloco?",
        "options": [
          { "option": "Amazon EBS", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon EBS gerencia armazenamento em bloco. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 73,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar balanceamento de carga?",
        "options": [
          { "option": "Elastic Load Balancing", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Elastic Load Balancing gerencia balanceamento de carga. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 74,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar redes de entrega de conteúdo?",
        "options": [
          { "option": "Amazon CloudFront", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon CloudFront gerencia redes de entrega de conteúdo. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
      },
      {
        "id": 75,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é usado para gerenciar armazenamento de arquivos?",
        "options": [
          { "option": "Amazon EFS", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon EFS (Elastic File System) é um serviço de sistema de arquivos escalável e gerenciado para uso com instâncias do Amazon EC2 e outros serviços da AWS.Amazon S3 (Amazon Simple Storage Service) é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance.AWS Lambda é um serviço de computação que executa seu código em resposta a eventos e gerencia automaticamente os recursos de computação.Amazon RDS (Relational Database Service) é um serviço gerenciado da AWS que facilita a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem."
      },
      {
        "id": 76,
        "isMultipleChoice": false,
        "question": "Qual ferramenta da AWS é usada para visualizar e analisar os custos e o uso da AWS?",
        "options": [
          { "option": "AWS Budgets", "isCorrect": false },
          { "option": "AWS Cost Explorer", "isCorrect": true },
          { "option": "AWS Pricing Calculator", "isCorrect": false },
          { "option": "AWS Trusted Advisor", "isCorrect": false }
        ],
        "comments": "AWS Budgets ajuda a prever custos. AWS Cost Explorer analisa custos. AWS Pricing Calculator estima custos. AWS Trusted Advisor oferece recomendações."
      },
      {
        "id": 77,
        "isMultipleChoice": false,
        "question": "Qual modelo de precificação da AWS cobra com base no uso real dos recursos?",
        "options": [
          { "option": "Contrato anual", "isCorrect": false },
          { "option": "Pagamento conforme o uso", "isCorrect": true },
          { "option": "Taxa fixa mensal", "isCorrect": false },
          { "option": "Licenciamento por usuário", "isCorrect": false }
        ],
        "comments": "Contrato anual é um compromisso de longo prazo. Pagamento conforme o uso cobra pelo uso real. Taxa fixa mensal é um custo constante. Licenciamento por usuário cobra por cada usuário."
      },
      {
        "id": 78,
        "isMultipleChoice": false,
        "question": "Qual ferramenta da AWS ajuda a prever e controlar os custos futuros?",
        "options": [
          { "option": "AWS Budgets", "isCorrect": true },
          { "option": "AWS Cost Explorer", "isCorrect": false },
          { "option": "AWS Pricing Calculator", "isCorrect": false },
          { "option": "AWS Trusted Advisor", "isCorrect": false }
        ],
        "comments": "AWS Budgets ajuda a prever custos. AWS Cost Explorer analisa custos. AWS Pricing Calculator estima custos. AWS Trusted Advisor oferece recomendações."
      },
      {
        "id": 79,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS oferece recomendações para otimizar custos e desempenho?",
        "options": [
          { "option": "AWS Trusted Advisor", "isCorrect": true },
          { "option": "AWS Cost Explorer", "isCorrect": false },
          { "option": "AWS Budgets", "isCorrect": false },
          { "option": "AWS Pricing Calculator", "isCorrect": false }
        ],
        "comments": "AWS Trusted Advisor oferece recomendações. AWS Cost Explorer analisa custos. AWS Budgets ajuda a prever custos. AWS Pricing Calculator estima custos."
      },
      {
        "id": 80,
        "isMultipleChoice": false,
        "question": "Qual ferramenta da AWS é usada para calcular estimativas de custos para arquiteturas na AWS?",
        "options": [
          { "option": "AWS Pricing Calculator", "isCorrect": true },
          { "option": "AWS Cost Explorer", "isCorrect": false },
          { "option": "AWS Budgets", "isCorrect": false },
          { "option": "AWS Trusted Advisor", "isCorrect": false }
        ],
        "comments": "AWS Pricing Calculator estima custos. AWS Cost Explorer analisa custos. AWS Budgets ajuda a prever custos. AWS Trusted Advisor oferece recomendações."
      },
      {
        "id": 81,
        "isMultipleChoice": false,
        "question": "Qual plano de suporte da AWS oferece acesso a um gerente técnico de conta?",
        "options": [
          { "option": "Basic", "isCorrect": false },
          { "option": "Developer", "isCorrect": false },
          { "option": "Business", "isCorrect": false },
          { "option": "Enterprise", "isCorrect": true }
        ],
        "comments": "-AWS Basic Support: Oferece suporte básico com acesso apenas a recursos de autoatendimento e documentação. Não inclui suporte técnico individualizado.-AWS Developer Support: Ideal para desenvolvimento e testes. Permite enviar solicitações de suporte por e-mail e tem um tempo de resposta de menos de 12 horas.-AWS Business Support: Fornece suporte técnico 24 horas por dia e inclui suporte por telefone com um tempo de resposta de até 4 horas caso o sistema em produção esteja danificado e 1 hora caso o sistema esteja parado. Inclui acesso total ao AWS Trusted Advisor.-AWS Enterprise Support: Oferece suporte prioritário com tempos de resposta extremamente rápidos (15 minutos para cargas essenciais), Inclui acesso designado a um Technical Account Manager (TAM), que ajuda no gerenciamento e otimização das cargas de trabalho críticas. Os planos AWS Enterprise On-Ramp e os planos Empresarial Rápido e Empresarial de Grande Porte também incluem acesso ao Technical Account Manager (TAM). Estes planos são projetados para empresas que necessitam de suporte robusto e escalável para seus ambientes essenciais e complexos."
      },
      {
        "id": 82,
        "isMultipleChoice": false,
        "question": "Sua empresa está enfrentando dificuldades para escalar a infraestrutura de TI rapidamente para atender a picos de demanda. Qual solução em nuvem pode ajudar?",
        "options": [
            { "option": "IaaS", "isCorrect": true },
            { "option": "PaaS", "isCorrect": false },
            { "option": "SaaS", "isCorrect": false },
            { "option": "FaaS", "isCorrect": false }
        ],
        "comments": "IaaS (Infrastructure as a Service): É a opção correta, pois fornece recursos de infraestrutura escaláveis, como servidores, armazenamento e redes, que podem ser ajustados rapidamente para atender a picos de demanda. Exemplos incluem Amazon EC2 e Google Compute Engine.\nPaaS (Platform as a Service): Oferece plataformas para desenvolvimento e implantação de aplicativos, mas não fornece controle direto sobre a infraestrutura subjacente, o que limita sua capacidade de escalar diretamente a infraestrutura de TI.\nSaaS (Software as a Service): Fornece aplicativos prontos para uso, como e-mail ou ferramentas de produtividade, mas não é voltado para escalar infraestrutura de TI.\nFaaS (Function as a Service): Permite executar funções específicas em resposta a eventos, mas não substitui a necessidade de infraestrutura para lidar com cargas de trabalho gerais."
      },
    {
        "id": 83,
        "isMultipleChoice": false,
        "question": "Uma aplicação web está enfrentando problemas de segurança devido a ataques de injeção de SQL. Qual serviço pode ajudar a mitigar esse risco?",
        "options": [
            { "option": "AWS WAF", "isCorrect": true },
            { "option": "AWS IAM", "isCorrect": false },
            { "option": "Amazon GuardDuty", "isCorrect": false },
            { "option": "AWS Shield", "isCorrect": false }
        ],
        "comments": "AWS WAF (Web Application Firewall) ajuda a proteger aplicações web de explorações comuns, como injeção de SQL, ao permitir que você crie regras personalizadas para bloquear padrões de tráfego malicioso."
    },
    {
        "id": 84,
        "isMultipleChoice": false,
        "question": "Sua equipe de desenvolvimento está gastando muito tempo gerenciando servidores para executar código. Qual serviço pode simplificar esse processo?",
        "options": [
            { "option": "AWS Lambda", "isCorrect": true },
            { "option": "Amazon EC2", "isCorrect": false },
            { "option": "Amazon RDS", "isCorrect": false },
            { "option": "Amazon S3", "isCorrect": false }
        ],
        "comments": "AWS Lambda permite executar código em resposta a eventos sem a necessidade de provisionar ou gerenciar servidores, facilitando o desenvolvimento de aplicações serverless."
    },
    {
        "id": 85,
        "isMultipleChoice": false,
        "question": "Uma empresa precisa de uma solução para armazenar grandes quantidades de dados não estruturados de forma econômica. Qual serviço é mais adequado?",
        "options": [
            { "option": "Amazon S3", "isCorrect": true },
            { "option": "Amazon RDS", "isCorrect": false },
            { "option": "Amazon DynamoDB", "isCorrect": false },
            { "option": "Amazon EBS", "isCorrect": false }
        ],
        "comments": "Amazon S3 (Simple Storage Service) é ideal para armazenar e recuperar qualquer quantidade de dados a qualquer momento, oferecendo escalabilidade, disponibilidade e durabilidade elevadas a um custo acessível."
    },
    {
        "id": 86,
        "isMultipleChoice": false,
        "question": "Uma organização precisa garantir que apenas usuários autorizados possam acessar seus recursos na nuvem. Qual serviço pode ajudar a gerenciar essas permissões?",
        "options": [
            { "option": "AWS IAM", "isCorrect": true },
            { "option": "AWS Shield", "isCorrect": false },
            { "option": "AWS WAF", "isCorrect": false },
            { "option": "Amazon GuardDuty", "isCorrect": false }
        ],
        "comments": "AWS IAM (Identity and Access Management) permite gerenciar o acesso aos serviços e recursos da AWS de forma segura, definindo quem pode acessar o quê."
    },
    {
        "id": 87,
        "isMultipleChoice": false,
        "question": "Uma empresa está enfrentando altos custos com servidores subutilizados. Qual modelo de computação pode ajudar a otimizar os custos?",
        "options": [
            { "option": "Computação sob demanda", "isCorrect": true },
            { "option": "Computação reservada", "isCorrect": false },
            { "option": "Computação dedicada", "isCorrect": false },
            { "option": "Computação spot", "isCorrect": false }
        ],
        "comments": "A computação sob demanda permite que as empresas paguem apenas pelos recursos que realmente utilizam, evitando custos com capacidade ociosa."
    },
    {
        "id": 88,
        "isMultipleChoice": false,
        "question": "Uma aplicação precisa de um banco de dados que ofereça baixa latência e alta escalabilidade. Qual serviço é mais adequado?",
        "options": [
            { "option": "Amazon DynamoDB", "isCorrect": true },
            { "option": "Amazon RDS", "isCorrect": false },
            { "option": "Amazon Redshift", "isCorrect": false },
            { "option": "Amazon Aurora", "isCorrect": false }
        ],
        "comments": "Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado que oferece baixa latência e alta escalabilidade, ideal para aplicações que exigem respostas rápidas."
    },
    {
        "id": 89,
        "isMultipleChoice": false,
        "question": "Uma empresa precisa de uma solução para monitorar e gerenciar o uso de recursos na nuvem. Qual serviço pode ajudar?",
        "options": [
            { "option": "Amazon CloudWatch", "isCorrect": true },
            { "option": "AWS CloudTrail", "isCorrect": false },
            { "option": "AWS Config", "isCorrect": false },
            { "option": "AWS Trusted Advisor", "isCorrect": false }
        ],
        "comments": "Amazon CloudWatch é um serviço de monitoramento que fornece dados e insights acionáveis para monitorar o uso de recursos, desempenho de aplicações e integridade operacional."
    },
    {
        "id": 90,
        "isMultipleChoice": false,
        "question": "Uma organização precisa garantir a conformidade com regulamentos de proteção de dados. Qual serviço pode ajudar a auditar e monitorar atividades na nuvem?",
        "options": [
            { "option": "AWS CloudTrail", "isCorrect": true },
            { "option": "Amazon CloudWatch", "isCorrect": false },
            { "option": "AWS Config", "isCorrect": false },
            { "option": "AWS Trusted Advisor", "isCorrect": false }
        ],
        "comments": "AWS CloudTrail registra todas as chamadas de API para sua conta da AWS, permitindo auditoria e monitoramento de atividades para garantir conformidade com regulamentos de proteção de dados."
    },
    {
        "id": 91,
        "isMultipleChoice": false,
        "question": "Uma equipe de TI precisa de uma solução para automatizar a implantação de infraestrutura na nuvem. Qual serviço pode ser utilizado?",
        "options": [
            { "option": "AWS CloudFormation", "isCorrect": true },
            { "option": "AWS Elastic Beanstalk", "isCorrect": false },
            { "option": "AWS OpsWorks", "isCorrect": false },
            { "option": "AWS CodeDeploy", "isCorrect": false }
        ],
        "comments": "O AWS CloudFormation permite que você automatize a implantação e o gerenciamento de infraestrutura na AWS, criando pilhas de recursos (stacks) usando templates de código. Isso possibilita a automação da criação e do gerenciamento de recursos, como EC2, S3, RDS, e outros, de maneira escalável e reproduzível.AWS OpsWorks: é uma ferramenta de gerenciamento de configuração que ajuda a automatizar a implantação de aplicativos, mas não é tão voltada para a automação da infraestrutura em si como o CloudFormation.AWS Elastic Beanstalk: é uma plataforma para implantação e gerenciamento de aplicativos web, mais focada em aplicações do que na infraestrutura em si.AWS CodeDeploy: é usado para automatizar a implantação de código, principalmente em EC2 e instâncias on-premises, mas não é projetado para automatizar toda a infraestrutura."
    },
    {
        "id": 92,
        "isMultipleChoice": false,
        "question": "Uma empresa deseja melhorar a segurança de suas aplicações web contra ataques DDoS. Qual serviço pode ser utilizado?",
        "options": [
            { "option": "AWS Shield", "isCorrect": true },
            { "option": "AWS IAM", "isCorrect": false },
            { "option": "AWS WAF", "isCorrect": false },
            { "option": "Amazon GuardDuty", "isCorrect": false }
        ],
        "comments": "AWS Shield é um serviço gerenciado de proteção contra DDoS que protege aplicações executadas na AWS."
    },
    {
        "id": 93,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para gerenciar chaves de criptografia?",
        "options": [
            { "option": "AWS KMS", "isCorrect": true },
            { "option": "AWS IAM", "isCorrect": false },
            { "option": "AWS Shield", "isCorrect": false },
            { "option": "AWS WAF", "isCorrect": false }
        ],
        "comments": "AWS KMS (Key Management Service) permite criar e controlar chaves de criptografia usadas para proteger dados."
    },
    {
        "id": 94,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para criar e gerenciar contêineres?",
        "options": [
            { "option": "Amazon ECS", "isCorrect": true },
            { "option": "AWS Lambda", "isCorrect": false },
            { "option": "Amazon RDS", "isCorrect": false },
            { "option": "Amazon S3", "isCorrect": false }
        ],
        "comments": "Amazon ECS (Elastic Container Service) é um serviço de gerenciamento de contêineres altamente escalável e de alto desempenho."
    },
    {
        "id": 95,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para criar redes privadas virtuais?",
        "options": [
            { "option": "Amazon VPC", "isCorrect": true },
            { "option": "AWS Direct Connect", "isCorrect": false },
            { "option": "Amazon CloudFront", "isCorrect": false },
            { "option": "AWS VPN", "isCorrect": false }
        ],
        "comments": "Amazon VPC (Virtual Private Cloud) permite provisionar uma seção logicamente isolada da nuvem AWS onde você pode lançar recursos da AWS em uma rede virtual que você define."
    },
    {
        "id": 96,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para distribuir conteúdo globalmente com baixa latência?",
        "options": [
            { "option": "Amazon CloudFront", "isCorrect": true },
            { "option": "Amazon S3", "isCorrect": false },
            { "option": "AWS Lambda", "isCorrect": false },
            { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que distribui conteúdo globalmente com baixa latência e alta velocidade de transferência."
    },
    {
        "id": 97,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para gerenciar logs de aplicações e sistemas?",
        "options": [
            { "option": "Amazon CloudWatch", "isCorrect": true },
            { "option": "AWS CloudTrail", "isCorrect": false },
            { "option": "AWS Config", "isCorrect": false },
            { "option": "AWS Trusted Advisor", "isCorrect": false }
        ],
        "comments": "Amazon CloudWatch Logs permite monitorar, armazenar e acessar arquivos de log de suas instâncias do Amazon EC2, AWS CloudTrail, e outras fontes."
    },
    {
        "id": 98,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para criar pipelines de integração e entrega contínuas?",
        "options": [
            { "option": "AWS CodePipeline", "isCorrect": true },
            { "option": "AWS CodeBuild", "isCorrect": false },
            { "option": "AWS CodeDeploy", "isCorrect": false },
            { "option": "AWS CodeCommit", "isCorrect": false }
        ],
        "comments": "AWS CodePipeline é um serviço de integração e entrega contínuas para atualizações rápidas e confiáveis de aplicações e infraestrutura."
    },
    {
        "id": 99,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para gerenciar a configuração de recursos da AWS?",
        "options": [
            { "option": "AWS Config", "isCorrect": true },
            { "option": "AWS CloudTrail", "isCorrect": false },
            { "option": "Amazon CloudWatch", "isCorrect": false },
            { "option": "AWS Trusted Advisor", "isCorrect": false }
        ],
        "comments": "AWS Config fornece um inventário de recursos da AWS, histórico de configuração e notificações de alterações de configuração para habilitar a segurança e a governança."
    },
    {
        "id": 100,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS pode ser usado para criar e gerenciar bancos de dados relacionais?",
        "options": [
            { "option": "Amazon RDS", "isCorrect": true },
            { "option": "Amazon DynamoDB", "isCorrect": false },
            { "option": "Amazon Redshift", "isCorrect": false },
            { "option": "Amazon Aurora", "isCorrect": false }
        ],
        "comments": "Amazon RDS (Relational Database Service) facilita a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem."
    },
    {
      "id": 101,
      "question": "Qual serviço da AWS permite acessar relatórios de conformidade e outros documentos relacionados a auditorias e certificações?",
      "isMultipleChoice": false,
      "options": [
        { "option": "AWS Artifact", "isCorrect": true },
        { "option": "AWS Config", "isCorrect": false },
        { "option": "AWS Trusted Advisor", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": false }
      ],
      "comments": "O AWS Artifact é um portal que fornece acesso a relatórios de conformidade e outros documentos relacionados a auditorias, ajudando a atender requisitos regulatórios."
    },
    {
      "id": 103,
      "question": "Qual é a principal função do AWS Macie?",
      "isMultipleChoice": false,
      "options": [
        { "option": "Identificar e proteger dados confidenciais usando aprendizado de máquina", "isCorrect": true },
        { "option": "Gerenciar chaves de criptografia para proteger dados armazenados na AWS", "isCorrect": false },
        { "option": "Proteger contra ataques distribuídos de negação de serviço (DDoS)", "isCorrect": false },
        { "option": "Monitorar e registrar ações realizadas nos recursos da AWS", "isCorrect": false }
      ],
      "comments": "Identificar e proteger dados confidenciais usando aprendizado de máquina: Esta é a função principal do AWS Macie, que ajuda a localizar e proteger informações sensíveis, como dados pessoais ou financeiros.\nGerenciar chaves de criptografia para proteger dados armazenados na AWS: É a função do AWS Key Management Service (KMS).\nProteger contra ataques distribuídos de negação de serviço (DDoS): É a função do AWS Shield.\nMonitorar e registrar ações realizadas nos recursos da AWS: Esta é a função do AWS CloudTrail."
    },
    {
      "id": 104,
      "question": "Qual serviço da AWS pode ajudar a proteger aplicações contra ataques de força bruta tentando acessar senhas ou credenciais?",
      "isMultipleChoice": false,
      "options": [
        { "option": "AWS WAF (Web Application Firewall)", "isCorrect": true },
        { "option": "AWS Shield", "isCorrect": false },
        { "option": "Amazon GuardDuty", "isCorrect": false },
        { "option": "AWS IAM", "isCorrect": false }
      ],
      "comments": "AWS WAF (Web Application Firewall): Permite criar regras personalizadas para bloquear solicitações maliciosas, como ataques de força bruta em aplicativos web.\nAWS Shield: Protege contra ataques DDoS, mas não é específico para ataques de força bruta.\nAmazon GuardDuty: Detecta atividades suspeitas e ameaças de segurança, mas não bloqueia diretamente ataques de força bruta.\nAWS IAM: Gerencia acesso e permissões na AWS, mas não protege diretamente contra ataques de força bruta em aplicativos."
    },
    
    {
      "id": 105,
      "isMultipleChoice": false,
      "question": "Sua empresa precisa garantir a conformidade e a governança das configurações dos recursos na AWS, verificando se todos os recursos estão em conformidade com as políticas internas e os padrões de segurança. Qual serviço da AWS deve ser usado para auditar e rastrear essas configurações de maneira contínua?",
      "options": [
        { "option": "AWS Config", "isCorrect": true },
        { "option": "Amazon CloudWatch", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": false },
        { "option": "AWS Trusted Advisor", "isCorrect": false },
      ],
      "comments": "AWS Config: Monitora e registra continuamente todas as configurações dos recursos na AWS, garantindo conformidade e rastreabilidade das mudanças. Ele fornece visibilidade das configurações e ajuda a identificar recursos que não seguem as políticas definidas.\n\nAmazon CloudWatch: Principalmente usado para monitoramento e logs, mas não para rastrear configurações e compliance dos recursos da AWS.\n\nAWS CloudTrail: Registra e audita chamadas feitas à API da AWS, mas não fornece visibilidade detalhada das configurações e compliance dos recursos.\n\nAWS Trusted Advisor: Fornece recomendações para otimizar custos, melhorar o desempenho, aumentar a segurança e verificar a conformidade, mas não rastreia a configuração detalhada dos recursos como o AWS Config."
    },
    {
      "id": 106,
      "isMultipleChoice": false,
      "question": "O que é o AWS Transit Gateway e qual é sua principal função?",
      "options": [
        { "option": "Um serviço que conecta múltiplas VPCs e redes locais em uma única gateway central", "isCorrect": true },
        { "option": "Um serviço de armazenamento em nuvem com alta durabilidade", "isCorrect": false },
        { "option": "Um serviço de análise em tempo real para logs e métricas", "isCorrect": false },
        { "option": "Um serviço de monitoramento e alerta em tempo real", "isCorrect": false }
      ],
      "comments": "AWS Transit Gateway: Facilita a conectividade centralizada entre várias Virtual Private Clouds (VPCs) e redes locais. Ele simplifica o gerenciamento das conexões, garantindo escalabilidade e desempenho otimizado.\n\nAWS Transit Gateway conecta todos os recursos em um único gateway central, facilitando a arquitetura e a comunicação entre VPCs, VPNs e redes on-premises, tornando a rede mais ágil e segura.\n\nAs outras opções:\n\n- Armazenamento em nuvem: não relacionado ao Transit Gateway.\n- Análise em tempo real para logs: AWS CloudWatch e outros serviços, mas não Transit Gateway.\n- Monitoramento e alerta em tempo real: AWS CloudWatch, mas não é a funcionalidade principal do Transit Gateway."
    },
    {
      "id": 107,
      "isMultipleChoice": false,
      "question": "Sua empresa armazena arquivos que são acessados com menos frequência, mas ainda precisa de acesso rápido. Qual classe de armazenamento da AWS é recomendada para esse cenário?",
      "options": [
        { "option": "S3 Standard-IA", "isCorrect": true },
        { "option": "S3 Standard", "isCorrect": false },
        { "option": "S3 Glacier", "isCorrect": false },
        { "option": "S3 Intelligent-Tiering", "isCorrect": false }
      ],
      "comments": "S3 Standard-IA: Ideal para arquivos acessados de forma menos frequente, mas com acesso rápido. Oferece uma combinação entre custo reduzido e desempenho eficiente.\nS3 Standard: Para acesso frequente a arquivos. Ideal para dados em que a velocidade de acesso é crítica.\nS3 Glacier: Projetado para arquivos que são acessados raramente e possuem longos prazos de recuperação, mas com custos mais baixos.\nS3 Intelligent-Tiering: Movimenta automaticamente os objetos entre diferentes classes de armazenamento (Standard, Standard-IA e Glacier) para otimizar custos."
    },
    {
      "id": 108,
      "isMultipleChoice": false,
      "question": "Sua empresa precisa armazenar arquivos históricos que são raramente acessados e requerem um prazo de recuperação de várias horas. Qual solução da AWS é a mais econômica e adequada para esse cenário?",
      "options": [
        { "option": "S3 Glacier Deep Archive", "isCorrect": true },
        { "option": "S3 Standard-IA", "isCorrect": false },
        { "option": "S3 Standard", "isCorrect": false },
        { "option": "S3 Intelligent-Tiering", "isCorrect": false }
      ],
      "comments": "S3 Glacier Deep Archive: A solução mais econômica para arquivos de longo prazo e raramente acessados, com prazos de recuperação de 12 horas ou mais.\nS3 Standard-IA: Adequado para arquivos acessados com baixa frequência, mas a recuperação é mais rápida do que o Glacier Deep Archive.\nS3 Standard: Ideal para acesso frequente a arquivos, mas não é adequado para arquivos históricos ou de longo prazo.\nS3 Intelligent-Tiering: Otimiza custos ao mover automaticamente objetos entre várias classes de armazenamento conforme os padrões de acesso, mas não é a melhor solução para arquivos de longo prazo."
    },
    {
      "id": 109,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS pode ajudar sua empresa a visualizar, entender e gerenciar os gastos e custos na nuvem?",
      "options": [
        { "option": "AWS Cost Explorer", "isCorrect": true },
        { "option": "AWS CloudFormation", "isCorrect": false },
        { "option": "AWS Route 53", "isCorrect": false },
        { "option": "AWS SNS", "isCorrect": false }
      ],
      "comments": "AWS Cost Explorer: Ferramenta que permite aos clientes visualizar e analisar os gastos e os padrões de uso na AWS. Ele oferece relatórios detalhados, previsões de custos e insights essenciais para otimizar o orçamento e identificar oportunidades de economia.\nAWS CloudFormation: Usado para provisionamento e gerenciamento de recursos de infraestrutura como código, mas não para controle de custos.\nAWS Route 53: Um serviço de registro de nomes de domínio e roteamento de tráfego, sem relação direta ao controle de custos.\nAWS SNS (Simple Notification Service): Usado para envio de notificações e alertas, mas não está relacionado ao gerenciamento dos custos na nuvem."
    },
    {
      "id": 110,
      "isMultipleChoice": false,
      "question": "O que é uma Zona de Disponibilidade (Availability Zone) na AWS?",
      "options": [
        { "option": "Um datacenter físico independente", "isCorrect": true },
        { "option": "Uma rede global de servidores", "isCorrect": false },
        { "option": "Um serviço de monitoramento em nuvem", "isCorrect": false },
        { "option": "Um conjunto de regiões interconectadas", "isCorrect": false }
      ],
      "comments": "Zona de Disponibilidade (Availability Zone): É um datacenter físico independente em uma região específica da AWS, Cada AZ é projetada para ser isolada das falhas em outras AZs, garantindo alta disponibilidade e resiliência das aplicações.\n\n-Datacenter físico independente: Cada AZ tem seu próprio hardware e infraestrutura.-Rede global de servidores: Não se aplica à definição das AZs.-Serviço de monitoramento: Não estão relacionados diretamente ao conceito das Zonas de Disponibilidade.-Um conjunto de regiões interconectadas: está incorreto, um conjunto de AZ interconectadas seria uma Região."
    },
    {
      "id": 111,
      "isMultipleChoice": false,
      "question": "O que é uma Região na AWS?",
      "options": [
        { "option": "Um datacenter físico independente", "isCorrect": false },
        { "option": "Um servidor único em um único local", "isCorrect": false },
        { "option": "Um serviço de armazenamento temporário", "isCorrect": false },
        { "option": "Um conjunto de Zonas de Disponibilidade interconectadas", "isCorrect": true }
      ],
      "comments": "Região na AWS: Uma região é composta por um conjunto de Zonas de Disponibilidade (AZs) interconectadas, garantindo alta disponibilidade e resiliência das aplicações na nuvem.\n-Um conjunto de Zonas interconectadas: Proporciona redundância e distribuição das aplicações.-Datacenter físico, armazenamento temporário, e rede distribuída não são elementos das Regiões."
    },
    {
      "id": 112,
      "isMultipleChoice": false,
      "question": "Qual serviço devo utilizar para gerenciar APIs e registrar chamadas de APIs?",
      "options": [
        { "option": "API Gateway para gerenciar e CloudTrail para registrar chamadas", "isCorrect": true },
        { "option": "CloudWatch para gerenciar e API Gateway para registrar chamadas", "isCorrect": false },
        { "option": "API Gateway para gerenciar e registrar chamadas ", "isCorrect": false },
        { "option": "CloudWatch para gerenciar e CloudTrail para registrar chamadas", "isCorrect": false }
      ],
      "comments": "-API Gateway e CloudTrail: O API Gateway gerencia o acesso e a execução de APIs, enquanto o CloudTrail registra as chamadas e ações realizadas, fornecendo auditoria.-API Gateway e CloudWatch: O CloudWatch monitora métricas e logs, mas não registra chamadas específicas.-API Gateway: Focado apenas no gerenciamento de APIs, não fornece registro de chamadas diretamente.-CloudTrail e CloudWatch: O CloudTrail registra atividades de API, mas não gerencia APIs e o CloudWatch foca no monitoramento."
    },
//Fim das perguntas criadas
//inicio das perguntas do PDF
    {
      "id": 201,
      "isMultipleChoice": true,
      "question": "Sob o modelo de responsabilidade compartilhada da AWS, quais são as responsabilidades do cliente? (Selecione DUAS)",
      "options": [
        { "option": "Segurança física e ambiental", "isCorrect": false },
        { "option": "Dispositivos de rede físicos, incluindo firewalls", "isCorrect": false },
        { "option": "Descomissionamento de dispositivos de armazenamento", "isCorrect": false },
        { "option": "Segurança dos dados em trânsito", "isCorrect": true },
        { "option": "Autenticação de integridade dos dados", "isCorrect": true }
      ],
      "comments": "Sob o modelo de responsabilidade compartilhada da AWS, a AWS é responsável pela segurança 'da' nuvem e os clientes são responsáveis pela segurança 'na' nuvem. Garantir a segurança dos dados em trânsito e a integridade dos dados são responsabilidades do cliente. Os clientes são sempre responsáveis por gerenciar os dados, incluindo a criptografia. 'Segurança dos dados em trânsito' e 'Autenticação de integridade dos dados' são respostas corretas. 'Segurança física e ambiental', 'Dispositivos de rede físicos, incluindo firewalls' e 'Descomissionamento de dispositivos de armazenamento' são responsabilidades da AWS."
    },
    {
      "id": 202,
      "isMultipleChoice": false,
      "question": "Qual dos seguintes é um princípio de bom design de arquitetura na AWS Cloud?",
      "options": [
        { "option": "Implementar pontos únicos de falha", "isCorrect": false },
        { "option": "Implementar acoplamento frouxo", "isCorrect": true },
        { "option": "Implementar design monolítico", "isCorrect": false },
        { "option": "Implementar escalonamento vertical", "isCorrect": false }
      ],
      "comments": "À medida que a complexidade das aplicações aumenta, um atributo desejável de um sistema de TI é que ele possa ser dividido em componentes menores e fracamente acoplados. Isso significa que os sistemas de TI devem ser projetados de forma a reduzir as interdependências — uma mudança ou falha em um componente não deve se propagar para outros componentes. 'Implementar acoplamento frouxo' é a resposta correta. 'Implementar pontos únicos de falha' é incorreto, pois eles devem ser eliminados sempre que possível para evitar interrupções no sistema/aplicação. 'Implementar design monolítico' é incorreto, pois o design monolítico aumenta o impacto de uma falha no sistema. 'Implementar escalonamento vertical' é incorreto, pois o escalonamento horizontal deve ser usado sempre que possível com acoplamento frouxo."
    },
    {
      "id": 203,
      "isMultipleChoice": false,
      "question": "Uma empresa armazena cópias de backups no Amazon S3 e requer acesso rápido, mas baixa resiliência. Qual classe de armazenamento é otimizada para esses requisitos?",
      "options": [
        { "option": "Amazon S3 Standard", "isCorrect": false },
        { "option": "Amazon S3 Glacier Deep Archive", "isCorrect": false },
        { "option": "Amazon S3 One Zone-Infrequent Access", "isCorrect": true },
        { "option": "Amazon S3 Glacier", "isCorrect": false }
      ],
      "comments": "S3 One Zone-IA é para dados que são acessados com menos frequência, mas requerem acesso rápido quando necessário. Ao contrário de outras classes de armazenamento S3 que armazenam dados em um mínimo de três Zonas de Disponibilidade (AZs), o S3 One Zone-IA armazena dados em uma única AZ e custa 20% menos que o S3 Standard-IA. É ideal para clientes que desejam uma opção de menor custo para dados acessados com pouca frequência, mas que não requerem a disponibilidade e resiliência do S3 Standard ou S3 Standard-IA. É uma boa escolha para armazenar cópias de backup secundárias de dados locais ou dados facilmente recriáveis. Também pode ser usado como armazenamento econômico para dados replicados de outra Região AWS usando a Replicação entre Regiões do S3. 'Amazon S3 One Zone-Infrequent Access' é a resposta correta. 'Amazon S3 Standard' é incorreto, pois é uma classe de armazenamento mais resiliente e custará mais, portanto, não é otimizada para esses requisitos. 'Amazon S3 Glacier Deep Archive' é incorreto, pois essa classe de armazenamento é adequada para arquivamento e leva várias horas para restaurar dados. 'Amazon S3 Glacier' é incorreto, pois essa classe de armazenamento é adequada para arquivamento e leva minutos a horas para restaurar dados."
    },

    {
      "id": 204,
      "isMultipleChoice": true,
      "question": "Qual serviço da AWS pode ser usado para gerar chaves de criptografia que podem ser usadas para criptografar dados? (Selecione DUAS)",
      "options": [
        { "option": "Amazon Macie", "isCorrect": false },
        { "option": "AWS Certificate Manager", "isCorrect": false },
        { "option": "AWS Key Management Service (AWS KMS)", "isCorrect": true },
        { "option": "AWS Secrets Manager", "isCorrect": false },
        { "option": "AWS CloudHSM", "isCorrect": true }
      ],
      "comments": "Tanto o AWS KMS (Key Management Service) quanto o AWS CloudHSM (Hardware Security Module) podem ser usados para gerar chaves de criptografia de dados. Você usa o que são chamados de chaves mestras do cliente (CMKs) para criar chaves de criptografia de dados. As chaves de criptografia de dados podem então ser usadas para realmente criptografar os dados. 'AWS Key Management Service (AWS KMS)' e 'AWS CloudHSM' são respostas corretas. 'Amazon Macie' é incorreto, pois é um serviço de segurança de dados totalmente gerenciado que usa aprendizado de máquina para descobrir e proteger seus dados sensíveis na AWS. 'AWS Certificate Manager' é incorreto, pois é um serviço que permite provisionar, gerenciar e implantar certificados SSL/TLS públicos e privados. 'AWS Secrets Manager' é incorreto, pois ajuda a proteger segredos necessários para acessar suas aplicações, serviços e recursos de TI."
    },
    {
      "id": 205,
      "isMultipleChoice": true,
      "question": "Qual das seguintes são descrições precisas de usuários e grupos do AWS IAM? (Selecione DUAS)",
      "options": [
        { "option": "Grupos podem ser aninhados e conter outros grupos", "isCorrect": false },
        { "option": "Um usuário pode ser membro de vários grupos", "isCorrect": true },
        { "option": "Grupos podem conter apenas usuários e não podem ser aninhados", "isCorrect": true },
        { "option": "Um usuário pode ser membro de apenas um grupo por vez", "isCorrect": false },
        { "option": "Todos os novos usuários são automaticamente adicionados a um grupo padrão", "isCorrect": false }
      ],
      "comments": "Os grupos IAM são usados para organizar usuários e aplicar políticas (permissões) a eles. Você pode adicionar usuários a vários grupos. Grupos não podem ser aninhados, o que significa que você não pode ter um grupo como membro de outro grupo ou organizá-los em uma hierarquia. 'Um usuário pode ser membro de vários grupos' e 'Grupos podem conter apenas usuários e não podem ser aninhados' são respostas corretas. 'Grupos podem ser aninhados e conter outros grupos' é incorreto, pois você não pode fazer um grupo ser membro de outro grupo. 'Um usuário pode ser membro de apenas um grupo por vez' é incorreto, pois os usuários podem ser membros de vários grupos. 'Todos os novos usuários são automaticamente adicionados a um grupo padrão' é incorreto, pois não há um grupo padrão ao qual os usuários são adicionados quando são criados."
    },
    {
      "id": 206,
      "isMultipleChoice": false,
      "question": "Qual benefício da AWS Cloud elimina a necessidade de os usuários tentarem estimar o uso futuro da infraestrutura?",
      "options": [
        { "option": "Implantações globais fáceis", "isCorrect": false },
        { "option": "Segurança da AWS Cloud", "isCorrect": false },
        { "option": "Elasticidade da AWS Cloud", "isCorrect": true },
        { "option": "Economias de escala", "isCorrect": false }
      ],
      "comments": "Elasticidade significa que sua infraestrutura escala com base no uso real. Quando há maior demanda, você usa mais infraestrutura e paga mais, e quando há menos demanda, você precisa de menos infraestrutura e paga menos. Os benefícios são que você não precisa adivinhar sobre a capacidade e paga apenas pelo que realmente precisa. 'Elasticidade da AWS Cloud' é a resposta correta. 'Implantações globais fáceis' é incorreto, pois, embora seja fácil implantar muitos recursos da AWS globalmente, esse benefício não elimina a necessidade de estimar o uso futuro. 'Segurança da AWS Cloud' é incorreto, pois a segurança da AWS Cloud é importante, mas não elimina a necessidade de estimar o uso futuro. 'Economias de escala' é incorreto, pois significa que você paga menos por alguns recursos devido aos benefícios da escala da AWS, mas esse benefício não elimina a necessidade de estimar o uso futuro."
    },
    {
      "id": 207,
      "isMultipleChoice": false,
      "question": "Uma empresa planeja implantar uma aplicação comercial global em instâncias Amazon EC2. A solução de implantação deve ser projetada com a maior redundância e tolerância a falhas. Com base nesta situação, como as instâncias EC2 devem ser implantadas?",
      "options": [
        { "option": "Em uma única Zona de Disponibilidade em uma Região AWS", "isCorrect": false },
        { "option": "Em uma única Zona de Disponibilidade em duas Regiões AWS", "isCorrect": false },
        { "option": "Em várias Zonas de Disponibilidade em uma Região AWS", "isCorrect": false },
        { "option": "Em várias Zonas de Disponibilidade em duas Regiões AWS", "isCorrect": true }
      ],
      "comments": "Para máxima redundância e tolerância a falhas, a aplicação deve ser implantada em várias Regiões AWS e várias Zonas de Disponibilidade dentro de cada uma dessas regiões. Esta arquitetura pode usar Elastic Load Balancers e registros do Amazon Route 53 para direcionar o tráfego para as instâncias. Alternativamente, poderia usar o AWS Global Accelerator. 'Em várias Zonas de Disponibilidade em duas Regiões AWS' é a resposta correta. 'Em uma única Zona de Disponibilidade em uma Região AWS' é incorreto, pois isso não representa a maior redundância e tolerância a falhas. 'Em uma única Zona de Disponibilidade em duas Regiões AWS' é incorreto, pois isso não representa a maior redundância e tolerância a falhas. 'Em várias Zonas de Disponibilidade em uma Região AWS' é incorreto, pois isso não representa a maior redundância e tolerância a falhas."
    },
    {
      "id": 208,
      "isMultipleChoice": true,
      "question": "Quais serviços da AWS podem ser usados para conectar a AWS Cloud e recursos on-premises? (Selecione DUAS)",
      "options": [
        { "option": "AWS Managed VPN", "isCorrect": true },
        { "option": "Amazon Connect", "isCorrect": false },
        { "option": "Amazon CloudHSM", "isCorrect": false },
        { "option": "AWS Direct Connect", "isCorrect": true },
        { "option": "AWS Managed Services", "isCorrect": false }
      ],
      "comments": "Um AWS Managed VPN é uma conexão de rede privada virtual pela Internet pública. Isso cria um link criptografado entre a rede on-premises e seu AWS VPC. Outra maneira de alcançar esse resultado é provisionar uma AWS Direct Connect, que conecta redes on-premises à AWS usando links de rede privados. 'AWS Managed VPN' e 'AWS Direct Connect' são respostas corretas. 'Amazon Connect' é incorreto, pois é um contact center omnichannel na nuvem. 'Amazon CloudHSM' é incorreto, pois é um módulo de segurança de hardware baseado em nuvem. 'AWS Managed Services' é incorreto, pois é um serviço gerenciado para reduzir a sobrecarga operacional e o risco."
    },
    {
      "id": 209,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS você pode usar para instalar um banco de dados de terceiros?",
      "options": [
        { "option": "Amazon RDS", "isCorrect": false },
        { "option": "Amazon DynamoDB", "isCorrect": false },
        { "option": "Amazon EC2", "isCorrect": true },
        { "option": "Amazon EMR", "isCorrect": false }
      ],
      "comments": "Na AWS, você pode usar um serviço gerenciado como o Amazon RDS ou instalar um banco de dados no Amazon EC2. Existem limites para os mecanismos de banco de dados suportados no Amazon RDS, então para instalar um banco de dados de terceiros, você pode usar o Amazon EC2. Você será responsável por gerenciar o sistema operacional e o banco de dados. 'Amazon EC2' é a resposta correta. 'Amazon RDS' é incorreto, pois você não pode escolher usar um banco de dados de terceiros no Amazon RDS. 'Amazon DynamoDB' é incorreto, pois você não pode usar outro tipo de mecanismo de banco de dados no DynamoDB. 'Amazon EMR' (Amazon Elastic MapReduce) é incorreto, pois usa o framework Hadoop e você não pode escolher outro mecanismo de banco de dados."
    },
    {
      "id": 210,
      "isMultipleChoice": false,
      "question": "Qual serviço você pode usar para provisionar um servidor pré-configurado com pouca ou nenhuma experiência em AWS?",
      "options": [
        { "option": "Amazon Elastic Beanstalk", "isCorrect": false },
        { "option": "AWS Lambda", "isCorrect": false },
        { "option": "Amazon EC2", "isCorrect": false },
        { "option": "Amazon LightSail", "isCorrect": true }
      ],
      "comments": "Amazon LightSail fornece aos desenvolvedores capacidade de computação, armazenamento e rede para implantar e gerenciar sites, aplicativos web e bancos de dados na nuvem. LightSail oferece servidores privados virtuais pré-configurados (instâncias) que incluem tudo o que é necessário para implantar uma aplicação ou criar um banco de dados. Implantar um servidor no LightSail é extremamente fácil e não requer conhecimento sobre como configurar VPCs, grupos de segurança, ACLs de rede, etc. 'Amazon LightSail' é a resposta correta. 'Amazon Elastic Beanstalk' é incorreto, pois requer mais experiência em AWS. 'AWS Lambda' é incorreto, pois fornece funções serverless, não servidores pré-configurados. 'Amazon EC2' é incorreto, pois também requer expertise em AWS."
    },
    {
      "id": 211,
      "isMultipleChoice": false,
      "question": "Qual serviço permite expandir e reduzir automaticamente sua aplicação em resposta à demanda?",
      "options": [
        { "option": "AWS ElastiCache", "isCorrect": false },
        { "option": "Amazon Elastic Load Balancing", "isCorrect": false },
        { "option": "Amazon EC2 Auto Scaling", "isCorrect": true },
        { "option": "Amazon DynamoDB", "isCorrect": false }
      ],
      "comments": "Amazon EC2 Auto Scaling responde automaticamente à demanda adicionando ou removendo instâncias EC2 para garantir que a quantidade certa de capacidade de computação esteja disponível a qualquer momento. Isso ajuda a ajustar automaticamente o número de instâncias com base na carga da sua aplicação. 'Amazon EC2 Auto Scaling' é a resposta correta. 'AWS ElastiCache' é incorreto, pois fornece serviços de cache e banco de dados em memória. 'Amazon Elastic Load Balancing' é incorreto, pois distribui solicitações de entrada para instâncias EC2 e pode ser usado em conjunto com Auto Scaling. 'Amazon DynamoDB' é incorreto, pois é um banco de dados não relacional (NoSQL)."
    },
    {
      "id": 212,
      "isMultipleChoice": false,
      "question": "Qual método você pode usar para fazer um backup de uma instância Amazon EC2 usando ferramentas da AWS?",
      "options": [
        {
          "option": "Fazer backups completos e incrementais em nível de arquivo usando o console de backup","isCorrect": false
        },
        {
          "option": "Fazer backups consistentes de aplicativos usando a API do EC2","isCorrect": false
        },
        {
          "option": "Usar Replicação entre Regiões (CRR) para copiar a instância para outra região","isCorrect": false
        },
        {
          "option": "Tirar um snapshot para capturar o estado da instância em um ponto no tempo","isCorrect": true
        }
      ],
      "comments": "Você pode tirar snapshots de instâncias EC2, o que cria uma cópia do estado da instância em um ponto no tempo. Os snapshots são armazenados no S3. Se você fizer snapshots periódicos de um volume, os snapshots são incrementais, o que significa que apenas os blocos no dispositivo que mudaram após o seu último snapshot são salvos no novo snapshot. 'Tirar um snapshot para capturar o estado da instância em um ponto no tempo' é a resposta correta. 'Fazer backups completos e incrementais em nível de arquivo usando o console de backup' é incorreto, pois não existe um console de backup que faça backups completos e incrementais. 'Fazer backups consistentes de aplicativos usando a API do EC2' é incorreto, pois não há como fazer backups consistentes de aplicativos usando ferramentas da AWS. 'Usar Replicação entre Regiões (CRR) para copiar a instância para outra região' é incorreto, pois a Replicação entre Regiões é usada para replicar buckets do Amazon S3 entre regiões."
    },
    {
      "id": 213,
      "isMultipleChoice": true,
      "question": "Ao instanciar recursos de computação, quais são duas técnicas para usar processos automatizados e repetíveis que são rápidos e evitam erros humanos? (Selecione DUAS)",
      "options": [
        {
          "option": "Snapshotting","isCorrect": false
        },
        {
          "option": "Bootstrapping","isCorrect": true
        },
        {
          "option": "Tolerância a falhas","isCorrect": false
        },
        {
          "option": "Infraestrutura como código","isCorrect": true
        },
        {
          "option": "Monitoramento de desempenho","isCorrect": false
        }
      ],
      "comments": "Com infraestrutura como código, os ativos da AWS são programáveis, permitindo aplicar técnicas, práticas e ferramentas do desenvolvimento de software para tornar toda a infraestrutura reutilizável, sustentável, extensível e testável. Com bootstrapping, você pode executar ações automatizadas para modificar configurações padrão, incluindo scripts que instalam software ou copiam dados para trazer o recurso a um estado particular. 'Bootstrapping' e 'Infraestrutura como código' são respostas corretas. 'Snapshotting' é incorreto, pois trata-se de salvar dados, não de instanciar recursos. 'Tolerância a falhas' é incorreto, pois é um método de aumentar a disponibilidade do sistema quando componentes falham. 'Monitoramento de desempenho' é incorreto, pois não tem relação com a instanciação de recursos."
    },
    {
      "id": 216,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS pode ser usado para processar uma grande quantidade de dados usando o framework Hadoop?",
      "options": [
        {
          "option": "Amazon Athena",
          "isCorrect": false
        },
        {
          "option": "Amazon Kinesis",
          "isCorrect": false
        },
        {
          "option": "AWS Glue",
          "isCorrect": false
        },
        {
          "option": "Amazon EMR",
          "isCorrect": true
        }
      ],
      "comments": "Amazon Elastic Map Reduce (EMR) fornece um framework Hadoop gerenciado que facilita, acelera e torna mais econômico o processamento de grandes quantidades de dados em instâncias Amazon EC2 escaláveis dinamicamente. 'Amazon EMR' é a resposta correta. 'Amazon Athena' é incorreto, pois é um serviço de consulta interativa que facilita a análise de dados no Amazon S3 usando SQL padrão. 'Amazon Kinesis' é incorreto, pois facilita a coleta, processamento e análise de dados de streaming em tempo real. 'AWS Glue' é incorreto, pois é um serviço de ETL (Extrair, Transformar e Carrega) totalmente gerenciado que facilita a preparação e carregamento de dados para análise."
    },
    {
      "id": 217,
      "isMultipleChoice": false,
      "question": "Uma empresa gostaria de maximizar seus descontos potenciais de volume e de Instâncias Reservadas em várias contas e também aplicar políticas de controle de serviço nas contas dos membros. Qual serviço ou ferramenta eles podem usar para obter esses benefícios?",
      "options": [
        {
          "option": "AWS Budgets","isCorrect": false
        },
        {
          "option": "AWS Cost Explorer","isCorrect": false
        },
        {
          "option": "AWS IAM","isCorrect": false
        },
        {
          "option": "AWS Organizations","isCorrect": true
        }
      ],
      "comments": "AWS Organizations permite criar grupos de contas AWS e gerenciar políticas centralmente entre essas contas. AWS Organizations fornece faturamento consolidado em ambos os conjuntos de recursos, permitindo configurar um único método de pagamento na conta mestre da organização e ainda receber uma fatura para a atividade individual em cada conta membro. Descontos de preços por volume podem ser aplicados aos recursos. 'AWS Organizations' é a resposta correta. 'AWS Budgets' é incorreto, pois permite definir orçamentos personalizados que alertam quando seus custos ou uso excedem (ou estão previstos para exceder) o valor orçado. 'AWS Cost Explorer' é incorreto, pois é uma ferramenta gratuita que permite visualizar gráficos de seus custos. 'AWS IAM' é incorreto, pois permite gerenciar o acesso aos serviços e recursos da AWS de forma segura."
    },
    {
      "id": 218,
      "isMultipleChoice": true,
      "question": "Quais são duas maneiras pelas quais a migração para a nuvem AWS pode beneficiar uma organização? (Selecione DUAS)",
      "options": [
        {
          "option": "Mudar para um modelo CAPEX","isCorrect": false
        },
        {
          "option": "Aumentar a velocidade e agilidade","isCorrect": true
        },
        {
          "option": "Parar de adivinhar sobre capacidade","isCorrect": true
        },
        {
          "option": "Depreciar ativos por um período de tempo mais longo","isCorrect": false
        },
        {
          "option": "Obter maior controle da segurança do data center","isCorrect": false
        }
      ],
      "comments": "Aumentar a velocidade e agilidade: Em um ambiente de computação em nuvem, novos recursos de TI estão a apenas um clique de distância, o que significa que você reduz o tempo para disponibilizar esses recursos para seus desenvolvedores de semanas para apenas minutos. Isso resulta em um aumento dramático na agilidade da organização, já que o custo e o tempo para experimentar e desenvolver são significativamente menores. Parar de adivinhar sobre capacidade: Elimine a adivinhação sobre suas necessidades de capacidade de infraestrutura. Quando você toma uma decisão de capacidade antes de implantar um aplicativo, muitas vezes acaba com recursos caros ociosos ou lidando com capacidade limitada. Com a computação em nuvem, esses problemas desaparecem. Você pode acessar tanta ou tão pouca capacidade quanto precisar e escalar para cima e para baixo conforme necessário com apenas alguns minutos de aviso."
    },
    {
      "id": 219,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS uma organização pode usar para automatizar tarefas operacionais em instâncias EC2 usando cookbooks Chef existentes?",
      "options": [
        {
          "option": "AWS OpsWorks",
          "isCorrect": true
        },
        {
          "option": "AWS Service Catalog",
          "isCorrect": false
        },
        {
          "option": "AWS Config",
          "isCorrect": false
        },
        {
          "option": "AWS CodeDeploy",
          "isCorrect": false
        }
      ],
      "comments": "AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas de Chef e Puppet. Com o Chef, você usa modelos de código, ou cookbooks, para descrever a configuração desejada de instâncias ou servidores locais. 'AWS OpsWorks' é a resposta correta. 'AWS Service Catalog' é incorreto, pois permite que as organizações criem e gerenciem catálogos de serviços de TI aprovados para uso na AWS. 'AWS Config' é incorreto, pois é um serviço que permite auditar e avaliar as configurações de seus recursos AWS. 'AWS CodeDeploy' é incorreto, pois é um serviço de implantação totalmente gerenciado que automatiza implantações de software para uma variedade de serviços de computação, como Amazon EC2, AWS Lambda e seus servidores locais."
    },
    {
      "id": 220,
      "isMultipleChoice": true,
      "question": "Qual das seguintes afirmações está correta em relação ao faturamento consolidado? (Selecione DUAS)",
      "options": [
        {
          "option": "Contas pagantes são independentes e não podem acessar recursos de outras contas",
          "isCorrect": true
        },
        {
          "option": "Usado para consolidar faturamento entre organizações",
          "isCorrect": false
        },
        {
          "option": "Uma fatura é fornecida por organização AWS",
          "isCorrect": true
        },
        {
          "option": "Descontos de preços por volume não podem ser aplicados aos recursos",
          "isCorrect": false
        },
        {
          "option": "Disponível apenas para clientes Enterprise",
          "isCorrect": false
        }
      ],
      "comments": "As organizações AWS permitem que você consolide várias contas AWS em uma organização que você cria e gerencia centralmente. Cada conta pagante é uma entidade independente e não pode acessar recursos de outras contas na Organização. O faturamento é realizado centralmente na conta raiz da Organização AWS. 'Contas pagantes são independentes e não podem acessar recursos de outras contas' e 'Uma fatura é fornecida por organização AWS' são respostas corretas. 'Usado para consolidar faturamento entre organizações' é incorreto, pois AWS Organizations permite consolidar faturamento entre contas dentro de uma organização, mas não entre organizações. 'Descontos de preços por volume não podem ser aplicados aos recursos' é incorreto, pois descontos de preços por volume podem ser aplicados aos recursos e isso é uma vantagem chave. 'Disponível apenas para clientes Enterprise' é incorreto, pois o faturamento consolidado está disponível para todos os clientes."
    },
    {
      "id": 221,
      "isMultipleChoice": false,
      "question": "Qual modelo de precificação você deve usar para instâncias EC2 que serão usadas em um ambiente de laboratório por várias horas em um fim de semana e devem funcionar sem interrupções?",
      "options": [
        {
          "option": "On-Demand",
          "isCorrect": true
        },
        {
          "option": "Reservada",
          "isCorrect": false
        },
        {
          "option": "Spot",
          "isCorrect": false
        },
        {
          "option": "Dedicated Instance",
          "isCorrect": false
        }
      ],
      "comments": "On-Demand é a melhor escolha para esta situação, pois é a opção mais econômica que garantirá que não haja interrupções. Use on-demand para casos de uso ad-hoc onde você precisa executar uma instância por um curto período de tempo. 'Reserved' é incorreto, pois as instâncias reservadas são boas para requisitos de longo prazo e estáticos, já que você deve se comprometer por 1 ou 3 anos em troca de um desconto considerável. 'Spot' é incorreto, pois as instâncias spot são boas para requisitos de curto prazo, mas podem ser encerradas se a AWS precisar da capacidade de volta. 'Dedicated Instance' é incorreto, pois são instâncias EC2 que rodam em hardware dedicado a um único cliente."
    },
    {
      "id": 222,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS pode ser usado para converter arquivos de vídeo e áudio de seu formato de origem em versões que serão reproduzidas em dispositivos como smartphones, tablets e PCs?",
      "options": [
        {
          "option": "Elastic Transcoder",
          "isCorrect": true
        },
        {
          "option": "Elastic Beanstalk",
          "isCorrect": false
        },
        {
          "option": "Elastic Load Balancer",
          "isCorrect": false
        },
        {
          "option": "Auto Scaling",
          "isCorrect": false
        }
      ],
      "comments": "Amazon Elastic Transcoder é uma maneira altamente escalável, fácil de usar e econômica para desenvolvedores e empresas converterem (ou 'transcodificarem') arquivos de vídeo e áudio de seu formato de origem em versões que serão reproduzidas em dispositivos como smartphones, tablets e PCs. 'Elastic Beanstalk' é incorreto, pois é usado para implantar e gerenciar rapidamente aplicações na nuvem AWS. 'Elastic Load Balancer' é incorreto, pois é usado para distribuir conexões de entrada para instâncias EC2. 'Auto Scaling' é incorreto, pois é usado para garantir automaticamente o número certo de instâncias EC2 para atender à carga atual."
    },
    {
      "id": 223,
      "isMultipleChoice": false,
      "question": "Qual serviço pode ser usado para ajudá-lo a migrar bancos de dados para a AWS de forma rápida e segura?",
      "options": [
        {
          "option": "AWS Key Management Service (KMS)",
          "isCorrect": false
        },
        {
          "option": "AWS Server Management Service (SMS)",
          "isCorrect": false
        },
        {
          "option": "AWS Database Migration Service (DMS)",
          "isCorrect": true
        },
        {
          "option": "AWS DataSync",
          "isCorrect": false
        }
      ],
      "comments": "AWS Database Migration Service é usado para migrar bancos de dados para a AWS de forma rápida e segura. O banco de dados de origem permanece totalmente operacional durante a migração, minimizando o tempo de inatividade para aplicativos que dependem do banco de dados. O AWS Database Migration Service pode migrar dados de e para a maioria dos bancos de dados comerciais e de código aberto amplamente utilizados. 'AWS Server Management Service (SMS)' é incorreto, pois é usado para migrar máquinas virtuais, não bancos de dados. 'AWS Key Management Service (KMS)' é incorreto, pois é usado para gerenciar chaves de criptografia. 'AWS DataSync' é incorreto, pois é usado para migrar dados de dispositivos de armazenamento conectados à rede (NAS) para a AWS, não para bancos de dados."
    },
    {
      "id": 224,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS é usado para habilitar a autenticação multifator?",
      "options": [
        {
          "option": "Amazon STS",
          "isCorrect": false
        },
        {
          "option": "AWS IAM",
          "isCorrect": true
        },
        {
          "option": "Amazon EC2",
          "isCorrect": false
        },
        {
          "option": "AWS KMS",
          "isCorrect": false
        }
      ],
      "comments": "O serviço de gerenciamento de identidade e acesso (IAM) é usado para controlar de forma segura o acesso individual e em grupo aos recursos da AWS. O IAM também pode ser usado para gerenciar a autenticação multifator (MFA). Com o MFA, você adiciona um fator adicional de autenticação, como um dispositivo Google Authenticator. Isso é 'algo que você tem' e é usado com sua senha 'algo que você sabe'. 'AWS IAM' é a resposta correta. 'Amazon STS' é incorreto. O AWS Security Token Service (STS) é um serviço web que permite solicitar credenciais temporárias e de privilégio limitado para usuários IAM ou para usuários que você autentica (usuários federados). 'Amazon EC2' é incorreto. Amazon EC2 é usado para executar instâncias de sistemas operacionais na nuvem. 'AWS KMS' é incorreto. O AWS Key Management Service (KMS) é um serviço gerenciado que facilita a criação e o controle das chaves de criptografia usadas para criptografar seus dados."
    },
    {
      "id": 225,
      "isMultipleChoice": true,
      "question": "Quais benefícios são fornecidos pelo Amazon CloudFront? (Selecione DUAS)",
      "options": [
        {
          "option": "Permite registrar nomes de domínio",
          "isCorrect": false
        },
        {
          "option": "Proteção contra ataques de Distributed Denial of Service (DDoS) embutida",
          "isCorrect": true
        },
        {
          "option": "Usado para permitir que instâncias de sub-rede privada acessem a Internet",
          "isCorrect": false
        },
        {
          "option": "O conteúdo é armazenado em cache em Edge Locations para distribuição rápida aos clientes",
          "isCorrect": true
        },
        {
          "option": "Fornece um serviço DNS distribuído mundialmente",
          "isCorrect": false
        }
      ],
      "comments": "O CloudFront é uma rede de entrega de conteúdo (CDN) que permite armazenar (cache) seu conteúdo em 'edge locations' localizadas ao redor do mundo. Isso permite que os clientes acessem o conteúdo mais rapidamente e fornece segurança contra ataques DDoS. O CloudFront pode ser usado para dados, vídeos, aplicativos e APIs. Benefícios incluem:. - Cache de conteúdo em Edge Location para distribuição rápida aos clientes. - Proteção contra ataques de Distributed Denial of Service (DDoS) embutida. - Integra-se com muitos serviços da AWS (S3, EC2, ELB, Route 53, Lambda). 'Proteção contra ataques de Distributed Denial of Service (DDoS) embutida' e 'O conteúdo é armazenado em cache em Edge Locations para distribuição rápida aos clientes' são respostas corretas. 'Permite registrar nomes de domínio' é incorreto. O Amazon Route 53 pode ser usado para registrar nomes de domínio. 'Usado para permitir que instâncias de sub-rede privada acessem a Internet' é incorreto. 'Fornece um serviço DNS distribuído mundialmente' é incorreto. O Amazon Route 53 fornece um serviço DNS distribuído mundialmente."
    },
    {
      "id": 226,
      "isMultipleChoice": false,
      "question": "Qual plano de suporte da AWS você deve usar se precisar de um tempo de resposta de < 15 minutos para uma falha crítica de sistema de negócios?",
      "options": [
        {
          "option": "Basic",
          "isCorrect": false
        },
        {
          "option": "Developer",
          "isCorrect": false
        },
        {
          "option": "Business",
          "isCorrect": false
        },
        {
          "option": "Enterprise",
          "isCorrect": true
        }
      ],
      "comments": "Apenas o plano Enterprise oferece um tempo de resposta de < 15 minutos para a falha de um sistema crítico de negócios. Tanto o Business quanto o Enterprise oferecem tempo de resposta de < 1 hora para a falha de um sistema de produção. 'Enterprise' é a resposta correta. 'Business' é incorreto conforme descrito acima. 'Basic' é incorreto conforme descrito acima. 'Developer' é incorreto conforme descrito acima."
    },
    {
      "id": 227,
      "isMultipleChoice": false,
      "question": "Qual recurso você pode usar para conceder acesso de leitura/escrita a um bucket do Amazon S3?",
      "options": [
        {
          "option": "IAM Role",
          "isCorrect": false
        },
        {
          "option": "IAM Policy",
          "isCorrect": true
        },
        {
          "option": "IAM Group",
          "isCorrect": false
        },
        {
          "option": "IAM User",
          "isCorrect": false
        }
      ],
      "comments": "As políticas de gerenciamento de identidade e acesso (IAM) são documentos que definem permissões e podem ser aplicadas a usuários, grupos e funções. As políticas IAM podem ser escritas para conceder acesso a buckets do Amazon S3. 'IAM Policy' é a resposta correta. 'IAM Role' é incorreto. As funções IAM são criadas e então 'assumidas' por entidades confiáveis e definem um conjunto de permissões para fazer solicitações de serviços AWS. 'IAM Group' é incorreto: Grupos IAM são coleções de usuários e têm políticas anexadas a eles. 'IAM User' é incorreto: Um usuário IAM é uma entidade que representa uma pessoa ou serviço."
    },
    {
      "id": 228,
      "isMultipleChoice": false,
      "question": "Como uma organização pode comparar o custo de execução de aplicações em um ambiente on-premise ou de colocation com a nuvem AWS?",
      "options": [
        {
          "option": "AWS Budgets",
          "isCorrect": false
        },
        {
          "option": "AWS Simple Monthly Calculator",
          "isCorrect": false
        },
        {
          "option": "TCO Calculator",
          "isCorrect": true
        },
        {
          "option": "AWS Cost Explorer",
          "isCorrect": false
        }
      ],
      "comments": "O TCO Calculator (Total Cost Ownership) é uma ferramenta gratuita fornecida pela AWS que permite estimar as economias de custo ao usar a nuvem AWS em comparação com o uso de um data center on-premise. O TCO Calculator pode comparar o custo de suas aplicações em um ambiente on-premise ou de hospedagem tradicional com a AWS. Você descreve a configuração do seu ambiente on-premise ou de hospedagem para produzir uma comparação detalhada de custos com a AWS. 'TCO Calculator' é a resposta correta. 'AWS Budgets' é incorreto: AWS Budgets permite definir orçamentos personalizados que alertam quando seus custos ou uso excedem (ou estão previstos para exceder) o valor orçado. 'AWS Simple Monthly Calculator' é incorreto: O AWS Simple Monthly Calculator ajuda clientes e prospects a estimar sua fatura mensal da AWS de forma mais eficiente. 'AWS Cost Explorer' é incorreto: O AWS Cost Explorer é uma ferramenta gratuita que permite visualizar gráficos de seus custos, você pode visualizar dados de custo dos últimos 13 meses e prever quanto provavelmente gastará nos próximos três meses."
    },
    {
      "id": 229,
      "isMultipleChoice": false,
      "question": "Qual afirmação abaixo está incorreta em relação aos Network ACLs?",
      "options": [
        {
          "option": "Eles operam no nível da Zona de Disponibilidade",
          "isCorrect": true
        },
        {
          "option": "Eles suportam regras de permitir e negar",
          "isCorrect": false
        },
        {
          "option": "Eles são sem estado",
          "isCorrect": false
        },
        {
          "option": "Eles processam regras em ordem",
          "isCorrect": false
        }
      ],
      "comments": "Um Network Access Control List (ACL) é uma camada opcional de segurança para seu VPC que atua como um firewall para controlar o tráfego de entrada e saída de uma ou mais sub-redes. Network ACLs operam no nível da sub-rede, não no nível da zona de disponibilidade. 'Eles operam no nível da Zona de Disponibilidade' é a resposta correta. 'Eles suportam regras de permitir e negar' é incorreto, pois esta afirmação é verdadeira. 'Eles são sem estado' é incorreto, pois esta afirmação é verdadeira. 'Eles processam regras em ordem' é incorreto, pois esta afirmação é verdadeira."
    },
    {
      "id": 230,
      "isMultipleChoice": false,
      "question": "Qual afirmação abaixo está incorreta em relação aos Security Groups?",
      "options": [
        {
          "option": "Eles operam no nível da instância",
          "isCorrect": false
        },
        {
          "option": "Eles suportam apenas regras de permitir",
          "isCorrect": false
        },
        {
          "option": "Eles são sem estado",
          "isCorrect": true
        },
        {
          "option": "Eles avaliam todas as regras antes de tomar uma decisão",
          "isCorrect": false
        }
      ],
      "comments": "Um Security Group atua como um firewall virtual para sua instância, controlando o tráfego de entrada e saída. Os Security Groups são stateful, o que significa que se o tráfego é permitido em uma direção, o tráfego de retorno é automaticamente permitido, independentemente de haver uma regra correspondente para o tráfego. 'Eles são sem estado' é a resposta correta. 'Eles operam no nível da instância' é incorreto, pois esta afirmação é verdadeira. 'Eles suportam apenas regras de permitir' é incorreto, pois esta afirmação é verdadeira. 'Eles avaliam todas as regras antes de tomar uma decisão' é incorreto, pois esta afirmação é verdadeira."
    },
    {
      "id": 231,
      "isMultipleChoice": true,
      "question": "Quais das seguintes são características do Amazon CloudWatch? (Selecione DUAS)",
      "options": [
        {
          "option": "É usado para obter visibilidade do uso de recursos em todo o sistema",
          "isCorrect": true
        },
        {
          "option": "Registra atividades de conta e eventos de serviço da maioria dos serviços AWS",
          "isCorrect": false
        },
        {
          "option": "É usado para auditoria de chamadas de API",
          "isCorrect": false
        },
        {
          "option": "Pode ser acessado via API, interface de linha de comando, SDKs da AWS e o Console de Gerenciamento da AWS",
          "isCorrect": true
        },
        {
          "option": "Fornece visibilidade das atividades do usuário registrando ações realizadas na sua conta",
          "isCorrect": false
        }
      ],
      "comments": "Amazon CloudWatch é um serviço de monitoramento para recursos da nuvem AWS e as aplicações que você executa na AWS. CloudWatch é para monitoramento de desempenho, enquanto CloudTrail é para auditoria. CloudWatch é usado para coletar e rastrear métricas, coletar e monitorar arquivos de log e definir alarmes. 'É usado para obter visibilidade do uso de recursos em todo o sistema' e 'Pode ser acessado via API, interface de linha de comando, SDKs da AWS e o Console de Gerenciamento da AWS' são respostas corretas. 'Registra atividades de conta e eventos de serviço da maioria dos serviços AWS' é incorreto, pois isso descreve o AWS CloudTrail. 'É usado para auditoria de chamadas de API' é incorreto, pois isso descreve o AWS CloudTrail. 'Fornece visibilidade das atividades do usuário registrando ações realizadas na sua conta' é incorreto, pois isso descreve o AWS CloudTrail."
    },
    {
      "id": 232,
      "isMultipleChoice": false,
      "question": "Qual prática recomendada de arquitetura visa reduzir as interdependências entre serviços?",
      "options": [
        {
          "option": "Serviços, Não Servidores",
          "isCorrect": false
        },
        {
          "option": "Remover Pontos Únicos de Falha",
          "isCorrect": false
        },
        {
          "option": "Automação",
          "isCorrect": false
        },
        {
          "option": "Acoplamento Fraco",
          "isCorrect": true
        }
      ],
      "comments": "À medida que a complexidade das aplicações aumenta, um atributo desejável de um sistema de TI é que ele possa ser dividido em componentes menores e fracamente acoplados. Isso significa que os sistemas de TI devem ser projetados de forma a reduzir as interdependências — uma mudança ou falha em um componente não deve se propagar para outros componentes. O conceito de acoplamento fraco inclui 'interfaces bem definidas', que reduzem as interdependências em um sistema, permitindo a interação apenas por meio de interfaces específicas e agnósticas de tecnologia (por exemplo, APIs RESTful). 'Acoplamento Fraco' é a resposta correta. 'Serviços, Não Servidores' é incorreto. Esta prática recomendada incentiva o uso de uma variedade maior de serviços AWS em suas arquiteturas de aplicação. 'Remover Pontos Únicos de Falha' é incorreto. Esta prática recomendada visa aumentar a disponibilidade do sistema. 'Automação' é incorreto. Esta prática recomendada incentiva o uso de automação para eficiência e consistência."
    },
    {
      "id": 233,
      "isMultipleChoice": false,
      "question": "Qual serviço permite que você execute código como funções sem precisar provisionar ou gerenciar servidores?",
      "options": [
        {
          "option": "Amazon EC2",
          "isCorrect": false
        },
        {
          "option": "AWS CodeDeploy",
          "isCorrect": false
        },
        {
          "option": "AWS Lambda",
          "isCorrect": true
        },
        {
          "option": "Amazon EKS",
          "isCorrect": false
        }
      ],
      "comments": "AWS Lambda é um serviço de computação sem servidor que executa seu código em resposta a eventos e gerencia automaticamente os recursos de computação subjacentes para você. Lambda executa seu código em uma infraestrutura de computação de alta disponibilidade e realiza toda a administração dos recursos de computação, incluindo manutenção de servidor e sistema operacional, provisionamento de capacidade e escalonamento automático, implantação de patches de código e segurança, e monitoramento e registro de código. Tudo o que você precisa fazer é fornecer o código. 'AWS Lambda' é a resposta correta. 'Amazon EC2' é incorreto, pois com o Amazon EC2 você deve gerenciar a instância e o sistema operacional. 'AWS CodeDeploy' é incorreto, pois é um serviço de implantação totalmente gerenciado que automatiza implantações de software para uma variedade de serviços de computação, como Amazon EC2, AWS Lambda e seus servidores locais. 'Amazon EKS' é incorreto, pois é um serviço gerenciado que facilita a execução do Kubernetes na AWS sem precisar configurar ou manter seu próprio plano de controle do Kubernetes."
    },
    {
      "id": 234,
      "isMultipleChoice": true,
      "question": "Quais benefícios o Amazon EC2 oferece em relação ao uso de servidores não baseados em nuvem? (Selecione DUAS)",
      "options": [
        {
          "option": "Controle completo da camada de hipervisor",
          "isCorrect": false
        },
        {
          "option": "Computação elástica em escala web",
          "isCorrect": true
        },
        {
          "option": "Barato",
          "isCorrect": true
        },
        {
          "option": "Tolerância a falhas",
          "isCorrect": false
        },
        {
          "option": "Alta disponibilidade com um SLA de 99.999%",
          "isCorrect": false
        }
      ],
      "comments": "Computação elástica em escala web – você pode aumentar ou diminuir a capacidade em minutos, não horas, e comissionar de uma a milhares de instâncias simultaneamente. Barato – a Amazon repassa os benefícios financeiros de escala cobrando taxas muito baixas e com base na capacidade consumida. 'Computação elástica em escala web' e 'Barato' são respostas corretas. 'Tolerância a falhas' é incorreto - A Amazon não oferece tolerância a falhas para EC2, você precisa projetar isso em sua pilha de aplicativos (e assumir que as coisas falharão). 'Alta disponibilidade com um SLA de 99.999%' é incorreto - A AWS fornece um SLA para EC2 que afirma que os serviços estarão disponíveis em cada região da AWS com uma porcentagem de tempo de atividade mensal de pelo menos 99.99%. 'Controle completo da camada de hipervisor' é incorreto - O Amazon EC2 não fornece nenhum controle do hipervisor ou da infraestrutura de hardware subjacente."
    },
    {
      "id": 235,
      "isMultipleChoice": false,
      "question": "Qual é a opção de preço do EC2 mais econômica para usar em uma carga de trabalho não crítica durante a noite?",
      "options": [
        {
          "option": "Sob demanda",
          "isCorrect": false
        },
        {
          "option": "Spot",
          "isCorrect": true
        },
        {
          "option": "Instância Reservada",
          "isCorrect": false
        },
        {
          "option": "Host Dedicado",
          "isCorrect": false
        }
      ],
      "comments": "As instâncias Spot são boas para requisitos de curto prazo, pois podem ser muito econômicas. No entanto, às vezes a AWS pode encerrar sua instância quando precisar da capacidade de volta. Esta é uma boa opção para cargas de trabalho não críticas que podem ser encerradas sem perda de dados. 'Spot' é a resposta correta. 'Sob demanda' é incorreto. Sob demanda não é a opção mais econômica. 'Instância Reservada' é incorreto. Instâncias reservadas são boas para requisitos estáticos de longo prazo, pois você deve se comprometer por 1 ou 3 anos em troca de um desconto decente. 'Host Dedicado' é incorreto. Hosts dedicados fornecem um servidor completo dedicado a um único cliente e, portanto, são caros."
    },
    {
      "id": 236,
      "isMultipleChoice": false,
      "question": "Qual é o plano de suporte mais econômico que deve ser selecionado para fornecer pelo menos um tempo de resposta de 1 hora para uma falha em um sistema de produção?",
      "options": [
        { "option": "Basic", "isCorrect": false },
        { "option": "Developer", "isCorrect": false },
        { "option": "Business", "isCorrect": true },
        { "option": "Enterprise", "isCorrect": false }
      ],
      "comments": "O plano de suporte Business fornece tempos de resposta de menos de 1 hora para uma falha em um sistema de produção. 'Business' é a resposta correta. 'Basic' é incorreto. Basic não fornece suporte técnico. 'Developer' é incorreto. Developer fornece acesso durante o horário comercial via e-mail. 'Enterprise' é incorreto. Enterprise fornece tempos de resposta de menos de 1 hora para uma falha em um sistema de produção, mas é mais caro."
    },
    {
      "id": 237,
      "isMultipleChoice": true,
      "question": "No modelo de responsabilidade compartilhada, quais são exemplos de controles compartilhados? (Selecione DUAS)",
      "options": [
        { "option": "Gerenciamento de patches", "isCorrect": true },
        { "option": "Correção de sistemas de armazenamento", "isCorrect": false },
        { "option": "Físico e ambiental", "isCorrect": false },
        { "option": "Gerenciamento de configuração", "isCorrect": true },
        { "option": "Proteção de serviços e comunicações", "isCorrect": false }
      ],
      "comments": "Controles Compartilhados – Controles que se aplicam tanto à camada de infraestrutura quanto às camadas do cliente, mas em contextos ou perspectivas completamente separados. 'Gerenciamento de patches' é uma resposta correta. A AWS é responsável por corrigir e corrigir falhas na infraestrutura, mas os clientes são responsáveis por corrigir seu sistema operacional convidado e aplicativos. 'Gerenciamento de configuração' é também uma resposta correta. A AWS mantém a configuração de seus dispositivos de infraestrutura, mas um cliente é responsável por configurar seus próprios sistemas operacionais convidados, bancos de dados e aplicativos. 'Correção de sistemas de armazenamento' é incorreto - A correção do sistema de armazenamento é uma responsabilidade da AWS. 'Físico e ambiental' é incorreto - Controles físicos e ambientais são um exemplo de controle herdado (um cliente herda totalmente da AWS). 'Proteção de serviços e comunicações' é incorreto - Proteção de Serviço e Comunicações é um exemplo de controle específico do cliente."
    },
    {
      "id": 238,
      "isMultipleChoice": true,
      "question": "Para quais serviços a Amazon não cobra dos clientes? (Selecione DUAS)",
      "options": [
        { "option": "Amazon VPC", "isCorrect": true },
        { "option": "Amazon EBS", "isCorrect": false },
        { "option": "Amazon CloudFormation", "isCorrect": true },
        { "option": "Amazon S3", "isCorrect": false },
        { "option": "Amazon SNS", "isCorrect": false }
      ],
      "comments": "Amazon VPC e CloudFormation são gratuitos, no entanto, no caso do CloudFormation, você paga pelos recursos que ele cria. Todos os outros serviços são cobrados. 'Amazon VPC' é uma resposta correta. 'Amazon CloudFormation' é também uma resposta correta. 'Amazon EBS' é incorreto, pois é um serviço cobrado. 'Amazon S3' é incorreto, pois é um serviço cobrado. 'Amazon SNS' é incorreto, pois é um serviço cobrado."
    },
    {
      "id": 239,
      "isMultipleChoice": false,
      "question": "Qual serviço pode ser usado para construir e integrar aplicações distribuídas e fracamente acopladas?",
      "options": [
        { "option": "Amazon EBS", "isCorrect": false },
        { "option": "Amazon SNS", "isCorrect": true },
        { "option": "Amazon EFS", "isCorrect": false },
        { "option": "Amazon RDS", "isCorrect": false }
      ],
      "comments": "Amazon Simple Notification Service (Amazon SNS) é um serviço web que facilita a configuração, operação e envio de notificações a partir da nuvem. Amazon SNS é usado para construir e integrar aplicações distribuídas e fracamente acopladas. 'Amazon SNS' é a resposta correta. 'Amazon EBS' é incorreto. Amazon Elastic Block Storage (EBS) fornece volumes de armazenamento para instâncias EC2. 'Amazon EFS' é incorreto. Amazon Elastic File System (EFS) fornece um sistema de arquivos NFS para uso por instâncias EC2. 'Amazon RDS' é incorreto. Amazon Relational Database Service (RDS) fornece um serviço de banco de dados relacional gerenciado."
    },
    {
      "id": 240,
      "isMultipleChoice": false,
      "question": "O que você pode usar para conectar rapidamente seu escritório de forma segura ao seu Amazon VPC?",
      "options": [
        { "option": "Route Table", "isCorrect": false },
        { "option": "Internet Gateway", "isCorrect": false },
        { "option": "Direct Connect", "isCorrect": false },
        { "option": "AWS managed VPN", "isCorrect": true }
      ],
      "comments": "Uma VPN gerenciada pela AWS pode ser usada para conectar rapidamente um escritório a um Amazon VPC. Um Amazon VPC oferece a opção de criar uma conexão VPN IPsec entre redes de clientes remotos e seu Amazon VPC pela internet. Considere essa abordagem quando quiser aproveitar um endpoint VPN gerenciado pela AWS que inclui redundância e failover automáticos de múltiplos data centers integrados ao lado da AWS da conexão VPN. 'AWS managed VPN' é a resposta correta. 'Route Table' é incorreto. Uma Route Table faz parte de um VPC e é usada para controlar como o tráfego é roteado dentro do VPC. 'Internet Gateway' é incorreto. Um Internet Gateway é usado para conectar um subnet público à Internet. 'Direct Connect' é incorreto. AWS Direct Connect fornece conectividade de alta largura de banda e baixa latência, mas leva semanas a meses para ser configurado (e é muito mais caro)."
    },
    {
      "id": 241,
      "isMultipleChoice": false,
      "question": "Qual serviço de armazenamento permite conectar várias instâncias EC2 simultaneamente usando protocolos de nível de arquivo?",
      "options": [
        { "option": "Amazon S3", "isCorrect": false },
        { "option": "Amazon EBS", "isCorrect": false },
        { "option": "Amazon EFS", "isCorrect": true },
        { "option": "Amazon Glacier", "isCorrect": false }
      ],
      "comments": "Amazon Elastic File System permite conectar centenas ou milhares de instâncias EC2 simultaneamente e é acessado usando o protocolo NFS de nível de arquivo. 'Amazon EFS' é a resposta correta. 'Amazon S3' é incorreto. Amazon S3 é um sistema de armazenamento de objetos. 'Amazon EBS' é incorreto. Amazon Elastic Block Storage fornece volumes de nível de bloco para instâncias EC2 individuais (não é possível conectar várias instâncias a um único volume EBS). 'Amazon Glacier' é incorreto. Glacier é usado para arquivar objetos S3."
    },
    {
      "id": 242,
      "isMultipleChoice": false,
      "question": "Qual serviço registra a atividade de API na sua conta e entrega arquivos de log para um bucket do Amazon S3?",
      "options": [
        { "option": "Amazon CloudWatch", "isCorrect": false },
        { "option": "Amazon S3 Event Notifications", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": true },
        { "option": "Amazon CloudWatch Logs", "isCorrect": false }
      ],
      "comments": "AWS CloudTrail é um serviço web que registra a atividade feita na sua conta e entrega arquivos de log para um bucket do Amazon S3. CloudTrail é para auditoria, enquanto CloudWatch é para monitoramento de desempenho. 'AWS CloudTrail' é a resposta correta. 'Amazon CloudWatch' é incorreto, pois este serviço realiza monitoramento de desempenho, não auditoria de API. 'Amazon S3 Event Notifications' é incorreto. S3 Event Notifications é um recurso que notifica quando certos eventos acontecem em seus buckets S3, não registra atividade de API no nível da conta. 'Amazon CloudWatch Logs' é incorreto. Amazon CloudWatch Logs permite monitorar e solucionar problemas de seus sistemas e aplicações usando seus arquivos de log existentes."
    },
    {
      "id": 243,
      "isMultipleChoice": false,
      "question": "Qual tecnologia de armazenamento da AWS pode ser considerada um 'disco rígido virtual na nuvem'?",
      "options": [
        { "option": "Amazon Elastic File Storage (EFS) filesystem", "isCorrect": false },
        { "option": "Amazon Elastic Block Storage (EBS) volume", "isCorrect": true },
        { "option": "Amazon S3 object", "isCorrect": false },
        { "option": "Amazon Glacier archive", "isCorrect": false }
      ],
      "comments": "Um volume EBS é um dispositivo de armazenamento em bloco que é mais semelhante a um disco rígido virtual na nuvem, pois quando anexado a uma instância, aparece como um disco local que pode ter um sistema operacional instalado ou ser formatado e usado para qualquer outro propósito de armazenamento local. 'Amazon Elastic Block Storage (EBS) volume' é a resposta correta. 'Amazon Elastic File Storage (EFS) filesystem' é incorreto. Um sistema de arquivos EFS é montado sobre o protocolo NFS, que é um protocolo de nível de arquivo. Portanto, é um sistema de arquivos de rede, não um disco rígido virtual, e não pode ter um sistema operacional instalado ou ser formatado e usado como um disco localmente anexado. 'Amazon S3 object' é incorreto. S3 é um sistema de armazenamento de objetos e não pode ser montado e usado como um disco rígido virtual. 'Amazon Glacier archive' é incorreto. Glacier é uma solução de arquivamento onde você pode arquivar seus objetos S3 a um custo extremamente baixo."
    },
    {
      "id": 244,
      "isMultipleChoice": false,
      "question": "Uma empresa planeja criar uma arquitetura de nuvem híbrida. Qual tecnologia permitirá que eles criem uma nuvem híbrida?",
      "options": [
        { "option": "VPC Peering", "isCorrect": false },
        { "option": "Internet Gateway", "isCorrect": false },
        { "option": "AWS Direct Connect", "isCorrect": true },
        { "option": "Elastic Network Interface", "isCorrect": false }
      ],
      "comments": "AWS Direct Connect fornece uma conexão de baixa latência e alta largura de banda para conectar ambientes on-premise de clientes com a nuvem AWS, o que permite criar uma arquitetura de nuvem 'híbrida'. 'AWS Direct Connect' é a resposta correta. 'VPC Peering' é incorreto. VPC peering é uma forma de permitir roteamento entre VPCs em diferentes contas AWS. 'Internet Gateway' é incorreto. Um Internet Gateway é usado para conectar subnets públicas à Internet. 'Elastic Network Interface' é incorreto. Uma Elastic Network Interface (ENI) é um componente lógico de rede em um VPC que representa uma placa de rede virtual."
    },
    {
      "id": 245,
      "isMultipleChoice": false,
      "question": "Qual é o escopo de uma VPC dentro de uma região?",
      "options": [
        { "option": "Abrange todas as Zonas de Disponibilidade dentro da região", "isCorrect": true },
        { "option": "Abrange todas as Zonas de Disponibilidade globalmente", "isCorrect": false },
        { "option": "Pelo menos 2 subnets por região", "isCorrect": false },
        { "option": "Pelo menos 2 data centers por região", "isCorrect": false }
      ],
      "comments": "Uma Amazon Virtual Private Cloud (VPC) abrange todas as zonas de disponibilidade dentro de uma região. 'Abrange todas as Zonas de Disponibilidade dentro da região' é a resposta correta. 'Abrange todas as Zonas de Disponibilidade globalmente' é incorreto - As VPCs não abrangem regiões, você cria VPCs em cada região. 'Pelo menos 2 subnets por região' é incorreto - As VPCs não são limitadas por subnets, subnets são criadas dentro de AZs e você pode ter muitas subnets em uma AZ. 'Pelo menos 2 data centers por região' é incorreto - Uma AZ usa um ou mais data centers, a AWS não divulga os detalhes."
    },
    {
      "id": 246,
      "isMultipleChoice": true,
      "question": "Quais vantagens você obtém ao usar a nuvem AWS? (Selecione DUAS)",
      "options": [
        { "option": "Trocar despesa de capital por despesa variável", "isCorrect": true },
        { "option": "Parar de adivinhar sobre capacidade", "isCorrect": true },
        { "option": "Aumento de despesa de capital", "isCorrect": false },
        { "option": "Ganhar maior controle da camada de infraestrutura", "isCorrect": false },
        { "option": "Cumprir todos os programas de conformidade de segurança locais", "isCorrect": false }
      ],
      "comments": "As 6 vantagens da nuvem são: 1) Trocar despesa de capital por despesa variável, 2) Beneficiar-se de economias de escala massivas, 3) Parar de adivinhar sobre capacidade, 4) Aumentar velocidade e agilidade, 5) Parar de gastar dinheiro operando e mantendo data centers, 6) Ir global em minutos. Você não ganha maior controle da camada de infraestrutura, pois a AWS controla isso em grande parte, e embora a AWS seja compatível com muitos programas de conformidade de segurança, nem todos os programas em todos os países locais serão incluídos. 'Trocar despesa de capital por despesa variável' é uma resposta correta. 'Parar de adivinhar sobre capacidade' é uma resposta correta. 'Aumento de despesa de capital' é incorreto, pois você deve reduzir sua despesa de capital ao mover-se para a nuvem. 'Ganhar maior controle da camada de infraestrutura' é incorreto, pois você não ganha controle da camada de infraestrutura, você perde esse controle ao mover-se de on-premises para a nuvem AWS. 'Cumprir todos os programas de conformidade de segurança locais' é incorreto, pois a AWS não cumpre todos os programas de conformidade de segurança em todo o mundo."
    },
    {
      "id": 247,
      "isMultipleChoice": false,
      "question": "Qual ferramenta permite visualizar seus padrões de uso ao longo do tempo e identificar seus principais fatores de custo?",
      "options": [
        { "option": "AWS Simple Monthly Calculator", "isCorrect": false },
        { "option": "Total Cost of Ownership (TCO) Calculator", "isCorrect": false },
        { "option": "AWS Cost Explorer", "isCorrect": true },
        { "option": "AWS Budgets", "isCorrect": false }
      ],
      "comments": "O AWS Cost Explorer é uma ferramenta gratuita que permite visualizar gráficos de seus custos. Você pode ver dados de custo dos últimos 13 meses e prever quanto provavelmente gastará nos próximos três meses. O Cost Explorer pode ser usado para descobrir padrões em quanto você gasta em recursos da AWS ao longo do tempo e identificar áreas problemáticas de custo. 'AWS Cost Explorer' é a resposta correta. 'AWS Simple Monthly Calculator' é incorreto, pois ajuda a estimar a fatura mensal da AWS. 'Total Cost of Ownership (TCO) Calculator' é incorreto, pois estima as economias de custo ao usar a AWS em comparação com um data center on-premise. 'AWS Budgets' é incorreto, pois permite definir orçamentos personalizados que alertam quando seus custos ou uso excedem o valor orçado."
    },
    {
      "id": 248,
      "isMultipleChoice": false,
      "question": "Qual serviço suporta a resolução de nomes de domínio públicos para endereços IP ou recursos da AWS?",
      "options": [
        { "option": "Amazon Route 53", "isCorrect": true },
        { "option": "Amazon CloudFront", "isCorrect": false },
        { "option": "Amazon SNS", "isCorrect": false },
        { "option": "Hosted Zones", "isCorrect": false }
      ],
      "comments": "O Amazon Route 53 é um serviço de Sistema de Nomes de Domínio (DNS) altamente disponível e escalável usando zonas hospedadas. Ele também pode ser usado para registro de domínio, verificações de integridade e fluxo de tráfego. 'Amazon Route 53' é a resposta correta. 'Amazon CloudFront' é incorreto, pois é uma rede de entrega de conteúdo (CDN). 'Amazon SNS' é incorreto, pois é usado para enviar notificações. 'Hosted Zones' é incorreto, pois é uma coleção de registros para um domínio especificado no Route 53."
    },
    {
      "id": 249,
      "isMultipleChoice": true,
      "question": "Quais tipos de políticas de preços a AWS oferece? (Selecione DUAS)",
      "options": [
        { "option": "Pay-as-you-go", "isCorrect": true },
        { "option": "Enterprise license agreement (ELA)", "isCorrect": false },
        { "option": "Non-peak hour discounts", "isCorrect": false },
        { "option": "Global usage discounts", "isCorrect": false },
        { "option": "Save when you reserve", "isCorrect": true }
      ],
      "comments": "A precificação da Amazon inclui opções de pay-as-you-go, economizar quando você reserva e pagar menos usando mais. 'Pay-as-you-go' e 'Save when you reserve' são respostas corretas. 'Enterprise license agreement (ELA)' é incorreto, pois a Amazon não oferece ELAs. 'Non-peak hour discounts' é incorreto, pois a Amazon não oferece descontos fora do horário de pico. 'Global usage discounts' é incorreto, pois não há descontos de uso global."
    },
    {
      "id": 250,
      "isMultipleChoice": true,
      "question": "O serviço AWS Identity and Access Management (IAM) pode ser usado para gerenciar quais objetos? (Selecione DUAS)",
      "options": [
        { "option": "Security groups", "isCorrect": false },
        { "option": "Access policies", "isCorrect": true },
        { "option": "Roles", "isCorrect": true },
        { "option": "Network ACLs", "isCorrect": false },
        { "option": "Key pairs", "isCorrect": false }
      ],
      "comments": "As políticas de acesso são objetos que você anexa a entidades e recursos para definir suas permissões. Os papéis são criados e então 'assumidos' por entidades confiáveis e definem um conjunto de permissões para fazer solicitações de serviços AWS. 'Access policies' e 'Roles' são respostas corretas. 'Security groups' é incorreto, pois são usados como firewalls em nível de instância. 'Network ACLs' é incorreto, pois são usados como firewalls em nível de sub-rede. 'Key pairs' é incorreto, pois são criados no EC2 e usados para login em instâncias EC2."
    },
    {
      "id": 251,
      "isMultipleChoice": true,
      "question": "Sob o modelo de responsabilidade compartilhada da AWS, pelo que o cliente é responsável? (Selecione DUAS)",
      "options": [
        { "option": "Physical security of the data center", "isCorrect": false },
        { "option": "Replacement and disposal of disk drives", "isCorrect": false },
        { "option": "Configuration of security groups", "isCorrect": true },
        { "option": "Patch management of infrastructure", "isCorrect": false },
        { "option": "Encryption of customer data", "isCorrect": true }
      ],
      "comments": "A AWS é responsável pela 'Segurança da Nuvem' e os clientes são responsáveis pela 'Segurança na Nuvem'. Os clientes são responsáveis por itens como configuração de grupos de segurança, ACLs de rede, atualização de seus sistemas operacionais e criptografia de seus dados. 'Configuration of security groups' e 'Encryption of customer data' são respostas corretas. 'Physical security of the data center', 'Replacement and disposal of disk drives' e 'Patch management of infrastructure' são responsabilidades da AWS."
    },
    {
      "id": 252,
      "isMultipleChoice": true,
      "question": "Qual das afirmações abaixo é precisa em relação aos buckets do Amazon S3? (Selecione DUAS)",
      "options": [
        { "option": "Bucket names must be unique regionally", "isCorrect": false },
        { "option": "Buckets are replicated globally", "isCorrect": false },
        { "option": "Bucket names must be unique globally", "isCorrect": true },
        { "option": "Buckets are region-specific", "isCorrect": true },
        { "option": "Buckets can contain other buckets", "isCorrect": false }
      ],
      "comments": "O Amazon S3 usa um namespace universal (global), o que significa que os nomes dos buckets devem ser únicos globalmente. No entanto, você cria os buckets em uma região e os dados nunca saem dessa região, a menos que configurado explicitamente para fazê-lo através da replicação entre regiões (CRR - Cross-Region Replication). 'Bucket names must be unique globally' e 'Buckets are region-specific' são respostas corretas. 'Bucket names must be unique regionally' é incorreto, pois devem ser únicos globalmente. 'Buckets are replicated globally' é incorreto. Objetos dentro de um bucket são replicados dentro de uma região em várias AZs (exceto para a classe One-Zone IA). 'Buckets can contain other buckets' é incorreto, pois você não pode criar buckets aninhados."
    },
    {
      "id": 253,
      "isMultipleChoice": true,
      "question": "Quais considerações existem ao escolher qual região usar? (Selecione DUAS)",
      "options": [
        { "option": "Soberania de dados", "isCorrect": true },
        { "option": "Capacidade de armazenamento disponível", "isCorrect": false },
        { "option": "Latência", "isCorrect": true },
        { "option": "Preço na moeda local", "isCorrect": false },
        { "option": "Capacidade computacional disponível", "isCorrect": false }
      ],
      "comments": "Você pode escolher uma região para reduzir a latência, minimizar custos ou atender a requisitos regulatórios. A latência é o atraso causado principalmente pela distância. Isso significa que você deve escolher criar seus buckets em Regiões que estão mais próximas (fisicamente) de seus usuários. Alguns países ou indústrias têm regulamentos que exigem que os dados não saiam de uma jurisdição ou fronteira do país. Nesse caso, você simplesmente seleciona uma Região AWS de acordo."
    },
    {
      "id": 254,
      "isMultipleChoice": false,
      "question": "Qual serviço pode ser usado para rastrear o uso de CPU de uma instância EC2?",
      "options": [
        { "option": "Amazon CloudTrail", "isCorrect": false },
        { "option": "Amazon CloudFront", "isCorrect": false },
        { "option": "Amazon CloudFormation", "isCorrect": false },
        { "option": "Amazon CloudWatch", "isCorrect": true }
      ],
      "comments": "Amazon CloudWatch é um serviço de monitoramento para recursos de nuvem AWS e as aplicações que você executa na AWS. CloudWatch é para monitoramento de desempenho, enquanto CloudTrail é para auditoria."
    },
    {
      "id": 255,
      "isMultipleChoice": false,
      "question": "Qual serviço AWS permite que você se conecte ao armazenamento de servidores on-premises usando protocolos de arquivo padrão?",
      "options": [
        { "option": "Amazon S3", "isCorrect": false },
        { "option": "Amazon EBS", "isCorrect": false },
        { "option": "Amazon Glacier", "isCorrect": false },
        { "option": "Amazon EFS", "isCorrect": true }
      ],
      "comments": "EFS é um serviço totalmente gerenciado que facilita a configuração e o dimensionamento de armazenamento de arquivos na Nuvem Amazon. Os sistemas de arquivos EFS são montados usando o protocolo NFS (que é um protocolo de nível de arquivo). O acesso aos sistemas de arquivos EFS de servidores on-premises pode ser habilitado via Direct Connect ou AWS VPN."
    },
    {
      "id": 256,
      "isMultipleChoice": true,
      "question": "A infraestrutura global da AWS é composta por? (Selecione DUAS)",
      "options": [
        { "option": "Regions", "isCorrect": true },
        { "option": "Clusters", "isCorrect": false },
        { "option": "Fault Zones", "isCorrect": false },
        { "option": "Availability Zones", "isCorrect": true },
        { "option": "IP subnets", "isCorrect": false }
      ],
      "comments": "A infraestrutura global da AWS é construída em torno de Regiões e Zonas de Disponibilidade (AZs). Uma Região é uma localização física no mundo onde a AWS possui várias AZs. AZs consistem em um ou mais data centers discretos, cada um com energia, rede e conectividade redundantes, alojados em instalações separadas."
    },
    {
      "id": 257,
      "isMultipleChoice": true,
      "question": "Quais itens podem ser configurados a partir do console de gerenciamento do VPC? (Selecione DUAS)",
      "options": [
        { "option": "Subnets", "isCorrect": true },
        { "option": "Regions", "isCorrect": false },
        { "option": "Load Balancing", "isCorrect": false },
        { "option": "Auto Scaling", "isCorrect": false },
        { "option": "Security Groups", "isCorrect": true }
      ],
      "comments": "Subnets e Security Groups podem ser configurados a partir do console do VPC. 'Regions' não são configuradas, os recursos dentro das regiões são configurados. 'Load Balancing' é configurado a partir do console do EC2. 'Auto Scaling' é configurado a partir do console do EC2."
    },
    {
      "id": 258,
      "isMultipleChoice": true,
      "question": "Quais vantagens o uso do Amazon CloudFront proporciona? (Selecione DUAS)",
      "options": [
        { "option": "Uma conexão de rede privada para a nuvem AWS", "isCorrect": false },
        { "option": "Redução de latência", "isCorrect": true },
        { "option": "Implantação automatizada de recursos", "isCorrect": false },
        { "option": "Melhoria no desempenho para os usuários finais", "isCorrect": true },
        { "option": "Fornece serviços de computação serverless", "isCorrect": false }
      ],
      "comments": "O CloudFront é uma rede de entrega de conteúdo (CDN) que permite armazenar (cache) seu conteúdo em 'edge locations' ao redor do mundo. Isso permite que os clientes acessem o conteúdo mais rapidamente e fornece segurança contra ataques DDoS. O CloudFront pode ser usado para dados, vídeos, aplicativos e APIs. 'Redução de latência' e 'Melhoria no desempenho para os usuários finais' são as respostas corretas."
    },
    {
      "id": 259,
      "isMultipleChoice": false,
      "question": "Do que é composta uma zona de disponibilidade?",
      "options": [
        { "option": "Uma ou mais regiões", "isCorrect": false },
        { "option": "Um ou mais data centers em uma localização", "isCorrect": true },
        { "option": "Um conjunto de edge locations", "isCorrect": false },
        { "option": "Um conjunto de VPCs", "isCorrect": false }
      ],
      "comments": "Zonas de disponibilidade são compostas por um ou mais data centers em uma localização. Zonas de Disponibilidade são fisicamente separadas e isoladas umas das outras. AZs têm conexões de rede diretas, de baixa latência, alta taxa de transferência e redundantes entre si."
    },
    {
      "id": 260,
      "isMultipleChoice": false,
      "question": "Qual serviço AWS é usado principalmente para controle de versão de software?",
      "options": [
        { "option": "AWS CodeCommit", "isCorrect": true },
        { "option": "AWS CodeStar", "isCorrect": false },
        { "option": "AWS Cloud9", "isCorrect": false },
        { "option": "AWS CodeDeploy", "isCorrect": false }
      ],
      "comments": "AWS CodeCommit é um serviço de controle de versão totalmente gerenciado que hospeda repositórios Git seguros. Facilita a colaboração de equipes em código em um ecossistema seguro e altamente escalável. 'AWS CodeStar' é incorreto, pois é usado para desenvolver, construir e implantar aplicações rapidamente. 'AWS Cloud9' é um IDE baseado em nuvem. 'AWS CodeDeploy' é um serviço de implantação que automatiza implantações de aplicações."
    },
    {
      "id": 261,
      "isMultipleChoice": true,
      "question": "Quais serviços podem ser usados para integração assíncrona entre componentes de aplicação? (Selecione DUAS)",
      "options": [
        { "option": "Amazon SQS", "isCorrect": true },
        { "option": "AWS Step Functions", "isCorrect": true },
        { "option": "Amazon EC2 Auto Scaling", "isCorrect": false },
        { "option": "AWS CloudFormation", "isCorrect": false },
        { "option": "AWS Route 53", "isCorrect": false }
      ],
      "comments": "A integração assíncrona é uma forma de acoplamento frouxo entre serviços, adequada para interações que não precisam de resposta imediata. Amazon SQS fornece um barramento de mensagens durável e AWS Step Functions é um serviço de orquestração de fluxos de trabalho. 'Amazon EC2 Auto Scaling' é para escalonamento horizontal de instâncias EC2. 'AWS CloudFormation' automatiza a implantação de infraestrutura. 'AWS Route 53' é um serviço de DNS."
    },
    {
      "id": 262,
      "isMultipleChoice": false,
      "question": "Como a AWS auxilia as organizações com seus requisitos de capacidade?",
      "options": [
        { "option": "Com a AWS você só paga pelo que usa", "isCorrect": false },
        { "option": "Você não precisa adivinhar suas necessidades de capacidade", "isCorrect": true },
        { "option": "Você não possui a infraestrutura", "isCorrect": false },
        { "option": "Com a AWS você não paga por data centers", "isCorrect": false }
      ],
      "comments": "A capacidade de escalar sob demanda é a principal vantagem que ajuda as organizações a não superdimensionar ou subdimensionar seus recursos. 'Você não precisa adivinhar suas necessidades de capacidade' é a resposta correta. As outras opções são mais relacionadas a vantagens de custo."
    },
    {
      "id": 263,
      "isMultipleChoice": false,
      "question": "Qual estratégia pode ajudar na alocação de metadados aos recursos da AWS para rastreamento de custos e visibilidade?",
      "options": [
        { "option": "Tagging", "isCorrect": true },
        { "option": "Labelling", "isCorrect": false },
        { "option": "Access Control", "isCorrect": false },
        { "option": "Categorizing", "isCorrect": false }
      ],
      "comments": "A AWS permite que os clientes atribuam metadados aos seus recursos da AWS na forma de tags. Cada tag é um rótulo simples que consiste em uma chave definida pelo cliente e um valor opcional que pode facilitar o gerenciamento, a busca e o filtro de recursos. O AWS Cost Explorer e os relatórios de faturamento detalhados suportam a capacidade de detalhar os custos da AWS por tag. As outras opções estão incorretas, pois não são métodos de adicionar metadados a um recurso da AWS."
    },
    {
      "id": 264,
      "isMultipleChoice": false,
      "question": "Qual é o termo usado para descrever a ação de executar automaticamente scripts em instâncias Amazon EC2 quando lançadas para instalar software?",
      "options": [
        { "option": "Golden Images", "isCorrect": false },
        { "option": "Bootstrapping", "isCorrect": true },
        { "option": "Containerization", "isCorrect": false },
        { "option": "Workflow automation", "isCorrect": false }
      ],
      "comments": "Bootstrapping é a execução de ações automatizadas em serviços como EC2 e RDS. Isso geralmente é feito na forma de scripts que são executados quando as instâncias são lançadas. 'Golden Images' está incorreto. Golden Images são snapshots de volumes EBS pré-configurados que podem ser usados para lançar novas instâncias. 'Containerization' está incorreto. Containers são pacotes de software que rodam em uma imagem Docker. 'Workflow automation' está incorreto. Automação de fluxo de trabalho é um processo de orquestração de ações automatizadas."
    },
    {
      "id": 265,
      "isMultipleChoice": false,
      "question": "Qual das seguintes é um método de backup disponível na nuvem AWS?",
      "options": [
        { "option": "Amazon EBS Snapshots", "isCorrect": true },
        { "option": "Availability Zones", "isCorrect": false },
        { "option": "Amazon EFS File Systems", "isCorrect": false },
        { "option": "Amazon Route 53 Alias Record", "isCorrect": false }
      ],
      "comments": "Amazon Elastic Block Store (EBS) é um sistema de armazenamento baseado em blocos que fornece um 'disco rígido virtual na nuvem'. Você pode fazer backup de seus volumes EBS usando snapshots, que são cópias pontuais dos dados. 'Availability Zones' está incorreto. Zonas de Disponibilidade são parte da Infraestrutura Global da AWS e podem ser usadas para alta disponibilidade e tolerância a falhas, mas não são uma solução de backup. 'Amazon EFS File Systems' está incorreto. O Amazon Elastic File System (EFS) fornece armazenamento baseado em arquivos, mas não é um serviço de backup. 'Amazon Route 53 Alias Record' está incorreto. O Amazon Route 53 fornece um serviço de DNS e um registro Alias é um tipo de registro que pode mapear um nome de domínio público para um alvo de serviço AWS."
    },
    //SET 2 - 300
    {
      "id": 301,
      "isMultipleChoice": false,
      "question": "Qual painel da AWS exibe informações relevantes e oportunas para ajudar os usuários a gerenciar eventos em andamento e fornece notificações proativas para ajudar a planejar atividades agendadas?",
      "options": [
        { "option": "AWS Service Health Dashboard", "isCorrect": false },
        { "option": "AWS Personal Health Dashboard", "isCorrect": true },
        { "option": "AWS Trusted Advisor dashboard", "isCorrect": false },
        { "option": "Amazon CloudWatch dashboard", "isCorrect": false }
      ],
      "comments": "O AWS Personal Health Dashboard fornece alertas e orientações de remediação quando a AWS está enfrentando eventos que podem impactar você. Enquanto o Service Health Dashboard exibe o status geral dos serviços da AWS, o Personal Health Dashboard oferece uma visão personalizada do desempenho e disponibilidade dos serviços da AWS subjacentes aos seus recursos. O painel exibe informações relevantes e oportunas para ajudar a gerenciar eventos em andamento e fornece notificações proativas para ajudar a planejar atividades agendadas. Com o Personal Health Dashboard, os alertas são acionados por mudanças na saúde dos recursos da AWS, oferecendo visibilidade de eventos e orientação para ajudar a diagnosticar e resolver problemas rapidamente."
    },
    {
      "id": 302,
      "isMultipleChoice": false,
      "question": "Uma empresa tem uma aplicação com usuários na Austrália e na Alemanha. Toda a infraestrutura da empresa está atualmente provisionada na Região Europa (Frankfurt), e os usuários australianos estão experimentando alta latência. O que a empresa deve fazer para reduzir a latência?",
      "options": [
        { "option": "Implementar AWS Direct Connect para usuários na Austrália", "isCorrect": false },
        { "option": "Provisionar recursos na Região Ásia-Pacífico (Sydney) na Austrália", "isCorrect": true },
        { "option": "Usar AWS Transit Gateway para rotear rapidamente usuários da Austrália para a aplicação", "isCorrect": false },
        { "option": "Lançar instâncias adicionais do Amazon EC2 em Frankfurt para lidar com a demanda", "isCorrect": false }
      ],
      "comments": "A latência (tempos de resposta lentos) é experimentada quando os recursos estão distantes. A distância é o maior fator que causa latência. A opção mais fácil apresentada para resolver esta situação é colocar recursos mais próximos de onde os usuários estão. 'Provisionar recursos na Região Ásia-Pacífico (Sydney) na Austrália' é a resposta correta. 'Implementar AWS Direct Connect para usuários na Austrália' está incorreto. Direct Connect é uma conexão de rede privada da sua rede ou data center para uma Região AWS próxima. Isso não resolve os problemas de latência. 'Usar AWS Transit Gateway para rotear rapidamente usuários da Austrália para a aplicação' está incorreto. Este serviço é usado para conectar Amazon Virtual Private Clouds (VPCs) e redes on-premises a um único gateway para conectar múltiplos VPCs e redes on-premises. Isso não resolve os problemas de latência. 'Lançar instâncias adicionais do Amazon EC2 em Frankfurt para lidar com a demanda' está incorreto. A latência ainda será um problema mesmo com mais recursos em Frankfurt."
    },
    {
      "id": 303,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS um Cloud Practitioner deve usar para automatizar o gerenciamento de configuração usando Puppet?",
      "options": [
        { "option": "AWS Config", "isCorrect": false },
        { "option": "AWS OpsWorks", "isCorrect": true },
        { "option": "AWS CloudFormation", "isCorrect": false },
        { "option": "AWS Systems Manager", "isCorrect": false }
      ],
      "comments": "AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas de Chef e Puppet. Chef e Puppet são plataformas de automação que permitem usar código para automatizar as configurações dos seus servidores. OpsWorks permite que você use Chef e Puppet para automatizar como os servidores são configurados, implantados e gerenciados em suas instâncias Amazon EC2 ou em ambientes de computação on-premises. 'AWS OpsWorks' é a resposta correta. 'AWS Config' está incorreto. AWS Config é um serviço que permite avaliar, auditar e avaliar as configurações dos seus recursos AWS. 'AWS CloudFormation' está incorreto. AWS CloudFormation fornece uma linguagem comum para modelar e provisionar recursos AWS e de terceiros em seu ambiente de nuvem. 'AWS Systems Manager' está incorreto. AWS Systems Manager oferece visibilidade e controle da sua infraestrutura na AWS, fornecendo uma interface de usuário unificada para visualizar dados operacionais de vários serviços AWS e permitindo automatizar tarefas operacionais em seus recursos AWS."
    },
    {
      "id": 304,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS é usado para enviar mensagens de texto e email de aplicações distribuídas?",
      "options": [
        { "option": "Amazon Simple Notification Service (Amazon SNS)", "isCorrect": true },
        { "option": "Amazon Simple Email Service (Amazon SES)", "isCorrect": false },
        { "option": "Amazon Simple Workflow Service (Amazon SWF)", "isCorrect": false },
        { "option": "Amazon Simple Queue Service (Amazon SQS)", "isCorrect": false }
      ],
      "comments": "Amazon Simple Notification Service (SNS) é um serviço de mensagens pub/sub altamente disponível, durável, seguro e totalmente gerenciado que permite desacoplar microsserviços, sistemas distribuídos e aplicações serverless. Amazon SNS fornece tópicos para mensagens de alta taxa de transferência, baseadas em push, de muitos para muitos. Usando tópicos do Amazon SNS, seus sistemas publicadores podem distribuir mensagens para um grande número de endpoints de assinantes para processamento paralelo, incluindo filas Amazon SQS, funções AWS Lambda e webhooks HTTP/S. Além disso, o SNS pode ser usado para distribuir notificações para usuários finais usando push móvel, SMS e email. 'Amazon Simple Notification Service (Amazon SNS)' é a resposta correta. 'Amazon Simple Email Service (Amazon SES)' está incorreto. Este serviço é usado para enviar emails, mas não mensagens de texto SMS. 'Amazon Simple Workflow Service (Amazon SWF)' está incorreto. Amazon SWF ajuda desenvolvedores a construir, executar e escalar trabalhos em segundo plano que têm etapas paralelas ou sequenciais. 'Amazon Simple Queue Service (Amazon SQS)' está incorreto. Amazon SQS é um serviço de enfileiramento de mensagens totalmente gerenciado que permite desacoplar e escalar microsserviços, sistemas distribuídos e aplicações serverless."
    },
    {
      "id": 305,
      "isMultipleChoice": false,
      "question": "Qual serviço ou recurso da AWS permite que uma empresa receba uma única fatura mensal da AWS ao usar várias contas da AWS?",
      "options": [
        { "option": "Consolidated billing", "isCorrect": true },
        { "option": "Amazon Cloud Directory", "isCorrect": false },
        { "option": "AWS Cost Explorer", "isCorrect": false },
        { "option": "AWS Cost and Usage report", "isCorrect": false }
      ],
      "comments": "Você pode usar o recurso de faturamento consolidado no AWS Organizations para consolidar o faturamento e o pagamento de várias contas da AWS ou várias contas da Amazon Internet Services Pvt. Ltd (AISPL). Toda organização no AWS Organizations tem uma conta mestre (pagadora) que paga as cobranças de todas as contas membros (vinculadas). 'Consolidated billing' é a resposta correta. 'Amazon Cloud Directory' está incorreto. Cloud Directory é usado para criar diretórios nativos da nuvem. Isso não está relacionado ao faturamento. 'AWS Cost Explorer' está incorreto. AWS Cost Explorer tem uma interface fácil de usar que permite visualizar, entender e gerenciar seus custos e uso da AWS ao longo do tempo. Não centraliza o faturamento. 'AWS Cost and Usage report' está incorreto. O Relatório de Custos e Uso da AWS lista o uso da AWS para cada categoria de serviço usada por uma conta e seus usuários IAM em itens de linha horária ou diária, bem como quaisquer tags que você tenha ativado para fins de alocação de custos."
    },
    {
      "id": 306,
      "isMultipleChoice": false,
      "question": "Um usuário precisa de um relatório de avaliação de segurança automatizado que identifique acesso não intencional à rede para instâncias Amazon EC2 e vulnerabilidades nessas instâncias. Qual serviço da AWS fornecerá este relatório de avaliação?",
      "options": [
        { "option": "EC2 security groups", "isCorrect": false },
        { "option": "AWS Config", "isCorrect": false },
        { "option": "Amazon Macie", "isCorrect": false },
        { "option": "Amazon Inspector", "isCorrect": true }
      ],
      "comments": "Amazon Inspector é um serviço de avaliação de segurança automatizado que ajuda a melhorar a segurança e a conformidade de aplicações implantadas na AWS. Amazon Inspector avalia automaticamente as aplicações quanto à exposição, vulnerabilidades e desvios das melhores práticas. Após realizar uma avaliação, o Amazon Inspector produz uma lista detalhada de descobertas de segurança priorizadas por nível de severidade. Essas descobertas podem ser revisadas diretamente ou como parte de relatórios de avaliação detalhados disponíveis via console ou API do Amazon Inspector. 'Amazon Inspector' é a resposta correta. 'EC2 security groups' está incorreto. Grupos de segurança são firewalls em nível de instância usados para controlar o tráfego de rede que chega e sai das instâncias EC2. 'AWS Config' está incorreto. AWS Config é um serviço que permite avaliar, auditar e avaliar as configurações dos seus recursos AWS. 'Amazon Macie' está incorreto. Amazon Macie é um serviço de segurança de dados totalmente gerenciado que usa aprendizado de máquina e correspondência de padrões para descobrir e proteger dados sensíveis na AWS."
    },
    {
      "id": 307,
      "isMultipleChoice": false,
      "question": "Qual das seguintes opções descreve melhor uma Zona de Disponibilidade na Nuvem AWS?",
      "options": [
        { "option": "Um ou mais data centers físicos", "isCorrect": true },
        { "option": "Uma localização geográfica completamente isolada", "isCorrect": false },
        { "option": "Uma ou mais localizações de borda ao redor do mundo", "isCorrect": false },
        { "option": "Uma sub-rede para implantar recursos", "isCorrect": false }
      ],
      "comments": "Uma Zona de Disponibilidade (AZ) é um ou mais data centers discretos com energia, rede e conectividade redundantes em uma Região AWS. As AZs oferecem aos clientes a capacidade de operar aplicações de produção e bancos de dados que são mais altamente disponíveis, tolerantes a falhas e escaláveis do que seria possível a partir de um único data center. 'Um ou mais data centers físicos' é a resposta correta. 'Uma localização geográfica completamente isolada' está incorreto. Esta é uma descrição de uma Região AWS. 'Uma ou mais localizações de borda ao redor do mundo' está incorreto. Localizações de borda são usadas pelo Amazon CloudFront para cache de conteúdo. 'Uma sub-rede para implantar recursos' está incorreto. Sub-redes são criadas dentro das AZs."
    },
  
  {
    "id": 308,
    "isMultipleChoice": false,
    "question": "Uma empresa precisa de uma conexão consistente e dedicada entre recursos da AWS e um sistema on-premise. Qual serviço da AWS pode atender a esse requisito?",
    "options": [
      { "option": "AWS Direct Connect", "isCorrect": true },
      { "option": "AWS Managed VPN", "isCorrect": false },
      { "option": "Amazon Connect", "isCorrect": false },
      { "option": "AWS DataSync", "isCorrect": false }
    ],
    "comments": "Uma conexão AWS Direct Connect é um link privado e dedicado para a AWS. Como não utiliza a internet, o desempenho é consistente. 'AWS Direct Connect' é a resposta correta. 'AWS Managed VPN' está incorreto. Este serviço usa a internet pública, portanto, não é um link dedicado e o desempenho não será consistente. 'Amazon Connect' está incorreto. Amazon Connect é um contact center omnichannel na nuvem fácil de usar que ajuda as empresas a fornecer um serviço superior ao cliente a um custo menor. 'AWS DataSync' está incorreto. AWS DataSync facilita e acelera a movimentação de grandes quantidades de dados online entre armazenamento on-premises e Amazon S3, Amazon Elastic File System (Amazon EFS) ou Amazon FSx for Windows File Server."
  },
  {
    "id": 309,
    "isMultipleChoice": false,
    "question": "Qual serviço da AWS ajuda os clientes a atender aos requisitos de conformidade corporativa, contratual e regulatória para segurança de dados usando appliances de hardware dedicados dentro da Nuvem AWS?",
    "options": [
      { "option": "AWS Secrets Manager", "isCorrect": false },
      { "option": "AWS CloudHSM", "isCorrect": true },
      { "option": "AWS Key Management Service (AWS KMS)", "isCorrect": false },
      { "option": "AWS Directory Service", "isCorrect": false }
    ],
    "comments": "O serviço AWS CloudHSM ajuda a atender aos requisitos de conformidade corporativa, contratual e regulatória para segurança de dados usando instâncias de Módulo de Segurança de Hardware (HSM) dedicadas dentro da nuvem AWS. AWS CloudHSM permite que você gere e use facilmente suas próprias chaves de criptografia na Nuvem AWS. 'AWS CloudHSM' é a resposta correta. 'AWS Secrets Manager' está incorreto. AWS Secrets Manager permite que você gire, gerencie e recupere facilmente credenciais de banco de dados, chaves de API e outros segredos ao longo de seu ciclo de vida. 'AWS Key Management Service (AWS KMS)' está incorreto. Este serviço também está envolvido na criação e gerenciamento de chaves de criptografia, mas não usa hardware dedicado. 'AWS Directory Service' está incorreto. AWS Directory Service for Microsoft Active Directory, também conhecido como AWS Managed Microsoft AD, permite que suas cargas de trabalho cientes de diretório e recursos da AWS usem o Active Directory gerenciado na Nuvem AWS."
  },
  {
      "id": 310,
      "isMultipleChoice": false,
      "question": "Para que um Cloud Practitioner pode usar o AWS Total Cost of Ownership (TCO) Calculator?",
      "options": [
        { "option": "Gerar relatórios que detalham os custos de computação da AWS Cloud por duração, recurso ou tags", "isCorrect": false },
        { "option": "Estimar economias ao comparar a AWS Cloud com um ambiente on-premises", "isCorrect": true },
        { "option": "Estimar uma fatura mensal para os recursos da AWS Cloud que serão usados", "isCorrect": false },
        { "option": "Habilitar alertas de faturamento para monitorar os custos reais da AWS em comparação com os custos estimados", "isCorrect": false }
      ],
      "comments": "Os calculadores de TCO permitem estimar as economias de custo ao usar a AWS em comparação com on-premises e fornecem um conjunto detalhado de relatórios que podem ser usados em apresentações executivas. Os calculadores também oferecem a opção de modificar suposições que melhor atendem às necessidades do seu negócio. 'Estimar economias ao comparar a AWS Cloud com um ambiente on-premises' é a resposta correta. 'Gerar relatórios que detalham os custos de computação da AWS Cloud por duração, recurso ou tags' está incorreto. Isso descreve o AWS Cost & Usage Report. 'Estimar uma fatura mensal para os recursos da AWS Cloud que serão usados' está incorreto. Isso descreve o AWS Pricing Calculator (ou Simple Monthly Calculator). 'Habilitar alertas de faturamento para monitorar os custos reais da AWS em comparação com os custos estimados' está incorreto. Alertas de faturamento podem ser habilitados usando o Amazon CloudWatch."
    },
    {
      "id": 311,
      "isMultipleChoice": true,
      "question": "Qual das seguintes opções deve ser usada para melhorar a segurança do acesso ao AWS Management Console? (Selecione DUAS)",
      "options": [
        { "option": "AWS Secrets Manager", "isCorrect": false },
        { "option": "AWS Certificate Manager", "isCorrect": false },
        { "option": "AWS Multi-Factor Authentication (AWS MFA)", "isCorrect": true },
        { "option": "Regras de grupo de segurança", "isCorrect": false },
        { "option": "Políticas de senha fortes", "isCorrect": true }
      ],
      "comments": "Para segurança extra, a AWS recomenda que você exija autenticação multifator (MFA) para todos os usuários em sua conta. Com MFA, os usuários têm um dispositivo que gera uma resposta a um desafio de autenticação. Tanto as credenciais do usuário (algo que você sabe) quanto a resposta gerada pelo dispositivo (algo que você tem) são necessárias para concluir o processo de login. Se a senha ou as chaves de acesso de um usuário forem comprometidas, os recursos da sua conta ainda estarão seguros devido ao requisito de autenticação adicional. Além disso, políticas de senha fortes devem ser usadas para impor medidas, incluindo comprimento mínimo de senha, complexidade e restrições de reutilização de senha. 'AWS Multi-Factor Authentication (AWS MFA)' e 'Políticas de senha fortes' são respostas corretas. 'AWS Secrets Manager' está incorreto. Este serviço permite que você gire, gerencie e recupere facilmente credenciais de banco de dados, chaves de API e outros segredos ao longo de seu ciclo de vida. 'AWS Certificate Manager' está incorreto. Este serviço é usado para criar certificados SSL/TLS para uso com conexões HTTPS. 'Regras de grupo de segurança' está incorreto, pois são usadas para restringir o tráfego de/para suas instâncias EC2."
    },
  {
      "id": 312,
      "isMultipleChoice": true,
      "question": "Quais características da Nuvem AWS a tornam econômica para cargas de trabalho com padrões de uso altamente dinâmicos? (Selecione DUAS)",
      "options": [
        { "option": "Alta disponibilidade", "isCorrect": false },
        { "option": "Segurança rigorosa", "isCorrect": false },
        { "option": "Elasticidade", "isCorrect": true },
        { "option": "Preços pay-as-you-go", "isCorrect": true },
        { "option": "Confiabilidade", "isCorrect": false }
      ],
      "comments": "A AWS é econômica para cargas de trabalho dinâmicas porque é elástica, o que significa que sua carga de trabalho pode escalar com base na demanda. E porque você só paga pelo que usa (preços pay-as-you-go). 'Elasticidade' e 'Preços pay-as-you-go' são respostas corretas. 'Alta disponibilidade' está incorreto. Esta não é uma característica que resulta em economia de custos. 'Segurança rigorosa' está incorreto. Esta não é uma característica que resulta em economia de custos. 'Confiabilidade' está incorreto. Esta não é uma característica que resulta em economia de custos."
    },
    {
      "id": 313,
      "isMultipleChoice": true,
      "question": "Quais benefícios uma empresa pode perceber imediatamente ao usar a Nuvem AWS? (Selecione DUAS)",
      "options": [
        { "option": "Despesas variáveis são substituídas por despesas de capital", "isCorrect": false },
        { "option": "Despesas de capital são substituídas por despesas variáveis", "isCorrect": true },
        { "option": "Controle do usuário sobre a infraestrutura física", "isCorrect": false },
        { "option": "Aumento de agilidade", "isCorrect": true },
        { "option": "Nenhuma responsabilidade pela segurança", "isCorrect": false }
      ],
      "comments": "Alguns dos benefícios que as empresas perceberão imediatamente ao usar a Nuvem AWS são o aumento da agilidade e a mudança de despesas de capital para despesas operacionais variáveis. A agilidade é possibilitada pela flexibilidade dos serviços em nuvem e pela facilidade com que as aplicações podem ser implantadas, escaladas e gerenciadas. Ao usar serviços em nuvem, você paga pelo que usa e isso é uma despesa operacional variável que pode ser benéfica para o fluxo de caixa da empresa. 'Despesas de capital são substituídas por despesas variáveis' e 'Aumento de agilidade' são respostas corretas. 'Despesas variáveis são substituídas por despesas de capital' está incorreto. Isso está ao contrário; despesas de capital são substituídas por despesas variáveis. 'Controle do usuário sobre a infraestrutura física' está incorreto. Isso não é verdade, você não tem controle sobre a infraestrutura física. 'Nenhuma responsabilidade pela segurança' está incorreto. Isso não é verdade, você ainda é responsável pela 'segurança na nuvem'."
    },
    {
      "id": 316,
      "isMultipleChoice": false,
      "question": "Como um oficial de conformidade de segurança pode recuperar a documentação de conformidade da AWS, como um relatório SOC 2?",
      "options": [
        { "option": "Usando AWS Artifact", "isCorrect": true },
        { "option": "Usando AWS Trusted Advisor", "isCorrect": false },
        { "option": "Usando AWS Inspector", "isCorrect": false },
        { "option": "Usando o AWS Personal Health Dashboard", "isCorrect": false }
      ],
      "comments": "AWS Artifact, disponível no console, é um portal de recuperação de artefatos de auditoria self-service que fornece aos nossos clientes acesso sob demanda à documentação de conformidade da AWS e acordos da AWS. Você pode usar o AWS Artifact Reports para baixar documentos de segurança e conformidade da AWS, como certificações ISO da AWS, Payment Card Industry (PCI) e relatórios de Controle de Sistema e Organização (SOC). 'Usando AWS Artifact' é a resposta correta. 'Usando AWS Trusted Advisor' está incorreto. AWS Trusted Advisor é um recurso online para ajudar a reduzir custos, aumentar o desempenho e melhorar a segurança otimizando seu ambiente AWS. 'Usando AWS Inspector' está incorreto. Inspector é um serviço de avaliação de segurança automatizado que ajuda a melhorar a segurança e conformidade de aplicações implantadas na AWS. 'Usando o AWS Personal Health Dashboard' está incorreto. O AWS Personal Health Dashboard fornece alertas e orientações de remediação quando a AWS está enfrentando eventos que podem impactá-lo."
    },
    {
      "id": 317,
      "isMultipleChoice": true,
      "question": "Quais itens devem ser incluídos em uma análise de TCO comparando on-premise com a Nuvem AWS? (Selecione DUAS)",
      "options": [
        { "option": "Gerenciamento de firewall", "isCorrect": false },
        { "option": "Licenciamento de aplicações", "isCorrect": false },
        { "option": "Hardware de computação", "isCorrect": true },
        { "option": "Segurança do data center", "isCorrect": true },
        { "option": "Patching do sistema operacional", "isCorrect": false }
      ],
      "comments": "Você precisa identificar os itens que têm um custo on-premise e que serão incorporados ao serviço na nuvem. Os custos de hardware de computação e segurança do data center serão incorporados ao custo do serviço na nuvem, então você precisa incluí-los no modelo para realmente entender o verdadeiro TCO on-premise vs. a nuvem. Gerenciamento de firewall, licenciamento de aplicações e patching do sistema operacional precisam ser pagos tanto on-premise quanto na nuvem, então há pouca diferença. 'Hardware de computação' e 'Segurança do data center' são respostas corretas. 'Gerenciamento de firewall', 'Licenciamento de aplicações' e 'Patching do sistema operacional' estão incorretos conforme explicado acima."
    },
    {
      "id": 318,
      "isMultipleChoice": true,
      "question": "Quais dos fatos abaixo são precisos em relação às Regiões AWS? (Selecione DUAS)",
      "options": [
        { "option": "Cada região consiste em 2 ou mais zonas de disponibilidade", "isCorrect": true },
        { "option": "Cada região consiste em uma coleção de VPCs", "isCorrect": false },
        { "option": "Cada região é projetada para ser completamente isolada das outras Regiões Amazon", "isCorrect": true },
        { "option": "Regiões têm conexões de rede diretas, de baixa latência, alta taxa de transferência e redundantes entre si", "isCorrect": false },
        { "option": "Regiões são endpoints de Content Delivery Network (CDN) para CloudFront", "isCorrect": false }
      ],
      "comments": "Zonas de Disponibilidade (não regiões) têm conexões de rede diretas, de baixa latência, alta taxa de transferência e redundantes entre si. Cada Região AWS consiste em 2 ou mais Zonas de Disponibilidade. As Regiões AWS são áreas geográficas e cada Região AWS é projetada para ser completamente isolada de outras Regiões AWS. 'Cada região consiste em 2 ou mais zonas de disponibilidade' e 'Cada região é projetada para ser completamente isolada das outras Regiões Amazon' são respostas corretas. 'Cada região consiste em uma coleção de VPCs' está incorreto. Uma região não é uma coleção de VPCs, é composta por pelo menos 2 AZs. VPCs existem dentro de contas em uma base por região. 'Regiões têm conexões de rede diretas, de baixa latência, alta taxa de transferência e redundantes entre si' está incorreto. Esta é uma descrição de uma Zona de Disponibilidade. 'Regiões são endpoints de Content Delivery Network (CDN) para CloudFront' está incorreto. Locais de borda (não regiões) são endpoints de Content Delivery Network (CDN) para CloudFront."
    },
    {
      "id": 319,
      "isMultipleChoice": false,
      "question": "Qual serviço fornece visibilidade sobre a atividade do usuário registrando ações realizadas na sua conta?",
      "options": [
        { "option": "Amazon CloudWatch", "isCorrect": false },
        { "option": "Amazon CloudFormation", "isCorrect": false },
        { "option": "Amazon CloudTrail", "isCorrect": true },
        { "option": "Amazon CloudHSM", "isCorrect": false }
      ],
      "comments": "CloudTrail é um serviço web que registra atividades feitas na sua conta e entrega arquivos de log para um bucket do Amazon S3. CloudTrail registra atividades de API. CloudTrail é usado para auditoria, enquanto CloudWatch é usado para monitoramento de desempenho. 'Amazon CloudTrail' é a resposta correta. 'Amazon CloudWatch' está incorreto. CloudWatch é usado para monitoramento de desempenho. 'Amazon CloudFormation' está incorreto. CloudFormation é usado para implantar infraestrutura através de código. 'Amazon CloudHSM' está incorreto. CloudHSM é um módulo de segurança de hardware para gerar, gerenciar e armazenar chaves de criptografia."
    },
    {
      "id": 320,
      "isMultipleChoice": false,
      "question": "Qual serviço AWS pode ser usado para executar contêineres Docker?",
      "options": [
        { "option": "AWS Lambda", "isCorrect": false },
        { "option": "Amazon ECR", "isCorrect": false },
        { "option": "Amazon ECS", "isCorrect": true },
        { "option": "Amazon AMI", "isCorrect": false }
      ],
      "comments": "Amazon Elastic Container Service (ECS) é um serviço de gerenciamento de contêineres altamente escalável e de alto desempenho que suporta contêineres Docker e permite que você execute facilmente aplicações em um cluster gerenciado de instâncias Amazon EC2. 'Amazon ECS' é a resposta correta. 'AWS Lambda' está incorreto. AWS Lambda é uma tecnologia serverless que permite executar código em resposta a eventos como funções. 'Amazon ECR' está incorreto. Amazon Elastic Container Registry (ECR) é um registro de contêiner Docker totalmente gerenciado que facilita para os desenvolvedores armazenar, gerenciar e implantar imagens de contêiner Docker. 'Amazon AMI' está incorreto. Amazon Machine Images (AMI) armazenam informações de configuração para instâncias Amazon EC2."
    },
    {
      "id": 321,
      "isMultipleChoice": false,
      "question": "O que é um Grupo de Recursos?",
      "options": [
        { "option": "Uma coleção de recursos dentro de um VPC", "isCorrect": false },
        { "option": "Uma coleção de recursos que compartilham uma ou mais tags", "isCorrect": true },
        { "option": "Uma coleção de serviços dentro de uma categoria", "isCorrect": false },
        { "option": "Uma coleção de serviços dentro de uma região", "isCorrect": false }
      ],
      "comments": "Um grupo de recursos é uma coleção de recursos que compartilham uma ou mais tags ou partes de tags. Para criar um grupo de recursos, você simplesmente identifica as tags que contêm os itens que os membros do grupo devem ter em comum. 'Uma coleção de recursos que compartilham uma ou mais tags' é a resposta correta. 'Uma coleção de recursos dentro de um VPC' está incorreto. 'Uma coleção de serviços dentro de uma categoria' está incorreto. 'Uma coleção de serviços dentro de uma região' está incorreto."
    },
    {
      "id": 322,
      "isMultipleChoice": true,
      "question": "Quais afirmações são verdadeiras sobre volumes Amazon EBS? (Selecione DUAS)",
      "options": [
        {
          "option": "Você pode anexar volumes EBS a várias instâncias",
          "isCorrect": false
        },
        {
          "option": "Os volumes EBS devem estar na mesma AZ que as instâncias às quais estão anexados",
          "isCorrect": true
        },
        {
          "option": "Você pode anexar vários volumes EBS a uma instância",
          "isCorrect": true
        },
        {
          "option": "Os dados do volume EBS são efêmeros e são perdidos quando uma instância é parada",
          "isCorrect": false
        },
        {
          "option": "Os volumes EBS são armazenamento de objetos",
          "isCorrect": false
        }
      ],
      "comments": "Os volumes Amazon EBS são usados por instâncias EC2 para armazenamento persistente. Os volumes EBS devem estar na mesma AZ que as instâncias às quais estão anexados e você pode anexar vários volumes EBS a uma instância. 'Os volumes EBS devem estar na mesma AZ que as instâncias às quais estão anexados' e 'Você pode anexar vários volumes EBS a uma instância' são respostas corretas. 'Você pode anexar volumes EBS a várias instâncias' está incorreto. Você não pode anexar um volume EBS a várias instâncias (use Elastic File Store em vez disso). 'Os dados do volume EBS são efêmeros e são perdidos quando uma instância é parada' está incorreto. Os dados do volume EBS persistem independentemente da vida da instância. 'Os volumes EBS são armazenamento de objetos' está incorreto, pois os volumes EBS são dispositivos de armazenamento em bloco."
    },
    {
      "id": 323,
      "isMultipleChoice": false,
      "question": "Como você pode aplicar metadados a uma instância EC2 que a categorizam de acordo com seu propósito, proprietário ou ambiente?",
      "options": [
        {
          "option": "Labels",
          "isCorrect": false
        },
        {
          "option": "Tags",
          "isCorrect": true
        },
        {
          "option": "Hostname",
          "isCorrect": false
        },
        {
          "option": "Stickers",
          "isCorrect": false
        }
      ],
      "comments": "Uma tag é um rótulo que você atribui a um recurso AWS. Cada tag consiste em uma chave e um valor opcional, ambos definidos por você. As tags permitem que você categorize seus recursos AWS de diferentes maneiras, por exemplo, por propósito, proprietário ou ambiente. 'Tags' é a resposta correta. 'Labels' está incorreto, pois isso não é algo que você pode atribuir a um recurso AWS. 'Hostname' está incorreto, pois você não pode usar nomes de host para categorizar instâncias EC2. Use tags em vez disso. 'Stickers' está incorreto, pois isso não é algo que você pode atribuir a um recurso AWS."
    },
    {
      "id": 324,
      "isMultipleChoice": true,
      "question": "Quais são os benefícios de usar os AWS Managed Services? (Selecione DUAS)",
      "options": [
        {
          "option": "Alinhamento com processos ITIL",
          "isCorrect": true
        },
        {
          "option": "Aplicações gerenciadas para que você possa se concentrar na infraestrutura",
          "isCorrect": false
        },
        {
          "option": "Integração básica com ferramentas ITSM",
          "isCorrect": true
        },
        {
          "option": "Projetado para pequenas empresas",
          "isCorrect": false
        },
        {
          "option": "Suporte para todos os serviços AWS",
          "isCorrect": false
        }
      ],
      "comments": "AWS Managed Services gerencia as operações diárias da sua infraestrutura AWS em alinhamento com processos ITIL. Ele fornece uma integração básica com ferramentas de Gerenciamento de Serviços de TI (ITSM) como a plataforma ServiceNow. AWS Managed Services é projetado para atender às necessidades de empresas que exigem SLAs rigorosos, conformidade corporativa e integração com seus sistemas e processos baseados em ITIL. 'Alinhamento com processos ITIL' e 'Integração básica com ferramentas ITSM' são respostas corretas. 'Aplicações gerenciadas para que você possa se concentrar na infraestrutura' está incorreto, pois isso não é oferecido pelos AWS Managed Services. 'Projetado para pequenas empresas' está incorreto, pois o serviço é projetado para empresas. 'Suporte para todos os serviços AWS' está incorreto, pois o serviço não suporta todos os serviços AWS."
    },
    {
      "id": 325,
      "isMultipleChoice": true,
      "question": "Para conectar uma rede on-premises a uma Amazon VPC usando uma conexão VPN gerenciada pela Amazon, quais componentes são necessários? (Selecione DUAS)",
      "options": [
        {
          "option": "VPC Router",
          "isCorrect": false
        },
        {
          "option": "Virtual Private Gateway",
          "isCorrect": true
        },
        {
          "option": "NAT Instance",
          "isCorrect": false
        },
        {
          "option": "Direct Connect",
          "isCorrect": false
        },
        {
          "option": "Customer Gateway",
          "isCorrect": true
        }
      ],
      "comments": "Dois dos componentes necessários para conectar sua VPC com uma conexão VPN são um gateway privado virtual no lado da VPC e um gateway do cliente no lado da rede on-premises. 'Virtual Private Gateway' e 'Customer Gateway' são respostas corretas. 'VPC Router' está incorreto, pois roteadores VPC não fazem parte da configuração VPN. 'NAT Instance' está incorreto, pois instâncias NAT não são usadas para VPN, elas são usadas por instâncias EC2 em sub-redes privadas para acessar a Internet. 'Direct Connect' está incorreto, pois o AWS Direct Connect pode ser usado para conectar uma rede on-premises à nuvem, mas não faz parte da configuração de uma conexão VPN gerenciada pela Amazon."
    },
    {
      "id": 326,
      "isMultipleChoice": true,
      "question": "Quais serviços estão envolvidos com segurança? (Selecione DUAS)",
      "options": [
        {
          "option": "AWS CloudHSM",
          "isCorrect": true
        },
        {
          "option": "AWS DMS",
          "isCorrect": false
        },
        {
          "option": "AWS KMS",
          "isCorrect": true
        },
        {
          "option": "AWS SMS",
          "isCorrect": false
        },
        {
          "option": "Amazon ELB",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Key Management Service (KMS) oferece controle centralizado sobre as chaves de criptografia usadas para proteger seus dados. O AWS CloudHSM é um módulo de segurança de hardware baseado em nuvem que permite gerar e usar suas próprias chaves de criptografia na nuvem AWS. 'AWS CloudHSM' e 'AWS KMS' são respostas corretas. 'AWS DMS' está incorreto, pois o AWS Database Migration Service é usado para migração de bancos de dados. 'AWS SMS' está incorreto, pois o AWS Server Migration Service é usado para migração de máquinas virtuais. 'Amazon ELB' está incorreto, pois o Amazon Elastic Load Balancing é usado para distribuir conexões de entrada para pools de instâncias EC2."
    },
  
    {
      "id": 327,
      "isMultipleChoice": true,
      "question": "Quais serviços são gerenciados em nível regional (em vez de global)? (Selecione DUAS)",
      "options": [
        { "option": "Amazon CloudFront", "isCorrect": false },
        { "option": "Amazon Route 53", "isCorrect": false },
        { "option": "Amazon S3", "isCorrect": true },
        { "option": "Amazon EC2", "isCorrect": true },
        { "option": "AWS IAM", "isCorrect": false }
      ],
      "comments": "Tanto o Amazon EC2 quanto o Amazon S3 são gerenciados em nível regional. Nota: O Amazon S3 possui um namespace global, mas você ainda cria seus buckets dentro de uma região. Amazon CloudFront, Amazon Route 53 e AWS IAM são gerenciados em nível global. 'Amazon S3' e 'Amazon EC2' são respostas corretas. 'Amazon CloudFront' está incorreto, pois é um serviço global. 'Amazon Route 53' está incorreto, pois é um serviço global. 'AWS IAM' está incorreto, pois é um serviço global."
    },
    {
      "id": 328,
      "isMultipleChoice": true,
      "question": "Quais são os nomes de dois tipos de AWS Storage Gateway? (Selecione DUAS)",
      "options": [
        { "option": "S3 Gateway", "isCorrect": false },
        { "option": "File Gateway", "isCorrect": true },
        { "option": "Block Gateway", "isCorrect": false },
        { "option": "Tape Gateway", "isCorrect": true },
        { "option": "Cached Gateway", "isCorrect": false }
      ],
      "comments": "O serviço AWS Storage Gateway permite armazenamento híbrido entre ambientes on-premises e a nuvem AWS. Ele fornece desempenho de baixa latência ao armazenar em cache dados acessados com frequência no local, enquanto armazena dados de forma segura e durável nos serviços de armazenamento em nuvem da Amazon. O AWS Storage Gateway suporta três interfaces de armazenamento: arquivo, volume e fita. O File Gateway fornece um servidor de arquivos virtual on-premises, que permite armazenar e recuperar arquivos como objetos no Amazon S3. O Tape Gateway (anteriormente conhecido como Gateway Virtual Tape Library) é usado para backup com software de backup popular. 'File Gateway' e 'Tape Gateway' são respostas corretas. 'S3 Gateway', 'Block Gateway' e 'Cached Gateway' estão incorretos conforme explicado acima."
    },
  
    {
      "id": 329,
      "isMultipleChoice": true,
      "question": "Um Cloud Practitioner deseja construir um stack de aplicação que será altamente elástico. Quais serviços da AWS podem ser usados que não exigem que você tome decisões de capacidade antecipadamente? (Selecione DUAS)",
      "options": [
        { "option": "AWS Lambda", "isCorrect": true },
        { "option": "Amazon EC2", "isCorrect": false },
        { "option": "Amazon S3", "isCorrect": true },
        { "option": "Amazon RDS", "isCorrect": false },
        { "option": "Amazon DynamoDB provisioned mode", "isCorrect": false }
      ],
      "comments": "Com o Amazon S3, você não precisa especificar nenhuma capacidade a qualquer momento, o serviço escala tanto em capacidade quanto em desempenho conforme necessário. O AWS Lambda permite que você execute código sem provisionar ou gerenciar servidores. Você paga apenas pelo tempo de computação que consome – não há cobrança quando seu código não está em execução. 'AWS Lambda' e 'Amazon S3' são respostas corretas. 'Amazon EC2' está incorreto, pois você precisa selecionar o tamanho das instâncias e o número de instâncias. 'Amazon RDS' está incorreto, pois você precisa selecionar o tamanho da instância para o DB. 'Amazon DynamoDB' está incorreto no modo provisionado, pois você precisa especificar a capacidade de leitura/gravação do DB."
    },
    {
      "id": 330,
      "isMultipleChoice": true,
      "question": "Quais dos seguintes serviços o Amazon Route 53 fornece? (Selecione DUAS)",
      "options": [
        { "option": "Domain registration", "isCorrect": true },
        { "option": "Route tables", "isCorrect": false },
        { "option": "Domain Name Service (DNS)", "isCorrect": true },
        { "option": "Auto Scaling", "isCorrect": false },
        { "option": "Load balancing", "isCorrect": false }
      ],
      "comments": "Os serviços do Amazon Route 53 incluem registro de domínio, DNS, verificação de integridade (monitoramento de disponibilidade) e gerenciamento de tráfego. 'Domain registration' e 'Domain Name Service (DNS)' são respostas corretas. 'Route tables', 'Auto Scaling' e 'Load balancing' estão incorretos, pois não são fornecidos pelo Route 53."
    },
    {
      "id": 331,
      "isMultipleChoice": false,
      "question": "Uma aplicação armazena imagens que serão recuperadas infrequentemente, mas devem estar disponíveis para recuperação imediata. Qual é a opção de armazenamento mais econômica que atende a esses requisitos?",
      "options": [
        { "option": "Amazon Glacier with expedited retrievals", "isCorrect": false },
        { "option": "Amazon S3 Standard-Infrequent Access", "isCorrect": true },
        { "option": "Amazon EFS", "isCorrect": false },
        { "option": "Amazon S3 Standard", "isCorrect": false }
      ],
      "comments": "Amazon S3 Standard-Infrequent Access é a escolha mais econômica. Ele fornece acesso imediato e é adequado para este caso de uso, pois é mais barato que o S3 Standard. Note que você deve pagar uma taxa para recuperações, por isso você usaria este nível apenas para casos de uso de acesso infrequente. 'Amazon S3 Standard-Infrequent Access' é a resposta correta. 'Amazon Glacier with expedited retrievals' está incorreto, pois é rápido (1-5 minutos) mas não imediato. 'Amazon EFS' está incorreto, pois é um sistema de arquivos de alto desempenho e não é ideal para este cenário, além de não ser a opção mais econômica. 'Amazon S3 Standard' está incorreto, pois fornece recuperação imediata, mas não é mais econômico comparado ao Standard-Infrequent Access."
    },
    {
      "id": 332,
      "isMultipleChoice": false,
      "question": "Qual elemento de rede da AWS permite que você atribua um endereço IPv4 estático a uma instância EC2?",
      "options": [
        { "option": "Public IP", "isCorrect": false },
        { "option": "Elastic IP", "isCorrect": true },
        { "option": "Static IP", "isCorrect": false },
        { "option": "Dynamic IP", "isCorrect": false }
      ],
      "comments": "Um endereço Elastic IP é um endereço IPv4 estático projetado para computação em nuvem dinâmica. Um endereço Elastic IP está associado à sua conta AWS. Com um endereço Elastic IP, você pode mascarar a falha de uma instância ou software remapeando rapidamente o endereço para outra instância em sua conta. 'Elastic IP' é a resposta correta. 'Public IP' está incorreto. Um Elastic IP é um IP público. No entanto, na nuvem AWS, um Elastic IP é a construção usada para atribuir um IP público a uma instância EC2. 'Static IP' está incorreto. Um IP estático é um endereço IP (público ou privado) que é definido estaticamente. 'Dynamic IP' está incorreto. Um IP dinâmico é um endereço IP (público ou privado) que é obtido dinamicamente (através de DHCP)."
    },
    {
      "id": 333,
      "isMultipleChoice": false,
      "question": "Você precisa implementar uma fila hospedada para armazenar mensagens em trânsito entre servidores de aplicação. Qual serviço você deve usar?",
      "options": [
        { "option": "Amazon SWF", "isCorrect": false },
        { "option": "Amazon SNS", "isCorrect": false },
        { "option": "Amazon SQS", "isCorrect": true },
        { "option": "Amazon DynamoDB", "isCorrect": false }
      ],
      "comments": "Amazon Simple Queue Service (Amazon SQS) é um serviço web que oferece acesso a filas de mensagens que armazenam mensagens aguardando processamento. SQS oferece uma fila hospedada confiável e altamente escalável para armazenar mensagens em trânsito entre computadores. SQS é usado para aplicações distribuídas/desacopladas. 'Amazon SQS' é a resposta correta. 'Amazon SNS' está incorreto. Amazon Simple Notification Service (SNS) é um serviço de mensagens pub/sub altamente disponível, durável, seguro e totalmente gerenciado que permite desacoplar microsserviços, sistemas distribuídos e aplicações serverless. 'Amazon DynamoDB' está incorreto. Amazon DynamoDB é um banco de dados não relacional que oferece desempenho confiável em qualquer escala. 'Amazon SWF' está incorreto. Amazon SWF ajuda os desenvolvedores a construir, executar e escalar trabalhos em segundo plano que têm etapas paralelas ou sequenciais."
    },
    {
      "id": 334,
      "isMultipleChoice": true,
      "question": "Quais mudanças de configuração estão associadas ao escalonamento horizontal? (Selecione DUAS)",
      "options": [
        { "option": "Adicionar instâncias EC2 adicionais através do Auto Scaling", "isCorrect": true },
        { "option": "Adicionar um disco rígido de maior capacidade a um servidor", "isCorrect": false },
        { "option": "Alterar a classe da instância de DB em um RDS DB", "isCorrect": false },
        { "option": "Adicionar discos rígidos adicionais a um array de armazenamento", "isCorrect": true },
        { "option": "Alterar uma instância EC2 para um tipo que tenha mais CPU e RAM", "isCorrect": false }
      ],
      "comments": "O escalonamento horizontal ocorre através de um aumento no número de recursos (por exemplo, adicionar mais discos rígidos a um array de armazenamento ou adicionar mais servidores para suportar uma aplicação). O escalonamento vertical ocorre através de um aumento nas especificações de um recurso individual (por exemplo, atualizar um servidor com um disco rígido maior ou um CPU mais rápido). No Amazon EC2, isso pode ser facilmente alcançado parando uma instância e redimensionando-a para um tipo de instância que tenha mais RAM, CPU, IO ou capacidades de rede. 'Adicionar instâncias EC2 adicionais através do Auto Scaling' é a resposta correta. 'Adicionar discos rígidos adicionais a um array de armazenamento' é a resposta correta. 'Adicionar um disco rígido de maior capacidade a um servidor' está incorreto, pois isso é escalonamento vertical. 'Alterar a classe da instância de DB em um RDS DB' está incorreto, pois isso é escalonamento vertical. 'Alterar uma instância EC2 para um tipo que tenha mais CPU e RAM' está incorreto, pois isso é escalonamento vertical."
    },
    {
      "id": 335,
      "isMultipleChoice": false,
      "question": "Qual construção da AWS fornece a você sua própria rede virtual dedicada na nuvem?",
      "options": [
        { "option": "Amazon Workspaces", "isCorrect": false },
        { "option": "Amazon EC2", "isCorrect": false },
        { "option": "Amazon IAM", "isCorrect": false },
        { "option": "Amazon VPC", "isCorrect": true }
      ],
      "comments": "Uma nuvem privada virtual (VPC) é uma rede virtual dedicada à sua conta AWS. Uma VPC é análoga a ter seu próprio data center dentro da AWS. É logicamente isolada de outras redes virtuais na Nuvem AWS. 'Amazon VPC' é a resposta correta. 'Amazon Workspaces' está incorreto. Amazon WorkSpaces é um serviço de computação de desktop gerenciado que roda na nuvem AWS. 'Amazon EC2' está incorreto. Amazon Elastic Compute Cloud (Amazon EC2) é um serviço web que fornece capacidade de computação segura e redimensionável na nuvem. 'Amazon IAM' está incorreto. IAM é usado para controlar de forma segura o acesso individual e em grupo aos recursos da AWS."
    },
    {
      "id": 336,
      "isMultipleChoice": true,
      "question": "Quais recursos o Amazon RDS fornece para oferecer escalabilidade, disponibilidade e durabilidade? (Selecione DUAS)",
      "options": [
        {
          "option": "Multi-AZ",
          "isCorrect": true
        },
        {
          "option": "Read Replicas",
          "isCorrect": true
        },
        {
          "option": "DB mirroring",
          "isCorrect": false
        },
        {
          "option": "Clustering",
          "isCorrect": false
        },
        {
          "option": "Multi-Subnet",
          "isCorrect": false
        }
      ],
      "comments": "O RDS Multi-AZ cria uma réplica em outra AZ e replica de forma síncrona para ela (apenas DR). As réplicas de leitura são usadas para bancos de dados com alta carga de leitura e a replicação é assíncrona. Com uma réplica de leitura, você direciona suas consultas de banco de dados para a réplica de leitura, aliviando a pressão do banco de dados principal. 'Multi-AZ' é uma resposta correta. 'Read Replicas' também é uma resposta correta. 'DB mirroring' está incorreto, pois não é oferecido pelo RDS. 'Clustering' está incorreto, pois não é oferecido pelo RDS. 'Multi-Subnet' está incorreto, pois não é oferecido pelo RDS."
    },
    {
      "id": 337,
      "isMultipleChoice": false,
      "question": "Que tipo de banco de dados é totalmente gerenciado e pode ser escalado sem incorrer em tempo de inatividade?",
      "options": [
        {
          "option": "Amazon RDS",
          "isCorrect": false
        },
        {
          "option": "Amazon S3",
          "isCorrect": false
        },
        {
          "option": "Amazon DynamoDB",
          "isCorrect": true
        },
        {
          "option": "Amazon ElastiCache",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon DynamoDB é totalmente gerenciado e pode ser escalado sem incorrer em tempo de inatividade. O DynamoDB escala horizontalmente e faz isso de forma contínua. Tanto o RDS quanto o ElastiCache usam instâncias EC2 e, portanto, o escalonamento (vertical) requer tempo de inatividade. 'Amazon DynamoDB' é a resposta correta. 'Amazon RDS' está incorreto, pois deve ser escalado verticalmente e isso requer tempo de inatividade. 'Amazon S3' está incorreto. O S3 não é um banco de dados totalmente gerenciado, é um armazenamento de objetos. 'Amazon ElastiCache' está incorreto, pois deve ser escalado verticalmente e isso requer tempo de inatividade."
    },
    {
      "id": 338,
      "isMultipleChoice": false,
      "question": "Um gerente precisa monitorar seus gastos na AWS. Como o gerente pode configurar alarmes que o notifiquem quando sua conta atingir um determinado valor?",
      "options": [
        {
          "option": "Usando Amazon CloudWatch",
          "isCorrect": true
        },
        {
          "option": "Usando AWS Trusted Advisor",
          "isCorrect": false
        },
        {
          "option": "Usando AWS CloudTrail",
          "isCorrect": false
        },
        {
          "option": "Notificando o suporte da AWS",
          "isCorrect": false
        }
      ],
      "comments": "A melhor maneira de fazer isso é usar o CloudWatch para configurar alarmes que enviam uma notificação quando ativados. Os alarmes podem usar métricas de custo que disparam o alarme quando um determinado valor de gasto é atingido. 'Usando Amazon CloudWatch' é a resposta correta. 'Usando AWS Trusted Advisor' está incorreto, pois este serviço é focado em fornecer orientações para provisionamento de recursos seguindo as melhores práticas da AWS. 'Usando AWS CloudTrail' está incorreto, pois este serviço é usado para auditoria de atividades de API. 'Notificando o suporte da AWS' está incorreto, pois você não precisa de assistência do suporte da AWS para fazer isso."
    },
    {
      "id": 339,
      "isMultipleChoice": true,
      "question": "Uma empresa está planejando migrar alguns recursos para a nuvem. Quais fatores precisam ser considerados ao determinar o custo da AWS Cloud? (Selecione DUAS)",
      "options": [
        {
          "option": "O número de VPCs criadas",
          "isCorrect": false
        },
        {
          "option": "O número de servidores migrados para o EC2",
          "isCorrect": true
        },
        {
          "option": "O número de usuários IAM criados",
          "isCorrect": false
        },
        {
          "option": "A quantidade de dados de saída por mês",
          "isCorrect": true
        },
        {
          "option": "A quantidade de dados de entrada por mês",
          "isCorrect": false
        }
      ],
      "comments": "Existem três principais fatores de custo com a AWS: computação, armazenamento e transferência de dados de saída. Essas características variam dependendo do produto AWS e do modelo de preços escolhido. Na maioria dos casos, não há cobrança para transferência de dados de entrada ou para transferência de dados entre outros serviços AWS na mesma região. No entanto, existem algumas exceções. 'O número de servidores migrados para o EC2' é uma resposta correta. 'A quantidade de dados de saída por mês' também é uma resposta correta. 'O número de VPCs criadas' está incorreto, pois não há cobrança por VPCs. 'O número de usuários IAM criados' está incorreto, pois não há cobrança por IAM. 'A quantidade de dados de entrada por mês' está incorreto, pois não há cobrança por dados de entrada."
    },
    {
      "id": 340,
      "isMultipleChoice": true,
      "question": "Quais planos de suporte da AWS fornecem suporte via email, chat e telefone? (Selecione DUAS)",
      "options": [
        {
          "option": "Basic",
          "isCorrect": false
        },
        {
          "option": "Developer",
          "isCorrect": false
        },
        {
          "option": "Business",
          "isCorrect": true
        },
        {
          "option": "Enterprise",
          "isCorrect": true
        },
        {
          "option": "Global",
          "isCorrect": false
        }
      ],
      "comments": "Apenas os planos Business e Enterprise fornecem suporte via email, chat e telefone. 'Business' é a resposta correta. 'Enterprise' é a resposta correta. 'Basic' está incorreto, pois não fornece suporte via email, chat e telefone. 'Developer' está incorreto, pois fornece suporte apenas por email. 'Global' está incorreto, pois não é um plano de suporte oferecido pela AWS."
    },
    {
      "id": 341,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS pode ser usado para hospedar um site estático?",
      "options": [
        {
          "option": "Amazon S3",
          "isCorrect": true
        },
        {
          "option": "Amazon EBS",
          "isCorrect": false
        },
        {
          "option": "AWS CloudFormation",
          "isCorrect": false
        },
        {
          "option": "Amazon EFS",
          "isCorrect": false
        }
      ],
      "comments": "Você pode usar o Amazon S3 para hospedar um site estático. Em um site estático, as páginas individuais incluem conteúdo estático. Elas também podem conter scripts do lado do cliente. Em contraste, um site dinâmico depende de processamento do lado do servidor, incluindo scripts do lado do servidor, como PHP, JSP ou ASP.NET. O Amazon S3 não suporta scripts do lado do servidor, mas a AWS possui outros recursos para hospedar sites dinâmicos. 'Amazon S3' é a resposta correta. 'Amazon EBS' está incorreto, pois não pode ser usado para hospedar um site estático. 'AWS CloudFormation' está incorreto, pois não pode ser usado para hospedar um site estático. 'Amazon EFS' está incorreto, pois não pode ser usado para hospedar um site estático."
    },
    {
      "id": 342,
      "isMultipleChoice": true,
      "question": "Quais das seguintes são práticas recomendadas pela AWS em relação ao IAM? (Selecione DUAS)",
      "options": [
        {
          "option": "Atribuir permissões a usuários",
          "isCorrect": false
        },
        {
          "option": "Criar usuários IAM individuais",
          "isCorrect": true
        },
        {
          "option": "Incorporar chaves de acesso no código do aplicativo",
          "isCorrect": false
        },
        {
          "option": "Habilitar MFA para todos os usuários",
          "isCorrect": true
        },
        {
          "option": "Conceder o maior privilégio",
          "isCorrect": false
        }
      ],
      "comments": "A AWS recomenda que você crie usuários IAM individuais em vez de compartilhar contas de usuário IAM. Para segurança extra, a AWS recomenda que você exija autenticação multifator (MFA) para todos os usuários em sua conta. Para usuários IAM privilegiados que têm permissão para acessar recursos ou operações de API sensíveis, a AWS recomenda o uso de dispositivos MFA de hardware ou U2F. 'Criar usuários IAM individuais' é uma resposta correta. 'Habilitar MFA para todos os usuários' é uma resposta correta. 'Atribuir permissões a usuários' está incorreto. Você deve usar grupos para atribuir permissões a usuários IAM e deve evitar incorporar chaves de acesso no código do aplicativo. 'Incorporar chaves de acesso no código do aplicativo' está incorreto, pois isso é altamente inseguro. 'Conceder o maior privilégio' está incorreto. A AWS recomenda criar usuários IAM individuais e atribuir o menor privilégio necessário para que eles desempenhem suas funções."
    },
    {
      "id": 343,
      "isMultipleChoice": true,
      "question": "Quais das seguintes tarefas de operações de segurança devem ser realizadas pelos clientes da AWS? (Selecione DUAS)",
      "options": [
        {
          "option": "Coletar mensagens syslog de firewalls físicos",
          "isCorrect": false
        },
        {
          "option": "Emitir cartões de acesso ao data center",
          "isCorrect": false
        },
        {
          "option": "Instalar atualizações de segurança em instâncias EC2",
          "isCorrect": true
        },
        {
          "option": "Habilitar MFA para usuários privilegiados",
          "isCorrect": true
        },
        {
          "option": "Instalar atualizações de segurança para firmware de servidor",
          "isCorrect": false
        }
      ],
      "comments": "O cliente é responsável por instalar atualizações de segurança em instâncias EC2 e habilitar MFA. A AWS é responsável pela segurança do data center físico e da infraestrutura sobre a qual os serviços do cliente são executados. 'Instalar atualizações de segurança em instâncias EC2' é uma resposta correta. 'Habilitar MFA para usuários privilegiados' é também uma resposta correta. 'Coletar mensagens syslog de firewalls físicos' está incorreto, pois isso é responsabilidade da AWS. 'Emitir cartões de acesso ao data center' está incorreto, pois isso é responsabilidade da AWS. 'Instalar atualizações de segurança para firmware de servidor' está incorreto, pois isso é responsabilidade da AWS."
    },
    {
      "id": 344,
      "isMultipleChoice": false,
      "question": "Um arquiteto deseja encontrar uma ferramenta para implantar consistentemente os mesmos recursos por meio de uma configuração modelada. Qual serviço da AWS pode ser usado?",
      "options": [
        { "option": "AWS Elastic Beanstalk", "isCorrect": false },
        { "option": "AWS CodeBuild", "isCorrect": false },
        { "option": "AWS CodeDeploy", "isCorrect": false },
        { "option": "AWS CloudFormation", "isCorrect": true }
      ],
      "comments": "AWS CloudFormation fornece uma linguagem comum para descrever e provisionar todos os recursos de infraestrutura em seu ambiente de nuvem. O CloudFormation permite que você use um arquivo de texto simples para modelar e provisionar, de maneira automatizada e segura, todos os recursos necessários para suas aplicações em todas as regiões e contas. 'AWS CloudFormation' é a resposta correta. 'AWS Elastic Beanstalk' está incorreto, pois é usado para executar aplicações em um ambiente gerenciado, não para implantar configurações modeladas. 'AWS CodeBuild' está incorreto, pois é um serviço de integração contínua totalmente gerenciado que compila código-fonte, executa testes e produz pacotes de software prontos para implantação. 'AWS CodeDeploy' está incorreto, pois é um serviço de implantação totalmente gerenciado que automatiza implantações de software em vários serviços de computação, como Amazon EC2, AWS Lambda e servidores locais, mas não usa uma configuração modelada para implantação."
    },
    {
      "id": 345,
      "isMultipleChoice": true,
      "question": "Quais alterações de configuração estão associadas ao escalonamento vertical? (Selecione DUAS)",
      "options": [
        { "option": "Adicionar instâncias EC2 adicionais por meio do Auto Scaling", "isCorrect": false },
        { "option": "Adicionar discos rígidos adicionais a um array de armazenamento", "isCorrect": false },
        { "option": "Adicionar um disco rígido de maior capacidade a um servidor", "isCorrect": true },
        { "option": "Processamento distribuído", "isCorrect": false },
        { "option": "Alterar uma instância EC2 para um tipo que tenha mais CPU e RAM", "isCorrect": true }
      ],
      "comments": "O escalonamento vertical ocorre por meio de um aumento nas especificações de um recurso individual (por exemplo, atualizar um servidor com um disco rígido maior ou um processador mais rápido). No Amazon EC2, isso pode ser facilmente alcançado parando uma instância e redimensionando-a para um tipo de instância que tenha mais RAM, CPU, IO ou capacidades de rede. O escalonamento horizontal ocorre por meio de um aumento no número de recursos (por exemplo, adicionar mais discos rígidos a um array de armazenamento ou adicionar mais servidores para suportar uma aplicação). 'Adicionar um disco rígido de maior capacidade a um servidor' e 'Alterar uma instância EC2 para um tipo que tenha mais CPU e RAM' são respostas corretas. 'Adicionar instâncias EC2 adicionais por meio do Auto Scaling', 'Adicionar discos rígidos adicionais a um array de armazenamento' e 'Processamento distribuído' são exemplos de escalonamento horizontal."
    },
    {
      "id": 346,
      "isMultipleChoice": false,
      "question": "Como uma organização pode avaliar aplicações quanto a vulnerabilidades e desvios das melhores práticas?",
      "options": [
        { "option": "Usar AWS Artifact", "isCorrect": false },
        { "option": "Usar AWS Inspector", "isCorrect": true },
        { "option": "Usar AWS Shield", "isCorrect": false },
        { "option": "Usar AWS WAF", "isCorrect": false }
      ],
      "comments": "O AWS Inspector é um serviço de avaliação de segurança automatizado que ajuda a melhorar a segurança e a conformidade das aplicações implantadas na AWS. O Inspector avalia automaticamente as aplicações quanto a vulnerabilidades ou desvios das melhores práticas. 'Usar AWS Inspector' é a resposta correta. 'Usar AWS Artifact' está incorreto, pois é um recurso central para informações relacionadas à conformidade. 'Usar AWS Shield' está incorreto, pois é um serviço de proteção contra DDoS gerenciado. 'Usar AWS WAF' está incorreto, pois é um serviço de firewall de aplicação web, não é usado para avaliar as melhores práticas."
    },
    {
      "id": 347,
      "isMultipleChoice": false,
      "question": "Um arquiteto precisa comparar o custo de implantar um servidor web on-premise e uma instância EC2 na nuvem AWS. Qual ferramenta pode ser usada para ajudar o arquiteto?",
      "options": [
        { "option": "AWS Cost Explorer", "isCorrect": false },
        { "option": "AWS Budgets", "isCorrect": false },
        { "option": "AWS TCO Calculator", "isCorrect": true },
        { "option": "AWS Simple Monthly Calculator", "isCorrect": false }
      ],
      "comments": "O TCO calculator é uma ferramenta gratuita fornecida pela AWS que permite estimar as economias de custo ao usar a nuvem AWS em comparação com o uso de um data center on-premise. Use este calculador para comparar o custo de suas aplicações em um ambiente on-premise ou de hospedagem tradicional com a AWS. Descreva sua configuração de ambiente on-premise ou de hospedagem para produzir uma comparação detalhada de custos com a AWS. 'AWS TCO Calculator' é a resposta correta. 'AWS Cost Explorer' está incorreto, pois é uma ferramenta gratuita que permite visualizar gráficos de seus custos. 'AWS Budgets' está incorreto, pois permite definir orçamentos personalizados que alertam quando seus custos ou uso excedem. 'AWS Simple Monthly Calculator' está incorreto, pois ajuda os clientes e prospects a estimar sua fatura mensal da AWS de forma mais eficiente."
    },
    {
      "id": 348,
      "isMultipleChoice": true,
      "question": "Quais dos seguintes são tipos válidos de Reserved Instance? (Selecione DUAS)",
      "options": [
        { "option": "Convertible RI", "isCorrect": true },
        { "option": "Discounted RI", "isCorrect": false },
        { "option": "Scheduled RI", "isCorrect": true },
        { "option": "Long-Term RI", "isCorrect": false },
        { "option": "Special RI", "isCorrect": false }
      ],
      "comments": "As Reserved Instances (RI) oferecem um desconto significativo (até 72%) em comparação com o preço sob demanda e fornecem uma reserva de capacidade quando usadas em uma Zona de Disponibilidade específica. Os seguintes tipos de RI estão disponíveis: Standard RIs, que oferecem o maior desconto (até 75% de desconto em relação ao sob demanda) e são mais adequados para uso em estado estável; Convertible RIs, que oferecem um desconto (até 54% de desconto em relação ao sob demanda) e a capacidade de alterar os atributos da RI, desde que a troca resulte na criação de Reserved Instances de valor igual ou maior; Scheduled RIs, que estão disponíveis para lançamento dentro das janelas de tempo que você reserva. 'Convertible RI' e 'Scheduled RI' são respostas corretas. 'Discounted RI', 'Long-Term RI' e 'Special RI' não são tipos de RI disponíveis."
    },
    {
      "id": 349,
      "isMultipleChoice": false,
      "question": "Em que nível um Network ACL é aplicado?",
      "options": [
        { "option": "Instance level", "isCorrect": false },
        { "option": "Region level", "isCorrect": false },
        { "option": "Availability Zone level", "isCorrect": false },
        { "option": "Subnet level", "isCorrect": true }
      ],
      "comments": "As Network Access Control Lists (ACLs) são uma camada de firewall/segurança aplicada no nível do subnet. Os Security Groups são uma camada de firewall/segurança aplicada no nível da instância. 'Subnet level' é a resposta correta. 'Instance level' está incorreto, pois os security groups são aplicados no nível da instância. 'Region level' está incorreto, pois não são aplicados em nível regional. 'Availability Zone level' está incorreto, pois não são aplicados em nível de Zona de Disponibilidade."
    },
    {
      "id": 350,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS protege contra explorações comuns que podem comprometer a disponibilidade da aplicação, comprometer a segurança ou consumir recursos excessivos?",
      "options": [
        { "option": "AWS WAF", "isCorrect": true },
        { "option": "AWS Shield", "isCorrect": false },
        { "option": "Security Group", "isCorrect": false },
        { "option": "Network ACL", "isCorrect": false }
      ],
      "comments": "AWS WAF é um firewall de aplicação web que protege contra explorações comuns que podem comprometer a disponibilidade da aplicação, comprometer a segurança ou consumir recursos excessivos. 'AWS WAF' é a resposta correta. 'AWS Shield' está incorreto, pois é um serviço de proteção contra DDoS gerenciado. 'Security Group' está incorreto, pois são firewalls aplicados no nível da instância. 'Network ACL' está incorreto, pois são firewalls aplicados no nível do subnet."
    },
    {
      "id": 351,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS fornece servidores privados virtuais pré-configurados (instâncias) que incluem tudo o que é necessário para implantar uma aplicação ou criar um banco de dados?",
      "options": [
        { "option": "AWS CloudFormation", "isCorrect": false },
        { "option": "Amazon LightSail", "isCorrect": true },
        { "option": "Amazon ECS", "isCorrect": false },
        { "option": "AWS Lambda", "isCorrect": false }
      ],
      "comments": "LightSail fornece servidores privados virtuais pré-configurados (instâncias) que incluem tudo o que é necessário para implantar uma aplicação ou criar um banco de dados. LightSail inclui tudo o que você precisa para lançar seu projeto rapidamente – uma máquina virtual, armazenamento baseado em SSD, transferência de dados, gerenciamento de DNS e um IP estático. 'Amazon LightSail' é a resposta correta. 'AWS CloudFormation' está incorreto, pois é usado para implantar recursos por meio de código, não inclui servidores pré-configurados. 'Amazon ECS' está incorreto, pois é um serviço de gerenciamento de contêineres que suporta contêineres Docker. 'AWS Lambda' está incorreto, pois é uma tecnologia de computação sem servidor que permite executar código sem provisionar ou gerenciar servidores."
    },
    {
      "id": 352,
      "isMultipleChoice": false,
      "question": "Um novo usuário não consegue acessar nenhum serviço da AWS, qual é a explicação mais provável?",
      "options": [
        { "option": "O usuário precisa fazer login com um par de chaves", "isCorrect": false },
        { "option": "Os serviços estão atualmente indisponíveis", "isCorrect": false },
        { "option": "Por padrão, novos usuários são criados sem acesso a nenhum serviço da AWS", "isCorrect": true },
        { "option": "O limite padrão para logons de usuário foi atingido", "isCorrect": false }
      ],
      "comments": "Por padrão, novos usuários são criados sem acesso a nenhum serviço da AWS – eles só podem fazer login no console da AWS. Você deve aplicar permissões aos usuários para permitir que eles acessem os serviços. A maneira recomendada de fazer isso é organizar os usuários em grupos e, em seguida, aplicar políticas de permissões ao grupo. 'Por padrão, novos usuários são criados sem acesso a nenhum serviço da AWS' é a resposta correta. 'O usuário precisa fazer login com um par de chaves' está incorreto, pois pares de chaves são usados para acesso programático usando a API. 'Os serviços estão atualmente indisponíveis' está incorreto, pois é muito mais provável que o usuário simplesmente não tenha permissões. 'O limite padrão para logons de usuário foi atingido' está incorreto, pois não há limite para logons de usuário."
    },
    {
      "id": 353,
      "isMultipleChoice": false,
      "question": "Qual dos seguintes programas de conformidade permite que o ambiente AWS processe, mantenha e armazene informações de saúde protegidas?",
      "options": [
        { "option": "ISO 27001", "isCorrect": false },
        { "option": "PCI DSS", "isCorrect": false },
        { "option": "HIPAA", "isCorrect": true },
        { "option": "SOC 1", "isCorrect": false }
      ],
      "comments": "A AWS permite que entidades cobertas e seus associados comerciais sujeitos à Lei de Portabilidade e Responsabilidade de Seguro de Saúde dos EUA de 1996 (HIPAA) usem o ambiente seguro da AWS para processar, manter e armazenar informações de saúde protegidas. 'HIPAA' é a resposta correta. 'ISO 27001' está incorreto, pois ISO/IEC 27001 é um padrão de segurança da informação. 'PCI DSS' está incorreto, pois PCI DSS está relacionado à segurança de pagamentos com cartão de crédito. 'SOC 1' está incorreto, pois está relacionado a relatórios financeiros."
    },
    {
      "id": 354,
      "isMultipleChoice": false,
      "question": "Você precisa garantir que tem a quantidade certa de computação disponível para atender à demanda. Qual serviço da AWS pode escalar automaticamente o número de instâncias EC2 para sua aplicação?",
      "options": [
        { "option": "Amazon Elastic Load Balancer", "isCorrect": false },
        { "option": "Amazon ElastiCache", "isCorrect": false },
        { "option": "Amazon EC2 Auto Scaling", "isCorrect": true },
        { "option": "AWS RedShift", "isCorrect": false }
      ],
      "comments": "O Auto Scaling automatiza o processo de adicionar (escalar para cima) ou remover (escalar para baixo) instâncias EC2 com base na demanda de tráfego para sua aplicação. 'Amazon EC2 Auto Scaling' é a resposta correta. 'Amazon Elastic Load Balancer' está incorreto. ELB distribui automaticamente o tráfego de entrada da aplicação entre vários alvos, como instâncias Amazon EC2, contêineres e endereços IP. 'Amazon ElastiCache' está incorreto. Amazon ElastiCache oferece serviços de banco de dados Redis e Memcached totalmente gerenciados. 'Amazon RedShift' está incorreto. Amazon Redshift é um data warehouse rápido e escalável que facilita e torna econômico analisar todos os seus dados em seu data warehouse e data lake."
    },
    {
      "id": 355,
      "isMultipleChoice": true,
      "question": "Quais serviços da AWS podem ser utilizados sem custo? (Selecione DOIS)",
      "options": [
        {
          "option": "Identity and Access Management (IAM)",
          "isCorrect": true
        },
        {
          "option": "Amazon VPC",
          "isCorrect": true
        },
        {
          "option": "Amazon S3",
          "isCorrect": false
        },
        {
          "option": "Amazon CloudFront",
          "isCorrect": false
        },
        {
          "option": "Amazon RedShift",
          "isCorrect": false
        }
      ],
      "comments": "A AWS oferece muitos serviços sem custo. Isso inclui os serviços AWS IAM para criar usuários, grupos, funções e políticas e o serviço Amazon VPC para criar nuvens privadas virtuais, sub-redes, tabelas de rotas, etc. 'Identity and Access Management (IAM)' é uma resposta correta. 'Amazon VPC' também é uma resposta correta. 'Amazon S3' está incorreto, pois você deve pagar por este serviço. 'Amazon CloudFront' está incorreto, pois você deve pagar por este serviço. 'Amazon RedShift' está incorreto, pois você deve pagar por este serviço."
    },
    {
      "id": 356,
      "isMultipleChoice": true,
      "question": "Usando a terminologia da AWS, quais itens podem ser criados em um bucket do Amazon S3? (Selecione DOIS)",
      "options": [
        {
          "option": "Folders",
          "isCorrect": true
        },
        {
          "option": "Files",
          "isCorrect": false
        },
        {
          "option": "Tables",
          "isCorrect": false
        },
        {
          "option": "Objects",
          "isCorrect": true
        },
        {
          "option": "Queues",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon Simple Storage Service (S3) é um armazenamento de objetos, então você cria objetos (arquivos, imagens, vídeos, etc) dentro dos buckets. Embora seja uma estrutura plana (sem hierarquia), você pode imitar uma estrutura hierárquica usando pastas. 'Folders' é uma resposta correta e 'Objects' também é uma resposta correta. 'Files' está incorreto, pois em um sistema de armazenamento baseado em objetos você cria objetos. 'Tables' está incorreto, pois você não cria tabelas no S3, você as cria em um banco de dados como o Amazon DynamoDB. 'Queues' está incorreto, pois uma fila é criada em um serviço de fila de mensagens como o Amazon SQS."
    },
    {
      "id": 357,
      "isMultipleChoice": true,
      "question": "Quais são duas maneiras de um cliente da AWS reduzir seus gastos mensais? (Selecione DOIS)",
      "options": [
        {
          "option": "Desligar recursos que não estão sendo usados",
          "isCorrect": true
        },
        {
          "option": "Usar tipos de instância mais eficientes em termos de energia",
          "isCorrect": false
        },
        {
          "option": "Reservar capacidade onde for adequado",
          "isCorrect": true
        },
        {
          "option": "Ser eficiente com o uso de Grupos de Segurança",
          "isCorrect": false
        },
        {
          "option": "Reduzir a quantidade de cobranças de entrada de dados",
          "isCorrect": false
        }
      ],
      "comments": "Desligar recursos que não são usados pode reduzir os gastos. Você também pode usar capacidade reservada para reduzir os gastos mensais, à custa de ter que se comprometer com um contrato de 1 ou 3 anos – bom para cargas de trabalho estáveis. 'Desligar recursos que não estão sendo usados' é uma resposta correta. 'Reservar capacidade onde for adequado' também é uma resposta correta. 'Usar tipos de instância mais eficientes em termos de energia' está incorreto, pois você não paga por energia na AWS. 'Ser eficiente com o uso de Grupos de Segurança' está incorreto, pois você não paga por grupos de segurança na AWS. 'Reduzir a quantidade de cobranças de entrada de dados' está incorreto, pois na maioria dos casos você não paga por entrada de dados."
    },
    {
      "id": 358,
      "isMultipleChoice": true,
      "question": "Quais são duas maneiras de conectar a um Amazon VPC a partir de um data center on-premise? (Selecione DUAS)",
      "options": [
        { "option": "VPC Peering", "isCorrect": false },
        { "option": "AWS Direct Connect", "isCorrect": true },
        { "option": "AWS VPN CloudHub", "isCorrect": true },
        { "option": "Internet Gateway", "isCorrect": false },
        { "option": "VPC Router", "isCorrect": false }
      ],
      "comments": "Você pode conectar de seu data center on-premise a um VPC via Direct Connect ou VPN CloudHub. AWS Direct Connect é um serviço de rede que fornece uma alternativa ao uso da Internet para conectar os sites on-premise de um cliente à AWS. Se você tiver várias conexões VPN, pode fornecer comunicação segura entre sites usando o AWS VPN CloudHub. 'AWS Direct Connect' é uma resposta correta. 'AWS VPN CloudHub' também é uma resposta correta. 'VPC Peering' está incorreto, pois é uma maneira de conectar VPCs entre si, não locais on-premises. 'Internet Gateway' está incorreto, pois é usado para fornecer conectividade à Internet a um VPC. 'VPC Router' está incorreto, pois é usado para roteamento dentro de um VPC."
    },
    {
      "id": 359,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS fornece computação em nuvem elástica em escala web permitindo que você implante instâncias de sistema operacional?",
      "options": [
        { "option": "Amazon EBS", "isCorrect": false },
        { "option": "AWS Lambda", "isCorrect": false },
        { "option": "Amazon RDS", "isCorrect": false },
        { "option": "Amazon EC2", "isCorrect": true }
      ],
      "comments": "O Amazon Elastic Compute Cloud (EC2) fornece computação em escala web elástica na nuvem, permitindo que você implante instâncias executando os sistemas operacionais Windows e Linux. 'Amazon EC2' é a resposta correta. 'Amazon EBS' está incorreto. O Amazon Elastic Block Store (Amazon EBS) fornece volumes de armazenamento em bloco persistente para uso com instâncias Amazon EC2 na nuvem AWS. 'AWS Lambda' está incorreto. O AWS Lambda permite que você execute código sem provisionar ou gerenciar sistemas operacionais de servidor. 'Amazon RDS' está incorreto. O Amazon Relational Database Service (Amazon RDS) facilita a configuração, operação e escalonamento de um banco de dados relacional na nuvem."
    },
    {
      "id": 360,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS oferece controle centralizado sobre as chaves de criptografia usadas para proteger seus dados?",
      "options": [
        { "option": "AWS STS", "isCorrect": false },
        { "option": "AWS KMS", "isCorrect": true },
        { "option": "AWS DMS", "isCorrect": false },
        { "option": "Amazon EBS", "isCorrect": false }
      ],
      "comments": "O AWS Key Management Service oferece controle centralizado sobre as chaves de criptografia usadas para proteger seus dados. Você pode criar, importar, rotacionar, desativar, excluir, definir políticas de uso e auditar o uso de chaves de criptografia usadas para criptografar seus dados. 'AWS KMS' é a resposta correta. 'AWS STS' está incorreto. O AWS Security Token Service (STS) é um serviço web que permite solicitar credenciais temporárias e de privilégio limitado para usuários do AWS Identity and Access Management (IAM). 'AWS DMS' está incorreto. O AWS Database Migration Service (DMS) ajuda a migrar bancos de dados para a AWS de forma rápida e segura. 'Amazon EBS' está incorreto. O Amazon Elastic Block Store (Amazon EBS) fornece volumes de armazenamento em bloco persistente para uso com instâncias Amazon EC2 na nuvem AWS."
    },
    {
      "id": 361,
      "isMultipleChoice": false,
      "question": "Qual ferramenta pode ser usada para criar e gerenciar uma seleção de serviços AWS que são aprovados para uso na AWS?",
      "options": [
        { "option": "AWS Service Catalog", "isCorrect": true },
        { "option": "AWS OpsWorks", "isCorrect": false },
        { "option": "Amazon Cloud Directory", "isCorrect": false },
        { "option": "AWS Organizations", "isCorrect": false }
      ],
      "comments": "O AWS Service Catalog permite que as organizações criem e gerenciem catálogos de serviços de TI aprovados para uso na AWS. Esses serviços de TI podem incluir desde imagens de máquinas virtuais, servidores, software e bancos de dados até arquiteturas completas de aplicativos de múltiplas camadas. 'AWS Service Catalog' é a resposta correta. 'AWS OpsWorks' está incorreto. AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas do Chef e Puppet. 'Amazon Cloud Directory' está incorreto. Amazon Cloud Directory permite que você construa diretórios nativos da nuvem flexíveis para organizar hierarquias de dados ao longo de múltiplas dimensões. 'AWS Organizations' está incorreto. AWS Organizations oferece gerenciamento baseado em políticas para múltiplas contas AWS."
    },
    {
      "id": 362,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS pode ser usado para carregar dados do Amazon S3, transformá-los e movê-los para outro destino?",
      "options": [
        { "option": "Amazon RedShift", "isCorrect": false },
        { "option": "Amazon EMR", "isCorrect": false },
        { "option": "Amazon Kinesis", "isCorrect": false },
        { "option": "AWS Glue", "isCorrect": true }
      ],
      "comments": "AWS Glue é um serviço de Extração, Transformação e Carga (ETL). Você pode usar o AWS Glue com fontes de dados no Amazon S3, RedShift e outros bancos de dados. Com o AWS Glue, você transforma e move os dados para vários destinos. É usado para preparar e carregar dados para análises. 'AWS Glue' é a resposta correta. 'Amazon RedShift' está incorreto. Amazon RedShift é um data warehouse. Com um data warehouse, você carrega dados de outros bancos de dados, como bancos de dados SQL transacionais, e executa análises. 'Amazon EMR' está incorreto. Amazon EMR é uma estrutura Hadoop gerenciada que roda no EC2 e S3. É usado para analisar dados, não para ETL. 'Amazon Kinesis' está incorreto. Amazon Kinesis é usado para coletar, processar e analisar dados de streaming em tempo real."
    },
    {
      "id": 363,
      "isMultipleChoice": false,
      "question": "Qual modelo de computação em nuvem oferece ao departamento de TI o mais alto nível de flexibilidade e controle de gerenciamento?",
      "options": [
        { "option": "Infrastructure as a Service (IaaS)", "isCorrect": true },
        { "option": "Platform as a Service (PaaS)", "isCorrect": false },
        { "option": "Software as a Service (SaaS)", "isCorrect": false },
        { "option": "On-premises cloud", "isCorrect": false }
      ],
      "comments": "Com IaaS, o departamento de TI tem a maior flexibilidade e controle de gerenciamento sobre os recursos, pois apenas a camada de infraestrutura é fornecida pelo Provedor de Nuvem. Todo o resto é gerenciado pelo cliente final. Isso significa mais controle e mais responsabilidade pelo gerenciamento. Com PaaS e SaaS, o Provedor de Nuvem gerencia até um nível mais alto na pilha. Isso significa que, como uma organização que usa o serviço, você tem menos controle (e menos responsabilidade). 'On-premises cloud' é um modelo de implantação de nuvem, não um modelo de computação em nuvem. Outros modelos de implantação de nuvem são Privado, Público e Híbrido. 'Infrastructure as a Service (IaaS)' é a resposta correta."
    },
    {
      "id": 364,
      "isMultipleChoice": false,
      "question": "Como uma organização deve implantar um aplicativo em execução em várias instâncias EC2 para garantir que uma falha de energia não cause uma interrupção no aplicativo?",
      "options": [
        { "option": "Launch the EC2 instances in separate regions", "isCorrect": false },
        { "option": "Launch the EC2 instances into different VPCs", "isCorrect": false },
        { "option": "Launch the EC2 instances into different Availability Zones", "isCorrect": true },
        { "option": "Launch the EC2 instances into Edge Locations", "isCorrect": false }
      ],
      "comments": "Se você tiver várias instâncias EC2 que fazem parte de um aplicativo, deve implantá-las em zonas de disponibilidade (AZs) separadas. Cada AZ tem energia redundante e também é alimentada por uma rede diferente. As AZs também têm links de rede de baixa latência, o que é frequentemente vantajoso para a maioria dos aplicativos. Não é necessário implantar em regiões separadas para evitar que uma falha de energia derrube seu aplicativo. As AZs têm energia e redes redundantes, então você está seguro implantando seus aplicativos em várias AZs. Se você dividir seus aplicativos entre regiões, introduzirá latência, o que pode impactar seu aplicativo. Você também pode enfrentar problemas de soberania de dados em alguns casos. Implantar suas instâncias EC2 em diferentes VPCs não é necessário e complicaria a implantação do seu aplicativo. Além disso, lembre-se de que as VPCs dentro de uma região usam a mesma infraestrutura subjacente, então implantar em diferentes VPCs pode ainda resultar em suas instâncias EC2 sendo implantadas nas mesmas AZs. É uma prática recomendada implantar em AZs separadas."
    },
    {
      "id": 365,
      "isMultipleChoice": true,
      "question": "Qual das afirmações abaixo está correta em relação ao Faturamento Consolidado? (Selecione DUAS)",
      "options": [
        { "option": "You receive one bill per AWS account", "isCorrect": false },
        { "option": "You receive a single bill for multiple accounts", "isCorrect": true },
        { "option": "You pay a fee per linked account", "isCorrect": false },
        { "option": "You can combine usage and share volume pricing discounts", "isCorrect": true },
        { "option": "You are charged a fee per user", "isCorrect": false }
      ],
      "comments": "O faturamento consolidado tem os seguintes benefícios: Uma fatura – Você recebe uma fatura para várias contas. Rastreamento fácil – Você pode rastrear os encargos em várias contas e baixar os dados combinados de custo e uso. Uso combinado – Você pode combinar o uso em todas as contas da organização para compartilhar os descontos de preços por volume e descontos de Instâncias Reservadas. Isso pode resultar em uma cobrança menor para seu projeto, departamento ou empresa do que com contas individuais autônomas."
    },
    // SET 3 - 400
    {
      "id": 401,
      "isMultipleChoice": true,
      "question": "Quais serviços da AWS podem ser usados como ferramentas de automação de infraestrutura?",
      "options": [
          { "option": "AWS CloudFormation", "isCorrect": true },
          { "option": "Amazon CloudFront", "isCorrect": false },
          { "option": "AWS Batch", "isCorrect": false },
          { "option": "AWS OpsWorks", "isCorrect": true },
          { "option": "Amazon QuickSight", "isCorrect": false }
      ],
      "comments": "AWS CloudFormation fornece uma linguagem comum para modelar e provisionar recursos de aplicativos da AWS e de terceiros em seu ambiente de nuvem. Ele permite usar linguagens de programação ou um arquivo de texto simples para modelar e provisionar, de maneira automatizada e segura, todos os recursos necessários para seus aplicativos em todas as regiões e contas. AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas do Chef e Puppet, plataformas de automação que permitem usar código para automatizar as configurações de seus servidores. OpsWorks permite usar Chef e Puppet para automatizar como os servidores são configurados, implantados e gerenciados em suas instâncias Amazon EC2 ou em ambientes de computação locais."
    },
    {
        "id": 402,
        "isMultipleChoice": false,
        "question": "Qual tecnologia permite que a capacidade de computação se ajuste conforme as cargas mudam?",
        "options": [
            { "option": "Load balancing", "isCorrect": false },
            { "option": "Automatic failover", "isCorrect": false },
            { "option": "Round robin", "isCorrect": false },
            { "option": "Auto Scaling", "isCorrect": true }
        ],
        "comments": "Auto Scaling permite o ajuste dinâmico dos recursos provisionados com base na demanda. Por exemplo, você pode usar o Amazon EC2 Auto Scaling para lançar instâncias EC2 adicionais quando as métricas do CloudWatch indicarem que a utilização da CPU atingiu um determinado limite. 'Auto Scaling' é a resposta correta. 'Load balancing' está mais focado em alta disponibilidade ao distribuir conexões para várias instâncias. 'Automatic failover' é uma tecnologia que permite alta disponibilidade ao alternar para recursos de standby em caso de interrupção do serviço. 'Round robin' está tipicamente associado ao Serviço de Nome de Domínio (DNS), onde as respostas são fornecidas a partir de um pool de endereços de forma sequencial e circular."
    },
    {
        "id": 403,
        "isMultipleChoice": false,
        "question": "Como uma empresa pode separar custos para armazenamento, Amazon EC2, Amazon S3 e outros serviços da AWS por departamento?",
        "options": [
            { "option": "Adicionar tags específicas de departamento a cada recurso", "isCorrect": true },
            { "option": "Criar uma VPC separada para cada departamento", "isCorrect": false },
            { "option": "Criar uma conta AWS separada para cada departamento", "isCorrect": false },
            { "option": "Usar AWS Organizations", "isCorrect": false }
        ],
        "comments": "Uma tag é um rótulo que você ou a AWS atribui a um recurso da AWS. Cada tag consiste em uma chave e um valor. Você pode usar tags para organizar seus recursos e tags de alocação de custos para rastrear seus custos da AWS em um nível detalhado. Após ativar as tags de alocação de custos, a AWS usa essas tags para organizar os custos dos seus recursos no seu relatório de alocação de custos, facilitando a categorização e o rastreamento dos seus custos da AWS. AWS fornece dois tipos de tags de alocação de custos: tags geradas pela AWS e tags definidas pelo usuário. Você deve ativar ambos os tipos de tags separadamente antes que possam aparecer no Cost Explorer ou em um relatório de alocação de custos."
    },
    {
        "id": 404,
        "isMultipleChoice": false,
        "question": "Qual plano de suporte da AWS fornece acesso a revisões arquitetônicas e operacionais, bem como acesso 24/7 a engenheiros de suporte da nuvem por e-mail, chat online e telefone?",
        "options": [
            { "option": "Basic", "isCorrect": false },
            { "option": "Business", "isCorrect": false },
            { "option": "Developer", "isCorrect": false },
            { "option": "Enterprise", "isCorrect": true }
        ],
        "comments": "Somente o plano Enterprise fornece Revisões Bem-Arquitetadas e Revisões Operacionais. O acesso 24/7 a engenheiros de suporte da nuvem por e-mail, chat online e telefone é oferecido nos planos Business e Enterprise. 'Enterprise' é a resposta correta. 'Basic' inclui apenas: acesso 24x7 ao atendimento ao cliente, documentação, whitepapers e fóruns de suporte. 'Business' não fornece acesso a revisões arquitetônicas e operacionais. 'Developer' oferece suporte de associados de suporte da nuvem, não engenheiros, e também não oferece acesso a revisões arquitetônicas e operacionais."
    },
    {
        "id": 405,
        "isMultipleChoice": false,
        "question": "Sob o modelo de responsabilidade compartilhada da AWS, qual das seguintes é um exemplo de segurança na nuvem AWS?",
        "options": [
            { "option": "Gerenciamento de locais de borda", "isCorrect": false },
            { "option": "Segurança física", "isCorrect": false },
            { "option": "Configuração de firewall", "isCorrect": true },
            { "option": "Infraestrutura global", "isCorrect": false }
        ],
        "comments": "A configuração de firewall é um exemplo de 'segurança na nuvem'. Esta é a responsabilidade do cliente, não da AWS. 'Gerenciamento de locais de borda', 'Segurança física' e 'Infraestrutura global' são exemplos de 'segurança da nuvem' e são responsabilidades da AWS."
    },
    {
    "id": 406,
    "isMultipleChoice": false,
    "question": "Qual serviço da AWS fornece downloads sob demanda de relatórios de segurança e conformidade da AWS?",
    "options": [
        {
        "option": "AWS Directory Service",
        "isCorrect": false
        },
        {
        "option": "AWS Artifact",
        "isCorrect": true
        },
        {
        "option": "AWS Trusted Advisor",
        "isCorrect": false
        },
        {
        "option": "Amazon Inspector",
        "isCorrect": false
        }
    ],
    "comments": "AWS Artifact é o recurso central para informações relacionadas à conformidade que são importantes para você. Ele fornece acesso sob demanda aos relatórios de segurança e conformidade da AWS e a acordos online selecionados. Os relatórios disponíveis no AWS Artifact incluem relatórios de Controle de Organização de Serviço (SOC), relatórios do Payment Card Industry (PCI) e certificações de órgãos de acreditação em várias geografias e verticais de conformidade que validam a implementação e a eficácia operacional dos controles de segurança da AWS."
    },
    {
    "id": 407,
    "isMultipleChoice": false,
    "question": "Qual modelo de precificação do Amazon EC2 é o mais econômico para um servidor de banco de dados sempre ativo e dimensionado corretamente, executando um projeto que durará 1 ano?",
    "options": [
        {
        "option": "On-Demand Instances",
        "isCorrect": false
        },
        {
        "option": "Convertible Reserved Instances",
        "isCorrect": false
        },
        {
        "option": "Spot Instances",
        "isCorrect": false
        },
        {
        "option": "Standard Reserved Instances",
        "isCorrect": true
        }
    ],
    "comments": "As Reserved Instances (RIs) oferecem um desconto significativo (até 72%) em comparação com o preço das instâncias On-Demand. As instâncias reservadas padrão oferecem a maior economia de custos. As RIs são baseadas em um contrato de 1 ou 3 anos, portanto, são adequadas para cargas de trabalho que serão executadas durante o período do contrato."
    },
    {
    "id": 408,
    "isMultipleChoice": true,
    "question": "Quais das opções abaixo são recomendações no pilar de eficiência de desempenho do framework bem arquitetado? (Selecione DUAS)",
    "options": [
        {
        "option": "Democratize tecnologias avançadas",
        "isCorrect": true
        },
        {
        "option": "Expanda globalmente em dias",
        "isCorrect": false
        },
        {
        "option": "Use arquiteturas serverless",
        "isCorrect": true
        },
        {
        "option": "Experimente raramente",
        "isCorrect": false
        },
        {
        "option": "Complexidade mecânica",
        "isCorrect": false
        }
    ],
    "comments": "O pilar de eficiência de desempenho inclui a capacidade de usar recursos de computação de forma eficiente para atender aos requisitos do sistema e manter essa eficiência à medida que a demanda muda e as tecnologias evoluem. Existem cinco princípios de design para eficiência de desempenho na nuvem:. -Democratizar tecnologias avançadas. -Ir global em minutos. -Usar arquiteturas serverless. -Experimentar com mais frequência. -Simpatia mecânica."
    },
    {
        "id": 409,
        "isMultipleChoice": false,
        "question": "Qual recurso permite transferências rápidas, fáceis e seguras de arquivos a longas distâncias entre um cliente e um bucket do Amazon S3?",
        "options": [
            {
                "option": "S3 Static Websites",
                "isCorrect": false
            },
            {
                "option": "S3 Copy",
                "isCorrect": false
            },
            {
                "option": "Multipart Upload",
                "isCorrect": false
            },
            {
                "option": "S3 Transfer Acceleration",
                "isCorrect": true
            }
        ],
        "comments": "O Amazon S3 Transfer Acceleration permite transferências rápidas, fáceis e seguras de arquivos a longas distâncias entre seu cliente e seu bucket do Amazon S3. O S3 Transfer Acceleration aproveita as Localizações de Borda da AWS distribuídas globalmente pelo Amazon CloudFront."
    },
    {
        "id": 410,
        "isMultipleChoice": true,
        "question": "Quais das seguintes opções representam vantagens econômicas de migrar para a nuvem AWS? (Selecione DUAS)",
        "options": [
            {
                "option": "Reduce the need to manage applications",
                "isCorrect": false
            },
            {
                "option": "Increase efficiencies through automation",
                "isCorrect": true
            },
            {
                "option": "Reduce the rate of change",
                "isCorrect": false
            },
            {
                "option": "Reduce the need to manage infrastructure",
                "isCorrect": true
            },
            {
                "option": "Increase time to market for new applications",
                "isCorrect": false
            }
        ],
        "comments": "Com a nuvem AWS, você pode aumentar a eficiência por meio do uso de automação e reduzir a necessidade de gerenciar infraestrutura, permitindo que você se concentre em gerenciar aplicativos."
    },
    {
        "id": 411,
        "isMultipleChoice": true,
        "question": "Quais das opções abaixo são recomendações no pilar de segurança do framework bem arquitetado? (Selecione DUAS)",
        "options": [
            {
                "option": "Enable traceability",
                "isCorrect": true
            },
            {
                "option": "Apply security at the application layer",
                "isCorrect": false
            },
            {
                "option": "Automate security best practices",
                "isCorrect": true
            },
            {
                "option": "Protect data when it is at rest only",
                "isCorrect": false
            },
            {
                "option": "Expect to be secure",
                "isCorrect": false
            }
        ],
        "comments": "O pilar de segurança inclui a capacidade de proteger informações, sistemas e ativos enquanto entrega valor de negócios por meio de avaliações de risco e estratégias de mitigação. Existem seis princípios de design para segurança na nuvem: Implementar uma base de identidade forte, Habilitar rastreabilidade, Aplicar segurança em todas as camadas, Automatizar as melhores práticas de segurança, Proteger dados em trânsito e em repouso, Preparar-se para eventos de segurança."
    },
    {
        "id": 412,
        "isMultipleChoice": true,
        "question": "Quais opções de preços estão disponíveis ao usar Amazon EC2 Reserved Instances? (Selecione DUAS)",
        "options": [
            {
                "option": "Capacity upfront",
                "isCorrect": false
            },
            {
                "option": "All upfront",
                "isCorrect": true
            },
            {
                "option": "Mainly upfront",
                "isCorrect": false
            },
            {
                "option": "Partial upfront",
                "isCorrect": true
            },
            {
                "option": "Enterprise upfront",
                "isCorrect": false
            }
        ],
        "comments": "Amazon EC2 Reserved Instances (RI) oferecem um desconto significativo (até 75%) em comparação com o preço sob demanda e fornecem uma reserva de capacidade quando usadas em uma Zona de Disponibilidade específica. As opções de pagamento incluem All Upfront, Partial Upfront e No Upfront."
    },
    {
        "id": 413,
        "isMultipleChoice": true,
        "question": "Sob o modelo de responsabilidade compartilhada da AWS, pelo que a AWS é responsável? (Selecione DUAS)",
        "options": [
            {
                "option": "Physical security of the data center",
                "isCorrect": true
            },
            {
                "option": "Replacement and disposal of disk drives",
                "isCorrect": true
            },
            {
                "option": "Configuration of security groups",
                "isCorrect": false
            },
            {
                "option": "Patch management of operating systems",
                "isCorrect": false
            },
            {
                "option": "Encryption of customer data",
                "isCorrect": false
            }
        ],
        "comments": "A AWS é responsável pela 'Segurança da Nuvem' e os clientes são responsáveis pela 'Segurança na Nuvem'. A AWS é responsável por itens como a segurança física do data center, substituição de discos antigos e gerenciamento de patches da infraestrutura. Os clientes são responsáveis por itens como configuração de grupos de segurança, ACLs de rede, patching de seus sistemas operacionais e criptografia de seus dados."
    },
    {
        "id": 414,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS é conhecido como um serviço 'serverless' e executa código como funções acionadas por eventos?",
        "options": [
            {
                "option": "Amazon ECS",
                "isCorrect": false
            },
            {
                "option": "AWS Lambda",
                "isCorrect": true
            },
            {
                "option": "Amazon CodeDeploy",
                "isCorrect": false
            },
            {
                "option": "Amazon Cognito",
                "isCorrect": false
            }
        ],
        "comments": "O AWS Lambda permite que você execute código como funções sem provisionar ou gerenciar servidores. Aplicações baseadas em Lambda (também chamadas de aplicações serverless) são compostas por funções acionadas por eventos. Com a computação serverless, sua aplicação ainda é executada em servidores, mas todo o gerenciamento de servidores é feito pela AWS."
    },
    {
        "id": 415,
        "isMultipleChoice": false,
        "question": "Qual afirmação descreve melhor o Amazon Route 53?",
        "options": [
            {
                "option": "Amazon Route 53 é um serviço que permite roteamento dentro de VPCs em uma conta",
                "isCorrect": false
            },
            {
                "option": "Amazon Route 53 é um serviço de Sistema de Nomes de Domínio (DNS) altamente disponível e escalável",
                "isCorrect": true
            },
            {
                "option": "Amazon Route 53 permite modelos de nuvem híbrida ao estender redes on-premise de uma organização para a nuvem AWS",
                "isCorrect": false
            },
            {
                "option": "Amazon Route 53 é um serviço para distribuir conexões de entrada entre uma frota de instâncias EC2 registradas",
                "isCorrect": false
            }
        ],
        "comments": "Amazon Route 53 é um serviço de Sistema de Nomes de Domínio (DNS) na nuvem altamente disponível e escalável. Ele é projetado para fornecer uma maneira extremamente confiável e econômica para desenvolvedores e empresas rotearem usuários finais para aplicativos na Internet, traduzindo nomes como www.exemplo.com em endereços IP numéricos como 192.0.2.1 que os computadores usam para se conectar entre si. Amazon Route 53 é totalmente compatível com IPv6."
    },
    {
        "id": 416,
        "isMultipleChoice": false,
        "question": "Qual serviço fornece uma maneira de converter arquivos de vídeo e áudio de seu formato de origem em versões que serão reproduzidas em dispositivos como smartphones, tablets e PCs?",
        "options": [
            {
                "option": "Amazon Elastic Transcoder",
                "isCorrect": true
            },
            {
                "option": "AWS Glue",
                "isCorrect": false
            },
            {
                "option": "Amazon Rekognition",
                "isCorrect": false
            },
            {
                "option": "Amazon Comprehend",
                "isCorrect": false
            }
        ],
        "comments": "Amazon Elastic Transcoder é uma maneira altamente escalável, fácil de usar e econômica para desenvolvedores e empresas converterem (ou 'transcodificarem') arquivos de vídeo e áudio de seu formato de origem em versões que serão reproduzidas em dispositivos como smartphones, tablets e PCs."
    },
    {
        "id": 417,
        "isMultipleChoice": true,
        "question": "Ao usar AWS Organizations com faturamento consolidado, quais são duas práticas recomendadas válidas? (Selecione DUAS)",
        "options": [
            {
                "option": "Sempre habilitar autenticação multifator (MFA) na conta raiz",
                "isCorrect": true
            },
            {
                "option": "Sempre usar uma senha simples na conta raiz",
                "isCorrect": false
            },
            {
                "option": "A conta pagante deve ser usada apenas para fins de faturamento",
                "isCorrect": true
            },
            {
                "option": "Usar a conta pagante para implantar recursos",
                "isCorrect": false
            },
            {
                "option": "Nunca exceder o limite de 20 contas vinculadas",
                "isCorrect": false
            }
        ],
        "comments": "Ao usar AWS Organizations com faturamento consolidado, as práticas recomendadas incluem: Sempre habilitar autenticação multifator (MFA) na conta raiz. Sempre usar uma senha forte e complexa na conta raiz. A conta pagante deve ser usada apenas para fins de faturamento. Não implante recursos na conta pagante. Existe um limite padrão de 20 contas vinculadas, mas isso pode ser estendido e não há razão para se limitar a um máximo de 20 contas."
    },
    
    {
        "id": 418,
        "isMultipleChoice": true,
        "question": "Quais das opções abaixo são recomendações no pilar de confiabilidade do framework bem arquitetado? (Selecione DUAS)",
        "options": [
            {
                "option": "Use procedimentos de recuperação ad-hoc",
                "isCorrect": false
            },
            {
                "option": "Recuperar automaticamente de falhas",
                "isCorrect": true
            },
            {
                "option": "Escalar verticalmente para aumentar a disponibilidade agregada do sistema",
                "isCorrect": false
            },
            {
                "option": "Tentar estimar com precisão os requisitos de capacidade",
                "isCorrect": false
            },
            {
                "option": "Gerenciar mudanças na automação",
                "isCorrect": true
            }
        ],
        "comments": "O pilar de confiabilidade inclui a capacidade de um sistema de se recuperar de interrupções de infraestrutura ou serviço, adquirir dinamicamente recursos de computação para atender à demanda e mitigar interrupções como erros de configuração ou problemas de rede transitórios. Existem cinco princípios de design para confiabilidade na nuvem: Testar procedimentos de recuperação. Recuperar automaticamente de falhas. Escalar horizontalmente para aumentar a disponibilidade agregada do sistema. Parar de adivinhar a capacidade. Gerenciar mudanças na automação."
    },
    {
        "id": 419,
        "isMultipleChoice": false,
        "question": "Qual plano de suporte da AWS vem com um Gerente de Conta Técnica (TAM)?",
        "options": [
            {
                "option": "Basic",
                "isCorrect": false
            },
            {
                "option": "Developer",
                "isCorrect": false
            },
            {
                "option": "Business",
                "isCorrect": false
            },
            {
                "option": "Enterprise",
                "isCorrect": true
            }
        ],
        "comments": "Apenas o plano Enterprise vem com um Gerente de Conta Técnica (TAM)."
    },
    {
        "id": 420,
        "isMultipleChoice": false,
        "question": "Qual serviço fornece a capacidade de simplesmente fazer upload de aplicativos e deixar que a AWS cuide dos detalhes de implantação de provisionamento de capacidade, balanceamento de carga, auto-escalonamento e monitoramento de saúde do aplicativo?",
        "options": [
            {
                "option": "Amazon EC2",
                "isCorrect": false
            },
            {
                "option": "AWS Elastic Beanstalk",
                "isCorrect": true
            },
            {
                "option": "Amazon EC2 Auto Scaling",
                "isCorrect": false
            },
            {
                "option": "AWS OpsWorks",
                "isCorrect": false
            }
        ],
        "comments": "O AWS Elastic Beanstalk pode ser usado para implantar e gerenciar rapidamente aplicativos na Nuvem AWS. Os desenvolvedores fazem upload de aplicativos e o Elastic Beanstalk cuida dos detalhes de implantação de provisionamento de capacidade, balanceamento de carga, auto-escalonamento e monitoramento de saúde do aplicativo. Considerado uma solução de Plataforma como Serviço (PaaS). Suporta aplicativos web em Java, .NET, PHP, Node.js, Python, Ruby, Go e Docker."
    },
    
    {
        "id": 421,
        "isMultipleChoice": false,
        "question": "Você está preocupado que pode estar se aproximando de alguns dos limites de serviço padrão para vários serviços da AWS. Qual ferramenta da AWS pode ser usada para exibir o uso atual e os limites?",
        "options": [
            {
                "option": "AWS CloudWatch",
                "isCorrect": false
            },
            {
                "option": "AWS Personal Health Dashboard",
                "isCorrect": false
            },
            {
                "option": "AWS Trusted Advisor",
                "isCorrect": true
            },
            {
                "option": "AWS Systems Manager",
                "isCorrect": false
            }
        ],
        "comments": "O Trusted Advisor é um recurso online para ajudar a reduzir custos, aumentar o desempenho e melhorar a segurança otimizando seu ambiente AWS. O Trusted Advisor fornece orientação em tempo real para ajudar a provisionar seus recursos seguindo as melhores práticas da AWS. Oferece uma verificação de Limites de Serviço (na categoria de Desempenho) que exibe seu uso e limites para alguns aspectos de alguns serviços."
    },
    {
        "id": 422,
        "isMultipleChoice": false,
        "question": "Você precisa executar um processo de produção que usará várias instâncias EC2 e será executado constantemente de forma contínua. O processo não pode ser interrompido ou reiniciado sem problemas. Qual modelo de precificação do EC2 seria o melhor para essa carga de trabalho?",
        "options": [
            {
                "option": "Reserved instances",
                "isCorrect": true
            },
            {
                "option": "Spot instances",
                "isCorrect": false
            },
            {
                "option": "On-demand instances",
                "isCorrect": false
            },
            {
                "option": "Flexible instances",
                "isCorrect": false
            }
        ],
        "comments": "As Reserved Instances (RIs) oferecem um desconto significativo (até 75%) em comparação com o preço das instâncias On-Demand. Você tem a flexibilidade de mudar famílias, tipos de SO e tenências enquanto se beneficia do preço de RI ao usar RIs Convertíveis. Neste cenário, para um processo estável que será executado constantemente de forma contínua, as RIs serão a solução mais acessível."
    },
    {
        "id": 423,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS o API Gateway integra para permitir que usuários de todo o mundo alcancem a menor latência possível para solicitações e respostas de API?",
        "options": [
            {
                "option": "AWS Direct Connect",
                "isCorrect": false
            },
            {
                "option": "Amazon S3 Transfer Acceleration",
                "isCorrect": false
            },
            {
                "option": "Amazon CloudFront",
                "isCorrect": true
            },
            {
                "option": "AWS Lambda",
                "isCorrect": false
            }
        ],
        "comments": "O Amazon CloudFront é usado como o endpoint público para o API Gateway. Fornece latência reduzida e proteção contra ataques de negação de serviço distribuída através do uso do CloudFront."
    },
    {
        "id": 424,
        "isMultipleChoice": false,
        "question": "Qual dos abaixo é um serviço de busca totalmente gerenciado da Amazon baseado em software de código aberto?",
        "options": [
            {
                "option": "AWS Elastic Beanstalk",
                "isCorrect": false
            },
            {
                "option": "AWS OpsWorks",
                "isCorrect": false
            },
            {
                "option": "Amazon CloudSearch",
                "isCorrect": false
            },
            {
                "option": "Amazon Elasticsearch",
                "isCorrect": true
            }
        ],
        "comments": "O Amazon Elasticsearch Service é um serviço totalmente gerenciado que facilita a implantação, segurança, operação e escalonamento do Elasticsearch para buscar, analisar e visualizar dados em tempo real. O Elasticsearch é baseado em software de código aberto."
    },
    {
        "id": 425,
        "isMultipleChoice": false,
        "question": "Qual serviço uma organização pode usar para rastrear a atividade de API dentro de sua conta?",
        "options": [
            { "option": "AWS CloudTrail", "isCorrect": true },
            { "option": "Amazon CloudWatch", "isCorrect": false },
            { "option": "AWS IAM", "isCorrect": false },
            { "option": "AWS CloudHSM", "isCorrect": false }
        ],
        "comments": "AWS CloudTrail é um serviço web que registra atividades feitas na sua conta e entrega arquivos de log para um bucket do Amazon S3. CloudTrail é para auditoria (CloudWatch é para monitoramento de desempenho). CloudTrail registra e salva um histórico de chamadas de API para sua conta AWS. Fornece visibilidade sobre a atividade do usuário registrando ações realizadas na sua conta. O histórico de API permite análise de segurança, rastreamento de mudanças de recursos e auditoria de conformidade."
    },
    {
        "id": 426,
        "isMultipleChoice": false,
        "question": "Qual ferramenta fornece orientação em tempo real para ajudar a provisionar seus recursos seguindo as melhores práticas nas áreas de otimização de custos, desempenho, segurança e tolerância a falhas?",
        "options": [
            { "option": "AWS Inspector", "isCorrect": false },
            { "option": "AWS Trusted Advisor", "isCorrect": true },
            { "option": "AWS Personal Health Dashboard", "isCorrect": false },
            { "option": "AWS IAM", "isCorrect": false }
        ],
        "comments": "Trusted Advisor é um recurso online que ajuda a reduzir custos, aumentar o desempenho e melhorar a segurança otimizando seu ambiente AWS. Trusted Advisor fornece orientação em tempo real para ajudar a provisionar seus recursos seguindo as melhores práticas. O Advisor aconselha sobre Otimização de Custos, Desempenho, Segurança e Tolerância a Falhas."
    },
    {
        "id": 427,
        "isMultipleChoice": false,
        "question": "Qual é a melhor maneira para uma organização transferir centenas de terabytes de dados de seu data center local para o Amazon S3 com largura de banda limitada disponível?",
        "options": [
            { "option": "Use S3 Transfer Acceleration", "isCorrect": false },
            { "option": "Apply compression before uploading", "isCorrect": false },
            { "option": "Use AWS Snowball", "isCorrect": true },
            { "option": "Use Amazon CloudFront", "isCorrect": false }
        ],
        "comments": "Snowball é uma solução de transporte de dados em escala de petabytes que usa dispositivos projetados para serem seguros para transferir grandes quantidades de dados para dentro e fora da Nuvem AWS. Usar Snowball resolve desafios comuns com transferências de dados em grande escala, incluindo altos custos de rede, longos tempos de transferência e preocupações de segurança."
    },
    {
        "id": 428,
        "isMultipleChoice": false,
        "question": "Qual banco de dados permite que você escale com o apertar de um botão sem incorrer em qualquer tempo de inatividade?",
        "options": [
            {
                "option": "Amazon RDS",
                "isCorrect": false
            },
            {
                "option": "Amazon EMR",
                "isCorrect": false
            },
            {
                "option": "Amazon DynamoDB",
                "isCorrect": true
            },
            {
                "option": "Amazon RedShift",
                "isCorrect": false
            }
        ],
        "comments": "Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e previsível com escalabilidade contínua. A escalabilidade com o apertar de um botão significa que você pode escalar o banco de dados a qualquer momento sem incorrer em tempo de inatividade. Todos os outros bancos de dados são baseados em instâncias EC2 e, portanto, você deve aumentar o tamanho da instância para escalar, o que resultará em tempo de inatividade."
    },
    {
        "id": 429,
        "isMultipleChoice": true,
        "question": "Quais são as cobranças por usar o Amazon Glacier? (Selecione DUAS)",
        "options": [
            {
                "option": "Data transferred into Glacier",
                "isCorrect": false
            },
            {
                "option": "Retrieval requests",
                "isCorrect": true
            },
            {
                "option": "Data storage",
                "isCorrect": true
            },
            {
                "option": "Enhanced networking",
                "isCorrect": false
            },
            {
                "option": "Number of Availability Zones",
                "isCorrect": false
            }
        ],
        "comments": "Com o Amazon Glacier, você paga pelo armazenamento com base em GB/mês, solicitações de recuperação e quantidade (com base em acelerado, padrão ou em massa), e transferência de dados para fora do Glacier. Você não paga pela transferência de dados para dentro e não há taxas mínimas de armazenamento."
    },
    {
        "id": 430,
        "isMultipleChoice": true,
        "question": "Quais descrições estão corretas em relação aos modelos de implantação em nuvem? (Selecione DUAS)",
        "options": [
            {
                "option": "With the public cloud the consumer organization typically owns and manages the infrastructure",
                "isCorrect": false
            },
            {
                "option": "With the private cloud the consumer organization typically incurs OPEX costs for usage",
                "isCorrect": false
            },
            {
                "option": "With the hybrid cloud, multiple private clouds are connected",
                "isCorrect": false
            },
            {
                "option": "With the public cloud the consumer organization typically incurs OPEX costs for usage",
                "isCorrect": true
            },
            {
                "option": "With the private cloud the consumer organization typically owns and manages the infrastructure",
                "isCorrect": true
            }
        ],
        "comments": "Com a nuvem pública, a organização consumidora normalmente incorre em custos OPEX, pois não possui a infraestrutura e apenas paga pelos custos de uso. Com a nuvem privada, a organização consumidora normalmente possui e gerencia a infraestrutura. Nuvens híbridas são criadas quando você conecta nuvens privadas e públicas juntas."
    },
    {
        "id": 431,
        "isMultipleChoice": true,
        "question": "Quais das seguintes afirmações estão corretas sobre os benefícios do AWS Direct Connect? (Selecione DUAS)",
        "options": [
            {
                "option": "Quick to implement",
                "isCorrect": false
            },
            {
                "option": "Increased reliability (predictable performance)",
                "isCorrect": true
            },
            {
                "option": "Lower cost than a VPN",
                "isCorrect": false
            },
            {
                "option": "Increased bandwidth (predictable bandwidth)",
                "isCorrect": true
            },
            {
                "option": "Uses redundant paths across the Internet",
                "isCorrect": false
            }
        ],
        "comments": "AWS Direct Connect é um serviço de rede que fornece uma alternativa ao uso da Internet para conectar sites on-premises dos clientes à AWS. Os benefícios incluem aumento da confiabilidade (desempenho previsível) e aumento da largura de banda (largura de banda previsível). Não é rápido de implementar, pois pode levar semanas a meses para configurar, e é mais caro que uma VPN."
    },
    {
        "id": 432,
        "isMultipleChoice": false,
        "question": "Qual serviço da AWS permite que você use Chef e Puppet para automatizar como servidores são configurados, implantados e gerenciados em suas instâncias Amazon EC2 ou em ambientes de computação on-premises?",
        "options": [
            {
                "option": "AWS Elastic Beanstalk",
                "isCorrect": false
            },
            {
                "option": "AWS CloudFormation",
                "isCorrect": false
            },
            {
                "option": "AWS Systems Manager",
                "isCorrect": false
            },
            {
                "option": "AWS OpsWorks",
                "isCorrect": true
            }
        ],
        "comments": "AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas do Chef e Puppet. OpsWorks permite que você use Chef e Puppet para automatizar como servidores são configurados, implantados e gerenciados em suas instâncias Amazon EC2 ou em ambientes de computação on-premises."
    },
    {
        "id": 433,
        "isMultipleChoice": false,
        "question": "Qual serviço de banco de dados da AWS fornece um data warehouse totalmente gerenciado que pode ser analisado usando ferramentas SQL e de inteligência de negócios?",
        "options": [
            {
                "option": "Amazon RDS",
                "isCorrect": false
            },
            {
                "option": "Amazon DynamoDB",
                "isCorrect": false
            },
            {
                "option": "Amazon RedShift",
                "isCorrect": true
            },
            {
                "option": "Amazon ElastiCache",
                "isCorrect": false
            }
        ],
        "comments": "Amazon RedShift é um serviço de data warehouse totalmente gerenciado projetado para lidar com petabytes de dados para análise. Os dados podem ser analisados com ferramentas SQL padrão e ferramentas de inteligência de negócios. RedShift permite executar consultas analíticas complexas contra petabytes de dados estruturados."
    },
    {
        "id": 434,
        "isMultipleChoice": false,
        "question": "Qual serviço pode ser usado para criar aplicações gráficas sofisticadas e interativas?",
        "options": [
            {
                "option": "Amazon RedShift",
                "isCorrect": false
            },
            {
                "option": "Amazon Neptune",
                "isCorrect": true
            },
            {
                "option": "AWS X-Ray",
                "isCorrect": false
            },
            {
                "option": "Amazon Athena",
                "isCorrect": false
            }
        ],
        "comments": "Amazon Neptune é um serviço de banco de dados gráfico rápido, confiável e totalmente gerenciado que facilita a criação e execução de aplicações que trabalham com conjuntos de dados altamente conectados. Com o Amazon Neptune, você pode criar aplicações gráficas sofisticadas e interativas que podem consultar bilhões de relacionamentos em milissegundos."
    },
    {
        "id": 435,
        "isMultipleChoice": true,
        "question": "Quais métodos de autenticação estão disponíveis para uso com o Amazon IAM? (Selecione DUAS)",
        "options": [
            {
                "option": "Client certificates",
                "isCorrect": false
            },
            {
                "option": "Access keys",
                "isCorrect": true
            },
            {
                "option": "AWS KMS",
                "isCorrect": false
            },
            {
                "option": "Server certificates",
                "isCorrect": true
            },
            {
                "option": "AES 256",
                "isCorrect": false
            }
        ],
        "comments": "Os métodos de autenticação suportados incluem senhas de console, chaves de acesso e certificados de servidor. As chaves de acesso são uma combinação de um ID de chave de acesso e uma chave de acesso secreta e podem ser usadas para fazer chamadas programáticas para a AWS. Os certificados de servidor são certificados SSL/TLS que você pode usar para autenticar com alguns serviços da AWS."
    },
    {
        "id": 436,
        "isMultipleChoice": false,
        "question": "Qual afirmação melhor descreve a elasticidade na nuvem?",
        "options": [
            {
                "option": "A capacidade de escalar recursos para cima ou para baixo e pagar apenas pelo que você usa",
                "isCorrect": true
            },
            {
                "option": "A capacidade de um sistema se recuperar da falha de um único componente",
                "isCorrect": false
            },
            {
                "option": "Um modelo flexível de desenvolvimento de código que resulta em tempos de implantação mais rápidos",
                "isCorrect": false
            },
            {
                "option": "Um modelo de precificação que permite pagamentos antecipados e compromissos de prazo para reduzir custos",
                "isCorrect": false
            }
        ],
        "comments": "Elasticidade é a capacidade de escalar recursos para cima ou para baixo e pagar apenas pelo que você usa. Um ótimo exemplo é o Auto Scaling, que lança e termina instâncias EC2 com base na carga."
    },
    {
        "id": 437,
        "isMultipleChoice": false,
        "question": "Como o recurso de faturamento consolidado do AWS Organizations trata as Reserved Instances que foram compradas por outra conta na organização?",
        "options": [
            {
                "option": "Todas as contas na organização são tratadas como uma única conta, então qualquer conta pode receber o benefício de custo por hora",
                "isCorrect": true
            },
            {
                "option": "Apenas a conta mestre pode se beneficiar do custo por hora das reserved instances",
                "isCorrect": false
            },
            {
                "option": "Todas as contas na organização são tratadas como uma única conta para descontos por volume, mas não para reserved instances",
                "isCorrect": false
            },
            {
                "option": "AWS Organizations não suporta nenhum benefício de volume ou reserved instance entre contas, é apenas um método de agregar faturas",
                "isCorrect": false
            }
        ],
        "comments": "Para fins de faturamento, o recurso de faturamento consolidado do AWS Organizations trata todas as contas na organização como uma única conta. Isso significa que todas as contas na organização podem receber o benefício de custo por hora das Reserved Instances que são compradas por qualquer outra conta."
    },
    {
        "id": 438,
        "isMultipleChoice": false,
        "question": "Qual dos serviços AWS abaixo suporta backups automatizados como configuração padrão?",
        "options": [
            {
                "option": "Amazon S3",
                "isCorrect": false
            },
            {
                "option": "Amazon RDS",
                "isCorrect": true
            },
            {
                "option": "Amazon EC2",
                "isCorrect": false
            },
            {
                "option": "Amazon EBS",
                "isCorrect": false
            }
        ],
        "comments": "Os backups automatizados do Amazon RDS permitem a recuperação pontual para qualquer ponto dentro do período de retenção até um segundo. Quando os backups automatizados estão ativados para sua instância de banco de dados, o Amazon RDS realiza automaticamente um snapshot diário completo dos seus dados e captura logs de transações. Os backups automatizados são habilitados por padrão e os dados são armazenados no S3."
    },
    {
        "id": 439,
        "isMultipleChoice": true,
        "question": "Quais são as vantagens das Availability Zones? (Selecione DUAS)",
        "options": [
            {
                "option": "Elas permitem recuperação de desastres regionais",
                "isCorrect": false
            },
            {
                "option": "Elas fornecem isolamento de falhas",
                "isCorrect": true
            },
            {
                "option": "Elas permitem o cache de dados para entrega mais rápida aos usuários finais",
                "isCorrect": false
            },
            {
                "option": "Elas são conectadas por conexões de rede de baixa latência",
                "isCorrect": true
            },
            {
                "option": "Elas permitem que você conecte suas redes on-premises à AWS para formar uma nuvem híbrida",
                "isCorrect": false
            }
        ],
        "comments": "Cada região da AWS contém várias localizações distintas chamadas Availability Zones (AZs). Cada AZ é projetada para ser isolada de falhas em outras AZs. As AZs dentro de uma região fornecem conectividade de rede de baixa latência e baixo custo para outras zonas na mesma região, permitindo replicação de dados de forma síncrona para que o failover possa ser automatizado e transparente para seus usuários."
    },
    {
        "id": 440,
        "isMultipleChoice": false,
        "question": "Qual tipo de Reserved Instance do Amazon EC2 permite que você corresponda sua reserva de capacidade a datas e horários recorrentes previsíveis?",
        "options": [
            {
                "option": "Standard RI",
                "isCorrect": false
            },
            {
                "option": "Convertible RI",
                "isCorrect": false
            },
            {
                "option": "Scheduled RI",
                "isCorrect": true
            },
            {
                "option": "Customized RI",
                "isCorrect": false
            }
        ],
        "comments": "Com as Reserved Instances (RIs), você pode escolher o tipo que melhor se adapta às necessidades de suas aplicações. As Scheduled RIs estão disponíveis para serem lançadas dentro das janelas de tempo que você reserva. Esta opção permite que você corresponda sua reserva de capacidade a um cronograma recorrente previsível que requer apenas uma fração de um dia, uma semana ou um mês."
    },
    {
        "id": 441,
        "isMultipleChoice": true,
        "question": "Quais das opções abaixo são recomendações no pilar de otimização de custos do framework bem arquitetado? (Selecione DUAS)",
        "options": [
            {
                "option": "Adotar um modelo de consumo",
                "isCorrect": true
            },
            {
                "option": "Adotar um modelo de despesas de capital",
                "isCorrect": false
            },
            {
                "option": "Começar a gastar dinheiro em operações de data center",
                "isCorrect": false
            },
            {
                "option": "Analisar e atribuir despesas",
                "isCorrect": true
            },
            {
                "option": "Gerenciar seus serviços de forma independente",
                "isCorrect": false
            }
        ],
        "comments": "O pilar de otimização de custos inclui a capacidade de evitar ou eliminar custos desnecessários ou recursos subótimos. Existem cinco princípios de design para otimização de custos na nuvem: Adotar um modelo de consumo, Medir a eficiência geral, Parar de gastar dinheiro em operações de data center, Analisar e atribuir despesas, Usar serviços gerenciados para reduzir o custo de propriedade."
    },
    {
        "id": 442,
        "isMultipleChoice": false,
        "question": "Para que são usadas as Edge locations?",
        "options": [
            {
                "option": "Elas são usadas para terminar conexões VPN",
                "isCorrect": false
            },
            {
                "option": "Elas são usadas pelo CloudFront para cache de conteúdo",
                "isCorrect": true
            },
            {
                "option": "Elas são as APIs públicas para o Amazon S3",
                "isCorrect": false
            },
            {
                "option": "Elas são usadas por regiões para conectividade entre regiões",
                "isCorrect": false
            }
        ],
        "comments": "Uma Edge location é usada pelo CloudFront e é o local onde o conteúdo é armazenado em cache (separado das regiões/AZs da AWS). As solicitações são automaticamente roteadas para a Edge location mais próxima. As Edge locations não estão vinculadas a Zonas de Disponibilidade ou regiões."
    },
    
    {
        "id": 443,
        "isMultipleChoice": false,
        "question": "Qual é a melhor maneira de aplicar um sistema organizacional às instâncias EC2 para que possam ser identificadas por descritores como finalidade ou departamento?",
        "options": [
            {
                "option": "Use descriptive hostnames",
                "isCorrect": false
            },
            {
                "option": "Organize the instances into separate subnets",
                "isCorrect": false
            },
            {
                "option": "Apply tags",
                "isCorrect": true
            },
            {
                "option": "Use the instance meta-data",
                "isCorrect": false
            }
        ],
        "comments": "Para ajudar a gerenciar suas instâncias, imagens e outros recursos do Amazon EC2, você pode opcionalmente atribuir sua própria metadados a cada recurso na forma de tags. Uma tag é um rótulo que você atribui a um recurso da AWS. Cada tag consiste em uma chave e um valor opcional, ambos definidos por você. As tags permitem que você categorize seus recursos da AWS de diferentes maneiras, por exemplo, por finalidade, proprietário ou ambiente."
    },
    {
        "id": 444,
        "isMultipleChoice": true,
        "question": "Para garantir a segurança da sua conta AWS, quais são duas práticas recomendadas da AWS para gerenciar chaves de acesso? (Selecione DUAS)",
        "options": [
            {
                "option": "Não crie chaves de acesso; em vez disso, use roles do IAM.",
                "isCorrect": false
            },
            {
                "option": "Não gere uma chave de acesso para o usuário root da conta.",
                "isCorrect": true
            },
            {
                "option": "Sempre que possível, use roles (funções) do IAM com credenciais temporárias.",
                "isCorrect": true
            },
            {
                "option": "Rotacione as chaves de acesso diariamente.",
                "isCorrect": false
            },
            {
                "option": "Use MFA (autenticação multifator) para proteger as chaves de acesso.",
                "isCorrect": false
            }
        ],
        "comments": "As práticas recomendadas incluem: Não gerar uma chave de acesso para o usuário da conta raiz. Use Credenciais de Segurança Temporárias (IAM Roles) em vez de Chaves de Acesso de Longo Prazo. Gerencie as chaves de acesso do usuário IAM adequadamente."
    },
    {
        "id": 445,
        "isMultipleChoice": false,
        "question": "Uma instância Amazon EC2 executando o Amazon Linux 2 AMI é cobrada em qual incremento?",
        "options": [
            {
                "option": "Per second",
                "isCorrect": true
            },
            {
                "option": "Per hour",
                "isCorrect": false
            },
            {
                "option": "Per CPU",
                "isCorrect": false
            },
            {
                "option": "Per GB",
                "isCorrect": false
            }
        ],
        "comments": "As instâncias do Amazon EC2 executando Linux são cobradas em incrementos de um segundo, com um mínimo de 60 segundos."
    },
    {
        "id": 446,
        "isMultipleChoice": true,
        "question": "Para obter maiores descontos, quais serviços podem ser reservados? (Selecione DUAS)",
        "options": [
            {
                "option": "Amazon RedShift",
                "isCorrect": true
            },
            {
                "option": "Amazon S3",
                "isCorrect": false
            },
            {
                "option": "AWS Lambda",
                "isCorrect": false
            },
            {
                "option": "Amazon DynamoDB",
                "isCorrect": true
            },
            {
                "option": "Amazon CloudWatch",
                "isCorrect": false
            }
        ],
        "comments": "As reservas oferecem maiores descontos, até 75%, pagando pela capacidade antecipadamente. Alguns dos serviços que você pode reservar incluem: EC2, DynamoDB, ElastiCache, RDS e RedShift."
    },
    {
        "id": 447,
        "isMultipleChoice": false,
        "question": "Qual serviço permite que uma organização visualize dados operacionais de vários serviços AWS através de uma interface de usuário unificada e automatize tarefas operacionais?",
        "options": [
            {
                "option": "AWS Config",
                "isCorrect": false
            },
            {
                "option": "AWS OpsWorks",
                "isCorrect": false
            },
            {
                "option": "AWS Systems Manager",
                "isCorrect": true
            },
            {
                "option": "Amazon CloudWatch",
                "isCorrect": false
            }
        ],
        "comments": "AWS Systems Manager oferece visibilidade e controle da sua infraestrutura na AWS. Ele fornece uma interface de usuário unificada para visualizar dados operacionais de vários serviços AWS e permite automatizar tarefas operacionais em seus recursos AWS."
    },
    {
        "id": 448,
        "isMultipleChoice": false,
        "question": "Como uma organização pode rastrear o inventário de recursos e o histórico de configuração para fins de segurança e conformidade regulatória?",
        "options": [
            {
                "option": "Configure AWS Config com os tipos de recursos",
                "isCorrect": true
            },
            {
                "option": "Crie um trilho do Amazon CloudTrail",
                "isCorrect": false
            },
            {
                "option": "Implemente o Amazon GuardDuty",
                "isCorrect": false
            },
            {
                "option": "Execute um relatório com o AWS Artifact",
                "isCorrect": false
            }
        ],
        "comments": "AWS Config é um serviço totalmente gerenciado que fornece um inventário de recursos AWS, histórico de configuração e notificações de alterações de configuração para habilitar segurança e conformidade regulatória."
    },
    {
        "id": 449,
        "isMultipleChoice": false,
        "question": "Um engenheiro de operações de segurança precisa implementar detecção de ameaças e monitoramento para comportamento malicioso ou não autorizado. Qual serviço deve ser usado?",
        "options": [
            {
                "option": "AWS Shield",
                "isCorrect": false
            },
            {
                "option": "AWS KMS",
                "isCorrect": false
            },
            {
                "option": "AWS CloudHSM",
                "isCorrect": false
            },
            {
                "option": "AWS GuardDuty",
                "isCorrect": true
            }
        ],
        "comments": "Amazon GuardDuty oferece detecção de ameaças e monitoramento contínuo de segurança para comportamento malicioso ou não autorizado, ajudando a proteger suas contas e cargas de trabalho AWS."
    },
    {
        "id": 450,
        "isMultipleChoice": false,
        "question": "Qual método de autenticação é usado para autenticar chamadas programáticas para serviços AWS?",
        "options": [
            {
                "option": "Senha do console",
                "isCorrect": false
            },
            {
                "option": "Certificado de servidor",
                "isCorrect": false
            },
            {
                "option": "Par de chaves",
                "isCorrect": false
            },
            {
                "option": "Chaves de acesso",
                "isCorrect": true
            }
        ],
        "comments": "As chaves de acesso são uma combinação de um ID de chave de acesso e uma chave de acesso secreta. Elas são usadas para fazer chamadas programáticas para a AWS usando a API."
    },
    
    {
        "id": 451,
        "isMultipleChoice": false,
        "question": "Qual é um benefício de mover um banco de dados on-premises para o Amazon Relational Database Service (RDS)?",
        "options": [
            {
                "option": "Não há necessidade de gerenciar sistemas operacionais",
                "isCorrect": true
            },
            {
                "option": "Você pode escalar verticalmente sem tempo de inatividade",
                "isCorrect": false
            },
            {
                "option": "Não é necessário administração de banco de dados",
                "isCorrect": false
            },
            {
                "option": "Você pode executar qualquer mecanismo de banco de dados",
                "isCorrect": false
            }
        ],
        "comments": "Com o Amazon RDS, que é um serviço gerenciado, você não precisa gerenciar sistemas operacionais. Isso reduz os custos operacionais. Não é possível escalar verticalmente sem tempo de inatividade, pois ao escalar com RDS é necessário alterar o tipo de instância, o que requer um curto período de inatividade enquanto o sistema operacional da instância reinicia. Ainda é necessário administrar o banco de dados na nuvem, gerenciando suas próprias tabelas e dados dentro do DB. Não é possível executar qualquer mecanismo de banco de dados com RDS, as opções são MySQL, Microsoft SQL, MariaDB, Oracle, PostgreSQL e Aurora."
    },
    {
        "id": 452,
        "isMultipleChoice": false,
        "question": "Quais são os benefícios de usar o Amazon Rekognition com arquivos de imagem?",
        "options": [
            {
                "option": "Pode ser usado para redimensionar imagens",
                "isCorrect": false
            },
            {
                "option": "Pode ser usado para identificar objetos em uma imagem",
                "isCorrect": true
            },
            {
                "option": "Pode ser usado para transcodificar áudio",
                "isCorrect": false
            },
            {
                "option": "Pode ajudar na compressão de imagens",
                "isCorrect": false
            }
        ],
        "comments": "O Rekognition Image é um serviço de reconhecimento de imagem alimentado por aprendizado profundo que detecta objetos, cenas e rostos; extrai texto; reconhece celebridades; e identifica conteúdo inapropriado em imagens. Ele também permite pesquisar e comparar rostos. Não pode ser usado para redimensionar imagens, transcodificar áudio ou comprimir imagens."
    },
    {
        "id": 453,
        "isMultipleChoice": false,
        "question": "Qual entidade IAM está associada a um ID de chave de acesso e chave de acesso secreta?",
        "options": [
            {
                "option": "Grupo IAM",
                "isCorrect": false
            },
            {
                "option": "Função IAM",
                "isCorrect": false
            },
            {
                "option": "Política IAM",
                "isCorrect": false
            },
            {
                "option": "Usuário IAM",
                "isCorrect": true
            }
        ],
        "comments": "Um ID de chave de acesso e uma chave de acesso secreta são usados para assinar solicitações programáticas para a AWS. Eles estão associados a um usuário IAM. Não é possível associar um ID de chave de acesso e uma chave de acesso secreta a um Grupo IAM, Função ou Política."
    },
    {
        "id": 454,
        "isMultipleChoice": false,
        "question": "Qual entidade IAM pode ser usada para atribuir permissões a vários usuários?",
        "options": [
            {
                "option": "Usuário IAM",
                "isCorrect": false
            },
            {
                "option": "Grupo IAM",
                "isCorrect": true
            },
            {
                "option": "Função IAM",
                "isCorrect": false
            },
            {
                "option": "Política de senha IAM",
                "isCorrect": false
            }
        ],
        "comments": "Grupos são coleções de usuários e têm políticas anexadas a eles. Você pode usar grupos para atribuir permissões a vários usuários. Para fazer isso, coloque os usuários no grupo e, em seguida, crie uma política IAM com as permissões corretas e anexe-a ao grupo. Não se usa um Usuário IAM, Função ou política de senha para atribuir permissões a vários usuários."
    },
    
    {
        "id": 455,
        "isMultipleChoice": false,
        "question": "Qual serviço pode ser usado para mover exabytes de dados para a AWS de forma econômica?",
        "options": [
            {
                "option": "AWS Snowmobile",
                "isCorrect": true
            },
            {
                "option": "AWS Snowball",
                "isCorrect": false
            },
            {
                "option": "S3 Transfer Acceleration",
                "isCorrect": false
            },
            {
                "option": "S3 Cross-Region Replication (CRR)",
                "isCorrect": false
            }
        ],
        "comments": "Com o AWS Snowmobile, você pode mover 100PB por snowmobile. A AWS chama isso de 'serviço de transferência de dados em escala de exabyte'. O AWS Snowball é um serviço de transferência de dados em escala de petabyte, movendo até 80TB por dispositivo. O S3 Transfer Acceleration acelera uploads para o Amazon S3, mas não é usado para exabytes de dados. O S3 Cross-Region Replication é usado para copiar dados entre regiões, não para dentro da AWS, e é inadequado para mover uma quantidade tão grande de dados."
    },
    {
        "id": 456,
        "isMultipleChoice": true,
        "question": "Quais serviços da AWS estão associados a Edge Locations? (Selecione DOIS)",
        "options": [
            {
                "option": "Amazon CloudFront",
                "isCorrect": true
            },
            {
                "option": "AWS Direct Connect",
                "isCorrect": false
            },
            {
                "option": "AWS Shield",
                "isCorrect": true
            },
            {
                "option": "Amazon EBS",
                "isCorrect": false
            },
            {
                "option": "AWS Config",
                "isCorrect": false
            }
        ],
        "comments": "Edge Locations fazem parte da rede de entrega de conteúdo (CDN) do Amazon CloudFront, que estão em todo o mundo e são usadas para aproximar o conteúdo dos usuários finais para melhor desempenho. O AWS Shield, que protege contra ataques de DDoS, está disponível globalmente nas Edge Locations do Amazon CloudFront. O AWS Direct Connect é um serviço de rede usado para criar uma nuvem híbrida entre on-premises e a AWS Cloud usando uma conexão de rede privada. O Amazon EBS é um serviço de armazenamento. O AWS Config é usado para avaliar o estado de configuração dos recursos da AWS."
    },
    {
        "id": 457,
        "isMultipleChoice": false,
        "question": "Qual serviço pode ser usado para criar facilmente várias contas?",
        "options": [
            {
                "option": "AWS IAM",
                "isCorrect": false
            },
            {
                "option": "AWS CloudFormation",
                "isCorrect": false
            },
            {
                "option": "AWS Organizations",
                "isCorrect": true
            },
            {
                "option": "Amazon Connect",
                "isCorrect": false
            }
        ],
        "comments": "O AWS Organizations pode ser usado para automatizar a criação de contas AWS via API do Organizations. O AWS IAM não pode ser usado para criar contas. O AWS CloudFormation poderia teoricamente ser usado para automatizar a criação de contas junto com algum script, mas certamente não é uma maneira fácil de alcançar esse resultado. O Amazon Connect é um serviço de contact center baseado em nuvem que facilita para as empresas oferecer um melhor atendimento ao cliente a um custo menor."
    },
    {
        "id": 458,
        "isMultipleChoice": false,
        "question": "Qual é um benefício específico de um plano de Suporte Empresarial?",
        "options": [
            {
                "option": "Gerente de Suporte Técnico incluído",
                "isCorrect": false
            },
            {
                "option": "Arquiteto de Soluções AWS incluído",
                "isCorrect": false
            },
            {
                "option": "Associado de Suporte em Nuvem incluído",
                "isCorrect": false
            },
            {
                "option": "Gerente de Conta Técnica incluído",
                "isCorrect": true
            }
        ],
        "comments": "Apenas o plano de Suporte Empresarial recebe um Gerente de Conta Técnica (TAM). Você não recebe um Arquiteto de Soluções AWS com nenhum plano. Associados de Suporte em Nuvem são fornecidos no plano Developer. Não existe um Gerente de Suporte Técnico nos planos de suporte da AWS."
    },
    {
        "id": 459,
        "isMultipleChoice": false,
        "question": "Você tem executado uma instância Amazon EC2 sob demanda rodando Linux por 4 horas, 5 minutos e 6 segundos. Quanto tempo será cobrado?",
        "options": [
            {
                "option": "5hrs",
                "isCorrect": false
            },
            {
                "option": "4hrs, 6mins",
                "isCorrect": false
            },
            {
                "option": "4hrs, 5mins, and 6 seconds",
                "isCorrect": true
            },
            {
                "option": "4hrs",
                "isCorrect": false
            }
        ],
        "comments": "Instâncias Linux sob demanda, reservadas e spot do Amazon EC2 são cobradas por segundo com uma cobrança mínima de 1 minuto. Portanto, como o mínimo foi excedido, exatamente 4 horas, 5 minutos e 6 segundos serão cobrados."
    },
    {
        "id": 460,
        "isMultipleChoice": false,
        "question": "Qual dos itens abaixo é um exemplo de benefício arquitetural de mover para a nuvem?",
        "options": [
            {
                "option": "Elasticity",
                "isCorrect": true
            },
            {
                "option": "Monolithic services",
                "isCorrect": false
            },
            {
                "option": "Proprietary hardware",
                "isCorrect": false
            },
            {
                "option": "Vertical scalability",
                "isCorrect": false
            }
        ],
        "comments": "Um benefício arquitetural chave de mover para a nuvem é que você obtém elasticidade. Isso significa que suas aplicações podem escalar conforme a demanda aumenta e reduzir conforme a demanda diminui. Isso reduz custos, pois você paga apenas pelo que usa, quando precisa."
    },
    {
      "id": 461,
      "isMultipleChoice": true,
      "question": "Quais são os benefícios de usar instâncias reservadas? (Selecione DOIS)",
      "options": [
          {
              "option": "Reduced cost",
              "isCorrect": true
          },
          {
              "option": "More flexibility",
              "isCorrect": false
          },
          {
              "option": "Reserve capacity",
              "isCorrect": true
          },
          {
              "option": "Uses dedicated hardware",
              "isCorrect": false
          },
          {
              "option": "High availability",
              "isCorrect": false
          }
      ],
      "comments": "Com instâncias reservadas, você se compromete com um termo de 1 ou 3 anos e obtém um desconto significativo em relação à taxa sob demanda. Você também pode reservar capacidade em uma zona de disponibilidade com instâncias reservadas."
    },
    //Inicio das perguntas 500 video
    {
      "id": 551,
      "isMultipleChoice": false,
      "question": "Uma empresa usa o Amazon RDS para um banco de dados de produtos. A empresa quer garantir que o banco de dados seja altamente disponível. Qual recurso do Amazon RDS atenderá a esse requisito?",
      "options": [
        { "option": "Réplicas de leitura", "isCorrect": false },
        { "option": "Implantação azul/verde", "isCorrect": false },
        { "option": "Implantação Multi-AZ", "isCorrect": true },
        { "option": "Instâncias reservadas", "isCorrect": false }
      ],
      "comments": "A implantação Multi-AZ no Amazon RDS fornece alta disponibilidade e failover automático para instâncias de banco de dados. Isso é feito ao manter uma cópia síncrona do banco de dados em uma zona de disponibilidade diferente, garantindo que, em caso de falha na zona primária, o banco de dados possa ser rapidamente transferido para a zona de backup, minimizando o tempo de inatividade."
    },
    
    {
      "id": 552,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS fornece computação serverless para uso com contêineres?",
      "options": [
        { "option": "Amazon Simple Queue Service (Amazon SQS)", "isCorrect": false },
        { "option": "AWS Fargate", "isCorrect": true },
        { "option": "AWS Elastic Beanstalk", "isCorrect": false },
        { "option": "Amazon SageMaker", "isCorrect": false }
      ],
      "comments": "O AWS Fargate corresponde a um mecanismo de computação com tecnologia sem servidor que é compatível com o Amazon ECS ou o Amazon EKS e permite a execução de contêineres sem a necessidade de gerenciar servidores ou clusters.."
    },
    
    {
      "id": 553,
      "isMultipleChoice": false,
      "question": "Uma empresa está usando várias contas AWS para diferentes equipes de negócios. A equipe de finanças deseja receber uma única fatura para todas as contas da empresa. Qual serviço ou ferramenta da AWS a equipe de finanças deve usar para atender a esse requisito?",
      "options": [
        { "option": "AWS Organizations", "isCorrect": true },
        { "option": "AWS Trusted Advisor", "isCorrect": false },
        { "option": "Cost Explorer", "isCorrect": false },
        { "option": "AWS Budgets", "isCorrect": false }
      ],
      "comments": "O AWS Organizations é o serviço correto para consolidar o faturamento de várias contas AWS em uma única fatura. Ele permite que as empresas gerenciem e controlem centralmente suas contas AWS, facilitando a administração e o monitoramento de custos em toda a organização."
    },
    
    {
      "id": 554,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa de um firewall que controle as conexões de rede para e de uma única instância Amazon EC2. Este firewall não controlará as conexões de rede para e de outras instâncias que estão na mesma sub-rede. Qual serviço ou recurso da AWS a empresa pode usar para atender a esses requisitos?",
      "options": [
        {
          "option": "Network ACL",
          "isCorrect": false
        },
        {
          "option": "AWS WAF",
          "isCorrect": false
        },
        {
          "option": "Route table",
          "isCorrect": false
        },
        {
          "option": "Security group",
          "isCorrect": true
        }
      ],
      "comments": "O Security Group é a escolha correta porque ele atua como um firewall virtual que controla o tráfego de entrada e saída de uma instância específica do Amazon EC2. Ao contrário dos Network ACLs, que operam no nível da sub-rede, os Security Groups são aplicados a instâncias individuais, permitindo um controle mais granular."
    },
    
    {
      "id": 555,
      "isMultipleChoice": false,
      "question": "Uma empresa está planejando usar instâncias Amazon EC2 como servidores web. Clientes de todo o mundo usarão os servidores web. A maioria dos clientes usará os servidores web apenas durante certas horas do dia. Como a empresa deve implantar as instâncias EC2 para alcançar o menor custo operacional?",
      "options": [
        { "option": "Em múltiplas Zonas de Disponibilidade", "isCorrect": false },
        { "option": "Em um grupo de Auto Scaling", "isCorrect": true },
        { "option": "Em um grupo de colocação", "isCorrect": false },
        { "option": "Em sub-redes privadas", "isCorrect": false }
      ],
      "comments": "A opção correta é implantar as instâncias EC2 em um grupo de Auto Scaling. Isso permite que a empresa ajuste automaticamente o número de instâncias em resposta à demanda, garantindo que apenas o número necessário de instâncias esteja em execução durante as horas de pico, reduzindo assim os custos operacionais."
    },
    
    {
      "id": 556,
      "isMultipleChoice": false,
      "question": "Qual benefício é sempre gratuito com a AWS, independentemente do plano de suporte AWS de um usuário?",
      "options": [
        {
          "option": "Suporte ao Desenvolvedor AWS",
          "isCorrect": false
        },
        {
          "option": "Fóruns de Desenvolvedores AWS",
          "isCorrect": true
        },
        {
          "option": "Gerenciamento de casos programático",
          "isCorrect": false
        },
        {
          "option": "Gerente de conta técnica AWS (TAM)",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'Fóruns de Desenvolvedores AWS'. Este benefício é sempre gratuito, independentemente do plano de suporte AWS que um usuário possui, permitindo que os desenvolvedores colaborem e compartilhem conhecimento."
    },
    
    {
      "id": 557,
      "isMultipleChoice": false,
      "question": "Uma empresa usa instâncias Amazon EC2 para executar seu aplicativo. O aplicativo precisa estar disponível e em execução continuamente por três anos ou mais. Que tipo de instância EC2 a empresa deve adquirir para obter um desconto no preço do EC2?",
      "options": [
        {
          "option": "Instâncias Reservadas",
          "isCorrect": true
        },
        {
          "option": "Instâncias Spot",
          "isCorrect": false
        },
        {
          "option": "Instâncias Sob Demanda",
          "isCorrect": false
        },
        {
          "option": "EC2 Fleet",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'Instâncias Reservadas'. Elas oferecem um desconto significativo em comparação com as instâncias sob demanda quando você se compromete a usá-las por um ou três anos, tornando-as ideais para aplicativos que precisam estar em execução continuamente por longos períodos."
    },
    
    {
      "id": 558,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa realizar uma auditoria das atividades recentes da conta AWS. A auditoria investigará quem iniciou um evento e quais ações foram realizadas. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
      "options": [
        {
          "option": "AWS Config",
          "isCorrect": false
        },
        {
          "option": "Amazon Rekognition",
          "isCorrect": false
        },
        {
          "option": "AWS CloudTrail",
          "isCorrect": true
        },
        {
          "option": "Amazon Simple Notification Service (Amazon SNS)",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'AWS CloudTrail'. Este serviço permite que as empresas monitorem e auditem as atividades da conta AWS, fornecendo um histórico dos eventos da API, incluindo informações sobre quem iniciou um evento e quais ações foram realizadas."
    },
    
    {
      "id": 559,
      "isMultipleChoice": true,
      "question": "Quais princípios de design estão incluídos no pilar de confiabilidade do AWS Well-Architected Framework? (Escolha dois.)",
      "options": [
        { "option": "Recuperar automaticamente de falhas.", "isCorrect": true },
        { "option": "Conceder acesso a todos para aumentar as cotas de serviço da AWS.", "isCorrect": false },
        { "option": "Parar de adivinhar a capacidade.", "isCorrect": true },
        { "option": "Projetar aplicativos para serem executados em uma única Zona de Disponibilidade.", "isCorrect": false },
        { "option": "Planejar aumentar as cotas de serviço da AWS primeiro em uma região secundária da AWS.", "isCorrect": false }
      ],
      "comments": "Os princípios de 'Recuperar automaticamente de falhas' e 'Parar de adivinhar a capacidade' são fundamentais para o pilar de confiabilidade do AWS Well-Architected Framework. Eles garantem que os sistemas possam se recuperar de falhas e que a capacidade seja gerenciada de forma eficiente para atender à demanda."
    },
    
    {
      "id": 560,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa usar a tecnologia AWS para implantar um site estático. Qual solução atende a esse requisito com a MENOR sobrecarga operacional?",
      "options": [
        {
          "option": "Implantar o site no Amazon EC2.",
          "isCorrect": false
        },
        {
          "option": "Hospedar o site no AWS Elastic Beanstalk.",
          "isCorrect": false
        },
        {
          "option": "Implantar o site com o Amazon Lightsail.",
          "isCorrect": false
        },
        {
          "option": "Hospedar o site no Amazon S3.",
          "isCorrect": true
        }
      ],
      "comments": "Hospedar um site estático no Amazon S3 é a solução com a menor sobrecarga operacional, pois o S3 é um serviço de armazenamento de objetos que pode servir conteúdo estático diretamente, sem a necessidade de gerenciar servidores ou infraestrutura adicional."
    },
    
    {
      "id": 561,
      "isMultipleChoice": false,
      "question": "Qual recomendação o AWS Cost Explorer pode fornecer para ajudar a reduzir custos?",
      "options": [
        {
          "option": "Usar um mecanismo de banco de dados específico.",
          "isCorrect": false
        },
        {
          "option": "Mudar a linguagem de programação de um aplicativo.",
          "isCorrect": false
        },
        {
          "option": "Implantar um sistema operacional específico.",
          "isCorrect": false
        },
        {
          "option": "Encerrar uma instância ociosa.",
          "isCorrect": true
        }
      ],
      "comments": "O AWS Cost Explorer pode identificar instâncias ociosas e recomendar sua rescisão para reduzir custos, já que instâncias ociosas ainda geram custos sem fornecer valor."
    },
    
    {
      "id": 562,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja implantar um aplicativo em várias Zonas de Disponibilidade em uma única Região da AWS. Qual benefício essa implantação proporcionará à empresa?",
      "options": [
        {
          "option": "Melhor desempenho de conexão para clientes globais.",
          "isCorrect": false
        },
        {
          "option": "Arquitetura resiliente e uma solução altamente disponível.",
          "isCorrect": true
        },
        {
          "option": "Redução geral nos custos de armazenamento de dados.",
          "isCorrect": false
        },
        {
          "option": "Capacidade de desligar uma Zona de Disponibilidade durante períodos de baixa demanda.",
          "isCorrect": false
        }
      ],
      "comments": "Implantar um aplicativo em várias Zonas de Disponibilidade dentro de uma única Região da AWS oferece uma arquitetura resiliente e altamente disponível. Isso garante que, mesmo que uma Zona de Disponibilidade enfrente problemas, o aplicativo ainda estará acessível a partir de outras Zonas de Disponibilidade, aumentando a disponibilidade e a tolerância a falhas."
    },
    
    {
      "id": 563,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS as empresas podem usar para assinar feeds RSS para atualizações sobre todos os problemas de serviço da AWS?",
      "options": [
        {
          "option": "Amazon Simple Notification Service (Amazon SNS)",
          "isCorrect": false
        },
        {
          "option": "AWS Health Dashboard",
          "isCorrect": true
        },
        {
          "option": "AWS Config",
          "isCorrect": false
        },
        {
          "option": "AWS CodeCommit",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Health Dashboard fornece informações sobre o status e a integridade dos serviços da AWS, incluindo atualizações sobre problemas de serviço. Ele permite que os usuários assinem feeds RSS para receber notificações sobre esses problemas."
    },
    
    {
      "id": 564,
      "isMultipleChoice": false,
      "question": "Qual compromisso de prazo das Instâncias Reservadas do Amazon EC2 proporcionará a MAIOR economia de custos aos usuários?",
      "options": [
        {
          "option": "1 ano",
          "isCorrect": false
        },
        {
          "option": "2 anos",
          "isCorrect": false
        },
        {
          "option": "3 anos",
          "isCorrect": true
        },
        {
          "option": "5 anos",
          "isCorrect": false
        }
      ],
      "comments": "O compromisso de 3 anos com as Instâncias Reservadas do Amazon EC2 oferece a maior economia de custos em comparação com compromissos de prazo mais curtos, como 1 ou 2 anos. A AWS não oferece um compromisso de 5 anos para Instâncias Reservadas."
    },
    
    {
      "id": 565,
      "isMultipleChoice": false,
      "question": "Uma empresa está executando análises de big data e cálculos massivos em paralelo em seus servidores de teste e desenvolvimento da AWS. A empresa pode tolerar tempo de inatividade ocasional. Qual é a opção de compra do Amazon EC2 mais econômica para a empresa usar?",
      "options": [
        {
          "option": "Instâncias Sob Demanda",
          "isCorrect": false
        },
        {
          "option": "Instâncias Spot",
          "isCorrect": true
        },
        {
          "option": "Instâncias Reservadas",
          "isCorrect": false
        },
        {
          "option": "Planos de Economia",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'Instâncias Spot'. Elas são a opção mais econômica para cargas de trabalho que podem tolerar interrupções, como testes e desenvolvimento, pois oferecem preços significativamente mais baixos em comparação com instâncias sob demanda."
    },
    
    {
      "id": 566,
      "isMultipleChoice": false,
      "question": "Uma empresa executa instâncias do Amazon EC2 em um laboratório de pesquisa. As instâncias funcionam por 3 horas a cada semana e não podem ser interrompidas. Qual é a opção de compra de instância mais econômica para atender a esses requisitos?",
      "options": [
        {
          "option": "Compute Savings Plans",
          "isCorrect": false
        },
        {
          "option": "Instâncias Sob Demanda",
          "isCorrect": true
        },
        {
          "option": "Instâncias Reservadas Conversíveis",
          "isCorrect": false
        },
        {
          "option": "Instâncias Spot",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'Instâncias Sob Demanda'. Elas são a escolha mais econômica para cargas de trabalho que não podem ser interrompidas e que têm um padrão de uso irregular, como 3 horas por semana."
    },
    
    {
      "id": 567,
      "isMultipleChoice": false,
      "question": "Um novo usuário da AWS precisa interagir com o Suporte da AWS usando chamadas de API. Qual plano de suporte da AWS atenderá a esse requisito de forma mais econômica?",
      "options": [
        {
          "option": "AWS Basic Support",
          "isCorrect": false
        },
        {
          "option": "AWS Developer Support",
          "isCorrect": true
        },
        {
          "option": "AWS Business Support",
          "isCorrect": false
        },
        {
          "option": "AWS Enterprise Support",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'AWS Developer Support'. Este plano oferece acesso a interações com o suporte por meio de chamadas de API, sendo a opção mais econômica para usuários que precisam dessa funcionalidade."
    },
    
    {
      "id": 568,
      "isMultipleChoice": false,
      "question": "Uma empresa migrou para a Nuvem AWS. Agora a empresa paga pelos serviços conforme a necessidade. De qual vantagem da computação em nuvem a empresa está se beneficiando?",
      "options": [
        {
          "option": "Parar de gastar dinheiro operando e mantendo data centers",
          "isCorrect": false
        },
        {
          "option": "Aumentar a velocidade e agilidade",
          "isCorrect": false
        },
        {
          "option": "Ir global em minutos",
          "isCorrect": false
        },
        {
          "option": "Trocar despesa fixa por despesa variável",
          "isCorrect": true
        }
      ],
      "comments": "A opção correta é 'Trocar despesa fixa por despesa variável'. A computação em nuvem permite que as empresas paguem apenas pelos recursos que utilizam, transformando despesas fixas em despesas variáveis, o que é uma das principais vantagens do modelo de pagamento conforme o uso."
    },
    
    {
      "id": 569,
      "isMultipleChoice": false,
      "question": "Uma empresa executará uma carga de trabalho computacional previsível em instâncias Amazon EC2 pelos próximos 3 anos. A carga de trabalho é crítica para a empresa. A empresa deseja otimizar os custos para executar a carga de trabalho. Qual solução atenderá a esses requisitos?",
      "options": [
        {
          "option": "Instâncias Spot",
          "isCorrect": false
        },
        {
          "option": "Instâncias Dedicadas",
          "isCorrect": false
        },
        {
          "option": "Savings Plans",
          "isCorrect": true
        },
        {
          "option": "Instâncias On-Demand",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'Savings Plans'. Os Planos de Economia oferecem uma maneira flexível de economizar em custos de computação, especialmente para cargas de trabalho previsíveis e de longo prazo, como 3 anos, garantindo que a empresa possa otimizar seus custos enquanto mantém a carga de trabalho crítica."
    },
    
    {
      "id": 570,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja estimar o custo de sua solução de arquitetura AWS antes da migração. Qual serviço ou recurso da AWS atenderá a esse requisito?",
      "options": [
        {
          "option": "Amazon Detective",
          "isCorrect": false
        },
        {
          "option": "AWS Budgets",
          "isCorrect": false
        },
        {
          "option": "AWS Resource Explorer",
          "isCorrect": false
        },
        {
          "option": "AWS Pricing Calculator",
          "isCorrect": true
        }
      ],
      "comments": "A opção correta é 'AWS Pricing Calculator'. O AWS Pricing Calculator é uma ferramenta que permite estimar o custo de soluções de arquitetura na AWS antes da implementação, ajudando as empresas a planejar e gerenciar seus orçamentos de forma eficaz."
    },
    
    {
      "id": 571,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja gerenciar centralmente o acesso de seus funcionários a várias contas da AWS. Qual serviço ou recurso da AWS a empresa deve usar para atender a esse requisito?",
      "options": [
        { "option": "AWS Identity and Access Management Access Analyzer", "isCorrect": false },
        { "option": "AWS Secrets Manager", "isCorrect": false },
        { "option": "AWS IAM Identity Center", "isCorrect": true },
        { "option": "AWS Security Token Service (AWS STS)", "isCorrect": false }
      ],
      "comments": "O AWS IAM Identity Center (anteriormente conhecido como AWS Single Sign-On) é o serviço recomendado para gerenciar centralmente o acesso de usuários a várias contas da AWS. Ele permite que as empresas configurem e gerenciem o acesso de forma centralizada, facilitando o gerenciamento de permissões e o acesso seguro dos funcionários a diferentes contas da AWS."
    },
    
    {
      "id": 572,
      "isMultipleChoice": false,
      "question": "Uma universidade recebe uma bolsa para conduzir pesquisas usando serviços da AWS. A equipe de pesquisa precisa garantir que o dinheiro da bolsa dure o ano letivo inteiro. A equipe decidiu por uma alocação mensal que soma o valor total da bolsa. Qual serviço ou recurso da AWS notificará a equipe se os gastos excederem o valor planejado?",
      "options": [
        { "option": "AWS Budgets", "isCorrect": true },
        { "option": "Cost Explorer", "isCorrect": false },
        { "option": "Cost allocation tags", "isCorrect": false },
        { "option": "Cost categories", "isCorrect": false }
      ],
      "comments": "O AWS Budgets é o serviço recomendado para monitorar e gerenciar os custos e o uso da AWS. Ele permite que os usuários definam orçamentos personalizados que alertam quando os custos ou o uso excedem os limites planejados. Isso é ideal para a equipe de pesquisa da universidade, pois eles podem ser notificados se os gastos excederem a alocação mensal planejada, ajudando a garantir que o dinheiro da bolsa dure o ano letivo inteiro."
    },
    
    {
      "id": 573,
      "isMultipleChoice": true,
      "question": "Uma empresa migrou sua carga de trabalho para a Nuvem AWS. A empresa deseja otimizar os recursos existentes do Amazon EC2. Quais serviços ou ferramentas da AWS fornecem essa funcionalidade? (Escolha duas.)",
      "options": [
        { "option": "AWS Elastic Beanstalk", "isCorrect": false },
        { "option": "AWS Cost Explorer", "isCorrect": true },
        { "option": "Amazon Detective", "isCorrect": false },
        { "option": "AWS Compute Optimizer", "isCorrect": true },
        { "option": "AWS Billing Conductor", "isCorrect": false }
      ],
      "comments": "O AWS Cost Explorer permite que as empresas analisem seus custos e uso da AWS, ajudando a identificar áreas onde podem otimizar seus gastos. O AWS Compute Optimizer fornece recomendações para otimizar os recursos do Amazon EC2, ajudando a melhorar o desempenho e reduzir custos. Juntos, esses serviços ajudam a empresa a otimizar seus recursos existentes do Amazon EC2."
    },
    
    {
      "id": 574,
      "isMultipleChoice": false,
      "question": "Uma empresa com várias contas e equipes deseja configurar um novo ambiente AWS multi-conta. Qual serviço da AWS suporta esse requisito?",
      "options": [
        { "option": "AWS CloudFormation", "isCorrect": false },
        { "option": "AWS Control Tower", "isCorrect": true },
        { "option": "AWS Config", "isCorrect": false },
        { "option": "Amazon Virtual Private Cloud (Amazon VPC)", "isCorrect": false }
      ],
      "comments": "O AWS Control Tower é o serviço recomendado para configurar e gerenciar um ambiente AWS multi-conta. Ele fornece uma maneira fácil de configurar e governar um ambiente AWS seguro e bem arquitetado, permitindo que as empresas gerenciem várias contas de forma centralizada e eficiente."
    },
    
    {
      "id": 575,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa de acesso a verificações e recomendações que ajudem a empresa a seguir as melhores práticas da AWS para otimização de custos, segurança, tolerância a falhas, desempenho e cotas de serviço. Qual combinação de um serviço da AWS e plano de suporte da AWS na conta atenderá a esses requisitos?",
      "options": [
        { "option": "AWS Trusted Advisor com AWS Developer Support", "isCorrect": false },
        { "option": "AWS Health Dashboard com AWS Enterprise Support", "isCorrect": false },
        { "option": "AWS Trusted Advisor com AWS Business Support", "isCorrect": true },
        { "option": "AWS Health Dashboard com AWS Enterprise On-Ramp Support", "isCorrect": false }
      ],
      "comments": "O AWS Trusted Advisor, quando combinado com o AWS Business Support, oferece acesso a verificações e recomendações abrangentes que ajudam a empresa a seguir as melhores práticas da AWS em várias áreas, incluindo otimização de custos, segurança, tolerância a falhas, desempenho e cotas de serviço. O plano de suporte Business fornece acesso a todas as verificações do Trusted Advisor."
    },
    
    {
      "id": 576,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS ajuda os usuários a planejar e rastrear a migração de dados de inventário de servidores e aplicativos para a AWS?",
      "options": [
        {
          "option": "Amazon CloudWatch",
          "isCorrect": false
        },
        {
          "option": "AWS DataSync",
          "isCorrect": false
        },
        {
          "option": "AWS Migration Hub",
          "isCorrect": true
        },
        {
          "option": "AWS Application Migration Service",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Migration Hub fornece uma única localização para rastrear o progresso das migrações de aplicativos em múltiplos serviços da AWS e parceiros. Ele ajuda a planejar e monitorar a migração de inventário de servidores e aplicativos para a AWS."
    },
    
    {
      "id": 577,
      "isMultipleChoice": false,
      "question": "Qual equipe ou oferta da AWS ajuda os usuários a acelerar a adoção da nuvem por meio de engajamentos pagos em qualquer uma das várias áreas de prática especializadas?",
      "options": [
        {
          "option": "AWS Enterprise Support",
          "isCorrect": false
        },
        {
          "option": "Arquitetos de soluções da AWS",
          "isCorrect": false
        },
        {
          "option": "AWS Professional Services",
          "isCorrect": true
        },
        {
          "option": "Gerentes de contas da AWS",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Professional Services é uma equipe global de especialistas que ajuda os clientes a alcançar seus resultados desejados na nuvem. Eles oferecem engajamentos pagos em várias áreas de prática especializadas para acelerar a adoção da nuvem."
    },
    
    {
      "id": 578,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa comprar instâncias Amazon EC2 para suportar um aplicativo que será executado continuamente por mais de 1 ano. Qual opção de compra de instância EC2 atende a esses requisitos de forma mais econômica?",
      "options": [
        {
          "option": "Instâncias Dedicadas",
          "isCorrect": false
        },
        {
          "option": "Instâncias Spot",
          "isCorrect": false
        },
        {
          "option": "Instâncias Reservadas",
          "isCorrect": true
        },
        {
          "option": "Instâncias Sob Demanda",
          "isCorrect": false
        }
      ],
      "comments": "As Instâncias Reservadas oferecem um desconto significativo em comparação com as Instâncias Sob Demanda quando você se compromete a usá-las por um ou três anos. Isso as torna a opção mais econômica para cargas de trabalho que precisam ser executadas continuamente por mais de um ano."
    },
    
    {
      "id": 579,
      "isMultipleChoice": true,
      "question": "Quais linguagens de programação o AWS Cloud Development Kit (AWS CDK) atualmente suporta? (Escolha duas.)",
      "options": [
        {
          "option": "Python",
          "isCorrect": true
        },
        {
          "option": "Swift",
          "isCorrect": false
        },
        {
          "option": "TypeScript",
          "isCorrect": true
        },
        {
          "option": "Ruby",
          "isCorrect": false
        },
        {
          "option": "PHP",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Cloud Development Kit (AWS CDK) atualmente suporta várias linguagens de programação, incluindo Python e TypeScript. Essas linguagens permitem que os desenvolvedores definam a infraestrutura da nuvem usando código, facilitando a automação e a reutilização de configurações."
    },
    
    {
      "id": 580,
      "isMultipleChoice": false,
      "question": "Qual serviço ou recurso da AWS oferece aos usuários a capacidade de provisionar infraestrutura da AWS programaticamente?",
      "options": [
        {
          "option": "AWS Cloud Development Kit (AWS CDK)",
          "isCorrect": true
        },
        {
          "option": "Amazon CodeGuru",
          "isCorrect": false
        },
        {
          "option": "AWS Config",
          "isCorrect": false
        },
        {
          "option": "AWS CodeCommit",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Cloud Development Kit (AWS CDK) permite que os desenvolvedores definam a infraestrutura da nuvem usando linguagens de programação familiares. Ele oferece uma maneira programática de provisionar recursos da AWS, facilitando a automação e a reutilização de configurações de infraestrutura."
    },
    
    {
      "id": 581,
      "isMultipleChoice": false,
      "question": "Qual serviço ou recurso da AWS permite que uma empresa tenha sua própria seção logicamente isolada da Nuvem AWS?",
      "options": [
        {
          "option": "AWS VPN",
          "isCorrect": false
        },
        {
          "option": "Zonas de Disponibilidade",
          "isCorrect": false
        },
        {
          "option": "Amazon Virtual Private Cloud (Amazon VPC)",
          "isCorrect": true
        },
        {
          "option": "Regiões da AWS",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon Virtual Private Cloud (Amazon VPC) permite que as empresas criem uma seção logicamente isolada da Nuvem AWS onde podem lançar recursos da AWS em uma rede virtual que elas definem. Isso oferece controle total sobre o ambiente de rede, incluindo a seleção de seu próprio intervalo de endereços IP, a criação de sub-redes e a configuração de tabelas de roteamento e gateways de rede."
    },
    
    {
      "id": 582,
      "isMultipleChoice": true,
      "question": "Quais das seguintes ações são controladas com o AWS Identity and Access Management (IAM)? (Escolha duas.)",
      "options": [
        {
          "option": "Controlar o acesso às APIs de serviço da AWS e a outros recursos específicos.",
          "isCorrect": true
        },
        {
          "option": "Fornecer detecção inteligente de ameaças e monitoramento contínuo.",
          "isCorrect": false
        },
        {
          "option": "Proteger o ambiente AWS usando autenticação multifator (MFA).",
          "isCorrect": true
        },
        {
          "option": "Conceder aos usuários acesso aos data centers da AWS.",
          "isCorrect": false
        },
        {
          "option": "Fornecer proteção de firewall para aplicativos contra ataques comuns na web.",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Identity and Access Management (IAM) permite controlar o acesso às APIs de serviço da AWS e a recursos específicos, além de implementar autenticação multifator (MFA) para proteger o ambiente AWS. IAM não é responsável por detecção de ameaças, acesso físico a data centers ou proteção de firewall."
    },
    
    {
      "id": 583,
      "isMultipleChoice": false,
      "question": "Por que os templates do AWS CloudFormation são usados?",
      "options": [
        {
          "option": "Para reduzir o tempo de provisionamento usando automação.",
          "isCorrect": true
        },
        {
          "option": "Para transferir a infraestrutura existente para outra empresa.",
          "isCorrect": false
        },
        {
          "option": "Para reutilizar a infraestrutura local na Nuvem AWS.",
          "isCorrect": false
        },
        {
          "option": "Para implantar uma grande infraestrutura sem implicações de custo.",
          "isCorrect": false
        }
      ],
      "comments": "Os templates do AWS CloudFormation permitem automatizar o provisionamento de infraestrutura na AWS, reduzindo o tempo e o esforço necessários para configurar recursos manualmente."
    },
    
    {
      "id": 584,
      "isMultipleChoice": false,
      "question": "Uma empresa está usando o AWS Identity and Access Management (IAM). Quem pode gerenciar as chaves de acesso do usuário root da conta AWS?",
      "options": [
        {
          "option": "Usuários IAM na mesma conta que receberam permissão",
          "isCorrect": false
        },
        {
          "option": "Funções IAM em qualquer conta que receberam permissão",
          "isCorrect": false
        },
        {
          "option": "Usuários e funções IAM que receberam permissão",
          "isCorrect": false
        },
        {
          "option": "O proprietário da conta AWS",
          "isCorrect": true
        }
      ],
      "comments": "Somente o proprietário da conta AWS pode gerenciar as chaves de acesso do usuário root. É uma prática recomendada não usar a conta root para tarefas diárias e, em vez disso, criar usuários IAM com permissões específicas."
    },
    
    {
      "id": 585,
      "isMultipleChoice": false,
      "question": "Qual grupo compartilha a responsabilidade com a AWS pela segurança e conformidade das contas e recursos da AWS?",
      "options": [
        {
          "option": "Fornecedores terceirizados",
          "isCorrect": false
        },
        {
          "option": "Clientes",
          "isCorrect": true
        },
        {
          "option": "Parceiros revendedores",
          "isCorrect": false
        },
        {
          "option": "Provedores de internet",
          "isCorrect": false
        }
      ],
      "comments": "Na AWS, a segurança e conformidade são uma responsabilidade compartilhada entre a AWS e os clientes. A AWS é responsável pela segurança da nuvem, enquanto os clientes são responsáveis pela segurança na nuvem, o que inclui a configuração segura dos serviços e a proteção dos dados."
    },
    
    {
      "id": 586,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa de um histórico de eventos de quais recursos da AWS a empresa criou. Qual serviço da AWS fornecerá essa informação?",
      "options": [
        {
          "option": "Amazon CloudWatch",
          "isCorrect": false
        },
        {
          "option": "AWS CloudTrail",
          "isCorrect": true
        },
        {
          "option": "Amazon Aurora",
          "isCorrect": false
        },
        {
          "option": "Amazon EventBridge",
          "isCorrect": false
        }
      ],
      "comments": "O AWS CloudTrail é o serviço que fornece um histórico de eventos de API para a conta AWS, incluindo informações sobre quais recursos foram criados, modificados ou excluídos. Ele é essencial para auditoria e monitoramento de atividades na conta AWS."
    },
    
    {
      "id": 587,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja executar bancos de dados relacionais na Nuvem AWS. A empresa quer usar um serviço gerenciado que instale o banco de dados e execute atualizações regulares de software. Qual serviço da AWS atenderá a esses requisitos?",
      "options": [
        {
          "option": "Amazon S3",
          "isCorrect": false
        },
        {
          "option": "Amazon RDS",
          "isCorrect": true
        },
        {
          "option": "Amazon Elastic Block Store (Amazon EBS)",
          "isCorrect": false
        },
        {
          "option": "Amazon DynamoDB",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon RDS (Relational Database Service) é um serviço gerenciado que facilita a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem. Ele cuida de tarefas administrativas como instalação de software, aplicação de patches e backups, permitindo que os usuários se concentrem em otimizar seus aplicativos."
    },
    
    {
      "id": 588,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS fornece um banco de dados de grafos totalmente gerenciado para conjuntos de dados altamente conectados?",
      "options": [
        {
          "option": "Amazon DynamoDB",
          "isCorrect": false
        },
        {
          "option": "Amazon RDS",
          "isCorrect": false
        },
        {
          "option": "Amazon Neptune",
          "isCorrect": true
        },
        {
          "option": "Amazon Aurora",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon Neptune é um serviço de banco de dados de grafos totalmente gerenciado que facilita a criação e execução de aplicativos que trabalham com conjuntos de dados altamente conectados. Ele suporta os modelos de grafos Property Graph e RDF, permitindo consultas eficientes e rápidas em grandes volumes de dados."
    },
    
    {
      "id": 589,
      "isMultipleChoice": false,
      "question": "O ambiente de nuvem de uma empresa inclui instâncias Amazon EC2 e Application Load Balancers. A empresa deseja melhorar as proteções para seus recursos na nuvem contra ataques DDoS. A empresa também quer ter visibilidade em tempo real de qualquer ataque DDoS. Qual serviço da AWS atenderá a esses requisitos?",
      "options": [
        { "option": "AWS Shield Standard", "isCorrect": false },
        { "option": "AWS Firewall Manager", "isCorrect": false },
        { "option": "AWS Shield Advanced", "isCorrect": true },
        { "option": "Amazon GuardDuty", "isCorrect": false }
      ],
      "comments": "O AWS Shield Advanced oferece proteção avançada contra ataques DDoS para aplicações executadas na AWS. Ele fornece detecção e mitigação de ataques DDoS em tempo real, além de visibilidade e relatórios detalhados sobre os ataques. Isso permite que as empresas protejam seus recursos na nuvem de forma eficaz e tenham insights em tempo real sobre a segurança de suas aplicações."
    },
    
    {
      "id": 590,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja atualizar seu aplicativo de processamento de dados online implementando serviços baseados em contêineres que funcionam por 4 horas de cada vez. A empresa não quer provisionar ou gerenciar instâncias de servidor. Qual serviço da AWS atenderá a esses requisitos?",
      "options": [
        {
          "option": "AWS Lambda",
          "isCorrect": false
        },
        {
          "option": "AWS Fargate",
          "isCorrect": true
        },
        {
          "option": "Amazon EC2",
          "isCorrect": false
        },
        {
          "option": "AWS Elastic Beanstalk",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Fargate é um serviço que permite executar contêineres sem a necessidade de provisionar ou gerenciar servidores. Ele é ideal para executar tarefas de contêineres de curta duração, como o processamento de dados online por 4 horas, pois gerencia automaticamente a infraestrutura subjacente."
    },
    
    {
      "id": 591,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS permite que os usuários criem cópias de recursos entre Regiões da AWS?",
      "options": [
        {
          "option": "Amazon ElastiCache",
          "isCorrect": false
        },
        {
          "option": "AWS CloudFormation",
          "isCorrect": true
        },
        {
          "option": "AWS CloudTrail",
          "isCorrect": false
        },
        {
          "option": "AWS Systems Manager",
          "isCorrect": false
        }
      ],
      "comments": "O AWS CloudFormation permite que os usuários criem e gerenciem um conjunto de recursos relacionados da AWS, provisionando e atualizando-os de maneira ordenada e previsível. Ele pode ser usado para replicar recursos em diferentes Regiões da AWS, facilitando a criação de ambientes consistentes em várias localizações geográficas."
    },
    
    {
      "id": 592,
      "isMultipleChoice": false,
      "question": "Qual tarefa é responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS?",
      "options": [
        {
          "option": "Aplicar patches no sistema operacional convidado em instâncias Amazon EC2.",
          "isCorrect": false
        },
        {
          "option": "Fornecer monitoramento de sistemas de gerenciamento de informações de recursos humanos (HRIM).",
          "isCorrect": false
        },
        {
          "option": "Executar backups automáticos de instâncias do Amazon RDS.",
          "isCorrect": true
        },
        {
          "option": "Otimizar os custos de execução dos serviços da AWS.",
          "isCorrect": false
        }
      ],
      "comments": "No modelo de responsabilidade compartilhada da AWS, a AWS é responsável por serviços gerenciados, como backups automáticos de instâncias do Amazon RDS. Os clientes são responsáveis pela configuração e gerenciamento dos seus próprios dados e aplicativos."
    },
    
    {
      "id": 593,
      "isMultipleChoice": false,
      "question": "Um usuário precisa realizar um backup único de um volume do Amazon Elastic Block Store (Amazon EBS) que está anexado a uma instância do Amazon EC2. Qual é a maneira mais eficiente operacionalmente de realizar esse backup?",
      "options": [
        {
          "option": "Anexar outro volume EBS à instância EC2 e copiar o conteúdo.",
          "isCorrect": false
        },
        {
          "option": "Copiar o volume EBS para um servidor que está fora da AWS e está conectado com o AWS Direct Connect.",
          "isCorrect": false
        },
        {
          "option": "Criar um snapshot do volume EBS.",
          "isCorrect": true
        },
        {
          "option": "Criar um script personalizado para copiar o conteúdo do arquivo EBS para o Amazon S3.",
          "isCorrect": false
        }
      ],
      "comments": "A maneira mais eficiente de realizar um backup único de um volume do Amazon EBS é criar um snapshot do EBS. Os snapshots são armazenados de forma incremental no Amazon S3, tornando-os uma solução eficiente e econômica para backups."
    },
    
    {
      "id": 594,
      "isMultipleChoice": false,
      "question": "Um desenvolvedor que não tem experiência com a AWS Cloud quer usar a tecnologia AWS para construir uma aplicação web. Qual serviço da AWS o desenvolvedor deve usar para começar a construir a aplicação?",
      "options": [
        {
          "option": "Amazon SageMaker",
          "isCorrect": false
        },
        {
          "option": "AWS Lambda",
          "isCorrect": false
        },
        {
          "option": "Amazon Lightsail",
          "isCorrect": true
        },
        {
          "option": "Amazon Elastic Container Service (Amazon ECS)",
          "isCorrect": false
        }
      ],
      "comments": "Amazon Lightsail é ideal para desenvolvedores iniciantes na AWS, oferecendo uma maneira simples e fácil de começar a construir aplicações web com todos os recursos necessários e preços previsíveis."
    },
    
    {
      "id": 595,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja gerenciar o acesso e as permissões para suas aplicações de software como serviço (SaaS) de terceiros. A empresa quer usar um portal onde os usuários finais possam acessar contas AWS atribuídas e aplicações da AWS Cloud. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
      "options": [
        {
          "option": "Amazon Cognito",
          "isCorrect": false
        },
        {
          "option": "AWS IAM Identity Center (AWS Single Sign-On)",
          "isCorrect": true
        },
        {
          "option": "AWS Identity and Access Management (IAM)",
          "isCorrect": false
        },
        {
          "option": "AWS Directory Service for Microsoft Active Directory",
          "isCorrect": false
        }
      ],
      "comments": "O AWS IAM Identity Center é ideal para gerenciar o acesso e as permissões de aplicações SaaS de terceiros, oferecendo um portal centralizado para acesso seguro e eficiente a contas AWS e aplicações da AWS Cloud."
    },
    
    {
      "id": 596,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS é projetado para usuários que executam cargas de trabalho que incluem um banco de dados NoSQL?",
      "options": [
        {
          "option": "Amazon RDS",
          "isCorrect": false
        },
        {
          "option": "Amazon S3",
          "isCorrect": false
        },
        {
          "option": "Amazon Redshift",
          "isCorrect": false
        },
        {
          "option": "Amazon DynamoDB",
          "isCorrect": true
        }
      ],
      "comments": "O Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado, ideal para aplicações que exigem baixa latência e alta capacidade de processamento."
    },
    
    {
      "id": 597,
      "isMultipleChoice": false,
      "question": "Uma empresa tem um site na AWS. A empresa deseja entregar o site para um público mundial e fornecer tempos de resposta de baixa latência para usuários globais. Qual serviço da AWS atenderá a esses requisitos?",
      "options": [
        {
          "option": "AWS CloudFormation",
          "isCorrect": false
        },
        {
          "option": "Amazon CloudFront",
          "isCorrect": true
        },
        {
          "option": "Amazon ElastiCache",
          "isCorrect": false
        },
        {
          "option": "Amazon DynamoDB",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon CloudFront é ideal para entregar conteúdo para uma audiência global com baixa latência, sendo uma solução eficaz para sites e outros conteúdos distribuídos."
    },
    
    {
      "id": 598,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja adicionar um chatbot conversacional ao seu site. Qual serviço da AWS a empresa pode usar para atender a esse requisito?",
      "options": [
        {
          "option": "Amazon Textract",
          "isCorrect": false
        },
        {
          "option": "Amazon Lex",
          "isCorrect": true
        },
        {
          "option": "AWS Glue",
          "isCorrect": false
        },
        {
          "option": "Amazon Rekognition",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon Lex é ideal para criar chatbots conversacionais, permitindo a integração de interfaces de conversa em aplicações web usando voz e texto."
    },
    
    {
      "id": 599,
      "isMultipleChoice": false,
      "question": "Qual serviço ou recurso da AWS pode ser usado para monitorar possíveis picos de gravação em disco em um sistema que está executando no Amazon EC2?",
      "options": [
        { "option": "AWS CloudTrail", "isCorrect": false },
        { "option": "AWS Health Dashboard", "isCorrect": false },
        { "option": "AWS Trusted Advisor", "isCorrect": false },
        { "option": "Amazon CloudWatch", "isCorrect": true }
      ],
      "comments": "O Amazon CloudWatch é ideal para monitorar métricas de desempenho de instâncias do Amazon EC2, incluindo operações de leitura e gravação em disco, permitindo a detecção de picos de atividade."
    },
    
    {
      "id": 600,
      "isMultipleChoice": false,
      "question": "Uma empresa possui aplicações que controlam equipamentos de fábrica no local. Qual serviço da AWS a empresa deve usar para executar essas aplicações com a MENOR latência?",
      "options": [
        {
          "option": "AWS Outposts",
          "isCorrect": true
        },
        {
          "option": "Amazon EC2",
          "isCorrect": false
        },
        {
          "option": "AWS Lambda",
          "isCorrect": false
        },
        {
          "option": "AWS Fargate",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Outposts é ideal para aplicações que exigem baixa latência, pois permite que os serviços da AWS sejam executados fisicamente próximos aos equipamentos que estão sendo controlados, reduzindo assim a latência de comunicação."
    },

    {
      "id": 600,
      "isMultipleChoice": false,
      "question": "Uma empresa possui aplicações que controlam equipamentos de fábrica no local. Qual serviço da AWS a empresa deve usar para executar essas aplicações com a MENOR latência?",
      "options": [
        {
          "option": "AWS Outposts",
          "isCorrect": true
        },
        {
          "option": "Amazon EC2",
          "isCorrect": false
        },
        {
          "option": "AWS Lambda",
          "isCorrect": false
        },
        {
          "option": "AWS Fargate",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Outposts é ideal para aplicações que exigem baixa latência, pois permite que os serviços da AWS sejam executados fisicamente próximos aos equipamentos que estão sendo controlados, reduzindo assim a latência de comunicação."
    },
    
    {
      "id": 601,
      "isMultipleChoice": false,
      "question": "Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) se concentra em organizar um inventário de produtos de dados em um catálogo de dados?",
      "options": [
        {
          "option": "Governança",
          "isCorrect": true
        },
        {
          "option": "Operações",
          "isCorrect": false
        },
        {
          "option": "Negócios",
          "isCorrect": false
        },
        {
          "option": "Plataforma",
          "isCorrect": false
        }
      ],
      "comments": "A perspectiva de Governança foca na organização e gerenciamento de dados, incluindo a criação de catálogos de dados. A perspectiva de Operações está mais relacionada à execução e monitoramento de serviços e infraestrutura. A perspectiva de Negócios se concentra em alinhar a estratégia de TI com os objetivos de negócios. A perspectiva de Plataforma trata da infraestrutura e tecnologias necessárias para suportar soluções na nuvem."
    },
    
    {
      "id": 602,
      "isMultipleChoice": false,
      "question": "Uma empresa executa sua carga de trabalho de produção na Nuvem AWS. A empresa precisa escolher um dos Planos de Suporte da AWS. Qual dos Planos de Suporte da AWS atenderá a esses requisitos com o MENOR custo?",
      "options": [
        {
          "option": "Developer",
          "isCorrect": true
        },
        {
          "option": "Enterprise On-Ramp",
          "isCorrect": false
        },
        {
          "option": "Enterprise",
          "isCorrect": false
        },
        {
          "option": "Business",
          "isCorrect": false
        }
      ],
      "comments": "O plano Developer é o mais econômico, adequado para cargas de trabalho de produção com suporte básico. O plano Enterprise On-Ramp oferece suporte avançado, mas a um custo mais alto. O plano Enterprise é o mais caro, oferecendo suporte completo e personalizado. O plano Business oferece suporte técnico 24/7, mas é mais caro que o Developer."
    },
    
    {
      "id": 603,
      "isMultipleChoice": false,
      "question": "Qual é o principal caso de uso do Amazon GuardDuty?",
      "options": [
        { "option": "Monitoramento automático de ameaças para cargas de trabalho AWS", "isCorrect": true },
        { "option": "Prevenção de ataques DDoS", "isCorrect": false },
        { "option": "Proteção contra ataques de injeção SQL", "isCorrect": false },
        { "option": "Provisionamento automático de recursos AWS", "isCorrect": false }
      ],
      "comments": "O Amazon GuardDuty é projetado para monitorar automaticamente ameaças em cargas de trabalho AWS. A prevenção de ataques DDoS é geralmente tratada pelo AWS Shield. A proteção contra injeção SQL requer medidas específicas de segurança de aplicação. O provisionamento automático de recursos é uma função de serviços como o AWS CloudFormation."
    },
    
    {
      "id": 604,
      "isMultipleChoice": false,
      "question": "Qual componente do VPC uma empresa pode usar para configurar um firewall virtual no nível da instância Amazon EC2?",
      "options": [
        { "option": "Grupo de segurança", "isCorrect": true },
        { "option": "ACL de rede", "isCorrect": false },
        { "option": "Tabela de rotas", "isCorrect": false },
        { "option": "Gateway NAT", "isCorrect": false }
      ],
      "comments": "O grupo de segurança atua como um firewall virtual para instâncias EC2, controlando o tráfego de entrada e saída. A ACL de rede é usada para controlar o tráfego em sub-redes inteiras. A tabela de rotas define como o tráfego é direcionado dentro da VPC. O gateway NAT permite que instâncias em uma sub-rede privada acessem a internet."
    },
    
    {
      "id": 605,
      "isMultipleChoice": false,
      "question": "Um desenvolvedor precisa interagir com a AWS usando o AWS CLI. Qual recurso de segurança ou serviço da AWS deve ser provisionado na conta do desenvolvedor para atender a esse requisito?",
      "options": [
        { "option": "Chave de acesso da AWS", "isCorrect": true },
        { "option": "Nome de usuário e senha", "isCorrect": false },
        { "option": "AWS Systems Manager", "isCorrect": false },
        { "option": "Acesso com senha root", "isCorrect": false }
      ],
      "comments": "A chave de acesso da AWS é necessária para autenticar e interagir com a AWS CLI. Nome de usuário e senha são usados para acessar o console da AWS. O AWS Systems Manager é uma ferramenta de gerenciamento de recursos. O acesso com senha root é altamente desaconselhado para operações diárias."
    },
    
    {
      "id": 606,
      "isMultipleChoice": false,
      "question": "Uma empresa de entrega de alimentos precisa bloquear usuários em certos países de acessar seu site. Qual serviço da AWS a empresa deve usar para atender a esse requisito?",
      "options": [
        { "option": "AWS WAF", "isCorrect": true },
        { "option": "AWS Control Tower", "isCorrect": false },
        { "option": "Amazon Fraud Detector", "isCorrect": false },
        { "option": "Amazon Pinpoint", "isCorrect": false }
      ],
      "comments": "O AWS WAF permite criar regras para bloquear acessos de determinados países. O AWS Control Tower é usado para gerenciar contas AWS. O Amazon Fraud Detector é para detectar fraudes. O Amazon Pinpoint é usado para campanhas de marketing e comunicação."
    },
    
    {
      "id": 607,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa usar o Amazon S3 para armazenar arquivos de áudio de 5 megabytes. A empresa raramente acessará os arquivos, mas deve ser capaz de recuperá-los imediatamente. Qual classe de armazenamento S3 atenderá a esses requisitos de forma mais econômica?",
      "options": [
        { "option": "S3 Standard-Infrequent Access (S3 Standard-IA)", "isCorrect": true },
        { "option": "S3 Standard", "isCorrect": false },
        { "option": "S3 Glacier Flexible Retrieval", "isCorrect": false },
        { "option": "S3 Glacier Deep Archive", "isCorrect": false }
      ],
      "comments": "O S3 Standard-IA é ideal para dados acessados raramente, mas que precisam de recuperação imediata. O S3 Standard é mais caro para dados raramente acessados. O S3 Glacier Flexible Retrieval é para dados que podem esperar para serem recuperados. O S3 Glacier Deep Archive é o mais econômico, mas não oferece recuperação imediata."
    },
    
    {
      "id": 608,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja configurar uma conexão de rede segura do local para a AWS Cloud dentro de uma semana. Qual solução atenderá a esses requisitos?",
      "options": [
        { "option": "AWS Site-to-Site VPN", "isCorrect": true },
        { "option": "AWS Direct Connect", "isCorrect": false },
        { "option": "Amazon VPC", "isCorrect": false },
        { "option": "Edge location", "isCorrect": false }
      ],
      "comments": "O AWS Site-to-Site VPN pode ser configurado rapidamente para conexões seguras. O AWS Direct Connect leva mais tempo para ser configurado. O Amazon VPC é uma rede virtual, mas não uma solução de conexão direta. O Edge location é usado para entrega de conteúdo, não para conexões de rede seguras."
    },
    
    {
      "id": 609,
      "isMultipleChoice": false,
      "question": "Qual é a responsabilidade do cliente sob o modelo de responsabilidade compartilhada da AWS ao usar o AWS Lambda?",
      "options": [
        { "option": "O código e as bibliotecas que executam nas funções Lambda.", "isCorrect": true },
        { "option": "Manutenção do hardware subjacente do Lambda.", "isCorrect": false },
        { "option": "Manutenção da infraestrutura de rede do Lambda.", "isCorrect": false },
        { "option": "O software do servidor Lambda.", "isCorrect": false }
      ],
      "comments": "O cliente é responsável pelo código e bibliotecas nas funções Lambda. A AWS gerencia o hardware subjacente. A infraestrutura de rede é mantida pela AWS. O software do servidor é responsabilidade da AWS."
    },
    
    {
      "id": 610,
      "isMultipleChoice": true,
      "question": "Quais tarefas são responsabilidade da AWS de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha duas.)",
      "options": [
        {
          "option": "Proteger o acesso às instalações físicas da AWS.",
          "isCorrect": true
        },
        {
          "option": "Realizar patching e manutenção da infraestrutura.",
          "isCorrect": true
        },
        {
          "option": "Configurar o AWS Identity and Access Management (IAM).",
          "isCorrect": false
        },
        {
          "option": "Configurar grupos de segurança em instâncias Amazon EC2.",
          "isCorrect": false
        },
        {
          "option": "Aplicar patches em aplicações que rodam em instâncias Amazon EC2.",
          "isCorrect": false
        }
      ],
      "comments": "A AWS é responsável por proteger o acesso físico às suas instalações. A AWS também realiza patching e manutenção da infraestrutura. Configurar o IAM é responsabilidade do cliente. Grupos de segurança em EC2 são configurados pelo cliente. Aplicar patches em aplicações é responsabilidade do cliente."
    },
    
    {
      "id": 611,
      "isMultipleChoice": false,
      "question": "O responsável pela conformidade de uma empresa deseja revisar os relatórios do AWS Service Organization Control (SOC). Qual serviço ou recurso da AWS o responsável pela conformidade deve usar para concluir essa tarefa?",
      "options": [
        { "option": "AWS Artifact", "isCorrect": true },
        { "option": "AWS Concierge Support", "isCorrect": false },
        { "option": "AWS Support", "isCorrect": false },
        { "option": "AWS Trusted Advisor", "isCorrect": false }
      ],
      "comments": "O AWS Artifact fornece acesso a relatórios de conformidade, incluindo os relatórios SOC. O AWS Concierge Support é um serviço de suporte premium. O AWS Support oferece suporte técnico, mas não acesso direto a relatórios SOC. O AWS Trusted Advisor fornece recomendações de otimização, não relatórios de conformidade."
    },
    
    {
      "id": 612,
      "isMultipleChoice": false,
      "question": "Uma empresa tem um requisito de conformidade para registrar e avaliar alterações de configuração, bem como realizar ações de remediação em recursos da AWS. Qual serviço da AWS a empresa deve usar?",
      "options": [
        { "option": "AWS Config", "isCorrect": true },
        { "option": "AWS Secrets Manager", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": false },
        { "option": "AWS Trusted Advisor", "isCorrect": false }
      ],
      "comments": "O AWS Config é ideal para registrar e avaliar alterações de configuração e realizar ações de remediação. O AWS Secrets Manager é usado para gerenciar segredos e credenciais. O AWS CloudTrail registra atividades de API, mas não avalia configurações. O AWS Trusted Advisor fornece recomendações de otimização, não registro de configurações."
    },
    
    {
      "id": 613,
      "isMultipleChoice": false,
      "question": "Uma empresa planeja realizar uma migração única de um grande conjunto de dados com milhões de arquivos de seu data center local para a AWS Cloud. Qual serviço da AWS a empresa deve usar para a migração?",
      "options": [
        { "option": "AWS DataSync", "isCorrect": true },
        { "option": "AWS Database Migration Service (AWS DMS)", "isCorrect": false },
        { "option": "AWS Migration Hub", "isCorrect": false },
        { "option": "AWS Application Migration Service", "isCorrect": false }
      ],
      "comments": "O AWS DataSync é ideal para transferir grandes volumes de dados de forma eficiente e segura. O AWS DMS é mais adequado para migrações de bancos de dados. O AWS Migration Hub ajuda a monitorar migrações, mas não realiza a transferência de dados. O AWS Application Migration Service é voltado para migração de aplicações, não de dados em massa."
    },
    
    {
      "id": 614,
      "isMultipleChoice": true,
      "question": "Quais serviços ou recursos de rede da AWS permitem a notação CIDR ao fornecer um intervalo de endereços IP? (Escolha dois.)",
      "options": [
        {
          "option": "Network access control list (network ACL)",
          "isCorrect": true
        },
        {
          "option": "Security groups",
          "isCorrect": false
        },
        {
          "option": "Amazon Machine Image (AMI)",
          "isCorrect": false
        },
        {
          "option": "AWS Budgets",
          "isCorrect": false
        },
        {
          "option": "Amazon Virtual Private Cloud (VPC)",
          "isCorrect": true
        }
      ],
      "comments": "Network ACLs permitem a definição de intervalos de IP usando notação CIDR. Amazon VPC é usado para configurar redes virtuais, onde intervalos de IP também são definidos usando CIDR. Security groups utilizam regras de segurança, mas não diretamente a notação CIDR para intervalos de IP. AMIs são imagens de máquina e não lidam com endereços IP. AWS Budgets é para controle de custos, não relacionado a IPs."
    },
    
    {
      "id": 615,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja desenvolver um aplicativo de acessibilidade que converterá texto em fala audível. Qual serviço da AWS atenderá a esse requisito?",
      "options": [
        {
          "option": "Amazon Polly",
          "isCorrect": true
        },
        {
          "option": "Amazon MQ",
          "isCorrect": false
        },
        {
          "option": "Amazon Neptune",
          "isCorrect": false
        },
        {
          "option": "Amazon Timestream",
          "isCorrect": false
        }
      ],
      "comments": "Amazon Polly é o serviço da AWS que converte texto em fala audível. Amazon MQ é um serviço de mensagens, não de conversão de texto em fala. Amazon Neptune é um banco de dados gráfico, não relacionado a áudio. Amazon Timestream é um banco de dados de séries temporais, não de áudio."
    },
    
    {
      "id": 616,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa configurar conectividade de rede dedicada entre seu data center local e a AWS Cloud. A rede não pode usar a internet pública. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
      "options": [
        {
          "option": "AWS Direct Connect",
          "isCorrect": true
        },
        {
          "option": "AWS Transit Gateway",
          "isCorrect": false
        },
        {
          "option": "AWS VPN",
          "isCorrect": false
        },
        {
          "option": "Amazon CloudFront",
          "isCorrect": false
        }
      ],
      "comments": "AWS Direct Connect fornece conectividade de rede dedicada sem usar a internet pública. AWS Transit Gateway é usado para conectar VPCs e redes locais, mas não oferece conectividade dedicada. AWS VPN usa a internet pública para conexões seguras. Amazon CloudFront é um serviço de entrega de conteúdo, não de conectividade de rede dedicada."
    },
    
    {
      "id": 617,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa usar painéis e gráficos para analisar insights a partir de dados de negócios. Qual serviço da AWS fornecerá os painéis e gráficos para esses insights?",
      "options": [
        { "option": "Amazon QuickSight", "isCorrect": true },
        { "option": "Amazon Macie", "isCorrect": false },
        { "option": "Amazon Aurora", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": false }
      ],
      "comments": "Amazon QuickSight é um serviço de BI que fornece painéis e gráficos para análise de dados. Amazon Macie é usado para segurança de dados, não para visualização. Amazon Aurora é um banco de dados relacional, não uma ferramenta de visualização. AWS CloudTrail é usado para auditoria de atividades, não para criar painéis e gráficos."
    },

    {
      "id": 618,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja migrar sua infraestrutura local para a AWS Cloud. Qual vantagem da computação em nuvem ajudará a empresa a reduzir os custos iniciais?",
      "options": [
        { "option": "Trocar despesa fixa por despesa variável", "isCorrect": true },
        { "option": "Ir global em minutos", "isCorrect": false },
        { "option": "Aumentar a velocidade e agilidade", "isCorrect": false },
        { "option": "Beneficiar-se de economias de escala massivas", "isCorrect": false }
      ],
      "comments": "Trocar despesa fixa por despesa variável permite reduzir custos iniciais, pagando apenas pelo que é usado. Ir global em minutos é sobre alcance geográfico, não custos. Aumentar a velocidade e agilidade refere-se à rapidez de implementação. Economias de escala massivas reduzem custos a longo prazo, não iniciais."
    },

    {
      "id": 619,
      "isMultipleChoice": false,
      "question": "Uma empresa está projetando cargas de trabalho na Nuvem AWS. A empresa deseja que as cargas de trabalho desempenhem sua função pretendida corretamente e consistentemente ao longo de seu ciclo de vida. Qual Pilar do AWS Well-Architected Framework esse objetivo representa?",
      "options": [
        { "option": "Excelência operacional", "isCorrect": false },
        { "option": "Segurança", "isCorrect": false },
        { "option": "Confiabilidade", "isCorrect": true },
        { "option": "Eficiência de desempenho", "isCorrect": false }
      ],
      "comments": "Confiabilidade garante que as cargas de trabalho funcionem corretamente e consistentemente. Excelência operacional foca em operações eficientes. Segurança trata da proteção de dados e sistemas. Eficiência de desempenho visa otimizar recursos e tempo de resposta."
    },
    
    {
      "id": 620,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS é usado para fornecer temporariamente credenciais de segurança federadas para acessar recursos da AWS?",
      "options": [
        { "option": "Amazon GuardDuty", "isCorrect": false },
        { "option": "AWS Simple Token Service (AWS STS)", "isCorrect": true },
        { "option": "AWS Secrets Manager", "isCorrect": false },
        { "option": "AWS Certificate Manager", "isCorrect": false }
      ],
      "comments": "AWS STS fornece credenciais de segurança temporárias para acesso federado. Amazon GuardDuty é um serviço de detecção de ameaças. AWS Secrets Manager gerencia segredos, como senhas. AWS Certificate Manager gerencia certificados SSL/TLS."
    },
    
    {
      "id": 621,
      "isMultipleChoice": false,
      "question": "Qual é um benefício de usar um balanceador de carga Elastic Load Balancing (ELB) com aplicações em execução na Nuvem AWS?",
      "options": [
        { "option": "Um ELB escalará automaticamente os recursos para atender às necessidades de capacidade.", "isCorrect": false },
        { "option": "Um ELB pode balancear o tráfego entre vários recursos de computação.", "isCorrect": true },
        { "option": "Um ELB pode abranger várias Regiões da AWS.", "isCorrect": false },
        { "option": "Um ELB pode balancear o tráfego entre vários gateways de internet.", "isCorrect": false }
      ],
      "comments": "Um ELB pode balancear o tráfego entre vários recursos de computação, distribuindo a carga de forma eficiente. Ele não escala automaticamente recursos, não abrange múltiplas regiões e não balanceia tráfego entre gateways de internet."
    },
    
    {
      "id": 622,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa converter arquivos de vídeo e áudio para um formato que será reproduzido em smartphones. Qual serviço da AWS atenderá a esse requisito?",
      "options": [
        { "option": "Amazon Comprehend", "isCorrect": false },
        { "option": "Amazon Rekognition", "isCorrect": false },
        { "option": "Amazon Elastic Transcoder", "isCorrect": true },
        { "option": "Amazon Polly", "isCorrect": false }
      ],
      "comments": "Amazon Elastic Transcoder é usado para converter arquivos de mídia em formatos que podem ser reproduzidos em dispositivos como smartphones. Amazon Comprehend é para processamento de linguagem natural, Amazon Rekognition é para análise de imagens e vídeos, e Amazon Polly é para conversão de texto em fala."
    },
    
    {
      "id": 623,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja armazenar com segurança as credenciais do banco de dados Amazon RDS e rotacionar automaticamente as senhas dos usuários periodicamente. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
      "options": [
        { "option": "Amazon S3", "isCorrect": false },
        { "option": "AWS Systems Manager Parameter Store", "isCorrect": false },
        { "option": "AWS Secrets Manager", "isCorrect": true },
        { "option": "AWS CloudTrail", "isCorrect": false }
      ],
      "comments": "AWS Secrets Manager é usado para armazenar credenciais de forma segura e rotacionar senhas automaticamente. Amazon S3 é para armazenamento de objetos, AWS Systems Manager Parameter Store é para armazenar dados de configuração, e AWS CloudTrail é para auditoria de logs de atividades."
    },
    
    {
      "id": 624,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa ter a capacidade de configurar infraestrutura para novas aplicações em minutos. Qual vantagem da computação em nuvem ajudará a empresa a atender a esse requisito?",
      "options": [
        { "option": "Trocar despesa fixa por despesa variável", "isCorrect": false },
        { "option": "Ir global em minutos", "isCorrect": false },
        { "option": "Aumentar a velocidade e agilidade", "isCorrect": true },
        { "option": "Parar de adivinhar a capacidade", "isCorrect": false }
      ],
      "comments": "Aumentar a velocidade e agilidade permite configurar infraestrutura rapidamente, atendendo à necessidade de implementar novas aplicações em minutos. Trocar despesa fixa por variável é sobre custos, ir global em minutos é sobre alcance geográfico, e parar de adivinhar a capacidade é sobre dimensionamento de recursos."
    },
    
    {
      "id": 625,
      "isMultipleChoice": false,
      "question": "Uma empresa precisa de um sistema de arquivos NFS gerenciado que possa usar com seus recursos de computação da AWS. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
      "options": [
        { "option": "Amazon Elastic Block Store (Amazon EBS)", "isCorrect": false },
        { "option": "AWS Storage Gateway Tape Gateway", "isCorrect": false },
        { "option": "Amazon S3 Glacier Flexible Retrieval", "isCorrect": false },
        { "option": "Amazon Elastic File System (Amazon EFS)", "isCorrect": true }
      ],
      "comments": "Amazon Elastic File System (Amazon EFS) é um sistema de arquivos NFS gerenciado que pode ser usado com recursos de computação da AWS. Amazon EBS é para armazenamento em bloco, AWS Storage Gateway Tape Gateway é para arquivamento de fitas, e Amazon S3 Glacier é para armazenamento de arquivamento."
    },
    
    {
      "id": 626,
      "isMultipleChoice": false,
      "question": "Uma empresa planeja migrar para a AWS Cloud. A empresa deseja coletar informações sobre seu data center local. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
      "options": [
        {
          "option": "AWS Application Discovery Service",
          "isCorrect": true
        },
        {
          "option": "AWS DataSync",
          "isCorrect": false
        },
        {
          "option": "AWS Storage Gateway",
          "isCorrect": false
        },
        {
          "option": "AWS Database Migration Service (AWS DMS)",
          "isCorrect": false
        }
      ],
      "comments": "AWS Application Discovery Service é usado para coletar informações sobre data centers locais para migração. AWS DataSync é para transferir dados, AWS Storage Gateway é para integrar armazenamento local com a nuvem, e AWS DMS é para migração de bancos de dados."
    },
    
    {
      "id": 627,
      "isMultipleChoice": true,
      "question": "Quais tarefas são responsabilidades do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha duas.)",
      "options": [
        { "option": "Proteger a camada de virtualização.", "isCorrect": false },
        { "option": "Criptografar dados e manter a integridade dos dados.", "isCorrect": true },
        { "option": "Corrigir o sistema operacional do Amazon RDS.", "isCorrect": false },
        { "option": "Manter controles de identidade e acesso.", "isCorrect": true },
        { "option": "Proteger as Zonas de Disponibilidade.", "isCorrect": false }
      ],
      "comments": "Criptografar dados e manter a integridade dos dados, assim como manter controles de identidade e acesso, são responsabilidades do cliente no modelo de responsabilidade compartilhada da AWS. Proteger a camada de virtualização e as Zonas de Disponibilidade são responsabilidades da AWS, e corrigir o sistema operacional do Amazon RDS é gerenciado pela AWS."
    },
    
    {
      "id": 628,
      "isMultipleChoice": true,
      "question": "Uma empresa de varejo online deseja migrar sua carga de trabalho local para a AWS. A empresa precisa lidar automaticamente com um aumento sazonal de carga de trabalho de maneira econômica. Quais recursos da AWS Cloud ajudarão a empresa a atender a esse requisito? (Escolha duas.)",
      "options": [
        { "option": "Implantação de carga de trabalho entre regiões.", "isCorrect": false },
        { "option": "Preço de pagamento conforme o uso.", "isCorrect": true },
        { "option": "Capacidades de auditoria integradas do AWS CloudTrail.", "isCorrect": false },
        { "option": "Políticas de Auto Scaling.", "isCorrect": true },
        { "option": "Registro centralizado de logs.", "isCorrect": false }
      ],
      "comments": "O preço de pagamento conforme o uso e as políticas de Auto Scaling ajudam a lidar com aumentos sazonais de carga de trabalho de forma econômica. A implantação entre regiões, auditoria do AWS CloudTrail e registro centralizado de logs não são diretamente relacionados ao gerenciamento de carga de trabalho sazonal."
    },
    
    {
      "id": 629,
      "isMultipleChoice": false,
      "question": "Um desenvolvedor precisa usar um modelo padronizado para criar cópias da arquitetura AWS de uma empresa para ambientes de desenvolvimento, teste e produção. Qual serviço da AWS o desenvolvedor deve usar para atender a esse requisito?",
      "options": [
        { "option": "AWS Cloud Map", "isCorrect": false },
        { "option": "AWS CloudFormation", "isCorrect": true },
        { "option": "Amazon CloudFront", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": false }
      ],
      "comments": "O AWS CloudFormation é usado para criar e gerenciar recursos de infraestrutura da AWS usando modelos padronizados. AWS Cloud Map é para descoberta de serviços, Amazon CloudFront é uma rede de distribuição de conteúdo, e AWS CloudTrail é para auditoria de logs de atividades."
    },
    
    {
      "id": 630,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS pode criar uma conexão de rede privada das instalações locais para a AWS Cloud?",
      "options": [
        {
          "option": "AWS Config",
          "isCorrect": false
        },
        {
          "option": "Virtual Private Cloud (Amazon VPC)",
          "isCorrect": false
        },
        {
          "option": "AWS Direct Connect",
          "isCorrect": true
        },
        {
          "option": "Amazon Route 53",
          "isCorrect": false
        }
      ],
      "comments": "AWS Direct Connect permite criar uma conexão de rede privada das instalações locais para a AWS Cloud. AWS Config é para auditoria de configurações, Amazon VPC é para criar redes virtuais na AWS, e Amazon Route 53 é um serviço de DNS."
    },
    
    {
      "id": 631,
      "isMultipleChoice": false,
      "question": "De acordo com o modelo de responsabilidade compartilhada da AWS, qual das seguintes é uma responsabilidade do cliente?",
      "options": [
        { "option": "Fragmentar discos rígidos antes de saírem de um data center.", "isCorrect": false },
        { "option": "Impedir que clientes capturem pacotes ou coletem tráfego no nível do hipervisor.", "isCorrect": false },
        { "option": "Aplicar patches no sistema operacional convidado com os patches de segurança mais recentes.", "isCorrect": true },
        { "option": "Manter sistemas de segurança que forneçam monitoramento físico de data centers.", "isCorrect": false }
      ],
      "comments": "Aplicar patches no sistema operacional convidado é uma responsabilidade do cliente no modelo de responsabilidade compartilhada da AWS. Fragmentar discos rígidos e manter monitoramento físico são responsabilidades da AWS, e impedir captura de pacotes no nível do hipervisor é gerenciado pela AWS."
    },
    
    {
      "id": 632,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS usa conversão de fala para texto para ajudar os usuários a criar notas de reuniões?",
      "options": [
        {
          "option": "Amazon Polly",
          "isCorrect": false
        },
        {
          "option": "Amazon Textract",
          "isCorrect": false
        },
        {
          "option": "Amazon Rekognition",
          "isCorrect": false
        },
        {
          "option": "Amazon Transcribe",
          "isCorrect": true
        }
      ],
      "comments": "Amazon Transcribe é usado para conversão de fala para texto, ideal para criar notas de reuniões. Amazon Polly converte texto em fala, Amazon Textract extrai texto de documentos, e Amazon Rekognition analisa imagens e vídeos."
    },
    
    {
      "id": 633,
      "isMultipleChoice": false,
      "question": "Qual serviço ou ferramenta da AWS fornece aos usuários uma interface gráfica que eles podem usar para gerenciar serviços da AWS?",
      "options": [
        { "option": "AWS Copilot", "isCorrect": false },
        { "option": "AWS CLI", "isCorrect": false },
        { "option": "AWS Management Console", "isCorrect": true },
        { "option": "AWS software development kits (SDKs)", "isCorrect": false }
      ],
      "comments": "O AWS Management Console fornece uma interface gráfica para gerenciar serviços da AWS. O AWS Copilot é usado para aplicações containerizadas, o AWS CLI é uma interface de linha de comando, e os SDKs são usados para desenvolvimento de software."
    },
    
    {
      "id": 634,
      "isMultipleChoice": false,
      "question": "Uma empresa tem uma carga de trabalho que será executada continuamente por 1 ano. A carga de trabalho não pode tolerar interrupções de serviço. Qual opção de compra do Amazon EC2 será a mais econômica?",
      "options": [
        { "option": "Instâncias Reservadas com Pagamento Total Antecipado", "isCorrect": true },
        { "option": "Instâncias Reservadas com Pagamento Parcial Antecipado", "isCorrect": false },
        { "option": "Instâncias Dedicadas", "isCorrect": false },
        { "option": "Instâncias Sob Demanda", "isCorrect": false }
      ],
      "comments": "As Instâncias Reservadas com Pagamento Total Antecipado são mais econômicas para cargas de trabalho contínuas de longo prazo. Instâncias com Pagamento Parcial Antecipado oferecem menos economia, Instâncias Dedicadas são mais caras e Instâncias Sob Demanda são mais caras para uso contínuo."
    },
    
    {
      "id": 635,
      "isMultipleChoice": false,
      "question": "Uma empresa migrou seus sistemas para a AWS Cloud. Os sistemas estão dimensionados corretamente e uma revisão de segurança não revelou problemas. A empresa deve garantir que desenvolvimentos adicionais, integrações, mudanças e crescimento no uso do sistema não comprometam essa infraestrutura AWS otimizada. Qual serviço da AWS a empresa deve usar para relatar otimização e segurança contínuas?",
      "options": [
        { "option": "AWS Trusted Advisor", "isCorrect": true },
        { "option": "AWS Health Dashboard", "isCorrect": false },
        { "option": "Amazon Connect", "isCorrect": false },
        { "option": "AWS Systems Manager", "isCorrect": false }
      ],
      "comments": "O AWS Trusted Advisor fornece recomendações para otimização contínua e segurança. O AWS Health Dashboard fornece informações sobre eventos que podem afetar a infraestrutura, Amazon Connect é para contact centers, e AWS Systems Manager é para gerenciamento de recursos."
    },
    
    {
      "id": 636,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS integra-se com outros serviços da AWS para fornecer a capacidade de criptografar dados em repouso?",
      "options": [
        {
          "option": "AWS Key Management Service (AWS KMS)",
          "isCorrect": true
        },
        {
          "option": "AWS Certificate Manager (ACM)",
          "isCorrect": false
        },
        {
          "option": "AWS Identity and Access Management (IAM)",
          "isCorrect": false
        },
        {
          "option": "AWS Security Hub",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Key Management Service (AWS KMS) é usado para criptografar dados em repouso. O AWS Certificate Manager (ACM) gerencia certificados SSL/TLS, o IAM gerencia acesso e permissões, e o AWS Security Hub centraliza alertas de segurança."
    },
    
    {
      "id": 637,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja rastrear o custo mensal e o uso de todas as instâncias do Amazon EC2 em um ambiente AWS específico. Qual serviço ou ferramenta da AWS atenderá a esses requisitos?",
      "options": [
        {
          "option": "AWS Cost Anomaly Detection",
          "isCorrect": false
        },
        {
          "option": "AWS Budgets",
          "isCorrect": true
        },
        {
          "option": "AWS Compute Optimizer",
          "isCorrect": false
        },
        {
          "option": "AWS Trusted Advisor",
          "isCorrect": false
        }
      ],
      "comments": "O AWS Budgets permite rastrear o custo e uso mensal de recursos da AWS. O AWS Cost Anomaly Detection detecta anomalias de custo, o AWS Compute Optimizer recomenda otimizações de recursos, e o AWS Trusted Advisor fornece recomendações de boas práticas."
    },
    
    {
      "id": 638,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja a capacidade de adquirir automaticamente recursos conforme necessário e liberar os recursos quando não forem mais necessários. Qual conceito de nuvem descreve essa funcionalidade?",
      "options": [
        { "option": "Disponibilidade", "isCorrect": false },
        { "option": "Elasticidade", "isCorrect": true },
        { "option": "Durabilidade", "isCorrect": false },
        { "option": "Confiabilidade", "isCorrect": false }
      ],
      "comments": "Elasticidade descreve a capacidade de adquirir e liberar recursos automaticamente conforme necessário. Disponibilidade refere-se ao tempo de atividade, durabilidade à persistência de dados, e confiabilidade à consistência de desempenho."
    },
    
    {
      "id": 639,
      "isMultipleChoice": false,
      "question": "Uma empresa deseja uma opção econômica ao executar suas aplicações em uma instância Amazon EC2 por curtos períodos de tempo. As aplicações podem ser interrompidas. Qual tipo de instância EC2 atenderá a esses requisitos?",
      "options": [
        {
          "option": "Instâncias Spot",
          "isCorrect": true
        },
        {
          "option": "Instâncias Sob Demanda",
          "isCorrect": false
        },
        {
          "option": "Instâncias Reservadas",
          "isCorrect": false
        },
        {
          "option": "Instâncias Dedicadas",
          "isCorrect": false
        }
      ],
      "comments": "Instâncias Spot são econômicas e adequadas para aplicações que podem ser interrompidas. Instâncias Sob Demanda, Reservadas e Dedicadas são mais caras e não são ideais para curtos períodos com interrupções."
    },
    //700 set 4
    {
      "id": 701,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS deve ser usado para criar um alarme de faturamento?",
      "options": [
        { "option": "AWS Trusted Advisor", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": false },
        { "option": "Amazon CloudWatch", "isCorrect": true },
        { "option": "Amazon QuickSight", "isCorrect": false }
      ],
      "comments": "Você pode monitorar suas cobranças estimadas da AWS usando o Amazon CloudWatch. Quando você habilita o monitoramento de cobranças estimadas para sua conta AWS, as cobranças estimadas são calculadas e enviadas várias vezes ao dia para o CloudWatch como dados de métrica. Os dados de métrica de faturamento são armazenados na região US East (N. Virginia) e representam cobranças mundiais. O alarme é acionado quando o faturamento da sua conta excede o limite que você especifica. CORRETO: 'Amazon CloudWatch' é a resposta correta. INCORRETO: 'AWS Trusted Advisor' é incorreto. INCORRETO: 'AWS CloudTrail' é incorreto. INCORRETO: 'Amazon QuickSight' é incorreto."
    },
    {
      "id": 702,
      "isMultipleChoice": false,
      "question": "Como a cobrança consolidada dentro do AWS Organizations pode ajudar a reduzir as despesas mensais gerais?",
      "options": [
        { "option": "Fornecendo uma visão consolidada do faturamento mensal em várias contas", "isCorrect": false },
        { "option": "Agrupando o uso em várias contas para alcançar um desconto por nível de preço", "isCorrect": true },
        { "option": "Automatizando a criação de novas contas por meio de APIs", "isCorrect": false },
        { "option": "Aproveitando as políticas de controle de serviço (SCP) para gerenciamento centralizado de serviços", "isCorrect": false }
      ],
      "comments": "Você pode usar o recurso de cobrança consolidada no AWS Organizations para consolidar a cobrança e o pagamento de várias contas AWS. Cada organização no AWS Organizations tem uma conta mestre (pagadora) que paga as cobranças de todas as contas membros (vinculadas). A cobrança consolidada tem os seguintes benefícios: Uma fatura – Você recebe uma fatura para várias contas. Rastreamento fácil – Você pode rastrear as cobranças em várias contas e baixar os dados combinados de custo e uso. Uso combinado – Você pode combinar o uso em todas as contas da organização para compartilhar os descontos de preços por volume, descontos de Instâncias Reservadas e Planos de Economia. CORRETO: 'Agrupando o uso em várias contas para alcançar um desconto por nível de preço' é a resposta correta. INCORRETO: 'Fornecendo uma visão consolidada do faturamento mensal em várias contas' é incorreto. INCORRETO: 'Automatizando a criação de novas contas por meio de APIs' é incorreto. INCORRETO: 'Aproveitando as políticas de controle de serviço (SCP) para gerenciamento centralizado de serviços' é incorreto."
    },
    {
      "id": 703,
      "isMultipleChoice": false,
      "question": "Qual modelo de precificação do Amazon EC2 deve ser usado para cumprir os requisitos de licença de software por núcleo?",
      "options": [
        { "option": "Dedicated Hosts", "isCorrect": true },
        { "option": "On-Demand Instances", "isCorrect": false },
        { "option": "Spot Instances", "isCorrect": false },
        { "option": "Reserved Instances", "isCorrect": false }
      ],
      "comments": "Amazon EC2 Dedicated Hosts permitem que você use suas licenças de software elegíveis de fornecedores como Microsoft e Oracle no Amazon EC2, oferecendo a flexibilidade e a eficácia de custo de usar suas próprias licenças, mas com a resiliência, simplicidade e elasticidade da AWS. Um Amazon EC2 Dedicated Host é um servidor físico totalmente dedicado para seu uso, ajudando a atender aos requisitos de conformidade corporativa. CORRETO: 'Dedicated Hosts' é a resposta correta. INCORRETO: 'On-Demand Instances' é incorreto. Este é um modelo de precificação padrão e não oferece as vantagens solicitadas. INCORRETO: 'Spot Instances' é incorreto. Este é usado para obter preços com desconto para requisitos de curto prazo que podem ser interrompidos. INCORRETO: 'Reserved Instances' é incorreto. Este é usado para reduzir custos reservando o uso de uma instância por um período de 1 ou 3 anos."
    },
    {
      "id": 704,
      "isMultipleChoice": true,
      "question": "Quais das seguintes são vantagens da AWS Cloud? (Selecione DUAS)",
      "options": [
        { "option": "AWS gerencia a manutenção da infraestrutura de nuvem", "isCorrect": true },
        { "option": "AWS gerencia a segurança das aplicações construídas na AWS", "isCorrect": false },
        { "option": "AWS gerencia o planejamento de capacidade para servidores físicos", "isCorrect": true },
        { "option": "AWS gerencia o desenvolvimento de aplicações na AWS", "isCorrect": false },
        { "option": "AWS gerencia o planejamento de custos para servidores virtuais", "isCorrect": false }
      ],
      "comments": "A AWS é responsável pela segurança da AWS Cloud, bem como pelo planejamento de capacidade e manutenção da infraestrutura da AWS. Isso inclui infraestrutura física, como data centers, servidores, sistemas de armazenamento e equipamentos de rede. CORRETO: 'AWS gerencia a manutenção da infraestrutura de nuvem' é uma resposta correta. CORRETO: 'AWS gerencia o planejamento de capacidade para servidores físicos' também é uma resposta correta. INCORRETO: 'AWS gerencia a segurança das aplicações construídas na AWS' é incorreto. Esta é a responsabilidade do cliente. INCORRETO: 'AWS gerencia o desenvolvimento de aplicações na AWS' é incorreto. Esta é a responsabilidade do cliente. INCORRETO: 'AWS gerencia o planejamento de custos para servidores virtuais' é incorreto. Esta é a responsabilidade do cliente."
    },
    {
      "id": 705,
      "isMultipleChoice": false,
      "question": "A capacidade de escalar horizontalmente instâncias Amazon EC2 com base na demanda é um exemplo de qual conceito?",
      "options": [
        { "option": "Economy of scale", "isCorrect": false },
        { "option": "Elasticity", "isCorrect": true },
        { "option": "High availability", "isCorrect": false },
        { "option": "Agility", "isCorrect": false }
      ],
      "comments": "Elasticidade é a capacidade de ajustar dinamicamente a capacidade de um serviço ou recurso com base na demanda. A escalabilidade pode ser vertical (por exemplo, aumentar o tamanho da instância) ou horizontal (por exemplo, adicionar mais instâncias EC2). CORRETO: 'Elasticity' é a resposta correta. INCORRETO: 'Economy of scale' é incorreto. Refere-se a benefícios de preços baseados na compra de grandes quantidades de recursos pela AWS. INCORRETO: 'High availability' é incorreto. Isso é um exemplo de resiliência. INCORRETO: 'Agility' é incorreto. Isso é um exemplo de flexibilidade e velocidade de implementação."
    },
    {
      "id": 706,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS fornece uma maneira rápida e automatizada de criar e gerenciar contas AWS?",
      "options": [
        { "option": "AWS QuickSight", "isCorrect": false },
        { "option": "Amazon LightSail", "isCorrect": false },
        { "option": "AWS Organizations", "isCorrect": true },
        { "option": "Amazon Connect", "isCorrect": false }
      ],
      "comments": "AWS Organizations é um serviço web que permite consolidar suas múltiplas contas AWS em uma organização e gerenciar centralmente suas contas e seus recursos. A API do AWS Organizations pode ser usada para criar contas AWS e isso pode ser automatizado por meio de código. CORRETO: 'AWS Organizations' é a resposta correta. INCORRETO: 'AWS QuickSight' é incorreto. Amazon QuickSight é um serviço de inteligência de negócios rápido e baseado em nuvem. INCORRETO: 'Amazon LightSail' é incorreto. LightSail oferece servidores virtuais (instâncias) fáceis de configurar. INCORRETO: 'Amazon Connect' é incorreto. Amazon Connect é um centro de contato em nuvem omnicanal fácil de usar."
    },
    {
      "id": 707,
      "isMultipleChoice": false,
      "question": "Qual ferramenta pode ser usada para criar alertas quando o custo real ou previsto dos serviços AWS excede um determinado limite?",
      "options": [
        { "option": "AWS Cost Explorer", "isCorrect": false },
        { "option": "AWS Budgets", "isCorrect": true },
        { "option": "AWS Cost and Usage report", "isCorrect": false },
        { "option": "AWS CloudTrail", "isCorrect": false }
      ],
      "comments": "AWS Budgets oferece a capacidade de definir orçamentos personalizados que alertam você quando seus custos ou uso excedem (ou estão previstos para exceder) o valor orçado. Você também pode usar o AWS Budgets para definir metas de utilização ou cobertura de reservas e receber alertas quando sua utilização cair abaixo do limite que você define. CORRETO: 'AWS Budgets' é a resposta correta. INCORRETO: 'AWS Cost Explorer' é incorreto. Cost Explorer permite visualizar e entender seus custos, mas AWS Budgets deve ser usado para alertas baseados em previsão ou uso real. INCORRETO: 'AWS Cost and Usage report' é incorreto. Este é outro instrumento para visualizar o uso dos serviços AWS por categoria. INCORRETO: 'AWS CloudTrail' é incorreto. CloudTrail é usado para registrar atividades de API, não alertará com base no uso dos serviços AWS."
    },
    {
      "id": 708,
      "isMultipleChoice": false,
      "question": "Um usuário tem uma conta AWS com um plano de suporte AWS Business-level e precisa de assistência para lidar com uma interrupção de serviço de produção. Qual ação o usuário deve tomar?",
      "options": [
        { "option": "Contactar o Gerente de Conta Técnica dedicado", "isCorrect": false },
        { "option": "Contactar a equipe de Suporte Concierge dedicada da AWS", "isCorrect": false },
        { "option": "Abrir um caso de suporte de sistema crítico de negócios em queda", "isCorrect": false },
        { "option": "Abrir um caso de suporte de sistema de produção em queda", "isCorrect": true }
      ],
      "comments": "O plano de suporte Business oferece um acordo de nível de serviço (SLA) de < 1 hora para casos de suporte de sistema de produção em queda. CORRETO: 'Abrir um caso de suporte de sistema de produção em queda' é a resposta correta. INCORRETO: 'Contactar o Gerente de Conta Técnica dedicado' é incorreto. O TAM dedicado só está disponível com o plano de suporte Enterprise. INCORRETO: 'Contactar a equipe de Suporte Concierge dedicada da AWS' é incorreto. A equipe de suporte concierge só está disponível com o plano de suporte Enterprise. INCORRETO: 'Abrir um caso de suporte de sistema crítico de negócios em queda' é incorreto. O suporte de sistema crítico de negócios em queda só está disponível com o plano de suporte Enterprise."
    },
    {
      "id": 709,
      "isMultipleChoice": false,
      "question": "Qual tipo de AWS Storage Gateway pode ser usado para fazer backup de dados com software de backup popular?",
      "options": [
        { "option": "File Gateway", "isCorrect": false },
        { "option": "Volume Gateway", "isCorrect": false },
        { "option": "Gateway Virtual Tape Library", "isCorrect": true },
        { "option": "Backup Gateway", "isCorrect": false }
      ],
      "comments": "O serviço AWS Storage Gateway permite armazenamento híbrido entre ambientes locais e a Nuvem AWS. A Gateway Virtual Tape Library pode ser usada com software de backup popular, como NetBackup, Backup Exec e Veeam. Usa um trocador de mídia virtual e unidades de fita. CORRETO: 'Gateway Virtual Tape Library' é a resposta correta. INCORRETO: 'File Gateway' é incorreto. O File Gateway fornece um servidor de arquivos virtual no local, que permite armazenar e recuperar arquivos como objetos no Amazon S3. INCORRETO: 'Volume Gateway' é incorreto. O Volume Gateway representa a família de gateways que suportam volumes baseados em blocos, anteriormente referidos como modos de cache de gateway e armazenados de gateway. INCORRETO: 'Backup Gateway' é incorreto. Não existe um Backup Gateway nos produtos AWS."
    },
    {
      "id": 710,
      "isMultipleChoice": false,
      "question": "Você gostaria de coletar métricas personalizadas de um aplicativo de produção a cada 1 minuto. Que tipo de monitoramento você deve usar?",
      "options": [
        { "option": "CloudWatch com monitoramento detalhado", "isCorrect": true },
        { "option": "CloudTrail com monitoramento básico", "isCorrect": false },
        { "option": "CloudWatch com monitoramento básico", "isCorrect": false },
        { "option": "CloudTrail com monitoramento detalhado", "isCorrect": false }
      ],
      "comments": "Amazon CloudWatch é um serviço de monitoramento para recursos de nuvem AWS e os aplicativos que você executa na AWS. CloudWatch é para monitoramento de desempenho (CloudTrail é para auditoria). É usado para coletar e rastrear métricas, coletar e monitorar arquivos de log e definir alarmes. O monitoramento básico coleta métricas a cada 5 minutos, enquanto o monitoramento detalhado coleta métricas a cada 1 minuto. AWS CloudTrail é um serviço web que registra atividades feitas em sua conta e entrega arquivos de log para um bucket do Amazon S3. CloudTrail é para auditoria, enquanto CloudWatch é para monitoramento de desempenho. CloudTrail é sobre registro e salva um histórico de chamadas de API para sua conta AWS. CORRETO: 'CloudWatch com monitoramento detalhado' é a resposta correta. INCORRETO: 'CloudTrail com monitoramento básico' é incorreto conforme explicado acima. INCORRETO: 'CloudWatch com monitoramento básico' é incorreto conforme explicado acima. INCORRETO: 'CloudTrail com monitoramento detalhado' é incorreto conforme explicado acima."
    },
    {
      "id": 711,
      "isMultipleChoice": true,
      "question": "Quais prazos de faturamento estão disponíveis para instâncias Amazon EC2 on-demand? (Selecione DUAS)",
      "options": [
        { "option": "Por semana", "isCorrect": false },
        { "option": "Por dia", "isCorrect": false },
        { "option": "Por hora", "isCorrect": true },
        { "option": "Por minuto", "isCorrect": false },
        { "option": "Por segundo", "isCorrect": true }
      ],
      "comments": "Com o EC2, você é cobrado por segundo, para algumas instâncias Linux, ou por hora para todos os outros tipos de instância. CORRETO: 'Por segundo' é uma resposta correta. CORRETO: 'Por hora' também é uma resposta correta. INCORRETO: 'Por semana' é incorreto conforme explicado acima. INCORRETO: 'Por dia' é incorreto conforme explicado acima. INCORRETO: 'Por minuto' é incorreto conforme explicado acima."
    },
    {
      "id": 712,
      "isMultipleChoice": false,
      "question": "Qual opção de preço do Amazon EC2 oferece descontos significativos para contratos de prazo fixo?",
      "options": [
        { "option": "Reserved Instances", "isCorrect": true },
        { "option": "Spot Instances", "isCorrect": false },
        { "option": "Dedicated Instances", "isCorrect": false },
        { "option": "Dedicated Hosts", "isCorrect": false }
      ],
      "comments": "As instâncias reservadas oferecem descontos significativos, de até 75% em comparação com o preço sob demanda, pagando pela capacidade antecipadamente. CORRETO: 'Reserved Instances' é a resposta correta. INCORRETO: 'Spot Instances' é incorreto. Spot Instances permitem que você compre capacidade de computação ociosa sem compromisso antecipado a taxas horárias com desconto. Isso não é usado para requisitos de longo prazo. INCORRETO: 'Dedicated Instances' é incorreto. Dedicated Instances são instâncias Amazon EC2 que rodam em uma VPC em hardware dedicado a um único cliente. INCORRETO: 'Dedicated Hosts' é incorreto. Dedicated Hosts são servidores EC2 dedicados a um único cliente."
    },
    {
      "id": 713,
      "isMultipleChoice": true,
      "question": "Ao usar bancos de dados Amazon RDS, por quais itens você é cobrado? (Selecione DUAS)",
      "options": [
        { "option": "Transferência de dados de entrada", "isCorrect": false },
        { "option": "Multi AZ", "isCorrect": true },
        { "option": "Single AZ", "isCorrect": false },
        { "option": "Backup até o tamanho do DB", "isCorrect": false },
        { "option": "Transferência de dados de saída", "isCorrect": true }
      ],
      "comments": "Com o Amazon RDS, você é cobrado pelo tipo e tamanho do banco de dados, o tempo de atividade, qualquer armazenamento adicional de backup (acima do tamanho do DB), solicitações, tipo de implantação (por exemplo, você paga por multi AZ) e transferência de dados de saída. CORRETO: 'Multi AZ' é uma resposta correta. CORRETO: 'Transferência de dados de saída' também é uma resposta correta. INCORRETO: 'Transferência de dados de entrada' é incorreto, pois você não paga por dados de entrada. INCORRETO: 'Single AZ' é incorreto, pois isso não é algo pelo qual você paga uma taxa adicional. INCORRETO: 'Backup até o tamanho do DB' é incorreto, pois você não paga pelo armazenamento de backup até o tamanho do banco de dados. Você só paga pelo armazenamento de backup em excesso do tamanho do banco de dados."
    },
    {
      "id": 714,
      "isMultipleChoice": false,
      "question": "Como as funções AWS Lambda são acionadas?",
      "options": [
        { "option": "Eventos", "isCorrect": true },
        { "option": "Agendamentos", "isCorrect": false },
        { "option": "Métricas", "isCorrect": false },
        { "option": "Contadores", "isCorrect": false }
      ],
      "comments": "O AWS Lambda permite que você execute código como funções sem provisionar ou gerenciar servidores. Aplicações baseadas em Lambda (também chamadas de aplicações serverless) são compostas por funções acionadas por eventos. Por exemplo, você pode acionar uma função Lambda para executar quando um objeto é carregado em um bucket do Amazon S3 ou uma mensagem é adicionada a uma fila do Amazon SQS. CORRETO: 'Eventos' é a resposta correta. INCORRETO: 'Agendamentos' é incorreto, pois as funções são acionadas por eventos. INCORRETO: 'Métricas' é incorreto, pois as funções são acionadas por eventos. INCORRETO: 'Contadores' é incorreto, pois as funções são acionadas por eventos."
    },
    {
      "id": 715,
      "isMultipleChoice": false,
      "question": "Qual ferramenta pode ser usada para fornecer orientação em tempo real sobre o provisionamento de recursos seguindo as melhores práticas da AWS?",
      "options": [
        { "option": "AWS Trusted Advisor", "isCorrect": true },
        { "option": "AWS Simple Monthly Calculator", "isCorrect": false },
        { "option": "AWS Inspector", "isCorrect": false },
        { "option": "AWS Personal Health Dashboard", "isCorrect": false }
      ],
      "comments": "O Trusted Advisor é um recurso online que ajuda a reduzir custos, aumentar o desempenho e melhorar a segurança otimizando seu ambiente AWS. O Trusted Advisor fornece orientação em tempo real para ajudá-lo a provisionar seus recursos seguindo as melhores práticas. CORRETO: 'AWS Trusted Advisor' é a resposta correta. INCORRETO: 'AWS Simple Monthly Calculator' é incorreto. O AWS Simple Monthly Calculator ajuda a estimar o custo de usar os serviços AWS. INCORRETO: 'AWS Inspector' é incorreto. O Inspector é um serviço de avaliação de segurança automatizado que ajuda a melhorar a segurança e a conformidade de aplicações implantadas na AWS. INCORRETO: 'AWS Personal Health Dashboard' é incorreto. O AWS Personal Health Dashboard fornece alertas e orientação de remediação quando a AWS está enfrentando eventos que podem impactá-lo."
    },
    {
      "id": 716,
      "isMultipleChoice": true,
      "question": "Ao realizar uma análise de custo total de propriedade (TCO) entre on-premises e a AWS Cloud, quais fatores são relevantes apenas para implantações on-premises? (Selecione DUAS)",
      "options": [
        { "option": "Equipes de aquisição de hardware", "isCorrect": true },
        { "option": "Licenciamento de sistema operacional", "isCorrect": false },
        { "option": "Custos de operações de instalações", "isCorrect": true },
        { "option": "Administração de banco de dados", "isCorrect": false },
        { "option": "Licenciamento de aplicações", "isCorrect": false }
      ],
      "comments": "Os custos de operações de instalações e aquisição de hardware são algo que você não precisa mais pagar na AWS Cloud. Esses fatores, portanto, devem ser incluídos como um custo on-premise para que você possa entender o custo de permanecer em seus próprios data centers. Administração de banco de dados, licenciamento de sistema operacional e licenciamento de aplicações ainda serão necessários na AWS Cloud. CORRETO: 'Equipes de aquisição de hardware' é uma resposta correta. CORRETO: 'Custos de operações de instalações' também é uma resposta correta. INCORRETO: 'Licenciamento de sistema operacional' é incorreto, pois esses são fatores relevantes tanto para on-premise quanto para a nuvem. INCORRETO: 'Administração de banco de dados' é incorreto, pois esses são fatores relevantes tanto para on-premise quanto para a nuvem. INCORRETO: 'Licenciamento de aplicações' é incorreto, pois esses são fatores relevantes tanto para on-premise quanto para a nuvem."
    },
    {
      "id": 717,
      "isMultipleChoice": false,
      "question": "Como a 'elasticidade' beneficia o design de uma aplicação?",
      "options": [
        { "option": "Reduzindo interdependências entre componentes da aplicação", "isCorrect": false },
        { "option": "Escalando automaticamente os recursos com base na demanda", "isCorrect": true },
        { "option": "Selecionando o nível de armazenamento correto para sua carga de trabalho", "isCorrect": false },
        { "option": "Reservando capacidade para reduzir custos", "isCorrect": false }
      ],
      "comments": "Elasticidade refere-se à escalabilidade automática de recursos com base na demanda. O benefício é que você provisiona apenas os recursos necessários em um determinado momento (otimizando custos) e não precisa se preocupar em absorver picos de demanda. CORRETO: 'Escalando automaticamente os recursos com base na demanda' é a resposta correta. INCORRETO: 'Reduzindo interdependências entre componentes da aplicação' é incorreto. Elasticidade não reduz interdependências entre sistemas – isso é conhecido como acoplamento frouxo. INCORRETO: 'Selecionando o nível de armazenamento correto para sua carga de trabalho' é incorreto. Selecionar o nível de armazenamento correto seria um exemplo de dimensionamento correto, não elasticidade. INCORRETO: 'Reservando capacidade para reduzir custos' é incorreto. Reservar capacidade para reduzir custos refere-se ao uso de reservas, como Instâncias Reservadas do EC2."
    },
    {
      "id": 718,
      "isMultipleChoice": false,
      "question": "Qual é o benefício de usar serviços totalmente gerenciados em comparação com implantar software de terceiros no EC2?",
      "options": [
        { "option": "Você não precisa fazer backup dos seus dados", "isCorrect": false },
        { "option": "Segurança melhorada", "isCorrect": false },
        { "option": "Redução da sobrecarga operacional", "isCorrect": true },
        { "option": "Você tem maior controle e flexibilidade", "isCorrect": false }
      ],
      "comments": "Serviços totalmente gerenciados reduzem sua sobrecarga operacional, pois a AWS gerencia não apenas a camada de infraestrutura, mas também as camadas de serviço acima dela. Exemplos são Amazon Aurora e Amazon ElastiCache, onde o banco de dados é gerenciado para você. CORRETO: 'Redução da sobrecarga operacional' é a resposta correta. INCORRETO: 'Você não precisa fazer backup dos seus dados' é incorreto. Você ainda precisa fazer backup dos seus dados. Por exemplo, com o Amazon ElastiCache, cabe a você configurar backups para o S3. INCORRETO: 'Segurança melhorada' é incorreto. A segurança não é necessariamente melhorada ao gerenciar sua própria pilha de software. A AWS é extremamente boa em proteger seus serviços e há menos chance de expor vulnerabilidades do que um cliente que implanta suas próprias aplicações. INCORRETO: 'Você tem maior controle e flexibilidade' é incorreto. Você não tem maior controle e flexibilidade com serviços totalmente gerenciados. A AWS assume mais responsabilidade por fornecer o serviço e, portanto, você tem menos opções. Por exemplo, você pode não conseguir configurar os parâmetros de desempenho de um banco de dados como gostaria ou usar seu próprio software de backup ou operacional."
    },
    {
      "id": 719,
      "isMultipleChoice": true,
      "question": "Quais são as cobranças fundamentais para uma instância Amazon EC2? (Selecione DUAS)",
      "options": [
        { "option": "Monitoramento básico", "isCorrect": false },
        { "option": "Armazenamento de dados", "isCorrect": true },
        { "option": "Tempo de atividade do servidor", "isCorrect": true },
        { "option": "AMI", "isCorrect": false },
        { "option": "Endereço IP privado", "isCorrect": false }
      ],
      "comments": "Ao usar instâncias EC2, você é cobrado pelo tempo de atividade de computação da instância com base na família e tipo que escolheu. Você também é cobrado pela quantidade de dados provisionados. CORRETO: 'Armazenamento de dados' é uma resposta correta. CORRETO: 'Tempo de atividade do servidor' também é uma resposta correta. INCORRETO: 'Monitoramento básico' é incorreto. O monitoramento básico é gratuito para EC2, o monitoramento detalhado é cobrado. INCORRETO: 'AMI' é incorreto. Imagens de Máquina da Amazon (AMIs) não são cobradas. Você pode comprar AMIs cobradas via o marketplace, mas não é cobrado por qualquer uma que você criar. INCORRETO: 'Endereço IP privado' é incorreto. Você não paga por endereços IP privados."
    },
    {
      "id": 720,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS usa um dispositivo de armazenamento de hardware altamente seguro para armazenar chaves de criptografia?",
      "options": [
        { "option": "AWS CloudHSM", "isCorrect": true },
        { "option": "AWS IAM", "isCorrect": false },
        { "option": "Amazon Cloud Directory", "isCorrect": false },
        { "option": "AWS WAF", "isCorrect": false }
      ],
      "comments": "AWS CloudHSM é um módulo de segurança de hardware baseado em nuvem que permite adicionar facilmente armazenamento seguro de chaves e operações criptográficas de alto desempenho às suas aplicações AWS. CORRETO: 'AWS CloudHSM' é a resposta correta. INCORRETO: 'AWS IAM' é incorreto. AWS Identity and Access Management (IAM) é usado para gerenciar usuários, grupos e funções na AWS. INCORRETO: 'Amazon Cloud Directory' é incorreto. Amazon Cloud Directory permite que você construa diretórios nativos da nuvem flexíveis para organizar hierarquias de dados em várias dimensões. INCORRETO: 'AWS WAF' é incorreto. AWS WAF é um firewall de aplicação web que ajuda a proteger suas aplicações web de exploits comuns na web."
    },
    {
      "id": 721,
      "isMultipleChoice": false,
      "question": "Qual tipo de controle de segurança pode ser usado para negar acesso à rede de um endereço IP específico?",
      "options": [
        { "option": "AWS Shield", "isCorrect": false },
        { "option": "AWS WAF", "isCorrect": false },
        { "option": "Network ACL", "isCorrect": true },
        { "option": "Security Group", "isCorrect": false }
      ],
      "comments": "Um Network ACL suporta regras de permissão e negação. Você pode criar uma regra de negação especificando um endereço IP específico que deseja bloquear. CORRETO: 'Network ACL' é a resposta correta. INCORRETO: 'AWS Shield' é incorreto. AWS Shield é um serviço gerenciado de proteção contra ataques de negação de serviço distribuído (DDoS). INCORRETO: 'AWS WAF' é incorreto. AWS WAF é um firewall de aplicação web. INCORRETO: 'Security Group' é incorreto. Um Security Group suporta apenas regras de permissão."
    },
    {
      "id": 722,
      "isMultipleChoice": false,
      "question": "Qual serviço pode ser usado para gerenciar versões de configuração?",
      "options": [
        { "option": "AWS Service Catalog", "isCorrect": false },
        { "option": "AWS Artifact", "isCorrect": false },
        { "option": "Amazon Inspector", "isCorrect": false },
        { "option": "AWS Config", "isCorrect": true }
      ],
      "comments": "AWS Config é um serviço totalmente gerenciado que fornece um inventário de recursos da AWS, histórico de configuração e notificações de alterações de configuração para habilitar conformidade de segurança e regulatória. CORRETO: 'AWS Config' é a resposta correta. INCORRETO: 'AWS Service Catalog' é incorreto. AWS Service Catalog é usado para criar e gerenciar catálogos de serviços de TI que você aprovou para uso na AWS, incluindo imagens de máquinas virtuais, servidores, software e bancos de dados para completar arquiteturas de aplicações de múltiplas camadas. INCORRETO: 'AWS Artifact' é incorreto. AWS Artifact é um recurso central para informações relacionadas à conformidade. Este serviço pode ser usado para obter informações de conformidade relacionadas às certificações/atestados da AWS. INCORRETO: 'Amazon Inspector' é incorreto. Inspector é um serviço de avaliação de segurança automatizado que ajuda a melhorar a segurança e conformidade de aplicações implantadas na AWS."
    },
    {
      "id": 723,
      "isMultipleChoice": true,
      "question": "Quais aspectos de segurança na AWS são responsabilidades do cliente? (Selecione DUAS)",
      "options": [
        { "option": "Configuração de políticas de senha da conta", "isCorrect": true },
        { "option": "Controles de acesso físico", "isCorrect": false },
        { "option": "Criptografia no lado do servidor", "isCorrect": true },
        { "option": "Correção de sistemas de armazenamento", "isCorrect": false },
        { "option": "Disponibilidade das regiões da AWS", "isCorrect": false }
      ],
      "comments": "A AWS é responsável pela 'segurança da nuvem', o que inclui proteger a infraestrutura que executa todos os serviços oferecidos na AWS Cloud. O cliente é responsável pela 'segurança na nuvem', que depende do serviço consumido, mas inclui aspectos como Gerenciamento de Identidade e Acesso (inclui políticas de senha), criptografia de dados, proteção do tráfego de rede e configuração de sistema operacional, rede e firewall. CORRETO: 'Configuração de políticas de senha da conta' é uma resposta correta. CORRETO: 'Criptografia no lado do servidor' também é uma resposta correta. INCORRETO: 'Controles de acesso físico' é incorreto conforme explicado acima. INCORRETO: 'Correção de sistemas de armazenamento' é incorreto conforme explicado acima. INCORRETO: 'Disponibilidade das regiões da AWS' é incorreto conforme explicado acima."
    },
    {
      "id": 724,
      "isMultipleChoice": true,
      "question": "Quais das seguintes são práticas recomendadas de arquitetura para a AWS Cloud? (Selecione DUAS)",
      "options": [
        { "option": "Implantar em várias Zonas de Disponibilidade", "isCorrect": true },
        { "option": "Implantar em uma única zona de disponibilidade", "isCorrect": false },
        { "option": "Acoplamento fechado", "isCorrect": false },
        { "option": "Projetar para tolerância a falhas", "isCorrect": true },
        { "option": "Criar arquiteturas monolíticas", "isCorrect": false }
      ],
      "comments": "É uma prática recomendada de arquitetura implantar seus recursos em várias zonas de disponibilidade e projetar para tolerância a falhas. Ambas garantem que, se recursos ou infraestrutura falharem, sua aplicação continue a funcionar. CORRETO: 'Implantar em várias Zonas de Disponibilidade' é uma resposta correta. CORRETO: 'Projetar para tolerância a falhas' também é uma resposta correta. INCORRETO: 'Implantar em uma única zona de disponibilidade' é incorreto. Você não deve implantar todos os seus recursos em uma única zona de disponibilidade, pois qualquer falha de infraestrutura interromperá o acesso aos seus recursos. INCORRETO: 'Acoplamento fechado' é incorreto. Acoplamento fechado não é uma prática recomendada de arquitetura – acoplamento solto é. Com acoplamento solto, você reduz as interdependências entre componentes de uma aplicação e frequentemente coloca uma camada intermediária, como um barramento de mensagens, entre os componentes. INCORRETO: 'Criar arquiteturas monolíticas' é incorreto. Você não deve criar arquiteturas monolíticas. Com arquiteturas monolíticas, você tem uma única instância executando múltiplos componentes da aplicação; se qualquer um desses componentes falhar, sua aplicação falha. É melhor projetar arquiteturas de microsserviços onde os componentes estão distribuídos por mais instâncias."
    },
    {
      "id": 725,
      "isMultipleChoice": true,
      "question": "Para reduzir o preço de suas instâncias Amazon EC2, quais durações de termo estão disponíveis para instâncias reservadas? (Selecione DUAS)",
      "options": [
        { "option": "4 anos", "isCorrect": false },
        { "option": "1 ano", "isCorrect": true },
        { "option": "5 anos", "isCorrect": false },
        { "option": "2 anos", "isCorrect": false },
        { "option": "3 anos", "isCorrect": true }
      ],
      "comments": "Instâncias reservadas oferecem descontos significativos, de até 75% em comparação com o preço sob demanda, pagando pela capacidade antecipadamente. Elas são boas para aplicações que têm uso previsível, que precisam de capacidade reservada e para clientes que podem se comprometer com um termo de 1 ou 3 anos. CORRETO: '1 ano' é uma resposta correta. CORRETO: '3 anos' também é uma resposta correta. INCORRETO: '4 anos' é incorreto, pois apenas opções de 1 e 3 anos estão disponíveis. INCORRETO: '5 anos' é incorreto, pois apenas opções de 1 e 3 anos estão disponíveis. INCORRETO: '2 anos' é incorreto, pois apenas opções de 1 e 3 anos estão disponíveis."
    },
    {
      "id": 726,
      "isMultipleChoice": true,
      "question": "Quais são as cobranças fundamentais para volumes do Elastic Block Store (EBS)? (Selecione DUAS)",
      "options": [
        { "option": "A quantidade de armazenamento de dados provisionada", "isCorrect": true },
        { "option": "A quantidade de armazenamento de dados consumida", "isCorrect": false },
        { "option": "Número de snapshots", "isCorrect": false },
        { "option": "IOPS provisionadas", "isCorrect": true },
        { "option": "Transferência de dados de entrada", "isCorrect": false }
      ],
      "comments": "Com volumes EBS, você é cobrado pela quantidade de dados provisionada (não consumida) por mês. Isso significa que você pode ter espaço vazio dentro de um volume e ainda assim pagar por ele. Com volumes de IOPS provisionadas, você também é cobrado pela quantidade que você provisiona em IOPS. CORRETO: 'A quantidade de armazenamento de dados provisionada' é uma resposta correta. CORRETO: 'IOPS provisionadas' também é uma resposta correta. INCORRETO: 'A quantidade de armazenamento de dados consumida' é incorreto, pois você paga pela quantidade provisionada. INCORRETO: 'Número de snapshots' é incorreto. Você paga pelo armazenamento consumido por snapshots, não pelo número de snapshots. INCORRETO: 'Transferência de dados de entrada' é incorreto, pois você não paga pela entrada de dados."
    },
    {
      "id": 727,
      "isMultipleChoice": false,
      "question": "Qual é o nível de armazenamento Amazon S3 mais econômico para dados que não são frequentemente acessados, mas requerem alta disponibilidade?",
      "options": [
        { "option": "Amazon S3 Standard-IA", "isCorrect": true },
        { "option": "Amazon S3 Standard", "isCorrect": false },
        { "option": "Amazon S3 One Zone-IA", "isCorrect": false },
        { "option": "Amazon Glacier", "isCorrect": false }
      ],
      "comments": "S3 Standard-IA é para dados que são acessados com menos frequência, mas requerem acesso rápido quando necessário. S3 Standard-IA oferece a alta durabilidade, alta taxa de transferência e baixa latência do S3 Standard com 99,9% de disponibilidade. CORRETO: 'Amazon S3 Standard-IA' é a resposta correta. INCORRETO: 'Amazon S3 Standard' é incorreto, pois esta classe custará mais e é projetada para dados que requerem acesso regular. INCORRETO: 'Amazon S3 One Zone-IA' é incorreto. S3 One Zone-IA é para dados que são acessados com menos frequência, mas requerem acesso rápido quando necessário. Ao contrário de outras Classes de Armazenamento S3 que armazenam dados em um mínimo de três Zonas de Disponibilidade (AZs), S3 One Zone-IA armazena dados em uma única AZ e oferece menor disponibilidade. INCORRETO: 'Amazon Glacier' é incorreto. Glacier é uma solução de arquivamento de dados, portanto, não é adequada para um nível de armazenamento que requer acesso infrequente."
    },
    {
      "id": 728,
      "isMultipleChoice": false,
      "question": "Qual é o principal benefício do princípio de 'acoplamento frouxo'?",
      "options": [
        { "option": "Reduzir a complexidade operacional", "isCorrect": false },
        { "option": "Reduzir interdependências para que uma falha em um componente não se propague para outros componentes", "isCorrect": true },
        { "option": "Automatizar a implantação de infraestrutura usando código", "isCorrect": false },
        { "option": "Permitir que aplicações escalem automaticamente com base na demanda atual", "isCorrect": false }
      ],
      "comments": "À medida que a complexidade das aplicações aumenta, um atributo desejável de um sistema de TI é que ele possa ser dividido em componentes menores e fracamente acoplados. Isso significa que os sistemas de TI devem ser projetados de forma a reduzir as interdependências — uma mudança ou falha em um componente não deve se propagar para outros componentes. CORRETO: 'Reduzir interdependências para que uma falha em um componente não se propague para outros componentes' é a resposta correta. INCORRETO: 'Reduzir a complexidade operacional' é incorreto. O acoplamento frouxo não reduz a complexidade operacional. Na verdade, pode aumentar a complexidade, pois você tem mais serviços em execução e mais interações. INCORRETO: 'Automatizar a implantação de infraestrutura usando código' é incorreto. Isso é um exemplo de 'Infraestrutura como código' – serviços como o CloudFormation fornecem essa funcionalidade. INCORRETO: 'Permitir que aplicações escalem automaticamente com base na demanda atual' é incorreto. Isso é um exemplo de Elasticidade."
    },
    {
      "id": 729,
      "isMultipleChoice": false,
      "question": "Qual opção de cobrança do Amazon EC2 oferece baixo custo, máxima flexibilidade, sem custos iniciais ou compromisso, e você paga apenas pelo que usa?",
      "options": [
        { "option": "Dedicated Host", "isCorrect": false },
        { "option": "Spot Instances", "isCorrect": false },
        { "option": "Reserved Instances", "isCorrect": false },
        { "option": "On-Demand Instances", "isCorrect": true }
      ],
      "comments": "Com instâncias On-Demand, você paga pelas horas usadas sem compromisso. Não há custos iniciais, então você tem máxima flexibilidade. CORRETO: 'On-Demand Instances' é a resposta correta. INCORRETO: 'Dedicated Host' é incorreto. Hosts dedicados usam servidores EC2 fisicamente dedicados para isolar suas cargas de trabalho e são caros. INCORRETO: 'Spot Instances' é incorreto. Instâncias Spot são usadas para obter um preço muito baixo pelo qual você faz um lance. Você perde alguma flexibilidade, pois está limitado pelos preços de mercado e suas cargas de trabalho podem ser encerradas se o preço de mercado exceder seu preço de lance. INCORRETO: 'Reserved Instances' é incorreto. Instâncias reservadas são baseadas em um compromisso de 1 ou 3 anos em troca de um grande desconto."
    },
    {
      "id": 730,
      "isMultipleChoice": false,
      "question": "Onde os recursos podem ser lançados ao configurar o Amazon EC2 Auto Scaling?",
      "options": [
        { "option": "Um único subnet", "isCorrect": false },
        { "option": "Múltiplas AZs dentro de uma região", "isCorrect": true },
        { "option": "Múltiplas AZs e múltiplas regiões", "isCorrect": false },
        { "option": "Múltiplos VPCs", "isCorrect": false }
      ],
      "comments": "O Amazon EC2 Auto Scaling é configurado dentro do console EC2 e pode lançar instâncias dentro de um VPC em várias AZs. Ele não pode lançar recursos em outra Região da AWS. CORRETO: 'Múltiplas AZs dentro de uma região' é a resposta correta. INCORRETO: 'Múltiplas AZs e múltiplas regiões' é incorreto, pois você não pode lançar recursos em outra Região. INCORRETO: 'Um único subnet' é incorreto, pois as instâncias podem ser lançadas em múltiplos subnets. INCORRETO: 'Múltiplos VPCs' é incorreto, pois você não pode usar um único grupo de Auto Scaling para lançar recursos em múltiplos subnets."
    },
    {
      "id": 734,
      "isMultipleChoice": true,
      "question": "Além dos serviços de DNS, quais outros serviços o Amazon Route 53 fornece? (Selecione DUAS)",
      "options": [
        { "option": "DHCP", "isCorrect": false },
        { "option": "Caching", "isCorrect": false },
        { "option": "Domain registration", "isCorrect": true },
        { "option": "IP Routing", "isCorrect": false },
        { "option": "Traffic flow", "isCorrect": true }
      ],
      "comments": "As funcionalidades do Amazon Route 53 incluem registro de domínio, DNS, fluxo de tráfego, verificação de integridade e failover. O Route 53 não suporta DHCP, roteamento IP ou caching. CORRETO: 'Domain registration' é a resposta correta. CORRETO: 'Traffic flow' é a resposta correta. INCORRETO: 'DHCP' é incorreto conforme explicado acima. INCORRETO: 'Caching' é incorreto conforme explicado acima. INCORRETO: 'IP Routing' é incorreto. As funcionalidades de DNS do Route 53 são chamadas de 'políticas de roteamento', no entanto, isso não é roteamento IP tradicional que é realizado por roteadores. É um DNS inteligente que responde com resultados diferentes com base em certos fatores, como latência, peso ou configuração de failover."
    },
    {
      "id": 735,
      "isMultipleChoice": true,
      "question": "O que pode ser atribuído a um usuário IAM? (Selecione DUAS)",
      "options": [
        { "option": "An access key ID and secret access key", "isCorrect": true },
        { "option": "An SSL/TLS certificate", "isCorrect": false },
        { "option": "A key pair", "isCorrect": false },
        { "option": "A password for logging into Linux", "isCorrect": false },
        { "option": "A password for access to the management console", "isCorrect": true }
      ],
      "comments": "Um usuário IAM é uma entidade que representa uma pessoa ou serviço. Usuários podem receber um ID de chave de acesso e uma chave de acesso secreta para acesso programático à API AWS, CLI, SDK e outras ferramentas de desenvolvimento, e uma senha para acesso ao console de gerenciamento. CORRETO: 'An access key ID and secret access key' é a resposta correta. CORRETO: 'A password for access to the management console' é a resposta correta. INCORRETO: 'An SSL/TLS certificate' é incorreto. Você não pode atribuir um certificado SSL/TLS a um usuário. INCORRETO: 'A key pair' é incorreto. Pares de chaves são usados com o Amazon EC2 como um método de usar criptografia de chave pública para acessar instâncias EC2 com segurança. INCORRETO: 'A password for logging into Linux' é incorreto. Você não pode atribuir a um usuário IAM uma senha para fazer login em uma instância Linux."
    },
    {
      "id": 736,
      "isMultipleChoice": false,
      "question": "A política de uso aceitável da AWS para testes de penetração permite?",
      "options": [
        { "option": "Customers to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for selected services", "isCorrect": true },
        { "option": "Customers to carry out security assessments or penetration tests against their AWS infrastructure after obtaining authorization from AWS", "isCorrect": false },
        { "option": "AWS to perform penetration testing against customer resources without notification", "isCorrect": false },
        { "option": "Authorized security assessors to perform penetration tests against any AWS customer without authorization", "isCorrect": false }
      ],
      "comments": "Os clientes da AWS são bem-vindos para realizar avaliações de segurança ou testes de penetração contra sua infraestrutura AWS sem aprovação prévia para os seguintes oito serviços: instâncias Amazon EC2, NAT Gateways e Elastic Load Balancers, Amazon RDS, Amazon CloudFront, Amazon Aurora, Amazon API Gateways, AWS Lambda e funções Lambda Edge, recursos Amazon LightSail, ambientes Amazon Elastic Beanstalk. CORRETO: 'Customers to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for selected services' é a resposta correta. INCORRETO: 'Customers to carry out security assessments or penetration tests against their AWS infrastructure after obtaining authorization from AWS' é incorreto, pois você não precisa de autorização. INCORRETO: 'AWS to perform penetration testing against customer resources without notification' é incorreto, pois a AWS não realizará testes de penetração em recursos do cliente. INCORRETO: 'Authorized security assessors to perform penetration tests against any AWS customer without authorization' é incorreto. Isso não é algo que é autorizado."
    },
    {
      "id": 737,
      "isMultipleChoice": false,
      "question": "Qual tipo de conexão deve ser usada para conectar um data center on-premises com a AWS cloud que é de alta velocidade, baixa latência e não usa a Internet?",
      "options": [
        { "option": "Direct Connect", "isCorrect": true },
        { "option": "VPC Endpoints", "isCorrect": false },
        { "option": "AWS Managed VPN", "isCorrect": false },
        { "option": "Client VPN", "isCorrect": false }
      ],
      "comments": "AWS Direct Connect é um serviço de rede que fornece uma alternativa ao uso da Internet para conectar os sites on-premises de um cliente à AWS. Os dados são transmitidos através de uma conexão de rede privada entre a AWS e o datacenter ou rede corporativa do cliente. Direct Connect é de alta largura de banda e baixa latência. CORRETO: 'Direct Connect' é a resposta correta. INCORRETO: 'VPC Endpoints' é incorreto. VPC endpoints permitem conectividade privada para serviços hospedados na AWS, de dentro do seu VPC sem usar um Internet Gateway, VPN, dispositivos de Network Address Translation (NAT) ou proxies de firewall. INCORRETO: 'AWS Managed VPN' é incorreto. O AWS Managed VPN (que é um tipo de VPN IPSec) é rápido de configurar, mas usa a Internet pública e, portanto, a latência não é tão boa e é imprevisível. INCORRETO: 'Client VPN' é incorreto. Uma VPN site-to-site deve ser usada em vez de uma client VPN para conectar dois sites juntos."
    },
    {
      "id": 738,
      "isMultipleChoice": false,
      "question": "Qual das vantagens da nuvem listadas abaixo é mais diretamente abordada pelas capacidades do AWS Auto Scaling?",
      "options": [
        { "option": "Benefit from massive economies of scale", "isCorrect": false },
        { "option": "Stop guessing about capacity", "isCorrect": true },
        { "option": "Stop spending money running and maintaining data centers", "isCorrect": false },
        { "option": "Go global in minutes", "isCorrect": false }
      ],
      "comments": "O AWS Auto Scaling ajuda você a se adaptar à demanda por sua aplicação e escalar para cima e para baixo conforme necessário. Isso significa que você não precisa adivinhar a capacidade antecipadamente, pois pode provisionar o que precisa e permite que o Auto Scaling gerencie a escalabilidade. CORRETO: 'Stop guessing about capacity' é a resposta correta. INCORRETO: 'Benefit from massive economies of scale' é incorreto. Esta é uma vantagem de custo da nuvem. INCORRETO: 'Stop spending money running and maintaining data centers' é incorreto. Esta é uma vantagem de custo de mover para a nuvem. INCORRETO: 'Go global in minutes' é incorreto. Esta é uma vantagem de implantar serviços de nuvem globalmente."
    },
    {
      "id": 739,
      "isMultipleChoice": false,
      "question": "Qual afirmação está correta em relação ao Modelo de Responsabilidade Compartilhada da AWS?",
      "options": [
        { "option": "AWS são responsáveis pela segurança de regiões e zonas de disponibilidade", "isCorrect": true },
        { "option": "Clientes são responsáveis por aplicar patches em sistemas de armazenamento", "isCorrect": false },
        { "option": "AWS são responsáveis por criptografar dados do cliente", "isCorrect": false },
        { "option": "Clientes são responsáveis pela segurança da nuvem", "isCorrect": false }
      ],
      "comments": "A AWS é responsável pela 'Segurança da Nuvem'. A AWS é responsável por proteger a infraestrutura que executa todos os serviços oferecidos na AWS Cloud. Esta infraestrutura é composta por hardware, software, rede e instalações que executam os serviços da AWS Cloud, e isso inclui regiões, zonas de disponibilidade e locais de borda. Os clientes são responsáveis pela 'Segurança na Nuvem'. Isso inclui criptografar dados do cliente, aplicar patches em sistemas operacionais, mas não aplicar patches ou manter a infraestrutura subjacente. CORRETO: 'AWS são responsáveis pela segurança de regiões e zonas de disponibilidade' é a resposta correta. INCORRETO: 'Clientes são responsáveis por aplicar patches em sistemas de armazenamento' é incorreto, pois esta é uma responsabilidade da AWS. INCORRETO: 'AWS são responsáveis por criptografar dados do cliente' é incorreto, pois esta é uma responsabilidade do cliente. INCORRETO: 'Clientes são responsáveis pela segurança da nuvem' é incorreto, pois esta é uma responsabilidade da AWS."
    },
    {
      "id": 740,
      "isMultipleChoice": false,
      "question": "Qual das seguintes é uma vantagem da computação em nuvem em comparação com a implantação de sua própria infraestrutura on-premise?",
      "options": [
        { "option": "Flexibilidade para escolher seu próprio hardware", "isCorrect": false },
        { "option": "Gastar usando um modelo CAPEX", "isCorrect": false },
        { "option": "Pagar apenas pelo que você usa", "isCorrect": true },
        { "option": "Capacidade de escolher configurações de infraestrutura sob medida", "isCorrect": false }
      ],
      "comments": "Com a AWS, você paga apenas pelo que usa. No entanto, você não pode escolher seu próprio hardware/infrastructure e o modelo de pagamento é operacional (OPEX) e não capital (CAPEX). CORRETO: 'Pagar apenas pelo que você usa' é a resposta correta. INCORRETO: 'Flexibilidade para escolher seu próprio hardware' é incorreto conforme explicado acima. INCORRETO: 'Gastar usando um modelo CAPEX' é incorreto conforme explicado acima. INCORRETO: 'Capacidade de escolher configurações de infraestrutura sob medida' é incorreto conforme explicado acima."
    },
    {
      "id": 741,
      "isMultipleChoice": false,
      "question": "Qual serviço pode ser adicionado a um banco de dados para fornecer melhor desempenho para algumas solicitações?",
      "options": [
        { "option": "Amazon RedShift", "isCorrect": false },
        { "option": "Amazon EFS", "isCorrect": false },
        { "option": "Amazon ElastiCache", "isCorrect": true },
        { "option": "Amazon RDS", "isCorrect": false }
      ],
      "comments": "Amazon ElastiCache fornece cache em memória que melhora o desempenho para solicitações de leitura quando os dados estão em cache no ElastiCache. ElastiCache pode ser colocado na frente do seu banco de dados. CORRETO: 'Amazon ElastiCache' é a resposta correta. INCORRETO: 'Amazon RedShift' é incorreto. Amazon RedShift é um data warehouse usado para realizar análises de dados. INCORRETO: 'Amazon EFS' é incorreto. Amazon EFS é um Sistema de Arquivos Elástico, não um serviço de cache. INCORRETO: 'Amazon RDS' é incorreto. Amazon RDS é um tipo de banco de dados relacional SQL. Não é um serviço que você coloca na frente de outro banco de dados para melhorar o desempenho. Em vez disso, você pode usar o RDS como seu banco de dados de back-end e usar o ElastiCache na frente dele para melhorar o desempenho através de seu cache em memória."
    },
    {
      "id": 742,
      "isMultipleChoice": false,
      "question": "Qual serviço pode ser usado para atribuir uma política a um grupo?",
      "options": [
        { "option": "AWS IAM", "isCorrect": true },
        { "option": "Amazon Cognito", "isCorrect": false },
        { "option": "Amazon STS", "isCorrect": false },
        { "option": "AWS Shield", "isCorrect": false }
      ],
      "comments": "IAM é usado para controlar de forma segura o acesso individual e de grupo aos recursos da AWS. Grupos são coleções de usuários e têm políticas anexadas a eles. Você pode usar o IAM para anexar uma política a um grupo. CORRETO: 'AWS IAM' é a resposta correta. INCORRETO: 'Amazon Cognito' é incorreto. Amazon Cognito é usado para autenticação usando aplicativos móveis. INCORRETO: 'AWS STS' é incorreto. O AWS Security Token Service (STS) é um serviço web que permite solicitar credenciais temporárias e de privilégio limitado para usuários IAM ou para usuários que você autentica (usuários federados). INCORRETO: 'AWS Shield' é incorreto. AWS Shield é um serviço gerenciado de proteção contra DDoS que protege aplicações executadas na AWS."
    },
    {
      "id": 743,
      "isMultipleChoice": false,
      "question": "Qual serviço AWS permite adicionar inscrição de usuário, login e controle de acesso a aplicativos web e móveis?",
      "options": [
        { "option": "AWS Artifact", "isCorrect": false },
        { "option": "Amazon Cognito", "isCorrect": true },
        { "option": "AWS CloudHSM", "isCorrect": false },
        { "option": "AWS Directory Service", "isCorrect": false }
      ],
      "comments": "Amazon Cognito permite adicionar inscrição de usuário, login e controle de acesso aos seus aplicativos web e móveis de forma rápida e fácil. Amazon Cognito escala para milhões de usuários e suporta login com provedores de identidade social, como Facebook, Google e Amazon, e provedores de identidade corporativa via SAML 2.0. CORRETO: 'Amazon Cognito' é a resposta correta. INCORRETO: 'AWS Artifact' é incorreto. AWS Artifact é seu recurso central para informações relacionadas à conformidade que são importantes para você. INCORRETO: 'AWS CloudHSM' é incorreto. AWS CloudHSM é um módulo de segurança de hardware baseado em nuvem que permite gerar e usar suas próprias chaves de criptografia na AWS Cloud. INCORRETO: 'AWS Directory Service' é incorreto. AWS Directory Service para Microsoft Active Directory, também conhecido como AWS Managed Microsoft AD, permite que suas cargas de trabalho e recursos da AWS cientes de diretório usem o Active Directory gerenciado na AWS Cloud."
    },
    {
      "id": 744,
      "isMultipleChoice": false,
      "question": "Qual é a diferença entre um volume EBS e um Instance store?",
      "options": [
        {
          "option": "Volumes EBS são dispositivos de armazenamento de objetos, enquanto volumes Instance store são baseados em blocos",
          "isCorrect": false
        },
        {
          "option": "Volumes Instance store são efêmeros, enquanto volumes EBS são armazenamento persistente",
          "isCorrect": true
        },
        {
          "option": "Volumes Instance store podem ser usados com todos os tipos de instância EC2, enquanto EBS não pode",
          "isCorrect": false
        },
        {
          "option": "Volumes EBS são dispositivos de armazenamento em nível de arquivo, enquanto volumes Instance store são baseados em objetos",
          "isCorrect": false
        }
      ],
      "comments": "EBS-backed significa que o volume raiz é um volume EBS e o armazenamento é persistente. Instance store-backed significa que o volume raiz é um volume Instance store e o armazenamento não é persistente. Ambos os volumes EBS e Instance store são dispositivos de armazenamento baseados em blocos. Volumes EBS podem ser usados com todos os tipos de instância EC2, enquanto volumes Instance store têm compatibilidade mais limitada. CORRETO: 'Volumes Instance store são efêmeros, enquanto volumes EBS são armazenamento persistente' é a resposta correta. INCORRETO: 'Volumes EBS são dispositivos de armazenamento de objetos, enquanto volumes Instance store são baseados em blocos' é incorreto, pois ambos são dispositivos de armazenamento baseados em blocos. INCORRETO: 'Volumes Instance store podem ser usados com todos os tipos de instância EC2, enquanto EBS não pode' é incorreto, pois isso não é verdade. INCORRETO: 'Volumes EBS são dispositivos de armazenamento em nível de arquivo, enquanto volumes Instance store são baseados em objetos' é incorreto, pois ambos são dispositivos de armazenamento baseados em blocos."
    },
    {
      "id": 745,
      "isMultipleChoice": true,
      "question": "Quais são dois componentes do Amazon S3? (Selecione DUAS)",
      "options": [
        {
          "option": "Buckets",
          "isCorrect": true
        },
        {
          "option": "Diretórios",
          "isCorrect": false
        },
        {
          "option": "Objetos",
          "isCorrect": true
        },
        {
          "option": "Dispositivos de bloco",
          "isCorrect": false
        },
        {
          "option": "Sistemas de arquivos",
          "isCorrect": false
        }
      ],
      "comments": "Amazon S3 é um sistema de armazenamento baseado em objetos acessado usando uma API RESTful sobre HTTP(S). Consiste em buckets, que são pastas de nível raiz, e objetos, que são os arquivos, imagens etc. que você carrega. Os termos diretório, sistema de arquivos e dispositivo de bloco não se aplicam ao Amazon S3. CORRETO: 'Buckets' é uma resposta correta. CORRETO: 'Objetos' também é uma resposta correta. INCORRETO: 'Diretórios' é incorreto conforme explicado acima. INCORRETO: 'Dispositivos de bloco' é incorreto conforme explicado acima. INCORRETO: 'Sistemas de arquivos' é incorreto conforme explicado acima."
    },
    {
      "id": 746,
      "isMultipleChoice": true,
      "question": "Quais dos abaixo são bons casos de uso para um modelo de precificação específico do Amazon EC2? (Selecione DUAS)",
      "options": [
        {
          "option": "Instâncias reservadas para uso previsível de estado estável",
          "isCorrect": true
        },
        {
          "option": "Sob demanda para requisitos regulatórios que não permitem virtualização multi-tenant",
          "isCorrect": false
        },
        {
          "option": "Sob demanda para requisitos ad-hoc que não podem ser interrompidos",
          "isCorrect": true
        },
        {
          "option": "Spot para carga consistente a longo prazo",
          "isCorrect": false
        },
        {
          "option": "Instâncias reservadas para aplicações com horários de início e término flexíveis",
          "isCorrect": false
        }
      ],
      "comments": "Casos de uso típicos para os modelos de precificação listados são: Sob demanda: Bom para usuários que desejam o baixo custo e flexibilidade do EC2 sem qualquer pagamento antecipado ou compromisso de longo prazo. Aplicações com cargas de trabalho de curto prazo, irregulares ou imprevisíveis que não podem ser interrompidas. Reservado: Aplicações com uso previsível de estado estável ou que requerem capacidade reservada. Spot: Aplicações que têm horários de início e término flexíveis e que são viáveis apenas a preços de computação muito baixos. Podem ser terminadas. Hosts dedicados: Útil para requisitos regulatórios que podem não suportar virtualização multi-tenant. Ótimo para licenciamento que não suporta multi-tenancy ou implantações em nuvem. CORRETO: 'Instâncias reservadas para uso previsível de estado estável' é uma resposta correta. CORRETO: 'Sob demanda para requisitos ad-hoc que não podem ser interrompidos' também é uma resposta correta. INCORRETO: 'Sob demanda para requisitos regulatórios que não permitem virtualização multi-tenant' é incorreto. Por favor, consulte os casos de uso típicos acima. INCORRETO: 'Spot para carga consistente a longo prazo' é incorreto. Por favor, consulte os casos de uso típicos acima. INCORRETO: 'Instâncias reservadas para aplicações com horários de início e término flexíveis' é incorreto. Por favor, consulte os casos de uso típicos acima."
    },
    {
      "id": 747,
      "isMultipleChoice": true,
      "question": "Quais das seguintes atividades relacionadas à segurança são de responsabilidade dos clientes da AWS? (Selecione DUAS)",
      "options": [
        {
          "option": "Descarte seguro de discos rígidos defeituosos",
          "isCorrect": false
        },
        {
          "option": "Implementação de controles de acesso ao data center",
          "isCorrect": false
        },
        {
          "option": "Instalação de patches em dispositivos de rede",
          "isCorrect": false
        },
        {
          "option": "Instalação de patches em sistemas operacionais Windows",
          "isCorrect": true
        },
        {
          "option": "Implementação de políticas de senha do IAM",
          "isCorrect": true
        }
      ],
      "comments": "Os clientes são responsáveis por configurar suas próprias políticas de senha do IAM e instalar patches de sistema operacional em instâncias Amazon EC2. A AWS é responsável por instalar patches em dispositivos de hardware físico, controles de acesso ao data center e descarte seguro de discos rígidos. CORRETO: 'Instalação de patches em sistemas operacionais Windows' é a resposta correta. CORRETO: 'Implementação de políticas de senha do IAM' é a resposta correta. INCORRETO: 'Descarte seguro de discos rígidos defeituosos' é incorreto, pois é uma responsabilidade da AWS. INCORRETO: 'Implementação de controles de acesso ao data center' é incorreto, pois é uma responsabilidade da AWS. INCORRETO: 'Instalação de patches em dispositivos de rede' é incorreto, pois é uma responsabilidade da AWS."
    },
    {
      "id": 748,
      "isMultipleChoice": false,
      "question": "Uma organização possui uma nuvem on-premises e acessa sua AWS Cloud pela Internet. Como eles podem criar uma conexão de nuvem híbrida privada que evite a internet?",
      "options": [
        {
          "option": "AWS Direct Connect",
          "isCorrect": true
        },
        {
          "option": "AWS Managed VPN",
          "isCorrect": false
        },
        {
          "option": "AWS VPN CloudHub",
          "isCorrect": false
        },
        {
          "option": "AWS VPC Endpoint",
          "isCorrect": false
        }
      ],
      "comments": "AWS Direct Connect é uma conexão privada de baixa latência e alta largura de banda com a AWS. Isso pode ser usado para criar uma conexão de nuvem híbrida privada entre on-premises e a AWS Cloud. CORRETO: 'AWS Direct Connect' é a resposta correta. INCORRETO: 'AWS Managed VPN' é incorreto. AWS Managed VPN usa a Internet para conexões de rede, então não cria uma conexão privada. A conexão é segura, mas usa a Internet. INCORRETO: 'AWS VPN CloudHub' é incorreto. AWS VPN CloudHub usa a Internet para conexões de rede, então não cria uma conexão privada. A conexão é segura, mas usa a Internet. INCORRETO: 'AWS VPC Endpoint' é incorreto. Um AWS VPC Endpoint é uma conexão PrivateLink que conecta um serviço público da AWS a um VPC usando uma conexão privada. Isso não conecta ambientes on-premises à AWS."
    },
    {
      "id": 749,
      "isMultipleChoice": false,
      "question": "Qual equipe está disponível para apoiar clientes da AWS com um plano de suporte Enterprise em questões de conta?",
      "options": [
        {
          "option": "AWS Technical Support",
          "isCorrect": false
        },
        {
          "option": "AWS Billing and Accounts",
          "isCorrect": false
        },
        {
          "option": "AWS Concierge",
          "isCorrect": true
        },
        {
          "option": "AWS Technical Account Manager",
          "isCorrect": false
        }
      ],
      "comments": "Incluído como parte do plano de Suporte Enterprise, a equipe de Suporte Concierge são especialistas em faturamento e contas da AWS que se especializam em trabalhar com contas empresariais. CORRETO: 'AWS Concierge' é a resposta correta. INCORRETO: 'AWS Technical Support' é incorreto, pois não é o nome da equipe. INCORRETO: 'AWS Billing and Accounts' é incorreto, pois a equipe de Suporte Concierge cumpre esse papel. INCORRETO: 'AWS Technical Account Manager' é incorreto. O Gerente de Conta Técnica fornece monitoramento e otimização especializados para seu ambiente e coordena o acesso a outros programas e especialistas."
    },
    {
      "id": 750,
      "isMultipleChoice": true,
      "question": "Quais são dois exemplos das vantagens da computação em nuvem? (Selecione DUAS)",
      "options": [
        {
          "option": "Aumentar a velocidade e agilidade",
          "isCorrect": true
        },
        {
          "option": "Trocar custos operacionais por custos de capital",
          "isCorrect": false
        },
        {
          "option": "Data centers seguros",
          "isCorrect": false
        },
        {
          "option": "Beneficiar-se de economias de escala massivas",
          "isCorrect": true
        },
        {
          "option": "Trocar despesa variável por despesa de capital",
          "isCorrect": false
        }
      ],
      "comments": "As 6 vantagens da computação em nuvem são: Trocar despesa de capital por despesa variável. Beneficiar-se de economias de escala massivas. Parar de adivinhar sobre capacidade. Aumentar a velocidade e agilidade. Parar de gastar dinheiro executando e mantendo data centers. Ir global em minutos. CORRETO: 'Aumentar a velocidade e agilidade' é uma resposta correta. CORRETO: 'Beneficiar-se de economias de escala massivas' também é uma resposta correta. INCORRETO: 'Trocar custos operacionais por custos de capital' é incorreto, pois está invertido. INCORRETO: 'Data centers seguros' é incorreto. Data centers seguros não são uma razão para mover para a nuvem. Seus data centers on-premises também devem ser seguros. INCORRETO: 'Trocar despesa variável por despesa de capital' é incorreto, pois está invertido."
    },
    {
      "id": 754,
      "isMultipleChoice": true,
      "question": "Quais das opções abaixo são recomendações no pilar de confiabilidade do framework bem arquitetado? (Selecione DUAS)",
      "options": [
        {
          "option": "Test recovery procedures",
          "isCorrect": true
        },
        {
          "option": "Manually recover from failure",
          "isCorrect": false
        },
        {
          "option": "Manage change in manual processes",
          "isCorrect": false
        },
        {
          "option": "Stop guessing about capacity",
          "isCorrect": true
        },
        {
          "option": "Scale vertically using big systems",
          "isCorrect": false
        }
      ],
      "comments": "O pilar de confiabilidade inclui a capacidade de um sistema de se recuperar de interrupções de infraestrutura ou serviço, adquirir dinamicamente recursos de computação para atender à demanda e mitigar interrupções como erros de configuração ou problemas de rede transitórios. Existem cinco princípios de design para confiabilidade na nuvem: Testar procedimentos de recuperação. Recuperar automaticamente de falhas. Escalar horizontalmente para aumentar a disponibilidade agregada do sistema. Parar de adivinhar a capacidade. Gerenciar mudanças na automação. CORRETO: 'Test recovery procedures' é uma resposta correta. CORRETO: 'Stop guessing about capacity' também é uma resposta correta. INCORRETO: 'Manually recover from failure' é incorreto, pois as aplicações devem se recuperar automaticamente de falhas. INCORRETO: 'Manage change in manual processes' é incorreto, pois você deve gerenciar mudanças na automação. INCORRETO: 'Scale vertically using big systems' é incorreto, pois você deve escalar aplicações horizontalmente."
    },
    {
      "id": 758,
      "isMultipleChoice": true,
      "question": "Quais tipos de monitoramento o Amazon CloudWatch pode ser usado? (Selecione DUAS)",
      "options": [
        {
          "option": "Infrastructure",
          "isCorrect": false
        },
        {
          "option": "Data center",
          "isCorrect": false
        },
        {
          "option": "Operational health",
          "isCorrect": true
        },
        {
          "option": "API access",
          "isCorrect": false
        },
        {
          "option": "Application performance",
          "isCorrect": true
        }
      ],
      "comments": "O Amazon CloudWatch é um serviço de monitoramento para recursos da nuvem AWS e as aplicações que você executa na AWS. O CloudWatch realiza monitoramento de desempenho e pode monitorar métricas personalizadas geradas por aplicações e a saúde operacional dos seus recursos AWS. O monitoramento de infraestrutura e data center não é acessível aos clientes da AWS. CORRETO: 'Operational health' é uma resposta correta. CORRETO: 'Application performance' também é uma resposta correta. INCORRETO: 'Infrastructure' é incorreto, pois esse monitoramento não é acessível aos clientes da AWS. INCORRETO: 'Data center' é incorreto, pois esse monitoramento não é acessível aos clientes da AWS. INCORRETO: 'API access' é incorreto. O AWS CloudTrail monitora o acesso à API."
    },
    {
      "id": 759,
      "isMultipleChoice": false,
      "question": "Qual serviço da AWS permite armazenamento em nuvem híbrida entre ambientes on-premises e a AWS Cloud?",
      "options": [
        {
          "option": "Amazon S3 Cross Region Replication (CRR)",
          "isCorrect": false
        },
        {
          "option": "AWS Storage Gateway",
          "isCorrect": true
        },
        {
          "option": "Amazon Elastic File System (EFS)",
          "isCorrect": false
        },
        {
          "option": "Amazon CloudFront",
          "isCorrect": false
        }
      ],
      "comments": "O serviço AWS Storage Gateway permite armazenamento em nuvem híbrida entre ambientes on-premises e a AWS Cloud. Ele integra perfeitamente aplicativos empresariais on-premises e fluxos de trabalho com os serviços de armazenamento em bloco e objeto da Amazon através de protocolos de armazenamento padrão da indústria. CORRETO: 'AWS Storage Gateway' é a resposta correta. INCORRETO: 'Amazon S3 Cross Region Replication (CRR)' é incorreto. O Amazon S3 CRR é usado para copiar dados de um bucket S3 para outro em outra região, não é um exemplo de nuvem híbrida. INCORRETO: 'Amazon Elastic File System (EFS)' é incorreto. O Amazon EFS não é uma solução de armazenamento em nuvem híbrida. Com o EFS, você pode montar sistemas de arquivos de servidores on-premises, mas ele não oferece um cache local ou método de mover dados para a nuvem. INCORRETO: 'Amazon CloudFront' é incorreto. O Amazon CloudFront é uma rede de entrega de conteúdo, usada para aproximar o conteúdo dos usuários, não é uma solução de armazenamento em nuvem híbrida."
    },
    {
      "id": 760,
      "isMultipleChoice": false,
      "question": "O que uma organização precisa fazer para se mover para outra região da AWS?",
      "options": [
        {
          "option": "Apenas começar a implantar recursos na região adicional",
          "isCorrect": true
        },
        {
          "option": "Criar uma conta IAM separada para essa região",
          "isCorrect": false
        },
        {
          "option": "Solicitar outra conta AWS nessa região",
          "isCorrect": false
        },
        {
          "option": "Enviar uma aplicação para estender sua conta para a região adicional",
          "isCorrect": false
        }
      ],
      "comments": "Você não precisa fazer nada além de começar a implantar recursos na nova região. Com a nuvem AWS, você pode usar qualquer região ao redor do mundo a qualquer momento. Não há necessidade de uma conta separada, e o IAM é um serviço global. CORRETO: 'Apenas começar a implantar recursos na região adicional' é a resposta correta. INCORRETO: 'Criar uma conta IAM separada para essa região' é incorreto, pois o IAM é um serviço global. INCORRETO: 'Solicitar outra conta AWS nessa região' é incorreto, pois você pode usar o IAM em todas as regiões e não precisa de outra conta. INCORRETO: 'Enviar uma aplicação para estender sua conta para a região adicional' é incorreto, pois você não precisa estender contas entre regiões."
    },
    {
      "id": 761,
      "isMultipleChoice": false,
      "question": "Qual serviço de computação deve ser usado para executar um sistema operacional Linux no qual você instalará software personalizado?",
      "options": [
        {
          "option": "Amazon EC2",
          "isCorrect": true
        },
        {
          "option": "Amazon ECS",
          "isCorrect": false
        },
        {
          "option": "Amazon EKS",
          "isCorrect": false
        },
        {
          "option": "AWS Lambda",
          "isCorrect": false
        }
      ],
      "comments": "O Amazon EC2 deve ser usado quando você precisa de acesso a uma instância de sistema operacional completo que você pode gerenciar. O Amazon Elastic Container Service (ECS) e o Amazon Elastic Container Service for Kubernetes (EKS) são usados para executar contêineres de software, não instâncias de sistema operacional completo. O AWS Lambda executa código como funções em resposta a eventos. CORRETO: 'Amazon EC2' é a resposta correta. INCORRETO: 'Amazon ECS' é incorreto conforme explicado acima. INCORRETO: 'Amazon EKS' é incorreto conforme explicado acima. INCORRETO: 'AWS Lambda' é incorreto conforme explicado acima."
    },
    {
      "id": 762,
      "isMultipleChoice": true,
      "question": "Quais dos seguintes precisam ser incluídos em uma análise de custo total de propriedade (TCO)? (Selecione DUAS)",
      "options": [
        {
          "option": "Salário do gerente de TI",
          "isCorrect": false
        },
        {
          "option": "Instalação de equipamentos de instalações",
          "isCorrect": true
        },
        {
          "option": "Desenvolvimento de aplicações",
          "isCorrect": false
        },
        {
          "option": "Marketing em toda a empresa",
          "isCorrect": false
        },
        {
          "option": "Custos de segurança do data center",
          "isCorrect": true
        }
      ],
      "comments": "Para realizar um TCO, você precisa documentar todos os custos que está incorrendo hoje para executar suas operações de TI. Isso inclui a instalação de equipamentos de instalações e custos de segurança do data center. Dessa forma, você pode comparar o custo total de executar sua TI on-premises hoje com executá-la na nuvem. CORRETO: 'Instalação de equipamentos de instalações' é uma resposta correta. CORRETO: 'Custos de segurança do data center' também é uma resposta correta. INCORRETO: 'Salário do gerente de TI' é incorreto. O salário do gerente de TI não deve ser incluído, pois ainda precisará ser pago quando a organização se mover para a nuvem. INCORRETO: 'Desenvolvimento de aplicações' é incorreto. O desenvolvimento de aplicações ainda precisa continuar, pois você ainda terá aplicações rodando na nuvem. INCORRETO: 'Marketing em toda a empresa' é incorreto. Campanhas de marketing em toda a empresa não são afetadas pela mudança para a nuvem."
    },
    {
      "id": 763,
      "isMultipleChoice": false,
      "question": "O que uma organização precisa fazer no Amazon IAM para habilitar o acesso do usuário aos serviços sendo lançados em uma nova região?",
      "options": [
        {
          "option": "Nada, o IAM é global",
          "isCorrect": true
        },
        {
          "option": "Habilitar o modo global no IAM para provisionar o acesso necessário",
          "isCorrect": false
        },
        {
          "option": "Atualizar as contas de usuário para permitir acesso de outra região",
          "isCorrect": false
        },
        {
          "option": "Criar novas contas de usuário na nova região",
          "isCorrect": false
        }
      ],
      "comments": "O IAM é usado para controlar de forma segura o acesso individual e em grupo aos recursos da AWS. O IAM é universal (global) e não se aplica a regiões. CORRETO: 'Nada, o IAM é global' é a resposta correta. INCORRETO: 'Habilitar o modo global no IAM para provisionar o acesso necessário' é incorreto, pois você não precisa fazer nada para usar o IAM globalmente. INCORRETO: 'Atualizar as contas de usuário para permitir acesso de outra região' é incorreto, pois você não precisa atualizar as contas de usuário. INCORRETO: 'Criar novas contas de usuário na nova região' é incorreto, pois o IAM é global."
    },
    {
      "id": 764,
      "isMultipleChoice": false,
      "question": "Qual afirmação é verdadeira em relação aos dados armazenados dentro de uma Região AWS?",
      "options": [
        {
          "option": "Os dados não são replicados fora de uma região, a menos que você configure",
          "isCorrect": true
        },
        {
          "option": "Os dados são sempre replicados para outra região",
          "isCorrect": false
        },
        {
          "option": "Os dados são automaticamente arquivados após 90 dias",
          "isCorrect": false
        },
        {
          "option": "Os dados são sempre automaticamente replicados para pelo menos uma outra zona de disponibilidade",
          "isCorrect": false
        }
      ],
      "comments": "Os dados armazenados dentro de uma região AWS não são replicados automaticamente fora dessa região. Cabe aos clientes da AWS determinar se desejam replicar seus dados para outras regiões. Você deve sempre considerar conformidade e latência de rede ao tomar essa decisão. CORRETO: 'Os dados não são replicados fora de uma região, a menos que você configure' é a resposta correta. INCORRETO: 'Os dados são sempre replicados para outra região' é incorreto. Os dados nunca são replicados fora de uma região, a menos que você configure. INCORRETO: 'Os dados são automaticamente arquivados após 90 dias' é incorreto. Os dados nunca são automaticamente arquivados. Você deve configurar os dados para serem arquivados. INCORRETO: 'Os dados são sempre automaticamente replicados para pelo menos uma outra zona de disponibilidade' é incorreto. Os dados não são automaticamente replicados para pelo menos uma zona de disponibilidade – isso é específico para cada serviço e você deve verificar como seus dados são armazenados e se a disponibilidade e durabilidade são aceitáveis."
    },
    {
      "id": 765,
      "isMultipleChoice": true,
      "question": "Uma organização tem várias contas AWS e usa uma mistura de instâncias sob demanda e reservadas. Uma conta tem uma quantidade considerável de instâncias reservadas não utilizadas. Como a organização pode reduzir seus custos? (Selecione DUAS)",
      "options": [
        {
          "option": "Criar uma configuração de AWS Organization vinculando as contas",
          "isCorrect": true
        },
        {
          "option": "Usar instâncias Spot em vez disso",
          "isCorrect": false
        },
        {
          "option": "Resgatar suas instâncias reservadas",
          "isCorrect": false
        },
        {
          "option": "Configurar faturamento consolidado entre as contas",
          "isCorrect": true
        },
        {
          "option": "Mudar para usar grupos de colocação",
          "isCorrect": false
        }
      ],
      "comments": "As organizações AWS permitem que você consolide várias contas AWS em uma organização que você cria e gerencia centralmente. Instâncias reservadas (RIs) não utilizadas para EC2 são aplicadas em todo o grupo, para que a organização possa utilizar suas instâncias reservadas não utilizadas em vez de consumir instâncias sob demanda, o que reduzirá seus custos. CORRETO: 'Criar uma configuração de AWS Organization vinculando as contas' é a resposta correta. CORRETO: 'Configurar faturamento consolidado entre as contas' é a resposta correta. INCORRETO: 'Usar instâncias Spot em vez disso' é incorreto. O preço das instâncias Spot é variável, portanto, não é garantido que reduza o custo e não é adequado para cargas de trabalho que não podem ser encerradas inesperadamente pela AWS. INCORRETO: 'Resgatar suas instâncias reservadas' é incorreto. Você não pode resgatar suas instâncias reservadas. Você pode vendê-las no marketplace da AWS, no entanto. INCORRETO: 'Mudar para usar grupos de colocação' é incorreto. Usar grupos de colocação não reduzirá seus custos."
    }
    

    

    
      /*
      {
        "id": 33 //numero sequencial,
        "isMultipleChoice": false,//true para multopla escolha
        "question": "Digite aqui a pergunta!",
        "options": [
          { "option": "Digite aqui uma opçao", "isCorrect": true },//isCorret true para a opçao verdadeira
          { "option": "Digite aqui uma opçao", "isCorrect": false },//isCorret true para a opçao verdadeira e44444
          { "option": "Digite aqui uma opçao", "isCorrect": false },//isCorret true para a opçao verdadeira
          { "option": "Digite aqui uma opçao", "isCorrect": false },//isCorret true para a opçao verdadeira
        ],
        comments: "Comentario explicativo." //o caracter ponto faz uma quebra de linha
      }
      */

  ]
};
