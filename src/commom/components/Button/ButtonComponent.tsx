import React from 'react';
import {Button, createTheme, ThemeProvider} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00A3E1',
        },
    },
});

const ButtonComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Button variant="outlined" endIcon={<SendIcon/>}>Send message</Button>
            </div>
        </ThemeProvider>

    );
};

export default ButtonComponent;