---
layout: post
title: "Trabalhando com Typescript e Require JS"
date: 2018-03-17 18:00:00 -0300
categories: dev
description: "Iniciando com Typescript"
identificador: 1
---

## Introdução

Como vai galera, desta vez estou trazendo um post bem interessante sobre como criar um projeto simples usando o Typescript e o Require JS. Para quem não conhece o [Typescript](http://www.typescriptlang.org/) é uma linguagem criada pela Microsoft que torna o desenvolvimento de código javascript mais seguro, praticamente o typescript da super poderes ao javascript, com typescript é possível escrever código no qual é possível definir tipos de variáveis e tipos de retornos de funções, é por isso que o typescript torna o javascript seguro. Como nenhum browser interpreta typescript, o próprio typescript possui um compilador que transforma todo o código escrito em typescript para um formato javascript aceito pelos navegadores. Vamos a um exemplo de código Typescript.

{% highlight typescript %}

function titulo(title: string): string {
	return `Site: ${title}`;
}

titulo('Blog');

{% endhighlight %}

Como mostrado no exemplo acima, o typescript permite que possamos definir tipos para variáveis e também tipos de retornos para funções, dessa forma ganhamos a segurança de que um tipo diferente passado por parametro ira gerar um erro de compilação no momento de transformar typescript em javascript.

E por fim o [Require JS](http://requirejs.org/) no qual permite que possamos carregar modulos javascript de forma automatica sem que precisamos carregar no próprio HTML.

### Iniciando o Projeto

Para podermos trabalhar com typescript, precisamos instalar o compilador do typescript para podermos converter o typescript para javascript, para isso utilizamos o seguinte comando.

{% highlight shell %}

$ npm install -g typescript

{% endhighlight %}

Dessa forma já podemos trabalhar com typescript tranquilamente, vamos a estrutura do projeto.

{% highlight shell %}

├── build
│   ├── app.js
│   ├── main.js
│   └── index.html
├── src
│   └── app.ts
│   
├── index.html
├── tsconfig.json

{% endhighlight %}

### Configurando o tsconfig.json

Para facilitar a tranformação do typescript para javascript, podemos definir na raiz do projeto um arquivo chamado [tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html) com diversas configurações que serão executados quando o typescript estiver sendo convertido.

{% highlight json %}

{
    "compilerOptions": {
        "target": "es5",
        "module": "amd",
        "rootDir": "src",
        "outDir": "build",
        "sourceMap": true
    },
    "files": [
        "src/app.ts"
    ]
}

{% endhighlight %}

Explicando rapidamente o que essa configuração faz, o **target** define para que padrão de javascript o typescript será convertido, para esse caso iremos converter para o padrão ES5 que é aceito por grande maioria dos navegadores hoje *(se não todos)*. O **module** define para qual será a forma de carregamento dos arquivos no navegador, para isso definimos o padrão **AMD**, o **rootDir** é o diretório onde contém os arquivos typescript, o **outDir** é onde os arquivos javascript convertido irão ser criados. O **Sourcemap** é um mapa no qual ajuda do debug de aplicações criadas com typescript e por fim **files** é o arquivo root a ser convertido. Dessa forma se usarmos o comando `tsc` no terminal, o typescript usará essas configurações para converter o typescript para javascript.

### Configurando o index.html

No **index.html** montaremos um estrutura básica, a unica diferença será que iremos importar o RequireJS por cdn e o script **main.js** criado no diretório de build.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tutorial iniciando com typescript</title>
</head>
<body>

    <h1 id="title">Tutorial com Typescript</h1>

    <div id="app"></div>

    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.js"></script>
    <script src="main.js"></script>
</body>
</html>
{% endhighlight %}

### Configurando main.js

O **main.js** será o arquivo necessário por conter toda a configuração de carregamento necessário para que o RequireJS carregue os módulos que foram convertidos pelo typescript.

{% highlight javascript %}

requirejs.config({
    baseUrl: './',
    paths: {
        "app": "app"
    }
});

requirejs(['main'], function(){
    console.log("Carregando");
});

{% endhighlight %}

Como no exemplo acima, definimos um **baseUrl** no qual será usado para carregar todos os módulos que estarão no diretório build, em **paths** definimos o arquivo base, que será o *app.js*.

### Criando um arquivo Typescript que cria um botão

Depois de configurarmos o typescript, adicionar o requirejs ao index.html e configurar o requirejs, vamos então criar nosso primeiro exemplo, vamos criar um componente botão que ao ser clicado, exibe uma titulo escrito **Bem Vindo ao Blog Daniel Silva**.

No diretório *src* vamos criar um arquivo chamado *app.ts* e outro chamado *botao.ts*. Vamos começar com o arquivo, *botao.ts*, nele vamos contruir de fato o botão.

{% highlight typescript %}

export class Botao {

    constructor(private name: string){ }

    show(): string {
        return `<button style='background-color: green;'>${this.name}</button>`;
    }

    event(id: string): any {        
        let title = document.getElementById(id);
        title.innerText = 'Bem Vindo ao Blog Daniel Silva';        
    }
}

{% endhighlight %}

A Classe **Botao** terá um construtor que recebe como parametro uma string contendo o nome do botão, os metódos **show** retorna uma tag html no qual irá ser renderizada no index.html. Já o metódo *event* recebe como parametro um id, e nesse caso executa uma ação de mudança de texto em uma tag **h1** no qual foi declarada no index.html. Uma Observação é que não segui nenhum padrão de desenvolvimento como se trata de um tutorial básico, a classe botão irá executar a mudança do titulo de um **h1** sem respeitar o princípio do baixo acoplamento e alta coesão. Por último a palavra reservada **export** é utilizada para expor a classe para outros arquivos typescript.

Agora vamos para o *app.ts*, este arquivo irá conter uma classe de inicialização e irá importar a classe botão para que seja possível utilizar seus metódos.

{% highlight typescript %}

import { Botao } from './botao';

class App {

    private static NOME_BUTAO = 'Mudar Titulo';

    constructor(){
        this.init();
    }

    init(): void {
        let botao = new Botao(App.NOME_BUTAO);
        let app = document.getElementById('app');

        let botaoTag = document.createElement('button');
        botaoTag.innerHTML = botao.show();
        botaoTag.addEventListener('click', () => {
            botao.event('title');
        });

        app.appendChild(botaoTag);
    }
}

new App();

{% endhighlight %}

Criamos um metódo init no qual irá criar o botão logo no caregamento da página, desta forma teremos o botão renderizado assim que acessarmos a página inicial, após implementar esses dois arquivos, vamos abrir o terminal e executar o seguinte comando.

{% highlight shell %}

$ tsc

{% endhighlight %}

Uma outra observação é que o RequireJs utiliza requisição *ajax* para carregar os módulos, dessa forma teremos que usar algum servidor como o do PHP por exemplo, neste exemplo executei na raiz do projeto o seguinte comando.

{% highlight shell %}

$ php -S localhost:8099 -t build

{% endhighlight %}

## Conclusão

Neste tutorial vimos o poder de se utilizar typescript para o desenvolvimentos de páginas web e como poderiámos aplicar isso na prática, vimos também como carregar os módulos criados por typescript utilizando o RequireJs, por enquanto é isso, lembrando que esse tutorial é básico, em breve vou trazer mais conteúdo sobre Typescript e como aplicar boas práticas, o código fonte deste projeto pode ser baixado no meu [Github](https://github.com/Silva01/tutorial-typescript). Até breve.
