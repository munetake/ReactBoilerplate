import { expect } from "../test_helper";
import { GRAB, PUSH, DELETE, PUT, GETONE } from "../../src/actions/constants";
import * as actions from "../../src/actions/change_child.action";
import list from "../../src/reducers/change_child.reducer";

describe("Testing the list reducer", () => {
  it("handles action with unknown type", () => {
    expect(list()).to.eql({data:[]});
  });

  it("handles action of type GRAB", () => {
    const action = {type: GRAB, payload: {data: {response: []}}};
    expect(list([], action)).to.deep.eql({data: []});
  });

  it("handles action of type PUSH", () => {
    const action = {type: PUSH, payload: {data: {response: []}}};
    expect(list([], action)).to.deep.eql({data: []});
  });

  it("handles action of type DELETE", () => {
    const action = {type: DELETE, payload: {data: {response: []}}};
    expect(list([], action)).to.deep.eql({data: []});
  });

  it("handles action of type GETONE", () => {
    const action = {type: GETONE, payload: {data: {response: []}}};
    expect(list([], action)).to.deep.eql({data: []});
  });

  it("handles action of type PUT", () => {
    const action = {type: PUT, payload: {data: {response: []}}};
    expect(list([], action)).to.deep.eql({data: []});
  });
});
