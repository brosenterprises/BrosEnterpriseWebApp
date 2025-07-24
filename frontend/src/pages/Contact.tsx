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

export const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

            {/* Store Location */}
            <Paper sx={{ p: { xs: 3, sm: 4 }, mb: { xs: 3, sm: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
                <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                  <LocationOn />
                </Avatar>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Store Location
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                Bros Enterprises<br />
                Located in the heart of Gurugram<br />
                Haryana, India
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Map />}
                sx={{ 
                  fontWeight: 600,
                  py: { xs: 1.5, sm: 1 },
                  fontSize: { xs: '0.9rem', sm: '0.875rem' }
                }}
                fullWidth={isSmallMobile}
              >
                Get Directions
              </Button>
            </Paper>

            {/* Contact Details */}
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ textAlign: 'center', p: { xs: 2, sm: 3 }, height: '100%' }}>
                  <Avatar sx={{ 
                    bgcolor: theme.palette.primary.main, 
                    width: { xs: 50, sm: 60 }, 
                    height: { xs: 50, sm: 60 }, 
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
                      fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}
                  >
                    Call Us
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: { xs: '0.8rem', sm: '0.875rem' }
                    }}
                  >
                    For inquiries and orders
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      mt: 2, 
                      fontWeight: 600,
                      py: { xs: 1.5, sm: 1 },
                      fontSize: { xs: '0.85rem', sm: '0.875rem' }
                    }}
                    fullWidth
                    href="tel:+91"
                  >
                    Call Now
                  </Button>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ textAlign: 'center', p: { xs: 2, sm: 3 }, height: '100%' }}>
                  <Avatar sx={{ 
                    bgcolor: theme.palette.secondary.main, 
                    width: { xs: 50, sm: 60 }, 
                    height: { xs: 50, sm: 60 }, 
                    mx: 'auto', 
                    mb: 2 
                  }}>
                    <Email />
                  </Avatar>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}
                  >
                    Email Us
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: { xs: '0.8rem', sm: '0.875rem' }
                    }}
                  >
                    Send us your queries
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    sx={{ 
                      mt: 2, 
                      fontWeight: 600,
                      py: { xs: 1.5, sm: 1 },
                      fontSize: { xs: '0.85rem', sm: '0.875rem' }
                    }}
                    fullWidth
                    href="mailto:info@brosenterprises.com"
                  >
                    Send Email
                  </Button>
                </Card>
              </Grid>
            </Grid>

            {/* Store Hours */}
            <Paper sx={{ 
              p: { xs: 3, sm: 4 }, 
              mt: { xs: 3, sm: 4 }, 
              bgcolor: theme.palette.primary.main, 
              color: 'white' 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
                <Avatar sx={{ bgcolor: 'white', color: theme.palette.primary.main, mr: 2 }}>
                  <Schedule />
                </Avatar>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Store Hours
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 1,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                <strong>Monday - Saturday:</strong> 9:00 AM - 8:00 PM
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                <strong>Sunday:</strong> Closed
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  lineHeight: 1.5
                }}
              >
                Visit us during business hours for the best service and product selection.
              </Typography>
            </Paper>
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
