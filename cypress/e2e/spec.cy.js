/* eslint-disable no-undef */
describe('My First Test', () => {
  it('Visits Landing Page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Register').click()
    cy.url().should('include', '/register')
    
    // Get an input form class
    cy.get('.action-email')
    //type value in input with 0.1 sec keypress delay
      .type('fake@email.com', {delay: 100})
    //  Verify that the value has been updated
      .should('have.value', 'fake@email.com')
    
  })
})