import React from "react";
import { shallow } from "enzyme";
import Result from "../components/Result/Result.jsx";

describe("Result renders", () => {
  const wrapper = shallow(<Result res={1234} />);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render the text passed", () => {
    expect(wrapper.text()).toBe("1234");
  });
});
