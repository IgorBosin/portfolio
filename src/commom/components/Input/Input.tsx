import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import TextField from "@mui/material/TextField";

type InputType = {
    label: string
    type: string
    rows?: number
    maxRows: number
    multiline:boolean
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
    },
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: `100%`,
                    marginBottom: '16px'
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    width: `100%`,
                    '& fieldset': {
                        border: '2px solid #999',
                        // color: '#e1e1e1'
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#999', // Установите здесь желаемый цвет метки
                },
            },
        },
    },

});

const Input = (props: InputType) => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <TextField
                    variant="outlined"
                    label={props.label}
                    type={props.type}
                    rows={props.rows}
                    maxRows={props.maxRows}
                    multiline={props.multiline}
                    inputProps={{
                        style: {
                            color: "#fff",
                            width: "100%",
                        }
                    }}
                />
            </div>
        </ThemeProvider>

    );
};

export default Input;