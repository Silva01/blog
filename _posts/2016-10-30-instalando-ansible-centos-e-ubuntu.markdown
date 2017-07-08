---
layout: post
title: "Instalando o Ansible"
date: 2016-10-30 17:36:00 -0300
categories: infra
description: "Tutorial básico de como instalar o Ansible e criar seu ambiente"
identificador: 1
---

#### **O que é o Ansible ?**

O Ansible é uma ferramenta no qual proporciona a automação de configurações ou instalações em servidores na rede. Para se comunicar com esses servidores o ansible utiliza conexão remota por protocolo ssh.

#### **Como o Ansible sabe o endereço das maquinas na rede?**

Aí é que está o grande diferencial do ansible, ele possui em seus arquivos de configuração um inventário no qual devemos informar quais os hosts que queremos que o ansible execute alguma ação, em breve falarei mais detalhado de como o ansible trabalha com esses hosts.

#### **Como instalo o Ansible na minha maquina?**

##### **CentOS**

No CentOS é necessário instalar o epel, pois o epel possibilita encontrar os pacotes necessários para a instalação do ansible de forma fácil por linha de comando.
Para instalar o epel utiliza-se o seguinte comando.

<blockquote>$ sudo yum install epel-release.noarch && sudo yum update</blockquote>

Dessa maneira após instalar o epel, já atualizamos também para que o epel baixe e atualize seus pacotes. Com o epel instalado e atualizado podemos instalar o Ansible utilizando o seguinte comando.

<blockquote>
$ sudo yum install ansible
</blockquote>

Podemos verificar a instalação do ansible utilizando o seguinte comando.

<blockquote>
$ ansible --help
</blockquote>

##### **Ubuntu**

No Ubuntu é necessário adicionar o link do repositório para seja possivel encontrar os pacotes necessários para instalação do ansible, para adicionar o pacote utilizamos o seguinte comando.

<blockquote>
    $ sudo apt-get install software-properties-common
    && sudo apt-add-repository ppa:ansible/ansible
</blockquote>

Após instalar o common e adicionar o link do pacote do ansible ao sources.list do ubuntu precisamos atualizar os pacotes.

<blockquote>
$ sudo apt-get update
</blockquote>

Com os pacotes atualizados, basta agora instalar o Ansible.

<blockquote>
$ sudo apt-get install ansible
</blockquote>

#### **Debian**

Para instalar o Ansible no Debian, a forma é ainda mais simples do que no Ubuntu, basta inserir o seguinte comando no terminal.

<blockquote>
$ sudo apt-get install ansible -y
</blockquote>

#### **FreeBSD**

A instalação no FreeBSD também é bastante simples, apenas um comando é o suficiente para a instalação do Ansible. Para instalação do Ansible no FreeBSD é necessário o seguinte comando.

<blockquote>
$ sudo pkg install ansible
</blockquote>

#### **Arch Linux**

Para instalar o Ansible no Arch Linux, é necessário apenas executar o seguinte comando.

<blockquote>
$ pacman -S ansible
</blockquote>

Essas são as formas mais simples de instalação do ansible em ambiente Linux, existe outras formas de instalação que veremos em breve.