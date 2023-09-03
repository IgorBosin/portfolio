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
    icon?: any
    className?: string
}

const ButtonComponent = ({text, icon, className}: propsType) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={className}>
                <Button type={'submit'} variant="outlined" endIcon={icon}>{text}</Button>
            </div>
        </ThemeProvider>
    );
};

export default ButtonComponent;