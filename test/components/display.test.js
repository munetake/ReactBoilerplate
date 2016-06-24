import {renderComponent, expect} from "../test_helper";
import {Display} from "../../src/components/display.react";


describe("Test the Display component", () => {
  let component;
  let call = "";
  beforeEach(() => {
    const state = {
        list: {
          
          }
        }
      const props = {
        grab_data: function () {
          call = "RUNNING GRAB DATA";
        },
        delete_data: function(id) {
          call = "RUNNING DELETE DATA " + id;
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
  it("Shows a table", () => {
    expect(component.find("table")).to.exist;
  });
  it("Shows a table with three elements", () => {
    expect(component.find("tr").length).to.eq(4);
  });
  it("Shows add and edit Links", () => {
    expect(component.find("a").length).to.eq(4);
  });
  it("Shows delete buttons", () => {
    expect(component.find("button").length).to.eq(3);
  });
  it("Delete Clicks", () => {
    component.find("#1").simulate("click");
    expect(call).to.eq("RUNNING DELETE DATA 1");
  });
});
