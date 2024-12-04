import { Box, Typography } from '@mui/material';
import React from 'react';
import DashboardDetailsSection from '../../../landing/components/DashboardDetailsSection';

const RegionDetailsPage = ({ regionId }: { regionId: string }) => {
  return (
    <Box>
      <Typography variant="h1" sx={{marginBottom: '50px', color: 'primary.main'}}>Region Details</Typography>
      <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr', // One item per row on small screens
          md: 'repeat(2, 1fr)', // Two items per row on medium and larger screens
        },
        gap: 2, // Spacing between grid items
      }}
    >
      <DashboardDetailsSection />
      <DashboardDetailsSection />
      <DashboardDetailsSection />
      <DashboardDetailsSection />
      <DashboardDetailsSection />
    </Box>
    </Box>
    
  );
};

export default RegionDetailsPage;
