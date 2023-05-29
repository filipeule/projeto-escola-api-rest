# PROJETO ESCOLA API REST

Este projeto foi feito no desenvolvimento do curso [Curso de JavaScript e TypeScript do básico ao avançado](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) com o auxílio do professor [Luiz Otávio Miranda](https://www.linkedin.com/in/otaviomirandabr/).
Nele, criamos uma API REST de um sistema escolar, onde temos cadastro de alunos e usuários do sistema.

No projeto, aplicamos conceitos que foram de grande importância para o meu aprendizado e que eu não tinha, como, por exemplo, organizar e estruturar um projeto utilizando o sistema de *router* do **Express** e cada rota sendo gerida por um *controller*. Utilizamos conceitos de *middlewares* para aplicar validação de login de um usuário para autorizar o acesso a uma rota da aplicação, utilizando *tokens* JWT. Utilizamos também o *middleware* **Multer**, que facilita o upload de arquivos para a aplicação. Aplicamos ele para fazer upload de fotos que podem ser vinculadas aos alunos. Outra forma de organização muito interessante foi o uso da pasta *config*, onde colocamos todas as configurações mais importantes, seja do Multer ou do banco de dados.

Também utilizamos o ORM **Sequelize** para desenvolvimento das tabelas no banco de dados MariaDB, criação de *migrations* e *seeds* e, além disso, o mapeamento e as validações dos campos dos *models* nossa aplicação.

Outro ponto muito legal no desenvolvimento desse projeto foi utilizar mais as classes do Javascript onde era possível, como na criação do app do Express. Com isso, foi mais fácil de perceber na prática onde podemos utilizar mais classes nas nossas aplicações.

Desenvolver esse foi muito satisfatório e de grande aprendizado, porque aplicamos conceitos básicos de uma API REST em NodeJS, desenvolvemos todo o CRUD dos nossos *models*, estruturamos o projeto do zero e fizemos o *deploy* em um servidor. Agradeço ao professor **Luiz Otávio** pela dedicação ao passar seu conhecimento e ao curso *Curso de JavaScript e TypeScript do básico ao avançado*