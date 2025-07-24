import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Paper,
  useTheme,
  alpha,
  Avatar,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Business,
  Groups,
  Verified,
  LocalShipping,
  SupportAgent,
  Star,
  LocationOn,
  Schedule,
  Phone,
} from '@mui/icons-material';

const values = [
  {
    icon: <Verified />,
    title: 'Quality Assurance',
    description: 'We ensure all our products meet the highest quality standards and are sourced from trusted manufacturers.',
  },
  {
    icon: <SupportAgent />,
    title: 'Customer Service',
    description: 'Our experienced team provides expert guidance and support to help you make the right choices.',
  },
  {
    icon: <LocalShipping />,
    title: 'Reliable Delivery',
    description: 'Fast and reliable delivery services across Gurugram and surrounding areas.',
  },
  {
    icon: <Star />,
    title: 'Trusted Brand',
    description: 'Years of experience serving customers with integrity and building lasting relationships.',
  },
];

const milestones = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'Bros Enterprises was established in Gurugram with a vision to provide quality building materials.',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded our product range to include premium paints, hardware, and sanitary ware.',
  },
  {
    year: '2018',
    title: 'Electrical Division',
    description: 'Added trusted electrical products and components to serve complete construction needs.',
  },
  {
    year: '2023',
    title: 'Digital Presence',
    description: 'Launched our digital platform to better serve customers and showcase our products.',
  },
];

export const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: 8,
          mb: 6,
          borderRadius: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: 100,
                height: 100,
                mx: 'auto',
                mb: 3,
                fontSize: '2.5rem',
                fontWeight: 'bold',
              }}
            >
              BE
            </Avatar>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              About Bros Enterprises
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
              Your trusted partner for high-quality paints, durable hardware, modern sanitary ware, 
              and reliable electrical products in Gurugram.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
              Bros Enterprises was founded with a simple mission: to provide high-quality building materials 
              and exceptional service to customers in Gurugram and surrounding areas. What started as a small 
              hardware store has grown into a comprehensive one-stop destination for all construction and 
              renovation needs.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
              Over the years, we have built strong relationships with leading manufacturers and suppliers, 
              ensuring that our customers always have access to the latest products and technologies. 
              Our commitment to quality, competitive pricing, and customer satisfaction has made us a 
              trusted name in the industry.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
              Today, Bros Enterprises continues to serve contractors, builders, and homeowners with the 
              same dedication and expertise that has defined us from the beginning.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                bgcolor: theme.palette.primary.main,
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Business sx={{ fontSize: '4rem', mb: 2 }} />
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                Serving Gurugram
              </Typography>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Since 2010
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Located in the heart of Gurugram, we have been proudly serving the construction 
                and renovation needs of our community for over a decade.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05), py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <CardContent>
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        width: 70,
                        height: 70,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
          Our Journey
        </Typography>
        <Timeline position="alternate">
          {milestones.map((milestone, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 700 }}>
                    {milestone.year}
                  </Typography>
                </TimelineDot>
                {index < milestones.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {milestone.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>

      {/* Contact Info Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                <LocationOn />
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Visit Our Store
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Located in the heart of Gurugram<br />
                Easy to find and accessible
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                <Schedule />
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Store Hours
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Monday - Saturday<br />
                9:00 AM - 8:00 PM
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                <Phone />
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Call us for inquiries<br />
                and bulk orders
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
