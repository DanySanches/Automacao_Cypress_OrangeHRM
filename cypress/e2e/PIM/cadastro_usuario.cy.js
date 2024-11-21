describe("PIM", () =>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        cy.login('Admin', 'admin123');
        
    })


        it("Deve preencher os campos do formulário corretamente para cadastrar um novo funcionario", () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
            cy.get('.orangehrm-header-container > .oxd-button').as('addButton')
            cy.get('@addButton').click();
            cy.cadastro("João", "Silva", "Santos", "001");
    
        });

        it("Deve preencher os campos do formulário corretamente para cadastrar um novo funcionario", () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
            cy.get('.orangehrm-header-container > .oxd-button').as('addButton')
            cy.get('@addButton').click();
            cy.cadastro("José", "Silva", "Santos", "002");
    
        });
       

    
})