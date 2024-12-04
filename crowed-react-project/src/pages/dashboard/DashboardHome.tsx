import React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { AnalyticsOutlined, History, HomeMax } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import './style/dashboardStyles.css';
import DashboardHome from './dashboardHome/DashboardHome';
import DashboardHistory from './dashboardHistory/DashboardHistory';
import RegionDetailsPage from './dashboardHome/components/RegionDetailsPage';

const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#5a528b',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#f4f4f4',
      paper: '#fff',
    },
  },
  colorSchemes: { light: true, dark: false },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Custom Content based on Route Pathname
function DemoPageContent({ pathname, navigate }: { pathname: string; navigate: (path: string) => void }) {
  // Match dynamic region route
  const match = pathname.match(/^\/region\/(.+)$/);
  const regionId = match ? match[1] : null;

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        padding: 3,
      }}
    >
      {pathname === '/home' ? (
        <>
          <DashboardHome navigate={navigate} />
        </>
      ) : pathname === '/history' ? (
        <DashboardHistory />
      ) : regionId ? (
        <RegionDetailsPage regionId={regionId} />
      ) : (
        <Typography variant="h1">Page Not Found</Typography>
      )}
    </Box>
  );
}

interface DemoProps {
  window?: () => Window;
}

export function DashboardLayoutNavigationActions(props: DemoProps) {
  const { window } = props;

  // Initialize router with default route
  const router = useDemoRouter('/home');

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={[
        {
          segment: 'home',
          title: 'Home',
          icon: <HomeMax />,
        },
        {
          segment: 'analytics',
          title: 'Analytics',
          icon: <AnalyticsOutlined />,
          children: [
            {
              segment: 'headcounting',
              title: 'head counting',
              icon: <AnalyticsOutlined />,
            },
            {
              segment: 'heatmap',
              title: 'heat map',
              icon: <AnalyticsOutlined />,
            },
            {
              segment: 'graphanalysis',
              title: 'graph analysis',
              icon: <AnalyticsOutlined />,
            },
          ],
        },
        {
          segment: 'history',
          title: 'History',
          icon: <History />,
        },
        { kind: 'divider' },
      ]}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <img src="/logo.png" alt="Logo" />,
        title: '',
      }}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} navigate={router.navigate} />
      </DashboardLayout>
    </AppProvider>
  );
}
