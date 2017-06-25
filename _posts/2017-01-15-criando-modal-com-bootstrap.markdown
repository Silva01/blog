---
layout: post
title: "Criando Modal com Bootstrap"
date: 2017-01-15 12:03:00 -0300
categories: Programação
description: "Tutorial que ensina a criar Modais básicas com Bootstrap"
identificador: 2
---

#### **Modais com BootStrap**

Olá galera, Como foi a virada de ano? Bom a minha foi bem corrida, rsrs, mas enfim esse ano promete muitas novidades. Hoje vamos aprender a criar um modal básico com Bootstrap e Jquery. Abaixo disponibilizo os links para quem quiser baixar ambos.

* [Bootstrap](http://getbootstrap.com/ "Bootstrap")
* [Jquery](https://jquery.com/ "Jquery")

## O que é modal ?

Modal são janelas suspensas no qual são muito utilizadas para mostrar alertas ou avisos na tela, esses modals vão sempre aparecer a frente da janela principal trazendo algum conteúdo.

## Como Criar um Modal ?

Para que seja necessario criar um modal em bootstrap, antes precisamos carregar o CSS do bootstrap, o javascript do Jquery e o javascript do bootstrap.


Para que o bootstrap funcione de forma correta, a seguinte ordem deverá
ser seguida para que o carregamento do javascript aconteça de forma correta

1. Javascript do Jquery
2. Javascript do Bootstrap


## HTML

Vamos ao código para a criação de um modal utilizando o Bootstrap, primeiro vamos criar nossa página HTML.


<script src="https://gist.github.com/Silva01/81bb885cdb7de20cb7ea1a1430689ce9.js"></script>

Esse é um HTML bem básico, sua estrutura é composta por um botão no qual quando for clicado irá executar uma ação de abrir o modal.

Abaixo como podemos destacar temos o modal.


<script src="https://gist.github.com/Silva01/b50840f01003c1d510cc070e0f194435.js"></script>


Neste modal temos uma `div` principal no qual é obrigatória para a criação do modal, como necessário para a criação do modal, esta `div` chama no _CSS_ do Bootstrap a classe **modal** responsável por montar a estrutura do modal, também definimos um **id** para que possamos manipular esse modal via javascript.

Dentro da `div` principal podemos observar duas outras **divs** que são obrigatórias para a criação do modal, essas **divs** chamam no _CSS_ do bootstrap as classes **modal-dialog** e **modal-content**.

* **modal-dialog**: Possui propriedades de Altura e Largura
* **modal-content**: Possui as propriedade para estilo do modal (background, color, border, etc).

E por fim dentro da `div` no qual possui a classe **modal-content** existe mais três outras **divs** na qual separa a estrutura do modal, cada uma delas chamam as classes **modal-header**, **modal-body** e **modal-footer**.

* **modal-header**: Aqui ficam os elementos que irão compor o cabeçalho do modal.
* **modal-body**: Aqui ficam os elementos que irão compor o corpo do modal.
* **modal-footer**: Aqui ficam os elementos que irão compor o rodapé do modal.

## main.js

Após Criado o HTML para a criação do Modal, vamos criar um arquivo javascript chamado **main.js** no qual irá manipular os eventos dentro do modal.



<script src="https://gist.github.com/Silva01/5734d28c960f480db91408fa2a2ebdc0.js"></script>

O Javascript é bem simples e de fácil leitura, nele temos um javascript com uma função, essa função é executada ao clicar no botão responsável por abrir o modal.


```javascript
$("#modal-alerta").modal();

```
Nesta linha temos simplesmente o cara responsável por abrir o modal, ele chama a `div` principal no qual definimos o `id=modal-alerta`, então ao clicar no botão acionar modal, ele ativará o evento responsável por abrir o modal, podemos observar que esse evento chama a classe `modal()` no qual está inserida dentro do javascript do **bootstrap** e tem o papel de executar o modal.

Então ficamos nos perguntando, beleza, o javascript acima ele abre o modal, e pra fechar o modal ?

Pra fechar o modal, não precisamos declarar uma função no javascript que feche o modal, invés disso podemos criar um simples botão e adicioná-lo no modal para que realize o fechamento do modal, mas simplesmente criar o botão não garante o fechamento do modal, então para garantir o fechamento desse modal utilizamos a propriedade `data-dismiss="modal"`, essa propriedade garante o encerramento do modal.

O Exemplo completo desse tutorial você pode conferir acessando este [Link](https://gist.github.com/Silva01/a2156cf89bf5cae4bfa70f22a4d03e6c)
