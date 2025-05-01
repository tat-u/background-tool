import type { Meta, StoryObj } from "@storybook/react";
import { Display } from "./Display";

// Story のメタ情報
const meta = {
  // Story の表示名、使用するコンポーネント等を指定するところ
  title: "Display",
  component: Display,
  tags: ["autodocs"],
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example_1: Story = {
  args: { cssProps: { backgroundColor: "#ffddff" } },
};
export const Example_2: Story = {
  args: { cssProps: { backgroundColor: "#ffffdd" } },
};
