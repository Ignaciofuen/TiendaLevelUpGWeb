
import { render, screen, fireEvent } from "@testing-library/react"
import Carrito from "../src/pages/carrito";


describe('Componente Carrito', () => {
  it('renderiza el título correctamente', () => {
    render(<Carrito items={[]} />);
  expect(screen.getByText("Carrito")).toBeInTheDocument();
  });
});
