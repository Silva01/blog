---
layout: post
title: "Testando o Ansible"
date: 2016-11-06 21:42:00 -0300
categories: infra
description: "Tutorial básico de como utilizar pela primeira vez o ansible"
identificador: 1
---

#### **Vamos Iniciar o Ansible ?**

Agora que o Ansible foi instalado (acesse [aqui](http://danielsilva.net.br/2016/instalando-ansible-centos-e-ubuntu/) caso não tenha visto) já podemos realizar alguns testes para verificar se a instalação do ansible não ocorreu problemas.
O ansible possui um inventário no qual ele utiliza para consultar os hosts no qual ele irá orquestrar. Este inventário possui um arquivo chamado hosts. É nesse arquivo que declaramos quais os hosts queremos que o Ansible orquestre.
O Ansible utiliza o protocolo **SSH** para se comunicar com um servidor (*Informado no arquivo de hosts*) então a forma que declaramos no arquivo de hosts quais os host o ansible irá acessar para que seja possível a orquestração, é bem parecido com uma conexão SSH simples.

Pra começar, vamos realizar os testes na maquina local, desta forma vamos conseguir simular a execução de tarefas como se estivéssemos executando em servidores externos.

Pra começar precisamos acessar o arquivo de hosts localizado na pasta de configuração do Ansible, para acessar esse arquivo basta inserir o seguinte comando no terminal.

{% highlight shell %}
    $ sudo nano /etc/ansible/hosts
{% endhighlight %} 

Ao acessar o arquivo de hosts vamos inserir ao final do arquivo os parametros necessários para que o Ansible funcione localmente.

`localhost ansible_ssh_user=seu usuario ansible_ssh_pass=sua senha ansible_ssh_port=22`

* **localhost:** É o seu endereço local.
* **ansible_ ssh_user:** É o seu usuário local, aquele que você utiliza para acessar sua maquina.
* **ansible_ ssh_pass:** É a sua senha utilizada para acessar seu perfil de usuário
* **ansible_ ssh_port:** É a porta para acesso SSH, por padrão utiliza-se a 22

Após definir esses parametros basta salvar e sair do arquivo. Após salvar vamos verificar se os parametros nos quais definimos estão corretos, para verificar se está tudo nos conformes vamos executar um modulo do Ansible que realiza o ping nos hosts que definimos lá no inventário.
Para utilizar esse modulo basta executarmos o seguinte comando no terminal.

{% highlight shell %}
    $ ansible all -m ping
{% endhighlight %}

Após executar este comando, se tudo ocorreu bem a seguinte mensagem será apresentada no terminal.

{% highlight shell %}
    localhost | success >> {
        "changed": false,
        "ping": "pong"
    }
{% endhighlight %}

Bom e com isso terminamos nosso segunto post a respeito da utilização inicial do Ansible, em breve teremos como utilizar PlayBooks no ansible, até breve.
