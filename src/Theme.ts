import { createTheme } from '@fluentui/react';

const theme = localStorage.getItem('themeColor');

const themeCol = (theme) ? JSON.parse(theme) : null;

export const uPrinceTheme = createTheme({
    palette: {
    // themePrimary: '#f4681d',
        themePrimary: (themeCol) ? themeCol.themePrimary : '#3f4245',
        themeLighterAlt: (themeCol) ? themeCol.themeLighterAlt : '#f7f7f8',
        themeLighter: (themeCol) ? themeCol.themeLighter : '#dee0e1',
        themeLight: (themeCol) ? themeCol.themeLight : '#c2c5c7',
        themeTertiary: (themeCol) ? themeCol.themeTertiary : '#888c8f',
        themeSecondary: (themeCol) ? themeCol.themeSecondary : '#54585b',
        themeDarkAlt: (themeCol) ? themeCol.themeDarkAlt : '#383c3e',
        themeDark: (themeCol) ? themeCol.themeDark : '#303234',
        themeDarker: (themeCol) ? themeCol.themeDarker : '#232527',
        neutralLighterAlt: (themeCol) ? themeCol.neutralLighterAlt : '#faf9f8',
        neutralLighter: (themeCol) ? themeCol.neutralLighter : '#f3f2f1',
        neutralLight: (themeCol) ? themeCol.neutralLight : '#edebe9',
        neutralQuaternaryAlt: (themeCol) ? themeCol.neutralQuaternaryAlt : '#e1dfdd',
        neutralQuaternary: (themeCol) ? themeCol.neutralQuaternary : '#d0d0d0',
        neutralTertiaryAlt: (themeCol) ? themeCol.neutralTertiaryAlt : '#c8c6c4',
        neutralTertiary: (themeCol) ? themeCol.neutralTertiary : '#a19f9d',
        neutralSecondary: (themeCol) ? themeCol.neutralSecondary : '#605e5c',
        neutralPrimaryAlt: (themeCol) ? themeCol.neutralPrimaryAlt : '#3b3a39',
        neutralPrimary: (themeCol) ? themeCol.neutralPrimary : '#323130',
        neutralDark: (themeCol) ? themeCol.neutralDark : '#201f1e',
        black: (themeCol) ? themeCol.black : '#000000',
        white: (themeCol) ? themeCol.white : '#ffffff'
    }
});

export const iconColors = { 
  waypointIconColor: '#f7d166',
  iconActiveColor: '#ff4d4d'
};
