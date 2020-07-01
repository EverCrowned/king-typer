import { ThemeType } from "./constants";

const lightTheme: ThemeType = {
    primary: "#198cf6",
    secondary: "#fde400",
    tertiary: "#00a627",
    background: {
        primary: "#f7f7f7",
        secondary: "#111"
    },
    text: {
        primary: "#111",
        secondary: "#f7f7f7"
    },
    brightness: {
        lighter: 1.1,
        darker: 0.9
    },
    boxColorCodes: {
        wrong: "#f54242",
        correct: "#4290f5",
        notTyped: "#111"
    }
};

const darkTheme: ThemeType = {
    primary: "#005299",
    secondary: "#ffb300",
    tertiary: "#00aaff",
    background: {
        primary: "#1D1D1D",
        secondary: "#ffb300"
    },
    text: {
        primary: "#f7f7f7",
        secondary: "#f7f7f7"
    },
    brightness: {
        lighter: 1.1,
        darker: 0.9
    },
    boxColorCodes: {
        wrong: "#f54242",
        correct: "#4290f5",
        notTyped: "#f7f7f7"
    }
};

export const themes = {
    dark: darkTheme,
    light: lightTheme
};

export type themeName = keyof typeof themes;

export const defaultTheme: themeName = "dark";

export const getTheme = (theme: themeName = defaultTheme): ThemeType => {
    return themes[theme];
};
