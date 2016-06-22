import {renderComponent, expect} from "../test_helper";
import Child from "../../src/components/child.react";


describe("Test the Child component", () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Child);
  });
  it("Shows a main header", () => {
    expect(component.find("h3")).to.exist;
  });
});
