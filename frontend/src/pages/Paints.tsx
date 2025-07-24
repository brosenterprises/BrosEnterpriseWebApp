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
  Palette as PaletteIcon,
  CheckCircle,
  ColorLens,
  Home,
  Business,
  Brush,
  Shield,
} from '@mui/icons-material';

const paintTypes = [
  {
    name: 'Interior Paints',
    description: 'Premium interior paints for walls, ceilings, and woodwork',
    features: ['Washable', 'Low Odor', 'Quick Dry', 'Smooth Finish'],
    color: '#FF6B35',
  },
  {
    name: 'Exterior Paints',
    description: 'Weather-resistant exterior paints for long-lasting protection',
    features: ['Weather Resistant', 'UV Protection', 'Fade Resistant', 'Durable'],
    color: '#2E7D32',
  },
  {
    name: 'Wood Finishes',
    description: 'Specialized finishes for wooden surfaces and furniture',
    features: ['Wood Protection', 'Natural Look', 'Termite Resistant', 'Long Lasting'],
    color: '#795548',
  },
  {
    name: 'Metal Paints',
    description: 'Anti-rust and protective coatings for metal surfaces',
    features: ['Anti-Rust', 'Corrosion Protection', 'High Gloss', 'Industrial Grade'],
    color: '#607D8B',
  },
];

const brands = [
  'Asian Paints', 'Berger Paints', 'Nerolac', 'Dulux', 'Jotun', 'Shalimar Paints'
];

const services = [
  'Color Consultation',
  'Paint Calculation',
  'Surface Preparation Advice',
  'Application Guidance',
  'Color Matching Service',
  'Bulk Order Discounts',
];

export const Paints: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha('#FF6B35', 0.1)} 0%, ${alpha('#FF6B35', 0.05)} 100%)`,
          py: 6,
          mb: 6,
          borderRadius: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                bgcolor: '#FF6B35',
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 3,
              }}
            >
              <PaletteIcon sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              High-Quality Paints
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Transform your spaces with our premium range of interior and exterior paints 
              from trusted brands, offering durability and beautiful finishes.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Paint Types Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
          Our Paint Categories
        </Typography>
        <Grid container spacing={4}>
          {paintTypes.map((paint, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  border: `2px solid ${alpha(paint.color, 0.2)}`,
                  '&:hover': {
                    border: `2px solid ${paint.color}`,
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
                        bgcolor: alpha(paint.color, 0.1),
                        color: paint.color,
                        width: 50,
                        height: 50,
                        mr: 2,
                      }}
                    >
                      <PaletteIcon />
                    </Avatar>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                      {paint.name}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                    {paint.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {paint.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        sx={{
                          bgcolor: alpha(paint.color, 0.1),
                          color: paint.color,
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
                <ColorLens sx={{ mr: 2, verticalAlign: 'middle', color: theme.palette.primary.main }} />
                Trusted Paint Brands
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                We stock premium paints from India's most trusted brands, ensuring quality and reliability.
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
            <Paper sx={{ p: 4, height: '100%', bgcolor: theme.palette.primary.main, color: 'white' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                <Brush sx={{ mr: 2, verticalAlign: 'middle' }} />
                Our Paint Services
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
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05), py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Why Choose Our Paints?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Shield />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Quality Assured
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  All paints are tested for quality and durability
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Home />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Interior & Exterior
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Complete range for all your painting needs
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Business />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Commercial Grade
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Suitable for residential and commercial projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <ColorLens />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Color Matching
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Professional color consultation and matching
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
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Transform Your Space?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            Visit our store in Gurugram for expert advice and the best paint selection
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
              Get Color Consultation
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: alpha('#ffffff', 0.9),
                },
                fontWeight: 600,
              }}
            >
              Visit Our Store
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Paints;
