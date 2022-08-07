const nameInput = () => cy.get('input[name="name"]')
const specialInput = () => cy.get('input[name="special"]')
const submitOrder = () => cy.get('button[class="orderBtn"]')
const pizzaSize = () => cy.get('select[id="size-dropdown"]')

describe('MVP tests', () => {
  before(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  it('loads the form correctly', () => {
    nameInput().should('have.value', '')
    pizzaSize().should('have.value', 'Pick a Size')
    cy.get('#pepperoni').should('not.be.checked')
    cy.get('#pineapple').should('not.be.checked')
    cy.get('#spinach').should('not.be.checked')
    cy.get('#garlic').should('not.be.checked')
    cy.get('#mushrooms').should('not.be.checked')
    cy.get('#ham').should('not.be.checked')
    cy.get('#olives').should('not.be.checked')
    cy.get('#onion').should('not.be.checked')
    cy.get('#bellPepper').should('not.be.checked')
    cy.get('#tomato').should('not.be.checked')
    specialInput().should('have.value', '')
    submitOrder().should('be.disabled')
  })

  it('can type text into text boxes', () => {
    nameInput()
      .should('have.value', '')
      .type('Imogen Storm')
      .should('have.value', 'Imogen Storm')

    specialInput()
      .should('have.value', '')
      .type('Please add extra cheese')
      .should('have.value', 'Please add extra cheese')
  })

  it('can select a pizza size', () => {
    pizzaSize()
      .should('have.value', 'Pick a Size')
      .select('Medium')
      .should('have.value', 'medium')
  })

  it('can select multiple toppings', () => {
    cy.get('#pepperoni')
      .check()
      .should('be.checked')

    cy.get('#pineapple')
      .check()
      .should('be.checked')

    cy.get('#spinach')
      .check()
      .should('be.checked')

    cy.get('#garlic')
      .check()
      .should('be.checked')

    cy.get('#mushrooms')
      .check()
      .should('be.checked')
  })

  it('can submit form', () => {
    submitOrder()
      .should('not.be.disabled')
      .click()
  })
})