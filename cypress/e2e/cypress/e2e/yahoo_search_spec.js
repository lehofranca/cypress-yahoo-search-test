describe('Teste de busca no Yahoo por Pacto Soluções', () => {
  it('Faz a busca e valida resultados', () => {
    cy.visit('/')
    cy.get('input[name="p"]').type('Pacto Soluções{enter}')
    cy.url().should('include', 'Pacto+Solu%C3%A7%C3%B5es')
    cy.get('#web').should('exist')
    cy.get('#web').contains('Pacto Soluções')
  })
})
