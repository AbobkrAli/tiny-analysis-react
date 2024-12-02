import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import UploadImageSection from './components/UploadImageSection';

const DashboardHome: React.FC = () => {
  const [isPrimaryLoading, setIsPrimaryLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPrimaryLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff', overflow: 'hidden', width:"100% "}}>
      {isPrimaryLoading ?  (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress size={60} />
        </Box>
      ) : (
        <UploadImageSection />
      )}
    </Box>
  );
};

export default DashboardHome;
