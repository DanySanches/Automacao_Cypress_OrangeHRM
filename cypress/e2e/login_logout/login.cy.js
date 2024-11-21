describe('Página de Login', () => {

  beforeEach(() =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
  })

  it('Deve preencher os campos corretamente e auntenticar o usuário na página', () => {
      cy.login("Admin", "admin123");
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.screenshot("teste_login_completo");
      

    });

    it('Deve apresentar uma mensagem de erro se um ou mais campos forem preenchidos incorretamente', ()=>{
      cy.login("aaaa", "admin123");
      cy.contains("Invalid credentials").should('be.visible');
      cy.screenshot("teste_login_falha_completo");
    });

    it('Deve apresentar uma mensagem de erro se um ou mais campos forem preenchidos incorretamente', ()=>{
      cy.login("Admin", "admin");
      cy.contains("Invalid credentials").should('be.visible');
      cy.screenshot("teste_login_falha_2_completo");
    });

    it('Deve apresentar uma mensagem "Required" abaixo dos campos em branco', () =>{
      cy.get('.oxd-button').as("enterButton")
      cy.get('@enterButton').click(); 
      cy.contains("Required").should('be.visible');
      cy.screenshot("teste_falha_3_completo");
    })

  });
