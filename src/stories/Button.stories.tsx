import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryButton from "./Button";

export default {
  title: "Button",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Primary: ComponentStory<typeof PrimaryButton> = () => {
  return <PrimaryButton onClick={() => null}>Button</PrimaryButton>;
};

export const Secondary: ComponentStory<typeof PrimaryButton> = () => {
  return <PrimaryButton onClick={() => null}>Secondary</PrimaryButton>;
};
