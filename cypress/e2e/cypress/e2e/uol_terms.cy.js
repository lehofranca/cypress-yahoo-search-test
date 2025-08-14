describe('Validação de data de atualização', () => {

  // Evita que erros de scripts externos (como geoip) quebrem o teste
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('geoip is not defined')) {
      return false; // Ignora esse erro específico
    }
  });

  it('Deve capturar a última data de atualização no fim da página', () => {

    // Acessa a página inicial
    cy.visit('https://www.uol.com.br', { failOnStatusCode: false });

    // Aceita cookies se aparecer
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Aceitar")').length) {
        cy.contains('button', 'Aceitar').click();
      }
    });

    // Localiza e clica no link de "Segurança e privacidade"
    cy.contains('Segurança e privacidade', { matchCase: false })
      .should('be.visible')
      .click();

    // Espera até 30s e captura qualquer data no formato "DD de <mês> de AAAA"
    cy.contains(/\d{1,2}\s+de\s+\w+\s+de\s+\d{4}/i, { timeout: 30000 })
      .should('exist')
      .then(($el) => {
        const texto = $el.text();
        cy.log('📅 Última atualização encontrada: ' + texto);

        // Screenshot específico da evidência
        cy.wrap($el).screenshot('data-atualizacao-encontrada');
      });

  });
});
