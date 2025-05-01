import type { Meta, StoryObj } from "@storybook/react";
import { MySlider } from "./MySlider";

// Story のメタ情報
const meta = {
  // Story の表示名、使用するコンポーネント等を指定するところ
  title: "MySlider",
  component: MySlider,
  tags: ["autodocs"],
} satisfies Meta<typeof MySlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example_1: Story = {};
