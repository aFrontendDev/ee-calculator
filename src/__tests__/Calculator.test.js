import React from "react";
import { shallow } from "enzyme";
import Calculator from "../components/Calculator/Calculator.jsx";

describe("Calculator renders", () => {
  const wrapper = shallow(<Calculator />);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
