import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TestHeader } from "./TestHeader";

export default {
  title: "Example/TestHeader",
  component: TestHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TestHeader>;

const Template: ComponentStory<typeof TestHeader> = (args) => (
  <TestHeader {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
