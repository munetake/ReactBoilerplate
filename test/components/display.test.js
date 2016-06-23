import {renderComponent, expect} from "../test_helper";
import {Display} from "../../src/components/display.react";


describe("Test the Display component", () => {
  let component;
  beforeEach(() => {
    const state = {
        list: {
          }
        }
      const props = {
        grab_data: function () {
          return [
              {
                name: "name1",
                address: "address1",
                quote: "quote1",
                _id: "1"
              },
              {
                name: "name2",
                address: "address2",
                quote: "quote2",
                _id: "2"
              },
              {
                name: "name3",
                address: "address3",
                quote: "quote3",
                _id: "3"
              }
            ]
        },
        data: {
          data: [
              {
                name: "name1",
                address: "address1",
                quote: "quote1",
                _id: "1"
              },
              {
                name: "name2",
                address: "address2",
                quote: "quote2",
                _id: "2"
              },
              {
                name: "name3",
                address: "address3",
                quote: "quote3",
                _id: "3"
              }
            ]
        }
      }
    component = renderComponent(Display, props, state)
  });
  it("Shows a main header", () => {
    expect(component.find("h3")).to.exist;
  });
  it("Shows a table with three elements", () => {
    expect(component.find("tr").length).to.eq(4)
  });
});
