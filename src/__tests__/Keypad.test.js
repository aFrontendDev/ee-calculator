import React from "react";
import { shallow } from "enzyme";
import Keypad from "../components/Keypad/Keypad.jsx";
import Btn from "../elements/Button.jsx";

describe("Keypad renders", () => {
  const wrapper = shallow(<Keypad />);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });

  it("should render buttons", () => {
    expect(wrapper.find(Btn)).toHaveLength(17);
  });
});
