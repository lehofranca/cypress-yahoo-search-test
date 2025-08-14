import pytest

def test_pesquisa_yahoo(page):
    # Acessa a página do Yahoo
    page.goto("https://br.search.yahoo.com")

    # Aceita cookies se aparecer
    if page.query_selector("button:has-text('Aceitar')"):
        page.click("button:has-text('Aceitar')")

    # Digita "Pacto Soluções" no campo de pesquisa e envia Enter
    search_input = page.locator("input[name='p']")
    search_input.fill("Pacto Soluções")
    search_input.press("Enter")

    # Espera resultados carregarem
    page.wait_for_timeout(3000)

    # Valida que pelo menos um resultado contém "Pacto Soluções"
    results = page.locator("h3")  # títulos de resultados
    assert results.count() > 0, "Nenhum resultado encontrado"

    found = False
    for i in range(results.count()):
        text = results.nth(i).inner_text()
        if "Pacto Soluções" in text:
            found = True
            break

    assert found, "Nenhum título de resultado contém 'Pacto Soluções'"
    print("✅ Pesquisa pelo Yahoo retornou resultados com 'Pacto Soluções'")

    # Screenshot da página de resultados
    page.screenshot(path="Attachments/yahoo_resultados_pacto_solucoes.png")


# Pra rodar o teste, execute o script com o comando: pytest tests/test_yahoo.py -s --headed