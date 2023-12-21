import { createTheme } from "@mui/material"

const colorSwatch = {
    // Primary Colors
    white: "rgb(255,255,255)", // done
    blueAccent: "rgb(63,118,255)", // done
    blueLight: "rgba(63,118,255,0.1)", // done
    lighterBlueLight: "rgba(63,118,255,0.2)", // done
    darkBlue : "rgb(55,65,81)", // done

    // Accent Colors
    warningYellow : "rgb(250,204,21)", // done
    error : "rgba(239,68,68,0.2)", // done
    greenAccent: "rgb(22,163,74)", // done
    lightGreen: "rgba(34,197,94,0.1)", // done
    darkGreen: "rgb(34,197,94)", // done
    greyAccent: "rgb(217,217,217)", //
    purpleAccent: "rgb(214,135,255)", // done

    // Text
    black : "rgb(58,58,58)", // done
    lightGrey : "rgb(229,231,235)", // done
    lighterGrey: "rgb(245,245,245)",
    lighterOpaqueGrey: "rgb(30,30,30)",
    darkBorderGrey: 'rgba(0,0,0,0.1)',
    lightBoderGrey: 'rgba(255,255,255,0.17)',
}

export const muiFormatColorPalette = (mode: string) => {
    return  { 
        palette: {
            ...(mode === 'light') ? {
                primary: {
                    main: colorSwatch.white,
                    light: colorSwatch.white,
                    dark: colorSwatch.black,
                },
                secondary: {
                    main: colorSwatch.blueAccent,
                    light: colorSwatch.blueLight,
                    dark: colorSwatch.darkBlue,
                },
                warning: {
                    main: colorSwatch.warningYellow,
                },
                error: {
                    main: colorSwatch.error,
                },
                success: {
                    main: colorSwatch.greenAccent,
                    light: colorSwatch.lightGreen,
                    dark: colorSwatch.darkGreen,
                },
                purpleAccent: {
                    main: colorSwatch.purpleAccent,
                },
                body: {
                    main: colorSwatch.black,
                    light: colorSwatch.lightGrey,
                },
                greyAccent: {
                    main: colorSwatch.greyAccent,
                    light: colorSwatch.lighterGrey,
                },
                border: {
                    main: colorSwatch.darkBorderGrey,
                    light: colorSwatch.lightBoderGrey,
                },
                background: {
                    main: colorSwatch.white
                }
            } : {
                // dark theme
                primary: {
                    main: 'rgb(0,0,0)',
                    light:  'rgb(0,0,0)',
                    dark: colorSwatch.white,
                },
                secondary: {
                    main: colorSwatch.blueAccent,
                    light: colorSwatch.lighterBlueLight,
                    dark: colorSwatch.darkBlue,
                },
                warning: {
                    main: colorSwatch.warningYellow,
                },
                error: {
                    main: colorSwatch.error,
                },
                success: {
                    main: colorSwatch.greenAccent,
                    light: colorSwatch.lightGreen,
                    dark: colorSwatch.darkGreen,
                },
                purpleAccent: {
                    main: colorSwatch.purpleAccent,
                },
                body: {
                    main: colorSwatch.white,
                    light: colorSwatch.lightGrey,
                },
                greyAccent: {
                    light: colorSwatch.lighterOpaqueGrey,
                    main: colorSwatch.lighterGrey,
                },
                border: {
                    main: colorSwatch.lightBoderGrey,
                    light: colorSwatch.darkBorderGrey,
                },
                background: {
                    main: 'rgb(0,0,0)'
                }
            }
        },
        typography: {
            fontFamily: [
                'Inter',
                'sans-serif'
            ].join(','),
        },
    }
}

const theme = createTheme(muiFormatColorPalette("light"));
export default theme;
