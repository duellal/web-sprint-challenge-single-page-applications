const nameInput = () => cy.get('input[name="name"]')
const selectedToppings = () => cy.get('div[className="toppings"]')
const submitOrder = () => cy.get('div[id="order-button"]')

describe('MVP tests', () => {
  before(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  it('can type text into text boxes', () => {

  })
})