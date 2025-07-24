import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Timeline,
  PieChart,
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
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ComposedChart,
  Legend,
} from 'recharts';

// Sample data
const monthlyData = [
  { month: 'Jan', revenue: 45000, users: 1200, orders: 890 },
  { month: 'Feb', revenue: 52000, users: 1350, orders: 1020 },
  { month: 'Mar', revenue: 48000, users: 1280, orders: 950 },
  { month: 'Apr', revenue: 61000, users: 1450, orders: 1180 },
  { month: 'May', revenue: 55000, users: 1380, orders: 1050 },
  { month: 'Jun', revenue: 67000, users: 1520, orders: 1290 },
];

const trafficSources = [
  { name: 'Organic Search', value: 45, color: '#1976d2' },
  { name: 'Direct', value: 25, color: '#dc004e' },
  { name: 'Social Media', value: 15, color: '#4caf50' },
  { name: 'Email', value: 10, color: '#ff9800' },
  { name: 'Referral', value: 5, color: '#9c27b0' },
];

const conversionData = [
  { stage: 'Visitors', value: 10000, conversion: 100 },
  { stage: 'Leads', value: 3000, conversion: 30 },
  { stage: 'Prospects', value: 1200, conversion: 12 },
  { stage: 'Customers', value: 300, conversion: 3 },
];

const MetricCard: React.FC<{
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, change, trend, icon, color }) => {
  const theme = useTheme();
  
  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: alpha(color, 0.1),
            color: color,
          }}
        >
          {icon}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {trend === 'up' ? (
            <TrendingUp sx={{ color: theme.palette.success.main, fontSize: 20 }} />
          ) : (
            <TrendingDown sx={{ color: theme.palette.error.main, fontSize: 20 }} />
          )}
          <Typography
            variant="body2"
            sx={{
              color: trend === 'up' ? theme.palette.success.main : theme.palette.error.main,
              fontWeight: 600,
            }}
          >
            {change}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 0.5 }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
    </Paper>
  );
};

export const Analytics: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState(0);
  const [timeRange, setTimeRange] = React.useState('6months');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Analytics Dashboard
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Time Range</InputLabel>
          <Select
            value={timeRange}
            label="Time Range"
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <MenuItem value="7days">Last 7 days</MenuItem>
            <MenuItem value="30days">Last 30 days</MenuItem>
            <MenuItem value="3months">Last 3 months</MenuItem>
            <MenuItem value="6months">Last 6 months</MenuItem>
            <MenuItem value="1year">Last year</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Revenue"
            value="$328,000"
            change="+15.3%"
            trend="up"
            icon={<TrendingUp />}
            color={theme.palette.success.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Page Views"
            value="2.4M"
            change="+8.7%"
            trend="up"
            icon={<Timeline />}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Conversion Rate"
            value="3.24%"
            change="-2.1%"
            trend="down"
            icon={<PieChart />}
            color={theme.palette.warning.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Avg. Session"
            value="4m 32s"
            change="+12.5%"
            trend="up"
            icon={<Timeline />}
            color={theme.palette.info.main}
          />
        </Grid>
      </Grid>

      {/* Tabs for different analytics views */}
      <Card sx={{ mb: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Revenue & Users" />
            <Tab label="Traffic Sources" />
            <Tab label="Conversion Funnel" />
          </Tabs>
        </Box>
        <CardContent>
          {tabValue === 0 && (
            <Box sx={{ height: 400 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Revenue and User Growth
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                  <XAxis dataKey="month" stroke={theme.palette.text.secondary} />
                  <YAxis yAxisId="left" stroke={theme.palette.text.secondary} />
                  <YAxis yAxisId="right" orientation="right" stroke={theme.palette.text.secondary} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 8,
                    }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="revenue" fill={theme.palette.primary.main} name="Revenue ($)" />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="users"
                    stroke={theme.palette.secondary.main}
                    strokeWidth={3}
                    name="Users"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </Box>
          )}
          
          {tabValue === 1 && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Traffic Sources
                </Typography>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Source Breakdown
                </Typography>
                <Box>
                  {trafficSources.map((source) => (
                    <Box key={source.name} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 16,
                          height: 16,
                          bgcolor: source.color,
                          borderRadius: '50%',
                          mr: 2,
                        }}
                      />
                      <Typography variant="body2" sx={{ flexGrow: 1 }}>
                        {source.name}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {source.value}%
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          )}
          
          {tabValue === 2 && (
            <Box sx={{ height: 400 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Conversion Funnel
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                  <XAxis type="number" stroke={theme.palette.text.secondary} />
                  <YAxis dataKey="stage" type="category" stroke={theme.palette.text.secondary} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 8,
                    }}
                  />
                  <Bar dataKey="value" fill={theme.palette.primary.main} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Additional Analytics Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Top Performing Pages
              </Typography>
              <Box>
                {[
                  { page: '/dashboard', views: '45,231', bounce: '23%' },
                  { page: '/products', views: '32,891', bounce: '31%' },
                  { page: '/about', views: '28,456', bounce: '18%' },
                  { page: '/contact', views: '19,234', bounce: '42%' },
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="body2">{item.page}</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item.views}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.bounce} bounce
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Geographic Distribution
              </Typography>
              <Box>
                {[
                  { country: 'United States', percentage: 45, users: '12,456' },
                  { country: 'United Kingdom', percentage: 18, users: '4,892' },
                  { country: 'Canada', percentage: 12, users: '3,234' },
                  { country: 'Germany', percentage: 8, users: '2,156' },
                  { country: 'France', percentage: 6, users: '1,623' },
                ].map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{item.country}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item.users}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        height: 6,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        borderRadius: 3,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: `${item.percentage}%`,
                          height: '100%',
                          bgcolor: theme.palette.primary.main,
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
