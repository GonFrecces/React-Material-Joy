import './App.css';
import React, { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { Grid, Box, Button, Card, CardContent, CardOverflow, CardActions, IconButton, Typography, Chip, ButtonGroup } from '@mui/joy';
import SvgIcon from '@mui/joy/SvgIcon';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import FadeModalDialog from './components/modal/login';

function App() {

    let date = new Date();
    const [open, setOpen] = useState(false);

    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box component="main"
                className="MainContent"
                sx={{
                    px: { xs: 2, md: 6 },
                    pt: {
                        xs: 'calc(12px + var(--Header-height))',
                        sm: 'calc(12px + var(--Header-height))',
                        md: 3,
                    },
                    pb: { xs: 2, sm: 2, md: 3 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                    width: '100%',
                }}>
                <Box component="section" sx={(theme) => ({ p: 2, textAlign: 'center', borderRadius: '5px' })}>
                    <ColorSchemeToggle sx={{ ml: 'auto' }} />
                    <Typography level="h1" >Componentes JoyUI</Typography>
                    <Typography level="title-md" >{date.toString('dd/mm/yyyy')}</Typography>
                </Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ flexGrow: 1 }}
                >
                    <Grid key={`login`} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Card sx={(theme) => ({
                            width: 320, maxWidth: '100%', boxShadow: 'lg', transition: 'transform 0.3s, border 0.3s',
                            '&:hover': {
                                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                transform: 'translateY(-2px)',
                            },
                            '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
                        })}
                        >
                            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>

                                <Chip
                                    size="sm"
                                    variant="soft"
                                    color="primary"
                                    sx={{
                                        mt: -1,
                                        mb: 1,
                                        border: '3px solid',
                                        borderColor: 'background.surface',
                                    }}
                                >
                                    PRO
                                </Chip>
                                <Typography level="title-lg">Login</Typography>
                                <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                                    Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
                                    love to code.
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        mt: 2,
                                        '& > button': { borderRadius: '2rem' },
                                    }}
                                >
                                    <IconButton size="sm" variant="plain" color="neutral">
                                        <SvgIcon>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <title>google</title>
                                                <path 
                                                    fill="currentColor"
                                                    d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" 
                                                />
                                            </svg>
                                        </SvgIcon>
                                        
                                    </IconButton>
                                    <IconButton size="sm" variant="plain" color="neutral">
                                        <SvgIcon>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <title>microsoft</title>
                                                <path 
                                                    fill="currentColor"
                                                    d="M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z" />
                                            </svg>
                                        </SvgIcon>
                                    </IconButton>
                                    <IconButton size="sm" variant="plain" color="neutral">
                                        <SvgIcon>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                                                />
                                            </svg>
                                        </SvgIcon>
                                    </IconButton>
                                    <IconButton size="sm" variant="plain" color="neutral">
                                        <SvgIcon>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351a9.757 9.757 0 0 1-.92.87a13.156 13.156 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003c.027.061.05.118.094.229l.017.04c1.513-.17 3.109-.107 4.656.103c.206.027.4.056.584.087Zm-9.385-7.45a46.15 46.15 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767c.33-.274.594-.532.796-.755A7.968 7.968 0 0 0 12 4c-.476 0-.942.042-1.396.121ZM4.253 9.997a29.21 29.21 0 0 0 2.04-.123a31.53 31.53 0 0 0 4.862-.822a54.36 54.36 0 0 0-2.7-4.227a8.018 8.018 0 0 0-4.202 5.172Zm1.53 7.038a14.21 14.21 0 0 1 1.575-1.899c1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995c-1.836.535-3.77.869-5.697 1.042c-.94.085-1.783.122-2.403.128a7.966 7.966 0 0 0 1.784 5.032Zm9.221 2.38a35.951 35.951 0 0 0-1.632-5.709c-2 .727-3.596 1.79-4.829 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583Zm1.874-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.025 12.025 0 0 0-3.18-.033a39.39 39.39 0 0 1 1.438 5.14ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Z"
                                                />
                                            </svg>
                                        </SvgIcon>
                                    </IconButton>
                                </Box>
                            </CardContent>
                            <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                                <CardActions buttonFlex="1">
                                    <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                                        <Button onClick={() => setOpen(true)}>view</Button>
                                        <Button onClick={() => console.log('Source')}>source</Button>
                                    </ButtonGroup>
                                </CardActions>
                            </CardOverflow>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <FadeModalDialog open={open} setOpen={setOpen}/>
        </CssVarsProvider>

    );
}

export default App;
