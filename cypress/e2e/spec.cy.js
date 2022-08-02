describe('My First Test', () => {
  it('clicks the link "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // should be on a new url which includes 'commands/actions'
    cy.url().should('include', 'commands/actions')


    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com', { delay: 100 })
      .should('have.value', 'fake@email.com')

    cy.get('.action-disabled')
      .type('disabled', { force: true })
      .should('have.value', 'disabled')

  })
})