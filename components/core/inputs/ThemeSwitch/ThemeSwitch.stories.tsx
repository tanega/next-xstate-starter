import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import ThemeSwitch from "./ThemeSwitch";

const meta = {
  title: "Core/Inputs/ThemeSwitch",
  component: ThemeSwitch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Theme switcher button",
      },
    },
  },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof ThemeSwitch>;

export const ThemeSwitchDefaults: Story = {
  render: () => (
    <Box sx={{ with: "100px", height: "300px" }}>
      <ThemeSwitch />
    </Box>
  ),
};
