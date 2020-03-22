import React from "react";
import { shallow } from "enzyme";
import Result from "../components/Result/Result.jsx";

describe("Result renders", () => {
  const wrapper = shallow(<Result />);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
