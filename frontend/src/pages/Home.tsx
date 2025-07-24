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
  useMediaQuery,
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
import { usePageTitle, PAGE_CONFIGS } from '../hooks/usePageTitle';
import brosLogo from '../assets/img/bros_enterprises_logo.jpg';

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
  
  // Set up page title and SEO
  usePageTitle(PAGE_CONFIGS.home);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: { xs: 4, sm: 6, md: 8 },
          mb: { xs: 3, sm: 4, md: 6 },
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant={isSmallMobile ? "h3" : isMobile ? "h2" : "h2"} 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700, 
                  color: 'text.primary',
                  fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                BROS ENTERPRISES
              </Typography>
              <Typography 
                variant={isSmallMobile ? "h6" : "h5"} 
                gutterBottom 
                sx={{ 
                  fontWeight: 500, 
                  color: theme.palette.primary.main, 
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Your One-Stop Store for Building Materials
              </Typography>
              <Typography 
                variant={isSmallMobile ? "body1" : "h6"} 
                paragraph 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.6, 
                  mb: { xs: 3, sm: 4 },
                  fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                High-quality paints, durable hardware, modern sanitary ware, and trusted electricals – 
                all under one roof in the heart of Gurugram.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 1, sm: 2 }, 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'center' },
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <Button
                  variant="contained"
                  size={isMobile ? "large" : "large"}
                  startIcon={<LocationOn />}
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    fontWeight: 600,
                    py: { xs: 1.5, sm: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                  fullWidth={isSmallMobile}
                >
                  Visit Our Store
                </Button>
                <Button
                  variant="outlined"
                  size={isMobile ? "large" : "large"}
                  startIcon={<Phone />}
                  sx={{ 
                    fontWeight: 600,
                    py: { xs: 1.5, sm: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                  fullWidth={isSmallMobile}
                  href="tel:+91"
                >
                  Call Us Now
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mt: { xs: 3, md: 0 } }}>
                <Avatar
                  src={brosLogo}
                  alt="Bros Enterprises"
                  sx={{
                    width: { xs: 120, sm: 150, md: 200 },
                    height: { xs: 120, sm: 150, md: 200 },
                    mx: 'auto',
                    mb: 2,
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.3)}`,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }
                  }}
                />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                  }}
                >
                  Serving Gurugram Since Years
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 1, 
                  mt: 2,
                  flexWrap: 'wrap'
                }}>
                  <Chip 
                    label="Quality Products" 
                    color="primary" 
                    size={isSmallMobile ? "small" : "medium"}
                  />
                  <Chip 
                    label="Expert Service" 
                    color="secondary" 
                    size={isSmallMobile ? "small" : "medium"}
                  />
                  <Chip 
                    label="Trusted Brand" 
                    color="primary" 
                    variant="outlined" 
                    size={isSmallMobile ? "small" : "medium"}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, sm: 8 } }}>
        <Typography 
          variant={isSmallMobile ? "h4" : "h3"} 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            textAlign: 'center', 
            mb: { xs: 1, sm: 2 },
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
          }}
        >
          Our Products & Services
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            color: 'text.secondary', 
            mb: { xs: 4, sm: 6 },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            px: { xs: 2, sm: 0 }
          }}
        >
          Everything you need for your construction and renovation projects
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: { xs: 'none', sm: 'translateY(-8px)' },
                    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                  },
                }}
                onClick={() => navigate(service.path)}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: { xs: 2, sm: 3 },
                    flexDirection: { xs: 'column', sm: 'row' },
                    textAlign: { xs: 'center', sm: 'left' }
                  }}>
                    <Avatar
                      sx={{
                        bgcolor: alpha(service.color, 0.1),
                        color: service.color,
                        width: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        mr: { xs: 0, sm: 2 },
                        mb: { xs: 1, sm: 0 },
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', sm: '1.5rem' }
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      color: 'text.secondary', 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1, 
                    mb: { xs: 2, sm: 3 },
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                  }}>
                    {service.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          borderColor: service.color, 
                          color: service.color,
                          fontSize: { xs: '0.7rem', sm: '0.75rem' }
                        }}
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
                      py: { xs: 1.5, sm: 1.5 },
                      fontSize: { xs: '0.85rem', sm: '0.9rem' }
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
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05), py: { xs: 6, sm: 8 }, mb: { xs: 6, sm: 8 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant={isSmallMobile ? "h4" : "h4"} 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              textAlign: 'center', 
              mb: { xs: 4, sm: 6 },
              fontSize: { xs: '1.5rem', sm: '2rem' }
            }}
          >
            Why Choose Bros Enterprises?
          </Typography>
          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: { xs: 60, sm: 80 },
                      height: { xs: 60, sm: 80 },
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.85rem', sm: '0.875rem' },
                      lineHeight: 1.5
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Store Info Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, sm: 8 } }}>
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: { xs: 3, sm: 4 }, height: '100%' }}>
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                Visit Our Store in Gurugram
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  Located in the heart of Gurugram
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Schedule sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  Open: Mon-Sat 9:00 AM - 8:00 PM
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
                <Phone sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  Call us for inquiries and orders
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="large"
                startIcon={<LocationOn />}
                onClick={() => navigate('/contact')}
                sx={{ 
                  fontWeight: 600,
                  py: { xs: 1.5, sm: 1.5 },
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
                fullWidth
              >
                Get Directions
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ 
              p: { xs: 3, sm: 4 }, 
              height: '100%', 
              bgcolor: theme.palette.primary.main, 
              color: 'white' 
            }}>
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                Our Commitment
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                At Bros Enterprises, we are committed to delivering excellent service and customer satisfaction. 
                Our experienced team helps you find the right products for your specific needs.
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
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
                  py: { xs: 1.5, sm: 1.5 },
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
                fullWidth
                onClick={() => navigate('/about')}
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
