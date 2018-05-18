describe('Sanity', function() {
  it('Smoke tests', function() {
    cy.visit('/')
    cy.contains('TOP: Calculator')
  })
})
