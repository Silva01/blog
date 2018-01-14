---
layout: post
title: "Tenha seu GitHub Particular"
date: 2018-01-14 17:40:00 -0300
categories: infra
description: "Criando seu próprio GitHub com gogs, nginx e docker"
identificador: 1
---

## Introdução

Salve pessoal, depois de tanto tempo, enfim sai o primeiro post de 2018, e desta vez vamos fazer algo bem diferênte, vamos criar nosso próprio GitHub e ter nosso próprio servidor pessoal. Para esse post super especial vamos utilizar as seguintes ferramentas.

1. Vagrant
2. Docker
3. Gogs
4. Nginx

### O que é o Gogs ?

O Gogs é uma interface Git opensource bastante leve, o gogs é tão leve que pode ser instalado até em um simples raspberry. O gogs é feito em Go e é super simples de configurar e possui uma documentação bem simples e de fácil entendimento. Para mais informação sobre o gogs, você pode acessar o link da [Documentação](https://gogs.io/docs).

### Configurando o Gogs

Bom, pra começarmos a por a mão na massa, a primeira coisa que precisamos é de um servidor, mas como muitos poderão não ter um servidor, iremos simular um usando o vagrant, então o primeiro passo é construir seu próprio servidor usando o vagrant, então vamos por a mão na massa.

Primeiro vamos criar todo o ambiente, começando a criar o diretório para o projeto.

{% highlight shell %}
	$ mkdir gogs
	$ cd gogs
{% endhighlight %}

Após criarmos o diretório do lab, vamos inicializar o vagrant para criarmos o arquivo do Vagrantfile responsável por conter todas as configurações da nossa infraestrutura.

{% highlight shell %}
	$ vagrant init debian/jessie64
{% endhighlight %}

Com esse comando o vagrant irá criar um arquivo Vagrantfile responsável por conter todas as configurações da nossa infra, como Ip, Host, Etc. Após executar este comando, o vagrant irá criar um arquivo parecido com esse.

{% highlight ruby %}	
Vagrant.configure("2") do |config|
  config.vm.box = "debian/jessie64"
  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
  SHELL
end
{% endhighlight %}

Com o Vagrantfile configurado, agora vamos construir nosso servidor com o seguinte comando.

{% highlight shell %}
	$ vagrant up
{% endhighlight %}

Com o servidor pronto vamos acessar via ssh nosso servidor e instalar algumas ferramentas que serão necessário para que possamos criar nosso GitHub.

Com o comando abaixo, acessamos via ssh nosso servidor.

{% highlight shell %}
	$ vagrant ssh
{% endhighlight %}

Desta forma acessamos nosso servidor via ssh para começarmos de fato a configurar nosso ambiente, com o acesso ssh pronto, vamos instalar o nginx, o git e o docker para que possamos rodar a interface do gogs.

{% highlight shell %}
	$ sudo apt-get install nginx git
	$ wget -qO- https://get.docker.com/ | sh
{% endhighlight %}

Com isso temos o Git, o Docker e o Nginx prontos, só isso é o suficiente? Não, vamos configurar também o usuário padrão do vagrant para que ele tenha acesso ao docker, adicionando o usuário vagrant ao grupo docker.

{% highlight shell %}
	$ sudo usermod -aG docker vagrant
{% endhighlight %}

Desta forma temos o usuário vagrant ao grupo docker, para que a alteração funcione, vamos deslogar do vagrant e depois logar novamente via ssh.
Agora vamos de fato começar a brincadeira, com o docker pronto, vamos realizar o pull das imagens do gogs e o do mysql, já que o gogs precisa de um banco de dados para gravar algumas configurações, tanto de usuário como de autenticação entre outros.

{% highlight shell %}
	$ docker pull gogs/gogs:0.11.34
	$ docker pull mysql:8.0.3
{% endhighlight %}

Desta forma obtemos a imagem do gogs e do mysql, com esses caras em nosso servidor já estamos com meio caminho andado, agora vamos por no ar nosso gogs.

Primeiro vamos criar nosso container docker do Mysql

{% highlight shell %}
	$ docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345678 -e MYSQL_DATABASE=gogs --name db mysql:8.0.3
{% endhighlight %}

**-d** para rodar em modo daemon, sobe o container como um processo em backgroud

**-p** determina qual porta vai ser exposta na máquina hospedeira nesse caso a porta 3306 do container será exposta na porta 3306 do host (porta container):(port do host)

**-e** Representa as variavéis ambiente que serão criadas no container no momento da sua criação

**--name** Alias para container

Depois de criar o container do mysql, vamos realizar um link do container do mysql com o container do gogs

{% highlight shell %}
	$ docker run -d --name=gogs -p 10022:22 -p 10080:3000 -v /var/gogs:/data --link db:db gogs/gogs
{% endhighlight %}

**-d** para rodar em modo daemon, sobe o container como um processo em backgroud

**-p** determina qual porta vai ser exposta na máquina hospedeira nesse caso a porta 3306 do container será exposta na porta 3306 do host (porta container):(porta do host)

**-v** Cria um volume na máquina host que é sincronizado com um diretório no container

**--name** Alias para container

**--link** Linka o container com outro container

E com isso já teremos como acessar a tela de configuração do gogs. Neste momento se acessarmos o Ip http://192.168.33.10:10080 no navegador é apresentado um formulário de configuração do Gogs. Então vamos configurar.

	* Tipo de banco de dados -> Será Mysql
	* Host -> db:3306
	* usuário -> root
	* senha -> 12345678
	* nome do banco de dados -> gogs
	* Dominio -> 192.168.33.10
	* Porta SSH -> 10022
	* Porta HTTP -> 10080
	* URL do aplicativo -> http://192.168.33.10/git/

Depois de preenchido os campos com os dados acima, vamos clicar em configurações de conta do administrador, nesta opção vai abrir mais alguns campos onde definimos um usuário adminstrador, definimos uma senha para esse usuário e adicionamos um e-mail.

Depois de preencher basta clicar em instalar o gogs. Podemos ver as modificações após instalação acessando o Ip http://192.168.33.10:10080/

Com isso falta apenas configurar o nginx, vamos agora configuralo para ele enchergar o Gogs na porta 80. Vamos acessar o arquivo de configuração do nginx da seguinte forma.


{% highlight shell %}
	$ vim /etc/nginx/sites-available/default
{% endhighlight %}

Vamos editar o arquivo de configuração e deixar algo parecido com isso.

{% highlight shell %}
server {
	listen 80;
	listen [::]:80;	

	root /var/www/html;

	
	index index.html index.htm index.nginx-debian.html;

	server_name _;

	location / {		
		try_files $uri $uri/ =404;
	}

	location /git {	    
	    rewrite ^/git/(.*) /$1 break;
	    proxy_pass http://localhost:10080/;
	}
	
}

{% endhighlight %}

Depois de configurado, precisamos recarregar as configurações no nginx, para recarregar usamos o seguinte comando.

{% highlight shell %}
	$ systemctl reload nginx
{% endhighlight %}

Feito isso, basta acessar via navegador o seguinte endereço http://192.168.33.10/git

### Conclusão

Hoje aprendemos a como criar nosso próprio GitHub usando o Vagrant para criarmos um servidor, depois aprendemos a como subir uma aplicação para gerênciamento de repositórios com docker, e aprendemos a criar uma URI amigável com o Nginx para não expor a porta do servidor, aprendemos como criar um ambiente extremamente básico para trabalho, espero que a dica tenha ajudado e críticas, elógios e sugestões basta deixar seu comentário abaixo.

