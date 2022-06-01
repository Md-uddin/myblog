describe("login test file is working", () => {
  it("should see the text on page 1", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="about"]').click();
    cy.findByRole("link", { name: /← go back/i }).click();
  });
});
