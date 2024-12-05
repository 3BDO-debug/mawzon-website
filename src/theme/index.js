"use client";
import { useEffect, useMemo } from "react";
// recoil
import { RecoilRoot, useRecoilValue } from "recoil";
import { themeModeAtom } from "@/recoil";
//
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
//
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

// ---------------------------------------------------------------------------------------------

function ThemeProvider({ children }) {
  const themeMode = useRecoilValue(themeModeAtom);

  const themeOptions = useMemo(
    () => ({
      palette: themeMode.mode === "light" ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeMode.direction,
      shadows: themeMode.mode === "light" ? shadows.light : shadows.dark,
      customShadows:
        themeMode.mode === "light" ? customShadows.light : customShadows.dark,
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  useEffect(() => {
    document.documentElement.dir = themeMode.direction;
  }, [themeMode.direction]);

  return (
    <MUIThemeProvider theme={theme} key={themeMode.direction}>
      {children}
    </MUIThemeProvider>
  );
}

const RecoiledTheme = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilRoot>
  );
};

export default RecoiledTheme;
