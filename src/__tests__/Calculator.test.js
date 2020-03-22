import React from "react";
import { shallow } from "enzyme";
import Calculator from "../components/Calculator/Calculator.jsx";
import Logo from "../elements/Logo.jsx";
import Result from "../components/Result/Result.jsx";
import Ticker from "../components/Ticker/Ticker.jsx";
import Keypad from "../components/Keypad/Keypad.jsx";

describe("Calculator renders", () => {
  const wrapper = shallow(<Calculator />);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a <section />", () => {
    expect(wrapper.find("section")).toHaveLength(1);
  });

  it("should render a <header />", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("should render a title", () => {
    const title = wrapper.find("h2");
    expect(title).toHaveLength(1);
  });

  it("should render title text 'Calculator'", () => {
    const title = wrapper.find("h2");
    expect(title.text()).toBe("Calculator");
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render the Logo", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("should render a Result", () => {
    expect(wrapper.find(Result)).toHaveLength(1);
  });

  it("should render a Ticker", () => {
    expect(wrapper.find(Ticker)).toHaveLength(1);
  });

  it("should render a Keypad", () => {
    expect(wrapper.find(Keypad)).toHaveLength(1);
  });
});
