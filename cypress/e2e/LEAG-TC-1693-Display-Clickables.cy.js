/* eslint-disable no-undef */
describe('has Beacon Dashboard Logo', () => {
  it('Check Beacon Dashboard Logo exit', () => {
    cy.visit('http://localhost:5000/')
    cy.get('#link-atam').should('be.enabled');
    cy.get('#link-eng').should('be.enabled');
    cy.get('#link-eng').should('be.enabled');
  })
})