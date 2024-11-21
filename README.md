# Projeto de Automação com Cypress - Orange HRM 🍊

Este projeto contém testes automatizados usando o **Cypress** para a aplicação **OrangeHRM**, um sistema de gerenciamento de recursos humanos (RH). Ele testa funcionalidades como **login**, **cadastro de funcionários**, **edição**, **exclusão** e **logout**.

## 💻 Requisitos

Antes de começar, certifique-se de ter o seguinte instalado no seu ambiente de desenvolvimento:

- **Node.js**: [Download](https://nodejs.org/)
- **Cypress**: [Documentação](https://www.cypress.io)

## 🚀 Como Rodar o Projeto

1. **Instalar Dependências**

Clone este repositório e navegue até a pasta do projeto. Em seguida, execute o seguinte comando para instalar as dependências:

```bash
	npm install
 ```

2. **Executar os Testes**

Depois de instalar as dependências, rode os testes com o seguinte comando:

```bash
	npx cypress open
```
Isso abrirá o Cypress Test Runner, onde você pode escolher qual teste executar.

  

## 📝 Comandos Personalizados

1. **Login**

Este comando preenche os campos de usuário e senha e realiza o login na aplicação.

````javascript

Cypress.Commands.add("login", (username, password) => {

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').as('inputUsername');

cy.get('@inputUsername').type(username);

cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').as('inputPassword');

cy.get('@inputPassword').type(password);

cy.get('.oxd-button').as("enterButton");

cy.get('@enterButton').click();

});
````

2. **Cadastro de Funcionário**

Este comando preenche os campos necessários para cadastrar um novo funcionário.
````javascript

Cypress.Commands.add("cadastro", (nome, sobrenome1, sobrenome2, id) => {

cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').as("nomeCadastro").type(nome);

cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').as("sobrenome1cadastro").type(sobrenome1);

cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').as("sobrenome2cadastro").type(sobrenome2);

cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').as('idCadastro').type(id);

cy.get('.oxd-button--secondary').as('saveButton').click();

cy.screenshot('cadastro');

});
````

3. **Edição de Dados**

Este comando permite editar os dados de um funcionário existente.

````javascript

Cypress.Commands.add("editarDados", (alterarNome, alterarSobrenome, alterarSobrenome2) => {

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");

cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').as('checkbox').click();

cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').as('editBtn').click();

cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').as("nomeInput").clear().type(alterarNome);

cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').as('middleName').clear().type(alterarSobrenome);

cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').as('lastName').clear().type(alterarSobrenome2);

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').as('saveBtn').click();

cy.screenshot('edicao_final');

});
````

4.**Exclusão de Funcionário**

Este comando realiza a exclusão de um funcionário da lista.

````javascript

Cypress.Commands.add("excluirFuncionario", () => {

cy.get(':nth-child(2) > .oxd-main-menu-item').as('PimButton').click();

cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').as("employerList").click();

cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label').as('checkbox').click();

cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').as('trashButton').click();

cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').as('deleteButton').click();

cy.screenshot('delete_user');

});
````

5.** Logout**

Este comando realiza o logout do usuário.

```javascript

Cypress.Commands.add('logout', () => {

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

cy.get('.oxd-userdropdown-name').as('loggedInUser').click();

cy.get(':nth-child(4) > .oxd-userdropdown-link').as('logoutBtn').click();

});
```
  

## 🧪 Estrutura de Testes

 - **Testes de Login**

Testa o login com credenciais válidas e inválidas.

 - **Testes de Cadastro**

Verifica se os campos de cadastro são preenchidos corretamente e o novo funcionário é adicionado.

- **Testes de Edição**

Testa a edição dos dados de um funcionário existente.

- **Testes de Exclusão**

Verifica a exclusão de um funcionário da plataforma.

- **Testes de Logout**

Verifica se o logout funciona corretamente.

  
### 📊 Relatórios de Testes

Os resultados dos testes são gerados utilizando o mochawesome, com os seguintes detalhes:

Relatório HTML para visualização gráfica.

Relatório JSON para análise posterior.

Gráficos de cobertura de código.

Os relatórios serão salvos na pasta cypress/results.

  
### Estrutura de Diretórios e Arquivos do Projeto

  

├── cypress/

│ ├── e2e/

│ │ ├── login_logout/

│ │ │ └── login.cy.js # Testes de login

| | | └── logout.cy.js # Teste de logout

│ │ ├── PIM/

│ │ │ └── cadastro_usuario.cy.js # Testes de cadastro de funcionário

│ │ │ └── editar_usuario.cy.js # Testes de edição de funcionário

│ │ │ └── excluir_usuario.cy.js # Testes de exclusão de funcionário

│ ├── support/

│ │ ├── commands.js # Comandos personalizados

│ │ └── index.js # Configurações globais e eventos

│ ├── fixtures/

│ │ └── example.json # Dados fictícios

│ └── results/

│ └── mochawesome-report/ # Relatórios do mochawesome

├── cypress.json # Arquivo de configuração do Cypress

├── package.json # Dependências e scripts

└── README.md # Documentação do projeto

##Detalhamento dos Arquivos

**cypress/e2e/:**

**login_logout/: ** Testes relacionados ao login e logout do usuário.

- login.cy.js: Contém os testes que validam a autenticação do usuário.

- logout.cy.js: Contém os testes para validar a finalização de sessão.

** PIM/:** Testes relacionados ao gerenciamento funcionários.

- cadastro_usuario.cy.js: Contém os testes de cadastro de funcionário.

- editar_usuario.cy.js: Contém os testes para editar dados dos funcionários.

- excluir_usuario.cy.js: Testes para verificar a exclusão de um funcionário.

**cypress/support/:**

 - commands.js: Comandos personalizados que você já adicionou (login, cadastro, edição, etc).

- index.js: Arquivo de configuração onde você pode importar e configurar qualquer comportamento global, como configuração de relatórios, configuração do ambiente, etc.

**cypress/fixtures/:**

Se você precisar de dados fictícios ou exemplos, pode armazená-los aqui.

**cypress/results/: **

Pasta onde os relatórios do mochawesome serão salvos.

**cypress.json:**

Arquivo de configuração global para o Cypress, onde você pode definir variáveis de ambiente, URL base, tempo limite de execução dos testes, etc.

**package.json:**

 Contém as dependências do projeto, como Cypress e mochawesome, além de scripts para rodar os testes.

 **README.md:**
 
Documentação do projeto com informações sobre como configurar, rodar os testes, o que é o projeto, como contribuir, etc.
