import { Box, Button, Input, Stack, TextField, Typography } from "@mui/material"

export const Login = () => {
    return (
        <Stack
            width={405}
            height={514}
            bgcolor='#29292E'
            spacing={2}
        >
            <Typography
                variant='h4'
                color='#FFFFFF'
            >Login</Typography>
            <Typography
                variant='subtitle2'
                color='#FFFFFF'
            >E-mail:</Typography>
            <Input
                fullWidth
                placeholder="Registered e-mail..."
            ></Input>
            <Typography
                variant='subtitle2'
                color='#FFFFFF'
            >Password:</Typography>
            <Input
                fullWidth
                placeholder="Your password..."
            ></Input>
            <Button
                variant='contained'
                color="success"
            >Register / Login</Button>
            <Typography
                variant='subtitle1'
                color='#FFFFFF'
            >Continue with:</Typography>
        </Stack>
    )
}