import React from "react";
import type { Preview } from "@storybook/react";
import "../src/ui/global.css";
import { geistSans, geistMono } from "../src/ui/fonts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
