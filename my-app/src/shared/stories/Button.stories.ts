import type { Meta } from "@storybook/react";
import { Button } from "antd";
import { BaseButtonProps } from "antd/es/button/button";

const meta: Meta<BaseButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", 'middle', 'large'],
      control: {type: 'radio'}
    },
    type: {
      options: ['primary', 'default', 'dashed' , 'text', 'link'],
      control: {type: "radio"}
    }
  }
};

export default meta;
export const ButtonComponent: { args: BaseButtonProps } = {
  args: {
    type: "primary",
    block: false,
    children: "Button text",
    disabled: false,
    loading: false
  }
};

