describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn',{timeout:6000})
      .should('contain','Button')
      
      .and('have.class','query-btn')
      .should('have.id','query-btn')
      assert.equal(4,4,'not equal')
      
  })
})