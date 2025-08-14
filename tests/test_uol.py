import re
import pytest

def test_data_atualizacao_uol(page):
    page.goto("https://www.uol.com.br", timeout=60000)

    # Aceita cookies da página inicial
    if page.query_selector("button:has-text('Aceitar')"):
        page.click("button:has-text('Aceitar')")

    cookie_banner = page.locator("button:has-text('OK')")
    if cookie_banner.count() > 0:
        cookie_banner.first.click()

    # Scroll até o final para garantir que o rodapé carregue
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)

    # Clica no link de "Segurança e privacidade"
    link = page.locator("a.hyperlink.showcaseColumns__item__link", has_text="Segurança e privacidade")
    link.wait_for(state="visible", timeout=5000)
    link.click()

    # Aceitar cookies da página de política (se aparecer)
    if page.query_selector("button:has-text('Aceitar')"):
        page.click("button:has-text('Aceitar')")
    cookie_banner_policy = page.locator("button:has-text('OK')")
    if cookie_banner_policy.count() > 0:
        cookie_banner_policy.first.click()

    # Scroll até o final da página de política
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # Aguarda até o elemento com 'Atualização:' aparecer
    page.wait_for_selector("text=Atualização:", timeout=10000)

    # Captura o texto que contém a data
    body_text = page.inner_text("body")
    regex = r"\d{1,2}\s+de\s+\w+\s+de\s+\d{4}"
    match = re.search(regex, body_text, re.IGNORECASE)

    assert match is not None, "Nenhuma data de atualização encontrada"
    print(f" Última atualização encontrada: {match.group(0)}")

    page.screenshot(path="Attachments/data_atualizacao_uol.png")



# Rodar o teste com interface visível:pytest -v --headed tests/test_uol.py
# Para rodar todos os testes: pytest -v --headed tests/
# Para selecionar as informações que deseja alterar ou utilizar para rodar o teste,sem o auxílio do mouse, utilize shift + ^ ou shift + > 
