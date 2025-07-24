import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
  Box,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useTheme,
  alpha,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import {
  Home as HomeIcon,
  Palette as PaletteIcon,
  Build as BuildIcon,
  Bathtub as BathtubIcon,
  ElectricalServices as ElectricalIcon,
  Phone,
  WhatsApp,
  LocationOn,
  Email,
  Store,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

interface MobileNavigationProps {
  onMenuToggle?: () => void;
  showBottomNav?: boolean;
  showSpeedDial?: boolean;
}

interface NavItem {
  label: string;
  value: string;
  icon: React.ReactElement;
  path: string;
  badge?: number;
  color?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    value: 'home',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    label: 'Paints',
    value: 'paints',
    icon: <PaletteIcon />,
    path: '/paints',
    color: '#FF6B35',
  },
  {
    label: 'Hardware',
    value: 'hardware',
    icon: <BuildIcon />,
    path: '/hardware',
    color: '#795548',
  },
  {
    label: 'Sanitary',
    value: 'sanitary',
    icon: <BathtubIcon />,
    path: '/sanitary',
    color: '#2196F3',
  },
  {
    label: 'Electrical',
    value: 'electrical',
    icon: <ElectricalIcon />,
    path: '/electricals',
    color: '#FFC107',
  },
];

const speedDialActions = [
  {
    icon: <Phone />,
    name: 'Call Store',
    action: () => window.open('tel:+91', '_self'),
    color: '#4CAF50',
  },
  {
    icon: <WhatsApp />,
    name: 'WhatsApp',
    action: () => window.open('https://wa.me/91', '_blank'),
    color: '#25D366',
  },
  {
    icon: <LocationOn />,
    name: 'Location',
    action: () => window.open('/contact', '_self'),
    color: '#FF6B35',
  },
  {
    icon: <Email />,
    name: 'Email',
    action: () => window.open('mailto:info@brosenterprises.com', '_self'),
    color: '#2196F3',
  },
];

// Hide bottom navigation on scroll
interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onMenuToggle,
  showBottomNav = true,
  showSpeedDial = true,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  const currentPath = location.pathname;
  const currentNavValue = navItems.find(item => item.path === currentPath)?.value || 'home';

  const handleNavigationChange = (event: React.SyntheticEvent, newValue: string) => {
    const navItem = navItems.find(item => item.value === newValue);
    if (navItem) {
      navigate(navItem.path);
    }
  };

  const handleSpeedDialToggle = () => {
    setSpeedDialOpen(!speedDialOpen);
  };

  const handleSpeedDialClose = () => {
    setSpeedDialOpen(false);
  };

  const handleSpeedDialOpen = () => {
    setSpeedDialOpen(true);
  };

  return (
    <>
      {/* Bottom Navigation */}
      {showBottomNav && (
        <HideOnScroll>
          <Paper
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              borderTop: `1px solid ${theme.palette.divider}`,
              backdropFilter: 'blur(8px)',
              backgroundColor: alpha(theme.palette.background.paper, 0.95),
            }}
            elevation={8}
          >
            <BottomNavigation
              value={currentNavValue}
              onChange={handleNavigationChange}
              sx={{
                height: 64,
                '& .MuiBottomNavigationAction-root': {
                  minWidth: 'auto',
                  padding: '6px 12px 8px',
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                    '& .MuiBottomNavigationAction-label': {
                      fontSize: '0.7rem',
                      fontWeight: 600,
                    },
                  },
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    marginTop: 2,
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.3rem',
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <BottomNavigationAction
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  icon={
                    item.badge ? (
                      <Badge badgeContent={item.badge} color="error">
                        {React.cloneElement(item.icon, {
                          sx: { color: currentNavValue === item.value ? item.color : 'inherit' }
                        })}
                      </Badge>
                    ) : (
                      React.cloneElement(item.icon, {
                        sx: { color: currentNavValue === item.value ? item.color : 'inherit' }
                      })
                    )
                  }
                  sx={{
                    '&.Mui-selected': {
                      color: item.color || theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </BottomNavigation>
          </Paper>
        </HideOnScroll>
      )}

      {/* Speed Dial for Quick Actions */}
      {showSpeedDial && (
        <SpeedDial
          ariaLabel="Quick Actions"
          sx={{
            position: 'fixed',
            bottom: showBottomNav ? 80 : 16,
            right: 16,
            zIndex: 1001,
            '& .MuiSpeedDial-fab': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                transform: 'scale(1.05)',
              },
            },
            '& .MuiSpeedDialAction-fab': {
              margin: '4px 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
          }}
          icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<CloseIcon />} />}
          onClose={handleSpeedDialClose}
          onOpen={handleSpeedDialOpen}
          open={speedDialOpen}
          direction="up"
        >
          {speedDialActions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={React.cloneElement(action.icon, {
                sx: { color: action.color }
              })}
              tooltipTitle={action.name}
              onClick={() => {
                action.action();
                handleSpeedDialClose();
              }}
              sx={{
                '& .MuiSpeedDialAction-fab': {
                  backgroundColor: alpha(action.color, 0.1),
                  '&:hover': {
                    backgroundColor: alpha(action.color, 0.2),
                    transform: 'scale(1.1)',
                  },
                },
              }}
            />
          ))}
        </SpeedDial>
      )}

      {/* Floating Call Button (Alternative to Speed Dial) */}
      {!showSpeedDial && (
        <Fab
          color="primary"
          aria-label="call"
          sx={{
            position: 'fixed',
            bottom: showBottomNav ? 80 : 16,
            right: 16,
            zIndex: 1001,
            boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)',
            '&:hover': {
              boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
              transform: 'scale(1.05)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
          }}
          href="tel:+91"
        >
          <Phone />
        </Fab>
      )}

      {/* Safe area padding for devices with home indicator */}
      <Box
        sx={{
          height: 'env(safe-area-inset-bottom)',
          backgroundColor: theme.palette.background.paper,
          position: 'fixed',
          bottom: showBottomNav ? 64 : 0,
          left: 0,
          right: 0,
          zIndex: 999,
        }}
      />
    </>
  );
};

export default MobileNavigation;
