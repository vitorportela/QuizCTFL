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
        "question": "Qual modelo de implantação em nuvem combina nuvem pública e privada?",
        "options": [
          { "option": "Nuvem pública", "isCorrect": false },
          { "option": "Nuvem privada", "isCorrect": false },
          { "option": "Nuvem híbrida", "isCorrect": true },
          { "option": "Nuvem comunitária", "isCorrect": false }
        ],
        "comments": "Nuvem pública é acessível ao público. Nuvem privada é restrita a uma organização. Nuvem híbrida combina nuvens públicas e privadas. Nuvem comunitária é compartilhada por várias organizações."
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
        "question": "Qual serviço da AWS é usado para entrega de conteúdo global?",
        "options": [
          { "option": "Amazon CloudFront", "isCorrect": true },
          { "option": "Amazon S3", "isCorrect": false },
          { "option": "AWS Lambda", "isCorrect": false },
          { "option": "Amazon RDS", "isCorrect": false }
        ],
        "comments": "Amazon CloudFront entrega conteúdo globalmente. Amazon S3 armazena dados. AWS Lambda executa código. Amazon RDS gerencia bancos de dados."
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
        "comments": "AWS CloudFormation permite modelar e provisionar recursos de infraestrutura de forma automatizada e segura, usando templates para descrever a infraestrutura desejada."
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
      "comments": "O AWS Fargate é um serviço que fornece computação serverless para contêineres, permitindo que você execute contêineres sem precisar gerenciar servidores ou clusters de instâncias EC2. Ele se integra com o Amazon ECS e o Amazon EKS, facilitando a execução de aplicações em contêineres de forma escalável e eficiente."
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
          "option": "Suporte Básico da AWS",
          "isCorrect": false
        },
        {
          "option": "Suporte para Desenvolvedores da AWS",
          "isCorrect": true
        },
        {
          "option": "Suporte Empresarial da AWS",
          "isCorrect": false
        },
        {
          "option": "Suporte Empresarial da AWS",
          "isCorrect": false
        }
      ],
      "comments": "A opção correta é 'Suporte para Desenvolvedores da AWS'. Este plano oferece acesso a interações com o suporte por meio de chamadas de API, sendo a opção mais econômica para usuários que precisam dessa funcionalidade."
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
      "comments": "A opção correta é 'Planos de Economia'. Os Planos de Economia oferecem uma maneira flexível de economizar em custos de computação, especialmente para cargas de trabalho previsíveis e de longo prazo, como 3 anos, garantindo que a empresa possa otimizar seus custos enquanto mantém a carga de trabalho crítica."
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
