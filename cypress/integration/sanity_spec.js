describe('Sanity', function() {
  it('Smoke test', function() {
    cy.visit('/')
    cy.contains('TOP: Calculator')
  })
})
