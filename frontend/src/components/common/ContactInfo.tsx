/**
 * ContactInfo Component
 * Reusable contact information display component
 * Supports multiple layouts and responsive design
 * Following modern UX and accessibility standards
 */

import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Stack,
  Link,
  useTheme,
  useMediaQuery,
  Tooltip,
  alpha,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocalShipping as DeliveryIcon,
  Launch as ExternalLinkIcon,
  ContentCopy as CopyIcon,
} from '@mui/icons-material';
import { CONTACT_INFO, getClickablePhoneUrl, getClickableEmailUrl, getGoogleMapsUrl } from '../../constants/contactInfo';

interface ContactInfoProps {
  /**
   * Layout variant
   */
  variant?: 'compact' | 'detailed' | 'card' | 'inline';
  
  /**
   * Which information to show
   */
  showAddress?: boolean;
  showPhones?: boolean;
  showEmail?: boolean;
  showDelivery?: boolean;
  
  /**
   * Styling options
   */
  color?: 'primary' | 'secondary' | 'inherit';
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Interactive features
   */
  clickableLinks?: boolean;
  showCopyButtons?: boolean;
  
  /**
   * Custom styling
   */
  sx?: any;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  variant = 'detailed',
  showAddress = true,
  showPhones = true,
  showEmail = true,
  showDelivery = true,
  color = 'inherit',
  size = 'medium',
  clickableLinks = true,
  showCopyButtons = false,
  sx = {}
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  // Copy to clipboard functionality
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Could add toast notification here
      console.log(`${type} copied to clipboard: ${text}`);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  // Get responsive typography variants
  const getTypographyVariant = () => {
    if (size === 'small') return isXs ? 'caption' : 'body2';
    if (size === 'large') return isXs ? 'body1' : 'h6';
    return isXs ? 'body2' : 'body1';
  };

  // Get icon size
  const getIconSize = () => {
    if (size === 'small') return isXs ? 16 : 18;
    if (size === 'large') return isXs ? 24 : 28;
    return isXs ? 20 : 24;
  };

  // Get spacing
  const getSpacing = () => {
    if (size === 'small') return isXs ? 1 : 1.5;
    if (size === 'large') return isXs ? 2.5 : 3;
    return isXs ? 1.5 : 2;
  };

  const typographyVariant = getTypographyVariant();
  const iconSize = getIconSize();
  const spacing = getSpacing();

  // Render address
  const renderAddress = () => {
    if (!showAddress) return null;

    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: spacing }}>
        <LocationIcon 
          sx={{ 
            color: color === 'inherit' ? theme.palette.text.secondary : `${color}.main`,
            mr: 1.5,
            mt: 0.25,
            fontSize: iconSize
          }} 
        />
        <Box sx={{ flex: 1 }}>
          {clickableLinks ? (
            <Link
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  color: theme.palette.primary.main,
                  textDecoration: 'underline'
                }
              }}
            >
              <Typography variant={typographyVariant} sx={{ lineHeight: 1.5 }}>
                {CONTACT_INFO.address.formatted.line1}
              </Typography>
              <Typography variant={typographyVariant} sx={{ lineHeight: 1.5 }}>
                {CONTACT_INFO.address.formatted.line2}
              </Typography>
              <Typography variant={typographyVariant} sx={{ lineHeight: 1.5 }}>
                {CONTACT_INFO.address.formatted.line3}
              </Typography>
            </Link>
          ) : (
            <>
              <Typography variant={typographyVariant} sx={{ lineHeight: 1.5 }}>
                {CONTACT_INFO.address.formatted.line1}
              </Typography>
              <Typography variant={typographyVariant} sx={{ lineHeight: 1.5 }}>
                {CONTACT_INFO.address.formatted.line2}
              </Typography>
              <Typography variant={typographyVariant} sx={{ lineHeight: 1.5 }}>
                {CONTACT_INFO.address.formatted.line3}
              </Typography>
            </>
          )}
          {showCopyButtons && (
            <Tooltip title="Copy address">
              <IconButton
                size="small"
                onClick={() => copyToClipboard(CONTACT_INFO.address.full, 'Address')}
                sx={{ ml: -0.5, mt: 0.5 }}
              >
                <CopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>
    );
  };

  // Render phones
  const renderPhones = () => {
    if (!showPhones) return null;

    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: spacing }}>
        <PhoneIcon 
          sx={{ 
            color: color === 'inherit' ? theme.palette.text.secondary : `${color}.main`,
            mr: 1.5,
            mt: 0.25,
            fontSize: iconSize
          }} 
        />
        <Box sx={{ flex: 1 }}>
          {clickableLinks ? (
            <Stack direction={isXs ? 'column' : 'row'} spacing={isXs ? 0.5 : 2}>
              <Link
                href={getClickablePhoneUrl('primary')}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    textDecoration: 'underline'
                  }
                }}
              >
                <Typography variant={typographyVariant}>
                  {CONTACT_INFO.phones.display.primary}
                </Typography>
              </Link>
              <Link
                href={getClickablePhoneUrl('secondary')}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    textDecoration: 'underline'
                  }
                }}
              >
                <Typography variant={typographyVariant}>
                  {CONTACT_INFO.phones.display.secondary}
                </Typography>
              </Link>
            </Stack>
          ) : (
            <Stack direction={isXs ? 'column' : 'row'} spacing={isXs ? 0.5 : 2}>
              <Typography variant={typographyVariant}>
                {CONTACT_INFO.phones.display.primary}
              </Typography>
              <Typography variant={typographyVariant}>
                {CONTACT_INFO.phones.display.secondary}
              </Typography>
            </Stack>
          )}
        </Box>
      </Box>
    );
  };

  // Render email
  const renderEmail = () => {
    if (!showEmail) return null;

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', mb: spacing }}>
        <EmailIcon 
          sx={{ 
            color: color === 'inherit' ? theme.palette.text.secondary : `${color}.main`,
            mr: 1.5,
            fontSize: iconSize
          }} 
        />
        {clickableLinks ? (
          <Link
            href={getClickableEmailUrl()}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                color: theme.palette.primary.main,
                textDecoration: 'underline'
              }
            }}
          >
            <Typography variant={typographyVariant}>
              {CONTACT_INFO.email.display}
            </Typography>
          </Link>
        ) : (
          <Typography variant={typographyVariant}>
            {CONTACT_INFO.email.display}
          </Typography>
        )}
        {showCopyButtons && (
          <Tooltip title="Copy email">
            <IconButton
              size="small"
              onClick={() => copyToClipboard(CONTACT_INFO.email.primary, 'Email')}
              sx={{ ml: 1 }}
            >
              <CopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    );
  };

  // Render delivery info
  const renderDelivery = () => {
    if (!showDelivery || !CONTACT_INFO.services.homeDelivery.available) return null;

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', mb: spacing }}>
        <DeliveryIcon 
          sx={{ 
            color: theme.palette.success.main,
            mr: 1.5,
            fontSize: iconSize
          }} 
        />
        <Chip
          label={CONTACT_INFO.services.homeDelivery.text}
          size={size === 'small' ? 'small' : 'medium'}
          sx={{
            backgroundColor: alpha(theme.palette.success.main, 0.1),
            color: theme.palette.success.main,
            fontWeight: 600,
            '& .MuiChip-label': {
              fontSize: size === 'small' ? '0.7rem' : '0.8rem'
            }
          }}
        />
      </Box>
    );
  };

  // Render based on variant
  const renderContent = () => {
    switch (variant) {
      case 'compact':
        return (
          <Stack spacing={1}>
            {renderPhones()}
            {renderEmail()}
            {renderDelivery()}
          </Stack>
        );
      
      case 'inline':
        return (
          <Stack direction={isXs ? 'column' : 'row'} spacing={isXs ? 1 : 3} alignItems="flex-start">
            {showPhones && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1, fontSize: iconSize, color: `${color}.main` }} />
                <Typography variant={typographyVariant}>
                  {CONTACT_INFO.phones.display.primary}
                </Typography>
              </Box>
            )}
            {showEmail && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: iconSize, color: `${color}.main` }} />
                <Typography variant={typographyVariant}>
                  {CONTACT_INFO.email.display}
                </Typography>
              </Box>
            )}
            {renderDelivery()}
          </Stack>
        );
      
      case 'card':
        return (
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: theme.shadows[1],
              ...sx
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Contact Information
            </Typography>
            {renderAddress()}
            {renderPhones()}
            {renderEmail()}
            {renderDelivery()}
          </Box>
        );
      
      default: // detailed
        return (
          <>
            {renderAddress()}
            {renderPhones()}
            {renderEmail()}
            {renderDelivery()}
          </>
        );
    }
  };

  return (
    <Box sx={sx}>
      {renderContent()}
    </Box>
  );
};

export default ContactInfo;
