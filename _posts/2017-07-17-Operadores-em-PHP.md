---
layout: post
title: "Operadores com PHP"
date: 2017-07-17 20:00:00 -0300
categories: dev
description: "Como utilizar Operadores em PHP"
identificador: 1
---

### Operadores do PHP

Olá pessoal, hoje iremos falar sobre Operadores. No PHP existem 7 operadores que podem ser utilizados para manipular os dados no PHP, esses operadores são.

* Concatenação
* Soma
* Subtração
* Divisão
* Multiplicação
* Exponêncial
* Módulo

#### Concatenação

O Operador de concatenação é utilizado quando é preciso que duas **strings** sejam unidas para formar uma palavra. Para que duas palavras sejam concatenadas é utilizado o operador **(.)** (ponto)  abaixo segue um exemplo.

{% highlight php %}
<?php

  $nome = "Jose";
  $sobrenome = "Alencar";

  $nomeCompleto = $nome. " " .$sobrenome;

  echo "$nomeCompleto";

  /* Será exibido => Jose Alencar */

{% endhighlight %}

#### Soma

O Operador de soma é bastante conhecido, é utilizado para somar dois valores númericos, esse operador é representado pelo sinal de **(+)** (Mais), abaixo segue um exemplo de soma.

{% highlight php %}
<?php
  $numero1 = 10;
  $numero2 = 30;
  
  $soma = $numero1 + $numero2;
  
  echo $soma;
  
  /* O resultado exibido é => 40 */

{% endhighlight %}

Existes outras formas de somar números com o operador de soma, abaixo podemos ver as várias formas de se utilizar este recurso.

{% highlight php %}
<?php
  $num1 = 10;
  $num1++; // é a mesma coisa que $num1 = $num1 + 1;
  
  $num2 = 10;
  $num2+=20; // é a mesma coisa que $num2 = $num2 + 20;

{% endhighlight %}

#### Subtração

O Operador de subtração é utilizado para subtrair um valor apartir de outro valor, esta operação é representada por **(-)** (Menos). Vamos ao exemplo.

{% highlight php %}
<?php
  $num1 = 10;
  $num2 = 5;
  
  $sub = $num1 - $num2;
  echo $sub;
  
  /* O Resultado exibido é => 5 */

{% endhighlight %}

Assim como na soma, a subtração também existe outras formas nos quais podem ser utilizadas.

{% highlight php %}
<?php
  $num1 = 10;
  $num1--; // é a mesma coisa que $num1 = $num1 - 1;
  
  $num2 = 10;
  $num2-=20; // é a mesma coisa que $num2 = $num2 - 20;

{% endhighlight %}

#### Divisão

A divisão é utilizada para dividir um valor por outro, no PHP este operador é representado pelo sinal de **(/)** (Barra).

{% highlight php %}
<?php
  $num1 = 10;
  
  $div = $num1 / 5;
  
  echo $div;
  
  /* O Valor exibido será => 5 */

{% endhighlight %}

#### Multiplicação

A Multiplicação é utilizada para multiplicar um valor por outro valor, esse sinal no PHP é representado pelo sinal de **( * )** (Asterisco).

{% highlight php %}
<?php
  $num1 = 10;
  $num2 = 2;
  
  $mult = $num1 * $num2;
  
  echo $mult;
  
  /* o resultado exibido é => 20 */

{% endhighlight %}

#### Exponêncial

O operador de esponêncial é usado quando queremos elevar algum valor a potência, este operador é representado no PHP por **( * * )** (Dois Asterisco).

{% highlight php %}
<?php
  $num1 = 10;
  $num2 = 2;
  
  $potencia = $num1 ** num2;
  
  echo $potencia;
  
  /* O resultado exibido é => 100 */

{% endhighlight %}

O Operador Exponêncial foi introduzido no PHP a partir da versão 5.6.

#### Módulo

Utilizado para obter o resto de uma divisão, no PHP é representado pelo sinal de **(%)** (porcentagem).

{% highlight php %}
<?php
  $num1 = 10;
  $num2 = 3;
  
  $resto = $num1 % $num2;
  
  echo $resto;
  
  /* O valor exibido é => 1 */

{% endhighlight %}

### Conclusão

Com os operadores do PHP é possivel manipular os dados de forma simples e fácil, vimos que também é possível reduzir essas operações com os operadores de incremento **(++)** e o de decremento **(--)**, vimos como é fácil obter o resto de uma divisão, desta maneira podemos identificar de forma rápida se determinado valor é impar ou par, vimos também como unir strings por meio do operador de concatenação, esses são os operadores básicos usados no PHP, em breve trarei como manipular variáveis e como declarar condicionais. 