import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Voltar"
              sx={{ mr: 2 }}
            >
              <KeyboardBackspaceIcon  fontSize='large'/>
            </IconButton>
            <Avatar src='/public/Rectangle.svg'/>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              RUpay
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid 
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{p:2}}/>
        <Grid item xs={12}>
          <Typography color='#fff' variant='h4' component='h1'>
            Ola, Fernanda!
          </Typography>
          <Box sx={{p:2}}/>
          <Typography color='#fff' variant='h6' component='div'>
            Seu saldo é:
          </Typography>
          <Typography color='#fff' variant='h2' component='div'>
            R$ 54,60
          </Typography>
          <Box sx={{p:2}}/>
        </Grid>
        <Grid item xs={7}>
          <Button color='secondary' fullWidth size='large' variant='contained'>Colocar Créditos</Button>
        </Grid>
        <Grid item xs={7}>
          <Button color='secondary' fullWidth size='large' variant='contained'>Consultar cardápios</Button>
        </Grid>
        <Grid item xs={7}>
          <Button color='secondary' fullWidth size='large' variant='contained' >Sair</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;