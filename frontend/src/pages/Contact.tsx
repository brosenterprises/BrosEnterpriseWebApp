import React, { useState } from 'react';
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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  useMediaQuery,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Schedule,
  Send,
  Business,
  DirectionsCar,
  Map,
} from '@mui/icons-material';
import { usePageTitle, PAGE_CONFIGS } from '../hooks/usePageTitle';
import ContactInfo from '../components/common/ContactInfo';
import { CONTACT_INFO, getGoogleMapsUrl } from '../constants/contactInfo';

export const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Set up page SEO (static title)
  usePageTitle(PAGE_CONFIGS.contact);
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: { xs: 4, sm: 6 },
          mb: { xs: 3, sm: 4, md: 6 },
          borderRadius: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: { xs: 60, sm: 80 },
                height: { xs: 60, sm: 80 },
                mx: 'auto',
                mb: { xs: 2, sm: 3 },
              }}
            >
              <Phone sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
            </Avatar>
            <Typography 
              variant={isSmallMobile ? "h4" : "h3"} 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Contact Bros Enterprises
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary', 
                maxWidth: 600, 
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Get in touch with us for all your building material needs. 
              We're here to help with expert advice and quality products.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: { xs: 6, sm: 8 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: '1.5rem', sm: '2rem' }
              }}
            >
              Get In Touch
            </Typography>

            {/* Complete Contact Information */}
            <ContactInfo
              variant="card"
              showAddress={true}
              showPhones={true}
              showEmail={true}
              showDelivery={true}
              clickableLinks={true}
              showCopyButtons={true}
              color="primary"
              size="large"
              sx={{ mb: { xs: 3, sm: 4 } }}
            />

            {/* Business Hours */}
            <Paper sx={{ p: { xs: 3, sm: 4 }, mb: { xs: 3, sm: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
                <Avatar sx={{ bgcolor: theme.palette.success.main, mr: 2 }}>
                  <Schedule />
                </Avatar>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Business Hours
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                {CONTACT_INFO.businessHours.display}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.disabled', 
                  mt: 1,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' }
                }}
              >
                Sunday: Closed
              </Typography>
            </Paper>

            {/* Quick Actions */}
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                variant="outlined"
                startIcon={<Map />}
                onClick={() => window.open(getGoogleMapsUrl(), '_blank')}
                sx={{ 
                  fontWeight: 600,
                  py: { xs: 1.5, sm: 1 },
                  fontSize: { xs: '0.9rem', sm: '0.875rem' },
                  flex: 1
                }}
                fullWidth={isSmallMobile}
              >
                Get Directions
              </Button>
              <Button
                variant="contained"
                startIcon={<Phone />}
                href={`tel:+91${CONTACT_INFO.phones.primary}`}
                sx={{ 
                  fontWeight: 600,
                  py: { xs: 1.5, sm: 1 },
                  fontSize: { xs: '0.9rem', sm: '0.875rem' },
                  flex: 1
                }}
              >
                Call Now
              </Button>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: { xs: 3, sm: 4 } }}>
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
                Send Us a Message
              </Typography>

              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={{ xs: 2, sm: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      size={isMobile ? "medium" : "medium"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      size={isMobile ? "medium" : "medium"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      size={isMobile ? "medium" : "medium"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth size={isMobile ? "medium" : "medium"}>
                      <InputLabel>Subject</InputLabel>
                      <Select
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        label="Subject"
                        required
                      >
                        <MenuItem value="paints">Paints Inquiry</MenuItem>
                        <MenuItem value="hardware">Hardware Products</MenuItem>
                        <MenuItem value="sanitary">Sanitary Ware</MenuItem>
                        <MenuItem value="electrical">Electrical Products</MenuItem>
                        <MenuItem value="bulk">Bulk Order</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={isMobile ? 3 : 4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      required
                      size={isMobile ? "medium" : "medium"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{ 
                        fontWeight: 600,
                        py: { xs: 1.5, sm: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Additional Info Section */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05), py: { xs: 6, sm: 8 } }}>
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
            Why Visit Bros Enterprises?
          </Typography>
          <Grid container spacing={{ xs: 3, sm: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.primary.main, 
                  width: { xs: 60, sm: 70 }, 
                  height: { xs: 60, sm: 70 }, 
                  mx: 'auto', 
                  mb: 2 
                }}>
                  <Business />
                </Avatar>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  One-Stop Shop
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.85rem', sm: '0.875rem' }
                  }}
                >
                  Everything you need under one roof
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.primary.main, 
                  width: { xs: 60, sm: 70 }, 
                  height: { xs: 60, sm: 70 }, 
                  mx: 'auto', 
                  mb: 2 
                }}>
                  <DirectionsCar />
                </Avatar>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Easy Access
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.85rem', sm: '0.875rem' }
                  }}
                >
                  Convenient location with parking
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.primary.main, 
                  width: { xs: 60, sm: 70 }, 
                  height: { xs: 60, sm: 70 }, 
                  mx: 'auto', 
                  mb: 2 
                }}>
                  <Phone />
                </Avatar>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Expert Advice
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.85rem', sm: '0.875rem' }
                  }}
                >
                  Professional guidance from our team
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.primary.main, 
                  width: { xs: 60, sm: 70 }, 
                  height: { xs: 60, sm: 70 }, 
                  mx: 'auto', 
                  mb: 2 
                }}>
                  <Schedule />
                </Avatar>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Flexible Hours
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.85rem', sm: '0.875rem' }
                  }}
                >
                  Open 6 days a week for your convenience
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
