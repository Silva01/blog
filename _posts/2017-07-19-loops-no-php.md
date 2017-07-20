---
layout: post
title: "Loops no PHP"
date: 2017-07-19 22:30:00 -0300
categories: dev
description: "Principais Loops da Linguagem PHP e como utilizá-los"
identificador: 1
---

## O Que são Loops ?

Olá pessoal, hoje vamos falar de loops no PHP, o que são loops? Loops é uma forma de repetir um trecho quantas vezes for necessário, vamos imaginar que precisamos exibir uma lista de fotos, em vez de exibir essa fotos na mão podemos exibir essas fotos por meio de um loop, pois dependendo da quantidade se torna inviável digitar todos os trechos que irá exiir as fotos. Vamos ao exemplo.

{% highlight php %}
<?php
  $fotos = array(
    "foto1",
    "foto2",
    "foto3",
    "foto4",
    "foto5"
  );
  
  // exibir as fotos
  
  echo $fotos[0];
  echo $fotos[1];
  echo $fotos[2];
  echo $fotos[3];
  echo $fotos[4]; 

{% endhighlight %}

O exemplo acima criamos um **array** e nesse array imaginamos que temos varias fotos, caso fosse preciso exibir essas fotos, precisariamos criar vários ***echo*** para exibir cada foto por posição deste array. Neste exemplo temos apenas 5 fotos, agora imaginamos se essa lista contesse 1000 fotos? seria inviável exibir todas as fotos desta forma, é pra isso que os Loops resolvem.

{% highlight php %}
<?php
  $fotos = array(
    "foto1",
    "foto2",
    "foto3",
    "foto4",
    "foto5"
  );
  
 for($i = 0; $i < 5; $i++){
   echo $fotos[$i];
 } 

{% endhighlight %}

Como podemos observar, temos um loop chamado **for**, este loop possui como argumento 3 parametros.

* Valor inicial
* Teste condicional para o loop continuar
* Incremento

No valor inicial declaramos uma variavel **$i** e definimos que o valor inicial dela é *0*, em seguida declaramos uma condição, enquanto o valor da variável **$i** for menor que *4* (que é a quantidade de elementos do array) então o loop continuará, e por último a cada vez que o loop terminar ele irá incrementar mais 1 a variável *$i* **($i++)**. Podemos melhorar esse loop, pois temos um problema, caso o array cresça iremos precisar sempre mudar o valor da condição de acordo com o numero de elementos que o array irá conter, em alguns casos é impossível prever ou contar cada elemento no olho, então podemos refatorar esse código pra seguinte maneira.

{% highlight php %}
<?php
  $fotos = array(
    "foto1",
    "foto2",
    "foto3",
    "foto4",
    "foto5"
  );
  
  for($i = 0; $i < count($fotos); $i++){
    echo $fotos[$i];
  } 

{% endhighlight %}

No exemplo acima, adicionamos a função **count()** cuja a função é contar quantos elementos o array contém. Uma outra alternativa e também a menos utilizada é usar o loop **while()**. Diferente do loop **for** o loop **while()** recebe apenas um parametro do tipo booleano, ou seja, o loop só continua enquanto o valor da condição for verdadeiro.

{% highlight php %}
<?php
  $fotos = array(
    "foto1",
    "foto2",
    "foto3",
    "foto4",
    "foto5"
  );
  
  $contador = 0;
  
  while($contador < count($fotos)){
    echo $fotos[$contador];
    $contador++;
  } 

{% endhighlight %}

Refatorando o código acima usando o loop **while()** nota-se que foi utilizado um **contador** que foi inicializado fora do loop que serve como condição de parada para o loop *while()* desta forma declaramos que enquanto o valor da variável *$contador* for menor que o total de elementos do array *$fotos* o loop irá executar o **echo** e exibir a foto que está armazenada nas posições do array, por fim antes de terminar o loop, o valor da varável *$contador* será incrementada em mais 1 e o loop voltará a verificar a condição e caso a condição for **verdadeira** irá executar todo seu conteúdo novamente.

### Conclusão

Vimos como utilizar um loop de forma simples no PHP evitando assim a repetição de linhas de código, vimos também como utilizar os loops **for** e **while** e como percorrer um array usando esses loops.
