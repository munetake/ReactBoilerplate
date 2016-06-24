import {renderComponent, expect} from "../test_helper";
import {Child} from "../../src/components/child.react";


describe("Test the Child component", () => {
  let component;
  let call = "";
  beforeEach(() => {
    const state = {
      list: {
      }
    }
    const props = {
      push_data: function(obj) {
        call="RUNNING PUSH DATA";
      }
    }
    component = renderComponent(Child, props, state);
  });
  it("Shows a main header", () => {
    expect(component.find("h3")).to.exist;
  });
  it("Has two input fields", () => {
    expect(component.find("input").length).to.eq(2);
  });
  it("Has one text area", () => {
    expect(component.find("textarea").length).to.eq(1);
  });
  it("Has two buttons", () => {
    expect(component.find("button").length).to.eq(2);
  });
  it("Handles Text Change", () => {
    component.find("input").first().simulate("change", "name");
    expect(component.find("input").first()).to.have.value("name");
  });
});
