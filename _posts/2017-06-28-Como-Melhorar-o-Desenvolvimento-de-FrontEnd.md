---
layout: post
title: "FrontEnd com Yeoman"
date: 2017-06-28 22:43:00 -0300
categories: dev
description: "O Desafio para quem desenvolve, é desenvolver de forma fácil e divertida"
identificador: 2
---


Olá pessoal, estava um pouco sumido das postagens ultimamente (e coloque tempo nisso) que resolvi escrever um post para falar sobre o Yeoman, uma ferramenta incrível para a geração de esqueletos de forma automatizada, deixo para vocês o [link](http://yeoman.io) para conferir na página do Yeoman a quantidade de geradores que é possível obter e utilizar.

### Yeoman

O Yeoman é uma ferramenta fantástica, com o Yeoman é possível criar Generators, que são geradores de estrutura para um projeto

Como assim ?

![Gato duvida](https://alcoolgel.files.wordpress.com/2010/06/duvidas.jpg)

Com o Yeoman é possivel gerar um esqueleto de uma aplicação que utiliza angular, com tudo configurado, Karma e Jasmine para TDD com Javascript, WebPack para empacotamento dos arquivos Javascript, Grunt configurado com tarefas assenciais para desenvolvimeto, como testes, builds e etc, inclusive é possivel subir um servidor com grunt para seja possível testar a aplicação em tempo de desenvolvimento, fora que é possivel gerar os arquivos Javascript com seus testes unitários já configurado usando os sub-geradores do Yeoman.

Desta forma nós desenvolvedores focamos no que realmente é importante, que é a implementação, pois toda a configuração inicial de testes unitários, configuração de build e outras configuração que utilizamos para rodar a aplicação, descartamos, pois já vem configurado no template que o Yeoman gera.

![yeoman](http://yeoman.io/static/illustration-home-inverted.91b07808be.png)

E o mais incrível, podemos criar nossos próprios geradores para ser utilizados em projetos específicos, o legal de tudo isso que o Yeoman utiliza Javascript para criar os templates. Outra observação é que o Yeoman não se limita a gerar apenas templates para projetos que usam Javascript, o Yeoman pode gerar templates para qualquer linguagem, é uma ferramenta que vale apena dedicar alguns minutos para estudo, pois vai facilitar e muito no desenvolvimento de aplicações em qualquer arquitetura e em qualquer linguagem.

 


