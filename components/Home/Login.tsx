import { Box, Button, Input, Stack, TextField, Typography } from "@mui/material"

export const Login = () => {
    return (
        <Box
            sx={{
                bgcolor: '#29292E',
                width: {
                    lg: '450px',
                    xs: '350px'
                },
                margin: {
                    lg: 'none',
                    xs: 'auto'
                }

            }}
        >

            <Stack>
                <Box
                sx={{
                    padding: {
                        lg: '25px',
                        xs: '25px'
                    }
                }}
                
                >
                    <Typography
                        variant='h4'
                        color='#FFFFFF'
                        sx={{
                            marginLeft: {
                                lg: '20px',
                                xs: '20px',
                            },
                            marginTop: {
                                lg: '5px',
                                xs: '10px',
                            }
                        }}
                    >Login</Typography>
                    <Typography
                        fontWeight='thin'
                        color='#FFFFFF'
                        sx={{
                            marginLeft: {
                                lg: '20px',
                                xs: '20px',
                            },
                            marginTop: {
                                lg: '45px',
                                xs: '45px',
                            },
                            fontSize: {
                                lg: '18px',
                                xs: '12px',
                            }
                        }}
                    >E-mail:</Typography>
                    <Input
                        fullWidth
                        placeholder="Registered e-mail..."
                    ></Input>
                    <Typography
                        variant='subtitle2'
                        color='#FFFFFF'
                        sx={{
                            marginLeft: {
                                lg: '20px',
                                xs: '20px',
                            },
                            marginTop: {
                                lg: '5px',
                                xs: '10px',
                            }
                        }}
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
                        sx={{
                            marginLeft: {
                                lg: '20px',
                                xs: '20px',
                            },
                            marginTop: {
                                lg: '5px',
                                xs: '10px',
                            }
                        }}
                    >Continue with:</Typography>
                </Box>
            </Stack>
        </Box>
    )
}