import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("When it receives a string of isCalling", () => {
    test("Then it shows a string `Calling...`", () => {
      const infoComponentText = "Calling...";

      render(<Info />);

      const infoComponent = screen.getByText(infoComponentText);

      expect(infoComponent).toBeInTheDocument();
    });
  });
});
