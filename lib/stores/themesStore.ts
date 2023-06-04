import { StateCreator, create } from "zustand";

export type Theme = "light" | "dark";

export interface IThemeStore {
  theme: Theme;
  actions: {
    setLightTheme: () => void;
    setDarkTheme: () => void;
    setTheme: (theme: Theme) => void;
  };
}

const themeStateCreator: StateCreator<IThemeStore> = (set) => ({
  theme: "light",
  actions: {
    setLightTheme: () => {
      set((state) => ({
        ...state,
        theme: "light",
      }));
    },
    setDarkTheme: () => {
      set((state) => ({
        ...state,
        theme: "dark",
      }));
    },
    setTheme: (theme: Theme) => {
      set((state) => ({
        ...state,
        theme: theme,
      }));
    },
  },
});

export const useThemeStore = create<IThemeStore>()(themeStateCreator);

// getters

export const useTheme = () => useThemeStore((state) => state.theme);

// 🎉 one selector for all our actions
export const useThemeActions = () => useThemeStore((state) => state.actions);
