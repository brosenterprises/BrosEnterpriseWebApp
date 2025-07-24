import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Paper,
  useTheme,
  alpha,
  Avatar,
  Chip,
  useMediaQuery,
  Stack,
  Card,
  Fade,
  Slide,
  Zoom,
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
  WhatsApp,
  Store,
  Security,
  Groups,
  AccessTime,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ResponsiveCard from '../components/common/ResponsiveCard';

interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  path: string;
  features: string[];
  badge?: string;
}

interface Stat {
  label: string;
  value: string;
  icon: React.ReactElement;
  color: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const services: Service[] = [
  {
    title: 'Premium Paints',
    description: 'High-quality interior and exterior paints from top brands. Weather-resistant, long-lasting finishes with expert color consultation.',
    icon: <PaletteIcon />,
    color: '#FF6B35',
    path: '/paints',
    features: ['Interior & Exterior', 'Weather Resistant', 'Premium Brands', 'Color Matching'],
    badge: 'Popular'
  },
  {
    title: 'Construction Hardware',
    description: 'Complete range of construction tools, building materials, and professional-grade hardware for all your project needs.',
    icon: <BuildIcon />,
    color: '#795548',
    path: '/hardware',
    features: ['Construction Tools', 'Building Materials', 'Quality Hardware', 'Professional Grade']
  },
  {
    title: 'Modern Sanitary Ware',
    description: 'Stylish bathroom and kitchen fixtures from leading brands. Modern designs with installation guidance and support.',
    icon: <BathtubIcon />,
    color: '#2196F3',
    path: '/sanitary',
    features: ['Bathroom Fixtures', 'Kitchen Faucets', 'Modern Designs', 'Installation Support']
  },
  {
    title: 'Electrical Solutions',
    description: 'Comprehensive electrical components, wiring solutions, and safety equipment with expert consultation services.',
    icon: <ElectricalIcon />,
    color: '#FFC107',
    path: '/electricals',
    features: ['Wiring Solutions', 'Safety Equipment', 'Expert Consultation', 'Quality Components']
  },
];

const stats: Stat[] = [
  {
    label: 'Years of Service',
    value: '14+',
    icon: <AccessTime />,
    color: '#FF6B35'
  },
  {
    label: 'Happy Customers',
    value: '5000+',
    icon: <Groups />,
    color: '#4CAF50'
  },
  {
    label: 'Products Available',
    value: '10000+',
    icon: <Store />,
    color: '#2196F3'
  },
  {
    label: 'Customer Rating',
    value: '4.8/5',
    icon: <Star />,
    color: '#FFC107'
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
    description: '24/7 customer support and technical assistance'
  },
  {
    icon: <Security />,
    title: 'Secure Shopping',
    description: 'Safe and secure payment options available'
  },
];

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Contractor',
    content: 'Bros Enterprises has been my go-to store for all construction materials. Quality products and excellent service!',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    content: 'Renovated my entire house with their help. The paint quality is outstanding and the staff is very knowledgeable.',
    rating: 5
  },
  {
    name: 'Amit Singh',
    role: 'Electrician',
    content: 'Best electrical supplies in Gurugram. Always have what I need and the prices are competitive.',
    rating: 4
  },
];

export const ResponsiveHome: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  const handleCallClick = () => {
    window.open('tel:+91', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/91', '_blank');
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Paper
        elevation={0}
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
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography 
                    variant="h1"
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'text.primary',
                      fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                      textAlign: { xs: 'center', md: 'left' },
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    BROS ENTERPRISES
                  </Typography>
                  <Typography 
                    variant="h2"
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
                    variant="body1"
                    paragraph 
                    sx={{ 
                      color: 'text.secondary', 
                      lineHeight: 1.6, 
                      mb: { xs: 3, sm: 4 },
                      fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                      textAlign: { xs: 'center', md: 'left' },
                      maxWidth: { md: '90%' }
                    }}
                  >
                    High-quality paints, durable hardware, modern sanitary ware, and trusted electricals – 
                    all under one roof in the heart of Gurugram since 2010.
                  </Typography>
                  
                  {/* Action Buttons */}
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    alignItems={{ xs: 'stretch', sm: 'center' }}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<LocationOn />}
                      onClick={() => navigate('/contact')}
                      sx={{ 
                        fontWeight: 600,
                        py: { xs: 1.5, sm: 1.5 },
                        px: { xs: 3, sm: 4 },
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        borderRadius: 2,
                        boxShadow: '0 4px 14px rgba(255, 107, 53, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Visit Our Store
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Phone />}
                      onClick={handleCallClick}
                      sx={{ 
                        fontWeight: 600,
                        py: { xs: 1.5, sm: 1.5 },
                        px: { xs: 3, sm: 4 },
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        borderRadius: 2,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Call Us Now
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1200}>
                <Box sx={{ textAlign: 'center', mt: { xs: 3, md: 0 } }}>
                  <Avatar
                    sx={{
                      width: { xs: 120, sm: 150, md: 200 },
                      height: { xs: 120, sm: 150, md: 200 },
                      bgcolor: theme.palette.primary.main,
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                      fontWeight: 'bold',
                      mx: 'auto',
                      mb: 2,
                      boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
                    }}
                  >
                    BE
                  </Avatar>
                  
                  {/* Store Info Chips */}
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    justifyContent="center" 
                    flexWrap="wrap"
                    sx={{ gap: 1 }}
                  >
                    <Chip 
                      icon={<Store />} 
                      label="Since 2010" 
                      color="primary" 
                      size={isSmallMobile ? "small" : "medium"}
                    />
                    <Chip 
                      icon={<LocationOn />} 
                      label="Gurugram" 
                      color="secondary" 
                      size={isSmallMobile ? "small" : "medium"}
                    />
                    <Chip 
                      icon={<Verified />} 
                      label="Trusted" 
                      variant="outlined" 
                      size={isSmallMobile ? "small" : "medium"}
                    />
                  </Stack>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>

        {/* Decorative Elements */}
        <Box sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 100,
          height: 100,
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          borderRadius: '50%',
          display: { xs: 'none', md: 'block' }
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 60,
          height: 60,
          bgcolor: alpha(theme.palette.secondary.main, 0.1),
          borderRadius: '50%',
          display: { xs: 'none', md: 'block' }
        }} />
      </Paper>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
        <Slide in direction="up" timeout={800}>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: { xs: 2, sm: 3 },
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 25px ${alpha(stat.color, 0.2)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, sm: 56 },
                      height: { xs: 48, sm: 56 },
                      borderRadius: 2,
                      bgcolor: alpha(stat.color, 0.1),
                      color: stat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(stat.icon, { 
                      sx: { fontSize: { xs: '1.5rem', sm: '2rem' } } 
                    })}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: stat.color,
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Slide>
      </Container>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Our Product Categories
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Discover our comprehensive range of high-quality building materials and hardware solutions
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={6} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Box>
                  <ResponsiveCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    color={service.color}
                    features={service.features}
                    badge={service.badge}
                    action={{
                      label: 'Explore Products',
                      onClick: () => handleServiceClick(service.path),
                    }}
                    size={isMobile ? 'medium' : 'large'}
                    orientation={isTablet ? 'horizontal' : 'vertical'}
                  />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: alpha(theme.palette.grey[50], 0.5),
          py: { xs: 4, sm: 6, md: 8 },
          mb: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4, md: 6 } }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Why Choose Bros Enterprises?
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Slide in direction="up" timeout={800 + index * 100}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: { xs: 2, sm: 3 },
                      height: '100%',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 56, sm: 64 },
                        height: { xs: 56, sm: 64 },
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {React.cloneElement(feature.icon, { 
                        sx: { fontSize: { xs: '1.75rem', sm: '2rem' } } 
                      })}
                    </Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.125rem' },
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>

      {/* Contact CTA Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
        <Paper
          elevation={0}
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: 3,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              mb: 4,
              opacity: 0.9,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Visit our store in Gurugram or contact us for expert advice on your building material needs
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<LocationOn />}
              onClick={() => navigate('/contact')}
              sx={{
                bgcolor: 'white',
                color: theme.palette.primary.main,
                fontWeight: 600,
                py: 1.5,
                px: 4,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: alpha('#ffffff', 0.9),
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Visit Store
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Phone />}
              onClick={handleCallClick}
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 600,
                py: 1.5,
                px: 4,
                borderRadius: 2,
                borderWidth: 2,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: alpha('#ffffff', 0.1),
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Call Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsApp />}
              onClick={handleWhatsAppClick}
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 600,
                py: 1.5,
                px: 4,
                borderRadius: 2,
                borderWidth: 2,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: alpha('#ffffff', 0.1),
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              WhatsApp
            </Button>
          </Stack>

          {/* Decorative elements */}
          <Box sx={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 80,
            height: 80,
            bgcolor: alpha('#ffffff', 0.1),
            borderRadius: '50%',
            display: { xs: 'none', md: 'block' }
          }} />
          <Box sx={{
            position: 'absolute',
            bottom: -30,
            left: -30,
            width: 100,
            height: 100,
            bgcolor: alpha('#ffffff', 0.05),
            borderRadius: '50%',
            display: { xs: 'none', md: 'block' }
          }} />
        </Paper>
      </Container>

      {/* Store Hours */}
      <Container maxWidth="lg">
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
            borderRadius: 3,
            bgcolor: alpha(theme.palette.secondary.main, 0.05),
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Schedule color="secondary" />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Store Hours:
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Monday - Saturday: 9:00 AM - 8:00 PM
            </Typography>
            <Chip
              label="Open Now"
              color="success"
              size="small"
              sx={{ fontWeight: 600 }}
            />
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default ResponsiveHome;
