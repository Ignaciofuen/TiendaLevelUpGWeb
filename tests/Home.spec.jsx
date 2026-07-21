import { render, screen} from "@testing-library/react"
import Home from "../src/pages/Home"

it("renderiza el texto JUEGOS DE MESA", () => {
render(<Home />);
expect(screen.getByText(/JUEGOS DE MESA/i)).toBeInTheDocument();
});
