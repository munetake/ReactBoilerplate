import {expect} from "../test_helper";
import * as actions from "../../src/actions/change_child.action";
import {GRAB, PUSH, DELETE, PUT, GETONE} from "../../src/actions/constants";

describe("Test the actions", () => {
  describe("grab_data", () => {
    it("has the correct type", () => {
      const action = actions.grab_data();
      expect(action.type).to.equal(GRAB);
    });
    it("had the correct payload type", () => {
      const action = actions.grab_data();
      expect(action.payload).to.be.an.instanceof(Promise);
    });
  });

  describe("push_data", () => {
    it("has the correct type", () => {
      const action = actions.push_data({});
      expect(action.type).to.equal(PUSH);
    });
    it("had the correct payload type", () => {
      const action = actions.push_data({});
      expect(action.payload).to.be.an.instanceof(Promise);
    });
  });

  describe("delete_data", () => {
    it("has the correct type", () => {
      const action = actions.delete_data("");
      expect(action.type).to.equal(DELETE);
    });
    it("had the correct payload type", () => {
      const action = actions.delete_data("");
      expect(action.payload).to.be.an.instanceof(Promise);
    });
  });

  describe("grab_one_data", () => {
    it("has the correct type", () => {
      const action = actions.grab_one_data("");
      expect(action.type).to.equal(GETONE);
    });
    it("had the correct payload type", () => {
      const action = actions.grab_one_data("");
      expect(action.payload).to.be.an.instanceof(Promise);
    });
  });

  describe("put_data", () => {
    it("has the correct type", () => {
      const action = actions.put_data({});
      expect(action.type).to.equal(PUT);
    });
    it("had the correct payload type", () => {
      const action = actions.push_data({});
      expect(action.payload).to.be.an.instanceof(Promise);
    });
  });
});
