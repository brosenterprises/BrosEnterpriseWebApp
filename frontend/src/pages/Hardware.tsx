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
  Build as BuildIcon,
  CheckCircle,
  Construction,
  Handyman,
  Security,
  Engineering,
  Hardware as HardwareIcon,
  Settings,
} from '@mui/icons-material';

const hardwareCategories = [
  {
    name: 'Construction Tools',
    description: 'Professional-grade tools for construction and building projects',
    features: ['Power Tools', 'Hand Tools', 'Measuring Tools', 'Safety Equipment'],
    color: '#795548',
  },
  {
    name: 'Building Materials',
    description: 'Quality materials for structural and finishing work',
    features: ['Cement & Concrete', 'Steel & Iron', 'Timber & Wood', 'Insulation Materials'],
    color: '#607D8B',
  },
  {
    name: 'Fasteners & Fittings',
    description: 'Complete range of nuts, bolts, screws, and fittings',
    features: ['Nuts & Bolts', 'Screws & Nails', 'Hinges & Locks', 'Brackets & Clamps'],
    color: '#455A64',
  },
  {
    name: 'Hardware Accessories',
    description: 'Essential hardware accessories for various applications',
    features: ['Door Hardware', 'Window Fittings', 'Cabinet Hardware', 'Decorative Items'],
    color: '#5D4037',
  },
];

const toolBrands = [
  'Bosch', 'Makita', 'DeWalt', 'Stanley', 'Hitachi', 'Black & Decker'
];

const services = [
  'Tool Rental Services',
  'Bulk Order Discounts',
  'Technical Consultation',
  'Product Demonstrations',
  'After-Sales Support',
  'Custom Solutions',
];

export const Hardware: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha('#795548', 0.1)} 0%, ${alpha('#795548', 0.05)} 100%)`,
          py: 6,
          mb: 6,
          borderRadius: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                bgcolor: '#795548',
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 3,
              }}
            >
              <BuildIcon sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Durable Hardware
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Complete range of construction hardware, tools, and building materials 
              for professional contractors and DIY enthusiasts.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Hardware Categories Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
          Our Hardware Categories
        </Typography>
        <Grid container spacing={4}>
          {hardwareCategories.map((category, index) => (
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
                      <BuildIcon />
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
                <HardwareIcon sx={{ mr: 2, verticalAlign: 'middle', color: theme.palette.primary.main }} />
                Premium Tool Brands
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                We stock professional-grade tools and hardware from world's leading brands.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {toolBrands.map((brand, index) => (
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
            <Paper sx={{ p: 4, height: '100%', bgcolor: '#795548', color: 'white' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                <Settings sx={{ mr: 2, verticalAlign: 'middle' }} />
                Our Hardware Services
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
      <Box sx={{ bgcolor: alpha('#795548', 0.05), py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Why Choose Our Hardware?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#795548', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Security />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Professional Grade
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Industrial quality tools and materials
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#795548', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Construction />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Complete Range
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Everything for construction and repair
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#795548', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Handyman />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Expert Advice
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Professional guidance and support
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#795548', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Engineering />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Technical Support
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Installation and usage guidance
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
            background: `linear-gradient(135deg, #795548 0%, #5D4037 100%)`,
            color: 'white',
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Need Quality Hardware & Tools?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            Visit our hardware section in Gurugram for professional-grade tools and materials
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
              Get Technical Consultation
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#795548',
                '&:hover': {
                  bgcolor: alpha('#ffffff', 0.9),
                },
                fontWeight: 600,
              }}
            >
              Explore Our Hardware
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hardware;
