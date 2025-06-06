# Projeto ReaGeo - MVP (Produto Mínimo Viável)

## Descrição Geral

ReaGeo é uma plataforma web inovadora projetada para capacitar a população brasileira com informações claras e acessíveis sobre a probabilidade de ocorrência de eventos climáticos extremos por região, como enchentes, secas e incêndios. Nosso objetivo é promover a prevenção, o preparo e a resiliência das comunidades diante de desastres naturais.

Este MVP (Produto Mínimo Viável) foca em demonstrar o conceito central da aplicação, apresentando um mapa interativo com dados simulados de probabilidade de eventos e fornecendo acesso a informações básicas de prevenção e aos compromissos do projeto com as práticas ESG.

---

## 1. Apresentação da Proposta do Projeto

**Problema a ser Resolvido:**
Fenômenos climáticos extremos estão se tornando mais frequentes e severos no Brasil, causando impactos ambientais, materiais e, sobretudo, significativos na saúde e bem-estar das pessoas. A **falta de informações claras, acessíveis e preditivas**, bem como de apoio e coordenação eficaz, agrava a vulnerabilidade da população.

**Solução Proposta - ReaGeo:**
Uma aplicação web que visa transformar a forma como a população brasileira se relaciona com os eventos extremos. Através de uma interface intuitiva, o ReaGeo informa sobre a probabilidade de ocorrência desses eventos por região, promovendo a prevenção e o preparo. No futuro, a plataforma integrará inteligência artificial para previsões mais precisas, funcionalidades de comunidade e apoio psicossocial, empoderando cidadãos e auxiliando órgãos responsáveis.

---

## 2. Apresentação da Arquitetura da Solução

### 2.1. Descrição dos Módulos e Tecnologias

O ReaGeo MVP foi concebido com uma arquitetura modular simples para garantir agilidade no desenvolvimento e clareza na separação de responsabilidades.

* **Módulos Principais:**
    * **Frontend (Web Application):** A interface do usuário, responsável por exibir o mapa, os pontos interativos, o modal de detalhes e as páginas informativas. É executada diretamente no navegador do usuário.
    * **Backend (API Server):** Um servidor leve que provê os dados simulados das regiões para o frontend. Em uma versão futura, seria responsável por processar dados mais complexos e integrar-se a fontes externas.
    * **Banco de Dados:** Armazenamento persistente para os dados das regiões. Para o MVP, contém dados simulados.

* **Tecnologias de Software Utilizadas no MVP:**
    * **Linguagens de Programação:**
        * **Python 3:** Utilizado para o desenvolvimento do Backend.
        * **HTML5, CSS3, JavaScript:** Utilizados para o desenvolvimento do Frontend, garantindo uma aplicação web padrão e compatível com a maioria dos navegadores.
    * **Frameworks/Bibliotecas:**
        * **Flask (Python):** Microframework web para o Backend. Escolhido por sua simplicidade, leveza e rapidez na criação de APIs RESTful.
        * **(Sem uso de frameworks JS como React/Vue/Angular no MVP):** Opção por JavaScript puro para minimizar a complexidade de setup e focar na funcionalidade essencial dentro do prazo.
    * **SGBD (Sistema Gerenciador de Banco de Dados):**
        * **SQLite3:** Banco de dados baseado em arquivo. Ideal para o MVP por não exigir instalação de servidor, facilitando a configuração e o transporte do projeto.
    * **APIs (Mencionadas para Futuro):**
        * **Google Maps API / Mapbox / OpenStreetMap:** Para visualização de mapas mais complexos e interativos com dados geográficos reais em versões futuras. No MVP, uma imagem SVG estática é utilizada.
    * **IDEs (Ambientes de Desenvolvimento Integrado):**
        * **VS Code:** (Exemplo de IDE comum para desenvolvimento Fullstack).

### 2.2. Diagrama da Solução Simplificado

+-----------------+        +---------------------+        +--------------------+
| Navegador Web   | <----> | Servidor Flask      | <----> | Banco de Dados     |
| (HTML, CSS, JS) |        | (Backend - Python)  |        | (SQLite)           |
+-----------------+        +---------------------+        +--------------------+
^                           ^
|                           |
| (Serve arquivos estáticos) | (Fornece dados simulados)
|                           |
+-----------------------+
| Páginas Estáticas HTML|
+-----------------------+


---

## 3. Desenvolvimento e Prototipação da Aplicação Web

### 3.1. Wireframes e Fluxo de Uso

Os wireframes iniciais (concebidos rapidamente no papel) guiaram o desenvolvimento do MVP, focando em um fluxo de usuário intuitivo:

* **Tela Inicial (Mapa):** Apresenta um mapa simples do Brasil com 3-4 pontos/regiões de exemplo, coloridos de acordo com a probabilidade simulada de eventos extremos.
* **Tela de Detalhes da Região (Modal/Pop-up):** Ao clicar em um ponto no mapa, um modal é exibido com o nome da região, o tipo de evento (simulado), a probabilidade (simulada) e um link para a página de prevenção.
* **Página de Prevenção/Informação (Estática):** Contém informações textuais básicas sobre "Como agir em caso de enchente/seca/incêndio".
* **Página de Compromissos ESG (Estática):** Uma página dedicada a apresentar os valores e compromissos do ReaGeo com sustentabilidade, inclusão e ética digital.
* **Menu de Navegação:** Permite o acesso fácil entre as páginas principais da aplicação.

### 3.2. Implementação do Protótipo Funcional

O protótipo implementado demonstra a funcionalidade principal do ReaGeo:

* **Mapa Interativo:** A aplicação carrega uma imagem SVG do mapa do Brasil.
* **Pontos de Interesse Dinâmicos:** Pontos coloridos são sobrepostos ao mapa, representando regiões de risco. Estes pontos são gerados dinamicamente via JavaScript, usando dados simulados do Backend.
* **Responsividade dos Pontos:** Os pontos se ajustam proporcionalmente ao mapa quando a janela do navegador é redimensionada, garantindo uma visualização consistente em diferentes tamanhos de tela.
* **Interatividade com Modal:** Ao clicar em um ponto do mapa, um modal pop-up exibe os detalhes simulados daquela região (nome, tipo de evento, probabilidade, último evento).
* **Navegação e Páginas Estáticas:** O modal inclui um link para a página de prevenção, e um menu de navegação permite transitar entre o mapa, a página de prevenção e a página de compromissos ESG.

---

## Critérios de Avaliação e Abordagem

* **Criatividade/Inovação da Solução:** O ReaGeo se destaca pela abordagem multifacetada (previsão, informação, comunidade e apoio psicológico) e pelo uso futuro de IA para prever eventos. O MVP demonstra a base dessa visão inovadora.
* **Wireframe da Aplicação e Funcionamento:** Os wireframes simples serviram como blueprint para o desenvolvimento do protótipo funcional, que demonstra claramente a interação do usuário com o mapa e o fluxo de informação.
* **Usabilidade:**
    * A interface foi projetada para ser o mais intuitiva possível, com um fluxo de cliques claro (mapa -> detalhes -> prevenção).
    * A linguagem utilizada nos textos é simples, clara e objetiva, visando atender a um público brasileiro diverso, com variados níveis de expertise tecnológica.
    * Elementos visuais (cores dos pontos, botões) foram escolhidos para facilitar a compreensão.
* **Acessibilidade Digital:**
    * Considerações básicas de acessibilidade foram implementadas: `alt text` para a imagem do mapa.
    * O contraste de cores nos elementos principais foi revisado para garantir legibilidade.
    * A navegação por teclado é suportada para elementos interativos padrão (links, botões, fechamento de modal).
    * **Observação para Versão Futura:** Para um projeto em produção, funcionalidades avançadas como ajuste de tamanho de fonte, modos de alto contraste e integração com leitores de tela seriam prioritárias, mas estão fora do escopo deste MVP.
* **Descrição das Tecnologias Utilizadas e Respectivas Justificativas:**
    * As tecnologias foram escolhidas visando **agilidade, simplicidade e baixo custo de setup** para o MVP.
    * **Flask (Python) e SQLite:** Perfeitos para um backend leve e rápido com banco de dados em arquivo.
    * **HTML/CSS/JS puro:** Permitiu focar diretamente na implementação da funcionalidade sem a sobrecarga de configuração de frameworks mais complexos.
    * Esta seleção estratégica garantiu a entrega de um protótipo funcional dentro de um prazo limitado.
* **Elementos de Segurança da Aplicação:**
    * Para este MVP, que roda localmente e com dados simulados, as preocupações com segurança são mínimas. No entanto, para um deploy em ambiente de produção, os seguintes princípios de segurança seriam cruciais:
        * **HTTPS:** Para garantir a criptografia de dados em trânsito.
        * **Validação de Entrada de Dados:** Para prevenir ataques como Injeção de SQL e Cross-Site Scripting (XSS).
        * **Proteção contra CSRF (Cross-Site Request Forgery):** Essencial para formulários que modificam dados.
        * **Autenticação e Autorização:** Para proteger áreas de acesso restrito e gerenciar permissões de usuários.
        * **Boas Práticas de Configuração de Servidor:** Para hardening do ambiente.
        * **Gerenciamento de Segredos:** Armazenar chaves de API e credenciais de forma segura.

---

## Como Rodar a Aplicação

Para executar o protótipo do ReaGeo, siga os passos abaixo:

1.  **Clone ou Baixe o Projeto:**
    * Se você estiver usando Git, clone o repositório:
        `git clone https://github.com/camsadr/reageo`
    * Navegue até o diretório do projeto: `cd reageo_mvp`
    * Caso contrário, baixe e descompacte o arquivo `.zip` do projeto em uma pasta de sua preferência.

2.  **Crie e Ative um Ambiente Virtual (Recomendado):**
    * É uma boa prática para isolar as dependências do Python.
        `python -m venv venv`
    * Ative o ambiente virtual:
        * **No Windows:** `.\venv\Scripts\activate`
        * **No macOS/Linux:** `source venv/bin/activate`

3.  **Instale as Dependências do Backend:**
    * Certifique-se de que seu ambiente virtual está ativado.
    * Instale o Flask:
        `pip install Flask`

4.  **Execute o Backend:**
    * Navegue até a pasta `backend` dentro do diretório do projeto:
        `cd backend`
    * Execute o servidor Flask:
        `python app.py`
    * Você verá uma mensagem no terminal indicando que o servidor está rodando, geralmente em `http://127.0.0.1:5000/`.

5.  **Acesse a Aplicação Web:**
    * Abra seu navegador de internet (Chrome, Firefox, Edge, etc.).
    * Acesse o endereço: `http://127.0.0.1:5000/`
    * A aplicação ReaGeo MVP será carregada, e você poderá interagir com o mapa e as páginas.

---

## Observações Adicionais

* Os dados de probabilidade de eventos e históricos apresentados no mapa e no modal são **simulados** para fins de demonstração do protótipo.
* A visualização do mapa utiliza uma imagem SVG estática. Em versões futuras, seriam integradas APIs de mapas reais para maior interatividade e precisão geográfica.
* As funcionalidades de Inteligência Artificial para previsão, integração com dados reais, módulos de comunidade, apoio psicológico e funcionalidades de busca são parte da visão de longo prazo do projeto e serão desenvolvidas em etapas posteriores.
