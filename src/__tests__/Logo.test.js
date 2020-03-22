import React from "react";
import { shallow } from "enzyme";
import Logo from "../elements/Logo.jsx";

describe("Logo renders", () => {
  const wrapper = shallow(<Logo />);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render an <svg>", () => {
    expect(wrapper.find("svg")).toHaveLength(1);
  });
});
