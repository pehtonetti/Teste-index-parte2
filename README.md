# Módulo de Curso · Academia Dev

Página de módulo de curso construída **sem frameworks**, apenas HTML semântico, CSS e JavaScript puro. Foi desenvolvida como teste técnico de diagramação front-end.

**🔗 [Ver online](https://pehtonetti.github.io/Teste-index-parte2/)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

<!-- Adicione um print: salve em docs/preview.png e descomente a linha abaixo -->
<!-- ![Preview](docs/preview.png) -->

## O que tem na página

- Card principal com imagem, tag do módulo e título
- Bloco de conteúdo com título, subtítulo e descrição do módulo
- Carrossel de aulas complementares: 4 cards, 2 visíveis por vez, navegação anterior/próximo

## Técnicas aplicadas

- Layout com **Flexbox** e responsivo
- **Variáveis CSS** para cores e tipografia
- Carrossel em **Vanilla JS**, recalculado no `resize` da janela
- Tipografia com Google Fonts (Montserrat e Roboto)

## Acessibilidade

**#PraTodosVerem:** a página mostra, à esquerda, a imagem principal do curso com título e subtítulo, seguida de um texto sobre o módulo. Abaixo fica o carrossel com quatro blocos de conteúdo, dois visíveis por vez, e setas para avançar e voltar.

## Como rodar

Não há build. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/pehtonetti/Teste-index-parte2.git
```

## Estrutura

```text
├── index.html   # Marcação semântica
├── style.css    # Estilos e variáveis
└── index.js     # Lógica do carrossel
```

---

**Pedro Tonetti** · [Portfólio](https://pehtonetti.github.io/portifolio/) · [LinkedIn](https://www.linkedin.com/in/pedrotonetti/)
