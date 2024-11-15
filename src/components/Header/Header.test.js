import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header testes", () => {
  it("header renderizando corretamente", () => {
    //ARRANGE
    //Renderiza o header
    render(
      <BrowserRouter>
        <Header onProdutosClick={jest.fn()} />
      </BrowserRouter>
    );

    //ASSERT
    //Verifica se tem os seguintes itens visiveis na página
    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("Produtos")).toBeVisible();
    expect(screen.getByText("Fan Clube")).toBeVisible();
    expect(screen.getByText("Contato")).toBeVisible();
    expect(screen.getByText("Login")).toBeVisible();
    expect(screen.getByText("Registre-se")).toBeVisible();

  });

  it("teste de click no botão", async () => {
    //ARRANGE
    //Mocka a função do botão
    const handleProdutosClick = jest.fn();
    //Renderiza o header
    render(
      <BrowserRouter>
        <Header onProdutosClick={handleProdutosClick} />
      </BrowserRouter>
    );

    //ACT
    //Clica em produtos
    await userEvent.click(screen.getByText('Produtos'))

    //ASSERT
    //Verifica se tem um Produtos visivel na página
    expect(screen.getByText("Produtos")).toBeVisible();
    expect(handleProdutosClick).toHaveBeenCalled();
  });
});
