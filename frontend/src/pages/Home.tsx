import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Paper,
  useTheme,
  alpha,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Palette as PaletteIcon,
  Build as BuildIcon,
  Bathtub as BathtubIcon,
  ElectricalServices as ElectricalIcon,
  LocationOn,
  Phone,
  Schedule,
  Star,
  Verified,
  LocalShipping,
  SupportAgent,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'High-Quality Paints',
    description: 'Premium paints from top brands for interior and exterior applications. Weather-resistant and long-lasting finishes.',
    icon: <PaletteIcon />,
    color: '#FF6B35',
    path: '/paints',
    features: ['Interior & Exterior', 'Weather Resistant', 'Premium Brands', 'Color Matching']
  },
  {
    title: 'Durable Hardware',
    description: 'Complete range of construction hardware, tools, and building materials for all your project needs.',
    icon: <BuildIcon />,
    color: '#795548',
    path: '/hardware',
    features: ['Construction Tools', 'Building Materials', 'Quality Hardware', 'Professional Grade']
  },
  {
    title: 'Modern Sanitary Ware',
    description: 'Stylish and functional sanitary fixtures, fittings, and bathroom accessories from trusted brands.',
    icon: <BathtubIcon />,
    color: '#2196F3',
    path: '/sanitary',
    features: ['Modern Designs', 'Quality Fixtures', 'Bathroom Accessories', 'Trusted Brands']
  },
  {
    title: 'Trusted Electricals',
    description: 'Reliable electrical components, wiring solutions, and safety equipment for residential and commercial use.',
    icon: <ElectricalIcon />,
    color: '#FFC107',
    path: '/electricals',
    features: ['Safety Equipment', 'Wiring Solutions', 'Quality Components', 'Certified Products']
  },
];

const features = [
  {
    icon: <Verified />,
    title: 'Quality Assured',
    description: 'All products are quality tested and certified'
  },
  {
    icon: <LocalShipping />,
    title: 'Fast Delivery',
    description: 'Quick delivery across Gurugram and nearby areas'
  },
  {
    icon: <SupportAgent />,
    title: 'Expert Support',
    description: 'Professional guidance and customer support'
  },
  {
    icon: <Star />,
    title: 'Trusted Brand',
    description: 'Years of experience serving customers'
  },
];

export const Home: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: 8,
          mb: 6,
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'text.primary' }}>
                BROS ENTERPRISES
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 500, color: theme.palette.primary.main, mb: 3 }}>
                Your One-Stop Store for Building Materials
              </Typography>
              <Typography variant="h6" paragraph sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 4 }}>
                High-quality paints, durable hardware, modern sanitary ware, and trusted electricals – 
                all under one roof in the heart of Gurugram.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<LocationOn />}
                  onClick={() => navigate('/contact')}
                  sx={{ fontWeight: 600 }}
                >
                  Visit Our Store
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Phone />}
                  sx={{ fontWeight: 600 }}
                >
                  Call Us Now
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    bgcolor: theme.palette.primary.main,
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  BE
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Serving Gurugram Since Years
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                  <Chip label="Quality Products" color="primary" />
                  <Chip label="Expert Service" color="secondary" />
                  <Chip label="Trusted Brand" color="primary" variant="outlined" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
          Our Products & Services
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>
          Everything you need for your construction and renovation projects
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
                  },
                }}
                onClick={() => navigate(service.path)}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: alpha(service.color, 0.1),
                        color: service.color,
                        width: 60,
                        height: 60,
                        mr: 2,
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {service.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: service.color, color: service.color }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: service.color,
                      '&:hover': {
                        bgcolor: alpha(service.color, 0.8),
                      },
                      fontWeight: 600,
                    }}
                    fullWidth
                  >
                    Explore {service.title}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05), py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Why Choose Bros Enterprises?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Store Info Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Visit Our Store in Gurugram
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1">
                  Located in the heart of Gurugram
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Schedule sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1">
                  Open: Mon-Sat 9:00 AM - 8:00 PM
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Phone sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1">
                  Call us for inquiries and orders
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="large"
                startIcon={<LocationOn />}
                onClick={() => navigate('/contact')}
                sx={{ fontWeight: 600 }}
                fullWidth
              >
                Get Directions
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', bgcolor: theme.palette.primary.main, color: 'white' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Our Commitment
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                At Bros Enterprises, we are committed to delivering excellent service and customer satisfaction. 
                Our experienced team helps you find the right products for your specific needs.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                Whether you're a contractor, builder, or homeowner, we provide quality products at competitive 
                prices with professional guidance every step of the way.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: alpha('#ffffff', 0.1),
                  },
                  fontWeight: 600,
                }}
                fullWidth
              >
                Learn More About Us
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
