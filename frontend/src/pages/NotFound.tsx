/**
 * NotFound Page Component
 * Professional 404 error page with navigation options
 * Following industry standards for error handling and user experience
 */

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  alpha,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import {
  Home as HomeIcon,
  ArrowBack as BackIcon,
  Search as SearchIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { usePageTitle, PAGE_CONFIGS } from '../hooks/usePageTitle';
import OptimizedImage from '../components/common/OptimizedImage';

const NotFound: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  // Set page title
  usePageTitle('Page Not Found', 'The page you are looking for could not be found.');

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const popularPages = [
    { name: 'Paints', path: '/paints', icon: '🎨' },
    { name: 'Hardware', path: '/hardware', icon: '🔧' },
    { name: 'Sanitary', path: '/sanitary', icon: '🚿' },
    { name: 'Electricals', path: '/electricals', icon: '⚡' },
  ];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <OptimizedImage
          src="bros_enterprises_logo.jpg"
          alt="Bros Enterprises"
          sx={{
            width: { xs: 80, sm: 100 },
            height: { xs: 80, sm: 100 },
            borderRadius: '50%',
            mb: 3,
            border: `3px solid ${theme.palette.primary.main}`,
            boxShadow: theme.shadows[4],
          }}
        />

        {/* 404 Error */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
            fontWeight: 900,
            color: theme.palette.primary.main,
            textShadow: `2px 2px 4px ${alpha(theme.palette.primary.main, 0.3)}`,
            mb: 2,
            lineHeight: 0.8,
          }}
        >
          404
        </Typography>

        {/* Error Message */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4,
            maxWidth: 500,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.6,
          }}
        >
          Sorry, the page you are looking for doesn't exist or has been moved. 
          Let's get you back to finding the construction materials you need.
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 6 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            onClick={handleGoHome}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: theme.shadows[4],
              '&:hover': {
                boxShadow: theme.shadows[8],
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Go to Homepage
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<BackIcon />}
            onClick={handleGoBack}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Go Back
          </Button>
        </Stack>

        {/* Popular Pages */}
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 3,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            Or explore our popular categories:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              gap: 2,
            }}
          >
            {popularPages.map((page) => (
              <Card
                key={page.path}
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
                onClick={() => navigate(page.path)}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                    py: 3,
                    '&:last-child': { pb: 3 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      mb: 1,
                    }}
                  >
                    {page.icon}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {page.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Help Text */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mt: 4,
            fontSize: '0.9rem',
            fontStyle: 'italic',
          }}
        >
          Need help? Contact us for assistance with finding the right products.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
