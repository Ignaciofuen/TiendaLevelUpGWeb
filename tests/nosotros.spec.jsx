import { render, screen, fireEvent } from "@testing-library/react"
import Nosotros from "../src/pages/nosotros";

it("contiene un párrafo descriptivo", () => {
render(<Nosotros />);
expect(screen.getByText(/Level-Up Gamer es una tienda online/i)).toBeInTheDocument();
});



it("contiene un párrafo descriptivo", () => {
render(<Nosotros />);
expect(screen.getByText(/Más allá de los videojuegos/i)).toBeInTheDocument();
});
