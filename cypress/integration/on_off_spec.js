describe('Calculator On-Off', function() {
  beforeEach(function(){
    cy.visit('/')
  })
  context('Before pressing on', function() {
    it('Loads grey and white buttons', function() {
      cy.visit('/')
      cy.get('#on-off')
        .should('not.have.class', 'btn-danger')
    })
    it('Label to press on button is visible', function() {
      cy.get('#press-txt')
        .should('not.have.class', 'invisible')
      cy.get('#on-off')
        .should('not.have.class', 'btn-danger')
    })
  })

  context('After pressing the on button', function() {
    beforeEach(function() {
      cy.visit('/')
      cy.get('#on-off')
        .click()
    })
    it('Loads grey and white buttons', function() {
      cy.get('#on-off')
        .should('have.class', 'btn-danger')
    })
    it('Lable to turn on is hidden', function() {
      cy.get('#press-txt')
        .should('have.class', 'invisible')
    })
  })
})
