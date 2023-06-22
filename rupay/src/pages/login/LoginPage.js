import React, { useState } from "react";
import "./LoginPage.css";
import { TextField, Box, Button, Grid } from "@mui/material";

const LoginPage = () => {
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationChange = (event) => {
    setRegistration(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid 
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Box
      direction="column"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-password-input"
          label="Matrícula"
          autoComplete="current-password"
        />
      <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
      <Button color="secondary" variant="contained">Entrar</Button>

    </Box>

    </Grid>
    
  
    
  );
};

export default LoginPage;
