import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Chip,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  useTheme,
  alpha,
  Button,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  AccountBalance,
  ShowChart,
  AttachMoney,
  Analytics,
  MoreVert,
  Notifications,
  CheckCircle,
  Warning,
  Error,
  Info,
  Timeline,
  MonetizationOn,
  Speed,
  Security,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ComposedChart,
} from 'recharts';

// Sample trading data
const portfolioData = [
  { time: '09:15', value: 1000000, pnl: 0 },
  { time: '10:00', value: 1025000, pnl: 25000 },
  { time: '11:00', value: 1015000, pnl: 15000 },
  { time: '12:00', value: 1045000, pnl: 45000 },
  { time: '13:00', value: 1035000, pnl: 35000 },
  { time: '14:00', value: 1055000, pnl: 55000 },
  { time: '15:30', value: 1062500, pnl: 62500 },
];

const holdingsData = [
  { name: 'Equity', value: 65, amount: 650000, color: '#00D09C' },
  { name: 'Mutual Funds', value: 20, amount: 200000, color: '#42A5F5' },
  { name: 'Bonds', value: 10, amount: 100000, color: '#FFB74D' },
  { name: 'Cash', value: 5, amount: 50000, color: '#FF8A65' },
];

const topStocks = [
  { symbol: 'RELIANCE', ltp: 2456.75, change: +23.45, changePercent: +0.96, quantity: 50 },
  { symbol: 'TCS', ltp: 3234.20, change: -12.30, changePercent: -0.38, quantity: 30 },
  { symbol: 'INFY', ltp: 1456.80, change: +18.90, changePercent: +1.31, quantity: 75 },
  { symbol: 'HDFC', ltp: 1678.45, change: +8.75, changePercent: +0.52, quantity: 40 },
  { symbol: 'ICICIBANK', ltp: 987.60, change: -5.20, changePercent: -0.52, quantity: 100 },
];

const recentTrades = [
  {
    id: 1,
    type: 'BUY',
    symbol: 'RELIANCE',
    quantity: 10,
    price: 2456.75,
    time: '14:32',
    status: 'Executed',
  },
  {
    id: 2,
    type: 'SELL',
    symbol: 'TCS',
    quantity: 5,
    price: 3234.20,
    time: '13:45',
    status: 'Executed',
  },
  {
    id: 3,
    type: 'BUY',
    symbol: 'INFY',
    quantity: 25,
    price: 1456.80,
    time: '12:15',
    status: 'Pending',
  },
];

const StatCard: React.FC<{
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
}> = ({ title, value, change, trend, icon, color, subtitle }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography color="text.secondary" gutterBottom variant="body2" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 0.5 }}>
              {value}
            </Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                {subtitle}
              </Typography>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {trend === 'up' ? (
                <TrendingUp sx={{ color: theme.palette.success.main, fontSize: 20 }} />
              ) : (
                <TrendingDown sx={{ color: theme.palette.error.main, fontSize: 20 }} />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: trend === 'up' ? theme.palette.success.main : theme.palette.error.main,
                  fontWeight: 700,
                }}
              >
                {change}
              </Typography>
            </Box>
          </Box>
          <Avatar
            sx={{
              bgcolor: alpha(color, 0.1),
              color: color,
              width: 56,
              height: 56,
            }}
          >
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
};

export const TradingDashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
            Trading Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back! Here's your portfolio overview for today.
          </Typography>
        </Box>
        <Button variant="contained" sx={{ fontWeight: 600 }}>
          Start Trading
        </Button>
      </Box>

      {/* Portfolio Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Portfolio Value"
            value="₹10,62,500"
            change="+₹62,500 (6.25%)"
            trend="up"
            icon={<AccountBalance />}
            color={theme.palette.success.main}
            subtitle="Today's P&L"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Available Margin"
            value="₹2,45,000"
            change="+₹15,000"
            trend="up"
            icon={<MonetizationOn />}
            color={theme.palette.primary.main}
            subtitle="Cash + Collateral"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Returns"
            value="₹1,25,000"
            change="+14.2%"
            trend="up"
            icon={<TrendingUp />}
            color={theme.palette.success.main}
            subtitle="All time"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Positions"
            value="12"
            change="+2"
            trend="up"
            icon={<ShowChart />}
            color={theme.palette.info.main}
            subtitle="Open trades"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Portfolio Performance Chart */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
                  Portfolio Performance
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip label="1D" size="small" variant="outlined" />
                  <Chip label="1W" size="small" />
                  <Chip label="1M" size="small" variant="outlined" />
                  <Chip label="1Y" size="small" variant="outlined" />
                </Box>
              </Box>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={portfolioData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={theme.palette.success.main} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={theme.palette.success.main} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 8,
                        color: theme.palette.text.primary,
                      }}
                      formatter={(value: any, name: string) => [
                        name === 'value' ? `₹${value.toLocaleString()}` : `₹${value.toLocaleString()}`,
                        name === 'value' ? 'Portfolio Value' : 'P&L'
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={theme.palette.success.main}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Holdings Breakdown */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                Holdings Breakdown
              </Typography>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={holdingsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {holdingsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: any, name: string) => [`${value}%`, name]}
                      contentStyle={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 8,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box>
                {holdingsData.map((item) => (
                  <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        bgcolor: item.color,
                        borderRadius: '50%',
                        mr: 1.5,
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ₹{item.amount.toLocaleString()}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {item.value}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Holdings */}
        <Grid item xs={12} lg={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                Top Holdings
              </Typography>
              <Box>
                {topStocks.map((stock, index) => (
                  <Box key={stock.symbol}>
                    <Box sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          width: 40,
                          height: 40,
                          mr: 2,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        {stock.symbol.substring(0, 2)}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {stock.symbol}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Qty: {stock.quantity}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          ₹{stock.ltp.toLocaleString()}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: stock.change > 0 ? theme.palette.success.main : theme.palette.error.main,
                            fontWeight: 600,
                          }}
                        >
                          {stock.change > 0 ? '+' : ''}₹{stock.change} ({stock.changePercent > 0 ? '+' : ''}{stock.changePercent}%)
                        </Typography>
                      </Box>
                    </Box>
                    {index < topStocks.length - 1 && <Divider />}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Trades */}
        <Grid item xs={12} lg={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                Recent Trades
              </Typography>
              <List sx={{ p: 0 }}>
                {recentTrades.map((trade, index) => (
                  <React.Fragment key={trade.id}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            bgcolor: trade.type === 'BUY' ? alpha(theme.palette.success.main, 0.1) : alpha(theme.palette.error.main, 0.1),
                            color: trade.type === 'BUY' ? theme.palette.success.main : theme.palette.error.main,
                            width: 40,
                            height: 40,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                          }}
                        >
                          {trade.type}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                              {trade.symbol}
                            </Typography>
                            <Chip
                              label={trade.status}
                              size="small"
                              color={trade.status === 'Executed' ? 'success' : 'warning'}
                              variant="outlined"
                            />
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              Qty: {trade.quantity} @ ₹{trade.price}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ ml: 2 }}>
                              {trade.time}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < recentTrades.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TradingDashboard;
