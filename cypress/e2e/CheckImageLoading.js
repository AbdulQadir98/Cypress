/* eslint-disable no-undef */
describe('Beacon Dashboard Sysco Logo', () => {
  it('Check if Sysco Logo has finished loading', () => {
    cy.visit('http://localhost:5000/')
    cy.get('#logo')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})