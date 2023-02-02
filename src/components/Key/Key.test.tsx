import { render, screen } from "@testing-library/react";
import { Key } from "./Key";

describe("Given a Key component", () => {
  describe("When rendered with the text 'Holi", () => {
    test("Then it should show a button with the text 'Holi'", () => {
      render(<Key className="key" keyLabel={"Holi"} />);

      const word = "Holi";
      const key = screen.getByRole("button", { name: word });

      expect(key).toBeInTheDocument();
    });
  });
});
