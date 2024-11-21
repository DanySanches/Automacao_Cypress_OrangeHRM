describe('Pim', () =>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        cy.login('Admin', 'admin123');
        
     
    })
   
    it('Deve selecionar um empregado e conseguir excluir seus dados', () =>{
        cy.excluirFuncionario(),
        cy.screenshot('excluir_usuario');
    })
})