import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
  InputAdornment,
  IconButton,
  Divider,
  Avatar,
  Container,
  Paper,
  useTheme,
  alpha,
  Grid,
  Chip,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  TrendingUp,
  ShowChart,
  Security,
  Speed,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const TradingLogin: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@example.com',
      password: 'password123',
    });
  };

  // Mock market data for background
  const marketStats = [
    { label: 'NIFTY 50', value: '19,850.25', change: '+0.63%', positive: true },
    { label: 'SENSEX', value: '66,589.93', change: '+0.64%', positive: true },
    { label: 'BANK NIFTY', value: '44,123.45', change: '-0.12%', positive: false },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Branding & Features */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: theme.palette.primary.main,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  <TrendingUp fontSize="large" />
                </Avatar>
                <Box>
                  <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Bros Enterprise
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                    Trading Platform
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                Trade Smart, Invest Smarter
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                Experience next-generation trading with real-time market data, advanced analytics, 
                and professional-grade tools designed for serious traders and investors.
              </Typography>

              {/* Features */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ShowChart sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Real-time Charts
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Security sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Bank-grade Security
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Speed sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Lightning Fast
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUp sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Advanced Analytics
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Market Overview */}
              <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>
                  LIVE MARKET DATA
                </Typography>
                <Grid container spacing={2}>
                  {marketStats.map((stat) => (
                    <Grid item xs={4} key={stat.label}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                        {stat.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: stat.positive ? theme.palette.success.main : theme.palette.error.main,
                          fontWeight: 600,
                        }}
                      >
                        {stat.change}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          </Grid>

          {/* Right Side - Login Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={24}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                maxWidth: 400,
                mx: 'auto',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }}>
                  Welcome Back
                </Typography>

                {error && (
                  <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      mb: 2,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                      },
                    }}
                  >
                    {loading ? 'Signing In...' : 'Sign In to Trade'}
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={handleDemoLogin}
                    sx={{ mb: 3, py: 1.5, fontWeight: 600 }}
                  >
                    Try Demo Account
                  </Button>
                </form>

                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    New to trading?
                  </Typography>
                </Divider>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Don't have an account?{' '}
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => navigate('/register')}
                      sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                    >
                      Open Trading Account
                    </Link>
                  </Typography>

                  <Link
                    component="button"
                    variant="body2"
                    color="primary"
                    sx={{ fontWeight: 500 }}
                  >
                    Forgot your password?
                  </Link>
                </Box>
              </CardContent>
            </Paper>

            {/* Demo Credentials */}
            <Paper
              sx={{
                mt: 3,
                p: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                borderRadius: 2,
                maxWidth: 400,
                mx: 'auto',
              }}
            >
              <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600, mb: 1 }}>
                🚀 Demo Trading Account:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: demo@example.com<br />
                Password: password123
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="₹10,00,000 Virtual Money" size="small" color="primary" variant="outlined" />
                <Chip label="Real Market Data" size="small" color="primary" variant="outlined" />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TradingLogin;
