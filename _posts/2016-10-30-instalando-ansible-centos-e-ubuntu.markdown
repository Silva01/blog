---
layout: post
title: "Instalando o Ansible"
date: 2016-10-30 17:36:00 -0300
categories: Ansible
---

## O que é o Ansible ?

O Ansible é uma ferramenta no qual proporciona a automação de configurações ou instalações em servidores na rede. Para se comunicar com esses servidores o ansible utiliza conexão remota por protocolo ssh.

## Como o Ansible sabe o endereço das maquinas na rede?

Aí é que está o grande diferencial do ansible, ele possui em seus arquivos de configuração um inventário no qual devemos informar quais os hosts que queremos que o ansible execute alguma ação, em breve falarei mais detalhado de como o ansible trabalha com esses hosts.

## Como instalo o Ansible na minha maquina? 

### CentOS

No CentOS é necessário instalar o epel, pois o epel possibilita encontrar os pacotes necessários para a instalação do ansible de forma fácil por linha de comando.
Para instalar o epel utiliza-se o seguinte comando.

> $ sudo yum install epel-release.noarch && sudo yum update

Dessa maneira após instalar o epel, já atualizamos também para que o epel baixe e atualize seus pacotes. Com o epel instalado e atualizado podemos instalar o Ansible utilizando o seguinte comando.

> $ sudo yum install ansible

Podemos verificar a instalação do ansible utilizando o seguinte comando.

> $ ansible --help

### Ubuntu

No Ubuntu é necessário adicionar o link do repositório para seja possivel encontrar os pacotes necessários para instalação do ansible, para adicionar o pacote utilizamos o seguinte comando.

> $ sudo apt-get install software-properties-common && sudo apt-add-repository ppa:ansible/ansible

Após instalar o common e adicionar o link do pacote do ansible ao sources.list do ubuntu precisamos atualizar os pacotes.

> $ sudo apt-get update

Com os pacotes atualizados, basta agora instalar o Ansible.

> $ sudo apt-get install ansible

 