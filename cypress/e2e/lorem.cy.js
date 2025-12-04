describe("Lorem Redux", () => {
  it("displays title and body", () => {
    cy.visit("http://localhost:8080");
    cy.contains("Loading...").should("not.exist");
    cy.get("h2").should("contain.text", "Lorem Ipsum");
    cy.get("p").should("contain.text", "Lorem ipsum dolor sit amet");
  });
});
