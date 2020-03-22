import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Calculator from "../components/Calculator/Calculator.jsx";

describe("App renders without crashing", () => {
  const wrapper = shallow(<App />);

  it("should render ", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render the Calculator", () => {
    expect(wrapper.find(Calculator)).toHaveLength(1);
  });
});
