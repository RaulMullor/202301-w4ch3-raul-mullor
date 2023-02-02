import { render, screen } from "@testing-library/react";
import Actions from "./Actions";

describe("Given an Actions component", () => {
  describe("When rendered with the text 'Hang up'", () => {
    test("Then it should show a button with the text 'Hang up'", () => {
      const buttonText = "Hang up";

      render(<Actions />);

      const infoButton = screen.getByText(buttonText);

      expect(infoButton).toBeInTheDocument();
    });
  });
});
