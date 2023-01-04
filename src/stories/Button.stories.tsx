import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryButton from "./Button";
import Icon from "./Icon";

import PenSvg from "./assets/pen.svg";

export default {
  title: "Button",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Default: ComponentStory<typeof PrimaryButton> = () => {
  return <PrimaryButton onClick={() => null}>Button</PrimaryButton>;
};

export const IconBtn: ComponentStory<typeof PrimaryButton> = () => {
  return (
    <PrimaryButton onClick={() => null}>
      Button with icon <Icon iconLink={PenSvg} />
    </PrimaryButton>
  );
};
