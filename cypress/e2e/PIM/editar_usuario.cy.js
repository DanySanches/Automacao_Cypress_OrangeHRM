describe("PIM", () => {
  before(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.login("Admin", "admin123");
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
  });

  it("Deve selecionar um empregado e conseguir editar seus dados", () => {
    cy.editarDados("Maria", "a ", "Silva");
 
  });


});
