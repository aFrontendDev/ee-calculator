import React from "react";
import { shallow } from "enzyme";
import Ticker from "../components/Ticker/Ticker.jsx";

describe("Ticker renders", () => {
  const wrapper = shallow(<Ticker />);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
