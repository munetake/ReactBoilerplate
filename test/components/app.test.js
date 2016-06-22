import {renderComponent, expect} from "../test_helper";
import App from "../../src/components/app.react";


describe("Test the App component", () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  it("Shows a main header", () => {
    expect(component.find("h3")).to.exist;
  });
});
