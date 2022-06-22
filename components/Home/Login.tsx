import { Box,Button,TextField, Typography } from "@mui/material"

export const Login = () => {
    return (
        <Box
        width={405}
        height={514}
        bgcolor='#29292E'
        >
            <Typography
            variant='h3'
            color='#FFFFFF'
            >Login</Typography>
            <Typography
            variant='subtitle2'
            color='#FFFFFF'
            >E-mail:</Typography>
            <TextField></TextField>
            <Typography
            variant='subtitle2'
            color='#FFFFFF'
            >Password:</Typography>
            <TextField></TextField>
            <Button>Register / Login</Button>
        </Box>
    )
}