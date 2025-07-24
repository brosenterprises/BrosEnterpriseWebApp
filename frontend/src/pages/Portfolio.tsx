import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  useTheme,
  alpha,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  MoreVert,
  Add,
  Remove,
  ShowChart,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const portfolioData = [
  {
    symbol: 'RELIANCE',
    company: 'Reliance Industries Ltd.',
    quantity: 50,
    avgPrice: 2400.00,
    ltp: 2456.75,
    currentValue: 122837.50,
    pnl: 2837.50,
    pnlPercent: 2.36,
    dayChange: 23.45,
    dayChangePercent: 0.96,
  },
  {
    symbol: 'TCS',
    company: 'Tata Consultancy Services',
    quantity: 30,
    avgPrice: 3250.00,
    ltp: 3234.20,
    currentValue: 97026.00,
    pnl: -474.00,
    pnlPercent: -0.49,
    dayChange: -12.30,
    dayChangePercent: -0.38,
  },
  {
    symbol: 'INFY',
    company: 'Infosys Limited',
    quantity: 75,
    avgPrice: 1420.00,
    ltp: 1456.80,
    currentValue: 109260.00,
    pnl: 2760.00,
    pnlPercent: 2.59,
    dayChange: 18.90,
    dayChangePercent: 1.31,
  },
  {
    symbol: 'HDFC',
    company: 'HDFC Bank Limited',
    quantity: 40,
    avgPrice: 1650.00,
    ltp: 1678.45,
    currentValue: 67138.00,
    pnl: 1138.00,
    pnlPercent: 1.72,
    dayChange: 8.75,
    dayChangePercent: 0.52,
  },
  {
    symbol: 'ICICIBANK',
    company: 'ICICI Bank Limited',
    quantity: 100,
    avgPrice: 995.00,
    ltp: 987.60,
    currentValue: 98760.00,
    pnl: -740.00,
    pnlPercent: -0.74,
    dayChange: -5.20,
    dayChangePercent: -0.52,
  },
];

export const Portfolio: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedStock, setSelectedStock] = useState<string>('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, symbol: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedStock(symbol);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedStock('');
  };

  const totalInvestment = portfolioData.reduce((sum, stock) => sum + (stock.avgPrice * stock.quantity), 0);
  const totalCurrentValue = portfolioData.reduce((sum, stock) => sum + stock.currentValue, 0);
  const totalPnL = totalCurrentValue - totalInvestment;
  const totalPnLPercent = (totalPnL / totalInvestment) * 100;
  const todaysPnL = portfolioData.reduce((sum, stock) => sum + (stock.dayChange * stock.quantity), 0);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Portfolio
        </Typography>
        <Button variant="contained" startIcon={<Add />} sx={{ fontWeight: 600 }}>
          Buy Stocks
        </Button>
      </Box>

      {/* Portfolio Summary */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                Current Value
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, my: 1 }}>
                ₹{totalCurrentValue.toLocaleString()}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {totalPnL >= 0 ? (
                  <TrendingUp sx={{ color: theme.palette.success.main, fontSize: 20 }} />
                ) : (
                  <TrendingDown sx={{ color: theme.palette.error.main, fontSize: 20 }} />
                )}
                <Typography
                  variant="body2"
                  sx={{
                    color: totalPnL >= 0 ? theme.palette.success.main : theme.palette.error.main,
                    fontWeight: 700,
                  }}
                >
                  {totalPnL >= 0 ? '+' : ''}₹{totalPnL.toLocaleString()} ({totalPnL >= 0 ? '+' : ''}{totalPnLPercent.toFixed(2)}%)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                Invested Amount
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, my: 1 }}>
                ₹{totalInvestment.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total invested capital
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                Today's P&L
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, my: 1 }}>
                {todaysPnL >= 0 ? '+' : ''}₹{todaysPnL.toLocaleString()}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: todaysPnL >= 0 ? theme.palette.success.main : theme.palette.error.main,
                  fontWeight: 600,
                }}
              >
                Day's change
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                Total Stocks
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, my: 1 }}>
                {portfolioData.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active positions
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Portfolio Tabs */}
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Holdings" />
            <Tab label="Positions" />
            <Tab label="Orders" />
          </Tabs>
        </Box>

        <CardContent sx={{ p: 0 }}>
          <TabPanel value={tabValue} index={0}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Stock</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>Qty</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>Avg Price</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>LTP</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>Current Value</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>P&L</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>Day Change</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {portfolioData.map((stock) => (
                    <TableRow key={stock.symbol} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar
                            sx={{
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                              width: 40,
                              height: 40,
                              fontSize: '0.75rem',
                              fontWeight: 700,
                            }}
                          >
                            {stock.symbol.substring(0, 2)}
                          </Avatar>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                              {stock.symbol}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {stock.company}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {stock.quantity}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2">
                          ₹{stock.avgPrice.toFixed(2)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          ₹{stock.ltp.toFixed(2)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          ₹{stock.currentValue.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: stock.pnl >= 0 ? theme.palette.success.main : theme.palette.error.main,
                              fontWeight: 700,
                            }}
                          >
                            {stock.pnl >= 0 ? '+' : ''}₹{stock.pnl.toLocaleString()}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: stock.pnl >= 0 ? theme.palette.success.main : theme.palette.error.main,
                              fontWeight: 600,
                            }}
                          >
                            ({stock.pnl >= 0 ? '+' : ''}{stock.pnlPercent.toFixed(2)}%)
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: stock.dayChange >= 0 ? theme.palette.success.main : theme.palette.error.main,
                              fontWeight: 700,
                            }}
                          >
                            {stock.dayChange >= 0 ? '+' : ''}₹{stock.dayChange.toFixed(2)}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: stock.dayChange >= 0 ? theme.palette.success.main : theme.palette.error.main,
                              fontWeight: 600,
                            }}
                          >
                            ({stock.dayChange >= 0 ? '+' : ''}{stock.dayChangePercent.toFixed(2)}%)
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={(e) => handleMenuOpen(e, stock.symbol)}
                          size="small"
                        >
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                No active positions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Your intraday positions will appear here
              </Typography>
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                No recent orders
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Your order history will appear here
              </Typography>
            </Box>
          </TabPanel>
        </CardContent>
      </Card>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Add sx={{ mr: 1 }} />
          Buy More
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Remove sx={{ mr: 1 }} />
          Sell
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ShowChart sx={{ mr: 1 }} />
          View Chart
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Portfolio;
