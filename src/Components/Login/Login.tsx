import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/ValidateMailPassword';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setUsers } from '../../redux/authSlice';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type LoginFormInputs = {
  email: string;
  password: string;
};

const defaultTheme = createTheme();

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.auth.users);

  const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginFormInputs>();

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      navigate('/dashboard');
    }
  }, []);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (storedUsers.length > 0) {
      dispatch(setUsers(storedUsers));
    }
  }, []);

  const onSubmit: SubmitHandler<LoginFormInputs> = data => {
    console.log("Form submitted with data:", data); // Debug
    const { email, password } = data;
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
      setError('email', { type: 'manual', message: emailError });
    }
    if (passwordError) {
      setError('password', { type: 'manual', message: passwordError });
    }

    if (!emailError && !passwordError) {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        console.log("Logging in user:", user); //Debug
        sessionStorage.setItem('loggedIn', 'true');
        navigate('/dashboard');
      } else {
        setError('password', { type: 'manual', message: 'Invalid email or password' });
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              {...register('email', { required: 'Email is required' })}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
            <TextField
              {...register('password', { required: 'Password is required' })}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
