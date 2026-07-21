import { render, screen, fireEvent } from "@testing-library/react"
import Contacto from "../src/pages/contacto"

it('renderiza el botón "Enviar"', () => {
  render(<Contacto />);
  expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
});