describe('Busca no Yahoo - Pacto Soluções', () => {

  it('Deve pesquisar no Yahoo e localizar o site oficial', () => {

    // Acessa o Yahoo Search
    cy.visit('https://search.yahoo.com');

    // Pesquisa por "Pacto Soluções"
    cy.get('input[name="p"]', { timeout: 20000 })
      .should('be.visible')
      .type('Pacto Soluções{enter}', { force: true });

    // Captura o primeiro link do domínio oficial
    cy.get('a[href*="sistemapacto.com.br"], a[href*="pactosolucoes.com.br"]', { timeout: 20000 })
      .first()
      .should('have.attr', 'href')
      .then((url) => {
        cy.log(`Link oficial encontrado: ${url}`);
        // Valida que o link corresponde à home page oficial
        expect(url).to.include('sistemapacto.com.br');
      });

    // Screenshot final
    cy.screenshot('yahoo-link-oficial');
    cy.log('Pesquisa no Yahoo validada com sucesso, link oficial localizado.');
  });

});
