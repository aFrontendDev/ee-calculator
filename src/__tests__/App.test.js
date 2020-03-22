import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App renders without crashing", () => {
  const wrapper = shallow(<App />);

  it("should render ", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
