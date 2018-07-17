import React from "react";
import renderer from "react-test-renderer";
import ShopLogo from "./ShopLogo";

test("Should render shop's logo image", () => {
  const component = renderer.create((
    <ShopLogo shopLogoImgUrl="logo.png" shopName="Reaction" />
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Should render the shop's name", () => {
  const component = renderer.create((
    <ShopLogo shopName="Reaction" />
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
