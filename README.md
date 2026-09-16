# Projeto Web Mobile - Conecta Cidade
Aluno: Rhuan Vieira de Souza
RA: 10755828

Aluno: Caio Borges Morato
RA: 10437025

Aluno: Felipe Del Giudice Menezes
RA: 10726771

# Como surgiu a ideia?

A ideia do nosso projeto surgiu quando pensamos nos problemas que encontramos todos os dias pela cidade de São Paulo. Muitas vezes passamos por uma rua com um buraco, um poste com a luz queimada, falta de iluminação, problemas no asfalto, lixo acumulado, entre outras situações, e aquilo pode continuar assim por semanas ou até meses.

Como São Paulo é uma cidade muito grande, entendemos também que é difícil para o poder público saber tudo o que está acontecendo em cada bairro e em cada rua.

Foi daí que pensamos: e se existisse um lugar simples onde a própria população pudesse mostrar esses problemas e acompanhar o que aconteceu depois?

# Sobre a nossa ideia:

A proposta é criar um site de ajuda urbana, que funcione como um espaço de participação da comunidade.

Nele, uma pessoa que encontrar algum problema no seu bairro poderá fazer uma denúncia, informar onde está acontecendo e explicar a situação.

Essas denúncias ficarão reunidas em um tipo de fórum da comunidade, onde será possível visualizar os problemas que já foram registrados e acompanhar se eles foram atendidos ou se ainda continuam pendentes.

# Como Funciona?

Pessoa encontra um problema → Faz a denúncia no site → A ocorrência fica registrada → Outras pessoas podem visualizar → O problema pode ser acompanhado → A situação é atualizada como pendente ou resolvida.

# Objetivo desse projeto:

Nossa intenção não é apenas criar mais um lugar para fazer reclamações.
Queremos criar uma ferramenta que possa ajudar os dois lados: a população ganha uma maneira mais fácil de mostrar os problemas que enfrenta no dia a dia, enquanto o poder público pode ter acesso a essas informações de forma mais organizada e direta.

No final, a ideia é simples: usar a tecnologia para aproximar a comunidade do poder público e ajudar a melhorar, aos poucos, a cidade onde vivemos.


<img width="800" height="557" alt="image" src="https://github.com/user-attachments/assets/b226d7f2-8c37-44a4-b1bf-1d3d484dcbc0" />


# Tutorial da Construção da Página Principal - `index.html`

A página principal do projeto foi estruturada em **HTML5**, com foco em organização, acessibilidade, navegação em dispositivos móveis e integração com os arquivos CSS e JavaScript que serão adicionados durante o desenvolvimento do projeto.

## 1. Cabeçalho e Navegação (`<header>`)

O cabeçalho abre a página com a identidade visual do projeto e o menu com os principais links de navegação.

- **`<img>`**: Exibe a logo principal do Conecta Cidade, armazenada dentro da pasta `imagens`.
- **`<button id="menu-btn">`**: Botão preparado para ser utilizado futuramente na navegação mobile.
- **`<nav>`**: Define a área de navegação do site.
- **`<ul>`**: Organiza os links do menu em uma lista.
- **`<a>`**: Cria links para outras páginas ou para partes específicas da página principal.

O botão de menu foi inserido no cabeçalho para ser utilizado futuramente em dispositivos móveis.
No momento, o botão ainda não possui sua funcionalidade completa, pois a abertura e o fechamento do menu serão implementados posteriormente com JavaScript.

Também foi utilizado o **`id="top"`** na tag `<body>`, permitindo que o usuário volte ao início da página através do link presente no rodapé.

<img width="596" height="218" alt="image" src="https://github.com/user-attachments/assets/ef8a8309-2de9-4139-820b-d002b0ef05f3" />

## 2. Seção de Apresentação (`<section class="apresentacao">`)

Essa seção foi criada para apresentar rapidamente ao usuário a principal proposta do Conecta Cidade.

- **`<section>`**: Separa essa área das outras partes da página.
- **`<div class="apresentacao-conteudo">`**: Agrupa o conteúdo da apresentação.
- **`<h1>`**: Exibe a mensagem principal da página.
- **`<p>`**: Explica de forma resumida o objetivo do projeto.
- **`<a href="#denuncia">`**: Leva o usuário diretamente até o formulário de registro de ocorrência.

  <img width="919" height="133" alt="image" src="https://github.com/user-attachments/assets/d97e94db-b67b-4bb5-922f-c428890623f5" />

## 3. Área de Conteúdo (`<section class="area-conteudo">`)

Essa seção foi criada para agrupar duas partes da página: as denúncias recentes e o bloco “Sobre Nós”.

- **`<section class="area-conteudo">`**: Agrupa os conteúdos que aparecem juntos nessa parte da página.
- Dentro dela estão o mural de denúncias recentes e a seção complementar “Sobre Nós”.

<img width="719" height="558" alt="image" src="https://github.com/user-attachments/assets/444a35c2-5ece-4c42-89a8-5bfa5b424180" />

## 4. Mural de Denúncias Recentes (`<div id="denuncias-recentes">`)

Essa área lista e exibe alguns problemas que já foram registrados pela comunidade.

- **`<div id="denuncias-recentes">`**: Agrupa as denúncias exibidas na página.
- **`<article class="card-denuncia">`**: Representa cada denúncia de forma individual.
- **`<h3>`**: Exibe o título da ocorrência.
- **`<strong>`**: Dá destaque para informações importantes, como bairro e status.
- **`<p>`**: Exibe os detalhes e a descrição da denúncia.

<img width="709" height="333" alt="image" src="https://github.com/user-attachments/assets/6540f487-08ce-4309-a328-482c9094e164" />

Os exemplos atuais mostram ocorrências com status diferentes, como **Pendente** e **Resolvido**.

## 5. Seção Sobre Nós (`<aside>`)

A seção “Sobre Nós” apresenta informações complementares sobre a proposta do projeto.

- **`<aside>`**: Foi utilizado para separar um conteúdo complementar do conteúdo principal da página.
- **`<h2>`**: Exibe o título da seção.
- **`<p>`**: Apresenta informações sobre a ideia e o objetivo do Conecta Cidade.

Essa parte explica que o projeto busca aproximar a população dos problemas urbanos e facilitar o acompanhamento das ocorrências registradas.

<img width="561" height="177" alt="image" src="https://github.com/user-attachments/assets/78995c5a-42b9-4bc7-bcc3-c63045925621" />

## 6. Formulário de Ocorrências (`<section id="denuncia">`)

Essa seção permite que o usuário registre um problema diretamente pela página principal.

- **`<form id="form-denuncia">`**: Agrupa todos os campos necessários para o registro da ocorrência.
- **`<label>`**: Mostra o nome ou a instrução de um campo do formulário.
- **`<input type="text">`**: Permite inserir informações como título e bairro/endereço.
- **`<select>`**: Permite que o usuário escolha a categoria do problema.
- **`<option>`**: Define as opções disponíveis dentro do campo de categoria.
- **`<input type="file">`**: Permite que o usuário envie uma foto do problema.
- **`accept="image/*"`**: Limita o envio para arquivos de imagem.
- **`<textarea>`**: Permite escrever uma descrição mais detalhada da ocorrência.
- **`required`**: Impede o envio do formulário caso um campo obrigatório esteja vazio.
- **`placeholder`**: Exibe exemplos dentro dos campos para orientar o preenchimento.
- **`<button type="submit">`**: Cria o botão utilizado para enviar a denúncia.

<img width="993" height="510" alt="image" src="https://github.com/user-attachments/assets/c920df1e-f0b3-4bbf-9e0a-c875aef789c2" />

## 7. Rodapé (`<footer>`)

O rodapé aparece no final da página e contém informações do projeto e links de navegação.

- **`<footer>`**: Define a parte final da página.
- **`<div class="footer-links">`**: Agrupa os links presentes no rodapé.
- **`<a href="#top">`**: Leva o usuário de volta ao início da página.
- **`<a href="#contato">`**: Link reservado para uma futura área de contato.
- **`&copy;`**: Gera o símbolo de copyright (`©`).

<img width="558" height="156" alt="image" src="https://github.com/user-attachments/assets/a48bdb42-2182-484e-8782-adaaa1820f27" />


Também é exibido o nome do projeto e a identificação como projeto extensionista.

## 8. O Papel da Tag `<main>` no Projeto

A tag `<main>` foi utilizada para separar o conteúdo principal da página dos elementos que aparecem fora dessa área, como o cabeçalho (`<header>`) e o rodapé (`<footer>`).

Dentro da `<main>` estão as principais partes da página:

- seção de apresentação;
- área de conteúdo;
- denúncias recentes;
- seção “Sobre Nós”;
- formulário de ocorrência.

O uso da tag `<main>` ajuda a manter o código organizado e facilita a identificação do conteúdo principal da página.

## Resultado da Estrutura HTML

Após finalizar a estrutura principal da página em HTML, realizamos um teste para visualizar como os elementos estavam sendo exibidos antes da aplicação do CSS.

A imagem abaixo mostra o resultado da página utilizando apenas a estrutura HTML:

<img width="1005" height="1035" alt="image" src="https://github.com/user-attachments/assets/dfc5affe-e8ec-45d7-8176-0aa90377e6a0" />

### Tutorial do CSS da página inicial. (`style.css`)  

A estilização do **Conecta Cidade** foi construída utilizando práticas modernas de CSS3, garantindo uma identidade visual limpa, responsiva e alinhada às diretrizes de acessibilidade e usabilidade.

---

#### 1. Regras Globais e Variáveis (`:root`)
Padronização do documento e definição da paleta de cores do projeto.

* **`*` (Reset Global)**: Zera as margens (`margin: 0`) e espaçamentos (`padding: 0`) padrão dos navegadores, além de aplicar `box-sizing: border-box` para simplificar o ajuste do tamanho dos elementos.
* **`:root`**: Define variáveis globais de cores (tons de azul, amarelo de destaque, cinzas e branco), facilitando a manutenção do código.
* **`html { scroll-behavior: smooth; }`**: Ativa a rolagem suave ao clicar nos links de movimentação interna.

<img width="359" height="355" alt="image" src="https://github.com/user-attachments/assets/b09b8673-c061-4b6a-8729-500f5ff211a5" />

---

#### 2. Cabeçalho e Navegação (`header`)
Alinhamento e estilização da barra superior da aplicação.

* **`display: flex`**: Organiza a logo e a lista de navegação lado a lado, utilizando `justify-content: space-between` para empurrá-los para os cantos.
* **`#menu-btn { display: none; }`**: Oculta o botão hambúrguer no modo desktop, reservando sua exibição apenas para telas menores.
* **`nav a:hover`**: Aplica uma transição suave de cor (`color: var(--amarelo)`) ao passar o mouse sobre os links do menu.

<img width="437" height="428" alt="image" src="https://github.com/user-attachments/assets/90d645f4-1e21-430f-8d79-09f925869b12" />

---

#### 3. Seção Apresentação (`.apresentacao`)
Destaque inicial da Home com imagem de fundo e chamada para ação (CTA).

* **`background-image`**: Combina um gradiente escuro semitransparente com a imagem da cidade para garantir o contraste e a leitura legível do texto branco.
* **`.apresentacao a`**: Estiliza o botão "Fazer uma denúncia" com fundo azul, bordas arredondadas e um detalhe de borda amarela à esquerda (`border-left: 4px solid`).

<img width="652" height="731" alt="image" src="https://github.com/user-attachments/assets/3ac2809a-7c8b-4020-8692-626a3729f62d" />


---

#### 4. Layout de Conteúdo e Cards (`.area-conteudo`)
Divisão das seções principais do mural em duas colunas através do Flexbox.

* **`#denuncias-recentes` (65%) e `.sobre-nos` (35%)**: Proporção que prioriza a leitura dos relatórios da comunidade enquanto mantém a área explicativa visível na lateral.
* **`.card-denuncia` e `.sobre-nos`**: Utilização de cards brancos com bordas suaves (`border-radius: 12px`) para separar visualmente as informações sobre o fundo azul claro.

<img width="323" height="584" alt="image" src="https://github.com/user-attachments/assets/742731dc-26e8-4f1c-bb95-ee9d651fbe3b" />

<img width="339" height="350" alt="image" src="https://github.com/user-attachments/assets/dd9ba6bf-92bf-4136-b5ff-bb05c67cf5b8" />

---

#### 5. Formulário de Registro (`#denuncia`)
Estandardização dos campos de entrada de dados para garantir usabilidade.

* **`input`, `select`, `textarea`**: Padronizados com largura total (`width: 100%`), espaçamento interno (`padding: 12px`) e bordas arredondadas.
* **`button:hover`**: Adiciona uma microinteração de elevação (`transform: translateY(-2px)`) ao passar o mouse sobre o botão de envio.

<img width="347" height="462" alt="image" src="https://github.com/user-attachments/assets/b3447f54-9285-4bac-87f0-b2288240d231" />

---

#### 6. Rodapé (`footer`)
Finalização da página com alinhamento centralizado.

* **`flex-direction: column`**: Organiza os links de contato/topo acima da mensagem de copyright.
* **.footer-links**: Agrupa as opções de navegação rodapé com espaçamento uniforme (`gap: 25px`).

<img width="326" height="525" alt="image" src="https://github.com/user-attachments/assets/b03ea71c-a198-4035-9867-a8abdff39967" />

---

#### 7. Design Responsivo (`@media (max-width: 768px)`)
Adaptação automática do layout para dispositivos móveis (tablets e celulares).

* **Reorganização do Layout**: Converte a disposição de duas colunas da `.area-conteudo` para exibição em coluna única (`flex-direction: column`).
* **Ajuste na Fonte**: Reduz proporcionalmente os tamanhos de fonte dos títulos (`h1`, `h2`) e imagens para melhor encaixe em telas menores.

<img width="310" height="888" alt="image" src="https://github.com/user-attachments/assets/cee209c3-3456-4261-9d1c-b23c79c01277" />

implementação de Feature em JavaScript

Na Parte 4 do Projeto Lagarta foi implementada uma nova funcionalidade em JavaScript para o **menu responsivo da página inicial**.

O botão de menu (`☰`) já havia sido criado anteriormente no HTML e reservado para uma implementação futura. Nesta etapa, foi criado o arquivo `script.js`, responsável por abrir e fechar o menu de navegação em telas menores.

A implementação utiliza JavaScript puro e trabalha com eventos de clique e manipulação de classes CSS.

Principais recursos utilizados:

- `getElementById()`;
- `querySelectorAll()`;
- `addEventListener()`;
- `classList.toggle()`;
- `classList.contains()`;
- `classList.remove()`;
- `forEach()`;
- `setAttribute()`.

Também foram realizados pequenos ajustes no `index.html` e no `style.css` para integrar a nova funcionalidade.

O tutorial completo da implementação está disponível no arquivo **`TUTORIAL.md`**.


