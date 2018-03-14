---
layout: post
title: "Váriaveis no ES6"
date: 2018-03-13 21:00:00 -0300 <!--TODO Mudar para data de publicação-->
categories: js
description: "Usando let, const e var"
identificador: 1
---


## Introdução

Como vai Galera, tudo indo nos conformes ? Hoje o assunto é um assunto bem recorrente no nosso dia a dia, onde desenvolvedores mais novos acabam tendo dúvidas em como usar as variáveis let, const e var no javascript, o objetivo deste post é ajudar esses desenvolvedores a ver qual a diferença entre essas variáveis e como usar cada uma, e quando usar e de que forma. Vamos também aprender qual a melhor forma de aplicar essas variáveis sem que haja dúvidas se é correto ou não utilizar.

### O que é **Let**?

Esse escopo de variável permite que o desenvolvedor consiga definir uma váriável limitada pelo escopo `{}` de bloco aonde foi declarada, *o que isso significa ?*. Que a variável let só será visivel dentro do bloco a onde esse tipo de variável é definida, vamos ver como isso funciona na prática.

{% highlight javascript %}

var nome = 'Isso é um teste';

function teste() {
	let nome = 'Estou alterando o valor da variável';
  
  
  	console.log(nome);
  
}

teste();
console.log(nome);

// Estou alterando o valor da variável

// Isso é um teste

{% endhighlight %}

No exemplo apresentado, foi criado uma variável com escopo **global** usando o *var*, chamamos essa variável de *nome* e atribuimos um valor a ela, logo depois criamos uma função chamada teste, no qual dentro dela criamos uma outra variável chamada *nome* mas dessa vez usando o escopo **let** e logo abaixo imprimimos seu valor com um `console.log(nome)`, após disso, chamamos a função e logo após a chamada da função, imprimimos seu valor novamente. O resultado apresentado foi completamente diferente, na função foi apresentado `Estou alterando o valor da variável` e fora da função foi exibido `Isso é um teste` como isso pode ocorrer ?

Isso ocorre porque a variável declarada com **let** é visivel apenas ao escopo no qual ela foi declarada, neste caso dentro da função, desta forma ela se torna uma variável independente, no qual não tem relação alguma com a variável global declarada antes da função, mesmo a variável possuindo o mesmo nome.

Vamos agora fazer outro exemplo, mas usando uma abordagem bem diferente, agora vamos definir a variável em um bloco.

{% highlight javascript %}

var nome = 'Isso é um teste';


{
	var nome = 'Modifiquei o valor';
  	console.log(nome);
}

console.log(nome);

// Modifiquei o valor

// Modifiquei o valor

{% endhighlight %}

No exemplo acima, criamos uma variável usando o *var* e logo abaixo criamos um bloco e dentro dele declaramos a mesma variável usando também o *var* e imprimos ambos os valores, um dentro do bloco e um após o bloco na parte de fora, e notamos que o resultado dos dois valores foram o mesmo, isso porque as duas variáveis foram criadas com escopo global usando o *var*. E se usassemos o *let* ?


{% highlight javascript %}

var nome = 'Isso é um teste';


{
	let nome = 'Modifiquei o valor';
  	console.log(nome);
}

console.log(nome);

// Modifiquei o valor

// Isso é um teste

{% endhighlight %}

Com o *let* os resultados foram completamente diferentes, isso porque com *let* a variável fica limitada apenas ao escopo no qual ela está definida, ou seja, se limita apenas ao bloco, não tendo conexão com a variável com escopo **global** definida antes do bloco.

### O que é **const**?

Com **const** a variável se torna **quase** como uma constante, mas quase mesmo, pois se definirmos um valor a ela, não é possível atribuir um novo valor a ela, geralmente se utiliza esse tipo variável para em escopos globais e no qual o valor não será modificado. Vamos as exemplos.

{% highlight javascript %}

const title = 'Isso é um title';

title = 'mudei';

{% endhighlight %}

Caso eu declarar uma variável com **const** e logo após tentar modificar o seu valor, o erro `Assignment to constant variable` pois variáveis constante não podem ter seu valor modificado, desta forma não podemos modificar um valor a uma variável **const**.

### hahaha Mas você falou "Quase como uma constante" Por que?

Nesse caso uma variável declarada com **const** ela se torna quase uma constante porque com objetos, é possível modificar seu valor logo após ser declarada, vamos ver como isso funciona.

{% highlight javascript %}

const objeto = { nome: 'José da Silva', idade: 60 }

console.log(objeto);

objeto.idade = 20;

console.log(objeto);

// {nome: "José da Silva", idade: 60}

// {nome: "José da Silva", idade: 20}

{% endhighlight %}

Oooo, mudou!, que treta foi essa? Nesse caso como o valor da variável **const** é um *objeto*, seus atributos são modificavéis por conta disso podemos modificar livremente seu valor, por conta disso variáveis declaradas com **const** são quase ***constantes***.

So uma **observação**, as variáveis **const** também possuem a mesma regra de escopo que as veriáveis criadas com **let** ou seja, limitada ao escopo no qual ela foi criada.

## Conclusão

Esses tipos de declaração de variáveis definidas na especificação do ES6 vem para facilitar o desenvolvimento de aplicações com javascript, lembrando que **let** e **const** já foram incluidos desde o ES2015 e grande parte dos navegadores hoje já suportam esse tipo de declaração, hoje a especificação do ES6 recomenda fortemente o uso do **let** e do **const** no lugar do **var**, dessa forma evitando bugs por conta da declaração de variáveis.

Bom galera, por hoje é só, essa é só a primeira parte de uma série de posts sobre algumas das novidades do ES6, até breve.
