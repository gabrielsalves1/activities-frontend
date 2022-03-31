import { render, screen } from '@testing-library/react'
import Formulary from ".";

describe('Renderiza lista de atividades', () => {
  it('e consulta a API com as atividades cadastradas', () => {
    render(<Formulary/>)

    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Nome')).not.toHaveClass();
  });

  it('e deve conter o botão de envio', () => {
    render(<Formulary/>)

    expect(screen.getByRole("button", { name: /Enviar/i})).toBeInTheDocument();
  });
})