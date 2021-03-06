import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
            </AppBar>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            메인
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            핀터레스트를 만들어봐요
                            <br />다음 집안 꾸미기 아이디어를 찾아보세요
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                style={{
                                    backgroundColor: "#ed1631",
                                }}
                                variant="contained"
                            >로그인</Button>
                            <Button
                                style={{
                                    backgroundColor: "#ed1631",
                                }}
                                variant="contained"
                            >회원가입</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            핀터레스트 사진
                                        </Typography>
                                        <Typography>
                                            핀터레스트 사진 설명
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}
