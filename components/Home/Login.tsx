import { Box, Button, TextField, Stack, Typography } from "@mui/material"

export const Login = () => {
    return (
        <Box
            sx={{
                bgcolor: '#29292E',
                width: {
                    lg: '355px',
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
                        borderBottom: '1px solid #F4F6FC',
                        width: {
                            lg: '325px'
                        },
                        padding: {
                            lg: '25px',
                            xs: '25px', 
                        },
                        marginLeft: {
                            lg: '15px'
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
                                lg: '15px',
                                xs: '12px',
                            }
                        }}
                    >E-mail:</Typography>
                    <TextField
                        variant='filled'   
                        sx={{
                            backgroundColor: '#FFFFFF',
                            width: {
                                lg: '400x',
                                xs: '270px'
                            },
                            margin: {
                                lg: 'px',
                                xs: '15px',
                            },
                            
                        }}
                        placeholder="Registered e-mail..."
                    ></TextField>
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
                            },
                            fontSize: {
                                lg: '15px',
                                xs: '12px',
                            }
                        }}
                    >Password:</Typography>
                    <TextField
                        variant='filled'
                        sx={{
                            backgroundColor: '#ffffff',
                            fontColor: '#000000',
                            width: {
                                lg: '400x',
                                xs: '270px'
                            },
                            margin:
                            {
                                lg: 'px',
                                xs: '15px',
                            },
                            
                        }}
                        placeholder="Your password..."
                    ></TextField>
                    <Button
                        variant='contained'
                        
                        sx={{
                            backgroundColor: '#121214',
                            marginLeft: {
                                lg: '65px',
                                xs: '65px'
                            },
                            marginBottom: {
                                lg: '15px',
                                xs: '10px'
                            },
                            marginTop: {
                                lg: '15px',
                                xs: '10px'
                            }
                        }}
                    >Register / Login</Button>
                </Box>
                    <Typography
                        variant='subtitle1'
                        color='#FFFFFF'
                        sx={{
                            fontSize: {
                                lg: '15px',
                                xs: '12px'
                            },
                            marginLeft: {
                                lg: '0px',
                                xs: '0px',
                            },
                            marginTop: {
                                lg: '5px',
                                xs: '10px',
                            }
                        }}
                    >Continue with:</Typography>
            </Stack>
        </Box>
    )
}