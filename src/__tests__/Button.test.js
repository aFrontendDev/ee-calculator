import React from "react";
import { shallow } from "enzyme";
import Btn from "../elements/Button.jsx";

describe("Btn renders", () => {
  const props = {
    onClick: jest.fn()
  };
  const wrapper = shallow(<Btn {...props}>button text</Btn>);

  it("should render", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render an <button>", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should render text 'button text", () => {
    expect(wrapper.find("button").text()).toBe("button text");
  });

  it("should render call onClick event", () => {
    wrapper.simulate("click");
    expect(props.onClick.mock.calls.length).toBe(1);
  });
});
