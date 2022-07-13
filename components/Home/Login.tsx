import { Box, Button, TextField, Stack, Typography } from "@mui/material"

export const Login = () => {
    return (
        <Box
            sx={{
                bgcolor: '#29292E',
                width: {
                    lg: '400px',
                    xs: '350px'
                },
                margin: {
                    lg: 'none',
                    xs: 'auto'
                },
                marginTop: {
                    lg: '45px',
                    xs: '5px'
                }
            }}
        >

            <Stack>
                <Box
                    sx={{

                        width: {
                            lg: '325px'
                        },
                        padding: {
                            lg: '5px',
                            xs: '5px',
                        },

                    }}

                >
                    <Typography
                        variant='h4'
                        color='#969696'
                        sx={{
                            marginLeft: {
                                lg: '20px',
                                xs: '5px',
                            },
                            marginTop: {
                                lg: '22px',
                                xs: '10px',
                            },
                            fontSize: {
                                lg: '45px',
                                xs: '50px'
                            }
                        }}
                    >
                        Login
                    </Typography>
                    <Typography
                        fontWeight='thin'
                        color='#969696'
                        sx={{
                            marginLeft: {
                                lg: '20px',
                                xs: '5px',
                            },
                            marginTop: {
                                lg: '45px',
                                xs: '15px',
                            },
                            fontSize: {
                                lg: '13px',
                                xs: '12px',
                            }
                        }}
                    >
                        E-mail:
                    </Typography>
                    <TextField

                        placeholder="Registered e-mail..."
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '5px',
                            width: {
                                lg: '350px',
                                xs: '328px'
                            },
                            marginLeft: {
                                lg: '18px'
                            },
                            margin: {
                                lg: 'px',
                                xs: '5px',
                            },
                            height: {
                                lg: '42px',
                                xs: '31px'
                            },
                            input: {
                                height: {
                                    lg: '10px',
                                    xs: '0px'
                                }

                            },


                        }}
                    ></TextField>
                    <Typography
                        variant='subtitle2'
                        color='#969696'
                        sx={{
                            marginLeft: {
                                lg: '20px',
                                xs: '5px',
                            },
                            marginTop: {
                                lg: '35px',
                                xs: '25px',
                            },
                            fontSize: {
                                lg: '13px',
                                xs: '12px',
                            }
                        }}
                    >
                        Password:
                    </Typography>
                    <TextField
                        placeholder="Your password..."
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '5px',
                            fontColor: '#000000',
                            width: {
                                lg: '350px',
                                xs: '328px'
                            },
                            marginLeft:
                            {
                                lg: '18px',
                                xs: '',
                            },
                            margin: {
                                lg: 'px',
                                xs: '5px',
                            },
                            height: {
                                lg: '42px',
                                xs: '31px'
                            },
                            input: {
                                height: {
                                    lg: '10px',
                                    xs: '0px'
                                }

                            },

                        }}
                    ></TextField>
                    <Button
                        variant='contained'

                        sx={{
                            backgroundColor: '#121214',
                            textTransform: 'inherit',
                            marginLeft: {
                                lg: '97px',
                                xs: '83.5px'
                            },
                            marginBottom: {
                                lg: '15px',
                                xs: '15px'
                            },
                            marginTop: {
                                lg: '25px',
                                xs: '25px'
                            },
                            width: {
                                lg: '190px',
                                xs: '160px'

                            },
                            height: {
                                lg: '45px',
                            }
                        }}
                    >
                        Register / Login
                    </Button>
                    <Box
                        
                        sx={{
                            borderBottom: '1px solid #969696',
                            marginLeft: {
                                lg: '21px',
                                xs: '8px'
                            },
                            width: {
                                lg: '335px',
                                xs: '320px'
                            },
                            
                        }}
                    >

                    </Box>
                </Box>
                <Typography
                    variant='subtitle1'
                    color='#969696'
                    sx={{
                        fontSize: {
                            lg: '15px',
                            xs: '14px'
                        },
                        marginLeft: {
                            lg: '27px',
                            xs: '12px',
                        },
                        marginTop: {
                            lg: '0px',
                            xs: '0px',
                        }
                    }}
                >
                    Continue with:
                </Typography>
            </Stack>
        </Box>
    )
}