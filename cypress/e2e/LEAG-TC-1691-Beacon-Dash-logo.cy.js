/* eslint-disable no-undef */
describe('Beacon Dashboard Logo', () => {
  it('Check if Beacon image has finished loading', () => {
    cy.visit('http://localhost:5000/')
    cy.get('#logo-beacon')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    // cy.get('#logo-beacon').should('be.visible');
    // cy.get('#logo-beacon').should('have.attr', 'src', '/assets/beacon.png')

  })
})