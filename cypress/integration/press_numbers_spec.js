describe('Calculator has number buttons that can be clicked', function() {
  beforeEach(function() {
    // runs before each test in the block
    cy.visit('/')
    cy.get('#on-off').click()
  })
  it('Can click number buttons and returns a value', function() {
    let display = '0'
    for (var i = 0; i < 10; i++) {
      cy.get(`#num-${i}`)
        .click()
        display += i.toString()
      cy.get('#calc-disp').should('have.value', display)
    }
    cy.get('#num-00')
      .click()
      display += '00'
    cy.get('#calc-disp').should('have.value', display)
  })
})
