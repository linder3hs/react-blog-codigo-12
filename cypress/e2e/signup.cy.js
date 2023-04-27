describe("Sign Up test", () => {
  it("Probando formulario", () => {
    cy.viewport("ipad-2");
    cy.visit("/signup");

    cy.get("input[name='avatar']").type(
      "https://i.pinimg.com/originals/71/df/92/71df9295429fe131e89b24d5c992f512.jpg"
    );

    cy.get("input[name='name']").type("Pepe");

    cy.get("input[name='lastname']").type("Perez");

    cy.get("input[name='email']").type(`${Date.now()}@gmail.com`);

    cy.get("input[name='password']").type("linder123456");
    
    cy.get("button[type='submit']").contains("Sign up").click()
  });
});
