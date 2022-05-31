import { createTheme } from '@fluentui/react';

const theme = localStorage.getItem('themeColor');

const themeCol = (theme) ? JSON.parse(theme) : null;

export const uPrinceTheme = createTheme({
    palette: {
    // themePrimary: '#f4681d',
        themePrimary: (themeCol) ? themeCol.themePrimary : '#f4681d',
        themeLighterAlt: (themeCol) ? themeCol.themeLighterAlt : '#fefbf7',
        themeLighter: (themeCol) ? themeCol.themeLighter : '#fdf1df',
        themeLight: (themeCol) ? themeCol.themeLight : '#fbe4c4',
        themeTertiary: (themeCol) ? themeCol.themeTertiary : '#f7ca8b',
        themeSecondary: (themeCol) ? themeCol.themeSecondary : '#f4b357',
        themeDarkAlt: (themeCol) ? themeCol.themeDarkAlt : '#da983b',
        themeDark: (themeCol) ? themeCol.themeDark : '#b88032',
        themeDarker: (themeCol) ? themeCol.themeDarker : '#885e25',
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
