import { Global, ThemeProvider } from "@emotion/react";
import * as React from "react";

import { appTheme, ThemeVariant } from "../AppThemeProvaider/theme";

interface AppThemeController {
  themeVariant: ThemeVariant;
  toggleTheme: () => void;
}

export const AppThemeControllerContext =
  React.createContext<AppThemeController | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeVariant, setThemVariant] = React.useState(ThemeVariant.Light);
  const toggleTheme = () =>
    themeVariant === ThemeVariant.Light
      ? setThemVariant(ThemeVariant.Dark)
      : setThemVariant(ThemeVariant.Light);
  return (
    <ThemeProvider theme={appTheme[themeVariant]}>
      {/* <Global styles={getRebootCSS(themeVariant)} /> */}
      <AppThemeControllerContext.Provider
        value={{
          themeVariant,
          toggleTheme,
        }}
      >
        {children}
      </AppThemeControllerContext.Provider>
    </ThemeProvider>
  );
}

// export function useAppThemeController(): AppThemeController {
//   const contextValue = React.useContext(AppThemeControllerContext);
//   if (!contextValue) {
//     throw new Error('AppThemeController is used outside Provider!');
//   }
