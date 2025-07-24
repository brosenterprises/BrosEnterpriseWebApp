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
  ElectricalServices as ElectricalIcon,
  CheckCircle,
  Cable,
  Lightbulb,
  Security,
  PowerSettingsNew,
  ElectricBolt,
  Settings,
} from '@mui/icons-material';

const electricalCategories = [
  {
    name: 'Wiring & Cables',
    description: 'High-quality electrical wires and cables for all applications',
    features: ['House Wiring', 'Industrial Cables', 'Flexible Wires', 'Armoured Cables'],
    color: '#FFC107',
  },
  {
    name: 'Switches & Sockets',
    description: 'Modern switches and sockets for residential and commercial use',
    features: ['Modular Switches', 'Power Sockets', 'USB Sockets', 'Smart Switches'],
    color: '#FF9800',
  },
  {
    name: 'Lighting Solutions',
    description: 'Energy-efficient lighting solutions for every space',
    features: ['LED Lights', 'Tube Lights', 'Panel Lights', 'Street Lights'],
    color: '#FFB300',
  },
  {
    name: 'Safety Equipment',
    description: 'Essential electrical safety equipment and protection devices',
    features: ['MCBs & RCCBs', 'Distribution Boards', 'Earthing Materials', 'Safety Gear'],
    color: '#FF8F00',
  },
];

const brands = [
  'Havells', 'Anchor', 'Legrand', 'Schneider', 'Siemens', 'L&T'
];

const services = [
  'Electrical Consultation',
  'Load Calculation',
  'Safety Inspection',
  'Installation Support',
  'Maintenance Guidance',
  'Emergency Support',
];

export const Electricals: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha('#FFC107', 0.1)} 0%, ${alpha('#FFC107', 0.05)} 100%)`,
          py: 6,
          mb: 6,
          borderRadius: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                bgcolor: '#FFC107',
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 3,
              }}
            >
              <ElectricalIcon sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Trusted Electricals
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Reliable electrical components, wiring solutions, and safety equipment 
              for residential and commercial electrical installations.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Electrical Categories Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
          Our Electrical Products
        </Typography>
        <Grid container spacing={4}>
          {electricalCategories.map((category, index) => (
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
                      <ElectricalIcon />
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
                <ElectricBolt sx={{ mr: 2, verticalAlign: 'middle', color: theme.palette.primary.main }} />
                Trusted Electrical Brands
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                We stock electrical products from India's most trusted and certified brands.
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
            <Paper sx={{ p: 4, height: '100%', bgcolor: '#FFC107', color: 'black' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                <Settings sx={{ mr: 2, verticalAlign: 'middle' }} />
                Our Electrical Services
              </Typography>
              <List>
                {services.map((service, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'black' }} />
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
      <Box sx={{ bgcolor: alpha('#FFC107', 0.05), py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Why Choose Our Electrical Products?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#FFC107', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Security />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Safety Certified
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  All products are ISI marked and certified
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#FFC107', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Cable />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Quality Wiring
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Premium copper wires and cables
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#FFC107', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <Lightbulb />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Energy Efficient
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  LED and energy-saving solutions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#FFC107', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                  <PowerSettingsNew />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Complete Solutions
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Everything for electrical installations
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
            background: `linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)`,
            color: 'black',
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Need Electrical Solutions?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            Get expert electrical consultation and quality products at our Gurugram store
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'black',
                color: 'black',
                '&:hover': {
                  borderColor: 'black',
                  bgcolor: alpha('#000000', 0.1),
                },
                fontWeight: 600,
              }}
            >
              Get Electrical Consultation
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'black',
                color: '#FFC107',
                '&:hover': {
                  bgcolor: alpha('#000000', 0.8),
                },
                fontWeight: 600,
              }}
            >
              Explore Electrical Products
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Electricals;
