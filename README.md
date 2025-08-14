# Testes Automatizados - Pacto Soluções

Este projeto contém testes automatizados em Cypress e Playwright para validar:

1. Busca no Yahoo por "Pacto Soluções".
2. Verificação da data da última atualização dos Termos de Segurança do UOL.

## Estrutura do projeto

- `cypress/e2e/yahoo_search.cy.js` → teste da busca no Yahoo
- `cypress/e2e/uol_terms.cy.js` → teste da data de atualização do UOL
- `cypress/fixtures/` → arquivos estáticos de teste
- `cypress/support/` → comandos e configurações globais do Cypress
- `Attachments/` → evidências (screenshots) dos testes (Pytest)

## Exemplo de dados de teste (fixtures)

```json
{
  "buscaYahoo": {
    "termo": "Pacto Soluções"
  },
  "uolTerms": {
    "url": "https://www.uol.com.br/termos-de-seguranca/"
  }
}
