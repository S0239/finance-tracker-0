import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import Icon from "../Icon/Icon";
import { Pen } from "../Icon/assets";

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
      Button with icon <Icon component={Pen} />
    </Button>
  );
};
