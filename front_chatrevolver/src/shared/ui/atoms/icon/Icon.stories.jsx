import React from "react";
import { Icon } from "./Icon";

export default {
  title: "components/icon",
  component: Icon,
};

export const basic = (args) => <Icon {...args} />;
basic.args = {
  name: "test",
};
