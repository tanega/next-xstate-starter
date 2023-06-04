import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import lightTheme, { darkTheme } from "../components/Theme/ThemeRegistry/theme";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: createTheme(lightTheme),
      dark: createTheme(darkTheme),
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
