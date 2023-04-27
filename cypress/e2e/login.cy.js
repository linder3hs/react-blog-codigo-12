describe("Test de LoginView", () => {
  it("Probando formulario de forma exitosa", () => {
    cy.visit("/");

    cy.get("input[type='email']").type("linderhassinger00@gmail.com");
    cy.get("input[type='password']").type("linder123456");

    cy.get("button[type='submit']").contains("Sign in").click();
  });

  it("Probando validacion de los inputs", () => {
    cy.visit("/");

    cy.get("button[type='submit']").contains("Sign in").click();

    cy.get("span").contains("Ingresa un correo valido");
    cy.get("span").contains("Ingresa un password valido");
  });

  it("Probando cuando enviamos datos incorrectos al formulario", () => {
    cy.visit("/");

    cy.get("input[type='email']").type("nnnn@gmail.com");
    cy.get("input[type='password']").type("11111111");

    cy.get("button[type='submit']").contains("Sign in").click();

    cy.get("div.swal2-html-container").should(
      "have.text",
      "Invalid login credentials"
    );
  });

  it("Probando boton de github", () => {
    cy.visit("/");

    cy.get("button[type='button']").contains("Sign in with Github").click();
  });
});
