🔧 Sistema de E-commerce - Autopeças Tio Sergio

![Java](https://img.shields.io/badge/Java-17-ED8B00?logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?logo=thymeleaf&logoColor=white)


📦 Sistema web de e-commerce de autopeças desenvolvido com Spring Boot, Thymeleaf e MySQL, aplicando arquitetura em camadas, boas práticas de desenvolvimento e organização de código.

O sistema permite que usuários naveguem por produtos, adicionem itens ao carrinho e realizem pedidos, garantindo organização e facilidade de manutenção.

📌 Status do Projeto

🚧 Em desenvolvimento
✅ Estrutura MVC implementada
✅ API REST para usuários e pedidos
✅ Integração com MySQL
⚙️ Novas funcionalidades em evolução

🚀 Funcionalidades Principais
👤 Usuários

Cadastro de usuários

Autenticação de login

Persistência com Spring Data JPA

Sessão simulada no frontend com LocalStorage

📦 Produtos

Listagem de produtos cadastrados

Exibição com imagens

Organização por categorias

Página de detalhes do produto

🛒 Carrinho de Compras

Adicionar produtos ao carrinho

Atualizar quantidade

Remover itens

Armazenamento temporário no LocalStorage

📋 Pedidos

Finalização de pedidos

Registro de pedidos no banco de dados

Associação entre:

Usuário

Pedido

Itens do pedido

Produtos

Consulta de histórico de pedidos do usuário

🧠 Arquitetura do Sistema

O projeto segue o padrão MVC (Model-View-Controller):

Camada	Responsabilidade
Controller	Recebe requisições HTTP e retorna respostas
Service	Contém regras de negócio
Repository	Comunicação com banco via Spring Data JPA
Entity	Representação das tabelas do banco
View (Thymeleaf)	Renderização das páginas HTML

🗄️ Estrutura do Banco de Dados

Principais entidades do sistema:

Usuários

Categorias

Produtos

Pedidos

Itens do Pedido

Relacionamentos:

Usuario 1 --- N Pedido
Pedido 1 --- N ItemPedido
Produto 1 --- N ItemPedido
Categoria 1 --- N Produto

🔧 Tecnologias Utilizadas

☕ Java 17	Linguagem principal do projeto
🌱 Spring Boot	Framework backend
🗄️ MySQL	Banco de dados
📦 Spring Data JPA / Hibernate	Persistência e ORM
🌐 Thymeleaf	Renderização de páginas HTML
🎨 Bootstrap 5	Layout responsivo
⚡ JavaScript (Fetch API)	Integração com APIs
📂 LocalStorage	Persistência do carrinho no frontend


🎯 Funcionalidades em Desenvolvimento

🔎 Filtro de produtos por categoria

📊 Painel administrativo

📦 Controle de estoque

💳 Integração com pagamento

📱 Melhorias de responsividade

📌 Objetivo do Projeto

Este projeto foi criado com foco em:

organização de código

separação de responsabilidades

facilidade de manutenção

aprendizado de Spring Boot + aplicações web completas

A estrutura foi planejada para permitir evolução do sistema, possibilitando a adição de novas funcionalidades com facilidade.

👨‍💻 Autor

Feito com 💻 + ☕ por Diego Vieira

💬 Projeto em constante evolução 🚀
