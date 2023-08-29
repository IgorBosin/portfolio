import React from 'react';
import {Button, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#00A3E1',
        },
    },
});

type propsType = {
    text: string
    icon: any

}

const ButtonComponent = ({text, icon, className}: { text: string, icon?: any, className?:string }) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={className}>
                <Button variant="outlined" endIcon={icon}>{text}</Button>
            </div>
        </ThemeProvider>

    );
};

export default ButtonComponent;