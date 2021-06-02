
describe("Setup testing", () => {
  it("Should visit the Morse app on localhost", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
  })
})



describe("Test from English to Morse and switching", () => {
  it("Should translate hello", () => {
    cy.get("#clear").click();
    cy.get("#etm").click();
    cy.get(".input").type("hello");
    cy.get("#translate").click();
    cy.get(".output").should("have.value", ".... . .-.. .-.. ---")
  })
  it("Should translate abcdefghijklmnopqrstuvwxyz", () => {
    cy.get("#clear").click();
    cy.get("#etm").click();
    cy.get(".input").type("abcdefghijklmnopqrstuvwxyz");
    cy.get("#translate").click();
    cy.get(".output").should("have.value", ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..")
  })
  it("Should translate z y x w v u t s r q p o n m l k j i h g f e d c b a", () => {
    cy.get("#clear").click();
    cy.get("#etm").click();
    cy.get(".input").type("z y x w v u t s r q p o n m l k j i h g f e d c b a");
    cy.get("#translate").click();
    cy.get(".output").should("have.value", "--.. / -.-- / -..- / .-- / ...- / ..- / - / ... / .-. / --.- / .--. / --- / -. / -- / .-.. / -.- / .--- / .. / .... / --. / ..-. / . / -.. / -.-. / -... / .-")
  })
})
describe("Test from Morse to English and switching", () => {
  it("Should translate I like to code!", () => {
    cy.get("#clear").click();
    cy.get("#mte").click();
    cy.get(".input").type(".. / .-.. .. -.- . / - --- / -.-. --- -.. . -.-.--");
    cy.get("#translate").click();
    cy.get(".output").should("have.value", "I like to code!")
  })
  it("Should translate The quick brown fox jumped over the lazy dog.", () => {
    cy.get("#clear").click();
    cy.get("#mte").click();
    cy.get(".input").type("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --. .-.-.-");
    cy.get("#translate").click();
    cy.get(".output").should("have.value", "The quick brown fox jumped over the lazy dog.")
  })
})




