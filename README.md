# Tópicos JavaScript - Fundamentos e Conceitos Avançados

Repositório completo de estudos em JavaScript que abrange desde conceitos fundamentais até recursos avançados da linguagem, incluindo manipulação de DOM, programação assíncrona e módulos ES6+.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Tópicos do Curso](#tópicos-do-curso)
  - [Fundamentos](#fundamentos)
  - [Intermediário](#intermediário)
  - [Objetos e Módulos](#objetos-e-módulos)
  - [JavaScript Assíncrono](#javascript-assíncrono)
  - [Manipulação de DOM](#manipulação-de-dom)
- [Estrutura de Cada Tópico](#estrutura-de-cada-tópico)
- [Conceitos Demonstrados](#conceitos-demonstrados)
  - [Fundamentos](#fundamentos-1)
  - [Programação Funcional](#programação-funcional)
  - [Programação Orientada a Objetos](#programação-orientada-a-objetos)
  - [Programação Assíncrona](#programação-assíncrona)
  - [Manipulação de DOM](#manipulação-de-dom-1)
- [Exemplos de Uso](#exemplos-de-uso)
- [Desenvolvimento](#desenvolvimento)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Observações](#observações)
- [Referências](#referências)

## Tecnologias Utilizadas

- **JavaScript (ES6+)**: Linguagem de programação multiparadigma
- **HTML5**: Estrutura das páginas de demonstração
- **CSS3**: Estilização dos exemplos interativos
- **Fetch API**: Para requisições HTTP assíncronas
- **DOM API**: Manipulação de elementos HTML

## Estrutura do Projeto

```
studies-js/
├── contextualizacao/          # Contextualização histórica e características do JavaScript
├── tipos/                      # Tipos de dados primitivos e objetos
├── var-let-const/              # Declaração de variáveis e escopo
├── strings/                    # Manipulação e métodos de strings
├── operadores/                 # Operadores aritméticos, lógicos e de comparação
├── estruturas-de-controle/    # Estruturas condicionais e loops
├── arrays/                     # Métodos e manipulação de arrays
├── json/                       # Trabalhando com JSON
├── funcoes/                    # Funções e arrow functions
├── funcoes-alta-ordem/         # Funções de alta ordem e callbacks
├── desestruturacao/            # Desestruturação de objetos e arrays
├── rest-spread/                # Operadores rest e spread
├── funcoes-construtoras-prototype/  # Funções construtoras e protótipos
├── classes/                    # Classes ES6
├── modulos/                    # Módulos ES6+ (import/export)
├── settimeout/                 # Programação assíncrona com setTimeout
├── promises/                   # Promises e tratamento de erros
├── fetch/                      # Fetch API para requisições HTTP
├── async-await/                # Async/await para código assíncrono
├── dom/                        # Introdução à manipulação de DOM
├── selecao/                    # Seleção de elementos DOM
└── eventos/                    # Eventos de interface do usuário
```

## Instalação

1. **Clonar o repositório:**

```bash
git clone https://github.com/seu-usuario/studies-js.git
cd studies-js
```

2. **Executar os exemplos:**

Abra os arquivos `index.html` em cada pasta diretamente no navegador ou use um servidor local:

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (com http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Depois acesse `http://localhost:8000` no navegador e navegue pelas pastas dos tópicos.

## Tópicos do Curso

O repositório está organizado em 22 tópicos principais:

### Fundamentos

- **Contextualização**: Histórico e características fundamentais do JavaScript
- **Tipos**: Tipos de dados primitivos e objetos
- **var / let / const**: Declaração de variáveis e diferenças de escopo
- **Strings**: Métodos e manipulação de strings
- **Operadores**: Operadores aritméticos, lógicos, de comparação e atribuição
- **Estruturas de Controle**: Condicionais (if/else, switch) e loops (for, while)
- **Arrays**: Métodos de manipulação, iteração e transformação de arrays

### Intermediário

- **JSON**: Trabalhando com JSON (parse, stringify)
- **Funções**: Funções tradicionais e arrow functions
- **Funções de Alta Ordem**: Callbacks e funções que recebem outras funções
- **Desestruturação**: Desestruturação de objetos e arrays
- **Rest / Spread**: Operadores rest e spread para manipulação de dados

### Objetos e Módulos

- **Funções Construtoras e Prototype**: Padrão tradicional de criação de objetos
- **Classes**: Classes ES6 e sintaxe moderna
- **Módulos**: Sistema de módulos ES6+ com import/export

### JavaScript Assíncrono

- **setTimeout**: Programação assíncrona básica
- **Promises**: Promises e tratamento de erros assíncronos
- **Fetch API**: Requisições HTTP assíncronas
- **Async / Await**: Sintaxe moderna para código assíncrono

### Manipulação de DOM

- **DOM**: Introdução à manipulação de Document Object Model
- **Seleção**: Seleção de elementos HTML (querySelector, getElementById, etc.)
- **Eventos**: Eventos de interface do usuário (click, submit, change, etc.)

## Estrutura de Cada Tópico

Cada tópico contém:

- **index.html**: Página HTML de demonstração
- **script.js**: Código JavaScript com exemplos práticos
- **README.md**: Documentação específica do tópico
- **styles.css**: Estilos CSS (quando necessário, como em dom, eventos e selecao)

Alguns tópicos podem ter arquivos adicionais:
- **modulos/js/**: Contém os módulos JavaScript separados (main.js, numbers.js, product.js)
- **settimeout/nao-faca-isso.html** e **nao-faca-isso.js**: Exemplo de má prática com callbacks aninhados

## Conceitos Demonstrados

### Fundamentos

- Tipagem dinâmica e tipos de dados
- Escopo de variáveis (global, função, bloco)
- Operadores e expressões
- Estruturas de controle de fluxo
- Manipulação de arrays e objetos

### Programação Funcional

- Funções de primeira classe
- Arrow functions
- Funções de alta ordem
- Callbacks
- Desestruturação
- Rest e spread operators

### Programação Orientada a Objetos

- Funções construtoras
- Protótipos
- Classes ES6
- Herança
- Encapsulamento

### Programação Assíncrona

- Callbacks
- Promises
- Async/await
- Fetch API
- Tratamento de erros assíncronos

### Manipulação de DOM

- Seleção de elementos
- Modificação de conteúdo
- Manipulação de estilos
- Eventos do usuário
- Criação e remoção de elementos

## Exemplos de Uso

### Classes ES6

```javascript
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  }
}

const p1 = new Product("Monitor", 800.0, 10);
console.log(p1.total()); // 8000
```

### Promises e Fetch

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
```

### Async/Await

```javascript
async function buscarDados() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
  }
}
```

## Desenvolvimento

Este projeto foi criado para fins educacionais e demonstra diferentes aspectos e padrões do JavaScript:

- **Fundamentos**: Conceitos básicos essenciais para qualquer desenvolvedor JavaScript
- **Padrões Modernos**: Uso de recursos ES6+ e boas práticas
- **Programação Assíncrona**: Entendimento profundo de callbacks, promises e async/await
- **Manipulação de DOM**: Interação com páginas web e eventos

Cada exemplo é autocontido e pode ser executado independentemente, facilitando o aprendizado progressivo.

## Funcionalidades Principais

- Exemplos práticos de todos os conceitos fundamentais
- Demonstrações interativas com HTML e CSS
- Código comentado e bem estruturado
- Exercícios práticos em cada tópico
- Documentação específica para cada conceito

## Observações

- Todos os exemplos podem ser executados diretamente no navegador
- Para ver os resultados, abra o console do navegador (F12)
- Os módulos ES6+ requerem que o HTML seja servido via HTTP (não funciona com file://)
- Alguns exemplos de fetch requerem servidor local devido a políticas CORS
- O código segue padrões modernos do JavaScript (ES6+)

## Referências

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [W3Schools - JavaScript](https://www.w3schools.com/js/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [ECMAScript Specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

