import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import Icon from "../Icon/assets/Icon";

import PenSvg from "../Icon/assets/pen.svg";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  return <Button onClick={() => null}>Button</Button>;
};

export const IconBtn: ComponentStory<typeof Button> = () => {
  return (
    <Button onClick={() => null}>
      Button with icon <Icon iconLink={PenSvg} />
    </Button>
  );
};
