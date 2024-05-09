import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { FormEvent, useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>

        <Typography variant="h5">Sign Up</Typography>

        <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            required
            autoFocus
            fullWidth
            margin="normal"
          ></TextField>

          <FormControl fullWidth margin="normal" required>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Grid container>
            <Grid item>
              <Link href="/Login" variant="body2">
                {"Already have an account? Sign in? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
