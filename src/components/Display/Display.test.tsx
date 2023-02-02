import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it renders a string of numbers '667359961'", () => {
    test("Then it should show '667359961'", () => {
      const infoText = "667359961";

      render(<Display />);

      const info = screen.getByText(infoText);

      expect(info).toBeInTheDocument();
    });
  });
});
