describe('Dashboard', () => {

    before(() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        cy.login('Admin', 'admin123');
        
        
    })
  
    it('Deve finalizar a sessão ao presssionar o botão logout', () => {
        cy.logout();
        cy.screenshot("teste_logout");
        
  
      });

    });