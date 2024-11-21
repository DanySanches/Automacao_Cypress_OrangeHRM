Cypress.Commands.add("login", (username, password) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').as('inputUsername');
    cy.get('@inputUsername').type(username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').as('inputPassword')
    cy.get('@inputPassword').type(password);
    cy.get('.oxd-button').as("enterButton")
    cy.get('@enterButton').click();
   
  });

  Cypress.Commands.add("cadastro",(nome, sobrenome1, sobrenome2, id)=>{
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
    .as("nomeCadastro")
    .type(nome);

    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
    .as("sobrenome1cadastro")
    .type(sobrenome1);

    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
    .as("sobrenome2cadastro")
    .type(sobrenome2);

    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
    .as('idCadastro')
    .type(id);

    cy.get('.oxd-button--secondary')
    .as('saveButton')
    .click();

    cy.screenshot('cadastro');
  })

  Cypress.Commands.add("editarDados", (alterarNome, alterarSobrenome, alterarSobrenome2) => {
 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon')
    .as('checkbox')
    .click(); 

    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)')
    .as('editBtn')
    .click();

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
    .as("nomeInput")
    .clear()
    .type(alterarNome);

    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
    .as('middleName')
    .clear()
    .type(alterarSobrenome);

    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
    .as('lastName')
    .clear()
    .type(alterarSobrenome2);
    
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button')
    .as('saveBtn')
    .click();

    cy.screenshot('edicao_final');
   
});

Cypress.Commands.add("excluirFuncionario", () => {
  cy.get(':nth-child(2) > .oxd-main-menu-item')
  .as('PimButton')
  .click();
  
  cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')
  .as("employerList")
  .click();
  
  cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label')
  .as('checkbox')
  .click();
  
  cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon')
  .as('trashButton')
  .click();
  
  cy.get('.orangehrm-modal-footer > .oxd-button--label-danger')
  .as('deleteButton')
  .click();
  
  cy.screenshot('delete_user')
  
});

Cypress.Commands.add('logout', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  cy.get('.oxd-userdropdown-name').as('loggedInUser').click();
  cy.get(':nth-child(4) > .oxd-userdropdown-link').as('logoutBtn').click();

});



// ************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })***********