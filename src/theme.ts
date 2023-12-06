import { createTheme } from "@mui/material"

const colorSwatch = {
    // Primary Colors
    white: "rgb(255,255,255)", // done
    blueAccent: "rgb(63,118,255)", // done
    blueLight: "rgba(63,118,255,0.1)", // done
    darkBlue : "rgb(55,65,81)", // done

    // Accent Colors
    warningYellow : "rgb(250,204,21)", // done
    error : "rgba(239,68,68,0.2)", // done
    greenAccent: "rgb(22,163,74)", // done
    greyAccent: "rgb(217,217,217)", //
    purpleAccent: "rgb(214,135,255)", // done

    // Text
    black : "rgb(23,23,23)", // done
    lightGrey : "rgb(229,231,235)", // done
    lighterGrey: "rgb(245,245,245)",
}

const muiFormatColorPalette = (mode: string) => {
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
                }
            } : {
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
