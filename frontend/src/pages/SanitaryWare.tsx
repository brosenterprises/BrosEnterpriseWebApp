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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Bathtub as BathtubIcon,
  CheckCircle,
  Shower,
  Kitchen,
  WaterDrop,
  CleaningServices,
  DesignServices,
  Plumbing,
} from '@mui/icons-material';

const sanitaryCategories = [
  {
    name: 'Bathroom Fixtures',
    description: 'Modern and stylish bathroom fixtures for contemporary homes',
    features: ['Toilets & Bidets', 'Wash Basins', 'Bathtubs', 'Shower Panels'],
    color: '#2196F3',
  },
  {
    name: 'Kitchen Sinks',
    description: 'Durable and functional kitchen sinks in various designs',
    features: ['Stainless Steel', 'Granite Sinks', 'Double Bowl', 'Single Bowl'],
    color: '#00BCD4',
  },
  {
    name: 'Faucets & Taps',
    description: 'Premium faucets and taps for kitchen and bathroom applications',
    features: ['Mixer Taps', 'Sensor Taps', 'Wall Mounted', 'Deck Mounted'],
    color: '#03A9F4',
  },
  {
    name: 'Accessories',
    description: 'Complete range of bathroom and kitchen accessories',
    features: ['Towel Rails', 'Soap Dispensers', 'Mirrors', 'Storage Solutions'],
    color: '#0288D1',
  },
];

const brands = [
  'Kohler', 'Jaquar', 'Hindware', 'Cera', 'Parryware', 'American Standard'
];

const services = [
  'Design Consultation',
  'Installation Guidance',
  'Plumbing Support',
  'Maintenance Tips',
  'Warranty Support',
  'Custom Solutions',
];

export const SanitaryWare: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha('#2196F3', 0.1)} 0%, ${alpha('#2196F3', 0.05)} 100%)`,
          py: 6,
          mb: 6,
          borderRadius: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                bgcolor: '#2196F3',
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 3,
              }}
            >
              <BathtubIcon sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Modern Sanitary Ware
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Stylish and functional sanitary fixtures, fittings, and bathroom accessories 
              from trusted brands to create your perfect bathroom and kitchen.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Sanitary Categories Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
          Our Sanitary Ware Collection
        </Typography>
        <Grid container spacing={4}>
          {sanitaryCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  border: `2px solid ${alpha(category.color, 0.2)}`,
                  '&:hover': {
                    border: `2px solid ${category.color}`,
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: alpha(category.color, 0.1),
                        color: category.color,
                        width: 50,
                        height: 50,
                        mr: 2,
                      }}
                    >
                      <BathtubIcon />
                    </Avatar>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                      {category.name}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                    {category.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        sx={{
                          bgcolor: alpha(category.color, 0.1),
                          color: category.color,
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Brands & Services Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                <DesignServices sx={{ mr: 2, verticalAlign: 'middle', color: theme.palette.primary.main }} />
                Premium Sanitary Brands
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                We offer sanitary ware from world's leading brands known for quality and innovation.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {brands.map((brand, index) => (
                  <Chip
                    key={index}
                    label={brand}
                    variant="outlined"
                    sx={{ fontWeight: 600 }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', bgcolor: '#2196F3', color: 'white' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                <Plumbing sx={{ mr: 2, verticalAlign: 'middle' }} />
                Our Sanitary Services
              </Typography>
              <List>
                {services.map((service, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary={service} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: alpha('#2196F3', 0.05), py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Why Choose Our Sanitary Ware?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#2196F3', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <WaterDrop />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Water Efficient
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Eco-friendly designs that save water
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#2196F3', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <DesignServices />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Modern Designs
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Contemporary styles for modern homes
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#2196F3', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <CleaningServices />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Easy Maintenance
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Easy to clean and maintain surfaces
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#2196F3', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Shower />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Complete Solutions
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Everything for bathroom and kitchen
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          sx={{
            p: 6,
            textAlign: 'center',
            background: `linear-gradient(135deg, #2196F3 0%, #1976D2 100%)`,
            color: 'white',
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Transform Your Bathroom & Kitchen
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            Explore our modern sanitary ware collection at our Gurugram showroom
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
            >
              Get Design Consultation
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#2196F3',
                '&:hover': {
                  bgcolor: alpha('#ffffff', 0.9),
                },
                fontWeight: 600,
              }}
            >
              Visit Our Showroom
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SanitaryWare;
